/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Camera, ClientSystemInfo, CommandPermissionLevel, ControlScheme, DimensionLocation, Entity, GameMode, GraphicsMode, InputInfo, InvalidEntityError, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, LocatorBar, MolangVariableMap, MusicOptions, PlayerAimAssist, PlayerInputPermissions, PlayerPermissionLevel, PlayerSoundOptions, RawMessage, RawMessageError, ScreenDisplay, Vector3 } from '..';

/**
 * Represents a player within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * The player's Camera.
     *
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @remarks
     * Contains the player's device information.
     *
     * @throws This property can throw when used.
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @remarks
     * @worldMutation
     *
     */
    commandPermissionLevel: CommandPermissionLevel;
    /**
     * @remarks
     * Gets the current graphics mode of the player's client. This
     * can be changed in the Video section of the settings menu
     * based on what hardware is available.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    /**
     * @remarks
     * Contains the player's input information.
     *
     */
    readonly inputInfo: InputInfo;
    /**
     * @remarks
     * Input permissions of the player.
     *
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * If true, the player is currently emoting.
     *
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * Whether the player is flying. For example, in Creative or
     * Spectator mode.
     *
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * Whether the player is gliding with Elytra.
     *
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * Whether the player is jumping. This will remain true while
     * the player is holding the jump action.
     *
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     *
     * @throws This property can throw when used.
     */
    readonly level: number;
    /**
     * @beta
     * @remarks
     * The player's Locator Bar. This property is used for managing
     * waypoints displayed on the HUD.
     *
     */
    readonly locatorBar: LocatorBar;
    /**
     * @remarks
     * Name of the player.
     *
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     *
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly partyId?: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;
    /**
     * @remarks
     * @worldMutation
     *
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     *
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     *
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     *
     * @worldMutation
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * Returns the current experience of the Player.
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * Adds/removes level to/from the Player and returns the
     * current level of the Player.
     *
     * @worldMutation
     *
     * @param amount
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * Bounds: [-16777216, 16777216]
     * @returns
     * Returns the current level of the Player.
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @remarks
     * For this player, removes all overrides of any Entity
     * Properties on the target Entity. This change is not applied
     * until the next tick and will not apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * The Entity or the ID of the Entity whose Entity Property
     * overrides are being cleared.
     * @throws
     * Throws if the Entity or Entity ID is invalid.
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    /**
     * @beta
     * @remarks
     * Eats an item, providing the item's hunger and saturation
     * effects to the player. Can only be used on food items.
     *
     * @worldMutation
     *
     * @param itemStack
     * The item to eat.
     * @throws
     * Throws if the item is not a food item.
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @beta
     * @remarks
     * The player's aim-assist settings.
     *
     */
    getAimAssist(): PlayerAimAssist;
    /**
     * @remarks
     * Returns the player's current control scheme.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;
    /**
     * @remarks
     * Retrieves the active gamemode for this player, if specified.
     *
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     *
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     *
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @remarks
     * Plays a music track that only this particular player can
     * hear.
     *
     * @worldMutation
     *
     * @param trackId
     * Identifier of the music track to play.
     * @param musicOptions
     * Additional options for the music track.
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     *
     * @worldMutation
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     * @seeExample playMusicAndSound.ts
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Queues an additional music track that only this particular
     * player can hear. If a track is not playing, a music track
     * will play.
     *
     * @worldMutation
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
     * For this player, removes the override on an Entity Property.
     * This change is not applied until the next tick and will not
     * apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * The Entity whose Entity Property override is being removed.
     * @param identifier
     * The Entity Property identifier.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks
     * Resets the level of the player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @remarks
     * Sends a message to the player.
     *
     * @param message
     * The message to be displayed.
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     * @seeExample nestedTranslation.ts
     * @seeExample scoreWildcard.ts
     * @seeExample sendBasicMessage.ts
     * @seeExample sendPlayerMessages.ts
     * @seeExample sendTranslatedMessage.ts
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Set a player's control scheme. The player's active camera
     * preset must be set by scripts like with camera.setCamera()
     * or commands.
     *
     * @worldMutation
     *
     * @param controlScheme
     * Control scheme type. If this argument is undefined, this
     * method will clear the player's control scheme back to the
     * player camera's default control scheme.
     * @returns
     * Returns nothing if the control scheme was added or updated
     * successfully. This can throw an InvalidArgumentError if the
     * control scheme is not allowed by the player's current
     * camera.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setControlScheme(controlScheme?: ControlScheme): void;
    /**
     * @remarks
     * Sets a gamemode override for this player.
     *
     * @worldMutation
     *
     * @param gameMode
     * Active gamemode.
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks
     * For this player, overrides an Entity Property on the target
     * Entity to the provided value. This property must be client
     * synced. This change is not applied until the next tick and
     * will not apply to other players.
     *
     * @worldMutation
     *
     * @param targetEntity
     * The Entity whose Entity Property is being overriden.
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The override value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties)
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world. Only visible to the target player.
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
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample spawnParticle.ts bdc4b9e7
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     *
     * @worldMutation
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * Bounds: [0, 32767]
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * Stops all sounds from playing for this particular player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;
    /**
     * @remarks
     * Stops any music tracks from playing for this particular
     * player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
    /**
     * @beta
     * @remarks
     * Stops a sound from playing for this particular player.
     *
     * @worldMutation
     *
     * @param soundId
     * Identifier of the sound.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;
}
