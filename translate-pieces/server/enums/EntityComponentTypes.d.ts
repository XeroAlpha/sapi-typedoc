/**
 * The types of entity components that are accessible via
 * function Entity.getComponent.
 *
 * 通过函数 Entity.getComponent 可以访问的实体组件类型。
 */
export enum EntityComponentTypes {
	/**
	 * @remarks
	 * When added, this component makes the entity spawn with a
	 * rider of the specified entityType.
	 *
	 * 添加后，该组件使实体生成时带有指定实体类型的骑乘者。
	 */
	AddRider = "minecraft:addrider",
	/**
	 * @remarks
	 * Adds a timer for the entity to grow up. It can be
	 * accelerated by giving the entity the items it likes as
	 * defined by feedItems.
	 *
	 * 为实体添加一个成长计时器。可以通过给予实体其喜欢的物品（由 feedItems 定义）来加速成长。
	 */
	Ageable = "minecraft:ageable",
	/**
	 * @remarks
	 * Defines what blocks this entity can breathe in and gives
	 * them the ability to suffocate.
	 *
	 * 定义该实体可以在其中呼吸的方块，并赋予其窒息能力。
	 */
	Breathable = "minecraft:breathable",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * climb up ladders.
	 *
	 * 添加后，该组件表示实体可以爬上梯子。
	 */
	CanClimb = "minecraft:can_climb",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * fly, and the pathfinder won't be restricted to paths where a
	 * solid block is required underneath it.
	 *
	 * 添加后，该组件表示实体可以飞行，并且路径查找不再受限于需要下方有实体方块的路径。
	 */
	CanFly = "minecraft:can_fly",
	/**
	 * @remarks
	 * When added, this component signifies that the entity can
	 * power jump like the horse does within Minecraft.
	 *
	 * 添加后，该组件表示实体可以像 Minecraft 中的马一样进行强力跳跃。
	 */
	CanPowerJump = "minecraft:can_power_jump",
	/**
	 * @remarks
	 * Defines the entity's color. Only works on certain entities
	 * that have predefined color values (e.g., sheep, llama,
	 * shulker).
	 *
	 * 定义实体的颜色。仅适用于某些具有预定义颜色值的实体（例如，绵羊、羊驼、潜影贝）。
	 */
	Color = "minecraft:color",
	/**
	 * @remarks
	 * Defines the entity's secondary color. Only works on certain
	 * entities that have predefined secondary color values (e.g.,
	 * tropical fish).
	 *
	 * 定义实体的次要颜色。仅适用于某些具有预定义次要颜色值的实体（例如，热带鱼）。
	 */
	Color2 = "minecraft:color2",
	CursorInventory = "minecraft:cursor_inventory",
	/**
	 * @remarks
	 * Provides access to a mob's equipment slots. This component
	 * exists for all mob entities.
	 *
	 * 提供访问生物装备槽的接口。该组件存在于所有生物实体中。
	 */
	Equippable = "minecraft:equippable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity
	 * doesn't take damage from fire.
	 *
	 * 添加后，该组件表示实体不会受到火焰伤害。
	 */
	FireImmune = "minecraft:fire_immune",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can
	 * float in liquid blocks.
	 *
	 * 添加后，该组件表示实体可以漂浮在液体方块中。
	 */
	FloatsInLiquid = "minecraft:floats_in_liquid",
	/**
	 * @remarks
	 * Represents the flying speed of an entity.
	 *
	 * 表示实体的飞行速度。
	 */
	FlyingSpeed = "minecraft:flying_speed",
	/**
	 * @remarks
	 * Defines how much friction affects this entity.
	 *
	 * 定义摩擦对实体的影响程度。
	 */
	FrictionModifier = "minecraft:friction_modifier",
	/**
	 * @remarks
	 * Sets the offset from the ground that the entity is actually
	 * at.
	 *
	 * 设置实体实际位置距离地面的偏移量。
	 */
	GroundOffset = "minecraft:ground_offset",
	/**
	 * @remarks
	 * Defines the interactions with this entity for healing it.
	 *
	 * 定义与实体的交互以进行治疗。
	 */
	Healable = "minecraft:healable",
	/**
	 * @remarks
	 * Defines the health properties of an entity.
	 *
	 * 定义实体的生命属性。
	 */
	Health = "minecraft:health",
	/**
	 * @remarks
	 * Defines this entity's inventory properties.
	 *
	 * 定义实体的物品栏属性。
	 */
	Inventory = "minecraft:inventory",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is a
	 * baby.
	 *
	 * 添加后，该组件表示实体是宝宝。
	 */
	IsBaby = "minecraft:is_baby",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * charged.
	 *
	 * 添加后，该组件表示实体处于充能状态。
	 */
	IsCharged = "minecraft:is_charged",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently carrying a chest.
	 *
	 * 添加后，该组件表示实体当前携带一个箱子。
	 */
	IsChested = "minecraft:is_chested",
	/**
	 * @remarks
	 * When added, this component signifies that dyes can be used
	 * on this entity to change its color.
	 *
	 * 添加后，该组件表示可以对实体使用染料来改变其颜色。
	 */
	IsDyeable = "minecraft:is_dyeable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can
	 * hide from hostile mobs while invisible.
	 *
	 * 添加后，该组件表示实体在隐身时可以躲避敌对生物。
	 */
	IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
	/**
	 * @remarks
	 * When added, this component signifies that this entity this
	 * currently on fire.
	 *
	 * 添加后，该组件表示实体当前着火。
	 */
	IsIgnited = "minecraft:is_ignited",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is an
	 * illager captain.
	 *
	 * 添加后，该组件表示实体是一个灾厄村民队长。
	 */
	IsIllagerCaptain = "minecraft:is_illager_captain",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently saddled.
	 *
	 * 添加后，该组件表示实体上装有鞍。
	 */
	IsSaddled = "minecraft:is_saddled",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently shaking.
	 *
	 * 添加后，该组件表示实体当前正在颤抖。
	 */
	IsShaking = "minecraft:is_shaking",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently sheared.
	 *
	 * 添加后，该组件表示实体当前被剪过毛。
	 */
	IsSheared = "minecraft:is_sheared",
	/**
	 * @remarks
	 * When added, this component signifies that this entity can be
	 * stacked.
	 *
	 * 添加后，该组件表示实体可以堆叠。
	 */
	IsStackable = "minecraft:is_stackable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently stunned.
	 *
	 * 添加后，该组件表示实体当前被击晕。
	 */
	IsStunned = "minecraft:is_stunned",
	/**
	 * @remarks
	 * When added, this component signifies that this entity is
	 * currently tamed.
	 *
	 * 添加后，该组件表示实体当前被驯服。
	 */
	IsTamed = "minecraft:is_tamed",
	/**
	 * @remarks
	 * If added onto the entity, this indicates that the entity
	 * represents a free-floating item in the world. Lets you
	 * retrieve the actual item stack contents via the itemStack
	 * property.
	 *
	 * 若添加到实体上。这表明实体表示一个世界中的漂浮物品。可以通过 itemStack 属性获取实际物品堆的内容。
	 */
	Item = "minecraft:item",
	/**
	 * @remarks
	 * Defines the base movement speed in lava of this entity.
	 *
	 * 定义实体在岩浆中的基础移动速度。
	 */
	LavaMovement = "minecraft:lava_movement",
	/**
	 * @remarks
	 * Allows this entity to be leashed and defines the conditions
	 * and events for this entity when is leashed.
	 *
	 * 允许该实体被拴住，并定义被拴住时的条件和事件。
	 */
	Leashable = "minecraft:leashable",
	/**
	 * @remarks
	 * When added, this component signifies that this entity
	 * contains an additional variant value. Can be used to further
	 * differentiate variants.
	 *
	 * 添加后，该组件表示实体包含一个附加的变体值。可以用于进一步区分变体。
	 */
	MarkVariant = "minecraft:mark_variant",
	/**
	 * @remarks
	 * Defines the general movement speed of this entity.
	 *
	 * 定义实体的一般移动速度。
	 */
	Movement = "minecraft:movement",
	/**
	 * @remarks
	 * When added, this movement control allows the mob to swim in
	 * water and walk on land.
	 *
	 * 添加后，该移动控件允许生物在水中游泳并在陆地上行走。
	 */
	MovementAmphibious = "minecraft:movement.amphibious",
	/**
	 * @remarks
	 * When added, this component allows the movement of an entity.
	 *
	 * 添加后，该组件允许实体移动。
	 */
	MovementBasic = "minecraft:movement.basic",
	/**
	 * @remarks
	 * When added, this move control causes the mob to fly.
	 *
	 * 添加后，该移动控件使生物飞行。
	 */
	MovementFly = "minecraft:movement.fly",
	/**
	 * @remarks
	 * When added, this move control allows a mob to fly, swim,
	 * climb, etc.
	 *
	 * 添加后，该移动控件允许生物飞行、游泳、爬行等。
	 */
	MovementGeneric = "minecraft:movement.generic",
	/**
	 * @remarks
	 * When added, this movement control allows the mob to glide.
	 *
	 * 添加后，该移动控件允许生物滑翔。
	 */
	MovementGlide = "minecraft:movement.glide",
	/**
	 * @remarks
	 * When added, this move control causes the mob to hover.
	 *
	 * 添加后，该移动控件使生物悬停。
	 */
	MovementHover = "minecraft:movement.hover",
	/**
	 * @remarks
	 * Move control that causes the mob to jump as it moves with a
	 * specified delay between jumps.
	 *
	 * 移动控件使生物在移动时跳跃，跳跃之间有指定的延迟。
	 */
	MovementJump = "minecraft:movement.jump",
	/**
	 * @remarks
	 * When added, this move control causes the mob to hop as it
	 * moves.
	 *
	 * 添加后，该移动控件使生物在移动时跳跃。
	 */
	MovementSkip = "minecraft:movement.skip",
	/**
	 * @remarks
	 * When added, this move control causes the mob to sway side to
	 * side giving the impression it is swimming.
	 *
	 * 添加后，该移动控件使生物左右摇摆，给人以游泳的印象。
	 */
	MovementSway = "minecraft:movement.sway",
	/**
	 * @remarks
	 * Allows this entity to generate paths that include vertical
	 * walls (for example, like Minecraft spiders do.)
	 *
	 * 允许该实体生成包括垂直墙壁的路径（例如，像 Minecraft 蜘蛛一样）。
	 */
	NavigationClimb = "minecraft:navigation.climb",
	/**
	 * @remarks
	 * Allows this entity to generate paths by flying around the
	 * air like the regular Ghast.
	 *
	 * 允许该实体通过在空中飞行生成路径，类似于普通的幽灵。
	 */
	NavigationFloat = "minecraft:navigation.float",
	/**
	 * @remarks
	 * Allows this entity to generate paths in the air (for
	 * example, like Minecraft parrots do.)
	 *
	 * 允许该实体在空中生成路径（例如，像 Minecraft 鹦鹉一样）。
	 */
	NavigationFly = "minecraft:navigation.fly",
	/**
	 * @remarks
	 * Allows this entity to generate paths by walking, swimming,
	 * flying and/or climbing around and jumping up and down a
	 * block.
	 *
	 * 允许该实体通过步行、游泳、飞行和/或攀爬以及上下跳跃生成路径。
	 */
	NavigationGeneric = "minecraft:navigation.generic",
	/**
	 * @remarks
	 * Allows this entity to generate paths in the air (for
	 * example, like the Minecraft Bees do.) Keeps them from
	 * falling out of the skies and doing predictive movement.
	 *
	 * 允许该实体在空中生成路径（例如，像 Minecraft 蜜蜂一样）。防止它们从空中坠落并进行预测性移动。
	 */
	NavigationHover = "minecraft:navigation.hover",
	/**
	 * @remarks
	 * Allows this entity to generate paths by walking around and
	 * jumping up and down a block like regular mobs.
	 *
	 * 允许该实体通过四处走动和上下跳跃生成路径，类似于普通生物。
	 */
	NavigationWalk = "minecraft:navigation.walk",
	/**
	 * @beta
	 * @remarks
	 * Adds NPC capabilities to an entity such as custom skin,
	 * name, and dialogue interactions.
	 *
	 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
	 */
	Npc = "minecraft:npc",
	/**
	 * @remarks
	 * When present on an entity, this entity is on fire.
	 *
	 * 当实体存在该组件时，表示实体着火。
	 */
	OnFire = "minecraft:onfire",
	/**
	 * @remarks
	 * The projectile component controls the properties of a
	 * projectile entity and allows it to be shot in a given
	 * direction. This component is present when the entity has the
	 * minecraft:projectile component.
	 *
	 * 投射物组件控制投射物实体的属性，并允许其在给定方向上发射。当实体具有 minecraft:projectile 组件时存在此组件。
	 */
	Projectile = "minecraft:projectile",
	/**
	 * @remarks
	 * Sets the distance through which the entity can push through.
	 *
	 * 设置实体可以推过的距离。
	 */
	PushThrough = "minecraft:push_through",
	/**
	 * @remarks
	 * When added, this component adds the capability that an
	 * entity can be ridden by another entity.
	 *
	 * 添加后，该组件增加了实体可以被另一实体骑乘的能力。
	 */
	Rideable = "minecraft:rideable",
	/**
	 * @remarks
	 * This component is added to any entity when it is riding
	 * another entity.
	 *
	 * 当实体骑乘另一实体时，将添加此组件。
	 */
	Riding = "minecraft:riding",
	/**
	 * @remarks
	 * Sets the entity's visual size.
	 *
	 * 设置实体的视觉大小。
	 */
	Scale = "minecraft:scale",
	/**
	 * @remarks
	 * Skin Id value. Can be used to differentiate skins, such as
	 * base skins for villagers.
	 *
	 * 皮肤 ID 值。可以用于区分皮肤，例如村民的基本皮肤。
	 */
	SkinId = "minecraft:skin_id",
	/**
	 * @remarks
	 * Defines the entity's strength to carry items.
	 *
	 * 定义实体携带物品的力量。
	 */
	Strength = "minecraft:strength",
	/**
	 * @remarks
	 * Defines the rules for an entity to be tamed by the player.
	 *
	 * 定义玩家驯服实体的规则。
	 */
	Tameable = "minecraft:tameable",
	/**
	 * @remarks
	 * Contains options for taming a rideable entity based on the
	 * entity that mounts it.
	 *
	 * 包含基于其骑乘的实体驯服可骑乘实体的选项。
	 */
	TameMount = "minecraft:tamemount",
	/**
	 * @remarks
	 * Used to determine the type families the entity belongs to.
	 *
	 * 用于确定实体所属的类型族。
	 */
	TypeFamily = "minecraft:type_family",
	/**
	 * @remarks
	 * Defines the general movement speed underwater of this
	 * entity.
	 *
	 * 定义实体在水下的一般移动速度。
	 */
	UnderwaterMovement = "minecraft:underwater_movement",
	/**
	 * @remarks
	 * Used to differentiate the component group of a variant of an
	 * entity from others. (e.g. ocelot, villager).
	 *
	 * 用于区分实体变体的组件组与其他组件组（例如豹猫、村民）。
	 */
	Variant = "minecraft:variant",
	/**
	 * @remarks
	 * When added, this component signifies that this entity wants
	 * to become a jockey.
	 *
	 * 添加后，该组件表示实体想要成为骑兵。
	 */
	WantsJockey = "minecraft:wants_jockey",
}
