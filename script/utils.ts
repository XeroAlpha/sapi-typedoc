import { execSync } from 'child_process';
import { resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';

export const basePath = resolvePath(fileURLToPath(import.meta.url), '..', '..');
export const originalPath = resolvePath(basePath, 'original');
export const translatingPath = resolvePath(basePath, 'translate-pieces');
export const translatedPath = resolvePath(basePath, 'translated');
export const distPath = resolvePath(basePath, 'dist');

export function git(args: string) {
    return execSync(`git ${args}`, { cwd: basePath });
}
