import { git } from './utils.js';

function listTrackingFiles(branch: string) {
    const files: Record<string, string> = {};
    const objectList = git(`ls-tree -r --format="%(objectname)\x09%(path)" ${branch}`).split('\n');
    for (const objectEntry of objectList) {
        const [hash, path] = objectEntry.split('\x09');
        files[path] = hash;
    }
    return files;
}

const mainTracking = listTrackingFiles('main');
const originalTracking = listTrackingFiles('original');
const sameFiles = Object.keys(mainTracking).filter((k) => mainTracking[k] === originalTracking[k]);
const samePieces = sameFiles.filter((path) => path.startsWith('translate-pieces/'));
const randomIndex = Math.floor(Math.random() * samePieces.length);
console.log(samePieces[randomIndex]);
