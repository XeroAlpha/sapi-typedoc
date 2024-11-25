import { Project, SourceFile } from 'ts-morph';
import type { UnionToIntersection } from 'type-fest';
import { Application, ProjectReflection } from 'typedoc';

declare type HookFunction<Context> = (context: Context) => void | Promise<void>;

declare type GetContextFromHookFunction<T> = T extends (context: infer C) => unknown ? C : never;

declare interface HookContext {
    basePath: string;
    originalPath: string;
    translatingPath: string;
    translatedPath: string;
    distPath: string;
}

declare interface TranslateHookContext extends HookContext {
    project: Project;
    sourceFiles: SourceFile[];
    dependencies: Partial<Record<string, string>>;
}

declare interface BeforeConvertHookContext extends TranslateHookContext {
    tsdocApplication: Application;
}

declare interface AfterConvertHookContext extends BeforeConvertHookContext {
    tsdocProject: ProjectReflection;
}

declare interface Hook {
    beforeLoad?: HookFunction<HookContext>;
    afterLoad?: HookFunction<TranslateHookContext>;
    afterTranslate?: HookFunction<TranslateHookContext>;
    beforeConvert?: HookFunction<BeforeConvertHookContext>;
    afterConvert?: HookFunction<AfterConvertHookContext>;
    afterEmit?: HookFunction<AfterConvertHookContext>;
    afterUpdate?: HookFunction<AfterConvertHookContext>;
}

type HookerFnMap = {
    [k in keyof Hook]-?: (event: k, context: GetContextFromHookFunction<Hook[k]>) => void | Promise<void>;
};

declare type Hooker = UnionToIntersection<HookerFnMap[keyof HookerFnMap]>;
