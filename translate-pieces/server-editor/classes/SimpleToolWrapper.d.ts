/* IMPORT */ import { IDisposable, IPlayerUISession, ISimpleTool, ISimpleToolOptions } from '../index';

/**
 * A simple class wrapper to inherit in your tool which
 * contains the initialization and storage of the simple tool
 * component utility. See one of the `Simple` samples to see
 * how to use this class and the wrapper framework
 */
export declare class SimpleToolWrapper implements IDisposable {
    get session(): IPlayerUISession;
    get simpleTool(): ISimpleTool;
    setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void;
    teardown(): void;
}