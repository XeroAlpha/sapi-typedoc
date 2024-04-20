/* IMPORT */ import { IMenu, IPlayerUISession, ISimpleToolPaneComponent, ISimpleToolRailComponent, ISimpleToolStatusBarComponent } from '../index';

/**
 * The simple tool wrapper will create, bind and manage the
 * lifecycle of all the desired components. The wrapper is
 * designed to obfuscate and simplify the process of creating a
 * simple editor tool so that a creator can get on with the job
 * of just creating the tool functionality without getting
 * mired in the irrelevant details of component lifecycle and
 * visibility management. The wrapper will also attempt to
 * codify particular implementation patterns and requirements
 * that are common to all editor tools, and enforce them in a
 * consistent way. It should also go some way to insulating the
 * creator from underlying system and implementation changes as
 * the editor evolves.
 */
export interface ISimpleTool {
    get menu(): IMenu | undefined;
    get name(): string;
    get pane(): ISimpleToolPaneComponent;
    get session(): IPlayerUISession;
    get statusBar(): ISimpleToolStatusBarComponent;
    get toolRail(): ISimpleToolRailComponent;
    /**
     * @remarks
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     */
    hidePane(idString?: string): void;
    /**
     * @remarks
     */
    logDebug(message: string): void;
    /**
     * @remarks
     */
    logError(message: string): void;
    /**
     * @remarks
     */
    logInfo(message: string): void;
    /**
     * @remarks
     */
    logWarn(message: string): void;
    /**
     * @remarks
     */
    showPane(idString?: string): void;
    /**
     * @remarks
     */
    showPaneExclusively(idString: string): void;
    /**
     * @remarks
     */
    teardown(): void;
}