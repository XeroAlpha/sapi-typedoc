/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { CustomCommand, CustomCommandError, CustomCommandOrigin, CustomCommandResult, NamespaceNameError } from '..';

/**
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
     * @throws {CustomCommandError}
     *
     * @throws {EngineError}
     *
     * @throws {NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks
     * Registers a custom command enum.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @throws {CustomCommandError}
     *
     * @throws {EngineError}
     *
     * @throws {NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}
