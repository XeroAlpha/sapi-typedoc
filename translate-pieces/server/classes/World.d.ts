/* IMPORT */ import { Dimension, Entity, EntityQueryOptions, GameRules, LocationOutOfWorldBoundariesError, MoonPhase, MusicOptions, Player, RawMessage, Scoreboard, Structure, StructureManager, TimeOfDay, Vector3, WorldAfterEvents, WorldBeforeEvents, WorldSoundOptions } from '../index';

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
     * Contains a set of events that are applicable to the entirety
     * of the world.  Event callbacks are called in a deferred
     * manner. Event callbacks are executed in read-write mode.
     *
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks
     * Contains a set of events that are applicable to the entirety
     * of the world. Event callbacks are called immediately. Event
     * callbacks are executed in read-only mode.
     *
     */
    readonly beforeEvents: WorldBeforeEvents;
    /**
     * @remarks
     * The game rules that apply to the world.
     *
     */
    readonly gameRules: GameRules;
    /**
     * @rc
     */
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
     * Returns the manager for {@link Structure} related APIs.
     *
     */
    readonly structureManager: StructureManager;
    /**
     * @beta
     * @remarks
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     *
     * This function can't be called in read-only mode.
     *
     * @param id
     * The message identifier.
     * @param value
     * The message.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @remarks
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
     * Returns the current day.
     *
     * @returns
     * The current day, determined by the world time divided by the
     * number of ticks per day. New worlds start at day 0.
     */
    getDay(): number;
    /**
     * @remarks
     * Returns the default Overworld spawn location.
     *
     * @returns
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
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import * as mc from '@minecraft/server';
     *
     * function incrementProperty(propertyName: string): boolean {
     *     let number = mc.world.getDynamicProperty(propertyName);
     *
     *     console.warn('Current value is: ' + number);
     *
     *     if (number === undefined) {
     *         number = 0;
     *     }
     *
     *     if (typeof number !== 'number') {
     *         console.warn('Number is of an unexpected type.');
     *         return false;
     *     }
     *
     *     mc.world.setDynamicProperty(propertyName, number + 1);
     *     return true;
     * }
     *
     * incrementProperty('samplelibrary:number');
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import * as mc from '@minecraft/server';
     *
     * function updateWorldProperty(propertyName: string): boolean {
     *     let paintStr = mc.world.getDynamicProperty(propertyName);
     *     let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *     console.log('Current value is: ' + paintStr);
     *
     *     if (paintStr === undefined) {
     *         paint = {
     *             color: 'purple',
     *             intensity: 0,
     *         };
     *     } else {
     *         if (typeof paintStr !== 'string') {
     *             console.warn('Paint is of an unexpected type.');
     *             return false;
     *         }
     *
     *         try {
     *             paint = JSON.parse(paintStr);
     *         } catch (e) {
     *             console.warn('Error parsing serialized struct.');
     *             return false;
     *         }
     *     }
     *
     *     if (!paint) {
     *         console.warn('Error parsing serialized struct.');
     *         return false;
     *     }
     *
     *     paint.intensity++;
     *     paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *     mc.world.setDynamicProperty(propertyName, paintStr);
     *
     *     return true;
     * }
     *
     * updateWorldProperty('samplelibrary:longerjson');
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Gets a set of dynamic property identifiers that have been
     * set in this world.
     *
     * @returns
     * A string array of active dynamic property identifiers.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Gets the total byte count of dynamic properties. This could
     * potentially be used for your own analytics to ensure you're
     * not storing gigantic sets of dynamic properties.
     *
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns an entity based on the provided id.
     *
     * @param id
     * The id of the entity.
     * @returns
     * The requested entity object.
     * @throws
     * Throws if the given entity id is invalid.
     */
    getEntity(id: string): Entity | undefined;
    /**
     * @remarks
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
     * @param trackID 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, Vector3 } from '@minecraft/server';
     * import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';
     *
     * const players = world.getPlayers();
     * const targetLocation: Vector3 = {
     *     x: 0,
     *     y: 0,
     *     z: 0,
     * };
     *
     * const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     * };
     * world.playMusic('music.menu', musicOptions);
     *
     * const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     * };
     * const overworld = world.getDimension(MinecraftDimensionTypes.Overworld);
     * overworld.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     * const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     * };
     *
     * players[0].playSound('bucket.fill_water', playerSoundOptions);
     * ```
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
     * @param soundID 声音项目的标识符。
     * @param soundOptions 可选，指定播放声音使用的附加参数。
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, Vector3 } from '@minecraft/server';
     * import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';
     *
     * const players = world.getPlayers();
     * const targetLocation: Vector3 = {
     *     x: 0,
     *     y: 0,
     *     z: 0,
     * };
     *
     * const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     * };
     * world.playMusic('music.menu', musicOptions);
     *
     * const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     * };
     * const overworld = world.getDimension(MinecraftDimensionTypes.Overworld);
     * overworld.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     * const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     * };
     *
     * players[0].playSound('bucket.fill_water', playerSoundOptions);
     * ```
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
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
     * @example nestedTranslation.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * // Displays "Apple or Coal"
     * const rawMessage = {
     *     translate: 'accessibility.list.or.two',
     *     with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     * };
     * world.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: '*', objective: 'obj' } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * // Displays "Hello, world!"
     * world.sendMessage('Hello, world!');
     * ```
     * @example translation.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * // Displays "First or Second"
     * const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
     * world.sendMessage(rawMessage);
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets the world time.
     *
     * This function can't be called in read-only mode.
     *
     * @param absoluteTime
     * The world time, in ticks.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks
     * Sets a default spawn location for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @param spawnLocation
     * Location of the spawn point. Note that this is assumed to be
     * within the overworld dimension.
     * @throws
     * Throws if the provided spawn location is out of bounds.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
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
     * @example incrementDynamicProperty.ts
     * ```typescript
     * import * as mc from '@minecraft/server';
     *
     * function incrementProperty(propertyName: string): boolean {
     *     let number = mc.world.getDynamicProperty(propertyName);
     *
     *     console.warn('Current value is: ' + number);
     *
     *     if (number === undefined) {
     *         number = 0;
     *     }
     *
     *     if (typeof number !== 'number') {
     *         console.warn('Number is of an unexpected type.');
     *         return false;
     *     }
     *
     *     mc.world.setDynamicProperty(propertyName, number + 1);
     *     return true;
     * }
     *
     * incrementProperty('samplelibrary:number');
     * ```
     * @example incrementDynamicPropertyInJsonBlob.ts
     * ```typescript
     * import * as mc from '@minecraft/server';
     *
     * function updateWorldProperty(propertyName: string): boolean {
     *     let paintStr = mc.world.getDynamicProperty(propertyName);
     *     let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *     console.log('Current value is: ' + paintStr);
     *
     *     if (paintStr === undefined) {
     *         paint = {
     *             color: 'purple',
     *             intensity: 0,
     *         };
     *     } else {
     *         if (typeof paintStr !== 'string') {
     *             console.warn('Paint is of an unexpected type.');
     *             return false;
     *         }
     *
     *         try {
     *             paint = JSON.parse(paintStr);
     *         } catch (e) {
     *             console.warn('Error parsing serialized struct.');
     *             return false;
     *         }
     *     }
     *
     *     if (!paint) {
     *         console.warn('Error parsing serialized struct.');
     *         return false;
     *     }
     *
     *     paint.intensity++;
     *     paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *     mc.world.setDynamicProperty(propertyName, paintStr);
     *
     *     return true;
     * }
     *
     * updateWorldProperty('samplelibrary:longerjson');
     * ```
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the time of day.
     *
     * This function can't be called in read-only mode.
     *
     * @param timeOfDay
     * The time of day, in ticks, between 0 and 24000.
     * @throws
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