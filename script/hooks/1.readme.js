const { execSync } = require('child_process');
const { resolve: resolvePath } = require('path');
const { ReflectionKind } = require('typedoc');

const basePath = resolvePath(__dirname, '..', '..');

const kindMap = [
    [ReflectionKind.Enum, 'enums', '枚举', 'enums'],
    [ReflectionKind.Class, 'classes', '类', 'classes'],
    [ReflectionKind.Function, 'functions', '函数', 'functions'],
    [ReflectionKind.Interface, 'interfaces', '接口', 'interfaces'],
    [ReflectionKind.Module, 'modules', '模块', 'modules'],
    [ReflectionKind.TypeAlias, 'types', '类型别名', 'types'],
    [ReflectionKind.Variable, 'variables', '变量', 'variables']
];
function getKindInfo(kind) {
    const result = kindMap.find(([k]) => (kind & k) !== 0);
    if (result) {
        return {
            category: result[1],
            name: result[2],
            docMapping: result[3]
        };
    }
    return null;
}
function getReflectionUrl(refl) {
    const parts = [];
    const kindInfo = getKindInfo(refl.kind);
    let currentRefl = refl;
    while (currentRefl.parent && currentRefl.kind !== ReflectionKind.Project) {
        parts.unshift(currentRefl.getAlias());
        currentRefl = currentRefl.parent;
    }
    return `./${kindInfo.docMapping}/${parts.join('.')}.html`;
}

function git(args) {
    return execSync(`git ${args}`, { cwd: basePath });
}

function getCurrentHead() {
    return git('rev-parse --abbrev-ref HEAD').toString('utf-8').trim();
}

function isBranchExists(branch) {
    try {
        git(`rev-parse --verify ${branch}`);
        return true;
    } catch (err) {
        return false;
    }
}

function listRefs(refSuffix) {
    return git(`show-ref ${refSuffix}`)
        .toString('utf-8')
        .trim()
        .split('\n')
        .filter((e) => e !== '')
        .map((ln) => ln.split(' '))
        .map(([hash, ref]) => ({ hash, ref }));
}

function listTrackingFiles(branch) {
    const files = {};
    git(`ls-tree -r --format="%(objectname)\t%(path)" ${branch}`)
        .toString('utf-8')
        .split('\n')
        .map((e) => e.split('\t'))
        .forEach(([hash, path]) => {
            files[path] = hash;
        });
    return files;
}

function getBranchCommits(branch) {
    return git(`rev-list ${branch} --`).toString('utf-8').trim().split('\n');
}

function getLatestModifiedCommitHash(branch, path) {
    return git(`rev-list -1 ${branch} -- "${path}"`).toString('utf-8').trim();
}

function getMergeBase(commits) {
    return git(`merge-base ${commits.join(' ')}`)
        .toString('utf-8')
        .trim();
}

function getCommitInfo(commitHash) {
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

function listCommitsByCommand(branch, commitCommand) {
    const prefix = `/${commitCommand} `;
    const commitLines = git(`log --grep="^${prefix}" --format="@@@@@%H\t%cI\t%B" ${branch} --`)
        .toString('utf-8')
        .trim()
        .split('\n@@@@@');
    const commits = commitLines.map((commitStr) => {
        const [hash, date, ...message] = commitStr.split('\t');
        return {
            hash,
            date: new Date(date),
            message: message.join('\t')
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

    const statusMap = {};
    const lastEditTimeCache = {};
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

    const overwrites = ['translated', 'untranslated', 'wip', 'needReview'].flatMap((command) =>
        listCommitsByCommand(head, command).map((e) => ({ ...e, command }))
    );
    overwrites.sort((a, b) => b.commit.date - a.commit.date);
    Object.keys(statusMap).forEach((piecePath) => {
        const pieceOverwrites = overwrites.filter(
            (e) => piecePath.endsWith(`/${e.file}`) || piecePath.endsWith(`/${e.file}.d.ts`)
        );
        if (pieceOverwrites.length > 0) {
            const latestOverwrite = pieceOverwrites[0];
            let lastEditTime = lastEditTimeCache[piecePath];
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
const stateDescMap = {
    untranslated: '未翻译',
    wip: '翻译中',
    translated: '已完成',
    needReview: '待检查'
};

/** @type {import('./hook').Hook} */
module.exports = {
    afterConvert({ sourceFiles, tsdocProject }) {
        const { readme } = tsdocProject;
        let translateStateMap;
        try {
            translateStateMap = analyzeTranslateState();
        } catch (err) {
            console.error(`Cannot analyze translate state. Probably necessary branches are missing or incomplete.`);
            console.error(err);
        }
        if (!translateStateMap) {
            return;
        }
        const summaryLines = ['', '', '<div class="readme-modules"><p>模块：</p><ul>'];
        const statusHeadLines = [
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
        const statusLines = [];
        tsdocProject.children.forEach((moduleRef) => {
            const moduleFullName = namespacePrefix + moduleRef.name;
            const sourceFilePath = moduleRef.sources[0].fullFileName;
            const moduleUrl = getReflectionUrl(moduleRef);
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
            moduleRef.children.forEach((member) => {
                const kindInfo = getKindInfo(member.kind);
                if (!kindInfo) {
                    throw new Error(`Unknown kind: 0x${member.kind.toString(16)} ${member.name}`);
                }
                const piecePath = `translate-pieces/${moduleRef.name}/${kindInfo.category}/${member.name}.d.ts`;
                const translateState = translateStateMap[piecePath];
                const url = getReflectionUrl(member);
                if (!translateState) {
                    console.log(`Cannot inspect translate state for: ${member.name}`);
                    return;
                }
                if (translateState === 'translated') completedCount += 1;
                if (translateState === 'wip') wipCount += 1;
                if (translateState === 'needReview') needReviewCount += 1;
                totalCount += 1;
                statusLines.push(`|[\`${member.name}\`](${url})|${kindInfo.name}|${stateDescMap[translateState]}|`);
            });
            const pct = `${Math.round((completedCount / totalCount) * 1000) / 10}% (${completedCount}/${totalCount})`;
            statusHeadLines.push(`|[${moduleFullName}](#md:${linkHref})|${pct}|${wipCount}|${needReviewCount}|`);
        });
        summaryLines.push('</ul></div>');
        statusLines.unshift(statusHeadLines);

        const statusLine = readme.find((l) => l.kind === 'text' && l.text.includes('<!-- summary start -->'));
        statusLine.text = statusLine.text.replace('<!-- summary start -->', summaryLines.flat().join('\n'));
        readme.push({
            kind: 'text',
            text: statusLines.flat().join('\n')
        });
    }
};
