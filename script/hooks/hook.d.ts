import { Project, SourceFile } from 'ts-morph';
import { Application, ProjectReflection } from 'typedoc';

declare type HookFunction<Context> = (context: Context) => void | Promise<void>;

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
    dependencies: Record<string, string>;
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
