import type { Project, SourceFile } from 'ts-morph';
import type { UnionToIntersection } from 'type-fest';
import type { Application, ProjectReflection } from 'typedoc';

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
    /**
     * 在从 node_modules 中加载组合项目之前触发。
     *
     * 用于提前对 node_modules 中安装的依赖进行处理。
     */
    beforeLoad?: HookFunction<HookContext>;
    /**
     * 在从 node_modules 中加载组合项目之后触发。
     *
     * 用于提前对加载的项目进行处理。
     */
    afterLoad?: HookFunction<TranslateHookContext>;
    /**
     * 在对组合项目应用翻译片段之后触发。
     *
     * 用于对翻译后的项目进行处理。
     */
    afterTranslate?: HookFunction<TranslateHookContext>;
    /**
     * 在组合项目写入 translated 目录后触发。
     *
     * 用于对 translated 目录进行后处理。
     */
    afterAssemble?: HookFunction<TranslateHookContext>;
    /**
     * 在 TypeDoc 解析组合项目前触发。
     *
     * 用于向 TypeDoc 注入。
     */
    beforeConvert?: HookFunction<BeforeConvertHookContext>;
    /**
     * 在 TypeDoc 解析组合项目后触发。
     *
     * 用于对 TypeDoc Reflection 进行处理。
     */
    afterConvert?: HookFunction<AfterConvertHookContext>;
    /**
     * 在 TypeDoc 生成文档页面后触发。
     *
     * 用于对 TypeDoc 生成的文档页面进行处理。
     */
    afterEmit?: HookFunction<AfterConvertHookContext>;
    /**
     * 在更新片段前触发。
     *
     * 用于对片段进行处理。
     */
    beforeUpdate?: HookFunction<TranslateHookContext>;
    /**
     * 在更新片段后触发。
     *
     * 用于对 translate-pieces 目录进行处理。
     */
    afterUpdate?: HookFunction<TranslateHookContext>;
}

declare type HookName = keyof Hook;

type HookerFnMap = {
    [K in keyof Hook]-?: (event: K, context: GetContextFromHookFunction<Hook[K]>) => void | Promise<void>;
};

declare type Hooker = UnionToIntersection<HookerFnMap[keyof HookerFnMap]>;
