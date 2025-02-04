/* IMPORT */ import { BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, CompoundBlockVolume, Entity, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, EntityType, ExplosionOptions, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions, minecraftcommon } from '../index';

/**
 * 表示世界中的特定维度（例如，末地）的类。
 *
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
	private constructor();
	/**
	 * @remarks
	 * 维度的高度范围。
	 *
	 * Height range of the dimension.
	 *
	 * @throws This property can throw when used.
	 */
	readonly heightRange: minecraftcommon.NumberRange;

	/**
	 * @remarks
	 * 维度的标识符。
	 *
	 * Identifier of the dimension.
	 *
	 */
	readonly id: string;

	/**
	 * @remarks
	 * 在方块区域中查找满足方块过滤器的方块。
	 *
	 * Searches the block volume for a block that satisfies the block filter.
	 *
	 * @param volume
	 * 要检查的方块区域。
	 *
	 * Volume of blocks that will be checked.
	 *
	 * @param filter
	 * 将会检查方块体积中的每一个方块的方块过滤器。
	 *
	 * Block filter that will be checked against each block in the volume.
	 *
	 * @param allowUnloadedChunks
	 * 若设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
	 * 将只检查方块体积中加载的区块的位置。
	 *
	 * If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.
	 *
	 * @returns
	 * 若方块体积中至少有一个方块满足过滤器，将返回 true，否则返回 false。
	 *
	 * Returns true if at least one block in the volume satisfies
	 * the filter, false otherwise.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link UnloadedChunksError}
	 */
	containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;

	/**
	 * @remarks
	 * 在指定位置创建一个爆炸。
	 *
	 * Creates an explosion at the specified location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 爆炸的位置。
	 *
	 * The location of the explosion.
	 *
	 * @param radius
	 * 要创建的爆炸半径，单位为方块。
	 *
	 * Radius, in blocks, of the explosion to create.
	 *
	 * @param explosionOptions
	 * 爆炸的附加配置选项。
	 *
	 * Additional configurable options for the explosion.
	 *
	 * @throws
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
	 * 用特定的方块类型填充一个区域。
	 *
	 * Fills an area of blocks with a specific block type.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param volume
	 * 要填充的方块区域。
	 *
	 * Volume of blocks to be filled.
	 *
	 * @param block
	 * 要用来填充区域的方块类型。
	 *
	 * Type of block to fill the volume with.
	 *
	 * @param options
	 * 额外的选项，例如可用于包括/排除特定方块的方块过滤器。
	 *
	 * A set of additional options, such as a block filter which can be used to include / exclude specific blocks in the fill.
	 *
	 * @returns
	 * 返回包含所有放置的方块的 ListBlockVolume。
	 *
	 * Returns a ListBlockVolume which contains all the blocks that were placed.
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
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
	 * 查找离特定类型最近的生物群系的位置。
	 * 请注意，findClosestBiome 操作可能需要一些时间才能完成，
	 * 因此避免在特定 tick 内使用大量此类调用。
	 *
	 * Finds the location of the closest biome of a particular type. Note that the findClosestBiome operation can take some time to complete, so avoid using many of these calls within a particular tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param pos 起始位置，以开始查找生物群系。
	 *
	 * Starting location to look for a biome to find.
	 *
	 * @param biomeToFind 要查找的生物群系标识符。
	 *
	 * Identifier of the biome to look for.
	 *
	 * @param options 查找生物群系的附加筛选条件。
	 *
	 * Additional selection criteria for a biome search.
	 *
	 * @returns 返回生物群系的位置，若未找到生物群系则返回 undefined。
	 *
	 * Returns a location of the biome, or undefined if a biome could not be found.
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 */
	findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;

	/**
	 * @remarks
	 * 返回给定位置的方块实例。
	 *
	 * Returns a block instance at the given location.
	 *
	 * @param location 
	 * 用于返回方块的位置。
	 *
	 * The location at which to return a block.
	 *
	 * @returns
	 * 指定位置的方块，若请求的方块在未加载的区块中，则返回 'undefined'。
	 *
	 * Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.
	 *
	 * @throws
	 *
	 * PositionInUnloadedChunkError: 尝试与不再位于加载和 ticking 区块内的方块对象交互时引发的异常。
	 * 
	 * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
	 * PositionOutOfWorldBoundariesError: 尝试与超出维度高度范围的位置交互时引发的异常。
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
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

	/**
	 * @beta
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;

	/**
	 * @remarks
	 * 获取从一个位置发出向量射线相交的第一个方块。
	 *
	 * Gets the first block that intersects with a vector emanating from a location.
	 *
	 * @param location
	 * 开始射线检测的位置。
	 *
	 * Location from where to initiate the ray check.
	 *
	 * @param direction
	 * 进行射线检测的向量方向。
	 *
	 * Vector direction to cast the ray.
	 *
	 * @param options
	 * 处理此射线查询的其他选项。
	 *
	 * Additional options for processing this raycast query.
	 *
	 * @throws
	 */
	getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;

	/**
	 * @remarks
	 * 获取区域内满足过滤器的所有方块。
	 *
	 * Gets all the blocks in a volume that satisfy the filter.
	 *
	 * @param volume
	 * 要检查的方块数量。
	 *
	 * Volume of blocks that will be checked.
	 *
	 * @param filter
	 * 将会检查方块体积中的每一个方块的方块过滤器。
	 *
	 * Block filter that will be checked against each block in the volume.
	 *
	 * @param allowUnloadedChunks
	 * 若设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
	 * 将只检查方块体积中加载的区块的位置。
	 *
	 * If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.
	 *
	 * @returns
	 * 返回包含所有满足方块过滤器的方块位置的 ListBlockVolume。
	 *
	 * Returns the ListBlockVolume that contains all the block locations that satisfied the block filter.
	 *
	 * @throws
	 *
	 * @link Error
	 *
	 * @link UnloadedChunksError
	 */
	getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;

	/**
	 * @remarks
	 * 根据 EntityQueryOptions 里定义的条件，返回一组实体。
	 *
	 * Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
	 *
	 * @param options
	 * 过滤返回的实体的一组附加选项。
	 *
	 * Additional options that can be used to filter the set of entities returned.
	 *
	 * @returns
	 * 一个实体数组。
	 *
	 * An entity array.
     * @throws This function can throw errors.
     * @seeExample bounceSkeletons.ts
     * @seeExample tagsQuery.ts
     * @seeExample testThatEntityIsFeatherItem.ts
     */
	getEntities(options?: EntityQueryOptions): Entity[];
	/**
	 * @remarks
	 * 返回特定位置的一组实体。
	 *
	 * Returns a set of entities at a particular location.
	 *
	 * @param location
	 * 用于返回实体的位置。
	 *
	 * The location at which to return entities.
	 *
	 * @returns
	 * 指定位置的零个或多个实体。
	 *
	 * Zero or more entities at the specified location.
	 */
	getEntitiesAtBlockLocation(location: Vector3): Entity[];

	/**
	 * @remarks
	 * 获取从一个位置发出向量射线相交的实体。
	 *
	 * Gets entities that intersect with a specified vector emanating from a location.
	 *
	 * @param options
	 * 处理此射线查询的其他选项。
	 *
	 * Additional options for processing this raycast query.
	 *
	 * @throws
	 * */
	getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];

	/**
	 * @remarks
	 * 根据 {@link EntityQueryOptions} 里定义的条件，返回一组玩家。
	 *
	 * Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.
	 *
	 * @param options
	 * 过滤返回的玩家的一组附加选项。
	 *
	 * Additional options that can be used to filter the set of players returned.
	 *
	 * @returns
	 * 一个玩家数组。
	 *
	 * A player array.
	 *
	 * @throws
	 * */
	getPlayers(options?: EntityQueryOptions): Player[];

	/**
	 * @remarks
	 * 返回给定 XZ 位置的最高方块。
	 *
	 * Returns the highest block at the given XZ location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param locationXZ
	 * 要检索最高方块的位置。
	 *
	 * Location to retrieve the topmost block for.
	 *
	 * @param minHeight
	 * 开始搜索的 Y 坐标。默认为最大维度高度。
	 *
	 * The Y height to begin the search from. Defaults to the
     * maximum dimension height.
     * @throws This function can throw errors.
     */
	getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;

	/**
	 * @beta
	 * @remarks
	 * 返回当前的天气。
	 *
	 * Returns the current weather.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个 WeatherType，说明当前的天气。
	 *
	 * Returns a WeatherType that explains the broad category of weather that is currently going on.
	 */
	getWeather(): WeatherType;
	/**
     * @beta
     * @remarks
     * 将指定的地形特征放置在维度中的指定位置。
     * 
     * Places the given feature into the dimension at the specified
     * location.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * This function can't be called in read-only mode.
     * 
     * @param featureName
     * 地形特征的字符串标识符。
     * 
     * The string identifier for the feature.
     * @param location
     * 放置地形特征的位置。
     * 
     * Location to place the feature.
     * @param shouldThrow
     * 指定如果无法放置地形特征时是否抛出错误。
     * 注意：如果使用未知的地形特征名称或尝试在未加载的区块中放置，
     * 函数调用将始终抛出错误。
     * 
     * Specifies if the function call will throw an error if the
     * feature could not be placed.
     * Note: The function call will always throw an error if using
     * an unknown feature name or trying to place in a unloaded
     * chunk.
     * @throws
     * 如果地形特征名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     * 
     * An error will be thrown if the feature name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * 将指定的地形特征规则放置在维度中的指定位置。
     * 
     * Places the given feature rule into the dimension at the
     * specified location.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * This function can't be called in read-only mode.
     * 
     * @param featureRuleName
     * 地形特征规则的字符串标识符。
     * 
     * The string identifier for the feature rule.
     * @param location
     * 放置地形特征规则的位置。
     * 
     * Location to place the feature rule.
     * @throws
     * 如果地形特征规则名称无效，将抛出错误。
     * 如果位置在未加载的区块中，将抛出错误。
     * 
     * An error will be thrown if the feature rule name is invalid.
     * An error will be thrown if the location is in an unloaded
     * chunk.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;

	/**
	 * @remarks
	 * 为所有玩家播放声音。
	 *
	 * Plays a sound for all players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param soundId
	 * 声音的标识符。
	 *
	 * Identifier of the sound.
	 *
	 * @param location
	 * 声音的位置。
	 *
	 * Location of the sound.
	 *
	 * @param soundOptions
	 * 额外的音效配置选项。
	 *
	 * Additional options for configuring additional effects for
     * the sound.
	 * @throws
	 * 若音量小于 0.0，将抛出错误。
	 * 若音频淡入淡出值小于 0.0，则抛出错误。
	 * 若音高小于 0.01，则抛出错误。
	 * 若音量小于 0.0，将抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     */
	playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;

	/**
	 * @remarks
	 * 使用更宽广维度的上下文同步运行命令。
	 *
	 * Runs a command synchronously using the context of the broader dimenion.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param commandString
	 * 要运行的命令。请注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start with slash.
	 *
	 * @returns
	 * 返回命令结果，包含成功值。
	 *
	 * Returns a command result with a count of successful values from the command.
	 *
	 * @throws
	 * 若命令由于参数或命令语法不正确或命令错误情况而失败，则抛出异常。
	 * 请注意，在许多情况下，若命令不执行（例如，一个目标选择器没有找到匹配），这个方法不会抛出异常。
	 *
	 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
	 *
	 * {@link CommandError}
	 */
	runCommand(commandString: string): CommandResult;

	/**
	 * @attention 注：此方法在最新版已被删除，这里为了兼容性保留
	 * 
	 * @remarks
	 * 从更广泛的维度上下文运行一个特定的命令异步。
	 * 请注意，在给定的 tick 内最大可运行 128 个异步命令。
	 *
	 * Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.
	 *
	 * @param commandString
	 * 要运行的命令。请注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start with slash.
	 *
	 * @returns
	 * 对于返回数据的命令，返回一个 CommandResult，指示命令结果。
	 *
	 * For commands that return data, returns a CommandResult with an indicator of command results.
	 *
	 * @throws
	 * 若命令由于参数或命令语法不正确或命令错误情况而失败，则抛出异常。
	 * 请注意，在许多情况下，若命令不操作（例如，在选择器没有找到匹配），此方法不会抛出异常。
	 *
	 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
	 */
	runCommandAsync(commandString: string): Promise<CommandResult>;

	/**
	 * @remarks
	 * 使用 BlockPermutation（带有特定状态的方块）在世界中设置一个方块。
	 *
	 * Sets a block in the world using a BlockPermutation. BlockPermutations are blocks with a particular state.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 要设置方块的维度位置。
	 *
	 * The location within the dimension to set the block.
	 *
	 * @param permutation
	 * 要设置的方块排列。
	 *
	 * The block permutation to set.
	 *
	 * @throws
	 * 若位置在未加载的块内或超出世界边界，将抛出错误。
	 *
	 * Throws if the location is within an unloaded chunk or outside of the world bounds.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * @link LocationOutOfWorldBoundariesError
	 */
	setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
	/**
	 * @remarks
	 * 在维度内的指定位置设置一个方块。
	 *
	 * Sets a block at a given location within the dimension.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param location
	 * 维度内设置方块的位置。
	 *
	 * The location within the dimension to set the block.
	 * @param blockType
	 * 要设置的方块类型。这可以是一个字符串标识符或 BlockType。默认使用方块排列。
	 *
	 * The type of block to set. This can be either a string
	 * identifier or a BlockType. The default block permutation is
	 * used.
	 * @throws
	 * 若位置在未加载的区块内或在世界边界之外，则抛出错误。
	 *
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
	 * 设置维度内的当前天气。
	 *
	 * Sets the current weather within the dimension.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param weatherType
	 * 设置要应用的天气类型。
	 *
	 * Set the type of weather to apply.
	 * @param duration
	 * 设置天气的持续时间（以刻为单位）。若未提供持续时间，则持续时间将设置为 300 到 900 秒之间的随机值。
	 *
	 * Sets the duration of the weather (in ticks). If no duration
	 * is provided, the duration will be set to a random duration
	 * between 300 and 900 seconds.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setWeather(weatherType: WeatherType, duration?: number): void;
	/**
	 * @remarks
	 * 在指定位置创建一个新的实体（例如，一个生物）。
	 *
	 * Creates a new entity (e.g., a mob) at the specified
	 * location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param identifier
	 * 要生成的实体类型的标识符。若未指定命名空间，则假定为 'minecraft:'。
	 *
	 * Identifier of the type of entity to spawn. If no namespace
	 * is specified, 'minecraft:' is assumed.
	 * @param location
	 * 创建实体的位置。
	 *
	 * The location at which to create the entity.
	 * @returns
	 * 在指定位置新创建的实体。
	 *
	 * Newly created entity at the specified location.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample spawnAdultHorse.ts
	 * @seeExample quickFoxLazyDog.ts
	 * @seeExample triggerEvent.ts b473e4eb
	 */
	spawnEntity(identifier: string, location: Vector3, options?: SpawnEntityOptions): Entity;
	/**
	 * @remarks
	 * 在指定位置创建一个新的物品堆作为实体。
	 *
	 * Creates a new item stack as an entity at the specified
	 * location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param location
	 * 创建物品堆的位置。
	 *
	 * The location at which to create the item stack.
	 * @returns
	 * 在指定位置新创建的物品堆实体。
	 *
	 * Newly created item stack entity at the specified location.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
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
	 * 在世界的指定位置创建一个新的粒子发射器。
	 *
	 * Creates a new particle emitter at a specified location in
	 * the world.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param effectName
	 * 要创建的粒子的标识符。
	 *
	 * Identifier of the particle to create.
	 * @param location
	 * 创建粒子发射器的位置。
	 *
	 * The location at which to create the particle emitter.
	 * @param molangVariables
	 * 一组可选的、可定制的变量，可为此粒子调整。
	 *
	 * A set of optional, customizable variables that can be
	 * adjusted for this particle.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 * @seeExample spawnParticle.ts 25a384c8
	 */
	spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}
