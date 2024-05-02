/* IMPORT */ import { BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, CompoundBlockVolume, Entity, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, ExplosionOptions, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions, minecraftcommon } from '../index';

/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * Height range of the dimension.
     *
     * @throws This property can throw when used.
     */
    readonly heightRange: minecraftcommon.NumberRange;
    /**
     * @remarks
     * Identifier of the dimension.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks
     * Creates an explosion at the specified location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createExplosions.ts
     * ```typescript
     * // Creates an explosion of radius 15 that does not break blocks
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function createExplosions(location: DimensionLocation) {
     *     // Creates an explosion of radius 15 that does not break blocks
     *     location.dimension.createExplosion(location, 15, { breaksBlocks: false });
     *
     *     // Creates an explosion of radius 15 that does not cause fire
     *     location.dimension.createExplosion(location, 15, { causesFire: true });
     *
     *     // Creates an explosion of radius 10 that can go underwater
     *     location.dimension.createExplosion(location, 10, { allowUnderwater: true });
     * }
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @beta
     * @remarks
     * Fills an area between begin and end with block of type
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a matching block to
     * potentially replace this fill block with.
     * @returns
     *  Returns number of blocks placed.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase | CompoundBlockVolume,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @beta
     * @remarks
     * Finds the location of the closest biome of a particular
     * type. Note that the findClosestBiome operation can take some
     * time to complete, so avoid using many of these calls within
     * a particular tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param pos
     * Starting location to look for a biome to find.
     * @param biomeToFind
     * Identifier of the biome to look for.
     * @param options
     * Additional selection criteria for a biome search.
     * @returns
     * Returns a location of the biome, or undefined if a biome
     * could not be found.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    /**
     * @remarks
     * Returns a block instance at the given location.
     *
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location, or 'undefined' if asking
     * for a block at an unloaded chunk.
     * @throws
     * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
     *
     * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     *
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     *
     * @param location
     * Location from where to initiate the ray check.
     * @param direction
     * Vector direction to cast the ray.
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
     * @returns
     * An entity array.
     * @throws This function can throw errors.
     * @example checkFeatherNearby.ts
     * ```typescript
     * import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";
     *
     * // Returns true if a feather item entity is within 'distance' blocks of 'location'.
     * function isFeatherNear(location: DimensionLocation, distance: number): boolean {
     *     const items = location.dimension.getEntities({
     *         location: location,
     *         maxDistance: 20,
     *     });
     *
     *     for (const item of items) {
     *         const itemComp = item.getComponent(EntityComponentTypes.Item);
     *
     *         if (itemComp) {
     *             if (itemComp.itemStack.typeId.endsWith('feather')) {
     *                 return true;
     *             }
     *         }
     *     }
     *
     *     return false;
     * }
     * ```
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function mobParty(targetLocation: DimensionLocation) {
     *     const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *     // create some sample mob data
     *     for (let i = 0; i < 10; i++) {
     *         const mobTypeId = mobs[i % mobs.length];
     *         const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *         entity.addTag('mobparty.' + mobTypeId);
     *     }
     *
     *     const eqo: EntityQueryOptions = {
     *         tags: ['mobparty.skeleton'],
     *     };
     *
     *     for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *         entity.kill();
     *     }
     * }
     * ```
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * Returns a set of entities at a particular location.
     *
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     *
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Returns the current weather.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns a WeatherType that explains the broad category of
     * weather that is currently going on.
     */
    getWeather(): WeatherType;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * Runs a command synchronously using the context of the
     * broader dimenion.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * Returns a command result with a count of successful values
     * from the command.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks
     * Sets the current weather within the dimension
     *
     * This function can't be called in read-only mode.
     *
     * @param weatherType
     * Set the type of weather to apply.
     * @param duration
     * Sets the duration of the weather (in ticks). If no duration
     * is provided, the duration will be set to a random duration
     * between 300 and 900 seconds.
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example createOldHorse.ts
     * ```typescript
     * // Spawns an adult horse
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function spawnAdultHorse(location: DimensionLocation) {
     *     // Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult
     *     location.dimension.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', location);
     * }
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * // Spawns a fox over a dog
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnAdultHorse(location: DimensionLocation) {
     *     // Create fox (our quick brown fox)
     *     const fox = location.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *         x: location.x,
     *         y: location.y + 2,
     *         z: location.z,
     *     });
     *
     *     fox.addEffect('speed', 10, {
     *         amplifier: 2,
     *     });
     *
     *     // Create wolf (our lazy dog)
     *     const wolf = location.dimension.spawnEntity(MinecraftEntityTypes.Wolf, location);
     *     wolf.addEffect('slowness', 10, {
     *         amplifier: 2,
     *     });
     *     wolf.isSneaking = true;
     * }
     * ```
     */
    spawnEntity(identifier: string, location: Vector3, options?: SpawnEntityOptions): Entity;
    /**
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnFeatherItem.ts
     * ```typescript
     * // Spawns a feather at a location
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function spawnFeather(location: DimensionLocation) {
     *     const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
     *     location.dimension.spawnItem(featherItem, location);
     * }
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * // A function that spawns a particle at a random location near the target location for all players in the server
     * import { world, MolangVariableMap, DimensionLocation, Vector3 } from '@minecraft/server';
     *
     * function spawnConfetti(location: DimensionLocation) {
     *     for (let i = 0; i < 100; i++) {
     *         const molang = new MolangVariableMap();
     *
     *         molang.setColorRGB('variable.color', {
     *             red: Math.random(),
     *             green: Math.random(),
     *             blue: Math.random()
     *         });
     *
     *         const newLocation: Vector3 = {
     *             x: location.x + Math.floor(Math.random() * 8) - 4,
     *             y: location.y + Math.floor(Math.random() * 8) - 4,
     *             z: location.z + Math.floor(Math.random() * 8) - 4,
     *         };
     *         location.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *     }
     * }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}