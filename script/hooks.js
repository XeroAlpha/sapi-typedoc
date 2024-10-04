const { createRequire } = require('module');
const { resolve: resolvePath } = require('path');
const { readdirSync, mkdirSync } = require('fs');

const hookPath = resolvePath(__dirname, 'hooks');

function loadHooks() {
    mkdirSync(hookPath, { recursive: true });
    const hookScripts = readdirSync(hookPath).filter((name) => /\.(cjs|js)$/i.test(name));
    hookScripts.sort();
    const scriptRequire = createRequire(hookPath);
    const scriptHooks = hookScripts.map((name) => scriptRequire(resolvePath(hookPath, name)));
    const runHooks = async (event, arg) => {
        for (let i = 0; i < scriptHooks.length; i++) {
            const scriptHook = scriptHooks[i];
            const logName = `[${event}] ${hookScripts[i]}`;
            let hookFunc;
            if (typeof scriptHooks === 'function') {
                hookFunc = scriptHook.bind(null, event);
            } else {
                hookFunc = scriptHook[event];
            }
            if (hookFunc) {
                console.time(logName);
                const result = hookFunc(arg);
                if (result && result.then) await result;
                console.timeEnd(logName);
            }
        }
    };
    return runHooks;
}

module.exports = { loadHooks };
