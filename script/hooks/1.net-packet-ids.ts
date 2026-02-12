import { resolve as resolvePath } from 'path';
import type { Hook } from './hook.js';
import { basePath } from '../utils.js';
import { existsSync, mkdirSync, readdirSync, readFileSync } from 'fs';
import { execSync } from 'child_process';
import type { ts } from 'ts-morph';

const cacheDir = resolvePath(basePath, 'cache', 'net-packet-ids');
const protocolDocsBase = 'bedrock-protocol-docs';
const protocolDocsRepo = 'https://github.com/Mojang/bedrock-protocol-docs.git';

interface ProtocolDocJSON {
    title: string;
    description?: string;
}

export default {
    afterLoad({ project }) {
        mkdirSync(cacheDir, { recursive: true });
        const protocolDocsRepoDir = resolvePath(cacheDir, protocolDocsBase);
        if (existsSync(resolvePath(protocolDocsRepoDir, '.git'))) {
            execSync('git pull --force', { cwd: protocolDocsRepoDir });
        } else {
            execSync(`git clone ${protocolDocsRepo} ${protocolDocsBase} --depth 1`, { cwd: cacheDir });
        }
        const protocolDocsJsonDir = resolvePath(protocolDocsRepoDir, 'json');
        const protocolDocsHtmlDir = resolvePath(protocolDocsRepoDir, 'html');
        const jsonList = readdirSync(protocolDocsJsonDir);
        const htmlList = readdirSync(protocolDocsHtmlDir);

        const netDts = project.getSourceFileOrThrow('server-net.d.ts');
        const indentText = project.manipulationSettings.getIndentationText();
        const packetIdEnum = netDts.getEnumOrThrow('PacketId');
        const textChanges: ts.TextChange[] = [];
        for (const member of packetIdEnum.getMembers()) {
            const commentLines: string[] = [];
            const jsonFileName = `${member.getName()}.json`;
            const htmlFileName = `${member.getName()}.html`;
            if (jsonList.includes(jsonFileName)) {
                const jsonPath = resolvePath(protocolDocsJsonDir, jsonFileName);
                const json = JSON.parse(readFileSync(jsonPath, 'utf-8')) as ProtocolDocJSON;
                if (json.description) {
                    commentLines.push(...json.description.replace(/\t/g, indentText).split('\n'));
                }
            }
            if (htmlList.includes(htmlFileName)) {
                if (commentLines.length > 0) {
                    commentLines.push('');
                }
                commentLines.push(`@see https://mojang.github.io/bedrock-protocol-docs/html/${htmlFileName}`);
            }
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
