import { get } from 'https';
import { SourceFile, SyntaxKind, ts } from 'ts-morph';
import { URL } from 'url';
import type { Hook } from './hook.js';

const translationSources = [
    'https://ca.projectxero.top/idlist/data/index.json',
    'https://xeroalpha.github.io/caidlist/data/index.json'
];

function httpsGet(url: string | URL) {
    return new Promise<string>((resolve, reject) => {
        const req = get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to request ${String(url)}: ${res.statusCode} ${res.statusMessage}`));
                return;
            }
            const chunks: string[] = [];
            res.setEncoding('utf-8');
            res.on('data', (chunk: string) => chunks.push(chunk));
            res.on('end', () => {
                resolve(chunks.join(''));
            });
            res.on('error', (err) => {
                reject(err);
            });
        });
        req.on('error', (err) => {
            reject(err);
        });
    });
}

const tsPopulators: Record<
    string,
    (
        textChanges: ts.TextChange[],
        options: { sourceFile: SourceFile; gameData: Record<string, Record<string, string>> }
    ) => void
> = {
    'mojang-block.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftBlockTypes');
        const { block } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const blockId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const blockIdWithoutPrefix = blockId.replace(/^minecraft:/, '');
            const enumTranslation = block[blockId] || block[blockIdWithoutPrefix];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-item.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftItemTypes');
        const { item } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const itemId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const itemIdWithoutPrefix = itemId.replace(/^minecraft:/, '');
            const enumTranslation = item[itemId] || item[itemIdWithoutPrefix];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-entity.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftEntityTypes');
        const { entity } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const entityId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const entityIdWithPrefix = `minecraft:${entityId}`;
            const enumTranslation = entity[entityId] || entity[entityIdWithPrefix];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-cameraPresets.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftCameraPresetsTypes');
        const { cameraPreset } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const cameraPresetId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const enumTranslation = cameraPreset[cameraPresetId];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-effect.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftEffectTypes');
        const { effect } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const effectId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const effectIdWithoutPrefix = effectId.replace(/^minecraft:/, '');
            const enumTranslation = effect[effectIdWithoutPrefix];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-enchantment.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftEnchantmentTypes');
        const { enchant } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const enchantmentId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const enumTranslation = enchant[enchantmentId];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-dimension.d.ts': (textChanges, { sourceFile }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftDimensionTypes');
        const dimensionTranslations: Partial<Record<string, string>> = {
            'minecraft:overworld': '主世界',
            'minecraft:nether': '下界',
            'minecraft:the_end': '末地'
        };
        for (const enumMember of enumNode.getMembers()) {
            const dimensionId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const enumTranslation = dimensionTranslations[dimensionId];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-biome.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftBiomeTypes');
        const { biome } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const biomeId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const biomeIdWithoutPrefix = biomeId.replace(/^minecraft:/, '');
            const enumTranslation = biome[biomeIdWithoutPrefix];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-feature.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftFeatureTypes');
        const { location } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const featureId = enumMember.getInitializerIfKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
            const featureIdWithoutPrefix = featureId.replace(/^minecraft:/, '');
            const enumTranslation = location[featureIdWithoutPrefix] ?? location[featureId];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    },
    'mojang-cooldownCategory.d.ts': (textChanges, { sourceFile, gameData }) => {
        const enumNode = sourceFile.getEnumOrThrow('MinecraftCooldownCategoryTypes');
        const { cooldownCategory } = gameData;
        for (const enumMember of enumNode.getMembers()) {
            const cooldownCategoryId = enumMember
                .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
                .getLiteralValue();
            const enumTranslation = cooldownCategory[cooldownCategoryId];
            if (enumTranslation) {
                const prefixSpaces = enumMember.getIndentationText();
                textChanges.push({
                    span: { start: enumMember.getStart(), length: 0 },
                    newText: `/** ${enumTranslation}。 */\n${prefixSpaces}`
                });
            }
        }
    }
};

type IDListDataIndex = {
    id: string;
    dataVersion: string;
    branchList: {
        id: string;
        dataUrl: string;
    }[];
}[];

interface IDListDataCollection {
    enums: Record<string, Record<string, string>>;
    names: [string, string, string][];
}

export default {
    async afterTranslate({ project }) {
        const [sourceUrl, dataIndex] = await Promise.any(
            translationSources.map(async (translationSource) => {
                const dataIndex = JSON.parse(await httpsGet(translationSource)) as IDListDataIndex;
                return [translationSource, dataIndex] as const;
            })
        );

        console.log(`[translate-vanilla-data] Selected translation source: ${sourceUrl}`);
        const gameData: Record<string, Record<string, string>> = {};
        const betaVersionIndex = dataIndex.find((e) => e.id === 'beta');
        if (!betaVersionIndex) {
            throw new Error(`Wrong idlist index`);
        }
        console.log(`[translate-vanilla-data] Data version: ${betaVersionIndex.dataVersion}`);
        (
            await Promise.all(
                ['gametest', 'experiment', 'education'].map(async (n) => {
                    const dataIndex = betaVersionIndex.branchList.find((e) => e.id === n);
                    if (!dataIndex) {
                        throw new Error(`Wrong idlist index`);
                    }
                    const dataUrl = new URL(dataIndex.dataUrl, sourceUrl);
                    const { enums } = JSON.parse(await httpsGet(dataUrl)) as IDListDataCollection;
                    return enums;
                })
            )
        ).forEach((enums) => {
            Object.entries(enums).forEach(([enumName, enumKV]) => {
                let enumEntries = gameData[enumName] as Record<string, string> | undefined;
                if (!enumEntries) {
                    enumEntries = gameData[enumName] = {};
                }
                Object.entries(enumKV).forEach(([enumKey, enumValue]) => {
                    if (!enumEntries[enumKey]) {
                        enumEntries[enumKey] = enumValue;
                    }
                });
            });
        });

        Object.entries(tsPopulators).forEach(([fileName, populator]) => {
            const sourceFile = project.getSourceFileOrThrow(fileName);
            const textChanges: ts.TextChange[] = [];
            console.log(`[translate-vanilla-data] Populating ${fileName}`);
            populator(textChanges, { sourceFile, gameData });
            sourceFile.applyTextChanges(textChanges);
        });
    }
} as Hook;
