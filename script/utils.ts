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
    const stringOrNull: string | null = execSync(`git ${args}`, { cwd: basePath, encoding: 'utf-8', ...options });
    if (typeof stringOrNull === 'string') {
        return stringOrNull.trim();
    }
    return stringOrNull;
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

const LineFeedRegex = /\r\n|\r/g;

export function readTextFileSync(path: string, encoding: BufferEncoding = 'utf-8') {
    return readFileSync(path, encoding).replace(LineFeedRegex, '\n');
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

export interface GameVersion {
    base: string;
    build?: string;
    preRelease: string; // stable or preview
}

export interface PackageVersion {
    version: string;
    game: GameVersion;
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

const packageVersionRegex = /^([\d.]+-\w+)\.([\d.]+)-(\w+)(?:\.(\d+))?$/;

export function parsePackageVersion(versionString: string): PackageVersion | undefined {
    const match = packageVersionRegex.exec(versionString);
    if (match) {
        const [, version, gameVersion, gamePreRelease, gameBuild] = match;
        return {
            version,
            game: {
                base: gameVersion,
                build: gameBuild,
                preRelease: gamePreRelease
            }
        };
    }
    return undefined;
}

const dataVersionRegex = /^([\d.]+)(?:-(\w+)(?:\.(\d+))?)?$/;

export function parseDataVersion(versionString: string): GameVersion | undefined {
    const match = dataVersionRegex.exec(versionString);
    if (match) {
        const [, gameVersion, gamePreRelease, gameBuild] = match;
        return {
            base: gameVersion,
            build: gameBuild,
            preRelease: gamePreRelease ?? 'stable'
        };
    }
    return undefined;
}

export function comparePackageVersion(a: PackageVersion, b: PackageVersion) {
    const result = semver.compare(a.version, b.version);
    if (result !== 0) {
        return result;
    }
    return compareGameVersion(a.game, b.game);
}

export function compareGameVersion(a: GameVersion, b: GameVersion) {
    const parseBase = (version: string) => version.split('.').map((e) => Number.parseInt(e, 10));
    const [aBase, bBase] = [a, b].map((v) => parseBase(v.base));
    for (let i = 0; i < Math.max(aBase.length, bBase.length); i += 1) {
        const diff = (aBase[i] ?? 0) - (bBase[i] ?? 0);
        if (diff !== 0) {
            return diff;
        }
    }
    if (a.build === undefined && b.build === undefined) {
        return 0;
    }
    if (a.build === undefined) {
        return 1;
    }
    if (b.build === undefined) {
        return -1;
    }
    return Number.parseInt(a.build, 10) - Number.parseInt(b.build, 10);
}

export function formatGameVersion(version: GameVersion) {
    if (version.build) {
        return `${version.base}-${version.preRelease}.${version.build}`;
    }
    return version.base;
}

export function formatGameVersionShort(version: GameVersion) {
    if (version.build) {
        return `${version.base}.${version.build}`;
    }
    return version.base;
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
