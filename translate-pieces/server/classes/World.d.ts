/* IMPORT */ import { AimAssistRegistry, Dimension, Entity, EntityQueryOptions, GameRules, LocationOutOfWorldBoundariesError, MoonPhase, MusicOptions, Player, RawMessage, Scoreboard, Structure, StructureManager, TimeOfDay, Vector3, WorldAfterEvents, WorldBeforeEvents, WorldSoundOptions } from "../index";

/**
 * 表示一个世界。包含了世界的各种状态，即一系列维度以及 Minecraft 的环境。
 *
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
	private constructor();
	/**
	 * @remarks
	 * 包含适用于整个世界的一组事件。事件回调以延迟的方式调用。
	 * 事件回调在读写模式下执行。
	 *
	 * Contains a set of events that are applicable to the entirety
	 * of the world.  Event callbacks are called in a deferred
	 * manner. Event callbacks are executed in read-write mode.
	 *
	 */
	readonly afterEvents: WorldAfterEvents;
	/**
	 * @remarks
	 * 包含适用于整个世界的一组事件。事件回调会立即调用。
	 * 事件回调在只读模式下执行。
	 *
	 * Contains a set of events that are applicable to the entirety
	 * of the world. Event callbacks are called immediately. Event
	 * callbacks are executed in read-only mode.
	 *
	 * @seeExample customCommand.ts
	 */
	readonly beforeEvents: WorldBeforeEvents;
	/**
	 * @remarks
	 * 应用于世界的游戏规则。
	 *
	 * The game rules that apply to the world.
	 *
	 */
	readonly gameRules: GameRules;
	readonly isHardcore: boolean;
	/**
	 * @remarks
	 * 全局的、唯一的记分板对象。
	 *
	 * Returns the general global scoreboard that applies to the
	 * world.
	 *
	 */
	readonly scoreboard: Scoreboard;
	/**
	 * @remarks
	 * 返回与 {@link Structure} 相关的 API 管理器。
	 *
	 * Returns the manager for {@link Structure} related APIs.
	 *
	 */
	readonly structureManager: StructureManager;
	/**
	 * @beta
	 * @remarks
	 * 一种仅限内部使用的方法，用于在客户端和服务器之间广播特定消息。
	 *
	 * A method that is internal-only, used for broadcasting
	 * specific messages between client and server.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param id
	 * 消息标识符。
	 *
	 * The message identifier.
	 * @param value
	 * 消息内容。
	 *
	 * The message.
	 */
	broadcastClientMessage(id: string, value: string): void;
	/**
	 * @remarks
	 * 清除此行为包在世界中声明的动态属性集合。
	 *
	 * Clears the set of dynamic properties declared for this
	 * behavior pack within the world.
	 *
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。
	 * 时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
	 *
	 * Returns the absolute time since the start of the world.
	 * @returns 自游戏开始以来流逝的时间，以刻为单位。
	 *
	 */
	getAbsoluteTime(): number;
	/**
	 * @beta
	 * @remarks
	 * 世界中可用的目标辅助预设和类别。
	 *
	 * The aim-assist presets and categories that can be used in
	 * the world.
	 *
	 *
	 * Required Experiments:
	 * - Camera Aim Assist
	 *
	 */
	getAimAssist(): AimAssistRegistry;
	/**
	 * @remarks
	 * 获取一个包含了游戏中所有玩家的对象的数组。
	 *
	 * Returns an array of all active players within the world.
	 * @returns 返回包含了游戏中所有玩家的对象的数组。
	 * @throws This function can throw errors.
	 */
	getAllPlayers(): Player[];
	/**
	 * @remarks
	 * 返回当前的天数。
	 *
	 * Returns the current day.
	 *
	 * @returns
	 * 当前的天数，由世界时间除以每天的刻数确定。新世界从第 0 天开始。
	 *
	 * The current day, determined by the world time divided by the
	 * number of ticks per day. New worlds start at day 0.
	 */
	getDay(): number;
	/**
	 * @remarks
	 * 返回默认的主世界出生点位置。
	 *
	 * Returns the default Overworld spawn location.
	 *
	 * @returns
	 * 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，表示玩家的出生高度未固定，将由周围的方块决定。
	 *
	 * The default Overworld spawn location. By default, the Y
	 * coordinate is 32767, indicating a player's spawn height is
	 * not fixed and will be determined by surrounding blocks.
	 */
	getDefaultSpawnLocation(): Vector3;
	/**
	 * @remarks
	 * 由 `dimensionId` 获取维度对象。
	 *
	 * Returns a dimension object.
	 *
	 * @param dimensionId
	 * 要获取的维度的标识符。
	 *
	 * The name of the dimension. For example, "overworld",
	 * "nether" or "the_end".
	 * @returns
	 * 与 `dimensionId` 关联的维度对象。
	 *
	 * The requested dimension
	 * @throws
	 * 若 `dimensionId` 不与任何维度关联，抛出 `"Dimension '<dimensionId>' is invalid"`。
	 *
	 * Throws if the given dimension name is invalid
	 */
	getDimension(dimensionId: string): Dimension;
	/**
	 * @remarks
	 * 获取由 `identifier` 指定的世界中已定义的动态属性的值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 动态属性的标识符。
	 *
	 * The property identifier.
	 * @returns
	 * 返回动态属性 `identifier` 的值。属性的值尚未设定时，返回 `undefined`。
	 *
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws
	 * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"` 。
	 *
	 * Throws if the given dynamic property identifier is not
	 * defined.
	 * @seeExample incrementDynamicProperty.ts
	 * @seeExample incrementDynamicPropertyInJsonBlob.ts
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 获取世界中已设置的动态属性标识符集合。
	 *
	 * Gets a set of dynamic property identifiers that have been
	 * set in this world.
	 *
	 * @returns
	 * 一个包含活动动态属性标识符的字符串数组。
	 *
	 * A string array of active dynamic property identifiers.
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 获取动态属性的总字节数。这可以用于分析以确保未存储过大的动态属性集合。
	 *
	 * Gets the total byte count of dynamic properties. This could
	 * potentially be used for your own analytics to ensure you're
	 * not storing gigantic sets of dynamic properties.
	 *
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 根据提供的 id 返回实体。
	 *
	 * Returns an entity based on the provided id.
	 *
	 * @param id
	 * 实体的 id。
	 *
	 * The id of the entity.
	 * @returns
	 * 请求的实体对象。
	 *
	 * The requested entity object.
	 * @throws
	 * 若提供的实体 id 无效，则抛出错误。
	 *
	 * Throws if the given entity id is invalid.
	 */
	getEntity(id: string): Entity | undefined;
	/**
	 * @remarks
	 * 返回当前时间的月相。
	 *
	 * Returns the MoonPhase for the current time.
	 *
	 */
	getMoonPhase(): MoonPhase;
	/**
	 * @remarks
	 * 列出世界上的玩家，可使用 `options` 指定的实体查询选项对其进行筛选。
	 *
	 * Returns a set of players based on a set of conditions
	 * defined via the EntityQueryOptions set of filter criteria.
	 *
	 * @param options
	 * 可选的参数，用作于筛选指定条件的玩家。
	 *
	 * 注意，不能使用接口中的 `type`、`location`、`maxDistance`、`minDistance` 或 `volume` 属性。
	 *
	 * Additional options that can be used to filter the set of
	 * players returned.
	 * @returns
	 * 一个玩家数组。
	 *
	 * A player array.
	 * @throws
	 * 若向 `options` 传入的对象含有 `type` 属性，抛出 `"command.generic.invalidPlayerType"`。
	 *
	 * 若向 `options` 传入的对象含有 `location`、`maxDistance`、`minDistance` 或 `volume` 属性，抛出 `"EntityQueryOptions property '<property>' is incompatible with function world.getPlayers"`。
	 *
	 * Throws if the provided EntityQueryOptions are invalid.
	 */
	getPlayers(options?: EntityQueryOptions): Player[];
	/**
	 * @remarks
	 * 返回当前一天中的时间。
	 *
	 * Returns the time of day.
	 *
	 * @returns
	 * 当前一天中的时间，以刻为单位，为 `0` 至 `24000` 之间的整数。
	 *
	 * The time of day, in ticks, between 0 and 24000.
	 */
	getTimeOfDay(): number;
	/**
	 * @remarks
	 * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会有任何效果。
	 *
	 * Plays a particular music track for all players.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param trackId 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
	 * @param musicOptions 可选，指定播放音乐使用的附加参数。
	 * @throws This function can throw errors.
	 * @seeExample playMusicAndSound.ts
	 */
	playMusic(trackId: string, musicOptions?: MusicOptions): void;
	/**
	 * @remarks
	 * 向玩家播放一段声音。
	 *
	 * Plays a sound for all players. DEPRECATED: Use
	 * Dimension.playSound.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param soundId 声音项目的标识符。
	 * @param soundOptions 可选，指定播放声音使用的附加参数。
	 * @throws
	 * 若音量小于 0.0，将抛出错误。
	 * 若渐变时间小于 0.0，将抛出错误。
	 * 若音调小于 0.01，将抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0.
	 * An error will be thrown if fade is less than 0.0.
	 * An error will be thrown if pitch is less than 0.01.
	 * @seeExample playMusicAndSound.ts
	 */
	playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
	/**
	 * @remarks
	 * 将音乐添加到播放列表。若没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
	 *
	 * Queues an additional music track for players. If a track is
	 * not playing, a music track will play.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param trackId
	 * 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
	 *
	 * Identifier of the music track to play.
	 * @param musicOptions
	 * 可选，指定播放音乐使用的附加参数。
	 *
	 * Additional options for the music track.
	 * @throws
	 * 若音量小于 0.0，将抛出错误。
	 * 若渐变时间小于 0.0，将抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0.
	 * An error will be thrown if fade is less than 0.0.
	 *
	 */
	queueMusic(trackId: string, musicOptions?: MusicOptions): void;
	/**
	 * @remarks
	 * 向所有玩家广播一条消息。
	 *
	 * Sends a message to all players.
	 *
	 * @param message
	 * 将要广播的一段消息。
	 * 这段消息可能是一段字符串，或者符合 `RawMessage` 接口的对象，或是这两种类型的组合。
	 *
	 * The message to be displayed.
	 * @throws
	 * 该方法在 `message` 格式不正确时会抛出错误。例如 `score` 的 `name` 为空字符串时。
	 *
	 * This method can throw if the provided {@link RawMessage} is
	 * in an invalid format. For example, if an empty `name` string
	 * is provided to `score`.
	 */
	sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
	/**
	 * @remarks
	 * 设置世界时间。
	 *
	 * Sets the world time.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param absoluteTime
	 * 世界时间，以刻为单位。
	 *
	 * The world time, in ticks.
	 */
	setAbsoluteTime(absoluteTime: number): void;
	/**
	 * @remarks
	 * 设置所有玩家的默认出生点。
	 *
	 * Sets a default spawn location for all players.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param spawnLocation
	 * 出生点的位置。注意，这默认假定在主世界维度中。
	 *
	 * Location of the spawn point. Note that this is assumed to be
	 * within the overworld dimension.
	 * @throws
	 * 若提供的出生点超出边界，将抛出错误。
	 *
	 * Throws if the provided spawn location is out of bounds.
	 *
	 * {@link Error}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setDefaultSpawnLocation(spawnLocation: Vector3): void;
	/**
	 * @beta
	 * @remarks
	 * 设置多个动态属性的具体值。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 包含动态属性键值对的记录。
	 *
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws This function can throw errors.
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 为世界动态属性 `identifier` 设置一个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 动态属性的标识符。
	 *
	 * The property identifier.
	 * @param value
	 * 要设定的值，值的类型必须与动态属性注册的类型相同。
	 *
	 * Data value of the property to set.
	 * @throws
	 * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
	 *
	 * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
	 *
	 * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所允许的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
	 *
	 * Throws if the given dynamic property identifier is not
	 * defined.
	 * @seeExample incrementDynamicProperty.ts
	 * @seeExample incrementDynamicPropertyInJsonBlob.ts
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 设置一天中的时间。
	 *
	 * Sets the time of day.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param timeOfDay
	 * 一天中的时间，以刻为单位，为 `0` 至 `24000` 之间的整数。
	 *
	 * The time of day, in ticks, between 0 and 24000.
	 * @throws
	 * 若提供的时间不在有效范围内，将抛出错误。
	 *
	 * Throws if the provided time of day is not within the valid
	 * range.
	 */
	setTimeOfDay(timeOfDay: number | TimeOfDay): void;
	/**
	 * @remarks
	 * 停止客户端中正在播放的所有音乐曲目（需要更多测试）。
	 *
	 * Stops any music tracks from playing.
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	stopMusic(): void;
}
