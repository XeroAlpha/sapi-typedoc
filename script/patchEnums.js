const { readFileSync, writeFileSync } = require("fs");
const { resolve: resolvePath } = require("path");

/**
 * @param {string} content
 * @param {string} className
 * @param {Record<string, string>} patch
 * @param {string} descPrefix
 * @param {string} descSuffix
 * @returns {string}
 */
function patchEnumClass(content, className, patch, descPrefix, descSuffix) {
    return content.replace(new RegExp(`class ${className} \\{([^}]+)\\}`), (match, /** @type {string} */clsInner) => {
        const patchLines = [];
        /** @type {string[] | null} */
        let comment = null;
        /** @type {string[] | null} */
        let lastComment = null;
        clsInner.split("\n").forEach((ln, i, lines) => {
            const lnTrim = ln.trim();
            if (lnTrim === "/**") {
                comment = [ln];
                return;
            }
            if (lnTrim === "*/") {
                comment.push(ln);
                lastComment = comment;
                comment = null;
                return;
            }
            if (comment !== null && lnTrim.startsWith("*")) {
                comment.push(ln);
                return;
            }
            const found = /static readonly (\w+|'\w+'): (\w+);/.exec(ln);
            if (found) {
                const isWrapped = found[1].startsWith("'");
                const fieldName = isWrapped ? found[1].slice(1, -1) : found[1];
                const patchText = patch[fieldName];
                if (patchText) {
                    const patchDesc = `${descPrefix}${patchText}${descSuffix}`;
                    if (lastComment && lastComment.length > 2) {
                        const tsdocPrefixPos = lastComment[1].search(/\S/) + 2;
                        const tsdocPrefix = lastComment[1].slice(0, tsdocPrefixPos);
                        const firstLineIndex = lastComment.findIndex((v, i) => {
                            if (i > 0 && i < lastComment.length - 1) {
                                const commentLineTrim = v.slice(tsdocPrefixPos).trim();
                                if (commentLineTrim.length === 0) {
                                    return false; // Empty line, skip
                                }
                                if (commentLineTrim.startsWith("@")) {
                                    return false; // It's a tag, skip
                                }
                                return true;
                            }
                        });
                        const patchedFirstLine = `${tsdocPrefix}${patchDesc}`;
                        if (firstLineIndex > 0) {
                            const firstLine = lastComment[firstLineIndex].slice(tsdocPrefixPos).trim();
                            if (firstLine.startsWith(descPrefix) && firstLine.endsWith(descSuffix)) {
                                lastComment[1] = patchedFirstLine; // Replace existent patch
                            } else {
                                lastComment.splice(1, 0, patchedFirstLine, tsdocPrefix); // Append patch before first line
                            }
                        } else {
                            lastComment.splice(-1, 0, patchedFirstLine); // Append patch at end
                        }
                    } else {
                        const tabPrefixPos = ln.search(/\S/);
                        const tabPrefix = ln.slice(0, tabPrefixPos);
                        lastComment = [ // Create comment if not exists
                            `${tabPrefix}/**`,
                            `${tabPrefix} * ${patchDesc}`,
                            `${tabPrefix} */`
                        ];
                    }
                } else {
                    if (lastComment) {
                        console.warn(`Patch text cannot find for ${fieldName} from ${className}`);
                    }
                }
            }
            if (lastComment) {
                patchLines.push(...lastComment); // No patch available
                lastComment = null;
            }
            patchLines.push(ln);
        });
        return match.replace(clsInner, patchLines.join("\n"));
    });
}

function mapToLowerCamelCase(enums) {
    const ret = {};
    Object.keys(enums).forEach((k) => {
        const newK = k.replace(/_(\w)/g, (_, c) => c.toUpperCase());
        ret[newK] = enums[k];
    });
    return ret;
}

function applyRewrite(enums, rewrite) {
    const target = { ...enums };
    Object.entries(rewrite).forEach(([k, v]) => {
        if (v === null) {
            delete target[k];
        } else if (v in target) {
            target[k] = target[v];
        } else if (v in enums) {
            target[k] = enums[v];
        } else {
            target[k] = v;
        }
    });
    return target;
}

function removeEntityModifier(enums) {
    const target = {};
    Object.entries(enums).forEach(([k, v]) => {
        target[k] = v.replace("（不可召唤）", "");
    });
    return target;
}

function removeMinecraftPrefix(enums) {
    const target = {};
    Object.entries(enums).forEach(([k, v]) => {
        target[k.replace(/^minecraft:/, "")] = v;
    });
    return target;
}

function main(idlistWebOutPath) {
    const dtsPath = resolvePath(__dirname, "..", "translated/server.d.ts");
    let dtsContent = readFileSync(dtsPath, "utf-8");
    const idlistData = {
        education: JSON.parse(readFileSync(resolvePath(idlistWebOutPath, "education.json"))),
        experiment: JSON.parse(readFileSync(resolvePath(idlistWebOutPath, "experiment.json"))),
        gametest: JSON.parse(readFileSync(resolvePath(idlistWebOutPath, "gametest.json")))
    };
    const rewriteData = JSON.parse(readFileSync(resolvePath(__dirname, "patchEnumRewrite.json")));
    dtsContent = patchEnumClass(dtsContent, "MinecraftBlockTypes", {
        ...applyRewrite(mapToLowerCamelCase(removeMinecraftPrefix(idlistData.gametest.enums.block)), rewriteData.block)
    }, "", "。");
    dtsContent = patchEnumClass(dtsContent, "MinecraftEffectTypes", {
        ...applyRewrite(mapToLowerCamelCase(idlistData.education.enums.effect), rewriteData.effect.education),
        ...applyRewrite(mapToLowerCamelCase(idlistData.experiment.enums.effect), rewriteData.effect.default)
    }, "", "。");
    dtsContent = patchEnumClass(dtsContent, "MinecraftEnchantmentTypes", {
        ...applyRewrite(mapToLowerCamelCase(idlistData.education.enums.enchant), rewriteData.enchantment.education),
        ...applyRewrite(mapToLowerCamelCase(idlistData.experiment.enums.enchant), rewriteData.enchantment.default)
    }, "", "。");
    dtsContent = patchEnumClass(dtsContent, "MinecraftEntityTypes", {
        ...applyRewrite(mapToLowerCamelCase(removeMinecraftPrefix(idlistData.gametest.enums.entity)), rewriteData.entity)
    }, "", "。");
    dtsContent = patchEnumClass(dtsContent, "MinecraftItemTypes", {
        ...applyRewrite(mapToLowerCamelCase(removeMinecraftPrefix(idlistData.gametest.enums.item)), rewriteData.item)
    }, "", "。");
    writeFileSync(dtsPath, dtsContent);
}

main(...process.argv.slice(2));