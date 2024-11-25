import { mkdirSync, readdirSync } from 'fs';
import { resolve as resolvePath } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import type { GetContextFromHookFunction, Hook, HookFunction } from './hooks/hook.js';

const hookPath = resolvePath(fileURLToPath(import.meta.url), '..', 'hooks');

type CommonHook = Partial<Record<string, HookFunction<unknown>>>;
type CommonHooker = (event: string, context: unknown) => void | Promise<void>;

const isPromiseLike = (obj: unknown): obj is PromiseLike<unknown> => !!(obj && (obj as PromiseLike<unknown>).then);

async function loadHooks() {
    mkdirSync(hookPath, { recursive: true });
    const hookScripts = readdirSync(hookPath).filter((name) => /(?<!\.d)\.([cm]?[jt]s)$/i.test(name));
    hookScripts.sort();
    const scriptHooks = await Promise.all(
        hookScripts
            .map((name) => pathToFileURL(resolvePath(hookPath, name)).toString())
            .map((spec) => import(spec) as Promise<{ default: CommonHook | CommonHooker }>)
    );
    const runHooks = async <E extends keyof Hook>(event: E, arg: GetContextFromHookFunction<Hook[E]>) => {
        for (let i = 0; i < scriptHooks.length; i++) {
            const scriptHook = scriptHooks[i].default;
            const logName = `[${event}] ${hookScripts[i]}`;
            let hookFunc;
            if (typeof scriptHook === 'function') {
                hookFunc = scriptHook.bind(null, event);
            } else {
                hookFunc = scriptHook[event];
            }
            if (hookFunc) {
                console.time(logName);
                const result = hookFunc(arg);
                if (isPromiseLike(result)) await result;
                console.timeEnd(logName);
            }
        }
    };
    return runHooks;
}

const runHooks = await loadHooks();

export default runHooks;
