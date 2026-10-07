import { type ExecSyncOptionsWithStringEncoding, execSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve as resolvePath } from 'node:path';
import { fileURLToPath } from 'node:url';
import semver from 'semver';
import type { PackageJson, SetOptional } from 'type-fest';
import type { Application, JSX, TranslatableStrings } from 'typedoc';

export const basePath = resolvePath(fileURLToPath(import.meta.url), '..', '..');
export const originalPath = resolvePath(basePath, 'original');
export const translatingPath = resolvePath(basePath, 'translate-pieces');
export const translatedPath = resolvePath(basePath, 'translated');
export const distPath = resolvePath(basePath, 'dist');

export function git(args: string, options?: SetOptional<ExecSyncOptionsWithStringEncoding, 'encoding'>) {
    return execSync(`git ${args}`, { cwd: basePath, encoding: 'utf-8', ...options }).trim();
}

export function walkFiles(
    directory: string,
    walker: (directory: string, fileName: string | null, path: string) => void
) {
    const files = readdirSync(directory, { withFileTypes: true });
    walker(directory, null, directory);
    for (const file of files) {
        if (file.isDirectory()) {
            walkFiles(resolvePath(directory, file.name), walker);
        } else {
            walker(directory, file.name, resolvePath(directory, file.name));
        }
    }
}

export function getCommonStringFromStart(a: string, b: string) {
    let len = Math.min(a.length, b.length);
    while (len > 0) {
        if (a.slice(0, len) === b.slice(0, len)) {
            return a.slice(0, len);
        }
        len -= 1;
    }
    return '';
}

export function stringCompare(a: string, b: string) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
}

export interface PackageVersion {
    version: string;
    gameVersion: string;
    gamePreRelease: string; // stable or preview
}

export function readPackageInfo(modulePath: string) {
    const packageInfoPath = resolvePath(modulePath, 'package.json');
    if (existsSync(packageInfoPath)) {
        try {
            return JSON.parse(readFileSync(packageInfoPath, 'utf-8')) as PackageJson;
        } catch {
            /* ignore */
        }
    }
}

export function readPackageInfoOrThrow(modulePath: string) {
    const packageInfo = readPackageInfo(modulePath);
    if (!packageInfo) {
        throw new Error(`package.json not exist or cannot read: ${modulePath}`);
    }
    return packageInfo;
}

export function findModuleOrThrow(moduleName: string, root: string) {
    const localRequire = createRequire(resolvePath(root, 'node_modules'));
    const searchPaths = localRequire.resolve.paths(moduleName);
    if (searchPaths) {
        for (const searchPath of searchPaths) {
            const modulePath = resolvePath(searchPath, moduleName);
            const moduleDesc = readPackageInfo(modulePath);
            if (moduleDesc && moduleDesc.name === moduleName) {
                return modulePath;
            }
        }
    }
    throw new Error(`Cannot find module ${moduleName} in ${root}`);
}

const packageVersionRegex = /^([\d.]+-\w+)\.([\d.]+)-(\w+)(\.\d+)?$/;

export function parsePackageVersion(versionString: string): PackageVersion | undefined {
    const match = packageVersionRegex.exec(versionString);
    if (match) {
        const [, version, gameVersion, gamePreRelease, gameBuild] = match;
        if (gameBuild) {
            return { version, gamePreRelease, gameVersion: `${gameVersion}${gameBuild}` };
        }
        return { version, gamePreRelease, gameVersion };
    }
    return undefined;
}

export function comparePackageVersion(a: PackageVersion, b: PackageVersion) {
    const result = semver.compare(a.version, b.version);
    if (result !== 0) {
        return result;
    }
    const [aGameVersion, bGameVersion] = [a, b].map((v) => v.gameVersion.split('.').map((e) => Number.parseInt(e, 10)));
    const minLength = Math.min(aGameVersion.length, bGameVersion.length);
    for (let i = 0; i < minLength; i += 1) {
        if (aGameVersion[i] !== bGameVersion[i]) {
            return aGameVersion[i] - bGameVersion[i];
        }
    }
    if (a.gamePreRelease !== b.gamePreRelease) {
        if (a.gamePreRelease === 'stable') {
            return 1;
        }
        if (b.gamePreRelease === 'stable') {
            return -1;
        }
    }
    if (aGameVersion.length !== bGameVersion.length) {
        return aGameVersion.length - bGameVersion.length;
    }
    return 0;
}

export type TypeDocLanguages = Record<string, Partial<Record<keyof TranslatableStrings, string>>>;
export function installLanguages(app: Application, languages: TypeDocLanguages) {
    for (const [lang, translations] of Object.entries(languages)) {
        app.internationalization.addTranslations(lang, translations);
    }
}

type TraversableJSXChildren = Exclude<JSX.Children, JSX.Children[] | null | undefined>;

function traverseJSX(jsx: JSX.Children, f: (element: TraversableJSXChildren, traverseInto: () => void) => void) {
    if (Array.isArray(jsx)) {
        for (const child of jsx) {
            traverseJSX(child, f);
        }
    } else if (jsx !== null && jsx !== undefined) {
        f(jsx, () => {
            if (typeof jsx === 'object') {
                for (const child of jsx.children) {
                    traverseJSX(child, f);
                }
            }
        });
    }
}

export function findJSXElement<E extends TraversableJSXChildren>(
    jsx: JSX.Children,
    predicate: (element: TraversableJSXChildren) => element is E
) {
    const elements: E[] = [];
    traverseJSX(jsx, (el, traverseInto) => {
        if (predicate(el)) {
            elements.push(el);
        }
        traverseInto();
    });
    return elements;
}
