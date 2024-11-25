import { build } from './build.js';
import { update } from './update.js';

const action = (process.argv[2] ?? '').toLowerCase();
if (action === 'build') {
    await build(true);
} else if (action === 'build-original') {
    await build(false);
} else if (action === 'update') {
    await update(false);
} else if (action === 'update-cached') {
    await update(true);
}
