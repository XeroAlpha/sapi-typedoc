const { execSync } = require('child_process');
const { resolve: resolvePath } = require('path');

const basePath = resolvePath(__dirname, '..');
const originalPath = resolvePath(basePath, 'original');
const translatingPath = resolvePath(basePath, 'translate-pieces');
const translatedPath = resolvePath(basePath, 'translated');
const distPath = resolvePath(basePath, 'dist');

function git(args) {
    return execSync(`git ${args}`, { cwd: basePath });
}

module.exports = {
    basePath,
    originalPath,
    translatingPath,
    translatedPath,
    distPath,
    git
};
