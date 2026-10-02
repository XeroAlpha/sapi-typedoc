import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import type { ts } from 'ts-morph';
import { basePath, git } from '../utils.js';
import type { Hook } from './hook.js';

const cacheDir = resolvePath(basePath, 'cache', 'net-packet-ids');
const protocolDocsBase = 'bedrock-protocol-docs';
const protocolDocsRepo = 'https://github.com/Mojang/bedrock-protocol-docs.git';
const protocolDocsRepoEnv = 'SAPI_PROTOCOL_DOCS_REPO';

interface ProtocolDocJSON {
    title: string;
    $metaProperties?: {
        '[cereal:packet_details]'?: string;
    };
}

/**
 * 把 bedrock-protocol-docs 放到 cache/net-packet-ids/bedrock-protocol-docs。
 *
 * 外部仓库只是补充性文档：拿不到时降级为「无 packet_details 注记」，而不是让整个 build 失败
 * （此前 `git clone` / `git pull` 抛错会直接中断构建）。
 * 可用 SAPI_PROTOCOL_DOCS_REPO 指向镜像/fork。
 */
function ensureProtocolDocs(): void {
    const repoDir = resolvePath(cacheDir, protocolDocsBase);
    if (existsSync(resolvePath(repoDir, '.git'))) {
        try {
            git('pull --force', { cwd: repoDir, stdio: 'pipe' });
        } catch (e) {
            console.warn(`[net-packet-ids] git pull 失败，继续使用已有缓存：${reason(e)}`);
        }
        return;
    }

    const cloneUrl = process.env[protocolDocsRepoEnv]?.trim() || protocolDocsRepo;
    try {
        git(`clone ${cloneUrl} ${protocolDocsBase} --depth 1`, { cwd: cacheDir, stdio: 'pipe' });
    } catch (e) {
        console.warn(`[net-packet-ids] git clone ${cloneUrl} 失败：${reason(e)}`);
        // 失败可能留下半个仓库目录，清掉以免残缺内容被当成有效缓存。
        rmSync(repoDir, { recursive: true, force: true });
        console.warn(
            `[net-packet-ids] 无法获取 ${protocolDocsBase}，本次构建跳过 PacketId 的 packet_details 注记` +
                (process.env[protocolDocsRepoEnv] ? '' : `；可设 ${protocolDocsRepoEnv} 指向镜像`)
        );
    }
}

function reason(e: unknown): string {
    const stderr = (e as { stderr?: unknown })?.stderr;
    const text = typeof stderr === 'string' ? stderr : '';
    return text.trim().split('\n').filter(Boolean).pop() ?? String(e);
}

export default {
    afterLoad({ project }) {
        mkdirSync(cacheDir, { recursive: true });
        const protocolDocsRepoDir = resolvePath(cacheDir, protocolDocsBase);
        ensureProtocolDocs();
        const protocolDocsJsonDir = resolvePath(protocolDocsRepoDir, 'json');
        // 取不到文档时目录可能不存在：按空列表处理，而不是让 readdirSync 抛错。
        const jsonList = existsSync(protocolDocsJsonDir) ? readdirSync(protocolDocsJsonDir) : [];

        const netDts = project.getSourceFileOrThrow('server-net.d.ts');
        const indentText = project.manipulationSettings.getIndentationText();
        const packetIdEnum = netDts.getEnumOrThrow('PacketId');
        const textChanges: ts.TextChange[] = [];
        for (const member of packetIdEnum.getMembers()) {
            const commentLines: string[] = [];
            const packetName = member.getName();
            const jsonFileName = `${packetName}.json`;
            if (jsonList.includes(jsonFileName)) {
                const jsonPath = resolvePath(protocolDocsJsonDir, jsonFileName);
                const json = JSON.parse(readFileSync(jsonPath, 'utf-8')) as ProtocolDocJSON;
                if (json.$metaProperties?.['[cereal:packet_details]']) {
                    const packetDetails = json.$metaProperties['[cereal:packet_details]'];
                    commentLines.push(...packetDetails.replace(/\t/g, indentText).split('\n'));
                }
            }
            if (commentLines.length > 0) {
                commentLines.push('');
            }
            const packetNameKebabCase = packetName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            commentLines.push(
                `@see https://mojang.github.io/bedrock-protocol-docs/latest/packets/${packetNameKebabCase}/`
            );
            if (commentLines.length > 0) {
                const prefixSpaces = member.getIndentationText();
                textChanges.push({
                    span: { start: member.getStart(), length: 0 },
                    newText: ['/**', ...commentLines.map((s) => ` * ${s}`), ' */']
                        .map((s) => `${s}\n${prefixSpaces}`)
                        .join('')
                });
            }
        }
        netDts.applyTextChanges(textChanges);
    }
} as Hook;
