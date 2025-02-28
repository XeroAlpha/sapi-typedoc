import { execSync } from 'child_process';
import { resolve as resolvePath } from 'path';
import semver from 'semver';
import type { Application, TranslatableStrings } from 'typedoc';
import { fileURLToPath } from 'url';

export const basePath = resolvePath(fileURLToPath(import.meta.url), '..', '..');
export const originalPath = resolvePath(basePath, 'original');
export const translatingPath = resolvePath(basePath, 'translate-pieces');
export const translatedPath = resolvePath(basePath, 'translated');
export const distPath = resolvePath(basePath, 'dist');

export function git(args: string) {
    return execSync(`git ${args}`, { cwd: basePath });
}

export interface PackageVersion {
    version: string;
    gameVersion: string;
    gamePreRelease: string; // stable or preview
}

export function parsePackageVersion(versionString: string): PackageVersion | undefined {
    const match = /^([\d.]+-\w+)\.([\d.]+)-(\w+)(\.\d+)?$/.exec(versionString);
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
    if (result !== 0) return result;
    const [aGameVersion, bGameVersion] = [a, b].map((v) => {
        return v.gameVersion.split('.').map((e) => parseInt(e, 10));
    });
    const minLength = Math.min(aGameVersion.length, bGameVersion.length);
    for (let i = 0; i < minLength; i++) {
        if (aGameVersion[i] !== bGameVersion[i]) {
            return aGameVersion[i] - bGameVersion[i];
        }
    }
    if (a.gamePreRelease !== b.gamePreRelease) {
        if (a.gamePreRelease === 'stable') {
            return 1;
        } else if (b.gamePreRelease === 'stable') {
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
