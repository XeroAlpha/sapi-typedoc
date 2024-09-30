const { git } = require('./utils.js');

function listTrackingFiles(branch) {
    const files = {};
    git(`ls-tree -r --format="%(objectname)\x09%(path)" ${branch}`)
        .toString('utf-8')
        .split('\n')
        .map((e) => e.split('\x09'))
        .forEach(([hash, path]) => {
            files[path] = hash;
        });
    return files;
}

const mainTracking = listTrackingFiles('main');
const originalTracking = listTrackingFiles('original');
const sameFiles = Object.keys(mainTracking).filter((k) => mainTracking[k] === originalTracking[k]);
const samePieces = sameFiles.filter((path) => path.startsWith('translate-pieces/'));
const randomIndex = Math.floor(Math.random() * samePieces.length);
console.log(samePieces[randomIndex]);
