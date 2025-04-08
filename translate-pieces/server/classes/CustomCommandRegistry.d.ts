/* IMPORT */ import { CustomCommand, CustomCommandError, CustomCommandOrigin, CustomCommandResult, NamespaceNameError, minecraftcommon } from '../index';

/**
 * @beta
 * Provides the functionality for registering custom commands.
 */
export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks
     * Registers a custom command that when executed triggers a
     * script callback.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback triggered when the command executes.
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
}