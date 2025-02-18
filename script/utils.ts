import { execSync } from 'child_process';
import { resolve as resolvePath } from 'path';
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

export type TypeDocLanguages = Record<string, Partial<Record<keyof TranslatableStrings, string>>>;
export function installLanguages(app: Application, languages: TypeDocLanguages) {
    for (const [lang, translations] of Object.entries(languages)) {
        app.internationalization.addTranslations(lang, translations);
    }
}
