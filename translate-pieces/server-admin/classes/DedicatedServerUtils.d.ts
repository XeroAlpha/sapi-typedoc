/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { AllowList, LevelStorage } from '..';

/**
 * Contains apis that are only available when in Bedrock
 * Dedicated Server.
 */
export class DedicatedServerUtils {
    private constructor();
    /**
     * @remarks
     * Returns an object that manages the server's allow list.
     *
     */
    readonly allowList: AllowList;
    /**
     * @remarks
     * Returns an object that manages the level's storage.
     *
     */
    readonly levelStorage: LevelStorage;
    /**
     * @remarks
     * Reloads the cdn configuration from disk.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadCDNConfig(): void;
    /**
     * @remarks
     * Reloads the permissions for the server from disk.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadPermissions(): void;
    /**
     * @remarks
     * Reloads the script configuration for the server from disk.
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     */
    reloadScriptingConfig(): void;
    /**
     * @remarks
     * Shuts down the dedicated server.
     *
     */
    stopServer(): void;
}
