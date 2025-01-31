/**
 * @beta
 * An enum containing categories of entity spawning.
 */
export enum EntitySpawnCategory {
    /**
     * @remarks
     * Mobs that have an ambient spawn.
     *
     */
    Ambient = 'Ambient',
    /**
     * @remarks
     * Specific spawn for axolotls.
     *
     */
    Axolotls = 'Axolotls',
    /**
     * @remarks
     * Creature spawns.
     *
     */
    Creature = 'Creature',
    /**
     * @remarks
     * Miscellaneous spawns ( e.g. Villager, Iron Golem).
     *
     */
    Misc = 'Misc',
    /**
     * @remarks
     * Monster spawns.
     *
     */
    Monster = 'Monster',
    /**
     * @remarks
     * Creatures that spawn underground in the water.
     *
     */
    UndergroundWaterCreature = 'UndergroundWaterCreature',
    /**
     * @remarks
     * Water mobs that have an ambient spawn.
     *
     */
    WaterAmbient = 'WaterAmbient',
    /**
     * @remarks
     * Water creature spawns.
     *
     */
    WaterCreature = 'WaterCreature',
}