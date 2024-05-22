/* IMPORT */ import { IDisposable, IPlayerUISession, ISimpleTool, ISimpleToolOptions } from '../index';

/**
 * A simple class wrapper to inherit in your tool which
 * contains the initialization and storage of the simple tool
 * component utility. See one of the `Simple` samples to see
 * how to use this class and the wrapper framework
 */
export declare class SimpleToolWrapper implements IDisposable {
    /**
     * @remarks
     * The player UI session that the tool is running in Use this
     * to access the player UI session, or any of the session's
     * components
     *
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * The simple tool instance that is created and managed by the
     * wrapper Use this to access any of the tools components, or
     * mess with the tools window visibility
     *
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Setup the simple tool instance with the given options This
     * will create and initialize the simple tool instance
     *
     */
    setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void;
    /**
     * @remarks
     * Teardown the simple tool instance This will call the
     * teardown function on the simple tool instance This function
     * is automatically invoked by the Editor Extension system when
     * the editor is shutting down
     *
     */
    teardown(): void;
}