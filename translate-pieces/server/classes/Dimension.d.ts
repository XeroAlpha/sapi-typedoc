/* IMPORT */ import { EngineError, InvalidArgumentError, NumberRange, PropertyOutOfBoundsError, UnsupportedFunctionalityError } from '../../common';
/* IMPORT */ import { BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, CompoundBlockVolume, Entity, EntityIdentifierType, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, EntitySpawnError, ExplosionOptions, InvalidEntityError, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions } from '..';
/* IMPORT */ import { MinecraftFeatureTypes } from '../../vanilla-data';

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
    readonly heightRange: NumberRange;
    /**
     * @remarks
     * Identifier of the dimension.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Key for the localization of a dimension's name used by
     * language files.
     *
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * Searches the block volume for a block that satisfies the
     * block filter.
     *
     * @param volume
     * Volume of blocks that will be checked.
     * @param filter
     * Block filter that will be checked against each block in the
     * volume.
     * @param allowUnloadedChunks
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * Defaults to: false
     * @returns
     * Returns true if at least one block in the volume satisfies
     * the filter, false otherwise.
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
     * @worldMutation
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
     * @seeExample createExplosion.ts
     * @seeExample createNoBlockExplosion.ts
     * @seeExample createExplosions.ts
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @remarks
     * Fills an area of blocks with a specific block type.
     *
     * @worldMutation
     *
     * @param volume
     * Volume of blocks to be filled.
     * @param block
     * Type of block to fill the volume with.
     * @param options
     * A set of additional options, such as a block filter which
     * can be used to include / exclude specific blocks in the
     * fill.
     * @returns
     * Returns a ListBlockVolume which contains all the blocks that
     * were placed.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
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
     * {@link EngineError}
     *
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    /**
     * @rc
     * @remarks
     * Returns the biome type at the specified location.
     *
     * @param location
     * Location at which to check the biome.
     * @throws
     * An error will be thrown if the location is out of world
     * bounds.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;
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
     * @remarks
     * Gets the first block found above a given block location
     * based on the given options (by default will find the first
     * solid block above).
     *
     * @param location
     * Location to retrieve the block above from.
     * @param options
     * The options to decide if a block is a valid result.
     * @throws This function can throw errors.
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * Gets the first block found below a given block location
     * based on the given options (by default will find the first
     * solid block below).
     *
     * @param location
     * Location to retrieve the block below from.
     * @param options
     * The options to decide if a block is a valid result.
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
     * @remarks
     * Gets all the blocks in a volume that satisfy the filter.
     *
     * @param volume
     * Volume of blocks that will be checked.
     * @param filter
     * Block filter that will be checked against each block in the
     * volume.
     * @param allowUnloadedChunks
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * Defaults to: false
     * @returns
     * Returns the ListBlockVolume that contains all the block
     * locations that satisfied the block filter.
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
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     * @seeExample bounceSkeletons.ts
     * @seeExample tagsQuery.ts
     * @seeExample testThatEntityIsFeatherItem.ts
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
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @beta
     * @remarks
     * Returns a vector of generated structures that contain the
     * specified location (ex: Pillager Outpost, Mineshaft, etc.).
     * The vector will be empty if no structures are found.
     *
     * @param location
     * Location at which to check for structures.
     * @throws
     * An error will be thrown if the location is out of world
     * bounds.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getGeneratedStructures(location: Vector3): (MinecraftFeatureTypes | string)[];
    /**
     * @beta
     * @remarks
     * Returns the total brightness level of light shining on a
     * certain block position.
     *
     * @param location
     * Location of the block we want to check the brightness of.
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;
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
     *
     * {@link CommandError}
     *
     * {@link InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @beta
     * @remarks
     * Returns the brightness level of light shining from the sky
     * on a certain block position.
     *
     * @param location
     * Position of the block we want to check the brightness of.
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;
    /**
     * @remarks
     * Returns the highest block at the given XZ location.
     *
     * @param locationXZ
     * Location to retrieve the topmost block for.
     * @param minHeight
     * The Y height to begin the search from. Defaults to the
     * maximum dimension height.
     * @throws This function can throw errors.
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Returns the current weather.
     *
     * @returns
     * Returns a WeatherType that explains the broad category of
     * weather that is currently going on.
     */
    getWeather(): WeatherType;
    /**
     * @beta
     * @remarks
     * Returns true if the chunk at the given location is loaded
     * (and valid for use with scripting).
     *
     * @param location
     * Location to check if the chunk is loaded.
     */
    isChunkLoaded(location: Vector3): boolean;
    /**
     * @remarks
     * Places the given feature into the dimension at the specified
     * location.
     *
     * @worldMutation
     *
     * @param featureName
     * The string identifier for the feature.
     * @param location
     * Location to place the feature.
     * @param shouldThrow
     * Specifies if the function call will throw an error if the
     * feature could not be placed.
     * Note: The function call will always throw an error if using
     * an unknown feature name or trying to place in a unloaded
     * chunk.
     * Defaults to: false
     * @throws
     * An error will be thrown if the feature name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link Error}
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @remarks
     * Places the given feature rule into the dimension at the
     * specified location.
     *
     * @worldMutation
     *
     * @param featureRuleName
     * The string identifier for the feature rule.
     * @param location
     * Location to place the feature rule.
     * @throws
     * An error will be thrown if the feature rule name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @remarks
     * Plays a sound for all players.
     *
     * @worldMutation
     *
     * @param soundId
     * Identifier of the sound.
     * @param location
     * Location of the sound.
     * @param soundOptions
     * Additional options for configuring additional effects for
     * the sound.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     *
     * {@link PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * Runs a command synchronously using the context of the
     * broader dimenion.
     *
     * @worldMutation
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
     * Sets a block in the world using a BlockPermutation.
     * BlockPermutations are blocks with a particular state.
     *
     * @worldMutation
     *
     * @param location
     * The location within the dimension to set the block.
     * @param permutation
     * The block permutation to set.
     * @throws
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @remarks
     * Sets a block at a given location within the dimension.
     *
     * @worldMutation
     *
     * @param location
     * The location within the dimension to set the block.
     * @param blockType
     * The type of block to set. This can be either a string
     * identifier or a BlockType. The default block permutation is
     * used.
     * @throws
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
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
     * @worldMutation
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
     * @worldMutation
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
     * {@link EntitySpawnError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnAdultHorse.ts
     * @seeExample quickFoxLazyDog.ts
     * @seeExample triggerEvent.ts b473e4eb
     */
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;
    /**
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     *
     * @worldMutation
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
     * @seeExample itemStacks.ts
     * @seeExample spawnFeatherItem.ts
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     *
     * @worldMutation
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
     * @seeExample spawnParticle.ts 25a384c8
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @beta
     * @remarks
     * Stops all sounds from playing for all players.
     *
     * @worldMutation
     *
     */
    stopAllSounds(): void;
    /**
     * @beta
     * @remarks
     * Stops a sound from playing for all players.
     *
     * @worldMutation
     *
     * @param soundId
     * Identifier of the sound.
     */
    stopSound(soundId: string): void;
}
