import { readFileSync, writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { ReflectionKind, RendererEvent } from 'typedoc';
import { git, parsePackageVersion } from '../utils.js';
import type { Hook } from './hook.js';

const kindMap = [
    [ReflectionKind.Enum, 'enums', '枚举'],
    [ReflectionKind.Class, 'classes', '类'],
    [ReflectionKind.Function, 'functions', '函数'],
    [ReflectionKind.Interface, 'interfaces', '接口'],
    [ReflectionKind.Module, 'modules', '模块'],
    [ReflectionKind.TypeAlias, 'types', '类型别名'],
    [ReflectionKind.Variable, 'variables', '变量']
] as [ReflectionKind, string, string][];
function getKindInfo(kind: ReflectionKind) {
    const result = kindMap.find(([k]) => (kind & k) !== 0);
    if (result) {
        return {
            category: result[1],
            name: result[2]
        };
    }
    return null;
}

function getCurrentHead() {
    return git('rev-parse --abbrev-ref HEAD').toString('utf-8').trim();
}

function isBranchExists(branch: string) {
    try {
        git(`rev-parse --verify --quiet ${branch}`);
        return true;
    } catch {
        return false;
    }
}

function listRefs(refSuffix: string) {
    return git(`show-ref ${refSuffix}`)
        .toString('utf-8')
        .trim()
        .split('\n')
        .filter((e) => e !== '')
        .map((ln) => ln.split(' '))
        .map(([hash, ref]) => ({ hash, ref }));
}

function listTrackingFiles(branch: string) {
    const files: Record<string, string> = {};
    git(`ls-tree -r --format="%(objectname)\t%(path)" ${branch}`)
        .toString('utf-8')
        .split('\n')
        .map((e) => e.split('\t'))
        .forEach(([hash, path]) => {
            files[path] = hash;
        });
    return files;
}

function getBranchCommits(branch: string) {
    return git(`rev-list ${branch} --`).toString('utf-8').trim().split('\n');
}

function getLatestModifiedCommitHash(branch: string, path: string) {
    return git(`rev-list -1 ${branch} -- "${path}"`).toString('utf-8').trim();
}

function getMergeBase(commits: string[]) {
    return git(`merge-base ${commits.join(' ')}`)
        .toString('utf-8')
        .trim();
}

function getCommitInfo(commitHash: string) {
    const [parents, date, ...message] = git(`show --format="%P\t%cI\t%B" -s ${commitHash}`)
        .toString('utf-8')
        .trim()
        .split('\t');
    return {
        parents: parents.split(' ').filter((s) => s !== ''),
        date: new Date(date),
        message: message.join('\t')
    };
}

function listCommitsByCommand(branch: string, commitCommand: string) {
    const prefix = `/${commitCommand} `;
    const commitLines = git(`log --grep="^${prefix}" --format="@@@@@%H\t%cI\t%B" ${branch} --`)
        .toString('utf-8')
        .trim()
        .split('@@@@@')
        .slice(1);
    const commits = commitLines.map((commitStr) => {
        const [hash, date, ...message] = commitStr.split('\t');
        return {
            hash,
            date: new Date(date),
            message: message.join('\t').trim()
        };
    });
    return commits.flatMap((commit) => {
        const commitMessageLines = commit.message.split('\n');
        return commitMessageLines
            .filter((line) => line.startsWith(prefix))
            .map((line) => ({ file: line.slice(prefix.length).trim(), commit }));
    });
}

const initialCommit = '568ac3300e47a9500b269e3e101e3f6bda3c48ea';

const statusList = ['translated', 'untranslated', 'wip', 'needReview'] as const;

function analyzeTranslateState() {
    const head = getCurrentHead();
    const originalRefs = listRefs('original').map((e) => e.ref);
    let originalHead = [
        'refs/heads/original',
        'refs/remotes/origin/original',
        'refs/remotes/XeroAlpha/original',
        ...originalRefs
    ].find(isBranchExists);
    if (!originalHead) {
        throw new Error('Cannot find original branch.');
    }
    originalHead = getMergeBase([originalHead, head]);
    if (!originalHead) {
        throw new Error('HEAD has not shared any commit with original.');
    }
    const originalCommits = getBranchCommits(originalHead);
    if (!originalCommits.includes(initialCommit)) {
        throw new Error('original branch is incomplete.');
    }
    const headTracking = listTrackingFiles(head);
    const originalTracking = listTrackingFiles(originalHead);
    const allPieces = Object.keys(headTracking).filter((path) => path.startsWith('translate-pieces/'));
    allPieces.sort();

    const untranslated = allPieces.filter((path) => headTracking[path] === originalTracking[path]);
    const restPieces = allPieces.filter((path) => !untranslated.includes(path));

    const statusMap: Record<string, (typeof statusList)[number]> = {};
    const lastEditTimeCache: Record<string, Date> = {};
    untranslated.forEach((piecePath) => {
        statusMap[piecePath] = 'untranslated';
    });
    for (const piecePath of restPieces) {
        const commitInfo = getCommitInfo(getLatestModifiedCommitHash(head, piecePath));
        const isMergeCommit = commitInfo.parents.length > 1;
        const isMergeFromOriginal = commitInfo.parents.some((commit) => originalCommits.includes(commit));
        if (isMergeCommit && isMergeFromOriginal) {
            statusMap[piecePath] = 'needReview';
        } else if (commitInfo.message.includes('WIP:')) {
            statusMap[piecePath] = 'wip';
        } else {
            statusMap[piecePath] = 'translated';
        }
        lastEditTimeCache[piecePath] = commitInfo.date;
    }

    const overwrites = statusList.flatMap((command) =>
        listCommitsByCommand(head, command).map((e) => ({ ...e, command }))
    );
    overwrites.sort((a, b) => b.commit.date.getTime() - a.commit.date.getTime());
    Object.keys(statusMap).forEach((piecePath) => {
        const pieceOverwrites = overwrites.filter(
            (e) => piecePath.endsWith(`/${e.file}`) || piecePath.endsWith(`/${e.file}.d.ts`)
        );
        if (pieceOverwrites.length > 0) {
            const latestOverwrite = pieceOverwrites[0];
            let lastEditTime = lastEditTimeCache[piecePath] as Date | undefined;
            if (!lastEditTime) {
                const commitInfo = getCommitInfo(getLatestModifiedCommitHash(head, piecePath));
                lastEditTime = lastEditTimeCache[piecePath] = commitInfo.date;
            }
            if (lastEditTime <= latestOverwrite.commit.date) {
                statusMap[piecePath] = latestOverwrite.command;
            }
        }
    });
    return statusMap;
}

const namespacePrefix = '@minecraft/';
const stateDescMap: Record<(typeof statusList)[number], string> = {
    untranslated: '未翻译',
    wip: '翻译中',
    translated: '已完成',
    needReview: '待检查'
};

export default {
    afterConvert({ sourceFiles, tsdocApplication, tsdocProject }) {
        const { readme } = tsdocProject;
        if (!readme) {
            throw new Error(`Readme is not found in project`);
        }
        if (getCurrentHead() === 'original') {
            return;
        }
        let translateStateMap;
        try {
            translateStateMap = analyzeTranslateState();
        } catch (err) {
            console.error(`Cannot analyze translate state. Probably necessary branches are missing or incomplete.`);
            console.error(err);
            return;
        }
        tsdocApplication.renderer.on(RendererEvent.BEGIN, () => {
            const router = tsdocApplication.renderer.router;
            if (!router) {
                throw new Error(`Unexpected renderer.router === undefined`);
            }
            const summaryLines: (string | string[])[] = ['', '', '<div class="readme-modules"><p>模块：</p><ul>'];
            const statusHeadLines: string[] = [
                '',
                '',
                '## 翻译状态',
                '',
                '|状态|描述|',
                '| - | - |',
                '|`未翻译`|尚未翻译，欢迎为这部分条目贡献翻译|',
                '|`不翻译`|尚未翻译且不开放贡献|',
                '|`翻译中`|正在翻译中|',
                '|`待检查`|已经翻译的部分的原文本已经更新，尚未进行确认|',
                '|`暂停中`|未完成翻译，因为译名讨论等原因暂停|',
                '|`已完成`|已完成此部分的翻译|',
                '',
                '模块一览：',
                '',
                '|模块|进度|翻译中|待检查|',
                '| - | - | - | - |'
            ];
            const statusLines: (string | string[])[] = [];
            if (!tsdocProject.children) {
                throw new Error(`Unexpected project.children === undefined`);
            }
            tsdocProject.children.forEach((moduleRef) => {
                const moduleFullName = namespacePrefix + moduleRef.name;
                if (!moduleRef.sources) {
                    throw new Error(`Unexpected declarationReflection.sources === undefined`);
                }
                const sourceFilePath = moduleRef.sources[0].fullFileName;
                const moduleUrl = router.getFullUrl(moduleRef);
                summaryLines.push([
                    '<li>',
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="readme-module-icon">',
                    '<use href="#icon-2"></use>',
                    '</svg>',
                    `<a class="readme-module-text" href="${moduleUrl}">${moduleFullName}</a>`,
                    '</li>'
                ]);

                if (!sourceFiles.find((sourceFile) => sourceFile.getFilePath() === sourceFilePath)) return;
                const linkHref = moduleFullName.replace(/[@/]/g, '');
                statusLines.push(['', `### ${moduleFullName}`, '', '|名称|类型|状态|', '| - | - | - |']);
                let completedCount = 0;
                let wipCount = 0;
                let needReviewCount = 0;
                let totalCount = 0;
                if (!moduleRef.children) {
                    throw new Error(`Unexpected declarationReflection.children === undefined`);
                }
                moduleRef.children.forEach((member) => {
                    const kindInfo = getKindInfo(member.kind);
                    if (!kindInfo) {
                        throw new Error(`Unknown kind: 0x${member.kind.toString(16)} ${member.name}`);
                    }
                    const piecePath = `translate-pieces/${moduleRef.name}/${kindInfo.category}/${member.name}.d.ts`;
                    const translateState = translateStateMap[piecePath] ?? 'untranslated';
                    const memberUrl = router.getFullUrl(member);
                    if (translateState === 'translated') completedCount += 1;
                    if (translateState === 'wip') wipCount += 1;
                    if (translateState === 'needReview') needReviewCount += 1;
                    totalCount += 1;
                    if (memberUrl) {
                        statusLines.push(
                            `|[\`${member.name}\`](${memberUrl})|${kindInfo.name}|${stateDescMap[translateState]}|`
                        );
                    } else {
                        statusLines.push(`|\`${member.name}\`|${kindInfo.name}|${stateDescMap[translateState]}|`);
                    }
                });
                const pct = `${(Math.round((completedCount / totalCount) * 1000) / 10).toFixed(1)}% (${completedCount.toString()}/${totalCount.toString()})`;
                statusHeadLines.push(`|[${moduleFullName}](#${linkHref})|${pct}|${wipCount}|${needReviewCount}|`);
            });
            summaryLines.push('</ul></div>');
            statusLines.unshift(statusHeadLines);

            const statusLine = readme.find(
                (l): l is { kind: 'text'; text: string } =>
                    l.kind === 'text' && l.text.includes('<!-- summary start -->')
            );
            if (!statusLine) {
                throw new Error(`Cannot find text part in readme`);
            }
            statusLine.text = statusLine.text.replace('<!-- summary start -->', summaryLines.flat().join('\n'));
            readme.push({
                kind: 'text',
                text: statusLines.flat().join('\n')
            });

            const reviewPieces = Object.keys(translateStateMap).filter(
                (path) => !path.endsWith('/package.d.ts') && translateStateMap[path] === 'needReview'
            );
            if (reviewPieces.length > 0) {
                reviewPieces.forEach((piecePath) => {
                    console.log(`[review] Review required: ${piecePath}`);
                });
            }
        });
    },
    afterUpdate({ translatedPath, dependencies }) {
        const readMePath = resolvePath(translatedPath, 'README.md');
        const readMe = readFileSync(readMePath, 'utf-8');

        const summaryLines: (string | string[])[] = [
            '<!-- summary start -->',
            '',
            'NPM 包：',
            '',
            '|包名|版本|',
            '| - | - |'
        ];
        let gameVersion: string | undefined;
        Object.entries(dependencies).forEach(([moduleName, version]) => {
            if (!version) return;
            let versionString = version;
            const versionInfo = parsePackageVersion(version);
            if (versionInfo) {
                gameVersion ??= versionInfo.gameVersion;
                versionString = versionInfo.version;
            }
            const npmURL = `https://www.npmjs.com/package/${moduleName}`;
            summaryLines.push(`|[${moduleName}](${npmURL})|\`${versionString}\`|`);
        });
        summaryLines.push(['', `游戏版本号：\`${gameVersion}\``, '', '<!-- summary end -->']);

        const newReadMe = readMe.replace(
            /<!-- summary start -->\n\n[^]+\n\n<!-- summary end -->/,
            summaryLines.flat().join('\n')
        );
        writeFileSync(readMePath, newReadMe);
    }
} as Hook;
