/**
 * @beta
 * An enum containing reasons an entity could be spawned.
 */
export enum EntitySpawnReason {
    /**
     * @remarks
     * Bred offspring.
     *
     */
    Breeding = 'Breeding',
    /**
     * @remarks
     * Spawned from a bucket (e.g. Fish)
     *
     */
    Bucket = 'Bucket',
    /**
     * @remarks
     * Spawned due to a chunk being generated.
     *
     */
    ChunkGeneration = 'ChunkGeneration',
    /**
     * @remarks
     * Spawned via the /summon command.
     *
     */
    Command = 'Command',
    /**
     * @remarks
     * Mob converted from another mob (e.g. Villager -> Zombie
     * Villager).
     *
     */
    Conversion = 'Conversion',
    /**
     * @remarks
     * Mob transferred from another dimension.
     *
     */
    DimensionTravel = 'DimensionTravel',
    /**
     * @remarks
     * Spawned via dispenser.
     *
     */
    Dispenser = 'Dispenser',
    /**
     * @remarks
     * Mobs spawned due to some in game event.
     *
     */
    Event = 'Event',
    /**
     * @remarks
     * Jockey spawned with the mob they ride (e.g. Chicken jockey).
     *
     */
    Jockey = 'Jockey',
    /**
     * @remarks
     * Mob loaded in from a saved state.
     *
     */
    Load = 'Load',
    /**
     * @remarks
     * Mobs summoned via other mobs (e.g. Vex).
     *
     */
    MobSummoned = 'MobSummoned',
    /**
     * @remarks
     * Natural Mob Spawning.
     *
     */
    Natural = 'Natural',
    /**
     * @remarks
     * Mobs spawned due to a patrol.
     *
     */
    Patrol = 'Patrol',
    /**
     * @remarks
     * Mobs spawned from the reinforcement attribute (e.g.
     * Zombies).
     *
     */
    Reinforcement = 'Reinforcement',
    /**
     * @remarks
     * Spawned from a spawn egg.
     *
     */
    SpawnEgg = 'SpawnEgg',
    /**
     * @remarks
     * Spawner spawns.
     *
     */
    Spawner = 'Spawner',
    /**
     * @remarks
     * Mobs generated specifically within some structure (Nether
     * Fortress, Ocean Monument, Witch Hut, etc).
     *
     */
    Structure = 'Structure',
    /**
     * @remarks
     * Mobs spawned from a Trial Spawner.
     *
     */
    TrialSpawner = 'TrialSpawner',
    /**
     * @remarks
     * Some type of player triggered mob spawn (e.g. Skeleton Horse
     * Traps, Wither, Snow Golem).
     *
     */
    Triggered = 'Triggered',
}