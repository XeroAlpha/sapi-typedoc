/**
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
     * Returns the general global scoreboard that applies to the
     * world.
     *
     */
    readonly scoreboard: Scoreboard;
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
     * @beta
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Returns the absolute time since the start of the world.
     *
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * Returns an array of all active players within the world.
     *
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
     * Returns a dimension object.
     *
     * @param dimensionId
     * The name of the dimension. For example, "overworld",
     * "nether" or "the_end".
     * @returns
     * The requested dimension
     * @throws
     * Throws if the given dimension name is invalid
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @beta
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * Throws if the given dynamic property identifier is not
     * defined.
     * @example incrementProperty.ts
     * ```typescript
     *   let number = mc.world.getDynamicProperty("samplelibrary:number");
     *
     *   log("Current value is: " + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== "number") {
     *     log("Number is of an unexpected type.");
     *     return -1;
     *   }
     *
     *   mc.world.setDynamicProperty("samplelibrary:number", number + 1);
     * ```
     * @example incrementPropertyInJsonBlob.ts
     * ```typescript
     *   let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log("Current value is: " + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: "purple",
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== "string") {
     *       log("Paint is of an unexpected type.");
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log("Error parsing serialized struct.");
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log("Error parsing serialized struct.");
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
     * ```
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @beta
     */
    getDynamicPropertyIds(): string[];
    /**
     * @beta
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @beta
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
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * @returns
     * A player array.
     * @throws
     * Throws if the provided EntityQueryOptions are invalid.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks
     * Returns the time of day.
     *
     * @returns
     * The time of day, in ticks, between 0 and 24000.
     */
    getTimeOfDay(): number;
    /**
     * @remarks
     * Plays a particular music track for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound for all players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * An error will be thrown if pitch is less than 0.01.
     * An error will be thrown if volume is less than 0.0.
     * @example playMusicAndSound.ts
     * ```typescript
     *   let players = mc.world.getPlayers();
     *
     *   const musicOptions: mc.MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     *   };
     *   mc.world.playMusic("music.menu", musicOptions);
     *
     *   const worldSoundOptions: mc.WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     *   };
     *   mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);
     *
     *   const playerSoundOptions: mc.PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     *   };
     *
     *   players[0].playSound("bucket.fill_water", playerSoundOptions);
     * ```
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     *
     * This function can't be called in read-only mode.
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Sends a message to all players.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * @example nestedTranslation.ts
     * ```typescript
     * // Displays "Apple or Coal"
     * let rawMessage = {
     *   translate: "accessibility.list.or.two",
     *   with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
     * };
     * world.sendMessage(rawMessage);
     * ```
     * @example scoreWildcard.ts
     * ```typescript
     * // Displays the player's score for objective "obj". Each player will see their own score.
     * const rawMessage = { score: { name: "*", objective: "obj" } };
     * world.sendMessage(rawMessage);
     * ```
     * @example simpleString.ts
     * ```typescript
     * // Displays "Hello, world!"
     * world.sendMessage("Hello, world!");
     * ```
     * @example translation.ts
     * ```typescript
     * // Displays "First or Second"
     * const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
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
     * @beta
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws
     * Throws if the given dynamic property identifier is not
     * defined.
     * @example incrementProperty.ts
     * ```typescript
     *   let number = mc.world.getDynamicProperty("samplelibrary:number");
     *
     *   log("Current value is: " + number);
     *
     *   if (number === undefined) {
     *     number = 0;
     *   }
     *
     *   if (typeof number !== "number") {
     *     log("Number is of an unexpected type.");
     *     return -1;
     *   }
     *
     *   mc.world.setDynamicProperty("samplelibrary:number", number + 1);
     * ```
     * @example incrementPropertyInJsonBlob.ts
     * ```typescript
     *   let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
     *   let paint: { color: string; intensity: number } | undefined = undefined;
     *
     *   log("Current value is: " + paintStr);
     *
     *   if (paintStr === undefined) {
     *     paint = {
     *       color: "purple",
     *       intensity: 0,
     *     };
     *   } else {
     *     if (typeof paintStr !== "string") {
     *       log("Paint is of an unexpected type.");
     *       return -1;
     *     }
     *
     *     try {
     *       paint = JSON.parse(paintStr);
     *     } catch (e) {
     *       log("Error parsing serialized struct.");
     *       return -1;
     *     }
     *   }
     *
     *   if (!paint) {
     *     log("Error parsing serialized struct.");
     *     return -1;
     *   }
     *
     *   paint.intensity++;
     *   paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
     *   mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
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
     * Stops any music tracks from playing.
     *
     * This function can't be called in read-only mode.
     *
     */
    stopMusic(): void;
}