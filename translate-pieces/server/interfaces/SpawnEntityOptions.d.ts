/**
 * @beta
 * Contains additional options for spawning an Entity.
 */
export interface SpawnEntityOptions {
    /**
     * @remarks
     * Optional boolean which determines if this entity should
     * persist in the game world. Persistence prevents the entity
     * from automatically despawning.
     *
     */
    initialPersistence?: boolean;
    /**
     * @remarks
     * Optional initial rotation, in degrees, to set on the entity
     * when it spawns.
     *
     */
    initialRotation?: number;
    /**
     * @remarks
     * Optional spawn event to send to the entity after it is
     * spawned.
     *
     */
    spawnEvent?: string;
}