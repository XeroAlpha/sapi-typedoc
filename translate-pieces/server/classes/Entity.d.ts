/* IMPORT */ import { BlockRaycastHit, BlockRaycastOptions, CommandError, CommandResult, Dimension, Effect, EffectType, EntityApplyDamageByProjectileOptions, EntityApplyDamageOptions, EntityComponent, EntityComponentTypeMap, EntityComponentTypes, EntityEffectOptions, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, InvalidEntityError, PlayAnimationOptions, ScoreboardIdentity, TeleportOptions, TicksPerSecond, Vector2, Vector3, VectorXZ, minecraftcommon } from '../index';


/**
 * 表示世界中实体（例如生物、玩家或矿车等移动物体）的状态。
 *
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
	private constructor();
	/**
	 * @remarks
	 * 实体当前所在的维度。
	 *
	 * Dimension that the entity is currently within.
	 *
	 * @throws This property can throw when used.
	 */
	readonly dimension: Dimension;
	/**
	 * @remarks
	 * 实体的唯一标识符。此标识符在加载世界实例时保持一致。
	 * 不应从此唯一标识符的值和结构中推断任何意义——不要解析或解释它。
	 * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
	 *
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
	 * 实体是否接触到可攀爬的方块。例如，玩家靠近梯子或蜘蛛靠近石墙。
	 *
	 * Whether the entity is touching a climbable block. For
	 * example, a player next to a ladder or a spider next to a
	 * stone wall.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isClimbing: boolean;
	/**
	 * @remarks
	 * 实体是否具有大于 0 的下落距离，或者在滑翔时是否大于 1。
	 *
	 * Whether the entity has a fall distance greater than 0, or
	 * greater than 1 while gliding.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isFalling: boolean;
	/**
	 * @remarks
	 * 实体的任何部分是否位于水方块内。
	 *
	 * Whether any part of the entity is inside a water block.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isInWater: boolean;
	/**
	 * @remarks
	 * 实体是否位于一个固体方块的顶部。此属性可能会以意外的方式表现。
	 * 当实体首次生成时，此属性始终为 true，若实体没有重力，此属性可能会不正确。
	 *
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
	 * 若为 `true`，则表示实体当前正在睡觉。
	 *
	 * If true, the entity is currently sleeping.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSleeping: boolean;
	/**
	 * @remarks
	 * 实体是否处于潜行状态——即移动得更慢且更安静。
	 *
	 * Whether the entity is sneaking - that is, moving more slowly
	 * and more quietly.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	isSneaking: boolean;
	/**
	 * @remarks
	 * 实体是否处于冲刺状态。例如，玩家正在使用冲刺动作，豹猫在逃跑，或猪用胡萝卜钓竿加速。
	 *
	 * Whether the entity is sprinting. For example, a player using
	 * the sprint action, an ocelot running away or a pig boosting
	 * with Carrot on a Stick.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSprinting: boolean;
	/**
	 * @remarks
	 * 实体是否处于游泳状态。例如，玩家使用游泳动作或鱼在水中。
	 *
	 * Whether the entity is in the swimming state. For example, a
	 * player using the swim action or a fish in water.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isSwimming: boolean;
	/**
     * @beta
     * @remarks
	 * 返回实体是否可以被脚本操控。当玩家的 EntityLifetimeState 设置为 Loaded 时，
	 * 被认为是有效的。
	 * 
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     */
    readonly isValid: boolean;
	/**
	 * @remarks
	 * 实体的当前位置。
	 *
	 * Current location of the entity.
	 *
	 * @throws This property can throw when used.
	 */
	readonly location: Vector3;
	/**
	 * @remarks
	 * 实体的自定义名称。
	 *
	 * Given name of the entity.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	nameTag: string;
	/**
	 * @remarks
	 * 返回表示此实体的计分板身份。即使实体被杀死，该身份仍然有效。
	 *
	 * Returns a scoreboard identity that represents this entity.
	 * Will remain valid when the entity is killed.
	 *
	 */
	readonly scoreboardIdentity?: ScoreboardIdentity;
	/**
	 * @beta
	 * @remarks
	 * 获取或设置一个实体，该实体用作与 AI 相关行为（如攻击）的目标。
	 * 若实体当前没有目标，则返回 undefined。
	 *
	 * Retrieves or sets an entity that is used as the target of
	 * AI-related behaviors, like attacking. If the entity
	 * currently has no target returns undefined.
	 *
	 * @throws This property can throw when used.
	 */
	readonly target?: Entity;
	/**
	 * @remarks
	 * 实体类型的标识符，例如 'minecraft:skeleton'。
	 * 即使 {@link Entity.isValid} 为 false，此属性也可访问。
	 *
	 * Identifier of the type of the entity - for example,
	 * 'minecraft:skeleton'. This property is accessible even if
	 * {@link Entity.isValid} is false.
	 *
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 为实体添加或更新一个效果，例如中毒效果。
	 *
	 * Adds or updates an effect, like poison, to the entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param effectType
	 * 要添加到实体的效果类型。
	 * Type of effect to add to the entity.
	 * @param duration
	 * 效果生效的时间，以刻为单位。每秒有20刻。使用 {@link TicksPerSecond} 常量在刻与秒之间转换。值必须在 [0, 20000000] 范围内。
	 * Amount of time, in ticks, for the effect to apply. There are
	 * 20 ticks per second. Use {@link TicksPerSecond} constant to
	 * convert between ticks and seconds. The value must be within
	 * the range [0, 20000000].
	 * @param options
	 * 效果的附加选项。
	 * Additional options for the effect.
	 * @returns
	 * 若效果成功添加或更新，则不返回任何内容。若持续时间或放大等级超出有效范围，或者效果不存在，则可能会抛出错误。
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
	 * 为实体添加一个指定的标签。
	 *
	 * Adds a specified tag to an entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param tag
	 * 要添加的标签内容。标签必须少于256个字符。
	 * Content of the tag to add. The tag must be less than 256
	 * characters.
	 * @returns
	 * 若标签添加成功，则返回 true。若标签已存在于实体上，则可能会失败。
	 * Returns true if the tag was added successfully. This can
	 * fail if the tag already exists on the entity.
	 * @throws This function can throw errors.
	 * @seeExample tagsQuery.ts
	 */
	addTag(tag: string): boolean;
	/**
	 * @remarks
	 * 对实体造成一定的伤害。
	 *
	 * Applies a set of damage to an entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param amount
	 * 要造成的伤害量。
	 * Amount of damage to apply.
	 * @param options
	 * 关于伤害来源的附加选项，这可能会对实体产生额外的效果或行为。
	 * Additional options about the source of damage, which may add
	 * additional effects or spur additional behaviors on this
	 * entity.
	 * @returns
	 * 实体是否受到任何伤害。若实体是无敌的，或者施加的伤害小于或等于0，则可能返回 false。
	 * Whether the entity takes any damage. This can return false
	 * if the entity is invulnerable or if the damage applied is
	 * less than or equal to 0.
	 * @throws This function can throw errors.
	 * @seeExample applyDamageThenHeal.ts
	 */
	applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
	/**
	 * @remarks
	 * 将冲量向量应用到实体当前的速度上。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param vector
	 * 冲量向量。
	 * Impulse vector.
	 * @throws This function can throw errors.
	 * @seeExample applyImpulse.ts
	 */
	applyImpulse(vector: Vector3): void;
	/**
	 * @remarks
	 * 将冲量向量应用到实体当前的速度上。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param verticalStrength
	 * 垂直向量的击退强度。
	 * Knockback strength for the vertical vector.
	 * @throws This function can throw errors.
	 * @seeExample bounceSkeletons.ts
	 */
	applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
	/**
	 * @remarks
	 * 清除已设置在此实体上的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * entity.
	 *
	 * @throws This function can throw errors.
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 将实体当前的速度设置为零。注意，此方法可能对玩家无效。
	 *
	 * Sets the current velocity of the Entity to zero. Note that
	 * this method may not have an impact on Players.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 * @seeExample applyImpulse.ts
	 */
	clearVelocity(): void;
	/**
	 * @remarks
	 * 若实体着火，熄灭火焰。注意，可以通过调用 getComponent('minecraft:onfire') 检查实体是否着火。
	 *
	 * Extinguishes the fire if the entity is on fire. Note that
	 * you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param useEffects
	 * 是否显示与熄灭相关的视觉效果。
	 * Whether to show any visual effects connected to the
	 * extinguishing.
	 * @returns
	 * 返回实体是否着火。
	 * Returns whether the entity was on fire.
	 * @throws This function can throw errors.
	 * @seeExample setOnFire.ts
	 */
	extinguishFire(useEffects?: boolean): boolean;
	/**
	 * @remarks
	 * 返回实体视线方向上第一个相交的方块。
	 *
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 *
	 * @param options
	 * 射线投射的附加配置选项。
	 * Additional configuration options for the ray cast.
	 * @returns
	 * 返回实体视线方向上第一个相交的方块。
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 * @throws This function can throw errors.
	 */
	getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
	/**
	 * @remarks
	 * 获取实体的组件（表示附加能力）。
	 *
	 * Gets a component (that represents additional capabilities)
	 * for an entity.
	 *
	 * @param componentId
	 * 组件的标识符（例如 'minecraft:health'）。若未指定命名空间前缀，则默认使用 'minecraft:'。可用的组件标识符可以在 {@link EntityComponentTypes} 枚举中找到。
	 * The identifier of the component (e.g., 'minecraft:health').
	 * If no namespace prefix is specified, 'minecraft:' is
	 * assumed. Available component IDs can be found as part of the
	 * {@link EntityComponentTypes} enum.
	 * @returns
	 * 若组件存在于实体上，则返回该组件，否则返回 undefined。
	 * Returns the component if it exists on the entity, otherwise
	 * undefined.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
	/**
	 * @remarks
	 * 返回此实体上存在且 API 支持的所有组件。
	 *
	 * Returns all components that are both present on this entity
	 * and supported by the API.
	 *
	 * @returns
	 * 返回此实体上存在且 API 支持的所有组件。
	 * Returns all components that are both present on this entity
	 * and supported by the API.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	getComponents(): EntityComponent[];
	/**
	 * @remarks
	 * 返回属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性的标识符。
	 * The property identifier.
	 * @returns
	 * 返回属性的值，若属性未设置则返回 undefined。
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws This function can throw errors.
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 返回已在此实体上使用的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this entity.
	 *
	 * @returns
	 * 一个字符串数组，包含此实体上设置的动态属性。
	 *
	 * A string array of the dynamic properties set on this entity.
	 * @throws This function can throw errors.
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。
	 * 这包括键和值的大小。这对于诊断性能警告可能很有用——例如，
	 * 若一个实体有许多兆字节的关联动态属性，它可能会在各种设备上加载缓慢。
	 *
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
	 * 返回实体上指定效果类型的效果，若效果不存在则返回 undefined，
	 * 若效果不存在但尝试获取会抛出错误。
	 *
	 * Returns the effect for the specified EffectType on the
	 * entity, undefined if the effect is not present, or throws an
	 * error if the effect does not exist.
	 *
	 * @param effectType
	 * 效果的标识符。
	 *
	 * The effect identifier.
	 * @returns
	 * 返回指定效果的效果对象，若效果不存在则返回 undefined，
	 * 若效果不存在但尝试获取会抛出错误。
	 *
	 * Effect object for the specified effect, undefined if the
	 * effect is not present, or throws an error if the effect does
	 * not exist.
	 * @throws This function can throw errors.
	 */
	getEffect(effectType: EffectType | string): Effect | undefined;
	/**
	 * @remarks
	 * 返回应用于此实体的一组效果。
	 *
	 * Returns a set of effects applied to this entity.
	 *
	 * @returns
	 * 效果列表。
	 *
	 * List of effects.
	 * @throws This function can throw errors.
	 */
	getEffects(): Effect[];
	/**
	 * @remarks
	 * 通过从此实体的视角进行射线投射，获取该实体正在注视的实体。
	 *
	 * Gets the entities that this entity is looking at by
	 * performing a ray cast from the view of this entity.
	 *
	 * @param options
	 * 射线投射的附加配置选项。
	 *
	 * Additional configuration options for the ray cast.
	 * @returns
	 * 返回该实体注视方向上的一组实体。
	 *
	 * Returns a set of entities from the direction that this
	 * entity is looking at.
	 * @throws This function can throw errors.
	 */
	getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
	/**
	 * @remarks
	 * 返回此实体头部组件的当前位置。
	 *
	 * Returns the current location of the head component of this
	 * entity.
	 *
	 * @returns
	 * 返回此实体头部组件的当前位置。
	 *
	 * Returns the current location of the head component of this
	 * entity.
	 * @throws This function can throw errors.
	 */
	getHeadLocation(): Vector3;
	/**
	 * @remarks
	 * 获取实体属性值。若在同一刻使用 setProperty 函数设置了属性，
	 * 则更新的值不会反映直到下一刻。
	 *
	 * Gets an entity Property value. If the property was set using
	 * the setProperty function within the same tick, the updated
	 * value will not be reflected until the subsequent tick.
	 *
	 * @param identifier
	 * 实体属性的标识符。
	 *
	 * The entity Property identifier.
	 * @returns
	 * 返回当前的属性值。对于枚举属性，返回字符串；对于浮点数和整数属性，
	 * 返回数字；对于未定义的属性，返回 undefined。
	 *
	 * Returns the current property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 * @throws
	 * 若实体无效，则抛出错误。
	 *
	 * Throws if the entity is invalid.
	 */
	getProperty(identifier: string): boolean | number | string | undefined;
	/**
	 * @remarks
	 * 返回此实体当前的旋转组件。
	 *
	 * Returns the current rotation component of this entity.
	 *
	 * @returns
	 * 返回包含此实体旋转角度（以度为单位）的 Vec2。
	 *
	 * Returns a Vec2 containing the rotation of this entity (in
	 * degrees).
	 * @throws This function can throw errors.
	 */
	getRotation(): Vector2;
	/**
	 * @remarks
	 * 返回与该实体相关联的所有标签。
	 *
	 * Returns all tags associated with the entity.
	 *
	 * @returns
	 * 包含所有标签的字符串数组。
	 *
	 * An array containing all tags as strings.
	 * @throws This function can throw errors.
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 返回实体的当前速度向量。
	 *
	 * Returns the current velocity vector of the entity.
	 *
	 * @returns
	 * 返回实体的当前速度向量。
	 *
	 * Returns the current velocity vector of the entity.
	 * @throws This function can throw errors.
	 * @seeExample getFireworkVelocity.ts
	 */
	getVelocity(): Vector3;
	/**
	 * @remarks
	 * 返回实体的当前视线方向。
	 *
	 * Returns the current view direction of the entity.
	 *
	 * @returns
	 * 返回实体的当前视线方向。
	 *
	 * Returns the current view direction of the entity.
	 * @throws This function can throw errors.
	 */
	getViewDirection(): Vector3;
	/**
	 * @remarks
	 * 若此实体上存在指定的组件，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
	 *
	 * @param componentId
	 * 要获取的组件的标识符（例如 'minecraft:rideable'）。
	 * 若未指定命名空间前缀，则默认为 'minecraft:'。
	 *
	 * The identifier of the component (e.g., 'minecraft:rideable')
	 * to retrieve. If no namespace prefix is specified,
	 * 'minecraft:' is assumed.
	 * @returns
	 * 若此实体上存在指定的组件，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
	 * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
	 */
	hasComponent(componentId: string): boolean;
	/**
	 * @remarks
	 * 返回实体是否具有特定标签。
	 *
	 * Returns whether an entity has a particular tag.
	 *
	 * @param tag
	 * 要测试的标签标识符。
	 *
	 * Identifier of the tag to test for.
	 * @returns
	 * 返回实体是否具有特定标签。
	 *
	 * Returns whether an entity has a particular tag.
	 * @throws This function can throw errors.
	 */
	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 杀死此实体。实体将正常掉落战利品。
	 *
	 * Kills this entity. The entity will drop loot as normal.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @returns
	 * 若实体可以被杀死（即使它已经死亡），则返回 true，否则返回 false。
	 *
	 * Returns true if entity can be killed (even if it is already
	 * dead), otherwise it returns false.
	 * @throws This function can throw errors.
	 * @seeExample tagsQuery.ts
	 */
	kill(): boolean;
	/**
	 * @beta
	 * @remarks
	 * 将实体的旋转设置为面向目标位置。适用时，将同时设置俯仰角和偏航角，
	 * 例如对于俯仰角控制头部倾斜、偏航角控制身体旋转的生物。
	 *
	 * Sets the rotation of the entity to face a target location.
	 * Both pitch and yaw will be set, if applicable, such as for
	 * mobs where the pitch controls the head tilt and the yaw
	 * controls the body rotation.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param targetLocation
	 * 实体应面向/注视的目标位置。
	 *
	 * The target location that this entity should face/look
	 * towards.
	 * @throws This function can throw errors.
	 */
	lookAt(targetLocation: Vector3): void;
	/**
	 * @remarks
	 * 将实体与传入的选项进行匹配。若传入的 EntityQueryOptions 中没有指定位置，则使用实体的位置进行匹配。
	 *
	 * Matches the entity against the passed in options. Uses the
	 * location of the entity for matching if the location is not
	 * specified in the passed in EntityQueryOptions.
	 *
	 * @param options
	 * 要进行匹配的查询选项。
	 *
	 * The query to perform the match against.
	 * @returns
	 * 若实体符合传入的 EntityQueryOptions 的条件，则返回 true；否则返回 false。
	 *
	 * Returns true if the entity matches the criteria in the
	 * passed in EntityQueryOptions, otherwise it returns false.
	 * @throws
	 * 若查询选项配置错误，将抛出异常。
	 *
	 * Throws if the query options are misconfigured.
	 */
	matches(options: EntityQueryOptions): boolean;
	/**
	 * @remarks
	 * 使实体播放指定的动画。
	 *
	 * Cause the entity to play the given animation.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param animationName
	 * 动画标识符，例如 animation.creeper.swelling。
	 *
	 * The animation identifier. e.g. animation.creeper.swelling
	 * @param options
	 * 控制动画播放和过渡的附加选项。
	 *
	 * Additional options to control the playback and transitions
	 * of the animation.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	playAnimation(animationName: string, options?: PlayAnimationOptions): void;
	/**
	 * @remarks
	 * 立即将实体从世界中移除。移除的实体不会执行死亡动画或掉落战利品。
	 *
	 * Immediately removes the entity from the world. The removed
	 * entity will not perform a death animation or drop loot upon
	 * removal.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * This function can throw errors.
	 */
	remove(): void;
	/**
	 * @remarks
	 * 移除实体上的指定效果类型，若效果不存在则返回 false。
	 *
	 * Removes the specified EffectType on the entity, or returns
	 * false if the effect is not present.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param effectType
	 * 效果标识符。
	 *
	 * The effect identifier.
	 * @returns
	 * 若效果已被移除，则返回 true。若未找到该效果或效果不存在，则返回 false。
	 *
	 * Returns true if the effect has been removed. Returns false
	 * if the effect is not found or does not exist.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	removeEffect(effectType: EffectType | string): boolean;
	/**
	 * @remarks
	 * 从实体中移除指定的标签。
	 *
	 * Removes a specified tag from an entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param tag
	 * 要移除的标签内容。
	 *
	 * Content of the tag to remove.
	 * @returns
	 * 返回该标签是否存在于实体上。
	 *
	 * Returns whether the tag existed on the entity.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	removeTag(tag: string): boolean;
	/**
	 * @remarks
	 * 将实体属性重置为其定义中指定的默认值。此属性更改将在下一个 tick 应用。
	 *
	 * Resets an Entity Property back to its default value, as
	 * specified in the Entity's definition. This property change
	 * is not applied until the next tick.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 * @returns
	 * 返回默认属性值。对于枚举属性，返回字符串；对于浮点和整数属性，返回数字；对于未定义的属性，返回 undefined。
	 *
	 * Returns the default property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 * @throws
	 * 若实体无效，将抛出异常。
	 *
	 * Throws if the entity is invalid.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 */
	resetProperty(identifier: string): boolean | number | string;
	/**
	 * @remarks
	 * 在实体上运行同步命令。
	 *
	 * Runs a synchronous command on the entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param commandString
	 * 命令字符串。注意：不应包含前导斜杠:"/"。
	 *
	 * The command string. Note: This should not include a leading
	 * forward slash.
	 * @returns
	 * 包含命令是否成功的结果。
	 *
	 * A command result containing whether the command was
	 * successful.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link CommandError}
	 *
	 * {@link Error}
	 */
	runCommand(commandString: string): CommandResult;
	/**
	 * @attention 注：此方法在最新版已被删除，这里为了兼容性保留
	 * @remarks
	 * 从该实体的上下文中运行特定命令（异步）。注意，在给定的 tick 中最多可以运行 128 个异步命令。
	 *
	 * Runs a particular command asynchronously from the context of
	 * this entity. Note that there is a maximum queue of 128
	 * asynchronous commands that can be run in a given tick.
	 *
	 * @param commandString
	 * 要运行的命令。注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start
	 * with slash.
	 * @returns
	 * 对于返回数据的命令，将返回包含命令响应值的 JSON 结构。
	 *
	 * For commands that return data, returns a JSON structure with
	 * command response values.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	runCommandAsync(commandString: string): Promise<CommandResult>;
	/**
	 * @beta
	 * @remarks
	 * 设置多个动态属性的具体值。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 要设置的动态属性的键值对记录。
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws 此函数可能会抛出错误。
	 * This function can throw errors.
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定属性设置为某个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @param value
	 * 要设置的属性数据值。
	 *
	 * Data value of the property to set.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 将实体点燃（若不在水中或雨中）。注意，可以调用 getComponent('minecraft:onfire')，若存在，该实体处于燃烧状态。
	 *
	 * Sets an entity on fire (if it is not in water or rain). Note
	 * that you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param seconds
	 * 点燃实体的时间长度。
	 *
	 * Length of time to set the entity on fire.
	 * @param useEffects
	 * 是否应用副作用（例如解冻冻结）以及是否考虑其他条件（如下雨或防火保护）。
	 *
	 * Whether side-effects should be applied (e.g. thawing freeze)
	 * and other conditions such as rain or fire protection should
	 * be taken into consideration.
	 * @returns
	 * 实体是否被点燃。若秒数小于或等于零，实体湿润，或实体免疫火焰，则可能失败。
	 *
	 * Whether the entity was set on fire. This can fail if seconds
	 * is less than or equal to zero, the entity is wet or the
	 * entity is immune to fire.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 * @seeExample setOnFire.ts
	 */
	setOnFire(seconds: number, useEffects?: boolean): boolean;
	/**
	 * @remarks
	 * 将实体属性设置为提供的值。此属性更改将在下一个 tick 应用。
	 *
	 * Sets an Entity Property to the provided value. This property
	 * change is not applied until the next tick.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 * @param value
	 * 属性值。提供的类型必须与实体定义中指定的类型兼容。
	 *
	 * The property value. The provided type must be compatible
	 * with the type specified in the entity's definition.
	 * @throws
	 * 若实体无效，将抛出异常。
	 *
	 * Throws if the entity is invalid.
	 *
	 * 若提供了无效的标识符，将抛出异常。
	 *
	 * Throws if an invalid identifier is provided.
	 *
	 * 若提供的值类型与属性类型不匹配，将抛出异常。
	 *
	 * Throws if the provided value type does not match the
	 * property type.
	 *
	 * 若提供的值超出预期范围（整型、浮点型属性），将抛出异常。
	 *
	 * Throws if the provided value is outside the expected range
	 * (int, float properties).
	 *
	 * 若提供的字符串值与接受的枚举值集合不匹配（枚举属性），将抛出异常。
	 *
	 * Throws if the provided string value does not match the set
	 * of accepted enum values (enum properties)
	 */
	setProperty(identifier: string, value: boolean | number | string): void;
	/**
	 * @remarks
	 * 设置实体的主要旋转角度。
	 *
	 * Sets the main rotation of the entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param rotation
	 * 实体的 x 和 y 旋转角度（以度为单位）。对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
	 *
	 * The x and y rotation of the entity (in degrees). For most
	 * mobs, the x rotation controls the head tilt and the y
	 * rotation controls the body rotation.
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setRotation(rotation: Vector2): void;
	/**
	 * @remarks
	 * 将选定的实体传送到新位置。
	 *
	 * Teleports the selected entity to a new location
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param location
	 * 实体的新位置。
	 *
	 * New location for the entity.
	 * @param teleportOptions
	 * 有关传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 * @seeExample teleport.ts
	 * @seeExample teleportMovement.ts
	 */
	teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
	/**
	 * @remarks
	 * 触发实体类型事件。对于每个实体，在实体定义中定义了一些关键行为的事件；例如，爬行者有一个 minecraft:start_exploding 类型事件。
	 *
	 * Triggers an entity type event. For every entity, a number of
	 * events are defined in an entities' definition for key entity
	 * behaviors; for example, creepers have a
	 * minecraft:start_exploding type event.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param eventName
	 * 要触发的实体类型事件的名称。若未指定命名空间，则默认为 minecraft:。
	 * Name of the entity type event to trigger. If a namespace is
	 * not specified, minecraft: is assumed.
	 * @throws
	 * 若事件在实体定义中未定义，则会抛出错误。
	 * If the event is not defined in the definition of the entity,
	 * an error will be thrown.
	 * @seeExample triggerEvent.ts e0d38a47
	 * @seeExample triggerEvent.ts b473e4eb
	 */
	triggerEvent(eventName: string): void;
	/**
	 * @remarks
	 * 尝试传送，但可能无法完成传送操作（例如，若目标位置有方块）。
	 *
	 * Attempts to try a teleport, but may not complete the
	 * teleport operation (for example, if there are blocks at the
	 * destination.)
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param location
	 * 要传送实体到的位置。
	 *
	 * Location to teleport the entity to.
	 * @param teleportOptions
	 * 有关传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 * @returns
	 * 返回传送是否成功。若目标区块未加载或传送会与方块相交，则可能失败。
	 *
	 * Returns whether the teleport succeeded. This can fail if the
	 * destination chunk is unloaded or if the teleport would
	 * result in intersecting with blocks.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}
