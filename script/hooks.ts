import { mkdirSync, readdirSync } from 'node:fs';
import type { GetContextFromHookFunction, Hook, HookFunction } from './hooks/hook.js';

const hookPath = new URL('./hooks/', import.meta.url);

type CommonHook = Partial<Record<string, HookFunction<unknown>>>;
type CommonHooker = (event: string, context: unknown) => void | Promise<void>;

const isPromiseLike = (obj: unknown): obj is PromiseLike<unknown> => Boolean(obj && (obj as PromiseLike<unknown>).then);
const scriptSuffixRegex = /(?<!\.d)\.([cm]?[jt]s)$/i;

async function loadHooks() {
    mkdirSync(hookPath, { recursive: true });
    const hookScripts = readdirSync(hookPath)
        .filter((name) => scriptSuffixRegex.test(name))
        .sort();
    const scriptHooks = await Promise.all(
        hookScripts.map(
            (name) => import(new URL(name, hookPath).toString()) as Promise<{ default: CommonHook | CommonHooker }>
        )
    );
    const runHooks = async <E extends keyof Hook>(event: E, arg: GetContextFromHookFunction<Hook[E]>) => {
        for (let i = 0; i < scriptHooks.length; i += 1) {
            const scriptHook = scriptHooks[i].default;
            const logName = `[${event}] ${hookScripts[i]}`;
            let hookFunc: HookFunction<unknown> | undefined;
            if (typeof scriptHook === 'function') {
                hookFunc = scriptHook.bind(null, event);
            } else {
                hookFunc = scriptHook[event];
            }
            if (hookFunc) {
                console.time(logName);
                const result = hookFunc(arg);
                if (isPromiseLike(result)) {
                    await result;
                }
                console.timeEnd(logName);
            }
        }
    };
    return runHooks;
}

const runHooks = await loadHooks();

export default runHooks;
