/* IMPORT */ import { DimensionLocation, EntitySpawnReason, EntitySpawnType } from '../index';

/**
 * @beta
 * A container for arguments passed to
 * SpawnRulesRegistry.registerEntitySpawnCallback
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class EntitySpawnCallbackArgs {
    private constructor();
    /**
     * @remarks
     * The dimension and location of the spawn.
     *
     */
    readonly dimensionLocation: DimensionLocation;
    /**
     * @remarks
     * The reason for the spawn.
     *
     */
    readonly spawnReason: EntitySpawnReason;
    /**
     * @remarks
     * The entity spawn type.
     *
     */
    readonly spawnType: EntitySpawnType;
}