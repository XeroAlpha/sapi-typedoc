/* IMPORT */ import { BlockRaycastHit, BlockRaycastOptions, CommandError, CommandResult, Dimension, Effect, EffectType, EntityApplyDamageByProjectileOptions, EntityApplyDamageOptions, EntityComponent, EntityComponentReturnType, EntityComponentTypes, EntityEffectOptions, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, InvalidEntityError, PlayAnimationOptions, ScoreboardIdentity, TeleportOptions, TicksPerSecond, Vector2, Vector3, VectorXZ, minecraftcommon } from '../index';

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Whether the entity is touching a climbable block. For
     * example, a player next to a ladder or a spider next to a
     * stone wall.
     *
     * @throws This property can throw when used.
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * Whether the entity has a fall distance greater than 0, or
     * greater than 1 while gliding.
     *
     * @throws This property can throw when used.
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * Whether any part of the entity is inside a water block.
     *
     * @throws This property can throw when used.
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * Whether the entity is on top of a solid block. This property
     * may behave in unexpected ways. This property will always be
     * true when an Entity is first spawned, and if the Entity has
     * no gravity this property may be incorrect.
     *
     * @throws This property can throw when used.
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * If true, the entity is currently sleeping.
     *
     * @throws This property can throw when used.
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * @worldMutation
     *
     */
    isSneaking: boolean;
    /**
     * @remarks
     * Whether the entity is sprinting. For example, a player using
     * the sprint action, an ocelot running away or a pig boosting
     * with Carrot on a Stick.
     *
     * @throws This property can throw when used.
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * Whether the entity is in the swimming state. For example, a
     * player using the swim action or a fish in water.
     *
     * @throws This property can throw when used.
     */
    readonly isSwimming: boolean;
    /**
     * @rc
     * @remarks
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     */
    readonly isValid: boolean;
    /**
     * @beta
     * @remarks
     * key for the localization of this entity's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Given name of the entity.
     *
     * @worldMutation
     *
     */
    nameTag: string;
    /**
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     *
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. If the entity
     * currently has no target returns undefined.
     *
     * @throws This property can throw when used.
     */
    readonly target?: Entity;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     */
    readonly typeId: string;
    /**
     * @remarks
     * Adds or updates an effect, like poison, to the entity.
     *
     * @worldMutation
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     * @seeExample spawnPoisonedVillager.ts
     * @seeExample quickFoxLazyDog.ts
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     *
     * @worldMutation
     *
     * @param tag
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * @seeExample tagsQuery.ts
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Applies a set of damage to an entity.
     *
     * @worldMutation
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     * @seeExample applyDamageThenHeal.ts
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @worldMutation
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     * @seeExample applyImpulse.ts
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * @worldMutation
     *
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * @seeExample bounceSkeletons.ts
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * entity.
     *
     * @throws This function can throw errors.
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Sets the current velocity of the Entity to zero.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     * @seeExample applyImpulse.ts
     */
    clearVelocity(): void;
    /**
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @worldMutation
     *
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * Defaults to: true
     * @returns
     * Returns whether the entity was on fire.
     * @throws This function can throw errors.
     * @seeExample setOnFire.ts
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is
     * assumed. Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     *
     * @returns
     * Returns all components that are both present on this entity
     * and supported by the API.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws This function can throw errors.
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * Gets an entity Property value. If the property was set using
     * the setProperty function within the same tick, the updated
     * value will not be reflected until the subsequent tick.
     *
     * @param identifier
     * The entity Property identifier.
     * @returns
     * Returns the current property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * Returns the current rotation component of this entity.
     *
     * @returns
     * Returns a Vec2 containing the rotation of this entity (in
     * degrees).
     * @throws This function can throw errors.
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * Returns all tags associated with the entity.
     *
     * @returns
     * An array containing all tags as strings.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     * @seeExample getFireworkVelocity.ts
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * Returns the current view direction of the entity.
     *
     * @returns
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * Returns true if the specified component is present on this
     * entity.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @returns
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * @worldMutation
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     * @seeExample tagsQuery.ts
     */
    kill(): boolean;
    /**
     * @rc
     * @remarks
     * Sets the rotation of the entity to face a target location.
     * Both pitch and yaw will be set, if applicable, such as for
     * mobs where the pitch controls the head tilt and the yaw
     * controls the body rotation.
     *
     * @worldMutation
     *
     * @param targetLocation
     * The target location that this entity should face/look
     * towards.
     * @throws This function can throw errors.
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @remarks
     * Matches the entity against the passed in options. Uses the
     * location of the entity for matching if the location is not
     * specified in the passed in EntityQueryOptions.
     *
     * @param options
     * The query to perform the match against.
     * @returns
     * Returns true if the entity matches the criteria in the
     * passed in EntityQueryOptions, otherwise it returns false.
     * @throws
     * Throws if the query options are misconfigured.
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * Cause the entity to play the given animation.
     *
     * @worldMutation
     *
     * @param animationName
     * The animation identifier. e.g. animation.creeper.swelling
     * @param options
     * Additional options to control the playback and transitions
     * of the animation.
     * @throws This function can throw errors.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * Immediately removes the entity from the world. The removed
     * entity will not perform a death animation or drop loot upon
     * removal.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    remove(): void;
    /**
     * @remarks
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * @worldMutation
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     *
     * @worldMutation
     *
     * @param tag
     * Content of the tag to remove.
     * @returns
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Resets an Entity Property back to its default value, as
     * specified in the Entity's definition. This property change
     * is not applied until the next tick.
     *
     * @worldMutation
     *
     * @param identifier
     * The Entity Property identifier.
     * @returns
     * Returns the default property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * Runs a synchronous command on the entity.
     *
     * @worldMutation
     *
     * @param commandString
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @beta
     * @remarks
     * Sets multiple dynamic properties with specific values.
     *
     * @param values
     * A Record of key value pairs of the dynamic properties to
     * set.
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * @worldMutation
     *
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * Whether side-effects should be applied (e.g. thawing freeze)
     * and other conditions such as rain or fire protection should
     * be taken into consideration.
     * Defaults to: true
     * @returns
     * Whether the entity was set on fire. This can fail if seconds
     * is less than or equal to zero, the entity is wet or the
     * entity is immune to fire.
     * @throws This function can throw errors.
     * @seeExample setOnFire.ts
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * Sets an Entity Property to the provided value. This property
     * change is not applied until the next tick.
     *
     * @worldMutation
     *
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The property value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the main rotation of the entity.
     *
     * @worldMutation
     *
     * @param rotation
     * The x and y rotation of the entity (in degrees). For most
     * mobs, the x rotation controls the head tilt and the y
     * rotation controls the body rotation.
     * @throws This function can throw errors.
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * Teleports the selected entity to a new location
     *
     * @worldMutation
     *
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
     * @seeExample teleport.ts
     * @seeExample teleportMovement.ts
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * @worldMutation
     *
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws
     * If the event is not defined in the definition of the entity,
     * an error will be thrown.
     * @seeExample triggerEvent.ts e0d38a47
     * @seeExample triggerEvent.ts b473e4eb
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * @worldMutation
     *
     * @param location
     * Location to teleport the entity to.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}