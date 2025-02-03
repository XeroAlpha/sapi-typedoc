/* IMPORT */ import { Dimension, Entity, EntitySpawnType } from '../index';

/**
 * @beta
 * A container for arguments passed to
 * SpawnRulesRegistry.registerObstructionCallback
 *
 * Required Experiments:
 * - Simplified Spawn Rules
 *
 */
export class ObstructionCallbackArgs {
    private constructor();
    /**
     * @remarks
     * The dimension of the spawn.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * The entity being checked for obstruction.
     *
     */
    readonly entity: Entity;
    /**
     * @remarks
     * The entity spawn type.
     *
     */
    readonly spawnType: EntitySpawnType;
}