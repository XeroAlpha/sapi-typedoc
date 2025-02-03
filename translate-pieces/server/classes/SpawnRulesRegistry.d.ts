/* IMPORT */ import { EntitySpawnCallbackArgs, NamespaceNameError, ObstructionCallbackArgs, SpawnRulesInvalidRegistryError, minecraftcommon } from '../index';

/**
 * @beta
 * Container for spawn rules APIs. Allows for registering
 * callbacks to extend the spawner system.
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class SpawnRulesRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an entity spawn callback to the provided key.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param id
     * The Id to associate the callback with.
     * @param callback
     * The callback that will be invoked when a spawner tests for
     * the associated predicate key.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerEntitySpawnCallback(id: string, callback: (arg0: EntitySpawnCallbackArgs) => boolean): void;
    /**
     * @remarks
     * Registers an obstruction callback to the provided key.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     * @param id
     * The Id to associate the callback with.
     * @param callback
     * The callback that will be invoked when a spawner tests for
     * the associated predicate key.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerObstructionCallback(id: string, callback: (arg0: ObstructionCallbackArgs) => boolean): void;
}