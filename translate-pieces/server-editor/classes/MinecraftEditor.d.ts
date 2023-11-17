/* IMPORT */ import { Extension, ExtensionContext, ExtensionOptionalParameters, Logger, SimulationState } from '../index';

/**
 * The MinecraftEditor class is a namespace container for
 * Editor functionality which does not have any player context.
 */
export class MinecraftEditor {
    private constructor();
    /**
     * @remarks
     * A global instance of the log output class object.  This is
     * not contextualized to any particular player, and any
     * messages sent to this instance will be broadcast to all
     * connected editor client sessions
     *
     * @throws This property can throw when used.
     */
    readonly log: Logger;
    /**
     * @remarks
     * Allows querying and modifying some properties of the
     * simulation.
     *
     */
    readonly simulation: SimulationState;
    /**
     * @remarks
     * This is an internal command which interfaces with the native
     * C++ extension bindings and should not be used by creators.
     * Using this command directly will not provide any of the
     * additional functionality and wrappings that the TypeScript
     * layer will provide.
     * Creators should use the TypeScript binding
     * `registerEditorExtension` instead
     *
     * This function can't be called in read-only mode.
     *
     * @param extensionName
     * Unique name of the editor extension being registered
     * @param activationFunction
     * A code closure which is called during the activation process
     * and is responsible for setting up all of the extension
     * internal settings and UI definitions
     * @param shutdownFunction
     * A code closure which is called during the deactivation
     * process (when the player disconnects) and is responsible for
     * cleaning up any settings or allocations
     * @param options
     * [ExtensionOptionalParameters] describes an optional object
     * which contains a number of optional parameters which is used
     * to register an extension with additional information
     */
    registerExtension_Internal(
        extensionName: string,
        activationFunction: (arg: ExtensionContext) => void,
        shutdownFunction: (arg: ExtensionContext) => void,
        options?: ExtensionOptionalParameters,
    ): Extension;
}