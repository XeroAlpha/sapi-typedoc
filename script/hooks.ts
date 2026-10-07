import { mkdirSync, readdirSync } from 'node:fs';
import type { GetContextFromHookFunction, Hook, HookFunction, HookName } from './hooks/hook.js';

const hookPath = new URL('./hooks/', import.meta.url);

type CommonHook = Partial<Record<string, HookFunction<unknown>>>;
type CommonHooker = (event: string, context: unknown) => void | Promise<void>;

const isPromiseLike = (obj: unknown): obj is PromiseLike<unknown> => Boolean(obj && (obj as PromiseLike<unknown>).then);
const scriptSuffixRegex = /(?<!\.d)\.([cm]?[jt]s)$/i;

export interface LoadHookOptions {
    /**
     * 忽略指定的钩子。仅用于调试。
     *
     * 值为 true 时整个 Hook 不被加载。值为字符串数组时不执行指定的事件钩子。
     */
    ignoreHooks?: Record<string, boolean | HookName[]>;
}

export function listHooks() {
    mkdirSync(hookPath, { recursive: true });
    return readdirSync(hookPath)
        .filter((name) => scriptSuffixRegex.test(name))
        .sort();
}

export async function loadHooks(options?: LoadHookOptions) {
    const optIgnoredHooks = options?.ignoreHooks ?? {};
    const hookScripts = listHooks().filter((name) => optIgnoredHooks[name] !== true);
    const scriptHooks = await Promise.all(
        hookScripts.map(async (name) => {
            const mod = (await import(new URL(name, hookPath).toString())) as { default: unknown };
            const ignoredEvents = Array.isArray(optIgnoredHooks[name]) ? optIgnoredHooks[name] : [];
            return [name, mod.default, ignoredEvents] as [
                name: string,
                hook: CommonHook | CommonHooker,
                ignoredEvents: string[]
            ];
        })
    );
    const runHooks = async <E extends keyof Hook>(event: E, arg: GetContextFromHookFunction<Hook[E]>) => {
        for (const [name, hook, ignoredEvents] of scriptHooks) {
            if (ignoredEvents.includes(event)) {
                continue;
            }
            const logName = `[${event}] ${name}`;
            let hookFunc: HookFunction<unknown> | undefined;
            if (typeof hook === 'function') {
                hookFunc = hook.bind(null, event);
            } else {
                hookFunc = hook[event];
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

export const runHooks = await loadHooks();
