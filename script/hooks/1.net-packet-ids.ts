import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import type { ts } from 'ts-morph';
import {
    basePath,
    compareGameVersion,
    formatGameVersionShort,
    type GameVersion,
    git,
    parseDataVersion
} from '../utils.js';
import type { Hook } from './hook.js';

const cacheDir = resolvePath(basePath, 'cache', 'net-packet-ids');
const base = 'bedrock-protocol-docs';
const repoDefault = 'https://github.com/Mojang/bedrock-protocol-docs.git';
const repo = process.env.SAPI_PROTOCOL_DOCS_REPO?.trim() || repoDefault;
const repoRef = process.env.SAPI_PROTOCOL_DOCS_REF?.trim() || undefined;
const repoDir = resolvePath(cacheDir, base);
const repoJsonDir = resolvePath(repoDir, 'json');

interface ProtocolDocJSON {
    title: string;
    $metaProperties?: {
        '[cereal:packet_details]'?: string;
    };
}

const repoGit = (args: string) => git(args, { cwd: repoDir, stdio: 'pipe' });

function prepareRepo() {
    if (existsSync(resolvePath(repoDir, '.git'))) {
        return true;
    }
    if (existsSync(repoDir)) {
        console.warn(
            `[net-packet-ids] Failed to prepare ${repoDir}: the path already exists but is not a git repository`
        );
        return false;
    }
    mkdirSync(cacheDir, { recursive: true });
    try {
        git(`clone ${repo} "${base}"`, { cwd: cacheDir });
        return true;
    } catch (err) {
        console.warn(`[net-packet-ids] Failed to clone ${repo}`, err);
        rmSync(repoDir, { recursive: true, force: true });
        return false;
    }
}

function syncRepo(gameVersion: GameVersion) {
    try {
        const oldRemoteMain = repoGit('remote get-url origin');
        if (oldRemoteMain !== repo) {
            repoGit(`remote set-url origin "${repo}"`);
        }
        repoGit(
            'fetch origin --prune "+refs/heads/main:refs/remotes/origin/main" "+refs/tags/*:refs/tags/*" --prune-tags'
        );
    } catch (err) {
        console.warn(`[net-packet-ids] Failed to fetch ${repo}`, err);
    }
    const gameVersionStr = formatGameVersionShort(gameVersion);
    let ref = repoRef;
    if (!ref) {
        let best: [tag: string, version: GameVersion] | undefined;
        for (const tag of repoGit('tag --list "v*"').split('\n')) {
            const version = parseDataVersion(tag.slice(1));
            if (
                version &&
                compareGameVersion(gameVersion, version) >= 0 &&
                (!best || compareGameVersion(version, best[1]) > 0)
            ) {
                best = [tag, version];
            }
        }
        if (best) {
            if (compareGameVersion(gameVersion, best[1]) !== 0) {
                console.warn(
                    `[net-packet-ids] No exact version tag found for game version ${gameVersionStr}; falling back to ${best[0]}`
                );
            }
            ref = best[0];
        } else {
            console.warn(
                `[net-packet-ids] No matching version tag found for game version ${gameVersionStr}; falling back to origin/main`
            );
            ref = 'origin/main';
        }
    }
    try {
        repoGit(`checkout --force "${ref}"`);
        const head = repoGit('rev-parse --short=8 HEAD');
        console.log(`[net-packet-ids] bedrock-protocol-docs: ${ref} @ ${head ?? '<unknown>'}`);
    } catch (err) {
        console.warn(`[net-packet-ids] Failed to checkout ${ref}`, err);
    }
}

export default {
    afterLoad({ project, gameVersion }) {
        mkdirSync(cacheDir, { recursive: true });
        if (!prepareRepo()) {
            return;
        }
        syncRepo(gameVersion);
        // 取不到文档时目录可能不存在：按空列表处理，而不是让 readdirSync 抛错。
        const jsonList = existsSync(repoJsonDir) ? readdirSync(repoJsonDir) : [];

        const netDts = project.getSourceFileOrThrow('server-net.d.ts');
        const indentText = project.manipulationSettings.getIndentationText();
        const packetIdEnum = netDts.getEnumOrThrow('PacketId');
        const textChanges: ts.TextChange[] = [];
        for (const member of packetIdEnum.getMembers()) {
            const commentLines: string[] = [];
            const packetName = member.getName();
            const jsonFileName = `${packetName}.json`;
            if (jsonList.includes(jsonFileName)) {
                const jsonPath = resolvePath(repoJsonDir, jsonFileName);
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
