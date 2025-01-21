// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * 包含了大量用于修改 Minecraft 世界（实体、方块、维度等）的类型。
 *
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.18.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from "@minecraft/common";
// @ts-ignore Optional types-only package, will decay to any if @minecraft/vanilla-data isn't installed
import type * as minecraftvanilladata from "@minecraft/vanilla-data";
/**
 * @beta
 * Specifies different targeting modes for use in aim-assist.
 */

export enum AimAssistTargetMode {
	/**

     * @remarks

     * 角度为基础的目标选择方式。

     *

     * Angle based targeting.

     */

	Angle = "Angle",

	/**

     * @remarks

     * 距离为基础的目标选择方式。

     *

     * Distance based targeting.

     */

	Distance = "Distance",
}

/**

 * 可通过 `Block.getComponent` 获取的方块组件类型。

 *

 * The types of block components that are accessible via function Block.getComponent.

 */

export enum BlockComponentTypes {
	FluidContainer = "minecraft:fluidContainer",

	/**

     * @remarks

     * 表示世界中方块的库存。用于像箱子这样的方块。

     *

     * Represents the inventory of a block in the world. Used with blocks like chests.

     */

	Inventory = "minecraft:inventory",

	/**

     * @remarks

     * 当存在时，该方块具有类似活塞的行为。包含其他属性以了解方块的活塞状态。

     *

     * When present, this block has piston-like behavior. Contains additional properties for discovering block piston state.

     */

	Piston = "minecraft:piston",

	/**

     * @remarks

     * 表示可以播放唱片的方块。

     *

     * Represents a block that can play a record.

     */

	RecordPlayer = "minecraft:record_player",

	/**

     * @remarks

     * 表示可以在其上显示文字的方块。

     *

     * Represents a block that can display text on it.

     */

	Sign = "minecraft:sign",
}

/**

 * 描述方块活塞状态的枚举。

 *

 * An enumeration describing the state of a block piston.

 */

export enum BlockPistonState {
	/**

     * @remarks

     * 活塞是否完全展开。

     *

     * Whether the piston is fully expanded.

     */

	Expanded = "Expanded",

	/**

     * @remarks

     * 活塞是否正在展开中。

     *

     * Whether the piston is in the process of expanding.

     */

	Expanding = "Expanding",

	/**

     * @remarks

     * 活塞是否完全缩回。

     *

     * Whether the piston is fully retracted.

     */

	Retracted = "Retracted",

	/**

     * @remarks

     * 活塞是否正在缩回中。

     *

     * Whether the piston is in the process of retracting.

     */

	Retracting = "Retracting",
}

/**

 * 描述两个 `BlockVolume` 对象的相交测试结果。

 *

 * Description of the resulting intersection test on two BlockVolume objects.

 */

export enum BlockVolumeIntersection {
	/**

     * @remarks

     * 体积 B 与体积 A 无交点。

     *

     * Volume B has no intersection points with Volume A.

     */

	Disjoint = 0,

	/**

     * @remarks

     * 体积 B 完全位于体积 A 内部。

     *

     * Volume B resides completely inside Volume A.

     */

	Contains = 1,

	/**

     * @remarks

     * 体积 B 部分与体积 A 相交。

     *

     * Volume B partially intersects Volume A.

     */

	Intersects = 2,
}

/**

 * @beta

 * 键盘、控制器或触摸界面上按钮的状态。

 *

 * The state of a button on a keyboard, controller, or touch interface.

 */

export enum ButtonState {
	Pressed = "Pressed",

	Released = "Released",
}

/**

 * @beta

 * `CompoundBlockVolume` 枚举决定了 `CompoundBlockVolume` 在执行内外计算时如何考虑相关的 `CompoundBlockVolumeItem`。

 *

 * The Action enum determines how the CompoundBlockVolume considers the associated CompoundBlockVolumeItem when performing inside/outside calculations.

 */
export enum CompoundBlockVolumeAction {
	/**
	 * @remarks
	 * 相关的 BlockVolume 视为正空间，任何交集测试视为命中。
	 *
	 * The associated BlockVolume is considered a positive space,
	 * and any intersection tests are considered hits.
	 *
	 */
	Add = 0,

	/**
	 * @remarks
	 * 相关的 BlockVolume 视为负空间或空洞，任何交集测试视为未命中。通过 `Subtract` 动作，可以在块卷中“打孔”，这样任何交集测试可能会穿过这些空间。
	 *
	 * The associated BlockVolume is considered a negative or void
	 * space, and any intersection tests are considered misses.
	 * Using the Subtract action, it is possible to `punch holes`
	 * in block volumes so that any intersection tests may pass
	 * through such spaces.
	 *
	 */
	Subtract = 1,
}

/**
 * @beta
 * 一个描述 CompoundBlockVolumeItem 相对于父 CompoundVolume 的相对性的枚举。
 *
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 */
export enum CompoundBlockVolumePositionRelativity {
	/**
	 * @remarks
	 * 相关的 BlockVolume 内的位置是相对于添加它们的 CompoundBlockVolume。
	 *
	 * The locations within the associated BlockVolume are relative
	 * to the CompoundBlockVolume to which they were added.
	 *
	 */
	Relative = 0,

	/**
	 * @remarks
	 * 相关的 BlockVolume 内的位置在绝对世界空间中。
	 *
	 * The locations within the associated BlockVolume are in
	 * absolute world space.
	 *
	 */
	Absolute = 1,
}

export enum CustomComponentNameErrorReason {
	NoNamespace = 1,
	DisallowedNamespace = 2,
}

/**
 * @beta
 * 一个用于描述Minecraft不同难度等级的枚举。
 *
 * An enumeration for the various difficulty levels of
 * Minecraft.
 */
export enum Difficulty {
	/**
	 * @remarks
	 * 和平难度等级。
	 *
	 * Peaceful difficulty level.
	 *
	 */
	Peaceful = 0,

	/**
	 * @remarks
	 * 简单难度等级。
	 *
	 * Easy difficulty level.
	 *
	 */
	Easy = 1,

	/**
	 * @remarks
	 * 普通难度等级。
	 *
	 * Normal difficulty level.
	 *
	 */
	Normal = 2,

	/**
	 * @remarks
	 * 困难难度等级。
	 *
	 * Hard difficulty level.
	 *
	 */
	Hard = 3,
}

/**
 * 通用枚举之一。表示朝向。
 *
 * A general purpose relative direction enumeration.
 */
export enum Direction {
	/**
	 * @remarks
	 * 表示下方（y - 1）。
	 *
	 * Returns the {@link Block} beneath (y - 1) of this item.
	 *
	 */
	Down = "Down",

	/**
	 * @remarks
	 * 表示东方（x + 1）。
	 *
	 * Returns the {@link Block} to the east (x + 1) of this item.
	 *
	 */
	East = "East",

	/**
	 * @remarks
	 * 表示北方（z - 1）。
	 *
	 * Returns the {@link Block} to the east (z + 1) of this item.
	 *
	 */
	North = "North",

	/**
	 * @remarks
	 * 表示南方（z + 1）。
	 *
	 * Returns the {@link Block} to the south (z - 1) of this item.
	 *
	 */
	South = "South",

	/**
	 * @remarks
	 * 表示上方（y + 1）。
	 *
	 * Returns the {@link Block} above (y + 1) of this item.
	 *
	 */
	Up = "Up",

	/**
	 * @remarks
	 * 表示西方（x - 1）。
	 *
	 * Returns the {@link Block} to the west (x - 1) of this item.
	 *
	 */
	West = "West",
}

/**
 * 表示记分板分数的显示方式。
 *
 * Specifies a mechanism for displaying scores on a scoreboard.
 */
export enum DisplaySlotId {
	/**
	 * @remarks
	 * 记分项上的分数将显示在玩家名称牌下方。
	 *
	 * Displays the score below the player's name.
	 *
	 */
	BelowName = "BelowName",
	/**
	 * @remarks
	 * 该记分项与对应的分数持有者将显示在暂停菜单上。
	 *
	 * Displays the score as a list on the pause screen.
	 *
	 */
	List = "List",
	/**
	 * @remarks
	 * 记分项将在屏幕右侧显示。
	 *
	 * Displays the score on the side of the player's screen.
	 *
	 */
	Sidebar = "Sidebar",
}

/**
 * 表示用于染料的不同颜色。
 *
 * Specifies different colors for use as dye.
 */
export enum DyeColor {
	/**
	 * @remarks
	 * 黑色染料。
	 *
	 * Black dye color.
	 *
	 */
	Black = "Black",
	/**
	 * @remarks
	 * 蓝色染料。
	 *
	 * Blue dye color.
	 *
	 */
	Blue = "Blue",
	/**
	 * @remarks
	 * 棕色染料。
	 *
	 * Brown dye color.
	 *
	 */
	Brown = "Brown",
	/**
	 * @remarks
	 * 青色染料。
	 *
	 * Cyan dye color.
	 *
	 */
	Cyan = "Cyan",
	/**
	 * @remarks
	 * 灰色染料。
	 *
	 * Gray dye color.
	 *
	 */
	Gray = "Gray",
	/**
	 * @remarks
	 * 绿色染料。
	 *
	 * Green dye color.
	 *
	 */
	Green = "Green",
	/**
	 * @remarks
	 * 淡蓝色染料。
	 *
	 * Light blue dye color.
	 *
	 */
	LightBlue = "LightBlue",
	/**
	 * @remarks
	 * 黄绿色染料。
	 *
	 * Lime dye color.
	 *
	 */
	Lime = "Lime",
	/**
	 * @remarks
	 * 品红色染料。
	 *
	 * Magenta dye color.
	 *
	 */
	Magenta = "Magenta",
	/**
	 * @remarks
	 * 橙色染料。
	 *
	 * Orange dye color.
	 *
	 */
	Orange = "Orange",
	/**
	 * @remarks
	 * 粉色染料。
	 *
	 * Pink dye color.
	 *
	 */
	Pink = "Pink",
	/**
	 * @remarks
	 * 紫色染料。
	 *
	 * Purple dye color.
	 *
	 */
	Purple = "Purple",
	/**
	 * @remarks
	 * 红色染料。
	 *
	 * Red dye color.
	 *
	 */
	Red = "Red",
	/**
	 * @remarks
	 * 银色染料。
	 *
	 * Silver dye color.
	 *
	 */
	Silver = "Silver",
	/**
	 * @remarks
	 * 白色染料。
	 *
	 * White dye color.
	 *
	 */
	White = "White",
	/**
	 * @remarks
	 * 黄色染料。
	 *
	 * Yellow dye color.
	 *
	 */
	Yellow = "Yellow",
}

export enum EasingType {
	InBack = "InBack",
	InBounce = "InBounce",
	InCirc = "InCirc",
	InCubic = "InCubic",
	InElastic = "InElastic",
	InExpo = "InExpo",
	InOutBack = "InOutBack",
	InOutBounce = "InOutBounce",
	InOutCirc = "InOutCirc",
	InOutCubic = "InOutCubic",
	InOutElastic = "InOutElastic",
	InOutExpo = "InOutExpo",
	InOutQuad = "InOutQuad",
	InOutQuart = "InOutQuart",
	InOutQuint = "InOutQuint",
	InOutSine = "InOutSine",
	InQuad = "InQuad",
	InQuart = "InQuart",
	InQuint = "InQuint",
	InSine = "InSine",
	Linear = "Linear",
	OutBack = "OutBack",
	OutBounce = "OutBounce",
	OutCirc = "OutCirc",
	OutCubic = "OutCubic",
	OutElastic = "OutElastic",
	OutExpo = "OutExpo",
	OutQuad = "OutQuad",
	OutQuart = "OutQuart",
	OutQuint = "OutQuint",
	OutSine = "OutSine",
	Spring = "Spring",
}

export enum EnchantmentSlot {
	ArmorFeet = "ArmorFeet",
	ArmorHead = "ArmorHead",
	ArmorLegs = "ArmorLegs",
	ArmorTorso = "ArmorTorso",
	Axe = "Axe",
	Bow = "Bow",
	CarrotStick = "CarrotStick",
	CosmeticHead = "CosmeticHead",
	Crossbow = "Crossbow",
	Elytra = "Elytra",
	FishingRod = "FishingRod",
	Flintsteel = "Flintsteel",
	Hoe = "Hoe",
	Pickaxe = "Pickaxe",
	Shears = "Shears",
	Shield = "Shield",
	Shovel = "Shovel",
	Spear = "Spear",
	Sword = "Sword",
}

/**
 * 类型 `Entity.getComponent` 可访问的实体组件类型。
 *
 * The types of entity components that are accessible via function Entity.getComponent.
 */
export enum EntityComponentTypes {
	/**
	 * @remarks
	 * 当添加时，此组件使实体生成时带有指定实体类型的骑乘者。
	 *
	 * When added, this component makes the entity spawn with a
	 * rider of the specified entityType.
	 *
	 */
	AddRider = "minecraft:addrider",
	/**
	 * @remarks
	 * 为实体添加一个成长计时器。它可以通过喂养实体喜欢的物品加速。
	 *
	 * Adds a timer for the entity to grow up. It can be
	 * accelerated by giving the entity the items it likes as
	 * defined by feedItems.
	 *
	 */
	Ageable = "minecraft:ageable",
	/**
	 * @remarks
	 * 定义此实体可以在其中呼吸的方块，并使其有窒息能力。
	 *
	 * Defines what blocks this entity can breathe in and gives
	 * them the ability to suffocate.
	 *
	 */
	Breathable = "minecraft:breathable",
	/**
	 * @remarks
	 * 当添加时，此组件表示实体可以爬梯子。
	 *
	 * When added, this component signifies that the entity can
	 * climb up ladders.
	 *
	 */
	CanClimb = "minecraft:can_climb",
	/**
	 * @remarks
	 * 当添加时，此组件表示实体可以飞行，寻路器不会被限制在需要下方有固体方块的路径上。
	 *
	 * When added, this component signifies that the entity can
	 * fly, and the pathfinder won't be restricted to paths where a
	 * solid block is required underneath it.
	 *
	 */
	CanFly = "minecraft:can_fly",
	/**
	 * @remarks
	 * 当添加时，此组件表示实体可以像 Minecraft 中的马一样进行高跳。
	 *
	 * When added, this component signifies that the entity can
	 * power jump like the horse does within Minecraft.
	 *
	 */
	CanPowerJump = "minecraft:can_power_jump",
	/**
	 * @remarks
	 * 定义实体的颜色。仅在某些具有预定义颜色值的实体上有效（例如羊、羊驼、潜影贝）。
	 *
	 * Defines the entity's color. Only works on certain entities
	 * that have predefined color values (e.g., sheep, llama,
	 * shulker).
	 *
	 */
	Color = "minecraft:color",
	/**
	 * @remarks
	 * 定义实体的二次颜色。仅在某些具有预定义次要颜色值的实体上有效（例如热带鱼）。
	 *
	 * Defines the entity's secondary color. Only works on certain
	 * entities that have predefined secondary color values (e.g.,
	 * tropical fish).
	 *
	 */
	Color2 = "minecraft:color2",
	CursorInventory = "minecraft:cursor_inventory",
	/**
	 * @remarks
	 * 提供对生物的装备槽的访问。此组件存在于所有生物实体中。
	 *
	 * Provides access to a mob's equipment slots. This component
	 * exists for all mob entities.
	 *
	 */
	Equippable = "minecraft:equippable",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体不会受到火焰伤害。
	 *
	 * When added, this component signifies that this entity
	 * doesn't take damage from fire.
	 *
	 */
	FireImmune = "minecraft:fire_immune",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体可以在液体方块中漂浮。
	 *
	 * When added, this component signifies that this entity can
	 * float in liquid blocks.
	 *
	 */
	FloatsInLiquid = "minecraft:floats_in_liquid",
	/**
	 * @remarks
	 * 表示实体的飞行速度。
	 *
	 * Represents the flying speed of an entity.
	 *
	 */
	FlyingSpeed = "minecraft:flying_speed",
	/**
	 * @remarks
	 * 定义摩擦对实体的影响程度。
	 *
	 * Defines how much friction affects this entity.
	 *
	 */
	FrictionModifier = "minecraft:friction_modifier",
	/**
	 * @remarks
	 * 设置实体实际在地面上的偏移量。
	 *
	 * Sets the offset from the ground that the entity is actually
	 * at.
	 *
	 */
	GroundOffset = "minecraft:ground_offset",
	/**
	 * @remarks
	 * 定义与此实体的互动以治愈它。
	 *
	 * Defines the interactions with this entity for healing it.
	 *
	 */
	Healable = "minecraft:healable",
	/**
	 * @remarks
	 * 定义实体的健康属性。
	 *
	 * Defines the health properties of an entity.
	 *
	 */
	Health = "minecraft:health",
	/**
	 * @remarks
	 * 定义此实体的库存属性。
	 *
	 * Defines this entity's inventory properties.
	 *
	 */
	Inventory = "minecraft:inventory",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体是幼崽。
	 *
	 * When added, this component signifies that this entity is a
	 * baby.
	 *
	 */
	IsBaby = "minecraft:is_baby",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体被充能。
	 *
	 * When added, this component signifies that this entity is
	 * charged.
	 *
	 */
	IsCharged = "minecraft:is_charged",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前携带着一个箱子。
	 *
	 * When added, this component signifies that this entity is
	 * currently carrying a chest.
	 *
	 */
	IsChested = "minecraft:is_chested",
	/**
	 * @remarks
	 * 当添加时，此组件表示可以用染料改变该实体的颜色。
	 *
	 * When added, this component signifies that dyes can be used
	 * on this entity to change its color.
	 *
	 */
	IsDyeable = "minecraft:is_dyeable",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体在隐身时可以躲避敌对生物。
	 *
	 * When added, this component signifies that this entity can
	 * hide from hostile mobs while invisible.
	 *
	 */
	IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体此刻正在燃烧。
	 *
	 * When added, this component signifies that this entity this
	 * currently on fire.
	 *
	 */
	IsIgnited = "minecraft:is_ignited",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体是掠夺者队长。
	 *
	 * When added, this component signifies that this entity is an
	 * illager captain.
	 *
	 */
	IsIllagerCaptain = "minecraft:is_illager_captain",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前已装鞍。
	 *
	 * When added, this component signifies that this entity is
	 * currently saddled.
	 *
	 */
	IsSaddled = "minecraft:is_saddled",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前正在颤抖。
	 *
	 * When added, this component signifies that this entity is
	 * currently shaking.
	 *
	 */
	IsShaking = "minecraft:is_shaking",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前已被剪毛。
	 *
	 * When added, this component signifies that this entity is
	 * currently sheared.
	 *
	 */
	IsSheared = "minecraft:is_sheared",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体可以堆叠。
	 *
	 * When added, this component signifies that this entity can be
	 * stacked.
	 *
	 */
	IsStackable = "minecraft:is_stackable",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前被击晕。
	 *
	 * When added, this component signifies that this entity is
	 * currently stunned.
	 *
	 */
	IsStunned = "minecraft:is_stunned",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体当前已经被驯服。
	 *
	 * When added, this component signifies that this entity is
	 * currently tamed.
	 *
	 */
	IsTamed = "minecraft:is_tamed",
	/**
	 * @remarks
	 * 如果添加到实体上，则表示该实体是世界中的一个漂浮物品。可以通过 `itemStack` 属性检索实际的物品堆内容。
	 *
	 * If added onto the entity, this indicates that the entity
	 * represents a free-floating item in the world. Lets you
	 * retrieve the actual item stack contents via the itemStack
	 * property.
	 *
	 */
	Item = "minecraft:item",
	/**
	 * @remarks
	 * 定义此实体在岩浆中的基本移动速度。
	 *
	 * Defines the base movement speed in lava of this entity.
	 *
	 */
	LavaMovement = "minecraft:lava_movement",
	/**
	 * @remarks
	 * 允许该实体被拴住，并定义该实体被拴住时的条件和事件。
	 *
	 * Allows this entity to be leashed and defines the conditions
	 * and events for this entity when is leashed.
	 *
	 */
	Leashable = "minecraft:leashable",
	/**
	 * @remarks
	 * 当添加时，此组件表示该实体具有附加的变种值。可以用于进一步区分变种。
	 *
	 * When added, this component signifies that this entity
	 * contains an additional variant value. Can be used to further
	 * differentiate variants.
	 *
	 */
	MarkVariant = "minecraft:mark_variant",
	/**
	 * @remarks
	 * 定义此实体的一般移动速度。
	 *
	 * Defines the general movement speed of this entity.
	 *
	 */
	Movement = "minecraft:movement",
	/**
	 * @remarks
	 * 当添加时，此移动控制允许生物在水中游泳并在陆地上行走。
	 *
	 * When added, this movement control allows the mob to swim in
	 * water and walk on land.
	 *
	 */
	MovementAmphibious = "minecraft:movement.amphibious",
	/**
	 * @remarks
	 * 当添加时，此组件允许实体的移动。
	 *
	 * When added, this component allows the movement of an entity.
	 *
	 */
	MovementBasic = "minecraft:movement.basic",
	/**
	 * @remarks
	 * 当添加时，此移动控制使生物能够飞行。
	 *
	 * When added, this move control causes the mob to fly.
	 *
	 */
	MovementFly = "minecraft:movement.fly",
	/**
	 * @remarks
	 * 当添加时，此移动控制允许生物飞行、游泳、攀爬等。
	 *
	 * When added, this move control allows a mob to fly, swim,
	 * climb, etc.
	 *
	 */
	MovementGeneric = "minecraft:movement.generic",
	/**
	 * @remarks
	 * 当添加时，此移动控制允许生物滑翔。
	 *
	 * When added, this movement control allows the mob to glide.
	 *
	 */
	MovementGlide = "minecraft:movement.glide",
	/**
	 * @remarks
	 * 当添加时，此移动控制使生物悬停。
	 *
	 * When added, this move control causes the mob to hover.
	 *
	 */
	MovementHover = "minecraft:movement.hover",
	/**
	 * @remarks
	 * 移动控制，使生物在其移动时跳跃，并在跳跃之间设置指定的延迟。
	 *
	 * Move control that causes the mob to jump as it moves with a
	 * specified delay between jumps.
	 *
	 */
	MovementJump = "minecraft:movement.jump",
	/**
	 * @remarks
	 * 当添加时，此移动控制使生物在移动时跳跃。
	 *
	 * When added, this move control causes the mob to hop as it
	 * moves.
	 *
	 */
	MovementSkip = "minecraft:movement.skip",
	/**
	 * @remarks
	 * 当添加时，此移动控制使生物从一侧到另一侧摇摆，给人以它在游泳的假象。
	 *
	 * When added, this move control causes the mob to sway side to
	 * side giving the impression it is swimming.
	 *
	 */
	MovementSway = "minecraft:movement.sway",
	/**
	 * @remarks
	 * 允许该实体生成包含垂直墙壁的路径（例如，像 Minecraft 的蜘蛛那样）。
	 *
	 * Allows this entity to generate paths that include vertical
	 * walls (for example, like Minecraft spiders do.)
	 *
	 */
	NavigationClimb = "minecraft:navigation.climb",
	/**
	 * @remarks
	 * 允许该实体通过在空中飞行来生成路径，就像普通的恶魂一样。
	 *
	 * Allows this entity to generate paths by flying around the
	 * air like the regular Ghast.
	 *
	 */
	NavigationFloat = "minecraft:navigation.float",
	/**
	 * @remarks
	 * 允许该实体在空中生成路径（例如，像 Minecraft 的鹦鹉那样）。
	 *
	 * Allows this entity to generate paths in the air (for
	 * example, like Minecraft parrots do.)
	 *
	 */
	NavigationFly = "minecraft:navigation.fly",
	/**
	 * @remarks
	 * 允许该实体通过行走、游泳、飞行和/或攀爬以及上下跳跃一个方块来生成路径。
	 *
	 * Allows this entity to generate paths by walking, swimming,
	 * flying and/or climbing around and jumping up and down a
	 * block.
	 *
	 */
	NavigationGeneric = "minecraft:navigation.generic",
	/**
	 * @remarks
	 * 允许该实体在空中生成路径（例如，像 Minecraft 的蜜蜂那样）。防止它们从空中掉落，并进行预测性移动。
	 *
	 * Allows this entity to generate paths in the air (for
	 * example, like the Minecraft Bees do.) Keeps them from
	 * falling out of the skies and doing predictive movement.
	 *
	 */
	NavigationHover = "minecraft:navigation.hover",
	/**
	 * @remarks
	 * 允许该实体通过行走和上下跳跃一个方块来生成路径，就像普通的生物一样。
	 *
	 * Allows this entity to generate paths by walking around and
	 * jumping up and down a block like regular mobs.
	 *
	 */
	NavigationWalk = "minecraft:navigation.walk",
	/**
	 * @beta
	 * @remarks
	 * 为实体添加 NPC 功能，例如自定义皮肤、名称和对话互动。
	 *
	 * Adds NPC capabilities to an entity such as custom skin,
	 * name, and dialogue interactions.
	 *
	 */
	Npc = "minecraft:npc",
	/**
	 * @remarks
	 * 当实体具有此组件时，该实体处于燃烧状态。
	 *
	 * When present on an entity, this entity is on fire.
	 *
	 */
	OnFire = "minecraft:onfire",
	/**
	 * @remarks
	 * 投射物组件控制投射物实体的属性，并允许其朝给定方向发射。当实体具有 minecraft:projectile 组件时，该组件存在。
	 *
	 * The projectile component controls the properties of a
	 * projectile entity and allows it to be shot in a given
	 * direction. This component is present when the entity has the
	 * minecraft:projectile component.
	 *
	 */
	Projectile = "minecraft:projectile",
	/**
	 * @remarks
	 * 设置实体可以穿过的距离。
	 *
	 * Sets the distance through which the entity can push through.
	 *
	 */
	PushThrough = "minecraft:push_through",
	/**
	 * @remarks
	 * 添加后，该组件赋予实体被其他实体骑乘的能力。
	 *
	 * When added, this component adds the capability that an
	 * entity can be ridden by another entity.
	 *
	 */
	Rideable = "minecraft:rideable",
	/**
	 * @remarks
	 * 当实体骑乘其他实体时，此组件被添加到该实体上。
	 *
	 * This component is added to any entity when it is riding
	 * another entity.
	 *
	 */
	Riding = "minecraft:riding",
	/**
	 * @remarks
	 * 设置实体的视觉大小。
	 *
	 * Sets the entity's visual size.
	 *
	 */
	Scale = "minecraft:scale",
	/**
	 * @remarks
	 * 皮肤 ID 值。可用于区分皮肤，例如村民的基础皮肤。
	 *
	 * Skin Id value. Can be used to differentiate skins, such as
	 * base skins for villagers.
	 *
	 */
	SkinId = "minecraft:skin_id",
	/**
	 * @remarks
	 * 定义实体携带物品的力量。
	 *
	 * Defines the entity's strength to carry items.
	 *
	 */
	Strength = "minecraft:strength",
	/**
	 * @remarks
	 * 定义实体被玩家驯服的规则。
	 *
	 * Defines the rules for an entity to be tamed by the player.
	 *
	 */
	Tameable = "minecraft:tameable",
	/**
	 * @remarks
	 * 包含基于骑乘实体的驯服可骑乘实体的选项。
	 *
	 * Contains options for taming a rideable entity based on the
	 * entity that mounts it.
	 *
	 */
	TameMount = "minecraft:tamemount",
	/**
	 * @remarks
	 * 用于确定实体所属的类型家族。
	 *
	 * Used to determine the type families the entity belongs to.
	 *
	 */
	TypeFamily = "minecraft:type_family",
	/**
	 * @remarks
	 * 定义该实体在水下的一般移动速度。
	 *
	 * Defines the general movement speed underwater of this
	 * entity.
	 *
	 */
	UnderwaterMovement = "minecraft:underwater_movement",
	/**
	 * @remarks
	 * 用于区分实体变体的组件组与其他变体。（例如豹猫、村民）。
	 *
	 * Used to differentiate the component group of a variant of an
	 * entity from others. (e.g. ocelot, villager).
	 *
	 */
	Variant = "minecraft:variant",
	/**
	 * @remarks
	 * 添加后，该组件表示该实体想要成为骑师。
	 *
	 * When added, this component signifies that this entity wants
	 * to become a jockey.
	 *
	 */
	WantsJockey = "minecraft:wants_jockey",
}

/**
 * 描述来自实体的伤害来源。
 *
 * Describes the source of damage from an Entity.
 */
export enum EntityDamageCause {
	/**
	 * @remarks
	 * 由坠落的铁砧造成的伤害。
	 *
	 * Damage caused by a falling anvil.
	 */
	anvil = "anvil",
	/**
	 * @remarks
	 * 由非实体爆炸造成的伤害。例如，爆炸的床。
	 *
	 * Damage caused from a non-Entity explosion. For example, an
	 * exploding bed.
	 */
	blockExplosion = "blockExplosion",
	/**
	 * @remarks
	 * 由篝火造成的伤害。
	 *
	 * Damage caused by Campfires.
	 */
	campfire = "campfire",
	/**
	 * @remarks
	 * 未使用。
	 *
	 * Unused.
	 */
	charging = "charging",
	/**
	 * @remarks
	 * 由实体或方块接触造成的伤害。例如，接触甜莓灌木或河豚。
	 *
	 * Damage caused by physically touching an Entity or Block. For
	 * example, touching a Sweet Berry bush or Pufferfish.
	 */
	contact = "contact",
	/**
	 * @remarks
	 * 由实体在空气中耗尽并处于液体方块内造成的伤害。
	 *
	 * Damage caused by an Entity being out of air and inside a
	 * liquid block.
	 */
	drowning = "drowning",
	/**
	 * @remarks
	 * 由实体攻击造成的伤害。
	 *
	 * Damage caused by an Entity attack.
	 */
	entityAttack = "entityAttack",
	/**
	 * @remarks
	 * 由实体爆炸造成的伤害。例如，苦力怕或凋灵。
	 *
	 * Damage caused by an Entity explosion. For example, a Creeper
	 * or Wither.
	 */
	entityExplosion = "entityExplosion",
	/**
	 * @remarks
	 * 由掉落到地面造成的伤害。
	 *
	 * Damage caused by falling onto the ground.
	 */
	fall = "fall",
	/**
	 * @remarks
	 * 由掉落的方块造成的伤害。注意：铁砧和钟乳石有自己的伤害原因。
	 *
	 * Damage caused by falling blocks. Note: Anvils and
	 * Stalactites have their own damage causes.
	 */
	fallingBlock = "fallingBlock",
	/**
	 * @remarks
	 * 由着火造成的伤害。
	 *
	 * Damage caused by catching on fire.
	 */
	fire = "fire",
	/**
	 * @remarks
	 * 由长时间燃烧造成的伤害。
	 *
	 * Damage caused by burning over time.
	 */
	fireTick = "fireTick",
	/**
	 * @remarks
	 * 由烟花造成的伤害。
	 *
	 * Damage caused by fireworks.
	 */
	fireworks = "fireworks",
	/**
	 * @remarks
	 * 由持鞘翅高速度飞入墙壁造成的伤害。
	 *
	 * Damage caused by flying into a wall at high speed while
	 * gliding with Elytra.
	 */
	flyIntoWall = "flyIntoWall",
	/**
	 * @remarks
	 * 由进入细雪方块造成的伤害。
	 *
	 * Damage caused by staying inside a Powder Snow block.
	 */
	freezing = "freezing",
	/**
	 * @remarks
	 * 由触摸熔岩方块造成的伤害。
	 *
	 * Damage caused by touching a Lava block.
	 */
	lava = "lava",
	/**
	 * @remarks
	 * 由闪电击中造成的伤害。
	 *
	 * Damage caused by being struck by lightning.
	 */
	lightning = "lightning",
	maceSmash = "maceSmash",
	/**
	 * @remarks
	 * 由魔法攻击造成的伤害。例如，恼鬼牙或导管方块。
	 *
	 * Damage caused by magical attacks. For example, Evoker Fang
	 * or Conduit Block.
	 */
	magic = "magic",
	/**
	 * @remarks
	 * 由触摸岩浆方块造成的伤害。
	 *
	 * Damage caused by touching a Magma block.
	 */
	magma = "magma",
	/**
	 * @remarks
	 * 由无来源造成的伤害。例如，通过命令或脚本。
	 *
	 * Damage caused by no source. For example, from a command or
	 * script.
	 */
	none = "none",
	/**
	 * @remarks
	 * 由间接来源造成的伤害。例如，在行为包中将生物的生命值设置为 0。
	 *
	 * Damage caused by an indirect source. For example, setting a
	 * mob's health to 0 in a behavior pack.
	 */
	override = "override",
	/**
	 * @remarks
	 * 由活塞造成的伤害。
	 *
	 * Damage caused by a Piston.
	 */
	piston = "piston",
	/**
	 * @remarks
	 * 由投射物造成的伤害。
	 *
	 * Damage caused by a projectile.
	 */
	projectile = "projectile",
	/**
	 * @remarks
	 * 由山羊撞击造成的伤害。
	 *
	 * Damage caused by Goat ramming.
	 */
	ramAttack = "ramAttack",
	/**
	 * @remarks
	 * 由 /kill 命令造成的伤害。
	 *
	 * Damage caused by the /kill command.
	 */
	selfDestruct = "selfDestruct",
	/**
	 * @remarks
	 * 由监守者的声波爆炸攻击造成的伤害。
	 *
	 * Damage caused by the Warden's Sonic Boom attack.
	 */
	sonicBoom = "sonicBoom",
	/**
	 * @remarks
	 * 由灵魂营火造成的伤害。
	 *
	 * Damage caused by a Soul Campfire.
	 */
	soulCampfire = "soulCampfire",
	/**
	 * @remarks
	 * 由坠落的钟乳石方块造成的伤害。
	 *
	 * Damage caused by a falling Stalactite block.
	 */
	stalactite = "stalactite",
	/**
	 * @remarks
	 * 由触摸石笋方块造成的伤害。
	 *
	 * Damage caused by touching a Stalagmite block.
	 */
	stalagmite = "stalagmite",
	/**
	 * @remarks
	 * 由空饥饿条导致的持续伤害。
	 *
	 * Damage caused over time by having an empty hunger bar.
	 */
	starve = "starve",
	/**
	 * @remarks
	 * 由实体在空气中耗尽并处于非液体方块内造成的伤害。
	 *
	 * Damage caused by an Entity being out of air and inside a
	 * non-liquid block.
	 */
	suffocation = "suffocation",
	/**
	 * @remarks
	 * 由实体自杀造成的伤害。例如，通过 /kill 命令。
	 *
	 * Damage caused by an Entity killing itself. For example, from
	 * the /kill command.
	 */
	suicide = "suicide",
	/**
	 * @remarks
	 * 由实体处在不可居住的气候中造成的伤害。例如，雪傀儡处在温度大于 1 的生物群系。
	 *
	 * Damage caused by an Entity being in an inhabitable climate.
	 * For example, a Snow Golem in a biome with a temperature
	 * greater than 1.
	 */
	temperature = "temperature",
	/**
	 * @remarks
	 * 由荆棘附魔和守卫者的荆棘效果造成的伤害。
	 *
	 * Damage caused by the Thorns armor enchantment and by the
	 * Guardian thorns effect.
	 */
	thorns = "thorns",
	/**
	 * @remarks
	 * 由掉进虚空造成的持续伤害。
	 *
	 * Damage caused over time by falling into the void.
	 */
	"void" = "void",
	/**
	 * @remarks
	 * 由凋零效果造成的伤害。例如，接触凋零玫瑰。
	 *
	 * Damage caused by the Wither effect. For example, from
	 * touching a Wither Rose.
	 */
	wither = "wither",
}

/**
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
	/**
	 * @remarks
	 * 实体被其他实体产生的情况，例如，牛生小牛或史莱姆死后产生更小的史莱姆。
	 *
	 * Case when an entity is created as child of other entity or
	 * entities, e.g., cows making a cow or slimes making smaller
	 * slimes after dying.
	 */
	Born = "Born",
	/**
	 * @remarks
	 * 实体由事件生成的情况，例如，流浪商人生成羊驼。
	 *
	 * Case when an entity is created by an event, e.g., a
	 * Wandering trader spawning llamas.
	 */
	Event = "Event",
	/**
	 * @remarks
	 * 实体加载到世界中的情况。
	 *
	 * Case when an entity is loaded into the world.
	 */
	Loaded = "Loaded",
	/**
	 * @remarks
	 * 实体自然生成在世界中的情况。
	 *
	 * Case when an entity is naturally spawned in the world.
	 */
	Spawned = "Spawned",
	/**
	 * @remarks
	 * 实体被转化为另一实体的情况。
	 *
	 * Case when an entity is transformed into another entity.
	 */
	Transformed = "Transformed",
}

/**
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 */
export enum EquipmentSlot {
	/**
	 * @beta
	 * @remarks
	 * 身体槽。此槽用于保存非人形生物的护甲。
	 *
	 * The body slot. This slot is used to hold armor for
	 * non-humanoid mobs.
	 */
	Body = "Body",
	/**
	 * @remarks
	 * 胸部槽。此槽用于保存物品，如胸甲或鞘翅。
	 *
	 * The chest slot. This slot is used to hold items such as
	 * Chestplate or Elytra.
	 */
	Chest = "Chest",
	/**
	 * @remarks
	 * 脚部槽。此槽用于保存物品，如靴子。
	 *
	 * The feet slot. This slot is used to hold items such as
	 * Boots.
	 */
	Feet = "Feet",
	/**
	 * @remarks
	 * 头部槽。此槽用于保存物品，如头盔或雕刻南瓜。
	 *
	 * The head slot. This slot is used to hold items such as
	 * Helmets or Carved Pumpkins.
	 */
	Head = "Head",
	/**
	 * @remarks
	 * 腿部槽。此槽用于保存物品，如护腿。
	 *
	 * The legs slot. This slot is used to hold items such as
	 * Leggings.
	 */
	Legs = "Legs",
	/**
	 * @remarks
	 * 主手槽。对玩家来说，主手槽指当前使用的热键槽。
	 *
	 * The mainhand slot. For players, the mainhand slot refers to
	 * the currently active hotbar slot.
	 */
	Mainhand = "Mainhand",
	/**
	 * @remarks
	 * 副手槽。此槽用于保存物品，如盾牌和地图。
	 *
	 * The offhand slot. This slot is used to hold items such as
	 * shields and maps.
	 */
	Offhand = "Offhand",
}

/**
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
	/**
	 * @remarks
	 * 表示岩浆作为一种流体类型。
	 *
	 * Represents lava as a type of fluid.
	 */
	Lava = "Lava",
	/**
	 * @remarks
	 * 表示药水作为一种流体类型。
	 *
	 * Represents a potion as a type of fluid.
	 */
	Potion = "Potion",
	/**
	 * @remarks
	 * 表示细雪作为一种流体类型。
	 *
	 * Represents powder snow as a type of fluid.
	 */
	PowderSnow = "PowderSnow",
	/**
	 * @remarks
	 * 表示水作为一种流体类型。
	 *
	 * Represents water as a type of fluid.
	 */
	Water = "Water",
}

/**
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
	/**
	 * @remarks
	 * 世界处于更受限制的体验中，方块无法被操作。
	 *
	 * World is in a more locked-down experience, where blocks may
	 * not be manipulated.
	 */
	adventure = "adventure",
	/**
	 * @remarks
	 * 世界处于完整的创造模式。在创造模式下，玩家在物品选择页面和生存模式选择页面上能获得所有可用资源。玩家还能即时拆除方块，包括通常不可破坏的方块。创造模式下还可以使用命令方块和结构方块。物品不会损失耐久度或消失。
	 *
	 * World is in a full creative mode. In creative mode, the
	 * player has all the resources available in the item selection
	 * tabs and the survival selection tab. They can also destroy
	 * blocks instantly including those which would normally be
	 * indestructible. Command and structure blocks can also be
	 * used in creative mode. Items also do not lose durability or
	 * disappear.
	 */
	creative = "creative",
	/**
	 * @remarks
	 * 世界处于旁观者模式。在旁观者模式下，旁观者始终处于飞行状态，且不能落地。旁观者可以穿过任何实心方块和实体而不会碰撞，也不能使用物品或与方块及生物互动。旁观者不会被生物或其他玩家看到，除了其他旁观者；旁观者在其他旁观者眼中是一个透明的漂浮头。
	 *
	 * World is in spectator mode. In spectator mode, spectators
	 * are always flying and cannot become grounded. Spectators can
	 * pass through solid blocks and entities without any
	 * collisions, and cannot use items or interact with blocks or
	 * mobs. Spectators cannot be seen by mobs or other players,
	 * except for other spectators; spectators appear as a
	 * transparent floating head.
	 */
	spectator = "spectator",
	/**
	 * @remarks
	 * 世界处于生存模式，在此模式下，玩家会受到伤害，且实体可能不是和平的。生存模式下，玩家必须收集资源、建造结构并在生成的世界中生存。活动过程中的种种行为会逐渐消耗玩家的生命值和饥饿槽。
	 *
	 * World is in a survival mode, where players can take damage
	 * and entities may not be peaceful. Survival mode is where the
	 * player must collect resources, build structures while
	 * surviving in their generated world. Activities can, over
	 * time, chip away at player health and hunger bar.
	 */
	survival = "survival",
}

/**
 * 游戏规则。这些值也可以通过 /gamerule 命令进行控制。
 *
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 */
export enum GameRule {
	/**
	 * @remarks
	 * 控制命令方块执行命令时是否通知管理员。
	 *
	 * Whether command blocks should notify admins when they
	 * perform commands.
	 *
	 */
	CommandBlockOutput = "commandBlockOutput",
	/**
	 * @remarks
	 * 控制是否可以使用命令方块执行命令。
	 *
	 * Controls whether command blocks can execute commands.
	 *
	 */
	CommandBlocksEnabled = "commandBlocksEnabled",
	/**
	 * @remarks
	 * 控制白天和晚上的循环是否进行。
	 *
	 * Controls whether the day and night cycles progress.
	 *
	 */
	DoDayLightCycle = "doDayLightCycle",
	/**
	 * @remarks
	 * 控制非生物实体是否掉落物品，如物品展示框。
	 *
	 * Controls whether non-mob entities do drops. ie. Item Frame
	 *
	 */
	DoEntityDrops = "doEntityDrops",
	/**
	 * @remarks
	 * 控制火是否会蔓延。
	 *
	 * Controls whether fire spreads.
	 *
	 */
	DoFireTick = "doFireTick",
	/**
	 * @remarks
	 * 控制玩家是否立即重生或显示死亡屏幕。
	 *
	 * Controls whether players immediately respawn or are shown
	 * the death screen.
	 *
	 */
	DoImmediateRespawn = "doImmediateRespawn",
	/**
	 * @remarks
	 * 控制玩家是否会受到不睡觉的影响（如幻翼生成）。
	 *
	 * Controls whether players deal with the effects of not
	 * sleeping (such as Phantom spawning).
	 *
	 */
	DoInsomnia = "doInsomnia",
	/**
	 * @remarks
	 * 确定玩家是否只能合成他们已经解锁的配方，当 `doLimitedCrafting` 设为 `true` 时。
	 *
	 * Determines whether players should be able to craft only
	 * those recipes that they've unlocked first - when
	 * dolimitedcrafting is set to true.
	 *
	 */
	DoLimitedCrafting = "doLimitedCrafting",
	/**
	 * @remarks
	 * 控制生物是否掉落战利品。
	 *
	 * Controls whether mobs drop loot.
	 *
	 */
	DoMobLoot = "doMobLoot",
	/**
	 * @remarks
	 * 控制生物是否在世界中自然生成。
	 *
	 * Controls whether mobs spawn naturally in the world.
	 *
	 */
	DoMobSpawning = "doMobSpawning",
	/**
	 * @remarks
	 * 控制方块被破坏时是否掉落物品。
	 *
	 * Controls whether blocks drop items when destroyed.
	 *
	 */
	DoTileDrops = "doTileDrops",
	/**
	 * @remarks
	 * 控制天气是否可自然变化。
	 *
	 * Controls whether the weather can change naturally.
	 *
	 */
	DoWeatherCycle = "doWeatherCycle",
	/**
	 * @remarks
	 * 控制实体是否会因溺水而受到伤害。
	 *
	 * Controls whether entities take damage from drowning.
	 *
	 */
	DrowningDamage = "drowningDamage",
	/**
	 * @remarks
	 * 控制实体是否会因跌落而受到伤害。
	 *
	 * Controls whether entities take damage from falling.
	 *
	 */
	FallDamage = "fallDamage",
	/**
	 * @remarks
	 * 控制实体是否会因火焰而受到伤害。
	 *
	 * Controls whether entities take damage from fire.
	 *
	 */
	FireDamage = "fireDamage",
	/**
	 * @remarks
	 * 控制是否有冻结伤害。
	 *
	 * Controls whether there is damage from freezing.
	 *
	 */
	FreezeDamage = "freezeDamage",
	/**
	 * @remarks
	 * 通过 `/function` 命令可以同时执行的最大命令数。
	 *
	 * The maximum number of commands that can be executed
	 * simultaneously by the /function command.
	 *
	 */
	FunctionCommandLimit = "functionCommandLimit",
	/**
	 * @remarks
	 * 控制玩家死亡后是否保留物品栏。
	 *
	 * Controls whether players keep their inventories when they
	 * die.
	 *
	 */
	KeepInventory = "keepInventory",
	/**
	 * @remarks
	 * 每个刻可执行的最大串联命令数。
	 *
	 * The maximum number of chained commands that can execute per
	 * tick.
	 *
	 */
	MaxCommandChainLength = "maxCommandChainLength",
	/**
	 * @remarks
	 * 控制生物是否可以破坏世界中的物品。例如：苦力怕爆炸破坏方块。
	 *
	 * Controls whether mob griefing can happen in the world.
	 * Example: A Creeper explosion destroying blocks.
	 *
	 */
	MobGriefing = "mobGriefing",
	/**
	 * @remarks
	 * 控制玩家是否可以恢复健康。
	 *
	 * Controls whether players can regenerate health.
	 *
	 */
	NaturalRegeneration = "naturalRegeneration",
	/**
	 * @remarks
	 * 推进到下一天所需的睡觉玩家百分比。
	 *
	 * The percentage of players required to be sleeping in order
	 * to advance to the next day.
	 *
	 */
	PlayersSleepingPercentage = "playersSleepingPercentage",
	/**
	 * @remarks
	 * 控制投射物（具有投射物组件的实体，如箭、掷出的三叉戟或烟花）是否可以摧毁支持此交互的某些方块（如红树果实、滴水石尖锥或装饰花盆）。对哪些投射物可以摧毁哪些方块有所限制。
	 *
	 * Controls whether projectiles (entities with a projectile
	 * component, like Arrows, thrown Tridents or Fireworks) can
	 * destroy certain blocks that support this interaction (such
	 * as Chorus Fruit, Dripstone or Decorated Pots). Restrictions
	 * on which projectiles can destroy certain blocks apply.
	 *
	 */
	ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
	/**
	 * @remarks
	 * 控制玩家是否可以互相伤害。
	 *
	 * Controls whether players can damage each other.
	 *
	 */
	Pvp = "pvp",
	/**
	 * @remarks
	 * 控制随机刻发生的频率。值为 0 或更小将禁用随机刻。默认值为 1。
	 *
	 * Controls how frequently random ticks occur. A value of 0 or
	 * less will disable random ticks. The default value is 1.
	 *
	 */
	RandomTickSpeed = "randomTickSpeed",
	/**
	 * @remarks
	 * 控制内置（原版）配方是否自动解锁，玩家在游戏中逐步解锁配方（这些配方的替代方式是基于自定义游戏逻辑使用 `/recipe` 命令）。
	 *
	 * Controls whether built-in (vanilla) recipes automatically
	 * unlock as the player progresses through the game (one
	 * alternative to this is to use the /recipe command based on
	 * custom gameplay logic.)
	 *
	 */
	RecipesUnlock = "recipesUnlock",
	/**
	 * @remarks
	 * 控制重生点方块（例如床、重生锚）在其他维度中是否爆炸。
	 *
	 * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
	 * explode in other dimensions.
	 *
	 */
	RespawnBlocksExplode = "respawnBlocksExplode",
	/**
	 * @remarks
	 * 控制命令输出是否显示给玩家。还控制命令方块输出是否默认存储。
	 *
	 * Controls whether command output is displayed to players.
	 * Also controls whether Command Block output is stored by
	 * default.
	 *
	 */
	SendCommandFeedback = "sendCommandFeedback",
	/**
	 * @remarks
	 * 控制边界块效果是否显示。
	 *
	 * Controls whether Border Block effects are shown.
	 *
	 */
	ShowBorderEffect = "showBorderEffect",
	/**
	 * @remarks
	 * 控制是否显示玩家坐标。
	 *
	 * Controls whether player coordinates are displayed.
	 *
	 */
	ShowCoordinates = "showCoordinates",
	/**
	 * @remarks
	 * 控制是否显示玩家已玩天数。
	 *
	 * Controls whether the days a player has played is displayed.
	 *
	 */
	ShowDaysPlayed = "showDaysPlayed",
	/**
	 * @remarks
	 * 控制死亡信息是否在聊天中显示。
	 *
	 * Controls whether death messages are displayed in chat.
	 *
	 */
	ShowDeathMessages = "showDeathMessages",
	/**
	 * @remarks
	 * 控制是否显示标准的配方通知。当设置为 `false` 时，将不再发送“玩家已解锁配方”作为玩家通知。
	 *
	 * Controls whether standard player notifications for recipes
	 * will show. When set to false, 'player unlocked recipes' are
	 * no longer sent as player notifications.
	 *
	 */
	ShowRecipeMessages = "showRecipeMessages",
	/**
	 * @remarks
	 * 控制是否显示物品标签。例如“可放置在”、“可破坏的”标签、物品锁定图标等。
	 *
	 * Controls whether item tags are shown. E.g. 'Can Place On',
	 * 'Can Destroy', item lock icons, etc.
	 *
	 */
	ShowTags = "showTags",
	/**
	 * @remarks
	 * 允许玩家在世界生成点的方块半径内生成的范围。不会影响冒险模式。默认值为 10 个方块。
	 *
	 * The block radius from world spawn that a player is allowed
	 * to spawn in. Does not affect Adventure mode. The default
	 * value is 10 blocks.
	 *
	 */
	SpawnRadius = "spawnRadius",
	/**
	 * @remarks
	 * 影响 TNT 方块是否可以点燃。
	 *
	 * Affects whether TNT blocks can be lit.
	 *
	 */
	TntExplodes = "tntExplodes",
	/**
	 * @remarks
	 * 控制方块在被爆炸毁坏时是随机掉落战利品还是全部掉落。默认为 `false`。
	 *
	 * Controls whether blocks randomly drop loot or all blocks
	 * drop loot when destroyed by an explosion. Defaults to false.
	 *
	 */
	TntExplosionDropDecay = "tntExplosionDropDecay",
}

export enum HudElement {
	PaperDoll = 0,
	Armor = 1,
	ToolTips = 2,
	TouchControls = 3,
	Crosshair = 4,
	Hotbar = 5,
	Health = 6,
	ProgressBar = 7,
	Hunger = 8,
	AirBubbles = 9,
	HorseHealth = 10,
	StatusEffects = 11,
	ItemText = 12,
}

/**
 * 枚举，指定如何处理 HUD 元素的可见性。
 *
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 */
export enum HudVisibility {
	/**
	 * @remarks
	 * 指定此 HUD 元素应被隐藏。
	 *
	 * Specifies that this HUD element should be hidden.
	 *
	 */
	Hide = 0,
	/**
	 * @remarks
	 * 指定此 HUD 元素应重置为其默认状态（尽管大多数 HUD 元素是可见的，但某些 HUD 元素可以通过设置由玩家隐藏）。
	 *
	 * Specifies that this HUD element should be reset to its
	 * default state (while most HUD elements are visible, some HUD
	 * elements can be hidden by the player via settings.)
	 *
	 */
	Reset = 1,
}

/**
 * @beta
 * 所有支持的输入按钮。与 {@link @minecraft/server.PlayerInput.getButtonState} 一起使用，通过 {@link @minecraft/server.Player.input} 或 {@link PlayerButtonInputAfterEvent}。
 *
 * All the different input buttons that are supported. Use with
 * {@link @minecraft/server.PlayerInput.getButtonState} via
 * {@link @minecraft/server.Player.input} or {@link
 * PlayerButtonInputAfterEvent} via {@link
 * WorldAfterEvents.playerButtonInput}
 */
export enum InputButton {
	/**
	 * @remarks
	 * 映射到控制器、键盘和触摸接口上的“跳跃”按钮。
	 *
	 * This is mapped to the 'Jump' button on controllers,
	 * keyboards, and touch interfaces.
	 *
	 */
	Jump = "Jump",
	/**
	 * @remarks
	 * 映射到控制器、键盘和触摸接口上的“潜行”按钮。默认情况下，这是键盘上的 Shift 键或 Xbox 控制器上的 B 键。在触摸接口上，这个按钮只按一刻或更少，然后立即释放，即使玩家按住手指离不开。下马或下船不会发送 Sneak 按钮变化事件。
	 *
	 * This is mapped to the 'Sneak' button on controllers,
	 * keyboards, and touch interfaces. By default, this is shift
	 * on a keyboard or B on an Xbox controller. On touch
	 * interfaces this will only be pressed for 1 tick or less and
	 * then it will be released immediately even if the player
	 * holds their finger down. Dismounting a horse or exiting a
	 * boat will not send a Sneak button change event.
	 *
	 */
	Sneak = "Sneak",
}

/**
 * @rc
 * 描述设备的输入类型。
 *
 * Describes the type of input of a device.
 */
export enum InputMode {
	/**
	 * @remarks
	 * 手柄输入。
	 *
	 * Gamepad input.
	 *
	 */
	Gamepad = "Gamepad",
	/**
	 * @remarks
	 * 键盘和鼠标输入。
	 *
	 * Keyboard and mouse input.
	 *
	 */
	KeyboardAndMouse = "KeyboardAndMouse",
	/**
	 * @remarks
	 * 运动控制器输入。
	 *
	 * Motion controller input.
	 *
	 */
	MotionController = "MotionController",
	/**
	 * @remarks
	 * 触摸输入。
	 *
	 * Touch input.
	 *
	 */
	Touch = "Touch",
}

/**
 * 输入权限类别。用于 {@link PlayerInputPermissionCategoryChangeAfterEvent} 来指定修改的类别和 {@link PlayerInputPermissions} 来获取或设置权限。
 *
 * Input permission categories. Used by {@link
 * PlayerInputPermissionCategoryChangeAfterEvent} to specify
 * which category was changed and {@link
 * PlayerInputPermissions} to get or set permissions.
 */
export enum InputPermissionCategory {
	/**
	 * @remarks
	 * 玩家输入涉及到相机移动。
	 *
	 * Player input relating to camera movement.
	 */
	Camera = 1,

	/**
	 * @remarks
	 * 玩家输入涉及到所有玩家移动。禁用它相当于禁用跳跃、潜行、横向移动、骑乘和下马。
	 *
	 * Player input relating to all player movement. Disabling this
	 * is equivalent to disabling jump, sneak, lateral movement,
	 * mount, and dismount.
	 */
	Movement = 2,

	/**
	 * @remarks
	 * 玩家输入涉及到在世界中的横向移动。这包括键盘上的 WASD 键或游戏手柄或触摸设备上的移动摇杆。
	 *
	 * Player input for moving laterally in the world. This would
	 * be WASD on a keyboard or the movement joystick on gamepad or
	 * touch.
	 */
	LateralMovement = 4,

	/**
	 * @remarks
	 * 玩家输入涉及到潜行。这也影响到下落的飞行。
	 *
	 * Player input relating to sneak. This also affects flying
	 * down.
	 */
	Sneak = 5,

	/**
	 * @remarks
	 * 玩家输入涉及到跳跃。这也影响到上升的飞行。
	 *
	 * Player input relating to jumping. This also affects flying
	 * up.
	 */
	Jump = 6,

	/**
	 * @remarks
	 * 玩家输入涉及到骑乘。
	 *
	 * Player input relating to mounting vehicles.
	 */
	Mount = 7,

	/**
	 * @remarks
	 * 玩家输入涉及到下马。禁用时，玩家仍然可以通过其他方式下车，例如，在马匹上玩家仍然可以跳下，在船上玩家可以换到另一艘船。
	 *
	 * Player input relating to dismounting. When disabled, the
	 * player can still dismount vehicles by other means, for
	 * example on horses players can still jump off and in boats
	 * players can go into another boat.
	 */
	Dismount = 8,

	/**
	 * @remarks
	 * 玩家输入涉及到向前移动。
	 *
	 * Player input relating to moving the player forward.
	 */
	MoveForward = 9,

	/**
	 * @remarks
	 * 玩家输入涉及到向后移动。
	 *
	 * Player input relating to moving the player backward.
	 */
	MoveBackward = 10,

	/**
	 * @remarks
	 * 玩家输入涉及到向左移动。
	 *
	 * Player input relating to moving the player left.
	 */
	MoveLeft = 11,

	/**
	 * @remarks
	 * 玩家输入涉及到向右移动。
	 *
	 * Player input relating to moving the player right.
	 */
	MoveRight = 12,
}

/**
 * 表示可以通过函数 `ItemStack.getComponent` 访问的物品组件类型。
 *
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 */
export enum ItemComponentTypes {
	/**
	 * @rc
	 *
	 */
	Compostable = "minecraft:compostable",

	/**
	 * @remarks
	 * `minecraft:cooldown` 组件。
	 *
	 * The minecraft:cooldown component.
	 */
	Cooldown = "minecraft:cooldown",

	/**
	 * @remarks
	 * `minecraft:durability` 组件。
	 *
	 * The minecraft:durability component.
	 */
	Durability = "minecraft:durability",

	/**
	 * @beta
	 *
	 */
	Dyeable = "minecraft:dyeable",

	/**
	 * @remarks
	 * `minecraft:enchantable` 组件。
	 *
	 * The minecraft:enchantable component.
	 */
	Enchantable = "minecraft:enchantable",

	/**
	 * @remarks
	 * `minecraft:food` 组件。
	 *
	 * The minecraft:food component.
	 */
	Food = "minecraft:food",

	/**
	 * @beta
	 *
	 */
	Potion = "minecraft:potion",
}

/**
 * 描述物品在容器中的移动方式。
 *
 * Describes how an an item can be moved within a container.
 */
export enum ItemLockMode {
	/**
	 * @remarks
	 * 物品不能被丢弃或用来合成。
	 *
	 * The item cannot be dropped or crafted with.
	 */
	inventory = "inventory",

	/**
	 * @remarks
	 * 物品没有容器限制。
	 *
	 * The item has no container restrictions.
	 */
	none = "none",

	/**
	 * @remarks
	 * 物品不能从槽位中移动、丢弃或用来合成。
	 *
	 * The item cannot be moved from its slot, dropped or crafted
	 * with.
	 */
	slot = "slot",
}

/**
 * @beta
 * 表示可以放置在方块上或在世界中动态流动的液体类型。
 *
 * Represents the type of liquid that can be placed on a block
 * or flow dynamically in the world.
 */
export enum LiquidType {
	/**
	 * @remarks
	 * 表示水作为一种液体类型。
	 *
	 * Represents water as a type of liquid.
	 */
	Water = "Water",
}

/**
 * 描述设备的内存。
 *
 * Describes the memory of a device.
 */
export enum MemoryTier {
	/**
	 * @remarks
	 * 超低档的最大内存为 1.5GB。
	 *
	 * Max memory for Super Low Tier is 1.5GBs.
	 */
	SuperLow = 0,

	/**
	 * @remarks
	 * 低档的最大内存为2GB。
	 *
	 * Max memory for Low Tier is 2GBs.
	 */
	Low = 1,

	/**
	 * @remarks
	 * 中档的最大内存为4GB。
	 *
	 * Max memory for Mid Tier is 4GBs.
	 */
	Mid = 2,

	/**
	 * @remarks
	 * 高档的最大内存为8GB。
	 *
	 * Max memory for High Tier is 8GBs.
	 */
	High = 3,

	/**
	 * @remarks
	 * 超高档的内存大于8GB。
	 *
	 * Memory for Super High Tier is above 8GBs.
	 */
	SuperHigh = 4,
}

/**
 * 枚举包含基于当前日期的不同月相。使用 `world.getMoonPhase` 获取当前月相。
 * 月亮的圆缺控制了各种生物的行为，例如沼泽生态群系中的史莱姆的生成数量、
 * 骨骼和僵尸生成时带有盔甲的几率，以及蜘蛛生成时具有特定状态效果的几率。
 *
 * Enum containing the different phases of the moon based on
 * the current day. Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 */
export enum MoonPhase {
	/**
	 * @remarks
	 * 最明亮的月相。在这一阶段，猫有 50% 的几率生成黑猫。
	 *
	 * The brightest moon phase. During this phase, cats have a 50%
	 * chance of spawning as black cats.
	 *
	 */
	FullMoon = 0,
	/**
	 * @remarks
	 * 满月后的月相。
	 *
	 * The phase following the Full Moon.
	 *
	 */
	WaningGibbous = 1,
	/**
	 * @remarks
	 * 蜡蚀月后的月相。
	 *
	 * The phase following the Waxing Crescent.
	 *
	 */
	FirstQuarter = 2,
	/**
	 * @remarks
	 * 下弦月后的月相。
	 *
	 * The phase following the Last Quarter.
	 *
	 */
	WaningCrescent = 3,
	/**
	 * @remarks
	 * 最黑暗的月相。
	 *
	 * The darkest moon phase.
	 *
	 */
	NewMoon = 4,
	/**
	 * @remarks
	 * 新月后的月相。
	 *
	 * The phase following the New Moon.
	 *
	 */
	WaxingCrescent = 5,
	/**
	 * @remarks
	 * 残月后的月相。
	 *
	 * The phase following the Waning Gibbous.
	 *
	 */
	LastQuarter = 6,
	/**
	 * @remarks
	 * 上弦月后的月相。
	 *
	 * The phase following the First Quarter.
	 *
	 */
	WaxingGibbous = 7,
}

/**
 * @beta
 * 描述命名空间名错误原因的枚举。
 *
 * An enumeration describing the reason for the namespace name
 * error being thrown
 */
export enum NamespaceNameErrorReason {
	/**
	 * @remarks
	 * 使用了受限的命名空间。
	 *
	 * A restricted namespace was used as the namespace
	 *
	 */
	DisallowedNamespace = "DisallowedNamespace",
	/**
	 * @remarks
	 * 当需要命名空间时缺少命名空间。
	 *
	 * The name was missing a namespace when one is required
	 *
	 */
	NoNamespace = "NoNamespace",
}

/**
 * 表示分数持有者列表的排序顺序。
 *
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
	/**
	 * @remarks
	 * 以升序显示分数持有者列表（例如：A-Z）。
	 *
	 * Objective participant list is displayed in ascending (e.g.,
	 * A-Z) order.
	 *
	 */
	Ascending = 0,
	/**
	 * @remarks
	 * 以降序显示分数持有者列表（例如：Z-A）。
	 *
	 * Objective participant list is displayed in descending (e.g.,
	 * Z-A) order.
	 *
	 */
	Descending = 1,
}

/**
 * 包含用于 `EntityColorComponent` 和 `EntityColor2Component` 的颜色的枚举。
 *
 * Enum containing colors to be used with EntityColorComponent
 * and EntityColor2Component
 */
export enum PaletteColor {
	/**
	 * @remarks
	 * 颜色代码 #f0f0f0。
	 *
	 * Hex color #f0f0f0
	 *
	 */
	White = 0,
	/**
	 * @remarks
	 * 颜色代码 #F9801D。
	 *
	 * Hex color #F9801D
	 *
	 */
	Orange = 1,
	/**
	 * @remarks
	 * 颜色代码 #C74EBD。
	 *
	 * Hex color #C74EBD
	 *
	 */
	Magenta = 2,
	/**
	 * @remarks
	 * 颜色代码 #3AB3DA。
	 *
	 * Hex color #3AB3DA
	 *
	 */
	LightBlue = 3,
	/**
	 * @remarks
	 * 颜色代码 #FED83D。
	 *
	 * Hex color #FED83D
	 *
	 */
	Yellow = 4,
	/**
	 * @remarks
	 * 颜色代码 #80C71F。
	 *
	 * Hex color #80C71F
	 *
	 */
	Lime = 5,
	/**
	 * @remarks
	 * 颜色代码 #F38BAA。
	 *
	 * Hex color #F38BAA
	 *
	 */
	Pink = 6,
	/**
	 * @remarks
	 * 颜色代码 #474F52。
	 *
	 * Hex color #474F52
	 *
	 */
	Gray = 7,
	/**
	 * @remarks
	 * 颜色代码 #9D9D97。
	 *
	 * Hex color #9D9D97
	 *
	 */
	Silver = 8,
	/**
	 * @remarks
	 * 颜色代码 #169C9C。
	 *
	 * Hex color #169C9C
	 *
	 */
	Cyan = 9,
	/**
	 * @remarks
	 * 颜色代码 #8932B8。
	 *
	 * Hex color #8932B8
	 *
	 */
	Purple = 10,
	/**
	 * @remarks
	 * 颜色代码 #3C44AA。
	 *
	 * Hex color #3C44AA
	 *
	 */
	Blue = 11,
	/**
	 * @remarks
	 * 颜色代码 #835432。
	 *
	 * Hex color #835432
	 *
	 */
	Brown = 12,
	/**
	 * @remarks
	 * 颜色代码 #5E7C16。
	 *
	 * Hex color #5E7C16
	 *
	 */
	Green = 13,
	/**
	 * @remarks
	 * 颜色代码 #B02E26。
	 *
	 * Hex color #B02E26
	 *
	 */
	Red = 14,
	/**
	 * @remarks
	 * 颜色代码 #1D1D21。
	 *
	 * Hex color #1D1D21
	 *
	 */
	Black = 15,
}

/**
 * 描述设备的平台类型。
 *
 * Describes what kind of platform is a device.
 */
export enum PlatformType {
	/**
	 * @remarks
	 * 专用游戏设备。
	 *
	 * Specialized gaming device.
	 *
	 */
	Console = "Console",
	/**
	 * @remarks
	 * 个人电脑（PC）。
	 *
	 * Personal Computer (PC).
	 *
	 */
	Desktop = "Desktop",
	/**
	 * @remarks
	 * 手持设备，如智能手机或平板电脑。
	 *
	 * Handheld device such smartphone or tablet.
	 *
	 */
	Mobile = "Mobile",
}

/**
 * 表示分数持有者的类型。
 *
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
	/**
	 * @remarks
	 * 分数持有者是一个实体。
	 *
	 * This scoreboard participant is tied to an entity.
	 *
	 */
	Entity = "Entity",
	/**
	 * @remarks
	 * 分数持有者是一个虚拟玩家（通常用于存储数据或者作为抽象进度）。
	 *
	 * This scoreboard participant is tied to a pseudo player
	 * entity - typically this is used to store scores as data or
	 * as abstract progress.
	 *
	 */
	FakePlayer = "FakePlayer",
	/**
	 * @remarks
	 * 分数持有者是一位玩家。
	 *
	 * This scoreboard participant is tied to a player.
	 *
	 */
	Player = "Player",
}

/**
 * 描述脚本事件的来源。
 *
 * Describes where the script event originated from.
 */
export enum ScriptEventSource {
	/**
	 * @remarks
	 * 脚本事件的来源是方块，例如命令方块。
	 *
	 * The script event originated from a Block such as a Command
	 * Block.
	 *
	 */
	Block = "Block",
	/**
	 * @remarks
	 * 脚本事件的来源是实体，例如玩家、命令方块矿车或动画控制器。
	 *
	 * The script event originated from an Entity such as a Player,
	 * Command Block Minecart or Animation Controller.
	 *
	 */
	Entity = "Entity",
	/**
	 * @remarks
	 * 脚本事件的来源是 NPC 对话。
	 *
	 * The script event originated from an NPC dialogue.
	 *
	 */
	NPCDialogue = "NPCDialogue",
	/**
	 * @remarks
	 * 脚本事件的来源是服务器，例如来自 runCommand API 调用或专用服务器控制台。
	 *
	 * The script event originated from the server, such as from a
	 * runCommand API call or a dedicated server console.
	 *
	 */
	Server = "Server",
}

/**
 * 表示告示牌的某一侧。
 *
 * Represents a side of a sign.
 */
export enum SignSide {
	/**
	 * @remarks
	 * 告示牌的背面。
	 *
	 * The back of the sign.
	 *
	 */
	Back = "Back",
	/**
	 * @remarks
	 * 告示牌的正面。
	 *
	 * The front of the sign.
	 *
	 */
	Front = "Front",
}

/**
 * 指定在放置结构时结构块的动画显示方式。
 *
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 */
export enum StructureAnimationMode {
	/**
	 * @remarks
	 * 方块会随机依次放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds
	 * 控制所有方块放置完成所需的时间。
	 *
	 * Blocks will be randomly placed one at at time. Use
	 * @minecraft/server.StructurePlaceOptions.animationSeconds to
	 * control how long it takes for all blocks to be placed.
	 *
	 */
	Blocks = "Blocks",
	/**
	 * @remarks
	 * 方块会依次从下到上逐层放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds
	 * 控制所有方块放置完成所需的时间。
	 *
	 * Blocks will be placed one layer at a time from bottom to
	 * top. Use
	 * @minecraft/server.StructurePlaceOptions.animationSeconds to
	 * control how long it takes for all blocks to be placed.
	 *
	 */
	Layers = "Layers",
	/**
	 * @remarks
	 * 所有方块会立即被放置。
	 *
	 * All blocks will be placed immediately.
	 *
	 */
	None = "None",
}

/**
 * 指定放置结构时的镜像方式。
 *
 * Specifies how a structure should be mirrored when placed.
 */
export enum StructureMirrorAxis {
	/**
	 * @remarks
	 * 不进行镜像。
	 *
	 * No mirroring.
	 *
	 */
	None = "None",
	/**
	 * @remarks
	 * 结构在 X 轴上镜像。
	 *
	 * Structure is mirrored across the X axis.
	 *
	 */
	X = "X",
	/**
	 * @remarks
	 * 结构在 X 轴和 Z 轴上镜像。
	 *
	 * Structure is mirrored across both the X and Z axes.
	 *
	 */
	XZ = "XZ",
	/**
	 * @remarks
	 * 结构在 Z 轴上镜像。
	 *
	 * Structure is mirrored across the Z axis.
	 *
	 */
	Z = "Z",
}

/**
 * 描述结构放置的旋转方式。
 *
 * Enum describing a structure's placement rotation.
 */
export enum StructureRotation {
	/**
	 * @remarks
	 * 无旋转。
	 *
	 * No rotation.
	 */
	None = "None",
	/**
	 * @remarks
	 * 180 度旋转。
	 *
	 * 180 degree rotation.
	 */
	Rotate180 = "Rotate180",
	/**
	 * @remarks
	 * 270 度旋转。
	 *
	 * 270 degree rotation.
	 */
	Rotate270 = "Rotate270",
	/**
	 * @remarks
	 * 90 度旋转。
	 *
	 * 90 degree rotation.
	 */
	Rotate90 = "Rotate90",
}

/**
 * 表示结构应如何保存。
 *
 * Specifies how a structure should be saved.
 */
export enum StructureSaveMode {
	/**
	 * @remarks
	 * 结构将临时保存到内存中。结构将在世界关闭前保持存续。
	 *
	 * The structure will be temporarily saved to memory. The
	 * structure will persist until the world is shut down.
	 */
	Memory = "Memory",
	/**
	 * @remarks
	 * 结构将保存到世界文件并在世界载入时保持存续。可以通过 @minecraft/server.StructureManager.delete 从世界中移除已保存的结构。
	 *
	 * The structure will be saved to the world file and persist
	 * between world loads. A saved structure can be removed from
	 * the world via @minecraft/server.StructureManager.delete.
	 */
	World = "World",
}

/**
 * 提供 Minecraft 世界中常见时间段的数值。
 *
 * Provides numeric values for common periods in the Minecraft
 * day.
 */
export enum TimeOfDay {
	/**
	 * @remarks
	 * 将时间设定为一天的开始，即在 Minecraft 中相当于早上 7 点的时间 1,000。
	 *
	 * Sets the time to the start of the day, which is time of the
	 * day 1,000 (or the equivalent of 7am) in Minecraft.
	 */
	Day = 1000,
	/**
	 * @remarks
	 * 将时间设定为正午，在 Minecraft 中是时间 6,000。
	 *
	 * Sets the time to noon, which is time of the day 6,000 in
	 * Minecraft.
	 */
	Noon = 6000,
	/**
	 * @remarks
	 * 将时间设定为日落，即在 Minecraft 中相当于晚上 6 点的时间 12,000。
	 *
	 * Sets the time to sunset, which is time of the day 12,000 (or
	 * the equivalent of 6pm) in Minecraft.
	 */
	Sunset = 12000,
	/**
	 * @remarks
	 * 将时间设定为夜晚，即在 Minecraft 中相当于晚上 7 点的时间 13,000。
	 *
	 * Sets the time to night, which is time of the day 13,000 (or
	 * the equivalent of 7:00pm) in Minecraft.
	 */
	Night = 13000,
	/**
	 * @remarks
	 * 将时间设定为午夜，即在 Minecraft 中相当于半夜 12 点的时间 18,000。
	 *
	 * Sets the time to midnight, which is time of the day 18,000
	 * (or the equivalent of 12:00am) in Minecraft.
	 */
	Midnight = 18000,
	/**
	 * @remarks
	 * 将时间设定为日出，即在 Minecraft 中相当于早上 5 点的时间 23,000。
	 *
	 * Sets the time to sunrise, which is time of the day 23,000
	 * (or the equivalent of 5am) in Minecraft.
	 */
	Sunrise = 23000,
}

/**
 * @beta
 * 表示看门狗决定终止行为包脚本执行的原因的枚举。
 *
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
	/**
	 * @remarks
	 * 行为包的脚本运行因脚本无响应（死锁或无限循环）而终止。
	 *
	 * Script runtime for a behavior pack is terminated due to
	 * non-responsiveness from script (a hang or infinite loop).
	 */
	Hang = "Hang",
	/**
	 * @remarks
	 * 行为包的脚本运行因堆栈溢出（长时间且可能无限的函数调用）而终止。
	 *
	 * Script runtime for a behavior pack is terminated due to a
	 * stack overflow (a long, and potentially infinite) chain of
	 * function calls.
	 */
	StackOverflow = "StackOverflow",
}

/**
 * 用于指定世界中的天气状况类型。
 *
 * Used to specify the type of weather condition within the
 * world.
 */
export enum WeatherType {
	/**
	 * @remarks
	 * 指定晴朗的天气状况。
	 *
	 * Specifies a clear weather condition.
	 */
	Clear = "Clear",
	/**
	 * @remarks
	 * 指定下雨的天气状况。
	 *
	 * Specifies a rain weather condition.
	 */
	Rain = "Rain",
	/**
	 * @remarks
	 * 指定下雨并打雷的天气状况。
	 *
	 * Specifies a rain and thunder weather condition.
	 */
	Thunder = "Thunder",
}

/**
 * @beta
 */
export type BlockComponentTypeMap = {
	fluidContainer: BlockFluidContainerComponent;
	inventory: BlockInventoryComponent;
	"minecraft:fluidContainer": BlockFluidContainerComponent;
	"minecraft:inventory": BlockInventoryComponent;
	"minecraft:piston": BlockPistonComponent;
	"minecraft:record_player": BlockRecordPlayerComponent;
	"minecraft:sign": BlockSignComponent;
	piston: BlockPistonComponent;
	record_player: BlockRecordPlayerComponent;
	sign: BlockSignComponent;
};

/**
 * @beta
 * 用于 {@link BlockPermutation} 的匹配和解析函数的类型别名，
 * 以将方块状态参数类型缩小到由 {@link
 * @minecraft/vanilla-data.BlockStateMapping} 映射的类型。
 *
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}` ? (T extends keyof minecraftvanilladata.BlockStateMapping ? minecraftvanilladata.BlockStateMapping[T] : never) : Record<string, boolean | number | string>;

/**
 * @beta
 */
export type EntityComponentTypeMap = {
	addrider: EntityAddRiderComponent;
	ageable: EntityAgeableComponent;
	breathable: EntityBreathableComponent;
	can_climb: EntityCanClimbComponent;
	can_fly: EntityCanFlyComponent;
	can_power_jump: EntityCanPowerJumpComponent;
	color: EntityColorComponent;
	color2: EntityColor2Component;
	cursor_inventory: PlayerCursorInventoryComponent;
	equippable: EntityEquippableComponent;
	fire_immune: EntityFireImmuneComponent;
	floats_in_liquid: EntityFloatsInLiquidComponent;
	flying_speed: EntityFlyingSpeedComponent;
	friction_modifier: EntityFrictionModifierComponent;
	ground_offset: EntityGroundOffsetComponent;
	healable: EntityHealableComponent;
	health: EntityHealthComponent;
	inventory: EntityInventoryComponent;
	is_baby: EntityIsBabyComponent;
	is_charged: EntityIsChargedComponent;
	is_chested: EntityIsChestedComponent;
	is_dyeable: EntityIsDyeableComponent;
	is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
	is_ignited: EntityIsIgnitedComponent;
	is_illager_captain: EntityIsIllagerCaptainComponent;
	is_saddled: EntityIsSaddledComponent;
	is_shaking: EntityIsShakingComponent;
	is_sheared: EntityIsShearedComponent;
	is_stackable: EntityIsStackableComponent;
	is_stunned: EntityIsStunnedComponent;
	is_tamed: EntityIsTamedComponent;
	item: EntityItemComponent;
	lava_movement: EntityLavaMovementComponent;
	leashable: EntityLeashableComponent;
	mark_variant: EntityMarkVariantComponent;
	"minecraft:addrider": EntityAddRiderComponent;
	"minecraft:ageable": EntityAgeableComponent;
	"minecraft:breathable": EntityBreathableComponent;
	"minecraft:can_climb": EntityCanClimbComponent;
	"minecraft:can_fly": EntityCanFlyComponent;
	"minecraft:can_power_jump": EntityCanPowerJumpComponent;
	"minecraft:color": EntityColorComponent;
	"minecraft:color2": EntityColor2Component;
	"minecraft:cursor_inventory": PlayerCursorInventoryComponent;
	"minecraft:equippable": EntityEquippableComponent;
	"minecraft:fire_immune": EntityFireImmuneComponent;
	"minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
	"minecraft:flying_speed": EntityFlyingSpeedComponent;
	"minecraft:friction_modifier": EntityFrictionModifierComponent;
	"minecraft:ground_offset": EntityGroundOffsetComponent;
	"minecraft:healable": EntityHealableComponent;
	"minecraft:health": EntityHealthComponent;
	"minecraft:inventory": EntityInventoryComponent;
	"minecraft:is_baby": EntityIsBabyComponent;
	"minecraft:is_charged": EntityIsChargedComponent;
	"minecraft:is_chested": EntityIsChestedComponent;
	"minecraft:is_dyeable": EntityIsDyeableComponent;
	"minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
	"minecraft:is_ignited": EntityIsIgnitedComponent;
	"minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
	"minecraft:is_saddled": EntityIsSaddledComponent;
	"minecraft:is_shaking": EntityIsShakingComponent;
	"minecraft:is_sheared": EntityIsShearedComponent;
	"minecraft:is_stackable": EntityIsStackableComponent;
	"minecraft:is_stunned": EntityIsStunnedComponent;
	"minecraft:is_tamed": EntityIsTamedComponent;
	"minecraft:item": EntityItemComponent;
	"minecraft:lava_movement": EntityLavaMovementComponent;
	"minecraft:leashable": EntityLeashableComponent;
	"minecraft:mark_variant": EntityMarkVariantComponent;
	"minecraft:movement": EntityMovementComponent;
	"minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
	"minecraft:movement.basic": EntityMovementBasicComponent;
	"minecraft:movement.fly": EntityMovementFlyComponent;
	"minecraft:movement.generic": EntityMovementGenericComponent;
	"minecraft:movement.glide": EntityMovementGlideComponent;
	"minecraft:movement.hover": EntityMovementHoverComponent;
	"minecraft:movement.jump": EntityMovementJumpComponent;
	"minecraft:movement.skip": EntityMovementSkipComponent;
	"minecraft:movement.sway": EntityMovementSwayComponent;
	"minecraft:navigation.climb": EntityNavigationClimbComponent;
	"minecraft:navigation.float": EntityNavigationFloatComponent;
	"minecraft:navigation.fly": EntityNavigationFlyComponent;
	"minecraft:navigation.generic": EntityNavigationGenericComponent;
	"minecraft:navigation.hover": EntityNavigationHoverComponent;
	"minecraft:navigation.walk": EntityNavigationWalkComponent;
	"minecraft:npc": EntityNpcComponent;
	"minecraft:onfire": EntityOnFireComponent;
	"minecraft:projectile": EntityProjectileComponent;
	"minecraft:push_through": EntityPushThroughComponent;
	"minecraft:rideable": EntityRideableComponent;
	"minecraft:riding": EntityRidingComponent;
	"minecraft:scale": EntityScaleComponent;
	"minecraft:skin_id": EntitySkinIdComponent;
	"minecraft:strength": EntityStrengthComponent;
	"minecraft:tameable": EntityTameableComponent;
	"minecraft:tamemount": EntityTameMountComponent;
	"minecraft:type_family": EntityTypeFamilyComponent;
	"minecraft:underwater_movement": EntityUnderwaterMovementComponent;
	"minecraft:variant": EntityVariantComponent;
	"minecraft:wants_jockey": EntityWantsJockeyComponent;
	movement: EntityMovementComponent;
	"movement.amphibious": EntityMovementAmphibiousComponent;
	"movement.basic": EntityMovementBasicComponent;
	"movement.fly": EntityMovementFlyComponent;
	"movement.generic": EntityMovementGenericComponent;
	"movement.glide": EntityMovementGlideComponent;
	"movement.hover": EntityMovementHoverComponent;
	"movement.jump": EntityMovementJumpComponent;
	"movement.skip": EntityMovementSkipComponent;
	"movement.sway": EntityMovementSwayComponent;
	"navigation.climb": EntityNavigationClimbComponent;
	"navigation.float": EntityNavigationFloatComponent;
	"navigation.fly": EntityNavigationFlyComponent;
	"navigation.generic": EntityNavigationGenericComponent;
	"navigation.hover": EntityNavigationHoverComponent;
	"navigation.walk": EntityNavigationWalkComponent;
	npc: EntityNpcComponent;
	onfire: EntityOnFireComponent;
	projectile: EntityProjectileComponent;
	push_through: EntityPushThroughComponent;
	rideable: EntityRideableComponent;
	riding: EntityRidingComponent;
	scale: EntityScaleComponent;
	skin_id: EntitySkinIdComponent;
	strength: EntityStrengthComponent;
	tameable: EntityTameableComponent;
	tamemount: EntityTameMountComponent;
	type_family: EntityTypeFamilyComponent;
	underwater_movement: EntityUnderwaterMovementComponent;
	variant: EntityVariantComponent;
	wants_jockey: EntityWantsJockeyComponent;
};

/**
 * @beta
 */
export type ItemComponentTypeMap = {
	compostable: ItemCompostableComponent;
	cooldown: ItemCooldownComponent;
	durability: ItemDurabilityComponent;
	dyeable: ItemDyeableComponent;
	enchantable: ItemEnchantableComponent;
	food: ItemFoodComponent;
	"minecraft:compostable": ItemCompostableComponent;
	"minecraft:cooldown": ItemCooldownComponent;
	"minecraft:durability": ItemDurabilityComponent;
	"minecraft:dyeable": ItemDyeableComponent;
	"minecraft:enchantable": ItemEnchantableComponent;
	"minecraft:food": ItemFoodComponent;
	"minecraft:potion": ItemPotionComponent;
	potion: ItemPotionComponent;
};

/**
 * @beta
 * 处理在 world.aimAssist 注册表中存在的瞄准辅助类别。
 *
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class AimAssistCategory {
	private constructor();
	/**
	 * @remarks
	 * 默认用于未在 getBlockPriorities 中找到的方块类型的目标优先级。
	 *
	 * Default targeting priority used for block types not found in
	 * getBlockPriorities.
	 *
	 */
	readonly defaultBlockPriority: number;
	/**
	 * @remarks
	 * 默认用于未在 getEntityPriorities 中找到的实体类型的目标优先级。
	 *
	 * Default targeting priority used for entity types not found
	 * in getEntityPriorities.
	 *
	 */
	readonly defaultEntityPriority: number;
	/**
	 * @remarks
	 * 与类别相关的唯一 ID。
	 *
	 * The unique Id associated with the category.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 获取用于方块目标的优先级设置。
	 *
	 * Gets the priority settings used for block targeting.
	 *
	 * @returns
	 * 映射方块 ID 到其优先级设置的记录。较大的数字具有更高的优先级。
	 *
	 * The record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 */
	getBlockPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * 获取用于实体目标的优先级设置。
	 *
	 * Gets the priority settings used for entity targeting.
	 *
	 * @returns
	 * 映射实体 ID 到其优先级设置的记录。较大的数字具有更高的优先级。
	 *
	 * The record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 */
	getEntityPriorities(): Record<string, number>;
}

/**
 * @beta
 * 用于 AimAssistRegistry.addCategory 创建 AimAssistCategory 的设置。
 *
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class AimAssistCategorySettings {
	/**
	 * @remarks
	 * 可选。默认的方块类型瞄准优先级，
	 * 不包括在 setBlockPriorities 中设置的类型。
	 *
	 * Optional. Default targeting priority used for block types
	 * not provided to setBlockPriorities.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be edited in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	defaultBlockPriority: number;
	/**
	 * @remarks
	 * 可选。默认的实体类型瞄准优先级，
	 * 不包括在 setEntityPriorities 中设置的类型。
	 *
	 * Optional. Default targeting priority used for entity types
	 * not provided to setEntityPriorities.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be edited in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	defaultEntityPriority: number;
	/**
	 * @remarks
	 * 用于注册此类别的唯一 ID。必须包含命名空间。
	 *
	 * The unique Id used to register the category with. Must have
	 * a namespace.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 构造函数需要一个唯一 ID 来与创建的 AimAssistCategory 关联。必须包含命名空间。
	 *
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistCategory. Must have a namespace.
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * 获取用于方块瞄准的优先级设置。
	 *
	 * Gets the priority settings used for block targeting.
	 *
	 * @returns
	 * 映射方块 ID 到其优先级设置的记录。
	 * 数字越大，优先级越高。
	 *
	 * The record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 */
	getBlockPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * 获取用于实体瞄准的优先级设置。
	 *
	 * Gets the priority settings used for entity targeting.
	 *
	 * @returns
	 * 映射实体 ID 到其优先级设置的记录。
	 * 数字越大，优先级越高。
	 *
	 * The record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 */
	getEntityPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * 设置用于方块瞄准的优先级设置。
	 *
	 * Sets the priority settings used for block targeting.
	 *
	 * @param blockPriorities
	 * 映射方块 ID 到其优先级设置的记录。
	 * 数字越大，优先级越高。
	 *
	 * A record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 */
	setBlockPriorities(blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>): void;
	/**
	 * @remarks
	 * 设置用于实体瞄准的优先级设置。
	 *
	 * Sets the priority settings used for entity targeting.
	 *
	 * @param entityPriorities
	 * 映射实体 ID 到其优先级设置的记录。
	 * 数字越大，优先级越高。
	 *
	 * A record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 */
	setEntityPriorities(entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>): void;
}

/**
 * @beta
 * 用于处理存在于 world.aimAssist 注册表中的瞄准辅助预设。
 *
 * Handle to an aim-assist preset that exists in the
 * world.aimAssist registry.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 *
 */
export class AimAssistPreset {
	private constructor();
	/**
	 * @remarks
	 * 可选。用于未在 setItemSettings 中设置的项目的默认瞄准辅助类别 ID。
	 *
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * @throws
	 * 若使用此属性可能会报错。
	 *
	 * This property can throw when used.
	 *
	 */
	readonly defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的瞄准辅助类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * @throws
	 * 若使用此属性可能会报错。
	 *
	 * This property can throw when used.
	 *
	 */
	readonly handSettings?: string;
	/**
	 * @remarks
	 * 与预设关联的唯一 ID。
	 *
	 * The unique Id associated with the preset.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 获取排除在瞄准辅助目标之外的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @returns
	 * 方块/实体 ID 数组。
	 *
	 * The array of block/entity Ids.
	 * @throws
	 * 此函数可能会报错。
	 *
	 * This function can throw errors.
	 *
	 */
	getExcludedTargets(): string[];
	/**
	 * @remarks
	 * 获取每个项目的瞄准辅助类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 映射项目 ID 到瞄准辅助类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 * @throws
	 * 此函数可能会报错。
	 *
	 * This function can throw errors.
	 *
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在手持时将瞄准液体方块的项目 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @returns
	 * 项目 ID 数组。
	 *
	 * The array of item Ids.
	 * @throws
	 * 此函数可能会报错。
	 *
	 * This function can throw errors.
	 *
	 */
	getLiquidTargetingItems(): string[];
}

/**
 * @beta
 * 用于在使用 AimAssistRegistry.addPreset 创建 AimAssistPreset 时的设置。
 *
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 *
 */
export class AimAssistPresetSettings {
	/**
	 * @remarks
	 * 可选。用于未在 setItemSettings 中设置的项目的默认瞄准辅助类别 ID。
	 *
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be edited in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的瞄准辅助类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be edited in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	handSettings?: string;
	/**
	 * @remarks
	 * 用于注册预设的唯一 ID。必须包含命名空间。
	 *
	 * The unique Id used to register the preset with. Must have a
	 * namespace.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 构造函数需要一个唯一 ID 来与创建的 AimAssistPreset 关联。必须包含命名空间。
	 *
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistPreset. Must have a namespace.
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * 获取排除在瞄准辅助目标之外的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @returns
	 * 方块/实体 ID 数组。
	 *
	 * The array of block/entity Ids.
	 */
	getExcludedTargets(): string[] | undefined;
	/**
	 * @remarks
	 * 获取每个项目的瞄准辅助类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 映射项目 ID 到瞄准辅助类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在手持时将瞄准液体方块的项目 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @returns
	 * 项目 ID 数组。
	 *
	 * The array of item Ids.
	 */
	getLiquidTargetingItems(): string[] | undefined;
	/**
	 * @remarks
	 * 设置排除在瞄准辅助目标之外的方块/实体 ID 列表。
	 *
	 * Sets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @param targets
	 * 方块/实体 ID 数组。
	 *
	 * An array of block/entity Ids.
	 */
	setExcludedTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
	/**
	 * @remarks
	 * 设置每个项目的瞄准辅助类别 ID。
	 *
	 * Sets the per-item aim-assist category Ids.
	 *
	 * @param itemSettings
	 * 映射项目 ID 到瞄准辅助类别 ID 的记录。
	 * 类别 ID 必须包含命名空间。
	 *
	 * A record mapping item Ids to aim-assist category Ids.
	 * Category Ids must have a namespace.
	 */
	setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
	/**
	 * @remarks
	 * 设置在手持时将瞄准液体方块的项目 ID 列表。
	 *
	 * Sets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @param items
	 * 项目 ID 数组。
	 *
	 * An array of item Ids.
	 */
	setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}

/**
 * @beta
 * 与世界的瞄准辅助设置相关的 API 容器。
 *
 * A container for APIs related to the world's aim-assist
 * settings.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 *
 */
export class AimAssistRegistry {
	private constructor();
	/**
	 * @remarks
	 * 默认的瞄准辅助预设 ID，当没有其他指定时使用。
	 *
	 * The default aim-assist preset Id that is used when not
	 * otherwise specified.
	 *
	 */
	static readonly DefaultPresetId = "minecraft:aim_assist_default";
	/**
	 * @remarks
	 * 向注册表中添加一个瞄准辅助类别。
	 *
	 * Adds an aim-assist category to the registry.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param category
	 * 用于创建新类别的类别设置。
	 *
	 * The category settings used to create the new category.
	 * @returns
	 * 创建的类别句柄。
	 *
	 * The created category handle.
	 * @throws
	 * 此函数可能会报错。
	 *
	 * This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 *
	 */
	addCategory(category: AimAssistCategorySettings): AimAssistCategory;
	/**
	 * @remarks
	 * 向注册表中添加一个瞄准辅助预设。
	 *
	 * Adds an aim-assist preset to the registry.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param preset
	 * 用于创建新预设的预设设置。
	 *
	 * The preset settings used to create the new preset.
	 * @returns
	 * 创建的预设句柄。
	 *
	 * The created preset handle.
	 * @throws
	 * 此函数可能会报错。
	 *
	 * This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 *
	 */
	addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
	/**
	 * @remarks
	 * 获取注册表中所有可用的类别。
	 *
	 * Gets all available categories in the registry.
	 *
	 * @returns
	 * 所有可用类别对象的数组。
	 *
	 * An array of all available category objects.
	 */
	getCategories(): AimAssistCategory[];
	/**
	 * @remarks
	 * 获取与提供的 ID 关联的类别。
	 *
	 * Gets the category associated with the provided Id.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @returns
	 * 若类别存在，返回类别对象，否则返回 undefined。
	 *
	 * The category object if it exists, otherwise returns
	 * undefined.
	 */
	getCategory(categoryId: string): AimAssistCategory | undefined;
	/**
	 * @remarks
	 * 获取与提供的 ID 关联的预设。
	 *
	 * Gets the preset associated with the provided Id.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot be called in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 * @param presetId
	 * 要检索的预设 ID。必须包含命名空间。
	 *
	 * The Id of the preset to retrieve. Must have a namespace.
	 * @returns
	 * 若预设存在，返回预设对象，否则返回 undefined。
	 *
	 * The preset object if it exists, otherwise returns undefined.
	 */
	getPreset(presetId: string): AimAssistPreset | undefined;
	/**
	 * @remarks
	 * 获取注册表中所有可用的预设。
	 *
	 * Gets all available presets in the registry.
	 *
	 * @returns
	 * 所有可用预设对象的数组。
	 *
	 * An array of all available preset objects.
	 */
	getPresets(): AimAssistPreset[];
}

/**
 * @beta
 * 表示生物群系种类。
 *
 * Describes a type of biome.
 */
export class BiomeType {
	private constructor();
	/**
	 * @remarks
	 * 生物群系种类的标识符。
	 *
	 * Identifier of the biome type.
	 *
	 */
	readonly id: string;
}

/**
 * @beta
 * 支持一个可用的生物群系种类目录，
 * 该目录注册在 Minecraft 中。
 *
 * Supports a catalog of available biome types registered
 * within Minecraft.
 */
export class BiomeTypes {
	private constructor();

	/**
	 * @remarks
	 * 返回特定的生物群系类型。
	 *
	 * Returns a specific biome type.
	 *
	 * @param typeName
	 * 生物群系的标识符。一般应使用命名空间标识符
	 * (如 `minecraft:frozen_peaks`)。
	 *
	 * Identifier of the biome. Generally, namespaced identifiers
	 * (e.g., minecraft:frozen_peaks) should be used.
	 *
	 * @returns
	 * 如果该生物群系存在，则返回一个 BiomeType 对象。如果不存在，则返回 undefined。
	 *
	 * If the biome exists, a BiomeType object is returned. If not,
	 * undefined is returned.
	 */
	static get(typeName: string): BiomeType | undefined;

	/**
	 * @remarks
	 * 返回 Minecraft 中所有已注册的生物群系类型。
	 *
	 * Returns all registered biome types within Minecraft.
	 *
	 */
	static getAll(): BiomeType[];
}

/**
 * 表示世界维度中的特定位置的方块。
 * 方块对象对应了唯一的 X、Y、Z 与维度，可用于读取或修改此位置的方块状态。
 * 此类型在 1.17.10.21 有重大更新。
 *
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
	private constructor();

	/**
	 * @remarks
	 * 返回方块所在维度对象。
	 *
	 * Returns the dimension that the block is within.
	 *
	 * @returns
	 * 方块所在维度对象。
	 *
	 */
	readonly dimension: Dimension;

	/**
	 * @remarks
	 * 返回 true 如果这个方块是空气方块（例如，空的空间）。
	 *
	 * Returns true if this block is an air block (i.e., empty
	 * space).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isAir: boolean;

	/**
	 * @remarks
	 * 如果这个方块是液体方块，例如水方块和熔岩方块等，则返回 true。
	 * 空气方块和石头方块等则不属于液体方块。
	 * 含水方块不算作液体方块。
	 *
	 * Returns true if this block is a liquid block - (e.g., a
	 * water block and a lava block are liquid, while an air block
	 * and a stone block are not. Water logged blocks are not
	 * liquid blocks).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isLiquid: boolean;

	/**
	 * @beta
	 * @remarks
	 * 如果该块是实心且不可通行的，则返回 true
	 * -（例如，鹅卵石块和钻石块是实心的，而梯子块和栅栏块则不是）。
	 *
	 * Returns true if this block is solid and impassible - (e.g.,
	 * a cobblestone block and a diamond block are solid, while a
	 * ladder block and a fence block are not).
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isSolid: boolean;

	/**
	 * @rc
	 * @remarks
	 * 返回或设置该方块是否含水。
	 *
	 * Returns or sets whether this block has water on it.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly isWaterlogged: boolean;

	/**
	 * @remarks
	 * 该方块的坐标。
	 *
	 * Coordinates of the specified block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 */
	readonly location: Vector3;

	/**
	 * @remarks
	 * 描述该方块的附加配置数据。
	 * （常称为方块状态）
	 *
	 * Additional block configuration data that describes the
	 * block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly permutation: BlockPermutation;

	/**
	 * @remarks
	 * 获取方块的类型。
	 *
	 * Gets the type of block.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly "type": BlockType;

	/**
	 * @remarks
	 * 该方块的类型标识符。
	 *
	 * Identifier of the type of block for this block. Warning:
	 * Vanilla block names can be changed in future releases, try
	 * using 'Block.matches' instead for block comparison.
	 *
	 * @throws 当使用时，此属性可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	readonly typeId: string;

	/**
	 * @remarks
	 * 方块的 X 坐标。
	 *
	 * X coordinate of the block.
	 *
	 */
	readonly x: number;

	/**
	 * @remarks
	 * 方块的 Y 坐标。
	 *
	 * Y coordinate of the block.
	 *
	 */
	readonly y: number;

	/**
	 * @remarks
	 * 方块的 Z 坐标。
	 *
	 * Z coordinate of the block.
	 *
	 */
	readonly z: number;

	/**
	 * @remarks
	 * 返回该方块上方的 {@link Block}（Y 方向正方向）。
	 *
	 * Returns the {@link Block} above this block (positive in the
	 * Y direction).
	 *
	 * @param steps
	 * 返回之前要执行的步骤数。
	 * 留空默认为一。
	 * （返回的方块在原方块上方的距离）。
	 *
	 * Number of steps above to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	above(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 返回该方块下方的 {@link Block}（Y 方向负方向）。
	 *
	 * Returns the {@link Block} below this block (negative in the
	 * Y direction).
	 *
	 * @param steps
	 * 向下的步数。
	 * 留空默认为一。
	 *
	 * Number of steps below to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	below(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 返回该方块在 X 轴和 Z 轴上的中心的 {@link Vector3}。
	 *
	 * Returns the {@link Vector3} of the center of this block on
	 * the X and Z axis.
	 *
	 */
	bottomCenter(): Vector3;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块被液体接触时是否会被移除。
	 *
	 * Returns whether this block is removed when touched by
	 * liquid.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 当此方块被液体接触时，是否会被移除。
	 *
	 * Whether this block is removed when touched by liquid.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块是否可以放置液体，例如被水浸泡。
	 *
	 * Returns whether this block can have a liquid placed over it,
	 * i.e. be waterlogged.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 可否放置液体于此方块上。
	 *
	 * Whether this block can have a liquid placed over it.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canContainLiquid(liquidType: LiquidType): boolean;

	/**
	 * @remark
	 * 检查在该方块的指定面上放置 {@link BlockPermutation} 或 {@link BlockType} 或指定标识符的方块是否可行。
	 *
	 * Checks to see whether it is valid to place the specified
	 * block type or block permutation, on a specified face on this
	 * block
	 *
	 * @param blockToPlace
	 * 被检查放置可行性的 {@link BlockPermutation} 或 {@link BlockType} 或方块标识符。
	 *
	 * Block type or block permutation to check placement for.
	 *
	 * @param faceToPlaceOn
	 * 可选参数，指定要检查放置方块的方向。
	 *
	 * Optional specific face of this block to check placement
	 * against.
	 *
	 * @returns
	 * 如果在此面可以放置这样的方块则返回 True 。
	 *
	 * Returns `true` if the block type or permutation can be
	 * placed on this block, else `false`.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;

	/**
	 * @remarks
	 * 返回该方块在 X、Y 和 Z 轴上中心的 {@link Vector3}。
	 *
	 * Returns the {@link Vector3} of the center of this block on
	 * the X, Y, and Z axis.
	 *
	 */
	center(): Vector3;

	/**
	 * @remarks
	 * 返回位于该方块东侧（X 轴正方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the east of this block
	 * (positive in the X direction).
	 *
	 * @param steps
	 * 向东的步数。
	 *
	 * Number of steps to the east to step before returning.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	east(steps?: number): Block | undefined;

	/**
	 * @remarks
	 * 获取一个方块的组件（代表附加功能），例如，一个箱子方块的库存组件。
	 *
	 * Gets a component (that represents additional capabilities)
	 * for a block - for example, an inventory component of a chest
	 * block.
	 *
	 * @param componentId
	 * 组件的标识符（例如 'minecraft:inventory'）。
	 * 如果未指定命名空间前缀，将默认使用 'minecraft:'。
	 * 可用的组件标识符可以在 {@link BlockComponentTypes} 枚举中找到。
	 *
	 * The identifier of the component (e.g.,
	 * 'minecraft:inventory'). If no namespace prefix is specified,
	 * 'minecraft:' is assumed. Available component IDs can be
	 * found as part of the {@link BlockComponentTypes} enum.
	 *
	 * @returns
	 * 如果该组件存在于该方块，则返回该组件。
	 * 否则返回 undefined。
	 *
	 * Returns the component if it exists on the block, otherwise
	 * undefined.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getComponent<T extends keyof BlockComponentTypeMap>(componentId: T): BlockComponentTypeMap[T] | undefined;

	/**
	 * @remarks
	 * 创建一个基于该方块的原型物品对象 - {@link ItemStack}，可以与 {@link Container}/{@link ContainerSlot} 接口一起使用。
	 *
	 * Creates a prototype item stack based on this block that can
	 * be used with Container/ContainerSlot APIs.
	 *
	 * @param amount
	 * 要设置在物品对象 - {@link ItemStack} 中的这个方块的数量。
	 *
	 * Number of instances of this block to place in the item
	 * stack.
	 *
	 * @param withData
	 * 是否包括物品对象的附加数据。
	 *
	 * Whether additional data facets of the item stack are
	 * included.
	 *
	 * @returns
	 * 一个带有指定数量和数据的物品对象。
	 * 如果方块类型不兼容，则返回 undefined。
	 *
	 * An itemStack with the specified amount of items and data.
	 * Returns undefined if block type is incompatible.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;

	/**
	 * @beta
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getMapColor(): RGBA;

	/**
	 * @remarks
	 * 返回该方块的净红石能量强度。
	 * 考虑了所有输入和输出后的总红石能量强度。
	 * 表示了一个方块与周围环境中所有红石元件的相互作用后的红石能量状态。
	 *
	 * Returns the net redstone power of this block.
	 *
	 * @returns
	 * 如果这个方块不适用红石能量，返回 undefined。
	 *
	 * Returns undefined if redstone power is not applicable to
	 * this block.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getRedstonePower(): number | undefined;

	/**
	 * @remarks
	 * 返回方块被设置的标签的列表。
	 *
	 * Returns a set of tags for a block.
	 *
	 * @returns
	 * 方块拥有的标签列表。
	 *
	 * The list of tags that the block has.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	getTags(): string[];

	/**
	 * @remarks
	 * 检查该方块的 {@link BlockPermutation} 是否具有特定的标签。
	 *
	 * Checks to see if the permutation of this block has a
	 * specific tag.
	 *
	 * @param tag
	 * 要检查的标签。
	 *
	 * Tag to check for.
	 *
	 * @returns
	 * 如果该方块的 {@link BlockPermutation} 具有该标签，则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the permutation of this block has the tag,
	 * else `false`.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 *
	 * @seeExample checkBlockTags.ts
	 */
	hasTag(tag: string): boolean;

	/**
	 * @beta
	 * @remarks
	 * 返回该方块是否阻止液体流动。
	 *
	 * Returns whether this block stops liquid from flowing.
	 *
	 * @param liquidType
	 * 此函数应被调用的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 *
	 * @returns
	 * 是否阻止液体流动。
	 *
	 * Whether this block stops liquid from flowing.
	 *
	 * @throws 当使用时，此函数可能会触发错误。
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	isLiquidBlocking(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 如果对该方块的引用仍然有效，则返回 `true`（例如，如果方块未加载，对该方块的引用将不再有效）。
	 *
	 * Returns true if this reference to a block is still valid
	 * (for example, if the block is unloaded, references to that
	 * block will no longer be valid.)
	 *
	 * @returns
	 * 如果这个方块对象仍然存在且有效，则返回 `true`。
	 *
	 * True if this block object is still working and valid.
	 */
	isValid(): boolean;
	/**
	 * @beta
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
	/**
	 * @beta
	 * @remarks
	 * Returns whether this block is removed and spawns its item
	 * when touched by liquid.
	 *
	 * @param liquidType
	 * The type of liquid this function should be called for.
	 * @returns
	 * Whether this block is removed and spawns its item when
	 * touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * Tests whether this block matches a specific criteria.
	 *
	 * @param blockName
	 * Block type identifier to match this API against.
	 * @param states
	 * Optional set of block states to test this block against.
	 * @returns
	 * Returns true if the block matches the specified criteria.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
	/**
	 * @remarks
	 * 返回位于该方块北侧（Z轴负方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the north of this block
	 * (negative in the Z direction).
	 *
	 * @param steps
	 * 在返回之前，向北移动的步数。
	 *
	 * Number of steps to the north to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	north(steps?: number): Block | undefined;
	/**
	 * @remarks
	 * Returns a block at an offset relative vector to this block.
	 *
	 * @param offset
	 * The offset vector. For example, an offset of 0, 1, 0 will
	 * return the block above the current block.
	 * @returns
	 * Block at the specified offset, or undefined if that block
	 * could not be retrieved (for example, the block and its
	 * relative chunk is not loaded yet.)
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	offset(offset: Vector3): Block | undefined;
	/**
	 * @remarks
	 * 在维度中将方块设置为{@link BlockPermutation}的状态。
	 *
	 * Sets the block in the dimension to the state of the
	 * permutation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param permutation
	 * 包含方块一组属性状态的{@link BlockPermutation}。
	 *
	 * Permutation that contains a set of property states for the
	 * Block.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setPermutation(permutation: BlockPermutation): void;
	/**
	 * @remarks
	 * 设置方块的类型。
	 *
	 * Sets the type of block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockType
	 * 要应用的方块类型的标识符或方块类型，
	 * 例如，`minecraft:powered_repeater`。
	 *
	 * Identifier of the type of block to apply - for example,
	 * minecraft:powered_repeater.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setType(blockType: BlockType | string): void;
	/**
	 * @rc
	 * @remarks
	 * Sets whether this block has a water logged state - for
	 * example, whether stairs are submerged within water.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param isWaterlogged
	 * true if the block should have water within it.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	setWaterlogged(isWaterlogged: boolean): void;
	/**
	 * @remarks
	 * 返回位于该方块南侧（Z轴正方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the south of this block
	 * (positive in the Z direction).
	 *
	 * @param steps
	 * 在返回之前，向南移动的步数。
	 *
	 * Number of steps to the south to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	south(steps?: number): Block | undefined;
	/**
	 * @beta
	 * @remarks
	 * 首先检查放置是否有效，
	 * 如何尝试在维度中将方块设置为{@link BlockPermutation}的状态，
	 *
	 *
	 * Tries to set the block in the dimension to the state of the
	 * permutation by first checking if the placement is valid.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param permutation
	 * 包含一组方块属性状态的{@link BlockPermutation}。
	 *
	 * Permutation that contains a set of property states for the
	 * Block.
	 * @returns
	 * 如果成功设置了方块的{@link BlockPermutation}，
	 * 则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the block permutation data was
	 * successfully set, else `false`.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	trySetPermutation(permutation: BlockPermutation): boolean;
	/**
	 * @remarks
	 * 返回位于该方块西侧（X轴负方向）的 {@link Block}。
	 *
	 * Returns the {@link Block} to the west of this block
	 * (negative in the X direction).
	 *
	 * @param steps
	 * 在返回之前，向西移动的步数。
	 *
	 * Number of steps to the west to step before returning.
	 * @throws This function can throw errors.
	 *
	 * {@link LocationInUnloadedChunkError}
	 *
	 * {@link LocationOutOfWorldBoundariesError}
	 */
	west(steps?: number): Block | undefined;
}

/**
 * 与方块关联的组件的基本类型。
 *
 * Base type for components associated with blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
	private constructor();
	/**
	 * @remarks
	 * 此组件所对应的方块实例。
	 *
	 * Block instance that this component pertains to.
	 *
	 */
	readonly block: Block;
}

/**
 * 包含有关实体掉落到特定方块上的信息。
 *
 * Contains information regarding an entity falling onto a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 掉落到方块上的实体。
	 *
	 * The entity that fell onto the block.
	 *
	 */
	readonly entity?: Entity;
	/**
	 * @remarks
	 * 实体掉落到此方块上的距离。
	 *
	 * The distance that the entity fell onto this block with.
	 *
	 */
	readonly fallDistance: number;
}

/**
 * 包含有关特定方块被放置的信息。
 *
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 此位置被替换的先前方块。
	 *
	 * Previous block at this location that was replaced.
	 *
	 */
	readonly previousBlock: BlockPermutation;
}

/**
 * 包含有关特定方块被破坏的信息。
 *
 * Contains information regarding a specific block being
 * destroyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 返回此方块在被摧毁前的排列信息。
	 *
	 * Returns permutation information about this block before it
	 * was destroyed.
	 *
	 */
	readonly destroyedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 摧毁该方块的玩家。
	 *
	 * The player that destroyed this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 包含与特定方块交互的信息。
 *
 * Contains information regarding a specific block being
 * interacted with.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 被交互的方块面。
	 *
	 * The block face that was interacted with.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 玩家与之交互的方块相对于底部西北角的相对位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block that the player interacted with.
	 *
	 */
	readonly faceLocation?: Vector3;
	/**
	 * @remarks
	 * 交互此方块的玩家。
	 *
	 * The player that interacted with this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 包含玩家放置方块前的事件信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则取消放置方块事件。
	 *
	 * If set to true, cancels the block place event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 被放置的方块面。
	 *
	 * The block face that was placed onto.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 如果事件未被取消，将要放置的方块排列。如果设置为其他排列，则将放置相应排列的方块。
	 *
	 * The block permutation that will be placed if the event is
	 * not cancelled. If set to a different block permutation, that
	 * permutation will be placed instead.
	 *
	 */
	permutationToPlace: BlockPermutation;
	/**
	 * @remarks
	 * 正在放置此方块的玩家。
	 *
	 * The player that is placing this block.
	 *
	 */
	readonly player?: Player;
}

/**
 * 包含特定方块的随机刻信息。
 *
 * Contains information regarding a specific block randomly
 * ticking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentRandomTickEvent extends BlockEvent {
	private constructor();
}

export class BlockComponentRegistry {
	private constructor();
	/**
	 *
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * {@link BlockCustomComponentAlreadyRegisteredError}
	 *
	 * {@link BlockCustomComponentReloadNewComponentError}
	 *
	 * {@link BlockCustomComponentReloadNewEventError}
	 *
	 * {@link BlockCustomComponentReloadVersionError}
	 *
	 * {@link CustomComponentInvalidRegistryError}
	 *
	 * {@link CustomComponentNameError}
	 *
	 * {@link minecraftcommon.EngineError}
	 */
	registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

/**
 * 包含实体离开特定方块的信息。
 *
 * Contains information regarding an entity stepping off a
 * specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 离开方块的实体。
	 *
	 * The entity that stepped off the block.
	 */
	readonly entity?: Entity;
}

/**
 * 包含实体踩踏到特定方块的信息。
 *
 * Contains information regarding an entity stepping onto a specific block.
 */
export class BlockComponentStepOnEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 踩到方块的实体。
	 *
	 * The entity that stepped on the block.
	 */
	readonly entity?: Entity;
}

/**
 * 包含关于特定方块滴答的信息。
 *
 * Contains information regarding a specific block ticking.
 */
export class BlockComponentTickEvent extends BlockEvent {
	private constructor();
}

/**
 * 包含关于影响特定方块的事件的信息。
 *
 * Contains information regarding an event that impacts a specific block.
 */
export class BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 受此事件影响的方块。
	 *
	 * Block impacted by this event.
	 */
	readonly block: Block;
	/**
	 * @remarks
	 * 包含受此事件影响的方块的维度。
	 *
	 * Dimension that contains the block that is the subject of this event.
	 */
	readonly dimension: Dimension;
}

/**
 * 包含特定方块发生爆炸的信息。
 *
 * Contains information regarding an explosion that has occurred for a specific block.
 */
export class BlockExplodeAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 爆炸的方块描述。
	 *
	 * Description of the block that has exploded.
	 */
	readonly explodedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 可选的爆炸来源。
	 *
	 * Optional source of the explosion.
	 */
	readonly source?: Entity;
}

/**
 * 管理连接到爆炸发生后影响个别方块的回调。
 *
 * Manages callbacks that are connected to when an explosion occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当爆炸影响到单个方块时会被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，当爆炸影响到单个方块时不会被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

/**
 * 表示世界中的方块液体容器组件。可用于例如炼药锅这样的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 液体容器的相对填充等级。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	fillLevel: number;
	/**
	 * @remarks
	 * 容器中液体的自定义颜色。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	fluidColor: RGBA;
	static readonly componentId = "minecraft:fluidContainer";
	/**
	 * @remarks
	 * 添加染料到液体中。染料颜色将与现有的自定义颜色组合。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	addDye(dye: ItemType): void;
	/**
	 * @remarks
	 * 获取容器中当前的液体类型。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getFluidType(): FluidType;
	/**
	 * @remarks
	 * 设置容器中当前的液体类型。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setFluidType(fluidType: FluidType): void;
	/**
	 * @remarks
	 * 在容器中设置药水物品。将容器的液体类型更改为药水。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setPotion(itemStack: ItemStack): void;
}

/**
 * 表示世界中的方块库存组件。可用于例如箱子这样的方块。
 * @seeExample placeItemsInChest.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 持有一个 {@link ItemStack} 的容器。
	 *
	 * @throws This property can throw when used.
	 */
	readonly container?: Container;
	static readonly componentId = "minecraft:inventory";
}

/**
 * `BlockLocationIterator` 返回块卷内即将被遍历的下一个块的位置。
 * `BlockLocationIterator` 用来抽象出它被获取自的块卷的形状（因此它可以表示构成矩形、立方体、球体、线条以及复杂形状的所有块的位置）。
 * 每次迭代都返回父形状中的下一个有效块的位置。
 * 除非父形状另有规定，否则 `BlockLocationIterator` 将按照增加的 X 轴顺序迭代，然后是增加的 Z 轴顺序，再然后是增加的 Y 轴顺序。
 * （实际上逐步跨越 XZ 平面，当该平面中的所有位置都用尽后，将 Y 坐标增加到下一个 XZ 切片）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
	private constructor();
	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	[Symbol.iterator](): Iterator<Vector3>;
	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	next(): IteratorResult<Vector3>;
}

/**
 * 包含 {@link BlockType} 类型和属性（有时也称为方块状态）的组合，这些组合描述一个方块（但并不属于特定的 {@link Block}）。
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export class BlockPermutation {
	private constructor();
	/**
	 * @remarks
	 * 此组合方块的 {@link BlockType}。
	 *
	 */
	readonly "type": BlockType;
	/**
	 * @beta
	 * @remarks
	 * 返回此块是否会在接触到液体时被移除。
	 *
	 * @param liquidType 液体的类型。
	 * @returns 此块是否会在接触到液体时被移除。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此块是否可以有液体覆盖，例如是否可以充水。
	 *
	 * @param liquidType 液体的类型。
	 * @returns 此块是否可以有液体覆盖。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canContainLiquid(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回与该方块相关的所有可用状态。
	 *
	 * @returns 返回组合拥有的所有方块状态的列表。
	 */
	getAllStates(): Record<string, boolean | number | string>;
	/**
	 * @remarks
	 * 基于此方块组合的原型物品堆，可以与物品容器/容器槽 API 一起使用。
	 *
	 * @param amount 要放置在原型物品堆中的此方块实例的数量。
	 */
	getItemStack(amount?: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取此组合的状态。
	 *
	 * @param stateName 要返回其值的方块状态的名称。
	 * @returns 如果组合拥有此状态则返回，如果没有则返回 `undefined`。
	 */
	getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(stateName: T): minecraftvanilladata.BlockStateSuperset[T] | undefined;
	/**
	 * @remarks
	 * 创建组合的副本。
	 *
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 检查组合是否具有特定标签。
	 *
	 * @returns 如果组合具有标签，则返回 `true`，否则返回 `false`。
	 * @seeExample checkBlockTags.ts
	 */
	hasTag(tag: string): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此块是否阻止液体流动。
	 *
	 * @param liquidType 液体的类型。
	 * @returns 此块是否阻止液体流动。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	isLiquidBlocking(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此块是否在接触液体时被移除并生成其对应的物品。
	 *
	 * @param liquidType 液体的类型。
	 * @returns 此块是否在接触液体时被移除并生成其对应的物品。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回一个布尔值，用于指定某个特定的组合是否匹配此组合。如果没有指定状态，则匹配将广泛地检查类型集合。
	 *
	 * @param blockName 一个可选的状态集合用于比较。
	 */
	matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(blockName: T, states?: BlockStateArg<T>): boolean;
	/**
	 * @remarks
	 * 返回设置了特定属性的派生 `BlockPermutation`。
	 *
	 * @param name 方块属性的标识符。
	 * @param value 方块属性的值。
	 * @throws This function can throw errors.
	 */
	withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(name: T, value: minecraftvanilladata.BlockStateSuperset[T]): BlockPermutation;
	/**
	 * @remarks
	 * 给定一个类型标识符和一个可选的属性集合，将返回一个可在其他方块 API 中使用的 `BlockPermutation` 对象（例如，block.setPermutation）。
	 *
	 * @param blockName 方块标识符。
	 * @throws This function can throw errors.
	 * @seeExample addBlockColorCube.ts
	 */
	static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(blockName: T, states?: BlockStateArg<T>): BlockPermutation;
}

/**
 * 一旦存在，此方块就具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示活塞正在扩展或收缩的过程中。
	 *
	 * Whether the piston is in the process of expanding or
	 * retracting.
	 */
	readonly isMoving: boolean;
	/**
	 * @remarks
	 * 表示活塞的当前状态。
	 *
	 * The current state of the piston.
	 */
	readonly state: BlockPistonState;
	static readonly componentId = "minecraft:piston";
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块。
	 *
	 * Retrieves a set of blocks that this piston is connected
	 * with.
	 */
	getAttachedBlocks(): Block[];
	/**
	 * @remarks
	 * 获取与此活塞连接的一组方块位置。
	 *
	 * Retrieves a set of block locations that this piston is
	 * connected with.
	 */
	getAttachedBlocksLocations(): Vector3[];
}

/**
 * 表示一个可以播放唱片的方块。
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
	private constructor();
	static readonly componentId = "minecraft:record_player";
	/**
	 * @remarks
	 * 弹出此播放器方块当前设置的唱片。
	 *
	 * Ejects the currently set record of this record-playing
	 * block.
	 */
	ejectRecord(): void;
	/**
	 * @remarks
	 * 获取此播放器方块当前设置的唱片。
	 *
	 * Gets the currently set record of this record-playing block.
	 */
	getRecord(): ItemStack | undefined;
	/**
	 * @remarks
	 * 如果此播放器方块正在播放唱片，则返回 `true`。
	 *
	 * Returns true if the record-playing block is currently
	 * playing a record.
	 */
	isPlaying(): boolean;
	/**
	 * @remarks
	 * 暂停此播放器方块正在播放的唱片。
	 *
	 * Pauses the currently playing record of this record-playing
	 * block.
	 */
	pauseRecord(): void;
	/**
	 * @remarks
	 * 播放此播放器方块当前设置的唱片。
	 *
	 * Plays the currently set record of this record-playing block.
	 */
	playRecord(): void;
	/**
	 * @remarks
	 * 设置并播放基于物品类型的唱片。
	 *
	 * Sets and plays a record based on an item type.
	 */
	setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

/**
 * 表示一个可以显示文本的方块。
 * Represents a block that can display text on it.
 * @seeExample addSign.ts
 * @seeExample addTwoSidedSign.ts
 * @seeExample updateSignText.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export class BlockSignComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示玩家是否可以编辑此告示牌。如果此告示牌已经使用蜂巢，或调用了 `setWaxed`，则不能编辑。
	 *
	 * Whether or not players can edit the sign. This happens if a
	 * sign has had a honeycomb used on it or `setWaxed` was called
	 * on the sign.
	 */
	readonly isWaxed: boolean;
	static readonly componentId = "minecraft:sign";
	/**
	 * @remarks
	 * 如果 `setText` 使用 RawMessage 或 RawText 对象调用，则返回告示牌的 RawText，否则返回 `undefined`。
	 *
	 * Returns the RawText of the sign if `setText` was called with
	 * a RawMessage or a RawText object, otherwise returns
	 * undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌哪一面。如果未提供，则返回告示牌前面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 */
	getRawText(side?: SignSide): RawText | undefined;
	/**
	 * @remarks
	 * 如果 `setText` 使用字符串调用，则返回告示牌的文本，否则返回 `undefined`。
	 *
	 * Returns the text of the sign if `setText` was called with a
	 * string, otherwise returns undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌哪一面。如果未提供，则返回告示牌前面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 */
	getText(side?: SignSide): string | undefined;
	/**
	 * @remarks
	 * 获取何种染料染色了告示牌的文字，如果告示牌没有被染色，则返回 `undefined`。
	 *
	 * Gets the dye that is on the text or undefined if the sign
	 * has not been dyed.
	 *
	 * @param side
	 * 要读取染料的告示牌哪一面。如果未提供，则返回告示牌前面的染料。
	 *
	 * The side of the sign to read the dye from. If not provided,
	 * this will return the dye on the front side of the sign.
	 */
	getTextDyeColor(side?: SignSide): DyeColor | undefined;
	/**
	 * @remarks
	 * 设置告示牌组件的文本。
	 *
	 * Sets the text of the sign component.
	 *
	 * @param message
	 * 要设置在告示牌上的消息。如果设置为字符串，则调用 `getText` 以读取该字符串。
	 * 如果设置为 RawMessage，则调用 `getRawText` 将返回 RawText。
	 * 如果设置为 RawText，则调用 `getRawText` 将返回传入的相同对象。
	 *
	 * The message to set on the sign. If set to a string, then
	 * call `getText` to read that string. If set to a RawMessage,
	 * then calling `getRawText` will return a RawText. If set to a
	 * RawText, then calling `getRawText` will return the same
	 * object that was passed in.
	 *
	 * @param side
	 * 消息将设置在哪一面的告示牌上。如果未提供，消息将设置在告示牌的前面。
	 *
	 * The side of the sign the message will be set on. If not
	 * provided, the message will be set on the front side of the
	 * sign.
	 */
	setText(message: RawMessage | RawText | string, side?: SignSide): void;
	/**
	 * @remarks
	 * 设置文字的染料颜色。
	 *
	 * Sets the dye color of the text.
	 *
	 * @param color
	 * 要应用于告示牌的染料颜色或要清除告示牌上的染料。
	 *
	 * The dye color to apply to the sign or undefined to clear the
	 * dye on the sign.
	 *
	 * @param side
	 * 将设置颜色的一面的告示牌。如果未提供，颜色将设置在告示牌的前面。
	 *
	 * The side of the sign the color will be set on. If not
	 * provided, the color will be set on the front side of the
	 * sign.
	 */
	setTextDyeColor(color?: DyeColor, side?: SignSide): void;
	/**
	 * @remarks
	 * 设置玩家无法编辑此告示牌。
	 *
	 * Makes it so players cannot edit this sign.
	 */
	setWaxed(waxed: boolean): void;
}

/**
 * 枚举所有 {@link BlockStateType}。
 * Enumerates all {@link BlockStateType}s.
 */
export class BlockStates {
	private constructor();
	/**
	 * @remarks
	 * 获取特定的方块状态实例。
	 *
	 * Retrieves a specific block state instance.
	 *
	 * @returns
	 * 如果找到，则返回{@link Block}状态实例。如果未找到方块状态实例，则返回`undefined`。
	 *
	 * Returns the {@link Block} state instance if it is found. If
	 * the block state instance is not found returns undefined.
	 */
	static get(stateName: string): BlockStateType | undefined;
	/**
	 * @remarks
	 * 获取所有可用的方块状态集。
	 *
	 * Retrieves a set of all available block states.
	 */
	static getAll(): BlockStateType[];
}

/**
 * 表示方块实例的可配置状态值。例如，可以访问阶梯的朝向作为方块状态。
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 */
export class BlockStateType {
	private constructor();
	/**
	 * @remarks
	 * 方块属性的标识符。
	 *
	 * Identifier of the block property.
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 方块属性的一组有效值。
	 *
	 * A set of valid values for the block property.
	 */
	readonly validValues: (boolean | number | string)[];
}

/**
 * 方块的类型（或模板）。包含（除了它代表的方块类型之外的）置换数据（状态）。
 * This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
	private constructor();
	/**
	 * @remarks
	 * 方块类型名称，如 `minecraft:acacia_stairs`。
	 *
	 * Block type name - for example, `minecraft:acacia_stairs`.
	 *
	 */
	readonly id: string;
}

/**
 * 包含当前世界中可用的 Minecraft 方块类型的目录。
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 */
export class BlockTypes {
	private constructor();
	/**
	 * @remarks
	 * 返回指定标识符的 BlockType 对象。
	 *
	 * Returns a BlockType object for the specified identifier.
	 *
	 * @param typeName
	 * 方块类型标识符，应遵循 `namespace:id` 格式，例如 `minecraft:dirt`。
	 *
	 * Identifier of the block type. Should follow a namespace:id
	 * pattern, such as minecraft:dirt.
	 *
	 * @returns
	 * BlockType 对象，如果在此世界中不可用该方块类型，则返回 `undefined`。
	 *
	 * BlockType object, or undefined if the block type is not
	 * available within this world.
	 */
	static get(typeName: string): BlockType | undefined;
	/**
	 * @remarks
	 * 返回所有可用方块类型的集合。
	 *
	 * Returns a collection of all available block types.
	 *
	 */
	static getAll(): BlockType[];
}

/**
 * BlockVolume 是一个简单接口，用于表示在世界中的一个给定尺寸的位置的 3D 矩形区域。
 * 请注意，这些不是“最小值”和“最大值”的类比，因为向量组件的顺序没有保证。
 * 此外，这些向量位置与 BlockLocation 不能互换。
 * 如果您想将此区域表示为 BlockLocations 的范围，可以使用 getBoundingBox 实用程序函数。
 * 这个 volume 类将保持初始化时的角点顺序。想象一下，每个角点在编辑器中被分配 - 当你移动角点时
 * （可能会反转边界的最小/最大关系） - 你最初选择的左上角通常会变成右下角。
 * 手动编辑此类 volume 时，您需要在编辑时保持角点的标识 - BlockVolume 实用程序函数可以做到这一点。
 *
 * 重要的是要注意，这测量的是块的尺寸（从/至） - 一个普通的 AABB (0,0,0) 到 (0,0,0) 的尺寸通常是 (0,0,0)
 * 但是，因为我们在测量块 - BlockVolume 的大小或跨度实际上是 (1,1,1)
 *
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 *
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
	/**
	 * @remarks
	 * 表示 3D 矩形中的一个角。
	 *
	 * A world block location that represents a corner in a 3D
	 * rectangle
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	"from": Vector3;
	/**
	 * @remarks
	 * 表示 3D 矩形中的另一个对角。
	 *
	 * A world block location that represents the opposite corner
	 * in a 3D rectangle
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	to: Vector3;
	constructor(from: Vector3, to: Vector3);
	/**
	 * @remarks
	 * 检查给定位置是否直接接触到 BlockVolume 的外表面。
	 *
	 * Check to see if the given location is directly adjacent to
	 * the outer surface of a BlockVolume.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param pos
	 * 要测试的世界块位置。
	 *
	 * The world block location to test
	 *
	 * @returns
	 * 如果位置要么在内部，或离外表面大于 0 块，则函数返回 false。
	 * 如果位置直接接触到 BlockVolume 的外表面，函数返回 true。
	 *
	 * If the location is either inside or more than 0 blocks away,
	 * the function will return false.
	 * If the location is directly contacting the outer surface of
	 * the BlockVolume, the function will return true.
	 */
	doesLocationTouchFaces(pos: Vector3): boolean;
	/**
	 * @remarks
	 * 检查两个 BlockVolume 是否直接相邻，并且两张表面接触。
	 *
	 * Check to see if a two block volumes are directly adjacent
	 * and two faces touch.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param other
	 * 要测试的 volume。
	 *
	 * The volume to test
	 *
	 * @returns
	 * 如果两个 block volumes 的外表面接触并且直接相邻，返回 true。
	 *
	 * If the outer faces of both block volumes touch and are
	 * directly adjacent at any point, return true.
	 */
	doesVolumeTouchFaces(other: BlockVolume): boolean;
	/**
	 * @remarks
	 * 返回表示两个 BlockVolume 对象之间交集的枚举值。
	 *
	 * Return an enumeration which represents the intersection
	 * between two BlockVolume objects
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	intersects(other: BlockVolume): BlockVolumeIntersection;
}

/**
 * BlockVolumes 的基类。
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
	private constructor();
	/**
	 * @remarks
	 * 获取一个表示此 volume 中所有块世界位置的 BlockLocationIterator。
	 *
	 * Fetch a {@link BlockLocationIterator} that represents all of
	 * the block world locations within the specified volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBlockLocationIterator(): BlockLocationIterator;
	/**
	 * @beta
	 * @remarks
	 * 返回一个 BoundingBox 对象，表示经过验证的 volume 最小和最大坐标
	 *
	 * Return a {@link BoundingBox} object which represents the
	 * validated min and max coordinates of the volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 此函数可能会抛出错误。
	 */
	getBoundingBox(): BoundingBox;
	/**
	 * @remarks
	 * 返回 BlockVolume 的容量（体积）(W*D*H)。
	 *
	 * Return the capacity (volume) of the BlockVolume (W*D*H)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getCapacity(): number;
	/**
	 * @remarks
	 * 获取 volume 中最大的位置（保证 >= 最小值）。
	 *
	 * Get the largest corner position of the volume (guaranteed to
	 * be >= min)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 此函数可能会抛出错误。
	 */
	getMax(): Vector3;
	/**
	 * @remarks
	 * 获取 volume 中最小的位置（保证 <= 最大值）。
	 *
	 * Get the smallest corner position of the volume (guaranteed
	 * to be <= max)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 此函数可能会抛出错误。
	 */
	getMin(): Vector3;
	/**
	 * @remarks
	 * 获取一个 Vector3 对象，其中每个组件分别表示沿该轴的块数量。
	 *
	 * Get a {@link Vector3} object where each component represents
	 * the number of blocks along that axis
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getSpan(): Vector3;
	/**
	 * @remarks
	 * 检查给定的世界块位置是否位于 BlockVolume 内部。
	 *
	 * Check to see if a given world block location is inside a
	 * BlockVolume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isInside(location: Vector3): boolean;
	/**
	 * @remarks
	 * 移动 BlockVolume 一个指定的量。
	 *
	 * Move a BlockVolume by a specified amount
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param delta
	 * 移动的块数。
	 *
	 * Amount of blocks to move by
	 */
	translate(delta: Vector3): void;
}

/**
 * @beta
 * Bounding Box Utils 是一个实用类，提供了一些用于创建和实用 BoundingBox 对象的有用函数。
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BoundingBox} objects
 */
export class BoundingBoxUtils {
	private constructor();
	/**
	 * @remarks
	 * 创建一个已验证的 BoundingBox 实例，其中最小和最大组件保证 (min <= max)。
	 *
	 * Create a validated instance of a {@link BoundingBox} where
	 * the min and max components are guaranteed to be (min <= max).
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param min
	 * 一个角的世界位置。
	 *
	 * A corner world location
	 * @param max
	 * 对角的世界位置。
	 *
	 * A corner world location diametrically opposite
	 */
	static createValid(min: Vector3, max: Vector3): BoundingBox;
	/**
	 * @remarks
	 * 沿每个轴扩展一个 BoundingBox，尺寸可以为负以进行收缩。
	 * 注意：如果收缩的大小大于跨度，角点可能会反转，但最小/最大关系将保持正确。
	 *
	 * Expand a {@link BoundingBox} by a given amount along each
	 * axis.
	 * Sizes can be negative to perform contraction.
	 * Note: corners can be inverted if the contraction size is
	 * greater than the span, but the min/max relationship will
	 * remain correct
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个新的 BoundingBox 对象，表示更改。
	 *
	 * Return a new {@link BoundingBox} object representing the
	 * changes
	 */
	static dilate(box: BoundingBox, size: Vector3): BoundingBox;
	/**
	 * @remarks
	 * 检查两个 BoundingBox 对象是否相同。
	 *
	 * Check if two {@link BoundingBox} objects are identical.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static equals(box: BoundingBox, other: BoundingBox): boolean;
	/**
	 * @remarks
	 * 扩展初始的盒子对象范围以包含第 2 个盒子参数。结果 BoundingBox 对象将是一个
	 * 能够完全包含两个盒子的 BoundingBox。
	 *
	 * Expand the initial box object bounds to include the 2nd box
	 * argument.  The resultant {@link BoundingBox} object will be
	 * a BoundingBox which exactly encompasses the two boxes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 一个新的 BoundingBox 实例，表示能够完全包含两个盒子的最小 BoundingBox。
	 *
	 * A new {@link BoundingBox} instance representing the smallest
	 * possible bounding box which can encompass both
	 */
	static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
	/**
	 * @remarks
	 * 计算给定 BoundingBox 对象的中心块。
	 *
	 * Calculate the center block of a given {@link BoundingBox}
	 * object.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 请注意，BoundingBox 对象表示整个块，因此具有奇数边界的盒子的中心位置不是数学上的中心...
	 * 即 BoundingBox( 0,0,0 -> 3,3,3 ) 的中心是 (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
	 *
	 * Note that {@link BoundingBox} objects represent whole
	 * blocks, so the center of boxes which have odd numbered
	 * bounds are not mathematically centered...
	 * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
	 * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
	 */
	static getCenter(box: BoundingBox): Vector3;
	/**
	 * @remarks
	 * 计算表示两个相交的 BoundingBoxes 之间的联合区域的 BoundingBox。
	 *
	 * Calculate the BoundingBox which represents the union area of
	 * two intersecting BoundingBoxes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
	/**
	 * @remarks
	 * 获取 BoundingBox 轴组件的跨度。
	 *
	 * Get the Span of each of the BoundingBox Axis components.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static getSpan(box: BoundingBox): Vector3;
	/**
	 * @remarks
	 * 检查两个 BoundingBox 对象是否相交。
	 *
	 * Check to see if two BoundingBox objects intersect.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static intersects(box: BoundingBox, other: BoundingBox): boolean;
	/**
	 * @remarks
	 * 检查给定坐标是否在 BoundingBox 内部。
	 *
	 * Check to see if a given coordinate is inside a BoundingBox.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static isInside(box: BoundingBox, pos: Vector3): boolean;
	/**
	 * @remarks
	 * 检查 BoundingBox 是否有效（即 min <= max）。
	 *
	 * Check to see if a BoundingBox is valid (i.e. (min <= max)).
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	static isValid(box: BoundingBox): boolean;
	/**
	 * @remarks
	 * 移动一个 BoundingBox 一个指定的量。
	 *
	 * Move a BoundingBox by a given amount.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 返回一个新的 BoundingBox 对象，表示更改。
	 *
	 * Return a new BoundingBox object which represents the change.
	 */
	static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}

/**
 * 包含与按钮推送变化相关的信息。
 * @seeExample buttonPushEvent.ts
 * Contains information related to changes to a button push.
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 触发按钮按下的可选来源。
	 *
	 * Optional source that triggered the button push.
	 *
	 */
	readonly source: Entity;
}

/**
 * 管理与按钮按下事件相关的回调。
 * @seeExample buttonPushEvent.ts
 *
 * Manages callbacks that are connected to when a button is pushed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
	private constructor();
}

/**
 * 包含与指定玩家的活动摄像机相关的方法。
 *
 * Contains methods relating to the active camera for the specified player.
 */
export class Camera {
	private constructor();
	/**
	 * @remarks
	 * 清除指定玩家的活动摄像机。导致指定玩家结束任何进行中的摄像机视角，包括任何渐进的镜头运动，并返回到其正常视角。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Clears the active camera for the specified player. Causes the specified players to end any in-progress camera perspectives, including any eased camera motions, and return to their normal perspective.
	 *
	 */
	clear(): void;
	/**
	 * @remarks
	 * 开始一个摄像机淡入淡出过渡。一个淡入淡出过渡是一个全屏颜色淡入、保持，然后淡出。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Begins a camera fade transition. A fade transition is a full-screen color that fades-in, holds, and then fades-out.
	 *
	 * @param fadeCameraOptions
	 * 摄像机淡入淡出操作的附加选项。
	 *
	 * Additional options around camera fade operations.
	 *
	 */
	fade(fadeCameraOptions?: CameraFadeOptions): void;
	/**
	 * @remarks
	 * 设置指定玩家的当前活动摄像机。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets the current active camera for the specified player.
	 *
	 * @param cameraPreset
	 * 在 JSON 中定义的摄像机预设文件的标识符。
	 *
	 * Identifier of a camera preset file defined within JSON.
	 *
	 * @param setOptions
	 * 摄像机的附加选项。
	 *
	 * Additional options for the camera.
	 *
	 */
	setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraFixedBoomOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions | CameraTargetOptions): void;
}

/**
 * @beta
 * 当玩家输入聊天信息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 被广播的消息。
	 *
	 * Message that is being broadcast.
	 *
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送聊天消息的玩家。
	 *
	 * Player that sent the chat message.
	 *
	 */
	readonly sender: Player;
	/**
	 * @remarks
	 * 将接收此消息的可选玩家列表。如果定义了，此消息将直接目标指定的一位或多位玩家（即，不会广播）。
	 *
	 * Optional list of players that will receive this message. If defined, this message is directly targeted to one or more players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}

/**
 * @beta
 * 管理与发送聊天消息相关的回调。
 *
 * Manages callbacks that are connected to chat messages being sent.
 */
export class ChatSendAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，当新的聊天消息被发送时将调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * Adds a callback that will be called when new chat messages are sent.
	 *
	 */
	subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调，不再在新的聊天消息发送时调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * Removes a callback from being called when new chat messages are sent.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

/**
 * @beta
 * 当玩家输入聊天信息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若在 beforeChat 事件处理器中设置为 `true`，则该消息不会被广播出去。
	 *
	 * If set to true in a beforeChat event handler, this message
	 * is not broadcast out.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 正在广播的消息。
	 *
	 * Message that is being broadcast.
	 *
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送聊天消息的玩家。
	 *
	 * Player that sent the chat message.
	 *
	 */
	readonly sender: Player;
	/**
	 * @remarks
	 * 将接收到此消息的玩家列表（可选）。如果定义了此列表，则此消息会被直接发送给一个或多个玩家（即不会广播）。
	 *
	 * Optional list of players that will receive this message. If
	 * defined, this message is directly targeted to one or more
	 * players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}

/**
 * @beta
 * 管理连接到聊天消息发送前触发的事件的回调函数。
 *
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 *
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，会在新的聊天消息发送之前调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called before new chat messages
	 * are sent.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在新的聊天消息发送之前调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called before new chat
	 * messages are sent.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

/**
 * 包含客户端实例的设备信息。
 *
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
	private constructor();
	/**
	 * @remarks
	 * 设备的最大渲染距离（以区块为单位）。
	 *
	 * The max render distance for the device in chunks.
	 *
	 */
	readonly maxRenderDistance: number;
	/**
	 * @remarks
	 * 设备的平台类型。
	 *
	 * The platform type of the device.
	 *
	 */
	readonly platformType: PlatformType;
}

/**
 * 包含命令执行结果的返回数据。
 *
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
	private constructor();
	/**
	 * @remarks
	 * 如果命令作用于多个实体、方块或物品，则返回此命令成功应用的次数。
	 *
	 * If the command operates against a number of entities,
	 * blocks, or items, this returns the number of successful
	 * applications of this command.
	 *
	 */
	readonly successCount: number;
}

/**
 * 下游组件实现的基类。
 *
 * Base class for downstream Component implementations.
 */
export class Component {
	private constructor();
	/**
	 * @remarks
	 * 组件的标识符。
	 *
	 * Identifier of the component.
	 *
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 返回组件是否有效。若组件的拥有者有效，且符合组件要求的其他验证，则该组件被视为有效。
	 *
	 * Returns whether the component is valid. A component is
	 * considered valid if its owner is valid, in addition to any
	 * additional validation required by the
	 * component.
	 *
	 * @returns
	 * 组件是否有效。
	 *
	 * Whether the component is valid.
	 */
	isValid(): boolean;
}

/**
 * @beta
 * 复合方块体积是用来描述多个单独方块体积定义的集合体，其作为一个集合定义了一个更大的（有时是非连续性的）不规则形状的体积。
 * 此类松散地基于 CSG（计算机固体几何）的概念，使用户能够通过构建一系列体积和空隙来创建复杂的体积，从而形成一个更大的单一体积。
 * 例如 - 通常一个创作者会通过为每个面创建 6 个“墙”表面来创建一个空心立方体。
 * 使用复合方块体积，创作者可以通过创建一个单一的外部实心立方体，并在更大的立方体内定义一个进一步的“空隙”立方体来定义一个空心立方体。
 * 同样，复合方块体积可以表示不规则形状的体积（例如，一棵树由一个树干和许多不一定连续放置的叶子立方体组成）。
 * 添加到复合方块体积的每个体积（默认情况下）都相对于设置的原点（无论是在构造时指定的原点，还是通过某个设置函数指定的原点）。
 * 然而，也可以将绝对体积推送到复合体积集合中，而这些体积不会受到原点变化的影响。
 *
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 */
export class CompoundBlockVolume {
	/**
	 * @remarks
	 * 返回表示堆栈中体积集合的边界矩形的“容量”
	 *
	 * Return the 'capacity' of the bounding rectangle which
	 * represents the collection of volumes in the stack
	 *
	 */
	readonly capacity: number;
	readonly items: CompoundBlockVolumeItem[];
	readonly itemsAbsolute: CompoundBlockVolumeItem[];
	/**
	 * @remarks
	 * 返回体积堆栈中（正向和负向）的体积数量
	 *
	 * Return the number of volumes (positive and negative) in the
	 * volume stack
	 *
	 */
	readonly volumeCount: number;
	/**
	 * @remarks
	 * 创建一个 CompoundBlockVolume 对象
	 *
	 * Create a CompoundBlockVolume object
	 *
	 * @param origin
	 * 用于中心复合体积的可选世界空间原点。
	 * 如果未指定，原点将设置为 (0,0,0)
	 *
	 * An optional world space origin on which to center the
	 * compound volume.
	 * If not specified, the origin is set to (0,0,0)
	 */
	constructor(origin?: Vector3);
	/**
	 * @remarks
	 * 清空体积堆栈的内容
	 *
	 * Clear the contents of the volume stack
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	clear(): void;
	/**
	 * @remarks
	 * 获取复合体积的块位置迭代器。此迭代器允许创建者迭代较大边界区域内的所有所选体积。
	 * 被减法体积覆盖的体积区域将不会包含在迭代步骤中。
	 * 即：如果你在堆栈中推了一个立方体，然后在相同的位置推了一个减法体积，那么迭代器将跳过初始体积因为它被视为负空间）
	 * 请注意，此迭代器返回的块位置位于绝对世界空间（无论复合体积项目是绝对还是相对）
	 *
	 * Fetch a Block Location Iterator for the Compound Block
	 * Volume. This iterator will allow a creator to iterate
	 * across all of the selected volumes within the larger
	 * bounding area.
	 * Areas of a volume which have been overridden by a
	 * subtractive volume will not be included in the iterator
	 * step.
	 * (i.e. if you push a cube to the stack, and then push a
	 * subtractive volume to the same location, then the iterator
	 * will step over the initial volume because it is considered
	 * negative space)
	 * Note that the Block Locations returned by this iterator are
	 * in absolute world space (irrespective of whether the
	 * compound volume items pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBlockLocationIterator(): BlockLocationIterator;
	/**
	 * @remarks
	 * 获取代表堆栈中所有体积的最大边界框
	 * 请注意返回的边界框表示为绝对世界空间（无论复合体积项目是绝对还是相对）
	 *
	 * Get the largest bounding box that represents a container for
	 * all of the volumes on the stack
	 * Note that the bounding box returned is represented in
	 * absolute world space  (irrespective of whether the compound
	 * volume items pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getBoundingBox(): BoundingBox;
	/**
	 * @remarks
	 * 获取代表堆栈中体积的最外部边界矩形的最大块位置。
	 * 请注意返回的最大位置在绝对世界空间（无论复合体积项目是绝对还是相对）
	 *
	 * Get the max block location of the outermost bounding
	 * rectangle which represents the volumes on the stack.
	 * Note that the max location returned is in absolute world
	 * space (irrespective of whether the compound volume items
	 * pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getMax(): Vector3;
	/**
	 * @remarks
	 * 获取代表堆栈中体积的最外部边界矩形的最小块位置。
	 * 请注意返回的最小位置在绝对世界空间（无论复合体积项目是绝对还是相对）
	 *
	 * Get the min block location of the outermost bounding
	 * rectangle which represents the volumes on the stack.
	 * Note that the min location returned is in absolute world
	 * space (irrespective of whether the compound volume items
	 * pushed are absolute or relative)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getMin(): Vector3;
	/**
	 * @remarks
	 * 获取复合体积的世界空间原点
	 *
	 * Fetch the origin in world space of the compound volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getOrigin(): Vector3;
	/**
	 * @remarks
	 * 返回一个布尔值，指示是否有任何体积项被推送到体积分量中
	 *
	 * Return a boolean which signals if there are any volume items
	 * pushed to the volume
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isEmpty(): boolean;
	/**
	 * @remarks
	 * 返回表示给定绝对世界空间块位置是否在正体积内的布尔值。
	 * 例如：如果堆栈包含一个大立方体，后面跟着一个稍小的负立方体，而测试位置在负立方体内，函数将返回 false，
	 * 因为它不在体积内（它在边界矩形内，但不在正空间内）
	 *
	 * Return a boolean representing whether or not a given
	 * absolute world space block location is inside a positive
	 * block volume.
	 * E.g. if the stack contains a large cube followed by a
	 * slightly smaller negative cube, and the test location is
	 * within the negative cube - the function will return false
	 * because it's not 'inside' a volume (it IS inside the
	 * bounding rectangle, but it is not inside a positively
	 * defined location)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	isInside(worldLocation: Vector3): boolean;
	/**
	 * @remarks
	 * 检查最后推送到体积堆栈的条目而不影响堆栈内容
	 *
	 * Inspect the last entry pushed to the volume stack without
	 * affecting the stack contents.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param forceRelativity
	 * 决定函数是否会以相对或绝对坐标系统强制返回 CompoundBlockVolumeItem。
	 * true = 强制返回的项相对于体积原点
	 * false = 强制返回项为绝对世界空间位置
	 *
	 * Determine whether the function returns a
	 * CompoundBlockVolumeItem which is forced into either relative
	 * or absolute coordinate system.
	 * `true` = force returned item to be relative to volume origin
	 * `false` = force returned item to be absolute world space
	 * location
	 *
	 * 如果未指定标志，返回的项目将保留其推送时的关系
	 *
	 * If no flag is specified, the item returned retains whatever
	 * relativity it had when it was pushed
	 * @returns
	 * 如果堆栈为空，则返回 undefined
	 *
	 * Returns undefined if the stack is empty
	 */
	peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
	/**
	 * @remarks
	 * 从体积分量堆栈中移除最后一个条目。这将使堆栈大小减少一个
	 *
	 * Remove the last entry from the volume stack. This will
	 * reduce the stack size by one
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	popVolume(): boolean;
	/**
	 * @remarks
	 * 将一个体积项推入堆栈。体积项包含一个“action”参数，决定该体积是正空间还是负空间。
	 * 该项还包含 locationRelativity ，决定它是相对于体积原点还是绝对的
	 *
	 * Push a volume item to the stack. The volume item contains
	 * an 'action' parameter which determines whether this volume
	 * is a positive or negative space.
	 * The item also contains a `locationRelativity` which
	 * determines whether it is relative or absolute to the
	 * compound volume origin
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param item
	 * 推入堆栈末尾的项目
	 *
	 * Item to push to the end of the stack
	 */
	pushVolume(item: CompoundBlockVolumeItem): void;
	/**
	 * @remarks
	 * 如果体积分量堆栈为空，此函数将推送指定的项到堆栈。
	 * 如果体积分量堆栈不为空，此函数将用新项替换堆栈上最后的项。
	 *
	 * If the volume stack is empty, this function will push the
	 * specified item to the stack.
	 * If the volume stack is NOT empty, this function will replace
	 * the last item on the stack with the new item.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param item
	 * 要添加或替换的项目
	 *
	 * Item to add or replace
	 */
	replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
	/**
	 * @remarks
	 * 将复合体的原点设置为绝对世界空间位置
	 *
	 * Set the origin of the compound volume to an absolute world
	 * space location
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param preserveExistingVolumes
	 * 该可选布尔标志决定相对 CompoundBlockVolumeItem 是否被冻结在原位置，或者是否受新原点的影响。
	 * 想象一个情景，你有一系列相对原点的位置围绕一个原点形成一个球体；所有这些位置都在 -2 到 2 范围内。
	 * 将每个这些位置作为相对项目推入复合体。
	 * 现在，移动原点，所有代表球体的位置也会随之移动。
	 * 然而，假设你想在第一个旁边添加第二个球体。
	 * 在这种情况下，设置新的原点几个位置过，再设置 'preserveExistingVolumes' = true。
	 * 这会设置一个新原点，但现有球体的位置将保持相对于原始原点。
	 * 现在，你可以再次推送相对球体位置（这次它们将相对于新原点）——结果两个球体并排在一起。
	 *
	 * This optional boolean flag determines whether the relative
	 * `CompoundBlockVolumeItem`'s are frozen in place, or are
	 * affected by the new origin.
	 * Imagine a scenario where you have a series of relative
	 * locations around an origin which make up a sphere; all of
	 * these locations are in the range of -2 to 2.
	 * Push each of these locations to the compound volume as
	 * relative items.
	 * Now, move the origin and all of the locations representing
	 * the sphere move accordingly.
	 * However, let's say you want to add a 2nd sphere next to the
	 * 1st.
	 * In this case, set the new origin a few locations over, but
	 * 'preserveExistingVolumes' = true.
	 * This will set a new origin, but the existing sphere
	 * locations will remain relative to the original origin.
	 * Now, you can push the relative sphere locations again (this
	 * time they will be relative to the new origin) - resulting in
	 * 2 spheres next to each other.
	 */
	setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
	/**
	 * @remarks
	 * 类似于 {@link CompoundBlockVolume.setOrigin} ——此函数将原点平移给定的增量移动到新位置
	 *
	 * Similar to {@link CompoundBlockVolume.setOrigin} - this
	 * function will translate the origin by a given delta to a new
	 * position
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param preserveExistingVolumes
	 * 请参阅 {@link CompoundBlockVolume.setOrigin} 中参数的描述
	 *
	 * See the description for the arguments to {@link
	 * CompoundBlockVolume.setOrigin}
	 */
	translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

/**
 * 表示一个可以容纳一组项目的容器。用于与玩家、箱矿车、羊驼等实体
 * @seeExample containers.ts
 *
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
	private constructor();
	/**
	 * @remarks
	 * 容器中空槽的数量
	 *
	 * Count of the slots in the container that are empty.
	 *
	 * @throws
	 * 如果容器无效，则抛出错误
	 *
	 * Throws if the container is invalid.
	 */
	readonly emptySlotsCount: number;
	/**
	 * @remarks
	 * 此容器中的槽数。例如，一个标准的单块箱子大小为 27。
	 * 请注意，玩家的物品栏容器包含总共 36 个槽位，9 个热键栏槽加上 27 个物品栏槽
	 *
	 * The number of slots in this container. For example, a
	 * standard single-block chest has a size of 27. Note, a
	 * player's inventory container contains a total of 36 slots, 9
	 * hotbar slots plus 27 inventory slots.
	 *
	 * @throws
	 * 如果容器无效，则抛出错误
	 *
	 * Throws if the container is invalid.
	 */
	readonly size: number;
	/**
	 * @remarks
	 * 向容器添加一个物品。此物品将被放置在第一个可用槽位中，并且可以与现有的同类型项目叠加。
	 * 如果希望在特定槽中设置物品，请使用{@link Container.setItem}
	 *
	 * Adds an item to the container. The item is placed in the
	 * first available slot(s) and can be stacked with existing
	 * items of the same type. Note, use {@link Container.setItem}
	 * if you wish to set the item in a particular slot.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param itemStack
	 * 要添加的物品堆
	 *
	 * The stack of items to add.
	 * @throws This function can throw errors.
	 */
	addItem(itemStack: ItemStack): ItemStack | undefined;
	/**
	 * @remarks
	 * 清除容器中的所有物品
	 *
	 * Clears all inventory items in the container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 如果容器无效，则抛出错误
	 *
	 * Throws if the container is invalid.
	 */
	clearAll(): void;
	/**
	 * @remarks
	 * 获取指定槽位的 itemStack。如果槽位为空，则返回 `undefined`。此方法不会更改或清理指定槽位的内容。
	 * 要获取特定槽的引用，请参阅 {@link Container.getSlot}
	 *
	 * Gets an {@link ItemStack} of the item at the specified slot.
	 * If the slot is empty, returns `undefined`. This method does
	 * not change or clear the contents of the specified slot. To
	 * get a reference to a particular slot, see {@link
	 * Container.getSlot}.
	 *
	 * @param slot
	 * 要从中检索物品的槽的零索引
	 *
	 * Zero-based index of the slot to retrieve items from.
	 * @throws
	 * 如果容器无效或`slot`索引超出范围，则抛出错误
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 * @seeExample getFirstHotbarItem.ts
	 */
	getItem(slot: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回一个容器槽。它作为对该容器中给定索引的槽的引用。
	 *
	 * Returns a container slot. This acts as a reference to a slot
	 * at the given index for this container.
	 *
	 * @param slot
	 * 要返回的槽的索引。该索引必须在容器的范围内。
	 *
	 * The index of the slot to return. This index must be within
	 * the bounds of the container.
	 *
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	getSlot(slot: number): ContainerSlot;
	/**
	 * @remarks
	 * 返回容器对象（或与此容器关联的实体或方块）在此上下文中是否仍然可用。
	 *
	 * Returns whether a container object (or the entity or block
	 * that this container is associated with) is still available
	 * for use in this context.
	 *
	 */
	isValid(): boolean;
	/**
	 * @remarks
	 * 将一个物品从一个槽移动到另一个槽，可能跨容器。
	 *
	 * Moves an item from one slot to another, potentially across
	 * containers.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param fromSlot
	 * 要从本容器中转移物品的槽的零基索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toSlot
	 * 要转移物品到 `toContainer` 的槽的零基索引。
	 *
	 * Zero-based index of the slot to transfer an item to, on
	 * `toContainer`.
	 * @param toContainer
	 * 要转移到的目标容器。注意这可以是与源相同的容器。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample moveBetweenContainers.ts
	 */
	moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
	/**
	 * @remarks
	 * 在特定槽中设置一个物品堆。
	 *
	 * Sets an item stack within a particular slot.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param slot
	 * 要在其中设置物品的槽的零基索引。
	 *
	 * Zero-based index of the slot to set an item at.
	 * @param itemStack
	 * 要放置在指定槽中的物品堆。将 `itemStack` 设置为 undefined 将清空该槽。
	 *
	 * Stack of items to place within the specified slot. Setting
	 * `itemStack` to undefined will clear the slot.
	 * @throws
	 * 若容器无效或 `slot` 索引超出范围，则抛出异常。
	 *
	 * Throws if the container is invalid or if the `slot` index is
	 * out of bounds.
	 */
	setItem(slot: number, itemStack?: ItemStack): void;
	/**
	 * @remarks
	 * 在容器内的两个不同槽之间交换物品。
	 *
	 * Swaps items between two different slots within containers.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param slot
	 * 要从本容器交换的槽的零基索引。
	 *
	 * Zero-based index of the slot to swap from this container.
	 * @param otherSlot
	 * 要与之交换的槽的零基索引。
	 *
	 * Zero-based index of the slot to swap with.
	 * @param otherContainer
	 * 要与之交换的目标容器。注意这可以是与源相同的容器。
	 *
	 * Target container to swap with. Note this can be the same
	 * container as this source.
	 * @throws
	 * 若此容器或 `otherContainer` 无效，或 `slot` 或 `otherSlot` 超出范围，则抛出异常。
	 *
	 * Throws if either this container or `otherContainer` are
	 * invalid or if the `slot` or `otherSlot` are out of bounds.
	 */
	swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
	/**
	 * @remarks
	 * 将一个物品从一个槽移动到另一个容器，或移动到同一容器中的第一个可用槽。
	 *
	 * Moves an item from one slot to another container, or to the
	 * first available slot in the same container.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param fromSlot
	 * 要从本容器中转移物品的槽的零基索引。
	 *
	 * Zero-based index of the slot to transfer an item from, on
	 * this container.
	 * @param toContainer
	 * 要转移到的目标容器。注意这可以是与源相同的容器。
	 *
	 * Target container to transfer to. Note this can be the same
	 * container as the source.
	 * @returns
	 * 包含未能转移的物品的 itemStack。如果所有物品都已转移，则返回 undefined。
	 *
	 * An itemStack with the items that couldn't be transferred.
	 * Returns undefined if all items were transferred.
	 * @throws
	 * 若此容器或 `toContainer` 无效，或 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
	 *
	 * Throws if either this container or `toContainer` are invalid
	 * or if the `fromSlot` or `toSlot` indices out of bounds.
	 * @seeExample transferBetweenContainers.ts
	 */
	transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

/**
 * 表示更大容器中的一个槽（例如，实体的库存）。
 *
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
	private constructor();
	/**
	 * @remarks
	 * 物品堆中的物品数量。有效值范围为 1-255。提供的值将被限制在物品的最大堆叠大小。
	 *
	 * Number of the items in the stack. Valid values range between
	 * 1-255. The provided value will be clamped to the item's
	 * maximum stack size.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若值超出 1-255 的范围，则抛出异常。
	 *
	 * Throws if the value is outside the range of 1-255.
	 */
	amount: number;
	/**
	 * @remarks
	 * 返回物品是否可堆叠。物品被认为是可堆叠的，如果物品的最大堆叠大小大于 1 且物品不包含任何自定义数据或属性。
	 *
	 * Returns whether the item is stackable. An item is considered
	 * stackable if the item's maximum stack size is greater than 1
	 * and the item does not contain any custom data or properties.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly isStackable: boolean;
	/**
	 * @remarks
	 * 获取或设置物品是否在死亡时保留。
	 *
	 * Gets or sets whether the item is kept on death.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 */
	keepOnDeath: boolean;
	/**
	 * @remarks
	 * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
	 *
	 * Gets or sets the item's lock mode. The default value is
	 * `ItemLockMode.none`.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 */
	lockMode: ItemLockMode;
	/**
	 * @remarks
	 * 最大堆叠大小。此值根据物品类型而有所不同。例如，火把的最大堆叠大小为 64，而鸡蛋的最大堆叠大小为 16。
	 *
	 * The maximum stack size. This value varies depending on the
	 * type of item. For example, torches have a maximum stack size
	 * of 64, while eggs have a maximum stack size of 16.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly maxAmount: number;
	/**
	 * @remarks
	 * 该物品堆的给定名称。当鼠标悬停在物品上时显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
	 *
	 * Given name of this stack of items. The name tag is displayed
	 * when hovering over the item. Setting the name tag to an
	 * empty string or `undefined` will remove the name tag.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 若槽的容器无效，或长度超过 255 个字符，则抛出异常。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * the length exceeds 255 characters.
	 */
	nameTag?: string;
	/**
	 * @remarks
	 * 物品的类型。
	 *
	 * The type of the item.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly "type": ItemType;
	/**
	 * @remarks
	 * 物品堆的物品类型标识符。如果未指定命名空间，则默认假定为 'minecraft:'。例如 'wheat' 或 'apple'。
	 *
	 * Identifier of the type of items for the stack. If a
	 * namespace is not specified, 'minecraft:' is assumed.
	 * Examples include 'wheat' or 'apple'.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 清除已在此物品堆上设置的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * item stack.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 返回该容器槽中的物品是否可以被破坏。
	 *
	 * Returns whether the item within this container slot can be
	 * destroyed.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanDestroy(): string[];
	/**
	 * @remarks
	 * 返回此容器槽中的物品是否可以放置。
	 *
	 * Returns if the item in this container slot can be placed on.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getCanPlaceOn(): string[];
	/**
	 * @remarks
	 * 返回一个属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @returns
	 * 返回属性的值，如果属性尚未设置，则返回 undefined。
	 *
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
	/**
	 * @remarks
	 * 返回已在此物品堆上使用的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this item stack.
	 *
	 * @returns
	 * 该实体上设置的动态属性的字符串数组。
	 *
	 * A string array of the dynamic properties set on this entity.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyIds(): string[];
	/**
	 * @remarks
	 * 返回当前存储在此实体的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号很有用——例如，如果一个实体有许多兆字节的相关动态属性，它可能会在各种设备上加载缓慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic
	 * properties that are currently stored for this entity. This
	 * includes the size of both the key and the value.  This can
	 * be useful for diagnosing performance warning signs - if, for
	 * example, an entity has many megabytes of associated dynamic
	 * properties, it may be slow to load on various devices.
	 *
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 创建物品堆的精确副本，包括任何自定义数据或属性。
	 *
	 * Creates an exact copy of the item stack, including any
	 * custom data or properties.
	 *
	 * @returns
	 * 返回槽中物品的副本。如果槽为空，则返回 undefined。
	 *
	 * Returns a copy of the item in the slot. Returns undefined if
	 * the slot is empty.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getItem(): ItemStack | undefined;
	/**
	 * @remarks
	 * 返回物品堆的传说值——次要显示字符串。
	 *
	 * Returns the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * @returns
	 * 传说字符串的数组。如果物品没有传说，则返回空数组。
	 *
	 * An array of lore strings. If the item does not have lore,
	 * returns an empty array.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getLore(): string[];
	/**
	 * @remarks
	 * 返回槽中物品的所有标签。
	 *
	 * Returns all tags for the item in the slot.
	 *
	 * @returns
	 * 返回槽中物品的所有标签。如果槽为空，则返回空数组。
	 *
	 * Returns all tags for the item in the slot. Return an empty
	 * array if the the slot is empty.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 如果此槽中有物品，则返回 true。
	 *
	 * Returns true if this slot has an item.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasItem(): boolean;
	/**
	 * @remarks
	 * 返回槽中的物品是否具有给定的标签。
	 *
	 * Returns whether the item in the slot slot has the given tag.
	 *
	 * @param tag
	 * 物品标签。
	 *
	 * The item tag.
	 * @returns
	 * 如果槽为空或槽中的物品没有给定的标签，则返回 false。
	 *
	 * Returns false when the slot is empty or the item in the slot
	 * does not have the given tag.
	 * @throws
	 * 若槽的容器无效，则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 返回此物品堆是否可以与给定的 `itemStack` 进行堆叠。这是通过比较物品类型和与物品堆相关的任何自定义数据和属性来确定的。每个物品堆的数量不予考虑。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`. This is determined by comparing the item
	 * type and any custom data and properties associated with the
	 * item stacks. The amount of each item stack is not taken into
	 * consideration.
	 *
	 * @param itemStack
	 * 被比较的 ItemStack。
	 *
	 * The ItemStack that is being compared.
	 *
	 * @returns
	 * 返回此物品堆是否可以与给定的 `itemStack` 进行堆叠。
	 *
	 * Returns whether this item stack can be stacked with the
	 * given `itemStack`.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	isStackableWith(itemStack: ItemStack): boolean;

	/**
	 * @remarks
	 * 返回 ContainerSlot 是否有效。若容器存在且已加载，并且槽位索引有效，则容器槽位有效。
	 *
	 * Returns whether the ContainerSlot is valid. The container
	 * slot is valid if the container exists and is loaded, and the
	 * slot index is valid.
	 *
	 */
	isValid(): boolean;

	/**
	 * @remarks
	 * 此物品在冒险模式中可以破坏的方块类型列表。方块名称显示在物品的提示信息中。将值设置为 undefined 将清空列表。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * The list of block types this item can break in Adventure
	 * mode. The block names are displayed in the item's tooltip.
	 * Setting the value to undefined will clear the list.
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。若提供的任何方块标识符无效也会抛出异常。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * any of the provided block identifiers are invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setCanDestroy(blockIdentifiers?: string[]): void;

	/**
	 * @remarks
	 * 此物品在冒险模式中可以放置的方块类型列表。这仅适用于方块物品。方块名称显示在物品的提示信息中。将值设置为 undefined 将清空列表。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * The list of block types this item can be placed on in
	 * Adventure mode. This is only applicable to block items. The
	 * block names are displayed in the item's tooltip. Setting the
	 * value to undefined will clear the list.
	 *
	 * @param blockIdentifiers
	 * 方块标识符列表。
	 *
	 * The list of blocks, given by their identifiers.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。若提供的任何方块标识符无效也会抛出异常。
	 *
	 * Throws if the slot's container is invalid. Also throws if
	 * any of the provided block identifiers are invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setCanPlaceOn(blockIdentifiers?: string[]): void;

	/**
	 * @beta
	 * @remarks
	 * 设置多个动态属性及其指定值。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 要设置的动态属性的键值对记录。
	 *
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 *
	 * @throws 可能抛出错误。
	 *
	 * This function can throw errors.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;

	/**
	 * @remarks
	 * 设置指定属性的值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 *
	 * @param value
	 * 要设置的属性数据值。
	 *
	 * Data value of the property to set.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;

	/**
	 * @remarks
	 * 在槽位中设置给定的 ItemStack，替换任何现有物品。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets the given ItemStack in the slot, replacing any existing
	 * item.
	 *
	 * @param itemStack
	 * 要放入槽位的 ItemStack。
	 *
	 * The ItemStack to be placed in the slot.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setItem(itemStack?: ItemStack): void;

	/**
	 * @remarks
	 * 为 ItemStack 设置附加说明值 - 次要显示字符串。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets the lore value - a secondary display string - for an
	 * ItemStack.
	 *
	 * @param loreList
	 * 附加说明字符串列表。将此参数设置为 undefined 将清除附加说明。
	 *
	 * A list of lore strings. Setting this argument to undefined
	 * will clear the lore.
	 *
	 * @throws
	 * 若槽位的容器无效则抛出异常。
	 *
	 * Throws if the slot's container is invalid.
	 *
	 * {@link Error}
	 *
	 * {@link InvalidContainerSlotError}
	 */
	setLore(loreList?: string[]): void;
}
/**
 * 包含与数据驱动实体事件触发相关的信息，例如，鸡的 minecraft:ageable_grow_up 事件。
 *
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 触发事件的实体。
	 *
	 * Entity that the event triggered on.
	 *
	 */
	readonly entity: Entity;
	/**
	 * @remarks
	 * 被触发的数据驱动事件的名称。
	 *
	 * Name of the data driven event being triggered.
	 *
	 */
	readonly eventId: string;
	/**
	 * @remarks
	 * 可更新的组件状态修改列表，这些修改是此触发事件的效果。
	 *
	 * An updateable list of modifications to component state that
	 * are the effect of this triggered event.
	 *
	 */
	getModifiers(): DefinitionModifier[];
}

/**
 * 包含与触发数据驱动实体事件相关的事件注册，例如鸡的
 * minecraft:ageable_grow_up 事件。
 *
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，该函数将在数据驱动实体事件被触发后调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 */
	subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
	/**
	 * @remarks
	 * 移除将在数据驱动实体事件被触发后调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 */
	unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

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
	 */
	readonly heightRange: minecraftcommon.NumberRange;

	/**
	 * @remarks
	 * 维度的标识符。
	 *
	 * Identifier of the dimension.
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
	 * 如果设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
	 * 将只检查方块体积中加载的区块的位置。
	 *
	 * If set to true will suppress the UnloadedChunksError if some or all of the block volume is outside of the loaded chunks. Will only check the block locations that are within the loaded chunks in the volume.
	 *
	 * @returns
	 * 如果方块体积中至少有一个方块满足过滤器，将返回 true，否则返回 false。
	 *
	 * Returns true if at least one block in the volume satisfies the filter, false otherwise.
	 *
	 * @throws
	 * 若参数类型正确的情况下不会出错，则可以省略或移除。
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
	fillBlocks(volume: BlockVolumeBase | CompoundBlockVolume, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume;

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
	 * @returns 返回生物群系的位置，如果未找到生物群系则返回 undefined。
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
	 * @param location 用于返回方块的位置。
	 *
	 * The location at which to return a block.
	 *
	 * @returns
	 * 指定位置的方块，如果请求的方块在未加载的区块中，则返回 'undefined'。
	 *
	 * Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.
	 *
	 * @throws
	 *
	 * PositionInUnloadedChunkError: 尝试与不再位于加载和 ticking 区块内的方块对象交互时引发的异常。
	 *
	 * PositionOutOfWorldBoundariesError: 尝试与超出维度高度范围的位置交互时引发的异常。
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
	 * 如果设置为 true 并且部分或全部方块体积在未加载的区块（Chunk）外，则会抑制 UnloadedChunksError。
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
	 *
	 * @throws
	 * */
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
	 * The Y height to begin the search from. Defaults to the maximum dimension height.
	 *
	 * @throws
	 * */
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
	 * Additional options for configuring additional effects for the sound.
	 *
	 * @throws
	 * 如果音量小于 0.0，将抛出错误。
	 * 如果音频淡入淡出值小于 0.0，则抛出错误。
	 * 如果音高小于 0.01，则抛出错误。
	 * 如果音量小于 0.0，将抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0. An error will be thrown if fade is less than 0.0. An error will be thrown if pitch is less than 0.01. An error will be thrown if volume is less than 0.0.
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
	 * 请注意，在许多情况下，如果命令不执行（例如，一个目标选择器没有找到匹配），这个方法不会抛出异常。
	 *
	 * Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception.
	 *
	 * {@link CommandError}
	 */
	runCommand(commandString: string): CommandResult;

	/**
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
	 * 请注意，在许多情况下，如果命令不操作（例如，在选择器没有找到匹配），此方法不会抛出异常。
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
	 * 如果位置在未加载的块内或超出世界边界，将抛出错误。
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
	 * 如果位置在未加载的区块内或在世界边界之外，则抛出错误。
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
	 * 设置天气的持续时间（以刻为单位）。如果未提供持续时间，则持续时间将设置为 300 到 900 秒之间的随机值。
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
	 * 要生成的实体类型的标识符。如果未指定命名空间，则假定为 'minecraft:'。
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

/**
 * 表示一种维度类型。
 *
 * Represents a type of dimension.
 */
export class DimensionType {
	private constructor();
	/**
	 * @remarks
	 * 维度类型的标识符。
	 *
	 * Identifier of the dimension type.
	 *
	 */
	readonly typeId: string;
}

/**
 * 用于访问所有可用的维度类型。
 *
 * Used for accessing all available dimension types.
 */
export class DimensionTypes {
	private constructor();
	/**
	 * @remarks
	 * 使用基于字符串的标识符检索维度类型。
	 *
	 * Retrieves a dimension type using a string-based identifier.
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	static get(dimensionTypeId: string): DimensionType | undefined;
	/**
	 * @remarks
	 * 检索所有维度类型的数组。
	 *
	 * Retrieves an array of all dimension types.
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	static getAll(): DimensionType[];
}

/**
 * 表示添加到实体的效果（如中毒）。
 *
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
	private constructor();
	/**
	 * @remarks
	 * 获取可能已应用于此效果的放大器。示例值通常在 0 到 4 之间。例如：效果 'Jump Boost II' 的放大器值为 1。
	 *
	 * Gets an amplifier that may have been applied to this effect.
	 * Sample values range typically from 0 to 4. Example: The
	 * effect 'Jump Boost II' will have an amplifier value of 1.
	 *
	 * @throws
	 * This function can throw errors.
	 *
	 * This property can throw when used.
	 */
	readonly amplifier: number;
	/**
	 * @remarks
	 * 获取此效果的玩家友好名称。
	 *
	 * Gets the player-friendly name of this effect.
	 *
	 * @throws
	 * This function can throw errors.
	 *
	 * This property can throw when used.
	 */
	readonly displayName: string;
	/**
	 * @remarks
	 * 获取此效果的指定持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻与秒之间转换。
	 *
	 * Gets the entire specified duration, in ticks, of this
	 * effect. There are 20 ticks per second. Use {@link
	 * TicksPerSecond} constant to convert between ticks and
	 * seconds.
	 *
	 * @throws
	 * This function can throw errors.
	 *
	 * This property can throw when used.
	 */
	readonly duration: number;
	/**
	 * @remarks
	 * 获取此效果的类型 ID。
	 *
	 * Gets the type id of this effect.
	 *
	 * @throws
	 * This function can throw errors.
	 *
	 * This property can throw when used.
	 */
	readonly typeId: string;
	/**
	 * @remarks
	 * 返回是否可以在此上下文中使用效果实例。
	 *
	 * Returns whether an effect instance is available for use in
	 * this context.
	 *
	 */
	isValid(): boolean;
}

/**
 * 包含与添加到实体的效果（如中毒）相关的更改信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 效果的附加属性和详细信息。
	 *
	 * Additional properties and details of the effect.
	 *
	 */
	readonly effect: Effect;
	/**
	 * @remarks
	 * 正在向其添加效果的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}

/**
 * 管理连接到添加效果到实体时的回调。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，该函数将在效果添加到实体时被调用。
	 *
	 * Adds a callback that will be called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: EffectAddAfterEvent) => void, options?: EntityEventOptions): (arg0: EffectAddAfterEvent) => void;

	/**
	 * @remarks
	 * 移除效果添加到实体时被调用的回调函数。
	 *
	 * Removes a callback from being called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

/**
 * 描述了与效果（例如毒药）添加到实体相关的更改信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddBeforeEvent {
	private constructor();

	/**
	 * @remarks
	 * 设置为 `true` 时会取消该事件。
	 *
	 * When set to true will cancel the event.
	 *
	 */
	cancel: boolean;

	/**
	 * @remarks
	 * 效果的持续时间。
	 *
	 * Effect duration.
	 *
	 */
	duration: number;

	/**
	 * @remarks
	 * 正在添加的效果类型。
	 *
	 * The type of the effect that is being added.
	 *
	 */
	readonly effectType: string;

	/**
	 * @remarks
	 * 正在添加效果的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}

/**
 * 管理在效果添加到实体时连接的回调函数。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddBeforeEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 添加一个回调函数，该函数将在效果添加到实体时被调用。
	 *
	 * Adds a callback that will be called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;

	/**
	 * @remarks
	 * 移除效果添加到实体时被调用的回调函数。
	 *
	 * Removes a callback from being called when an effect is added
	 * to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

/**
 * 表示可以应用于实体的一种效果类型，例如毒药。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
	private constructor();

	/**
	 * @remarks
	 * 此效果类型的标识符名称。
	 *
	 * Identifier name of this effect type.
	 *
	 * @returns
	 * 此效果类型的标识符。
	 *
	 * Identifier of the effect type.
	 */
	getName(): string;
}

/**
 * 表示可以应用于实体的一种效果类型，例如毒药。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
	private constructor();

	/**
	 * @remarks
	 * 获取给定标识符的效果类型。
	 *
	 * Effect type for the given identifier.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 效果的标识符。
	 *
	 * The identifier for the effect.
	 * @returns
	 * 给定标识符的效果类型，如果效果不存在则返回 `undefined`。
	 *
	 * Effect type for the given identifier or undefined if the
	 * effect does not exist.
	 */
	static get(identifier: string): EffectType | undefined;

	/**
	 * @remarks
	 * 获取所有效果。
	 *
	 * Gets all effects.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 所有效果的列表。
	 *
	 * A list of all effects.
	 */
	static getAll(): EffectType[];
}

/**
 * 描述了一种附魔类型的信息。
 *
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
	/**
	 * @remarks
	 * 附魔类型的名称。
	 *
	 * The name of the enchantment type.
	 */
	readonly id: string;

	/**
	 * @remarks
	 * 此类型附魔可以拥有的最大等级。
	 *
	 * The maximum level this type of enchantment can have.
	 */
	readonly maxLevel: number;

	/**
	 * @throws
	 * 若 `enchantmentType` 无效，则此函数可能会抛出错误。
	 */
	constructor(enchantmentType: string);
}

/**
 * 包含此世界中可用的 Minecraft 附魔类型目录。
 *
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
	private constructor();

	/**
	 * @remarks
	 * 检索具有指定标识符的附魔。
	 *
	 * Retrieves an enchantment with the specified identifier.
	 *
	 * @param enchantmentId
	 * 附魔的标识符。例如，“minecraft:flame”。
	 *
	 * Identifier of the enchantment. For example,
	 * "minecraft:flame".
	 *
	 * @returns
	 * 如果可用，返回一个表示指定附魔的 EnchantmentType 对象。
	 *
	 * If available, returns an EnchantmentType object that
	 * represents the specified enchantment.
	 */
	static get(enchantmentId: string): EnchantmentType | undefined;

	/**
	 * @remarks
	 * 返回所有可用附魔类型的集合。
	 *
	 * Returns a collection of all available enchantment types.
	 */
	static getAll(): EnchantmentType[];
}

/**
 * 表示世界中实体（如生物、玩家或矿车等移动物体）的状态。
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
	 */
	readonly dimension: Dimension;

	/**
	 * @remarks
	 * 实体的唯一标识符。此标识符在加载世界实例时保持一致。不要从该唯一标识符的值和结构中推断出任何含义 - 不要解析或解释它。即使 {@link Entity.isValid} 为 false，此属性也可以访问。
	 *
	 * Unique identifier of the entity. This identifier is intended
	 * to be consistent across loads of a world instance. No
	 * meaning should be inferred from the value and structure of
	 * this unique identifier - do not parse or interpret it. This
	 * property is accessible even if {@link Entity.isValid} is
	 * false.
	 */
	readonly id: string;

	/**
	 * @remarks
	 * 实体是否接触到可攀爬的方块。例如，玩家在梯子旁边或蜘蛛在石墙旁边。
	 *
	 * Whether the entity is touching a climbable block. For
	 * example, a player next to a ladder or a spider next to a
	 * stone wall.
	 */
	readonly isClimbing: boolean;

	/**
	 * @remarks
	 * 实体是否具有大于 0 的坠落距离，或在滑行时大于 1。
	 *
	 * Whether the entity has a fall distance greater than 0, or
	 * greater than 1 while gliding.
	 */
	readonly isFalling: boolean;

	/**
	 * @remarks
	 * 实体的任何部分是否在水块中。
	 *
	 * Whether any part of the entity is inside a water block.
	 */
	readonly isInWater: boolean;

	/**
	 * @remarks
	 * 实体是否在固体方块上方。此属性可能会表现出意外行为。当实体首次生成时，此属性将始终为 true，如果实体没有重力，此属性可能不正确。
	 *
	 * Whether the entity is on top of a solid block. This property
	 * may behave in unexpected ways. This property will always be
	 * true when an Entity is first spawned, and if the Entity has
	 * no gravity this property may be incorrect.
	 */
	readonly isOnGround: boolean;

	/**
	 * @remarks
	 * 若为 true，则实体正在睡觉。
	 *
	 * If true, the entity is currently sleeping.
	 */
	readonly isSleeping: boolean;

	/**
	 * @remarks
	 * 实体是否在潜行 - 即移动得更慢、更安静。
	 *
	 * Whether the entity is sneaking - that is, moving more slowly
	 * and more quietly.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 */
	isSneaking: boolean;

	/**
	 * @remarks
	 * 实体是否在冲刺。例如，使用冲刺动作的玩家、逃跑的豹猫或用胡萝卜钓竿加速的猪。
	 *
	 * Whether the entity is sprinting. For example, a player using
	 * the sprint action, an ocelot running away or a pig boosting
	 * with Carrot on a Stick.
	 */
	readonly isSprinting: boolean;

	/**
	 * @remarks
	 * 实体是否处于游泳状态。例如，使用游泳动作的玩家或水中的鱼。
	 *
	 * Whether the entity is in the swimming state. For example, a
	 * player using the swim action or a fish in water.
	 */
	readonly isSwimming: boolean;

	/**
	 * @remarks
	 * 实体的当前位置。
	 *
	 * Current location of the entity.
	 */
	readonly location: Vector3;

	/**
	 * @remarks
	 * 实体的给定名称。
	 *
	 * Given name of the entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 */
	nameTag: string;

	/**
	 * @remarks
	 * 返回表示此实体的计分板身份。即使实体被杀死，也将保持有效。
	 *
	 * Returns a scoreboard identity that represents this entity.
	 * Will remain valid when the entity is killed.
	 */
	readonly scoreboardIdentity?: ScoreboardIdentity;

	/**
	 * @beta
	 * @remarks
	 * 检索或设置用作 AI 相关行为（如攻击）目标的实体。如果实体当前没有目标，则返回 undefined。
	 *
	 * Retrieves or sets an entity that is used as the target of
	 * AI-related behaviors, like attacking. If the entity
	 * currently has no target returns undefined.
	 */
	readonly target?: Entity;

	/**
	 * @remarks
	 * 实体类型的标识符 - 例如，“minecraft:skeleton”。即使 {@link Entity.isValid} 为 false，此属性也可以访问。
	 *
	 * Identifier of the type of the entity - for example,
	 * 'minecraft:skeleton'. This property is accessible even if
	 * {@link Entity.isValid} is false.
	 */
	readonly typeId: string;

	/**
	 * @remarks
	 * 向实体添加或更新效果，如中毒。
	 *
	 * Adds or updates an effect, like poison, to the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param effectType
	 * 要添加到实体的效果类型。
	 *
	 * Type of effect to add to the entity.
	 *
	 * @param duration
	 * 效果应用的时间量，以刻为单位。每秒有 20 刻。使用 {@link TicksPerSecond} 常量在刻和秒之间转换。值必须在 [0, 20000000] 范围内。
	 *
	 * Amount of time, in ticks, for the effect to apply. There are
	 * 20 ticks per second. Use {@link TicksPerSecond} constant to
	 * convert between ticks and seconds. The value must be within
	 * the range [0, 20000000].
	 *
	 * @param options
	 * 效果的附加选项。
	 *
	 * Additional options for the effect.
	 *
	 * @returns
	 * 如果效果成功添加或更新，则不返回任何内容。如果持续时间或放大器超出有效范围，或者效果不存在，则可能会抛出错误。
	 *
	 * Returns nothing if the effect was added or updated
	 * successfully. This can throw an error if the duration or
	 * amplifier are outside of the valid ranges, or if the effect
	 * does not exist.
	 */
	addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;

	/**
	 * @remarks
	 * 向实体添加指定的标签。
	 *
	 * Adds a specified tag to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param tag
	 * 要添加的标签内容。标签必须少于 256 个字符。
	 *
	 * Content of the tag to add. The tag must be less than 256
	 * characters.
	 *
	 * @returns
	 * 如果标签添加成功，则返回 true。如果标签已存在于实体上，则可能会失败。
	 *
	 * Returns true if the tag was added successfully. This can
	 * fail if the tag already exists on the entity.
	 */
	addTag(tag: string): boolean;

	/**
	 * @remarks
	 * 对实体施加一组伤害。
	 *
	 * Applies a set of damage to an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param amount
	 * 要施加的伤害量。
	 *
	 * Amount of damage to apply.
	 *
	 * @param options
	 * 关于伤害来源的附加选项，这可能会在此实体上添加附加效果或激发附加行为。
	 *
	 * Additional options about the source of damage, which may add
	 * additional effects or spur additional behaviors on this
	 * entity.
	 *
	 * @returns
	 * 实体是否受到任何伤害。如果实体无敌或施加的伤害小于或等于 0，则此操作可能返回 false。
	 *
	 * Whether the entity takes any damage. This can return false
	 * if the entity is invulnerable or if the damage applied is
	 * less than or equal to 0.
	 */
	applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;

	/**
	 * @remarks
	 * 将冲量向量应用于实体的当前速度。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param vector
	 * 冲量向量。
	 *
	 * Impulse vector.
	 */
	applyImpulse(vector: Vector3): void;

	/**
	 * @remarks
	 * 将冲量向量应用于实体的当前速度。
	 *
	 * Applies impulse vector to the current velocity of the
	 * entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param directionX
	 * 水平面上的 X 方向。
	 *
	 * X direction in horizontal plane.
	 *
	 * @param directionZ
	 * 水平面上的 Z 方向。
	 *
	 * Z direction in horizontal plane.
	 *
	 * @param horizontalStrength
	 * 水平向量的击退强度。
	 *
	 * Knockback strength for the horizontal vector.
	 *
	 * @param verticalStrength
	 * 垂直向量的击退强度。
	 *
	 * Knockback strength for the vertical vector.
	 */
	applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;

	/**
	 * @remarks
	 * 清除在此实体上设置的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this
	 * entity.
	 */
	clearDynamicProperties(): void;

	/**
	 * @remarks
	 * 将实体的当前速度设置为零。请注意，此方法可能对玩家没有影响。
	 *
	 * Sets the current velocity of the Entity to zero. Note that
	 * this method may not have an impact on Players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */
	clearVelocity(): void;

	/**
	 * @remarks
	 * 如果实体着火，则熄灭火焰。请注意，您可以调用 getComponent('minecraft:onfire')，如果存在，则实体着火。
	 *
	 * Extinguishes the fire if the entity is on fire. Note that
	 * you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param useEffects
	 * 是否显示与熄灭相关的任何视觉效果。
	 *
	 * Whether to show any visual effects connected to the
	 * extinguishing.
	 *
	 * @returns
	 * 返回实体是否着火。
	 *
	 * Returns whether the entity was on fire.
	 */
	extinguishFire(useEffects?: boolean): boolean;

	/**
	 * @remarks
	 * 返回实体正在查看方向上的第一个相交方块。
	 *
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 *
	 * @param options
	 * 光线投射的附加配置选项。
	 *
	 * Additional configuration options for the ray cast.
	 *
	 * @returns
	 * 返回实体正在查看方向上的第一个相交方块。
	 *
	 * Returns the first intersecting block from the direction that
	 * this entity is looking at.
	 */
	getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;

	/**
	 * @remarks
	 * 获取实体的组件（表示附加功能）。
	 *
	 * Gets a component (that represents additional capabilities)
	 * for an entity.
	 *
	 * @param componentId
	 * 组件的标识符（例如，'minecraft:health'）。如果未指定命名空间前缀，则假定为 'minecraft:'。可用的组件 ID 可以在 {@link EntityComponentTypes} 枚举中找到。
	 *
	 * The identifier of the component (e.g., 'minecraft:health').
	 * If no namespace prefix is specified, 'minecraft:' is
	 * assumed. Available component IDs can be found as part of the
	 * {@link EntityComponentTypes} enum.
	 *
	 * @returns
	 * 如果组件存在于实体上，则返回该组件，否则返回 undefined。
	 *
	 * Returns the component if it exists on the entity, otherwise
	 * undefined.
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
	 *
	 * Returns all components that are both present on this entity
	 * and supported by the API.
	 */
	getComponents(): EntityComponent[];

	/**
	 * @remarks
	 * 返回属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 *
	 * @returns
	 * 返回属性的值，如果属性尚未设置，则返回 undefined。
	 *
	 * Returns the value for the property, or undefined if the
	 * property has not been set.
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

	/**
	 * @remarks
	 * 返回在此实体上使用的可用动态属性标识符集。
	 *
	 * Returns the available set of dynamic property identifiers
	 * that have been used on this entity.
	 *
	 * @returns
	 * 此实体上设置的动态属性的字符串数组。
	 *
	 * A string array of the dynamic properties set on this entity.
	 */
	getDynamicPropertyIds(): string[];

	/**
	 * @remarks
	 * 返回当前存储在此实体上的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告信号很有用 - 例如，如果实体有许多兆字节的相关动态属性，可能会在各种设备上加载缓慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic
	 * properties that are currently stored for this entity. This
	 * includes the size of both the key and the value. This can
	 * be useful for diagnosing performance warning signs - if, for
	 * example, an entity has many megabytes of associated dynamic
	 * properties, it may be slow to load on various devices.
	 */
	getDynamicPropertyTotalByteCount(): number;

	/**
	 * @remarks
	 * 返回实体上指定 EffectType 的效果，如果效果不存在则返回 undefined，或者如果效果不存在则抛出错误。
	 *
	 * Returns the effect for the specified EffectType on the
	 * entity, undefined if the effect is not present, or throws an
	 * error if the effect does not exist.
	 *
	 * @param effectType
	 * 效果标识符。
	 *
	 * The effect identifier.
	 *
	 * @returns
	 * 指定效果的效果对象，如果效果不存在则返回 undefined，或者如果效果不存在则抛出错误。
	 *
	 * Effect object for the specified effect, undefined if the
	 * effect is not present, or throws an error if the effect does
	 * not exist.
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
	 */

	getEffects(): Effect[];
	/**
	 * @remarks
	 * 通过从此实体的视角执行射线投射，获取此实体正在查看的实体。
	 *
	 * Gets the entities that this entity is looking at by
	 * performing a ray cast from the view of this entity.
	 *
	 * @param options
	 * 射线投射的附加配置选项。
	 *
	 * Additional configuration options for the ray cast.
	 *
	 * @returns
	 * 返回此实体正在查看方向上的一组实体。
	 *
	 * Returns a set of entities from the direction that this
	 * entity is looking at.
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
	 */

	getHeadLocation(): Vector3;
	/**
	 * @remarks
	 * 获取实体属性值。如果属性是在同一个 tick 内使用 setProperty 函数设置的，则更新后的值将在下一个 tick 中反映。
	 *
	 * Gets an entity Property value. If the property was set using
	 * the setProperty function within the same tick, the updated
	 * value will not be reflected until the subsequent tick.
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The entity Property identifier.
	 *
	 * @returns
	 * 返回当前属性值。对于枚举属性，返回字符串。对于浮点和整数属性，返回数字。对于未定义的属性，返回 undefined。
	 *
	 * Returns the current property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 *
	 * @throws
	 * 如果实体无效，则抛出错误。
	 *
	 * Throws if the entity is invalid.
	 */

	getProperty(identifier: string): boolean | number | string | undefined;
	/**
	 * @remarks
	 * 返回此实体的当前旋转组件。
	 *
	 * Returns the current rotation component of this entity.
	 *
	 * @returns
	 * 返回包含此实体旋转（以度为单位）的 Vec2。
	 *
	 * Returns a Vec2 containing the rotation of this entity (in
	 * degrees).
	 */

	getRotation(): Vector2;
	/**
	 * @remarks
	 * 返回与实体关联的所有标签。
	 *
	 * Returns all tags associated with the entity.
	 *
	 * @returns
	 * 包含所有标签的字符串数组。
	 *
	 * An array containing all tags as strings.
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
	 */

	getViewDirection(): Vector3;
	/**
	 * @remarks
	 * 如果指定的组件存在于此实体上，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
	 *
	 * @param componentId
	 * 要检索的组件标识符（例如 'minecraft:rideable'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
	 *
	 * The identifier of the component (e.g., 'minecraft:rideable')
	 * to retrieve. If no namespace prefix is specified,
	 * 'minecraft:' is assumed.
	 *
	 * @returns
	 * 如果指定的组件存在于此实体上，则返回 true。
	 *
	 * Returns true if the specified component is present on this
	 * entity.
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
	 *
	 * @returns
	 * 返回实体是否具有特定标签。
	 *
	 * Returns whether an entity has a particular tag.
	 */

	hasTag(tag: string): boolean;
	/**
	 * @remarks
	 * 返回实体是否可以通过脚本操作。当 Player 的 EntityLifetimeState 设置为 Loaded 时，认为其有效。
	 *
	 * Returns whether the entity can be manipulated by script. A
	 * Player is considered valid when it's EntityLifetimeState is
	 * set to Loaded.
	 *
	 * @returns
	 * 实体是否有效。
	 *
	 * Whether the entity is valid.
	 */

	isValid(): boolean;
	/**
	 * @remarks
	 * 杀死此实体。实体将正常掉落战利品。
	 *
	 * Kills this entity. The entity will drop loot as normal.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @returns
	 * 如果实体可以被杀死（即使它已经死了），则返回 true，否则返回 false。
	 *
	 * Returns true if entity can be killed (even if it is already
	 * dead), otherwise it returns false.
	 */

	kill(): boolean;
	/**
	 * @beta
	 * @remarks
	 * 设置实体的旋转以面向目标位置。适用于如生物的情况，俯仰控制头部倾斜，偏航控制身体旋转。
	 *
	 * Sets the rotation of the entity to face a target location.
	 * Both pitch and yaw will be set, if applicable, such as for
	 * mobs where the pitch controls the head tilt and the yaw
	 * controls the body rotation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param targetLocation
	 * 实体应面向/查看的目标位置。
	 *
	 * The target location that this entity should face/look
	 * towards.
	 */

	lookAt(targetLocation: Vector3): void;
	/**
	 * @remarks
	 * 将实体与传入的选项进行匹配。如果传入的 EntityQueryOptions 中未指定位置，则使用实体的位置进行匹配。
	 *
	 * Matches the entity against the passed in options. Uses the
	 * location of the entity for matching if the location is not
	 * specified in the passed in EntityQueryOptions.
	 *
	 * @param options
	 * 要执行匹配的查询。
	 *
	 * The query to perform the match against.
	 *
	 * @returns
	 * 如果实体符合传入的 EntityQueryOptions 中的条件，则返回 true，否则返回 false。
	 *
	 * Returns true if the entity matches the criteria in the
	 * passed in EntityQueryOptions, otherwise it returns false.
	 *
	 * @throws
	 * 如果查询选项配置错误，则抛出错误。
	 *
	 * Throws if the query options are misconfigured.
	 */

	matches(options: EntityQueryOptions): boolean;
	/**
	 * @remarks
	 * 使实体播放给定的动画。
	 *
	 * Cause the entity to play the given animation.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param animationName
	 * 动画标识符。例如 animation.creeper.swelling。
	 *
	 * The animation identifier. e.g. animation.creeper.swelling
	 *
	 * @param options
	 * 控制动画播放和过渡的附加选项。
	 *
	 * Additional options to control the playback and transitions
	 * of the animation.
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
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */

	remove(): void;
	/**
	 * @remarks
	 * 移除实体上的指定 EffectType，或如果效果不存在则返回 false。
	 *
	 * Removes the specified EffectType on the entity, or returns
	 * false if the effect is not present.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param effectType
	 * 效果标识符。
	 *
	 * The effect identifier.
	 *
	 * @returns
	 * 如果效果已被移除则返回 true。如果未找到或不存在效果则返回 false。
	 *
	 * Returns true if the effect has been removed. Returns false
	 * if the effect is not found or does not exist.
	 */

	removeEffect(effectType: EffectType | string): boolean;
	/**
	 * @remarks
	 * 从实体中移除指定的标签。
	 *
	 * Removes a specified tag from an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param tag
	 * 要移除的标签内容。
	 *
	 * Content of the tag to remove.
	 *
	 * @returns
	 * 返回标签是否存在于实体上。
	 *
	 * Returns whether the tag existed on the entity.
	 */

	removeTag(tag: string): boolean;
	/**
	 * @remarks
	 * 将实体属性重置为其默认值，如实体定义中指定的那样。此属性更改直到下一个 tick 才会应用。
	 *
	 * Resets an Entity Property back to its default value, as
	 * specified in the Entity's definition. This property change
	 * is not applied until the next tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 *
	 * @returns
	 * 返回默认属性值。对于枚举属性，返回字符串。对于浮点和整数属性，返回数字。对于未定义的属性，返回 undefined。
	 *
	 * Returns the default property value. For enum properties, a
	 * string is returned. For float and int properties, a number
	 * is returned. For undefined properties, undefined is
	 * returned.
	 *
	 * @throws
	 * 如果实体无效，则抛出错误。
	 *
	 * Throws if the entity is invalid.
	 */

	resetProperty(identifier: string): boolean | number | string;
	/**
	 * @remarks
	 * 在实体上运行同步命令。
	 *
	 * Runs a synchronous command on the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param commandString
	 * 命令字符串。注意：不应包含前导斜杠。
	 *
	 * The command string. Note: This should not include a leading
	 * forward slash.
	 *
	 * @returns
	 * 包含命令是否成功的命令结果。
	 *
	 * A command result containing whether the command was
	 * successful.
	 */

	runCommand(commandString: string): CommandResult;
	/**
	 * @remarks
	 * 从此实体的上下文中异步运行特定命令。请注意，在给定的 tick 中最多可以运行 128 个异步命令。
	 *
	 * Runs a particular command asynchronously from the context of
	 * this entity. Note that there is a maximum queue of 128
	 * asynchronous commands that can be run in a given tick.
	 *
	 * @param commandString
	 * 要运行的命令。请注意，命令字符串不应以斜杠开头。
	 *
	 * Command to run. Note that command strings should not start
	 * with slash.
	 *
	 * @returns
	 * 对于返回数据的命令，返回带有命令响应值的 JSON 结构。
	 *
	 * For commands that return data, returns a JSON structure with
	 * command response values.
	 */

	runCommandAsync(commandString: string): Promise<CommandResult>;
	/**
	 * @beta
	 * @remarks
	 * 设置具有特定值的多个动态属性。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 要设置的动态属性的键值对记录。
	 *
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 */

	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定的属性设置为一个值。
	 *
	 * Sets a specified property to a value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 *
	 * @param value
	 * 要设置的属性数据值。
	 *
	 * Data value of the property to set.
	 */

	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 使一个实体着火（如果它不在水中或雨中）。请注意，您可以调用 getComponent('minecraft:onfire')，如果存在，该实体正在着火。
	 *
	 * Sets an entity on fire (if it is not in water or rain). Note
	 * that you can call getComponent('minecraft:onfire') and, if
	 * present, the entity is on fire.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param seconds
	 * 使实体着火的时间长度。
	 *
	 * Length of time to set the entity on fire.
	 *
	 * @param useEffects
	 * 是否应应用副作用（例如解冻冻结）以及其他条件（如雨或火焰保护）是否应考虑在内。
	 *
	 * Whether side-effects should be applied (e.g. thawing freeze)
	 * and other conditions such as rain or fire protection should
	 * be taken into consideration.
	 *
	 * @returns
	 * 实体是否被点燃。如果秒数小于或等于零，实体是湿的或实体免疫火焰，则可能失败。
	 *
	 * Whether the entity was set on fire. This can fail if seconds
	 * is less than or equal to zero, the entity is wet or the
	 * entity is immune to fire.
	 */

	setOnFire(seconds: number, useEffects?: boolean): boolean;
	/**
	 * @remarks
	 * 将实体属性设置为提供的值。此属性更改直到下一个 tick 才会应用。
	 *
	 * Sets an Entity Property to the provided value. This property
	 * change is not applied until the next tick.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param identifier
	 * 实体属性标识符。
	 *
	 * The Entity Property identifier.
	 *
	 * @param value
	 * 属性值。提供的类型必须与实体定义中指定的类型兼容。
	 *
	 * The property value. The provided type must be compatible
	 * with the type specified in the entity's definition.
	 *
	 * @throws
	 * 如果实体无效，则抛出错误。
	 *
	 * Throws if the entity is invalid.
	 */

	setProperty(identifier: string, value: boolean | number | string): void;
	/**
	 * @remarks
	 * 设置实体的主旋转。
	 *
	 * Sets the main rotation of the entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param rotation
	 * 实体的 x 和 y 旋转（以度为单位）。对于大多数生物，x 旋转控制头部倾斜，y 旋转控制身体旋转。
	 *
	 * The x and y rotation of the entity (in degrees). For most
	 * mobs, the x rotation controls the head tilt and the y
	 * rotation controls the body rotation.
	 */

	setRotation(rotation: Vector2): void;
	/**
	 * @remarks
	 * 将选定的实体传送到新位置。
	 *
	 * Teleports the selected entity to a new location
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 实体的新位置。
	 *
	 * New location for the entity.
	 *
	 * @param teleportOptions
	 * 关于传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 */

	teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
	/**
	 * @remarks
	 * 触发实体类型事件。对于每个实体，在实体定义中为关键实体行为定义了一些事件；例如，爬行者有一个 minecraft:start_exploding 类型事件。
	 *
	 * Triggers an entity type event. For every entity, a number of
	 * events are defined in an entities' definition for key entity
	 * behaviors; for example, creepers have a
	 * minecraft:start_exploding type event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param eventName
	 * 要触发的实体类型事件的名称。如果未指定命名空间，则假定为 minecraft:。
	 *
	 * Name of the entity type event to trigger. If a namespace is
	 * not specified, minecraft: is assumed.
	 */

	triggerEvent(eventName: string): void;
	/**
	 * @remarks
	 * 尝试传送，但可能无法完成传送操作（例如，如果目标位置有方块）。
	 *
	 * Attempts to try a teleport, but may not complete the
	 * teleport operation (for example, if there are blocks at the
	 * destination.)
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param location
	 * 要传送实体到的位置。
	 *
	 * Location to teleport the entity to.
	 *
	 * @param teleportOptions
	 * 关于传送操作的选项。
	 *
	 * Options regarding the teleport operation.
	 *
	 * @returns
	 * 返回传送是否成功。如果目标区块未加载或传送会导致与方块相交，则可能失败。
	 *
	 * Returns whether the teleport succeeded. This can fail if the
	 * destination chunk is unloaded or if the teleport would
	 * result in intersecting with blocks.
	 */

	tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

/**
 * 添加此组件后，该实体会在生成时附带一个指定类型的骑乘实体。
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 当在特定条件下生成时，添加为此实体骑乘者的实体类型。
	 *
	 */
	readonly entityType: string;
	/**
	 * @remarks
	 * 当该骑乘者为此实体生成时，触发的可选生成事件。
	 *
	 */
	readonly spawnEvent: string;
	static readonly componentId = "minecraft:addrider";
}

/**
 * 为实体添加一个成长计时器。可以通过给予实体其喜欢的物品（由 feedItems 定义）来加速成长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体长大前的时间量，-1 表示永远是幼体。
	 *
	 */
	readonly duration: number;
	/**
	 * @remarks
	 * 当此实体长大时运行的事件。
	 *
	 */
	readonly growUp: Trigger;
	/**
	 * @remarks
	 * 成功互动后，使用的喂食物品将转变为此物品。
	 *
	 */
	readonly transformToItem: string;
	static readonly componentId = "minecraft:ageable";
	/**
	 * @remarks
	 * 实体长大时掉落的物品列表。
	 *
	 */
	getDropItems(): string[];
	/**
	 * @remarks
	 * 可以喂给实体的物品列表。包括物品名称的 'item' 和定义成长时间的 'growth'。
	 *
	 */
	getFeedItems(): EntityDefinitionFeedItem[];
}

/**
 * 这是一个用于任何围绕数值的实体组件的基础抽象类，可以定义最小值、最大值和默认值。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
	private constructor();

	/**
	 * @remarks
	 * 当前实例中该属性的当前值。
	 *
	 * Current value of this attribute for this instance.
	 */
	readonly currentValue: number;

	/**
	 * @remarks
	 * 返回该属性的默认定义值。
	 *
	 * Returns the default defined value for this attribute.
	 */
	readonly defaultValue: number;

	/**
	 * @remarks
	 * 返回在考虑了其他环境组件或因素后该属性的有效最大值。
	 *
	 * Returns the effective max of this attribute given any other ambient components or factors.
	 */
	readonly effectiveMax: number;

	/**
	 * @remarks
	 * 返回在考虑了其他环境组件或因素后该属性的有效最小值。
	 *
	 * Returns the effective min of this attribute given any other ambient components or factors.
	 */
	readonly effectiveMin: number;

	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的默认值。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Resets the current value of this attribute to the defined default value.
	 */
	resetToDefaultValue(): void;

	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最大值。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Resets the current value of this attribute to the maximum defined value.
	 */
	resetToMaxValue(): void;

	/**
	 * @remarks
	 * 将该属性的当前值重置为定义的最小值。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Resets the current value of this attribute to the minimum defined value.
	 */
	resetToMinValue(): void;

	/**
	 * @remarks
	 * 设置该属性的当前值。提供的值将被限制在该属性的范围内。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets the current value of this attribute. The provided value will be clamped to the range of this attribute.
	 */
	setCurrentValue(value: number): boolean;
}

/**
 * 实体移动事件的基类。
 *
 * Base class for a family of entity movement events.
 */
export class EntityBaseMovementComponent extends EntityComponent {
	private constructor();

	/**
	 * @remarks
	 * 此移动模式下的最大转弯幅度。
	 *
	 * Maximum turn rate for this movement modality of the mob.
	 */
	readonly maxTurn: number;
}

/**
 * 定义此实体可以在何种方块中呼吸，并使其具有窒息的能力。
 *
 * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
 */
export class EntityBreathableComponent extends EntityComponent {
	private constructor();

	/**
	 * @beta
	 * @remarks
	 * 实体的当前空气供应量。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * The current air supply of the entity.
	 *
	 * @throws
	 * 若空气供应在 [窒息时间, 最大空气供应] 范围外，将报错。
	 *
	 * Will throw an error if the air supply is out of bounds [suffocationTime, maxAirSupply].
	 */
	airSupply: number;

	/**
	 * @remarks
	 * 若该值为 `true`，则表示此实体可以在空气中呼吸。
	 *
	 * If true, this entity can breathe in air.
	 */
	readonly breathesAir: boolean;

	/**
	 * @remarks
	 * 若该值为 `true`，则表示此实体可以在熔岩中呼吸。
	 *
	 * If true, this entity can breathe in lava.
	 */
	readonly breathesLava: boolean;

	/**
	 * @remarks
	 * 若该值为 `true`，则表示此实体可以在固体方块中呼吸。
	 *
	 * If true, this entity can breathe in solid blocks.
	 */
	readonly breathesSolids: boolean;

	/**
	 * @remarks
	 * 若该值为 `true`，则表示此实体可以在水中呼吸。
	 *
	 * If true, this entity can breathe in water.
	 */
	readonly breathesWater: boolean;

	/**
	 * @beta
	 * @remarks
	 * 若该值为 `true`，则表示此实体可以呼吸。
	 *
	 * If true, the entity is able to breathe.
	 */
	readonly canBreathe: boolean;

	/**
	 * @remarks
	 * 若该值为 `true`，则表示此实体在水中会有可见的气泡。
	 *
	 * If true, this entity will have visible bubbles while in water.
	 */
	readonly generatesBubbles: boolean;

	/**
	 * @remarks
	 * 恢复至最大呼吸量所需的秒数。
	 *
	 * Time in seconds to recover breath to maximum.
	 */
	readonly inhaleTime: number;

	/**
	 * @remarks
	 * 窒息伤害之间的秒数。
	 *
	 * Time in seconds between suffocation damage.
	 */
	readonly suffocateTime: number;

	/**
	 * @remarks
	 * 实体可以屏住呼吸的秒数。
	 *
	 * Time in seconds the entity can hold its breath.
	 */
	readonly totalSupply: number;

	static readonly componentId = "minecraft:breathable";

	/**
	 * @remarks
	 * 该实体可以在其中呼吸的方块列表，除了单独为方块类指定的属性外。
	 *
	 * List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
	 */
	getBreatheBlocks(): BlockPermutation[];

	/**
	 * @remarks
	 * 该实体不能在其中呼吸的方块列表。
	 *
	 * List of blocks this entity can't breathe in.
	 */
	getNonBreatheBlocks(): BlockPermutation[];
}

/**
 * 添加此组件后，表示实体可以攀爬梯子。
 *
 * When added, this component signifies that the entity can climb up ladders.
 */
export class EntityCanClimbComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:can_climb";
}

/**
 * 添加此组件后，表示实体可以飞行，并且寻路功能不会被限制在需要实体下面有方块的路径。
 *
 * When added, this component signifies that the entity can fly, and the pathfinder won't be restricted to paths where a solid block is required underneath it.
 */
export class EntityCanFlyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:can_fly";
}
export class EntityCanPowerJumpComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:can_power_jump";
}

/**
 * 定义实体的次要颜色。仅适用于具有次要预定义颜色值的特定实体（如热带鱼）。
 *
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此颜色的具体值。
	 * Value of this particular color.
	 *
	 */
	readonly value: PaletteColor;
	static readonly componentId = "minecraft:color2";
}

/**
 * 定义实体的颜色。仅适用于具有预定义颜色值的特定实体（如绵羊、羊驼、潜影贝）。
 *
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此颜色的具体值。
	 *
	 * Value of this particular color.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:color";
}

/**
 * 下游实体组件的基类。
 *
 * Base class for downstream entity components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
	private constructor();
	/**
	 * @remarks
	 * 此组件所属的实体。若实体已被移除，则为 undefined。
	 *
	 * The entity that owns this component. The entity will be
	 * undefined if it has been removed.
	 *
	 */
	readonly entity: Entity;
}

/**
 * 作为可成长组件的一部分，表示一组可以喂给实体的物品及其加速其成长的速率。
 *
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
	private constructor();
	/**
	 * @remarks
	 * 通过喂给实体此物品，实体的年龄将增加的数量。数值通常在 0 和 1 之间。
	 *
	 * The amount by which an entity's age will increase when fed
	 * this item. Values usually range between 0 and 1.
	 *
	 */
	readonly growth: number;
	/**
	 * @remarks
	 * 可喂养的物品类型的标识符。如果没有指定命名空间，默认假定为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
	 *
	 * Identifier of type of item that can be fed. If a namespace
	 * is not specified, 'minecraft:' is assumed. Example values
	 * include 'wheat' or 'golden_apple'.
	 *
	 */
	readonly item: string;
}

/**
 * 包含与游戏中实体死亡相关的数据。
 *
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 如果指定了此项，则提供有关造成该实体死亡的伤害来源的更多信息。
	 *
	 * If specified, provides more information on the source of
	 * damage that caused the death of this entity.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 已经死亡的实体对象。
	 *
	 * Now-dead entity object.
	 *
	 */
	readonly deadEntity: Entity;
}

/**
 * 支持在实体死亡后触发的事件注册。
 *
 * Supports registering for an event that fires after an entity
 * has died.
 */
export class EntityDieAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅实体死亡时触发的事件。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 该函数可以在早期执行模式中调用。
	 *
	 * Subscribes to an event that fires when an entity dies.
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 实体死亡时调用的函数。
	 *
	 * Function to call when an entity dies.
	 * @param options
	 * 订阅触发时的额外筛选选项。
	 *
	 * Additional filtering options for when the subscription
	 * fires.
	 * @returns
	 * 返回一个闭包，可用于在以后取消订阅。
	 *
	 * Returns the closure that can be used in future downstream
	 * calls to unsubscribe.
	 */
	subscribe(callback: (arg0: EntityDieAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent) => void;
	/**
	 * @remarks
	 * 停止在实体死亡时调用你的函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 该函数可以在早期执行模式中调用。
	 *
	 * Stops this event from calling your function when an entity
	 * dies.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

/**
 * 提供对生物装备槽的访问。该组件存在于所有生物实体。
 * @seeExample givePlayerElytra.ts
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:equippable";
	/**
	 * @remarks
	 * 获取给定装备槽的装备物品。
	 *
	 * Gets the equipped item for the given EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽。例如：“头部”、“胸部”、“副手”。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand"
	 * @returns
	 * 返回装备在给定装备槽中的物品。如果为空，则返回 `undefined`。
	 *
	 * Returns the item equipped to the given EquipmentSlot. If
	 * empty, returns undefined.
	 * @throws 此方法可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取对应于给定装备槽的容器槽。
	 *
	 * Gets the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽。例如：“头部”、“胸部”、“副手”。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @returns
	 * 返回对应于给定装备槽的容器槽。
	 *
	 * Returns the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 * @throws 此方法可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
	/**
	 * @remarks
	 * 更换给定装备槽中的物品。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Replaces the item in the given EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽。例如：“头部”、“胸部”、“副手”。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @param itemStack
	 * 要装备的物品。如果为 `undefined`，则清空该槽。
	 *
	 * The item to equip. If undefined, clears the slot.
	 * @throws 此方法可能会抛出错误。
	 *
	 * This function can throw errors.
	 */
	setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

/**
 * 添加该组件后，表示该实体不会受到火焰的伤害。
 *
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFireImmuneComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:fire_immune";
}

/**
 * 添加该组件后，表示该实体可以在液体方块中漂浮。
 *
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:floats_in_liquid";
}

/**
 * 表示实体的飞行速度。
 *
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体当前的飞行速度值。
	 *
	 * Current value of the flying speed of the associated entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:flying_speed";
}

/**
 * 定义摩擦力对实体的影响。
 *
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体当前的摩擦力修正值。
	 *
	 * Current value of the friction modifier of the associated
	 * entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:friction_modifier";
}

/**
 * 设置实体与地面的实际偏移量。
 *
 * Sets the offset from the ground that the entity is actually
 * at.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此特定地面偏移的值。注意，此值实际上是只读的；设置地面偏移值不会对相关实体产生影响。
	 *
	 * Value of this particular ground offset. Note that this value
	 * is effectively read only; setting the ground offset value
	 * will not have an impact on the related entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:ground_offset";
}

/**
 * 定义与此实体的治疗交互。
 *
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 决定是否可以使用某个物品来治疗实体，即使实体已经满血。
	 *
	 * Determines if an item can be used regardless of the entity
	 * being at full health.
	 */
	readonly forceUse: boolean;
	static readonly componentId = "minecraft:healable";
	/**
	 * @remarks
	 * 一组可以专门治疗此实体的物品。
	 *
	 * A set of items that can specifically heal this entity.
	 *
	 * @returns
	 * 与此组件关联的实体。
	 *
	 * Entity that this component is associated with.
	 */
	getFeedItems(): FeedItem[];
}

/**
 * 包含在实体健康值变化时相关的信息。警告：不要在此事件中改变实体的健康值，否则会导致无限循环！
 *
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 */
export class EntityHealthChangedAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 健康值发生变化的实体。
	 *
	 * Entity whose health changed.
	 */
	readonly entity: Entity;
	/**
	 * @remarks
	 * 实体的新健康值。
	 *
	 * New health value of the entity.
	 */
	readonly newValue: number;
	/**
	 * @remarks
	 * 实体的旧健康值。
	 *
	 * Old health value of the entity.
	 */
	readonly oldValue: number;
}

/**
 * 管理与实体健康值变化相关的回调。
 *
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
	private constructor();
	/**
     * @remarks
     * Adds a callback that will be called when the health of an
     * entity changes.
     *
     * 添加一个回调函数，当实体生命值改变时调用。

     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
	subscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent) => void;
	/**
     * @remarks
     * Removes a callback from being called when the health of an
     * entity changes.
     *
     * 移除一个回调函数，不再在实体生命值改变时调用。

     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
	unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

/**
 * Defines the health properties of an entity.
 * @seeExample applyDamageThenHeal.ts
 * 定义实体的生命值属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = "minecraft:health";
}

/**
 * Contains information related to an entity hitting a block.
 * 包含实体击中方块的相关信息。
 */
export class EntityHitBlockAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * Face of the block that was hit.
	 *
	 * 被击中方块的面。
	 *
	 */
	readonly blockFace: Direction;
	/**
	 * @remarks
	 * Entity that made the attack.
	 *
	 * 进行攻击的实体。
	 *
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * Block that was hit by the attack.
	 *
	 * 被攻击击中的方块。
	 *
	 */
	readonly hitBlock: Block;
	/**
	 * @remarks
	 * Block permutation that was hit by the attack.
	 *
	 * 被攻击击中的方块的置换。
	 *
	 */
	readonly hitBlockPermutation: BlockPermutation;
}

/**
 * Manages callbacks that are connected to when an entity hits
 * a block.
 * 管理与实体击中方块事件相关的回调函数。
 */
export class EntityHitBlockAfterEventSignal {
	private constructor();
	/**
     * @remarks
     * Adds a callback that will be called when an entity hits a
     * block.
     *
     * 添加一个回调函数，当实体击中方块时调用。

     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
	subscribe(callback: (arg0: EntityHitBlockAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent) => void;
	/**
     * @remarks
     * Removes a callback from being called when an entity hits a
     * block.
     *
     * 移除一个回调函数，不再在实体击中方块时调用。

     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * This function can be called in early-execution mode.
     *
     */
	unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

/**
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 * 包含实体击中（近战攻击）另一实体的相关信息。
 */
export class EntityHitEntityAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * Entity that made a hit/melee attack.
	 *
	 * 进行击中/近战攻击的实体。
	 *
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * Entity that was hit by the attack.
	 *
	 * 被击中攻击的实体。
	 *
	 */
	readonly hitEntity: Entity;
}

/**
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 * 管理与实体对另一实体进行近战攻击事件相关的回调函数。
 */
export class EntityHitEntityAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * Adds a callback that will be called when an entity hits
	 * another entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: EntityHitEntityAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent) => void;
	/**
	 * @remarks
	 * Removes a callback from being called when an entity makes a
	 * melee attack on another entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

/**
 * 描述了实体受伤相关的信息。
 *
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示所受伤害量。
	 *
	 * Describes the amount of damage caused.
	 *
	 */
	readonly damage: number;
	/**
	 * @remarks
	 * 表示可能造成该伤害的实体的信息。
	 *
	 * Source information on the entity that may have applied this
	 * damage.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 表示受伤的实体。
	 *
	 * Entity that was hurt.
	 *
	 */
	readonly hurtEntity: Entity;
}

/**
 * 管理与实体受伤相关的回调函数。
 *
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加在实体受伤时调用的回调函数。
	 *
	 * Adds a callback that will be called when an entity is hurt.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: EntityHurtAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在实体受伤时调用的回调函数。
	 *
	 * Removes a callback from being called when an entity is hurt.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

/**
 * 表示一个实体的物品栏属性。
 *
 * Defines this entity's inventory properties.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
	 *
	 * Number of slots that this entity can gain per extra
	 * strength.
	 *
	 */
	readonly additionalSlotsPerStrength: number;
	/**
	 * @remarks
	 * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
	 *
	 * If true, the contents of this inventory can be removed by a
	 * hopper.
	 *
	 */
	readonly canBeSiphonedFrom: boolean;
	/**
	 * @remarks
	 * 表示实体的容器。若实体已被移除则为 `undefined`。
	 *
	 * Defines the container for this entity. The container will be
	 * undefined if the entity has been removed.
	 *
	 */
	readonly container?: Container;
	/**
	 * @remarks
	 * 表示实体容器的种类。
	 *
	 * Type of container this entity has.
	 *
	 */
	readonly containerType: string;
	/**
	 * @remarks
	 * 表示实体容器的槽位数量。
	 *
	 * Number of slots the container has.
	 *
	 */
	readonly inventorySize: number;
	/**
	 * @remarks
	 * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
	 *
	 * If true, the entity will not drop it's inventory on death.
	 *
	 */
	readonly "private": boolean;
	/**
	 * @remarks
	 * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
	 *
	 * If true, the entity's inventory can only be accessed by its
	 * owner or itself.
	 *
	 */
	readonly restrictToOwner: boolean;
	static readonly componentId = "minecraft:inventory";
}

/**
 * 表示该实体是一个婴儿。
 *
 * When added, this component signifies that this entity is a
 * baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_baby";
}

/**
 * 表示该实体处于充能状态。
 *
 * When added, this component signifies that this entity is
 * charged.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChargedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_charged";
}

/**
 * 添加此组件后，表示该实体当前携带着一个箱子。
 *
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_chested";
}

/**
 * 添加此组件后，表示可以使用染料改变该实体的颜色。
 *
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_dyeable";
}

/**
 * 添加此组件后，表示该实体在隐身时可以躲避敌对生物。
 *
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_hidden_when_invisible";
}

/**
 * 添加此组件后，表示该实体当前处于燃烧状态。
 *
 * When added, this component signifies that this entity this
 * currently on fire.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_ignited";
}

/**
 * 添加此组件后，表示该实体是一个掠夺者队长。
 *
 * When added, this component signifies that this entity is an
 * illager captain.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_illager_captain";
}

/**
 * 添加此组件后，此实体表示当前是乘骑状态。
 *
 * When added, this component signifies that this entity is
 * currently saddled.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_saddled";
}

/**
 * 添加此组件后，此实体表示当前处于震动状态。
 *
 * When added, this component signifies that this entity is
 * currently shaking.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShakingComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_shaking";
}

/**
 * 添加此组件后，此实体表示当前被修剪。
 *
 * When added, this component signifies that this entity is
 * currently sheared.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsShearedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_sheared";
}

/**
 * 添加此组件后，此实体表示可以堆叠。
 *
 * When added, this component signifies that this entity can be
 * stacked.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_stackable";
}

/**
 * 添加此组件后，此实体表示当前处于晕眩状态。
 *
 * When added, this component signifies that this entity is
 * currently stunned.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_stunned";
}

/**
 * 当添加时，此组件表示该实体当前已被驯服。
 *
 * When added, this component signifies that this entity is
 * currently tamed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsTamedComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:is_tamed";
}

/**
 * 若添加到实体上，则表示该实体在世界中表示一个自由漂浮的物品。
 * 可以通过 `itemStack` 属性获取实际的物品堆内容。
 *
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 世界中由此实体表示的物品堆。
	 *
	 * Item stack represented by this entity in the world.
	 *
	 * @throws
	 *
	 */
	readonly itemStack: ItemStack;
	static readonly componentId = "minecraft:item";
}

/**
 * @beta
 * 此类型可用于迭代一组实体。这意味着它可以在 `for...of` 语句、`Array.from(iterator)` 等语句中使用。
 *
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
	private constructor();
	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	[Symbol.iterator](): Iterator<Entity>;
	/**
	 * @remarks
	 * 检索此迭代中的下一个项目。结果的 `IteratorResult` 包含 `.done` 和 `.value` 属性，可以用来查看迭代中的下一个实体。
	 *
	 * Retrieves the next item in this iteration. The resulting
	 * IteratorResult contains .done and .value properties which
	 * can be used to see the next Entity in the iteration.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	next(): IteratorResult<Entity>;
}

/**
 * 定义此实体在岩浆中的基础移动速度。
 *
 * Defines the base movement speed in lava of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = "minecraft:lava_movement";
}

/**
 * 允许实体被拴住。定义实体被拴住时的条件和事件。
 *
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
	private constructor();

	/**
	 * @remarks
	 * 若另一实体可以通过连接自己的拴绳将该实体 ‘盗走’，则返回 `true`。
	 *
	 * Returns true if another entity can 'steal' the leashed
	 * entity by attaching their own leash to it.
	 */
	readonly canBeStolen: boolean;

	/**
	 * @remarks
	 * 拴绳变紧以限制移动的距离（以方块为单位）。
	 *
	 * Distance in blocks at which the leash stiffens, restricting
	 * movement.
	 */
	readonly hardDistance: number;

	/**
	 * @remarks
	 * 若该实体被拴住，则返回 `true`。
	 *
	 * Returns true if the entity is leashed.
	 */
	readonly isLeashed: boolean;

	/**
	 * @remarks
	 * 拴住该实体的实体。
	 *
	 * Entity that is holding the leash.
	 */
	readonly leashHolder?: Entity;

	/**
	 * @remarks
	 * 拴住该实体的实体的标识符。
	 *
	 * Identifier of entity that is holding the leash.
	 */
	readonly leashHolderEntityId?: string;

	/**
	 * @remarks
	 * 拴绳断裂的距离（以方块为单位）。
	 *
	 * Distance in blocks at which the leash breaks.
	 */
	readonly maxDistance: number;

	/**
	 * @remarks
	 * “弹簧”效应开始作用的距离（以方块为单位），以将该实体保持在拴住它的实体附近。
	 *
	 * Distance in blocks at which the 'spring' effect starts
	 * acting to keep this entity close to the entity that leashed
	 * it.
	 */
	readonly softDistance: number;

	static readonly componentId = "minecraft:leashable";

	/**
	 * @remarks
	 * 将该实体拴住到另一实体。
	 *
	 * Leashes this entity to another entity.
	 *
	 * @param leashHolder
	 * 要将该实体拴住到的实体。
	 *
	 * The entity to leash this entity to.
	 * @throws
	 * 如果要拴住的实体超出最大距离，且如果玩家已死亡或处于旁观者模式，则抛出错误。
	 *
	 * Throws if the entity to leash to is over the max distance,
	 * and if the player is dead or in spectator mode.
	 */
	leashTo(leashHolder: Entity): void;

	/**
	 * @remarks
	 * 如果该实体被拴住，则解除拴绳。
	 *
	 * Unleashes this entity if it is leashed to another entity.
	 */
	unleash(): void;
}

/**
 * 表示与加载世界内的实体相关的数据。当某个已卸载的区块被重新加载时，或当实体更改维度时，可能会发生这种情况。
 *
 * Contains data related to an entity loaded within the world.
 * This could happen when an unloaded chunk is reloaded, or
 * when an entity changes dimensions.
 */
export class EntityLoadAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 被加载的实体。
	 *
	 * Entity that was loaded.
	 */
	entity: Entity;
}

/**
 * 注册一个脚本事件处理程序，用于处理实体加载时的事件。
 *
 * Registers a script-based event handler for handling what
 * happens when an entity loads.
 */
export class EntityLoadAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 注册一个事件处理程序，用于处理实体加载时发生的事情。
	 *
	 * Method to register an event handler for what happens when an
	 * entity loads.
	 *
	 * @param callback
	 * 处理加载事件的函数。
	 *
	 * Function that handles the load event.
	 */
	subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;

	/**
	 * @remarks
	 * 注销之前订阅到订阅事件的方法。
	 *
	 * Unregisters a method that was previously subscribed to the
	 * subscription event.
	 *
	 * @param callback
	 * 要注销的原始函数。
	 *
	 * Original function that was passed into the subscribe event,
	 * that is to be unregistered.
	 */
	unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

/**
 * 附加的变体值。可用于进一步区分变体。
 *
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
	private constructor();

	/**
	 * @remarks
	 * 此实体的标记变体值。
	 *
	 * Value of the mark variant value for this entity.
	 */
	value: number;
	static readonly componentId = "minecraft:mark_variant";
}

/**
 * 添加后这种移动控制允许生物在水中游泳和在陆地上行走。
 *
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
	private constructor();

	static readonly componentId = "minecraft:movement.amphibious";
}

/**
 * 这个组件强调了实体的移动。
 *
 * This component accents the movement of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.basic";
}

/**
 * 定义该实体的常规移动速度。
 *
 * Defines the general movement speed of this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = "minecraft:movement";
}

/**
 * 添加此组件时，该控制方式使生物可以飞行。
 *
 * When added, this move control causes the mob to fly.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.fly";
}

/**
 * 添加此组件时，该控制方式使生物可以飞行、游泳、攀爬等。
 *
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.generic";
}

/**
 * 添加此组件时，该控制方式使生物可以滑行。
 *
 * When added, this movement control allows the mob to glide.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体转弯时的速度。
	 *
	 * Speed in effect when the entity is turning.
	 */
	readonly speedWhenTurning: number;
	/**
	 * @remarks
	 * 滑翔过程中的起始速度。
	 *
	 * Start speed during a glide.
	 */
	readonly startSpeed: number;
	static readonly componentId = "minecraft:movement.glide";
}

/**
 * 添加此组件时，该控制方式使生物可以悬浮。
 *
 * When added, this move control causes the mob to hover.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.hover";
}

/**
 * 当添加此组件时，移动控制会使生物在移动时以指定的跳跃延迟跳跃。
 *
 * Move control that causes the mob to jump as it moves with a specified delay between jumps.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.jump";
}

/**
 * 当添加此组件时，移动控制会使生物在移动时跳跃。
 *
 * When added, this move control causes the mob to hop as it moves.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
	private constructor();
	static readonly componentId = "minecraft:movement.skip";
}

/**
 * 当添加此组件时，移动控制会使生物左右摇摆，给人一种在游泳的感觉。
 *
 * When added, this move control causes the mob to sway side to side giving the impression it is swimming.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
	private constructor();

	/**
	 * 摇摆运动的幅度。
	 *
	 * Amplitude of the sway motion.
	 */
	readonly swayAmplitude: number;

	/**
	 * 摇摆的频率。
	 *
	 * Amount of sway frequency.
	 */
	readonly swayFrequency: number;

	static readonly componentId = "minecraft:movement.sway";
}

/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 蜘蛛那样）。
 *
 * Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.climb";
}

/**
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 蜘蛛那样）。
 *
 * Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 告诉寻路器在寻找路径时避免会造成伤害的方块。
	 *
	 * Tells the pathfinder to avoid blocks that cause damage when
	 * finding a path.
	 */
	readonly avoidDamageBlocks: boolean;
	/**
	 * @remarks
	 * 告诉寻路器在寻找路径时避免传送门（如下界传送门）。
	 *
	 * Tells the pathfinder to avoid portals (like nether portals)
	 * when finding a path.
	 */
	readonly avoidPortals: boolean;
	/**
	 * @remarks
	 * 寻路器在创建路径时是否应避免暴露在阳光下的方块。
	 *
	 * Whether or not the pathfinder should avoid tiles that are
	 * exposed to the sun when creating paths.
	 */
	readonly avoidSun: boolean;
	/**
	 * @remarks
	 * 告诉寻路器在创建路径时避免水。
	 *
	 * Tells the pathfinder to avoid water when creating a path.
	 */
	readonly avoidWater: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以跳出水面（像海豚一样）。
	 *
	 * Tells the pathfinder whether or not it can jump out of water
	 * (like a dolphin).
	 */
	readonly canBreach: boolean;
	/**
	 * @remarks
	 * 告诉寻路器可以穿过并破坏关闭的门。
	 *
	 * Tells the pathfinder that it can path through a closed door
	 * and break it.
	 */
	readonly canBreakDoors: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否能漂浮。
	 *
	 * Tells the pathfinder whether or not it can float.
	 */
	readonly canFloat: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否能跳上方块。
	 *
	 * Tells the pathfinder whether or not it can jump up blocks.
	 */
	readonly canJump: boolean;
	/**
	 * @remarks
	 * 告诉寻路器可以穿过关闭的门，并假设 AI 会打开门。
	 *
	 * Tells the pathfinder that it can path through a closed door
	 * assuming the AI will open the door.
	 */
	readonly canOpenDoors: boolean;
	/**
	 * @remarks
	 * 告诉寻路器可以穿过关闭的铁门，并假设 AI 会打开门。
	 *
	 * Tells the pathfinder that it can path through a closed iron
	 * door assuming the AI will open the door.
	 */
	readonly canOpenIronDoors: boolean;
	/**
	 * @remarks
	 * 路径是否可以通过门创建。
	 *
	 * Whether a path can be created through a door.
	 */
	readonly canPassDoors: boolean;
	/**
	 * @remarks
	 * 告诉寻路器它可以在空中开始寻路。
	 *
	 * Tells the pathfinder that it can start pathing when in the
	 * air.
	 */
	readonly canPathFromAir: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以在熔岩表面行走。
	 *
	 * Tells the pathfinder whether or not it can travel on the
	 * surface of the lava.
	 */
	readonly canPathOverLava: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以在水面上行走。
	 *
	 * Tells the pathfinder whether or not it can travel on the
	 * surface of the water.
	 */
	readonly canPathOverWater: boolean;
	/**
	 * @remarks
	 * 告诉寻路器在水中是否会受重力影响下沉。
	 *
	 * Tells the pathfinder whether or not it will be pulled down
	 * by gravity while in water.
	 */
	readonly canSink: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以在水中随意游动，并在游动路径上播放游泳动画。
	 *
	 * Tells the pathfinder whether or not it can path anywhere
	 * through water and plays swimming animation along that path.
	 */
	readonly canSwim: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以在水外的地面上行走。
	 *
	 * Tells the pathfinder whether or not it can walk on the
	 * ground outside water.
	 */
	readonly canWalk: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以像在地面上行走一样在熔岩中行走。
	 *
	 * Tells the pathfinder whether or not it can travel in lava
	 * like walking on ground.
	 */
	readonly canWalkInLava: boolean;
	/**
	 * @remarks
	 * 告诉寻路器是否可以在地面或水下行走。
	 *
	 * Tells the pathfinder whether or not it can walk on the
	 * ground or go underwater.
	 */
	readonly isAmphibious: boolean;
}

/**
 * 允许该实体像普通的恶魂一样在空中飞行生成路径。
 *
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.float";
}

/**
 * 允许该实体在空中生成路径（例如，像 Minecraft 的鹦鹉一样）。
 *
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.fly";
}

/**
 * 允许该实体通过步行、游泳、飞行和/或攀爬来生成路径，并在一个方块中跳上跳下。
 *
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.generic";
}

/**
 * 允许该实体在空中生成路径（例如，像 Minecraft 的蜜蜂一样）。防止它们从空中掉下来并进行预测性移动。
 *
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.hover";
}

/**
 * 允许该实体像普通生物一样通过步行和在方块上跳上跳下来生成路径。
 *
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
	private constructor();
	static readonly componentId = "minecraft:navigation.walk";
}

/**
 * @beta
 * 为实体添加 NPC 功能，例如自定义皮肤、名字和对话交互。
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 当玩家首次与 NPC 互动时打开的对话场景。
	 * The DialogueScene that is opened when players first interact
	 * with the NPC.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	defaultScene: string;
	/**
	 * @remarks
	 * 显示给玩家的 NPC 名字。
	 * The name of the NPC as it is displayed to players.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	name: string;
	/**
	 * @remarks
	 * NPC 将使用的皮肤索引。
	 * The index of the skin the NPC will use.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	skinIndex: number;
	static readonly componentId = "minecraft:npc";
}

/**
 * 表示一个实体处于燃烧状态。
 * When present on an entity, this entity is on fire.
 * @seeExample setOnFire.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 剩余的燃烧滴答数。
	 * The number of ticks remaining before the fire goes out.
	 *
	 */
	readonly onFireTicksRemaining: number;
	static readonly componentId = "minecraft:onfire";
}

/**
 * 投射物组件控制投射物实体的属性，并允许它被射向给定的方向。此组件在实体有 `minecraft:projectile` 组件时存在。
 * The projectile component controls the properties of a
 * projectile entity and allows it to be shot in a given
 * direction.
 * This component is present when the entity has the
 * minecraft:projectile component.
 * @seeExample shootArrow.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityProjectileComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 投射物在空中每滴答保持的速度比例。
	 * The fraction of the projectile's speed maintained every tick
	 * while traveling through air.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	airInertia: number;
	/**
	 * @remarks
	 * 若为 `true`，实体受伤时会着火。默认燃烧时间为 5 秒，可通过 `onFireTime` 属性修改。若实体具有免疫或处于湿润状态，将不会着火。
	 * If true, the entity will be set on fire when hurt. The
	 * default burn duration is 5 seconds. This duration can be
	 * modified via the onFireTime property. The entity will not
	 * catch fire if immune or if the entity is wet.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	catchFireOnHurt: boolean;
	/**
	 * @remarks
	 * 若为 `true`，投射物会在被玩家命中时产生暴击粒子效果。例如，玩家攻击潜影贝子弹时。
	 * If true, the projectile will spawn crit particles when hit
	 * by a player. E.g. Player attacking a Shulker bullet.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	critParticlesOnProjectileHurt: boolean;
	/**
	 * @remarks
	 * 若为 `true`，投射物受伤时会被破坏。例如，玩家攻击潜影贝子弹时。
	 * If true, the projectile will be destroyed when it takes
	 * damage. E.g. Player attacking a Shulker bullet.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	destroyOnProjectileHurt: boolean;
	/**
	 * @remarks
	 * 施加于投射物的重力。实体不在地面上时，每滴答从投射物的垂直位置变动中减去此量。数值越高，投射物下降得越快。若为负数，实体将上升而不是下降。
	 * The gravity applied to the projectile. When the entity is
	 * not on the ground, subtracts this amount from the
	 * projectile’s change in vertical position every tick. The
	 * higher the value, the faster the projectile falls. If
	 * negative, the entity will rise instead of fall.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	gravity: number;
	/**
	 * @remarks
	 * 投射物命中实体时播放的声音。
	 * The sound that plays when the projectile hits an entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	hitEntitySound?: string;
	/**
	 * @remarks
	 * 投射物命中方块时播放的声音。
	 * The sound that plays when the projectile hits a block.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	hitGroundSound?: string;
	/**
	 * @remarks
	 * 投射物命中目标时生成的粒子效果。
	 * The particle that spawns when the projectile hits something.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	hitParticle?: string;
	/**
	 * @remarks
	 * 若为 `true` 且天气为雷暴并且实体能直接看到天空，实体命中时将被闪电击中。例如，附有“引雷”魔咒的投掷三叉戟。
	 * If true and the weather is thunder and the entity has line
	 * of sight to the sky, the entity will be struck by lightning
	 * when hit. E.g. A thrown Trident with the Channeling
	 * enchantment.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	lightningStrikeOnHit: boolean;
	/**
	 * @remarks
	 * 投射物在液体中每滴答保持的速度比例。
	 * The fraction of the projectile's speed maintained every tick
	 * while traveling through a liquid.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	liquidInertia: number;
	/**
	 * @remarks
	 * 当 `catchFireOnHurt` 为 `true` 时，实体命中后将燃烧的秒数。
	 * Duration in seconds that the entity hit will be on fire for
	 * when catchFireOnHurt is set to true.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	onFireTime: number;
	/**
	 * @remarks
	 * 投射物的拥有者。用于确定投射物与哪些实体碰撞与造成伤害，也用于确定哪一个实体是攻击者。
	 * The owner of the projectile. This is used to determine what
	 * the projectile can collide with and damage. It also
	 * determines which entity is assigned as the attacker.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	owner?: Entity;
	/**
	 * @remarks
	 * 若为 `true`，投射物击中无伤害时会弹开。例如，生成中的凋灵。
	 * If true, the projectile will bounce off mobs when no damage
	 * is taken. E.g. A spawning wither.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	shouldBounceOnHit: boolean;
	/**
	 * @remarks
	 * 若为 `true`，投射物击中实体时会停止移动，好像已被阻挡。例如，抛掷的三叉戟命中后的行为。
	 * If true, the projectile will stop moving when an entity is
	 * hit as thought it had been blocked. E.g. Thrown trident on
	 * hit behavior.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	stopOnHit: boolean;
	static readonly componentId = "minecraft:projectile";
	/**
	 * @remarks
	 * 以给定的速度射出投射物。投射物将从当前位置射出。
	 * Shoots the projectile with a given velocity. The projectile
	 * will be shot from its current location.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param velocity
	 * 射出投射物的速度。控制投射物的速度和方向。
	 * The velocity to fire the projectile. This controls both the
	 * speed and direction which which the projectile will be shot.
	 * @param options
	 * 射击的可选配置。
	 * Optional configuration for the shoot.
	 * @throws
	 * 若组件或实体不存在，则抛出错误。
	 * Throws if the component or entity no longer exist.
	 */
	shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

/**
 * 设置实体可以通过的距离。
 * Sets the distance through which the entity can push through.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体的推进距离值。
	 * Value of the push through distances of this entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:push_through";
}

/**
 * 表示一个实体从世界中删除的事件数据（例如，实体因距离玩家太远而卸载）。
 * Data for an event that happens when an entity is removed
 * from the world (for example, the entity is unloaded because
 * it is not close to players.)
 */
export class EntityRemoveAfterEvent {
	private constructor();
	/**
	 * 表示被移除实体的 ID。
	 *
	 * Id of the entity that was removed.
	 */
	readonly removedEntityId: string;
	/**
	 * 表示被移除实体的类型标识符，例如 'minecraft:skeleton'。
	 *
	 * Identifier of the type of the entity removed - for example,
	 * 'minecraft:skeleton'.
	 */
	readonly typeId: string;
}

/**
 * 允许注册一个在实体被移除（例如卸载或在它们死亡后几秒）时触发的事件。
 *
 * Allows registration for an event that fires when an entity
 * is removed from the game (for example, unloaded, or a few
 * seconds after they are dead.)
 */
export class EntityRemoveAfterEventSignal {
	private constructor();
	/**
	 * 每次实体从游戏中删除时，都会调用您的函数。
	 *
	 * Will call your function every time an entity is removed from
	 * the game.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 要调用的函数。
	 *
	 * Function to call.
	 * @param options
	 * 该事件的附加过滤选项。
	 *
	 * Additional filtering options for this event.
	 * @returns
	 * 返回一个闭包，可用于后续的取消订阅操作。
	 *
	 * Returns a closure that can be used in subsequent unsubscribe
	 * operations.
	 */
	subscribe(callback: (arg0: EntityRemoveAfterEvent) => void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent) => void;
	/**
	 * 取消实体删除时调用的函数订阅。
	 *
	 * Unsubscribes your function from subsequent calls when an
	 * entity is removed.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

/**
 * 当实体从世界中被移除时（例如由于不接近玩家而被卸载）发生事件的数据。
 *
 * Data for an event that happens when an entity is being
 * removed from the world (for example, the entity is unloaded
 * because it is not close to players.)
 */
export class EntityRemoveBeforeEvent {
	private constructor();
	/**
	 * 被移除实体的引用。
	 *
	 * Reference to an entity that is being removed.
	 */
	readonly removedEntity: Entity;
}

/**
 * 允许注册一个在实体被移除时（例如卸载或在它们死亡后几秒）触发的事件。
 *
 * Allows registration for an event that fires when an entity
 * is being removed from the game (for example, unloaded, or a
 * few seconds after they are dead.)
 */
export class EntityRemoveBeforeEventSignal {
	private constructor();
	/**
	 * 每次实体被移除时，都会调用您的函数。
	 *
	 * Will call your function every time an entity is being
	 * removed from the game.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 要调用的函数。
	 *
	 * Function to call.
	 * @returns
	 * 返回一个闭包，可用于后续的取消订阅操作。
	 *
	 * Returns a closure that can be used in subsequent unsubscribe
	 * operations.
	 */
	subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
	/**
	 * 取消实体移除时调用的函数订阅。
	 *
	 * Unsubscribes your function from subsequent calls when an
	 * entity is being removed.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

/**
 * 添加该组件后，实体具备被另一个实体骑乘的能力。
 *
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 * @seeExample minibiomes.ts
 */
export class EntityRideableComponent extends EntityComponent {
	private constructor();
	/**
	 * 控制该实体的座位的从零开始的索引。
	 *
	 * Zero-based index of the seat that can used to control this
	 * entity.
	 */
	readonly controllingSeat: number;
	/**
	 * 若实体处于蹲伏状态，则不支持交互。
	 *
	 * Determines whether interactions are not supported if the
	 * entity is crouching.
	 */
	readonly crouchingSkipInteract: boolean;
	/**
	 * 当玩家希望骑乘该实体时显示的一组文本（常用于触摸屏控件）。
	 *
	 * Set of text that should be displayed when a player is
	 * looking to ride on this entity (commonly with touch-screen
	 * controls).
	 */
	readonly interactText: string;
	/**
	 * 作为乘客的生物的最大宽度。
	 *
	 * The max width a mob can be to be a passenger.
	 */
	readonly passengerMaxWidth: number;
	/**
	 * 若为 `true`，此实体会将符合 `family_types` 的实体拉入任何可用的座位。
	 *
	 * If true, this entity will pull in entities that are in the
	 * correct family_types into any available seat.
	 */
	readonly pullInEntities: boolean;
	/**
	 * 若为 `true`，该实体会在被骑乘者查看时选中。
	 *
	 * If true, this entity will be picked when looked at by the
	 * rider.
	 */
	readonly riderCanInteract: boolean;
	/**
	 * 定义该实体的骑乘者座位数量。
	 *
	 * Number of seats for riders defined for this entity.
	 */
	readonly seatCount: number;
	static readonly componentId = "minecraft:rideable";
	/**
	 * 将一个实体作为骑乘者添加到该实体上。
	 *
	 * Adds an entity to this entity as a rider.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param rider
	 * 将成为该实体骑乘者的实体。
	 *
	 * Entity that will become the rider of this entity.
	 * @returns
	 * 如果骑乘者实体成功添加，则返回 `true`。
	 *
	 * True if the rider entity was successfully added.
	 * @throws This function can throw errors.
	 * @seeExample minibiomes.ts
	 */
	addRider(rider: Entity): boolean;
	/**
	 * 驱逐该实体的指定骑乘者。
	 *
	 * Ejects the specified rider of this entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param rider
	 * 需要从该实体上驱逐的实体。
	 *
	 * Entity that should be ejected from this entity.
	 * @throws This function can throw errors.
	 */
	ejectRider(rider: Entity): void;
	/**
	 * 驱逐该实体的所有骑乘者。
	 *
	 * Ejects all riders of this entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	ejectRiders(): void;
	/**
	 * 一个字符串列表，包含该实体可以作为骑乘者的实体类型。
	 *
	 * A string-list of entity types that this entity can support
	 * as riders.
	 *
	 * @throws This function can throw errors.
	 */
	getFamilyTypes(): string[];
	/**
	 * 获取当前骑乘该实体的所有实体的列表。
	 *
	 * Gets a list of the all the entities currently riding this
	 * entity.
	 *
	 * @throws This function can throw errors.
	 */
	getRiders(): Entity[];
	/**
	 * 获取骑乘该实体的每个位置上的实体及其数量的列表。
	 *
	 * Gets a list of positions and number of riders for each
	 * position for entities riding this entity.
	 *
	 * @throws This function can throw errors.
	 */
	getSeats(): Seat[];
}

/**
 * 当某实体骑乘另一实体时，该组件会被添加到该实体。
 *
 * This component is added to any entity when it is riding
 * another entity.
 */
export class EntityRidingComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此实体当前所骑乘的另一实体。
	 *
	 * The entity this entity is currently riding on.
	 *
	 * @throws This function can throw errors.
	 */
	readonly entityRidingOn: Entity;
	static readonly componentId = "minecraft:riding";
}

/**
 * 设置实体的视觉大小。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体上设置的缩放属性的当前值。
	 *
	 * Current value for the scale property set on entities.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:scale";
}

/**
 * 皮肤 ID 值。可以用来区分不同的皮肤，例如村民的基本皮肤。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 返回实体皮肤 ID 标识符的值。
	 *
	 * Returns the value of the skin Id identifier of the entity.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:skin_id";
}

/**
 * 包含与实体在世界中生成相关的数据。
 * @seeExample logEntitySpawnEvent.ts
 */
export class EntitySpawnAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 初始化原因（生成、出生等）。
	 *
	 * Initialization cause (Spawned, Born ...).
	 *
	 */
	readonly cause: EntityInitializationCause;
	/**
	 * @remarks
	 * 生成的实体。
	 *
	 * Entity that was spawned.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 */
	entity: Entity;
}

/**
 * 注册一个脚本事件处理器，用于处理实体生成时发生的事件。
 */
export class EntitySpawnAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 注册一个事件处理器，用于处理实体生成时发生的事件。
	 *
	 * Method to register an event handler for what happens when an
	 * entity spawns.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 处理生成事件的函数。
	 * Function that handles the spawn event.
	 * @seeExample logEntitySpawnEvent.ts
	 */
	subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
	/**
	 * @remarks
	 * 注销之前订阅到订阅事件的方法。
	 *
	 * Unregisters a method that was previously subscribed to the
	 * subscription event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 传入订阅事件的原始函数，将被注销。
	 * Original function that was passed into the subscribe event,
	 * that is to be unregistered.
	 */
	unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

/**
 * 定义实体携带物品的能力。具有更高力量的实体将拥有更高的携带能力和更多的物品栏。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此实体的最大力量，由实体类型定义。
	 *
	 * Maximum strength of this entity, as defined in the entity
	 * type definition.
	 */
	readonly max: number;
	/**
	 * @remarks
	 * 当前设置的实体力量组件值。
	 *
	 * Current value of the strength component that has been set
	 * for entities.
	 */
	readonly value: number;
	static readonly componentId = "minecraft:strength";
}

/**
 * 定义了玩家驯服实体的规则。
 *
 * Defines the rules for an entity to be tamed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 返回一组可以用来驯服该实体的物品。
	 *
	 * Returns a set of items that can be used to tame this entity.
	 */
	readonly getTameItems: ItemStack[];
	/**
	 * @remarks
	 * 若实体被玩家驯服则返回 true。
	 *
	 * Returns true if the entity is tamed by player.
	 */
	readonly isTamed: boolean;
	/**
	 * @remarks
	 * 每次使用物品驯服实体的几率，在 0.0 和 1.0 之间，其中 1.0 表示 100%。
	 *
	 * The chance of taming the entity with each item use between
	 * 0.0 and 1.0, where 1.0 is 100%
	 */
	readonly probability: number;
	/**
	 * @remarks
	 * 返回驯服该实体的玩家，若实体未被驯服则返回 `undefined`。
	 *
	 * Returns the player that has tamed the entity, or 'undefined'
	 * if entity is not tamed.
	 */
	readonly tamedToPlayer?: Player;
	/**
	 * @remarks
	 * 返回驯服该实体的玩家 ID，若实体未被驯服则返回 `undefined`。
	 *
	 * Returns the id of player that has tamed the entity, or
	 * 'undefined' if entity is not tamed.
	 */
	readonly tamedToPlayerId?: string;
	static readonly componentId = "minecraft:tameable";
	/**
	 * @remarks
	 * 将此实体设为由指定玩家驯服。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Set this entity as tamed by the given player.
	 *
	 * @param player
	 * 要驯服该实体的玩家。
	 * The player that this entity should be tamed by.
	 *
	 * @returns
	 * 返回 true 表示实体被驯服。
	 * Returns true if the entity was tamed.
	 */
	tame(player: Player): boolean;
}

/**
 * 包含基于骑乘实体来驯服可骑乘实体的选项。
 *
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 若实体被驯服则返回 true。
	 *
	 * Returns true if the entity is tamed.
	 */
	readonly isTamed: boolean;
	/**
	 * @remarks
	 * 若实体被玩家驯服则返回 true。
	 *
	 * Returns true if the entity is tamed by a player.
	 */
	readonly isTamedToPlayer: boolean;
	/**
	 * @remarks
	 * 返回驯服该实体的玩家，若实体未被玩家驯服则返回 `undefined`。
	 *
	 * Returns the player that has tamed the entity, or 'undefined'
	 * if entity is not tamed by a player.
	 */
	readonly tamedToPlayer?: Player;
	/**
	 * @remarks
	 * 返回驯服该实体的玩家 ID，若实体未被驯服则返回 `undefined`。
	 *
	 * Returns the id of player that has tamed the entity, or
	 * 'undefined' if entity is not tamed.
	 */
	readonly tamedToPlayerId?: string;
	static readonly componentId = "minecraft:tamemount";
	/**
	 * @remarks
	 * 将此可骑乘实体设为被驯服状态。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets this rideable entity as tamed.
	 *
	 * @param showParticles
	 * 是否在驯服实体时显示效果粒子。
	 * Whether to show effect particles when this entity is tamed.
	 */
	tame(showParticles: boolean): void;
	/**
	 * @remarks
	 * 将此可骑乘实体设为由指定玩家驯服。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets this rideable entity as tamed by the given player.
	 *
	 * @param showParticles
	 * 是否在驯服实体时显示效果粒子。
	 * Whether to show effect particles when this entity is tamed.
	 *
	 * @param player
	 * 要驯服该实体的玩家。
	 * The player that this entity should be tamed by.
	 *
	 * @returns
	 * 返回 true 表示实体被驯服。
	 * Returns true if the entity was tamed.
	 */
	tameToPlayer(showParticles: boolean, player: Player): boolean;
}

/**
 * 表示实体类型的相关信息。
 *
 * Represents information about a type of entity.
 */
export class EntityType {
	private constructor();
	/**
	 * @remarks
	 * 此实体类型的标识符，例如 'minecraft:skeleton'。
	 *
	 * Identifier of this entity type - for example,
	 * 'minecraft:skeleton'.
	 */
	readonly id: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTypeFamilyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:type_family";
	getTypeFamilies(): string[];
	hasTypeFamily(typeFamily: string): boolean;
}

/**
 * @beta
 * 一个遍历可用实体类型的迭代器。
 *
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
	private constructor();
	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot call this function in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	[Symbol.iterator](): Iterator<EntityType>;
	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot call this function in read-only mode, see {@link WorldBeforeEvents}.
	 *
	 */
	next(): IteratorResult<EntityType>;
}

/**
 * 用于访问当前世界中可用的所有实体类型。
 *
 * Used for accessing all entity types currently available for
 * use within the world.
 */
export class EntityTypes {
	private constructor();
	/**
	 * @remarks
	 * 使用基于字符串的标识符检索实体类型。
	 *
	 * @remarks
	 * Retrieves an entity type using a string-based identifier.
	 *
	 */
	static get(identifier: string): EntityType | undefined;
	/**
	 * @remarks
	 * 检索世界中的所有实体类型的集合。
	 *
	 * @remarks
	 * Retrieves a set of all entity types within this world.
	 *
	 */
	static getAll(): EntityType[];
}

/**
 * 定义此实体在水下的一般移动速度。
 *
 * Defines the general movement speed underwater of this
 * entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = "minecraft:underwater_movement";
}

/**
 * 用于区分某实体变种的组件组与其他实体的组件组。（例如，豹猫、村民）。
 *
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 当前作为组件指定的实体变种值。
	 *
	 * @remarks
	 * Current value for variant for this entity, as specified via
	 * components.
	 *
	 * @throws 使用此属性时可能会引发错误。
	 */
	readonly value: number;
	static readonly componentId = "minecraft:variant";
}

/**
 * 添加此组件时，表示此实体想要成为骑手。
 *
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:wants_jockey";
}

/**
 * 包含关于发生的爆炸的描述信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 爆炸发生的维度。
	 *
	 * Dimension where the explosion has occurred.
	 */
	readonly dimension: Dimension;
	/**
	 * @remarks
	 * 爆炸的可选来源。
	 *
	 * Optional source of the explosion.
	 */
	readonly source?: Entity;
	/**
	 * @remarks
	 * 受此爆炸事件影响的一组方块。
	 *
	 * A collection of blocks impacted by this explosion event.
	 */
	getImpactedBlocks(): Block[];
}

/**
 * 管理在爆炸发生时连接的回调函数。
 *
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个当爆炸发生时会被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called when an explosion
	 * occurs.
	 */
	subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个当爆炸发生时会被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called when an explosion
	 * occurs.
	 */
	unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

/**
 * 包含有关已发生爆炸的信息。
 *
 * Contains information regarding an explosion that has
 * happened.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则取消爆炸事件。
	 *
	 * If set to true, cancels the explosion event.
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 更新受此爆炸事件影响的方块集合。
	 *
	 * Updates a collection of blocks impacted by this explosion
	 * event.
	 *
	 * @param blocks
	 * 受此爆炸事件影响的新方块列表。
	 *
	 * New list of blocks that are impacted by this explosion.
	 */
	setImpactedBlocks(blocks: Block[]): void;
}

/**
 * 管理在爆炸发生前连接的回调函数。
 *
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class ExplosionBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在爆炸发生前会被调用的回调函数。该回调函数可以选择性地更改或取消爆炸行为。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called when before an explosion
	 * occurs. The callback can optionally change or cancel
	 * explosion behavior.
	 */
	subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个会在发生爆炸前被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called from before when an
	 * explosion would occur.
	 */
	unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

/**
 * 作为 Healable 组件的一部分，表示可以喂给实体以产生健康效果的特定物品。
 *
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
	private constructor();
	/**
	 * @remarks
	 * 当喂给实体此物品时，该实体获得的健康量。这个数值是一个从 0 开始的整数。示例值可以高达 40。
	 *
	 * The amount of health this entity gains when fed this item.
	 * This number is an integer starting at 0. Sample values can
	 * go as high as 40.
	 */
	readonly healAmount: number;
	/**
	 * @remarks
	 * 可以喂给实体的物品类型标识符。如果未指定命名空间，则假定为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
	 *
	 * Identifier of type of item that can be fed. If a namespace
	 * is not specified, 'minecraft:' is assumed. Example values
	 * include 'wheat' or 'golden_apple'.
	 */
	readonly item: string;
	/**
	 * @remarks
	 * 作为 Healable 组件的一部分，一组可选的副作用，这些副作用可能会由于喂给某物品而发生。
	 *
	 * As part of the Healable component, an optional collection of
	 * side effects that can occur from being fed an item.
	 */
	getEffects(): FeedItemEffect[];
}

/**
 * 表示由于喂食物品给实体而产生的效果。
 *
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
	private constructor();
	/**
	 * @remarks
	 * 获取可能应用于此效果的增强器。
	 * 有效值是从 0 开始的整数 - 但通常在 0 到 4 之间。
	 *
	 * Gets an amplifier that may have been applied to this effect.
	 * Valid values are integers starting at 0 and up - but usually
	 * ranging between 0 and 4.
	 *
	 */
	readonly amplifier: number;

	/**
	 * @remarks
	 * 实体被喂食此物品时应用该效果的几率。有
	 * 效值范围在 0 到 1 之间。
	 *
	 * Chance that this effect is applied as a result of the entity
	 * being fed this item. Valid values range between 0 and 1.
	 *
	 */
	readonly chance: number;

	/**
	 * @remarks
	 * 获取此效果的持续时间（以刻为单位）。
	 *
	 * Gets the duration, in ticks, of this effect.
	 *
	 */
	readonly duration: number;

	/**
	 * @remarks
	 * 获取要应用的效果标识符。例如，“fire_resistance” 或 “regeneration”。
	 *
	 * Gets the identifier of the effect to apply. Example values
	 * include 'fire_resistance' or 'regeneration'.
	 *
	 */
	readonly name: string;
}

/**
 * @beta
 * 表示事件发生时的一组筛选器。
 *
 * Represents a set of filters for when an event should occur.
 */
export class FilterGroup {
	private constructor();
}

/**
 * 表示与流体容器相关的常量。
 *
 * Represents constants related to fluid containers.
 */
export class FluidContainer {
	private constructor();

	/**
	 * @remarks
	 * 表示流体容器的最大填充量的常量。
	 *
	 * Constant that represents the maximum fill level of a fluid
	 * container.
	 *
	 */
	static readonly maxFillLevel = 6;

	/**
	 * @remarks
	 * 表示流体容器的最小填充量的常量。
	 *
	 * Constant that represents the minimum fill level of a fluid
	 * container.
	 *
	 */
	static readonly minFillLevel = 0;
}

/**
 * 包含有关已更改的 world.gameRules 属性的信息。
 *
 * Contains information regarding a changed world.gameRules
 * property.
 */
export class GameRuleChangeAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 与已更改的 world.gameRules 属性相关的规则标识符。
	 *
	 * The rule identifier pertaining to the changed
	 * world.gameRules property.
	 *
	 */
	readonly rule: GameRule;

	/**
	 * @remarks
	 * world.gameRules 属性在更改后的值。
	 *
	 * The value of the world.gameRules property after being
	 * changed.
	 *
	 */
	readonly value: boolean | number;
}

/**
 * 管理连接到 world.gameRules 属性更改时的回调。
 *
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 */
export class GameRuleChangeAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 添加一个当 world.gameRules 属性更改时被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called when a world.gameRules
	 * property is changed.
	 *
	 */
	subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;

	/**
	 * @remarks
	 * 移除一个当 world.gameRules 属性更改时被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called when a world.gameRules
	 * property is changed.
	 *
	 */
	unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

/**
 * 表示世界体验的游戏规则。
 *
 * Represents the game rules for a world experience.
 */
export class GameRules {
	private constructor();
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	commandBlockOutput: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	commandBlocksEnabled: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doDayLightCycle: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doEntityDrops: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doFireTick: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doImmediateRespawn: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doInsomnia: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doLimitedCrafting: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doMobLoot: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doMobSpawning: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doTileDrops: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	doWeatherCycle: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	drowningDamage: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	fallDamage: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	fireDamage: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	freezeDamage: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	functionCommandLimit: number;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	keepInventory: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	maxCommandChainLength: number;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	mobGriefing: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	naturalRegeneration: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	playersSleepingPercentage: number;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	projectilesCanBreakBlocks: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	pvp: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	randomTickSpeed: number;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	recipesUnlock: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	respawnBlocksExplode: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	sendCommandFeedback: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showBorderEffect: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showCoordinates: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showDaysPlayed: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showDeathMessages: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showRecipeMessages: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	showTags: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	spawnRadius: number;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	tntExplodes: boolean;
	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * @remarks
	 * Cannot modify this property in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	tntExplosionDropDecay: boolean;
}

/**
 * 提供一个灵活的接口，让调用者订阅按钮被按下时触发的事件。
 *
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires when a button is pushed.
 */
export class IButtonPushAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅此事件。
	 *
	 * Subscribes to the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
	/**
	 * @remarks
	 * 取消订阅此事件。
	 *
	 * Unsubscribes from the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

/**
 * 提供一个灵活的接口，让调用者订阅拉杆使用完毕时触发的事件。
 *
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a lever is used.
 */
export class ILeverActionAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅此事件。
	 *
	 * Subscribes to the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
	/**
	 * @remarks
	 * 取消订阅此事件。
	 *
	 * Unsubscribes from the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

/**
 * @rc
 * 包含客户端实例的输入信息。
 *
 * Contains the input information for a client instance.
 */
export class InputInfo {
	private constructor();
	/**
	 * @remarks
	 * 玩家使用的最后一个输入模式。
	 *
	 * The last input mode used by the player.
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link InvalidEntityError}
	 */
	readonly lastInputModeUsed: InputMode;
	/**
	 * @remarks
	 * 玩家触摸输入是否只影响触栏。
	 *
	 * Whether the player touch input only affects the touchbar or
	 * not.
	 *
	 * @throws
	 *
	 * {@link InvalidEntityError}
	 */
	readonly touchOnlyAffectsHotbar: boolean;
	/**
	 * @beta
	 *
	 * @throws
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link InvalidEntityError}
	 */
	getButtonState(button: InputButton): ButtonState;
	/**
	 * @beta
	 *
	 * @throws
	 *
	 * {@link InvalidEntityError}
	 */
	getMovementVector(): Vector2;
}

/**
 * 提供一个灵活的接口，让调用者订阅玩家加入世界后触发的事件。
 *
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player joins a world.
 */
export class IPlayerJoinAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅此事件。
	 *
	 * Subscribes to the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
	/**
	 * @remarks
	 * 取消订阅此事件。
	 *
	 * Unsubscribes from the event.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Cannot call this function in read-only mode. See {@link WorldBeforeEvents}.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

/**
 * 提供一个灵活的接口，让调用者订阅玩家离开世界后触发的事件。
 *
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player leaves a world.
 */
export class IPlayerLeaveAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅此事件。
	 *
	 * Subscribes to the event.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
	/**
	 * @remarks
	 * 取消订阅此事件。
	 *
	 * Unsubscribes from the event.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

/**
 * 提供了一个灵活的接口，用于订阅在玩家生成后触发的事件。
 *
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player spawns.
 */
export class IPlayerSpawnAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 订阅此事件。
	 *
	 * Subscribes to the event.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
	/**
	 * @remarks
	 * 取消订阅此事件。
	 *
	 * Unsubscribes from the event.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

/**
 * 包含与可充能物品完成充能相关的信息。
 *
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 返回已完成充能的物品堆栈。
	 *
	 * Returns the item stack that has completed charging.
	 *
	 */
	readonly itemStack: ItemStack;
	/**
	 * @remarks
	 * 返回触发此物品事件的来源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
	/**
	 * @remarks
	 * 返回剩余的持续时间（以刻为单位），直到充能完成其周期。
	 *
	 * Returns the time, in ticks, for the remaining duration left
	 * before the charge completes its cycle.
	 *
	 */
	readonly useDuration: number;
}

/**
 * 管理与可充能物品完成充能相关的回调。
 *
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteUseAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个将在可充能物品完成充能时调用的回调。
	 *
	 * Adds a callback that will be called when a chargeable item
	 * completes charging.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
	/**
	 * @remarks
	 * 移除将在可充能物品完成充能时调用的回调。
	 *
	 * Removes a callback from being called when a chargeable item
	 * completes charging.
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

/**
 * 包含与可充能物品完成充能相关的信息。
 *
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseEvent {
	private constructor();
	/**
	 * @remarks
	 * 返回已完成充能的物品堆栈。
	 *
	 * Returns the item stack that has completed charging.
	 *
	 */
	readonly itemStack: ItemStack;
	/**
	 * @remarks
	 * 返回触发此物品事件的来源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
}

/**
 * 表示项目组件的基类。
 *
 * Base class for item components.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponent extends Component {
	private constructor();
}

/**
 * 描述了在击打实体之前物品的耐久度信息。
 *
 * Contains information regarding an item before it is damaged from hitting an entity.
 */
export class ItemComponentBeforeDurabilityDamageEvent {
	private constructor();
	/**
	 * 表示攻击的实体。
	 *
	 * @remarks
	 * The attacking entity.
	 *
	 */
	readonly attackingEntity: Entity;
	/**
	 * 描述了事件发生时对物品耐久度的伤害。
	 *
	 * @remarks
	 * The damage applied to the item's durability when the event occurs.
	 *
	 */
	durabilityDamage: number;
	/**
	 * 表示被击中的实体。
	 *
	 * @remarks
	 * The entity being hit.
	 *
	 */
	readonly hitEntity: Entity;
	/**
	 * 表示用于击中实体的物品堆。
	 *
	 * @remarks
	 * The item stack used to hit the entity.
	 *
	 */
	itemStack?: ItemStack;
}

/**
 * 描述了通过组件完成充能的物品的相关信息。
 *
 * Contains information related to a chargeable item completing being charged via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
	private constructor();
}

/**
 * 描述了被消耗的食物物品的相关信息。
 *
 * Contains information related to a food item being consumed.
 */
export class ItemComponentConsumeEvent {
	private constructor();
	/**
	 * 表示已被消耗的物品堆。
	 *
	 * @remarks
	 * The item stack that was consumed.
	 *
	 */
	readonly itemStack: ItemStack;
	/**
	 * 表示消耗物品的源实体。
	 *
	 * @remarks
	 * The source entity that consumed the item.
	 *
	 */
	readonly source: Entity;
}

/**
 * 描述了用物品击打实体的相关信息。
 *
 * Contains information regarding when an item is used to hit an entity.
 */
export class ItemComponentHitEntityEvent {
	private constructor();
	/**
	 * 表示攻击的实体。
	 *
	 * @remarks
	 * The attacking entity.
	 *
	 */
	readonly attackingEntity: Entity;
	/**
	 * 描述攻击是否有效或产生效果。
	 *
	 * @remarks
	 * Whether the hit landed or had any effect.
	 *
	 */
	readonly hadEffect: boolean;
	/**
	 * 表示被击中的实体。
	 *
	 * @remarks
	 * The entity being hit.
	 *
	 */
	readonly hitEntity: Entity;
	/**
	 * 表示用于击中实体的物品堆。
	 *
	 * @remarks
	 * The item stack used to hit the entity.
	 *
	 */
	readonly itemStack?: ItemStack;
}

/**
 * 描述了使用物品采矿的相关信息。
 *
 * Contains information regarding the mining of a block using an item.
 */
export class ItemComponentMineBlockEvent {
	private constructor();
	/**
	 * 表示受到该事件影响的方块。
	 *
	 * The block impacted by this event.
	 *
	 */
	readonly block: Block;
	/**
	 * 表示用于挖掘该方块的物品堆。
	 *
	 * The item stack used to mine the block.
	 *
	 */
	readonly itemStack?: ItemStack;
	/**
	 * 表示被挖掘的方块状态。
	 *
	 * The block permutation that was mined.
	 *
	 */
	readonly minedBlockPermutation: BlockPermutation;
	/**
	 * 表示挖掘方块的实体。
	 *
	 * The entity that mined the block.
	 *
	 */
	readonly source: Entity;
}

/**
 * 表示提供注册物品自定义组件功能的类。
 *
 * Provides the functionality for registering custom components
 * for items.
 */
export class ItemComponentRegistry {
	private constructor();
	/**
	 * 注册一个可以在物品 JSON 配置中使用的自定义组件。
	 *
	 * Registers an item custom component that can be used in item
	 * JSON configuration.
	 *
	 * @param name
	 * 表示该自定义组件的 ID。必须具有命名空间。该 ID 可以在物品的 JSON 配置中的 `minecraft:custom_components` 项中指定。
	 *
	 * The id that represents this custom component. Must have a
	 * namespace. This id can be specified in a item's JSON
	 * configuration under the 'minecraft:custom_components' item
	 * component.
	 *
	 * @param itemCustomComponent
	 * 表示当事件发生在使用该自定义组件 id 的物品上时调用的一组事件函数。
	 *
	 * The collection of event functions that will be called when
	 * the event occurs on an item using this custom component id.
	 *
	 * @throws
	 * 若注册自定义组件时发生错误则会抛出异常。
	 *
	 * This function can throw errors.
	 *
	 * {@link CustomComponentInvalidRegistryError}
	 *
	 * {@link CustomComponentNameError}
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link ItemCustomComponentAlreadyRegisteredError}
	 *
	 * {@link ItemCustomComponentReloadNewComponentError}
	 *
	 * {@link ItemCustomComponentReloadNewEventError}
	 *
	 * {@link ItemCustomComponentReloadVersionError}
	 */
	registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

/**
 * 表示关于物品使用的相关信息。
 *
 * Contains information regarding the use of an item.
 */
export class ItemComponentUseEvent {
	private constructor();
	/**
	 * 表示物品使用时的物品堆。
	 *
	 * The item stack when the item was used.
	 *
	 */
	readonly itemStack?: ItemStack;
	/**
	 * 表示使用物品的玩家。
	 *
	 * The player who used the item.
	 *
	 */
	readonly source: Player;
}

/**
 * 表示关于通过组件在方块上使用物品的相关信息。
 *
 * Contains information regarding the use of an item on a block
 * via a component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
	private constructor();
	/**
	 * 表示在方块上使用物品的实体。
	 *
	 * The entity that used the item on the block.
	 *
	 */
	readonly source: Entity;
	/**
	 * 表示物品使用所在的方块状态。
	 *
	 * The block permutation that the item was used on.
	 *
	 */
	readonly usedOnBlockPermutation: BlockPermutation;
}

/**
 * @rc
 * 表示当物品出现时，如果堆肥概率在 [1 - 100] 范围内，可以在堆肥桶中堆肥。
 *
 * When present, the item can be composted in the composter
 * block if the composting chance is in the range [1 - 100].
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
	private constructor();
	/**
	 * 表示物品在堆肥桶中生成堆肥层的概率。注意，该 API 会返回原版物品的堆肥概率，即使它们并未使用堆肥组件。
	 *
	 * This is the percent chance of the item composting in the
	 * composter block and generating a compost layer. Note this
	 * api will also return the composting chance for vanilla items
	 * that are compostable but do not use the compostable item
	 * component.
	 *
	 * @throws
	 * 若值不在 [1 - 100] 范围内则会抛出异常。
	 *
	 * Throws if value outside the range [1 - 100]
	 *
	 * {@link Error}
	 */
	readonly compostingChance: number;
	static readonly componentId = "minecraft:compostable";
}

/**
 * 表示物品使用冷却组件。当出现在物品上时，表示该物品被实体使用后会有冷却效果。
 * 注意，若使用后不会进入冷却，原版物品会获取到没有实际作用的该组件。
 *
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCooldownComponent extends ItemComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示物品的冷却类别。
	 *
	 * Represents the cooldown category that this item is
	 * associated with.
	 *
	 * @throws This property can throw when used.
	 */
	readonly cooldownCategory: string;

	/**
	 * @remarks
	 * 物品冷却所需的时间，单位为刻。
	 *
	 * Amount of time, in ticks, it will take this item to
	 * cooldown.
	 *
	 * @throws This property can throw when used.
	 */
	readonly cooldownTicks: number;

	static readonly componentId = "minecraft:cooldown";

	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getCooldownTicksRemaining(player: Player): number;

	/**
	 * @remarks
	 * 若物品属于传入的冷却类别，则返回 true，否则返回 false。
	 *
	 * Will return true if the item is the cooldown category passed
	 * in and false otherwise.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param cooldownCategory
	 * 可能与该物品相关的冷却类别。
	 *
	 * The cooldown category that might be associated with this
	 * item.
	 *
	 * @returns
	 * 若物品属于传入的冷却类别，则返回 true。
	 *
	 * True if the item is the given cooldown category.
	 *
	 * @throws This function can throw errors.
	 */
	isCooldownCategory(cooldownCategory: string): boolean;

	/**
	 * @remarks
	 * 开始物品的冷却周期。
	 * 如果物品已在冷却中，将重新开始冷却。
	 *
	 * Starts a new cooldown period for this item.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	startCooldown(player: Player): void;
}

/**
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 *
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 * @seeExample giveHurtDiamondSword.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDurabilityComponent extends ItemComponent {
	private constructor();
	/**
	 * @remarks
	 * 此物品当前的损坏值。
	 * 物品当前耐久度为 `maxDurability - damage`。
	 * 当被设置为负数，`Infinity`，`NaN`等值时，值为 0。
	 *
	 * Returns the current damage level of this particular item.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 */
	damage: number;

	/**
	 * @remarks
	 * 表示该物品在损坏前可以承受的损坏值。
	 *
	 * Represents the amount of damage that this item can take
	 * before breaking.
	 *
	 * @throws This property can throw when used.
	 */
	readonly maxDurability: number;

	static readonly componentId = "minecraft:durability";

	/**
	 * @remarks
	 * 返回根据 `damageRange` 属性生成的最大损坏概率，
	 * 附带一个耐久附魔等级作为可选参数。
	 *
	 * Returns the maximum chance that this item would be damaged
	 * using the damageRange property, given an unbreaking
	 * enchantment level.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param unbreakingEnchantmentLevel
	 * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
	 * 传入的 `unbreakingEnchantmentLevel` 参数必须介于 [0, 3]。
	 *
	 * Unbreaking factor to consider in factoring the damage
	 * chance. Incoming unbreaking parameter must be within the
	 * range [0, 3].
	 *
	 * @returns 使用时的最大损坏概率。
	 *
	 * @returns
	 * The maximum damage chance when used.
	 *
	 * @throws
	 * 若 `unbreakingEnchantmentLevel` 参数未在范围内时，抛出 `TypeError` 。
	 *
	 * Throws a `TypeError` if the `unbreakingEnchantmentLevel` parameter is out of range.
	 */
	getDamageChance(unbreakingEnchantmentLevel?: number): number;

	/**
	 * @remarks
	 * 返回用于计算物品损失耐久的概率范围。最终物品损失耐久的概率将落在此范围中。
	 *
	 * A range of numbers that is used to calculate the damage
	 * chance for an item. The damage chance will fall within this
	 * range.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getDamageChanceRange(): minecraftcommon.NumberRange;
}

/**
 * @beta
 * 当物品具有该组件时，该物品可以染色。
 *
 * When present on an item, this item can be dyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
	private constructor();
	/**
	 * @remarks
	 * 设置并返回物品当前的颜色。
	 *
	 * Sets and returns the current color of the item.
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 */
	color?: RGB;

	/**
	 * @remarks
	 * 返回物品的默认颜色。
	 *
	 * Returns the default color of the item.
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly defaultColor?: RGB;

	static readonly componentId = "minecraft:dyeable";
}

/**
 * 表示物品可附魔组件。当物品具有该组件时，可以对其附魔。
 *
 * When present on an item, this item can have enchantments
 * applied to it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemEnchantableComponent extends ItemComponent {
	private constructor();
	/**
	 * @throws This property can throw when used.
	 */
	readonly slots: EnchantmentSlot[];

	static readonly componentId = "minecraft:enchantable";

	/**
	 * @remarks
	 * 为物品栈添加一个附魔效果。
	 *
	 * Adds an enchantment to the item stack.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param enchantment
	 * 要添加的附魔接口。
	 *
	 * The enchantment interface to be added.
	 *
	 * @throws
	 * 若附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
	 * enchantment type does not exist.
	 *
	 * 若附魔等级超出允许范围，则抛出 `ScriptItemEnchantmentLevelOutOfBoundsError` 异常。
	 *
	 * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
	 * if the enchantment level is outside the allowable range for
	 * the given enchantment type.
	 *
	 * 若附魔与物品栈不兼容，则抛出 `ScriptItemEnchantmentTypeNotCompatibleError` 异常。
	 *
	 * ScriptItemEnchantmentTypeNotCompatibleError: Exception
	 * thrown if the enchantment is not compatible with the item
	 * stack.
	 *
	 *
	 * {@link EnchantmentLevelOutOfBoundsError}
	 *
	 * {@link EnchantmentTypeNotCompatibleError}
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 *
	 * {@link Error}
	 */
	addEnchantment(enchantment: Enchantment): void;

	/**
	 * @remarks
	 * 为物品栈添加一组附魔效果。
	 *
	 * Adds a list of enchantments to the item stack.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param enchantments
	 * 要添加的附魔列表。
	 *
	 * The list of enchantments to be added.
	 *
	 * @throws
	 * 若任何附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if any
	 * enchantment type does not exist.
	 *
	 * 若任何附魔等级超出允许范围，则抛出 `ScriptItemEnchantmentLevelOutOfBoundsError` 异常。
	 *
	 * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
	 * if any enchantment level is outside the allowable range for
	 * the given enchantment type.
	 *
	 * 若任何附魔与物品栈不兼容，则抛出 `ScriptItemEnchantmentTypeNotCompatibleError` 异常。
	 *
	 * ScriptItemEnchantmentTypeNotCompatibleError: Exception
	 * thrown if any enchantment is not compatible with the item
	 * stack.
	 *
	 *
	 * {@link EnchantmentLevelOutOfBoundsError}
	 *
	 * {@link EnchantmentTypeNotCompatibleError}
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 *
	 * {@link Error}
	 */
	addEnchantments(enchantments: Enchantment[]): void;

	/**
	 * @remarks
	 * 检查是否可以向物品栈添加附魔效果。
	 *
	 * Checks whether an enchantment can be added to the item
	 * stack.
	 *
	 * @param enchantment
	 * 要添加的附魔接口。
	 *
	 * The enchantment interface to be added.
	 *
	 * @returns
	 * 若可以向物品栈添加此附魔效果，则返回 true。
	 *
	 * Returns true if the enchantment can be added to the item
	 * stack.
	 *
	 * @throws
	 * 若附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
	 * enchantment type does not exist.
	 *
	 * 若附魔等级超出允许范围，则抛出 `ScriptItemEnchantmentLevelOutOfBoundsError` 异常。
	 *
	 * ScriptItemEnchantmentLevelOutOfBoundsError: Exception thrown
	 * if the enchantment level is outside the allowable range for
	 * the given enchantment type.
	 *
	 *
	 * {@link EnchantmentLevelOutOfBoundsError}
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 */
	canAddEnchantment(enchantment: Enchantment): boolean;

	/**
	 * @remarks
	 * 从物品栈中获取指定类型的附魔。
	 *
	 * Gets the enchantment of a given type from the item stack.
	 *
	 * @param enchantmentType
	 * 要获取的附魔类型。
	 *
	 * The enchantment type to get.
	 *
	 * @returns
	 * 若附魔存在于物品栈中，则返回该附魔。
	 *
	 * Returns the enchantment if it exists on the item stack.
	 *
	 * @throws
	 * 若附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
	 * enchantment type does not exist.
	 *
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 */
	getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;

	/**
	 * @remarks
	 * 获取物品栈上的所有附魔。
	 *
	 * Gets all enchantments on the item stack.
	 *
	 * @returns
	 * 返回物品栈上的附魔列表。
	 *
	 * Returns a list of enchantments on the item stack.
	 *
	 * @throws This function can throw errors.
	 */
	getEnchantments(): Enchantment[];

	/**
	 * @remarks
	 * 检查物品栈是否具有给定附魔类型。
	 *
	 * Checks whether an item stack has a given enchantment type.
	 *
	 * @param enchantmentType
	 * 要检查的附魔类型。
	 *
	 * The enchantment type to check for.
	 *
	 * @returns
	 * 若物品栈具有该附魔类型，则返回 true。
	 *
	 * Returns true if the item stack has the enchantment type.
	 *
	 * @throws
	 * 若附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
	 * enchantment type does not exist.
	 *
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 */
	hasEnchantment(enchantmentType: EnchantmentType | string): boolean;

	/**
	 * @remarks
	 * 移除应用于该物品栈的所有附魔效果。
	 *
	 * Removes all enchantments applied to this item stack.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	removeAllEnchantments(): void;

	/**
	 * @remarks
	 * 移除指定类型的附魔效果。
	 *
	 * Removes an enchantment of the given type.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param enchantmentType
	 * 要移除的附魔类型。
	 *
	 * The enchantment type to remove.
	 *
	 * @throws
	 * 若附魔类型不存在，则抛出 `ScriptItemEnchantmentUnknownIdError` 异常。
	 *
	 * ScriptItemEnchantmentUnknownIdError: Exception thrown if the
	 * enchantment type does not exist.
	 *
	 *
	 * {@link EnchantmentTypeUnknownIdError}
	 *
	 * {@link Error}
	 */
	removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

/**
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 *
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemFoodComponent extends ItemComponent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
	 *
	 * If true, the player can always eat this item (even when not
	 * hungry).
	 *
	 * @throws This property can throw when used.
	 */
	readonly canAlwaysEat: boolean;

	/**
	 * @remarks
	 * 表示实体在食用该物品后恢复的饥饿值，即营养值。
	 *
	 * Represents how much nutrition this food item will give an
	 * entity when eaten.
	 *
	 * @throws This property can throw when used.
	 */
	readonly nutrition: number;

	/**
	 * @remarks
	 * 当一个物品被食用，
	 * 将根据公式 `nutrition * saturation_modifier * 2`
	 * 来为玩家添加饱和状态。
	 *
	 * When an item is eaten, this value is used according to this
	 * formula (nutrition * saturation_modifier * 2) to apply a
	 * saturation buff.
	 *
	 * @throws This property can throw when used.
	 */
	readonly saturationModifier: number;

	/**
	 * @remarks
	 * 若给出，则使用时将该物品转换为标识符指定的物品。
	 *
	 * When specified, converts the active item to the one
	 * specified by this property.
	 *
	 * @throws This property can throw when used.
	 */
	readonly usingConvertsTo: string;

	static readonly componentId = "minecraft:food";
}

/**
 * @beta
 * 当物品具有该组件时，该物品为药水物品。
 *
 * When present on an item, this item is a potion item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
	private constructor();

	/**
	 * @remarks
	 * 与药水物品相关的 PotionEffectType。
	 *
	 * The PotionEffectType associated with the potion item.
	 *
	 * @throws
	 */
	readonly potionEffectType: PotionEffectType;

	/**
	 * @remarks
	 * 与药水物品相关的 PotionLiquidType。
	 *
	 * The PotionLiquidType associated with the potion item.
	 *
	 * @throws
	 */
	readonly potionLiquidType: PotionLiquidType;

	/**
	 * @remarks
	 * 与药水物品相关的 PotionModifierType。
	 *
	 * The PotionModifierType associated with the potion item.
	 *
	 * @throws
	 */
	readonly potionModifierType: PotionModifierType;

	static readonly componentId = "minecraft:potion";
}

/**
 * 包含有关充能物品的信息，当玩家使用物品并释放建造动作时触发。
 *
 * Contains information related to a chargeable item when the player has finished using the item and released the build action.
 */
export class ItemReleaseUseAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 返回触发此物品事件的物品堆。
	 *
	 * Returns the item stack that triggered this item event.
	 */
	readonly itemStack?: ItemStack;

	/**
	 * @remarks
	 * 返回触发此物品事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 */
	readonly source: Player;

	/**
	 * @remarks
	 * 返回在充能完成周期前剩余的时间（以刻为单位）。
	 *
	 * Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.
	 */
	readonly useDuration: number;
}

/**
 * 管理与充能物品释放充能相关的回调。
 *
 * Manages callbacks that are connected to the releasing of charging for a chargeable item.
 */
export class ItemReleaseUseAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 添加一个在充能物品释充时调用的回调。
	 *
	 * Adds a callback that will be called when a chargeable item is released from charging.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;

	/**
	 * @remarks
	 * 移除一个在充能物品释充时调用的回调。
	 *
	 * Removes a callback from being called when a chargeable item is released from charging.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

/**
 * 定义物品的集合。
 *
 * Defines a collection of items.
 * @seeExample itemStacks.ts
 * @seeExample givePlayerEquipment.ts
 * @seeExample spawnFeatherItem.ts
 */
export class ItemStack {
	/**
	 * @remarks
	 * 堆中物品的数量。有效值范围在 1-255 之间。提供的值将被限制在物品的最大堆叠大小内。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size.
	 *
	 * @throws
	 * 如果值超出 1-255 的范围，则抛出错误。
	 *
	 * Throws if the value is outside the range of 1-255.
	 */
	amount: number;

	/**
	 * @remarks
	 * 返回物品是否可堆叠。若物品的最大堆叠大小大于 1 且不包含任何自定义数据或属性，则该物品被认为是可堆叠的。
	 *
	 * Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.
	 *
	 */
	readonly isStackable: boolean;

	/**
	 * @remarks
	 * 获取或设置物品在死亡时是否保留。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Gets or sets whether the item is kept on death.
	 *
	 */
	keepOnDeath: boolean;

	/**
	 * @remarks
	 * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Gets or sets the item's lock mode. The default value is `ItemLockMode.none`.
	 *
	 */
	lockMode: ItemLockMode;

	/**
	 * @remarks
	 * 最大堆叠大小。这个值因物品类型而异。例如，火把的最大堆叠大小为 64，而蛋的最大堆叠大小为 16。
	 *
	 * The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.
	 *
	 */
	readonly maxAmount: number;

	/**
	 * @remarks
	 * 此堆物品的命名标签。当悬停在物品上时显示名称标签。将名称标签设置为空字符串或 `undefined` 将删除名称标签。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag.
	 *
	 * @throws
	 * 如果长度超过 255 个字符，则抛出错误。
	 *
	 * Throws if the length exceeds 255 characters.
	 */
	nameTag?: string;

	/**
	 * @remarks
	 * 物品的类型。
	 *
	 * The type of the item.
	 *
	 */
	readonly "type": ItemType;

	/**
	 * @remarks
	 * 堆中物品的类型标识符。如果没有指定命名空间，则假定为 'minecraft:'。例如 'wheat' 或 'apple'。
	 *
	 * Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.
	 *
	 */
	readonly typeId: string;

	/**
	 * @remarks
	 * 创建新的物品堆实例以在世界中使用。
	 *
	 * Creates a new instance of a stack of items for use in the world.
	 *
	 * @param itemType
	 * 要创建的物品类型。请参见 {@link @minecraft/vanilla-data.MinecraftItemTypes} 枚举以了解 Minecraft 体验中的标准物品类型列表。
	 *
	 * Type of item to create. See the {@link @minecraft/vanilla-data.MinecraftItemTypes} enumeration for a list of standard item types in Minecraft experiences.
	 *
	 * @param amount
	 * 堆中的物品数量，介于 1-255 之间。提供的值将被限制在物品的最大堆叠大小内。请注意，某些物品堆中只能有一个物品。
	 *
	 * Number of items to place in the stack, between 1-255. The provided value will be clamped to the item's maximum stack size. Note that certain items can only have one item in the stack.
	 *
	 * @throws
	 * 如果 `itemType` 无效，或 `amount` 超出了 1-255 的范围，则抛出错误。
	 *
	 * Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255.
	 */
	constructor(itemType: ItemType | string, amount?: number);

	/**
	 * @remarks
	 * 清除此物品堆上设置的所有动态属性。
	 *
	 * Clears all dynamic properties that have been set on this item stack.
	 *
	 */
	clearDynamicProperties(): void;

	/**
	 * @remarks
	 * 创建此物品堆的精确副本，包括所有自定义数据或属性。
	 *
	 * Creates an exact copy of the item stack, including any custom data or properties.
	 *
	 * @returns
	 * 返回此物品堆的副本。
	 *
	 * Returns a copy of this item stack.
	 */
	clone(): ItemStack;

	/**
	 * @remarks
	 * 获取在冒险模式中此物品可以破坏的方块类型列表。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Get the list of block types this item can break in Adventure mode.
	 *
	 */
	getCanDestroy(): string[];

	/**
	 * @remarks
	 * 获取在冒险模式中此物品可以放置的方块类型列表。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Get the list of block types this item can be placed on in Adventure mode.
	 *
	 */
	getCanPlaceOn(): string[];

	/**
	 * @remarks
	 * 获取物品堆的组件（表示附加功能）。
	 *
	 * Gets a component (that represents additional capabilities) for an item stack.
	 *
	 * @param componentId
	 * 组件的标识符（例如 'minecraft:food'）。如果没有指定命名空间前缀，则假定为 'minecraft:'。可用的组件 ID 可以在 {@link ItemComponentTypes} 枚举中找到。
	 *
	 * The identifier of the component (e.g., 'minecraft:food'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link ItemComponentTypes} enum.
	 *
	 * @returns
	 * 如果组件存在于物品堆上，则返回组件，否则返回 undefined。
	 *
	 * Returns the component if it exists on the item stack, otherwise undefined.
	 *
	 * @seeExample giveHurtDiamondSword.ts
	 */
	getComponent<T extends keyof ItemComponentTypeMap>(componentId: T): ItemComponentTypeMap[T] | undefined;

	/**
	 * @remarks
	 * 返回此物品堆上存在的所有组件，并且这些组件都受 API 支持。
	 *
	 * Returns all components that are both present on this item stack and supported by the API.
	 *
	 */
	getComponents(): ItemComponent[];

	/**
	 * @remarks
	 * 返回一个属性值。
	 *
	 * Returns a property value.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 *
	 * @returns
	 * 返回该属性的值，如果属性未设置则返回 undefined。
	 *
	 * Returns the value for the property, or undefined if the property has not been set.
	 */
	getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;

	/**
	 * @remarks
	 * 返回已用于该实体的动态属性标识符的可用集合。
	 *
	 * Returns the available set of dynamic property identifiers that have been used on this entity.
	 *
	 * @returns
	 * 返回在此实体上设置的动态属性的字符串数组。
	 *
	 * A string array of the dynamic properties set on this entity.
	 */
	getDynamicPropertyIds(): string[];

	/**
	 * @remarks
	 * 返回当前存储在此实体的所有动态属性的总大小（以字节为单位）。这包括关键字和值的大小。这对于诊断性能预警信号可能很有用 ——例如，如果某实体具有许多兆字节的相关动态属性，在各种设备上的加载时间可能会变慢。
	 *
	 * Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity. This includes the size of both the key and the value. This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.
	 *
	 */
	getDynamicPropertyTotalByteCount(): number;

	/**
	 * @remarks
	 * 返回物品堆的传说值 - 次显示字符串。
	 *
	 * Returns the lore value - a secondary display string - for an ItemStack.
	 *
	 * @returns
	 * 如果物品没有传说值，则返回空数组。
	 *
	 * An array of lore lines. If the item does not have lore, returns an empty array.
	 */
	getLore(): string[];

	/**
	 * @remarks
	 * 返回与此物品堆关联的一组标签。
	 *
	 * Returns a set of tags associated with this item stack.
	 *
	 */
	getTags(): string[];

	/**
	 * @remarks
	 * 如果此物品堆上存在指定组件，则返回 true。
	 *
	 * Returns true if the specified component is present on this item stack.
	 *
	 * @param componentId
	 * 要检索的组件标识符（例如 'minecraft:food'）。如果未指定命名空间前缀，则假定为 'minecraft:'。
	 *
	 * The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.
	 */
	hasComponent(componentId: string): boolean;

	/**
	 * @remarks
	 * 检查此物品堆是否具有与它关联的特定标签。
	 *
	 * Checks whether this item stack has a particular tag associated with it.
	 *
	 * @param tag
	 * 搜索的标签。
	 *
	 * Tag to search for.
	 *
	 * @returns
	 * 如果物品堆具有与指定标签关联的标签，则返回 true，否则返回 false。
	 *
	 * True if the Item Stack has the tag associated with it, else false.
	 */
	hasTag(tag: string): boolean;

	/**
	 * @remarks
	 * 返回此物品堆是否可以与给定的 `itemStack` 堆叠。这通过比较物品类型以及与物品堆关联的任何自定义数据和属性来确定。不会考虑每个物品堆的数量，但对于不可堆叠物品，此方法总会返回 false。
	 *
	 * Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration, but for non-stackable items this will always return false.
	 *
	 * @param itemStack
	 * 检查是否可以堆叠的物品堆。
	 *
	 * ItemStack to check stacking compatibility with.
	 *
	 * @returns
	 * 如果物品堆可以与传递的 itemStack 堆叠，则返回 true。对于不可堆叠物品，返回 false。
	 *
	 * True if the Item Stack is stackable with the itemStack passed in. False for non-stackable items.
	 */
	isStackableWith(itemStack: ItemStack): boolean;

	/**
	 * @remarks
	 * 检查物品是否匹配的版本安全方式。
	 *
	 * Version safe way of checking if an item matches.
	 *
	 * @param itemName
	 * 物品的标识符。
	 *
	 * Identifier of the item.
	 *
	 * @param states
	 * 仅适用于方块。可选的一组状态以进行比较。如果没有指定状态，将更广泛地检查类型集。
	 *
	 * Applicable only for blocks. An optional set of states to compare against. If states is not specified, matches checks against the set of types more broadly.
	 *
	 * @returns
	 * 返回是否匹配的布尔值。
	 *
	 * Returns a boolean whether the specified item matches.
	 */
	matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;

	/**
	 * @remarks
	 * 在冒险模式中此物品可以破坏的方块类型列表。方块名称显示在物品的提示中。将值设置为 undefined 将清除列表。
	 *
	 * The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockIdentifiers
	 * 物品可以破坏的方块类型字符串列表。
	 *
	 * String list of block types that the item can destroy.
	 *
	 * @throws
	 * 如果提供的任何方块标识符无效，则抛出错误。
	 *
	 * Throws if any of the provided block identifiers are invalid.
	 *
	 * @seeExample giveDestroyRestrictedPickaxe.ts
	 */
	setCanDestroy(blockIdentifiers?: string[]): void;
	/**
	 * @remarks
	 * 表示在冒险模式中此物品可以放置的方块类型列表。仅适用于方块物品。方块名称会显示在物品的工具提示中。将值设置为 undefined 会清空列表。
	 *
	 * The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param blockIdentifiers
	 * 物品可以放置的方块类型的字符串列表。
	 *
	 * String list of block types that the item can be placed on.
	 * @throws
	 * 如果提供的任何方块标识符无效，则会抛出错误。
	 *
	 * Throws if any of the provided block identifiers are invalid.
	 * @seeExample givePlaceRestrictedGoldBlock.ts
	 */

	setCanPlaceOn(blockIdentifiers?: string[]): void;
	/**
	 * @beta
	 * @remarks
	 * 设置多个具有特定值的动态属性。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 要设置的动态属性的键值对记录。
	 *
	 * A Record of key value pairs of the dynamic properties to set.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */

	setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
	/**
	 * @remarks
	 * 将指定属性设置为一个值。注意：此函数仅适用于不可堆叠的物品。
	 *
	 * Sets a specified property to a value. Note: This function only works with non-stackable items.
	 *
	 * @param identifier
	 * 属性标识符。
	 *
	 * The property identifier.
	 * @param value
	 * 要设置的属性的数据值。
	 *
	 * Data value of the property to set.
	 * @throws
	 * 如果物品堆栈是可堆叠的，则会抛出错误。
	 *
	 * Throws if the item stack is stackable.
	 */

	setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
	/**
	 * @remarks
	 * 为 ItemStack 设置 lore 值 - 一个次要显示字符串。如果设置为空字符串或 undefined，则清除 lore 列表。
	 *
	 * Sets the lore value - a secondary display string - for an ItemStack. The lore list is cleared if set to an empty string or undefined.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param loreList
	 * lore 行列表。列表中的每个元素代表一行。最大 lore 行数为 20。最大 lore 行长度为 50 个字符。
	 *
	 * List of lore lines. Each element in the list represents a new line. The maximum lore line count is 20. The maximum lore line length is 50 characters.
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 * @seeExample diamondAwesomeSword.ts
	 */

	setLore(loreList?: string[]): void;
	/**
	 * @beta
	 * @remarks
	 * 用于创建药水物品的辅助函数。
	 *
	 * Helper function for creating potion items.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 * 此函数可能会抛出错误。
	 *
	 * This function can throw errors.
	 */

	static createPotion(options: PotionOptions): ItemStack;
}

/**
 * 描述与可充能物品开始充能相关的信息。
 *
 * Contains information related to a chargeable item starting to be charged.
 */
export class ItemStartUseAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示开始充能的受影响物品堆。
	 *
	 * The impacted item stack that is starting to be charged.
	 *
	 */
	readonly itemStack: ItemStack;
	/**
	 * @remarks
	 * 返回触发此物品事件的来源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
	/**
	 * @remarks
	 * 返回在充能完成其循环之前剩余的持续时间（以刻为单位）。
	 *
	 * Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.
	 *
	 */
	readonly useDuration: number;
}

/**
 * 管理与可充能物品开始充能相关的回调。
 *
 * Manages callbacks that are connected to the start of charging for a chargeable item.
 */
export class ItemStartUseAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当可充能物品开始充能时会调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;

	/**
	 * @remarks
	 * 移除一个回调函数，当可充能物品开始充能时不再调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

/**
 * 包含与玩家在方块上使用物品相关的信息。如果玩家按下使用物品 / 放置方块按钮，并成功使用物品或放置方块，此事件会触发。该事件会在进行建造操作时，对第一个被互动的方块触发。 注：此事件不能用于锄或斧子物品。
 *
 * Contains information related to an item being used on a block. This event fires when a player presses the the Use Item / Place Block button to successfully use an item or place a block. Fires for the first block that is interacted with when performing a build action. Note: This event cannot be used with Hoe or Axe items.
 */
export class ItemStartUseOnAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 物品使用的方块。
	 *
	 * The block that the item is used on.
	 */
	readonly block: Block;

	/**
	 * @remarks
	 * 物品使用在方块的哪一面。
	 *
	 * The face of the block that an item is being used on.
	 */
	readonly blockFace: Direction;

	/**
	 * @remarks
	 * 开始使用的物品堆。在一些游戏场景中，如用空手按下按钮时，可以为空。
	 *
	 * The impacted item stack that is starting to be used. Can be undefined in some gameplay scenarios like pushing a button with an empty hand.
	 */
	readonly itemStack?: ItemStack;

	/**
	 * @remarks
	 * 返回触发此物品事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 */
	readonly source: Player;
}

/**
 * 管理与在方块上开始使用物品事件相关的回调函数。
 *
 * Manages callbacks that are connected to an item starting being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当某物品在方块上使用时会调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;

	/**
	 * @remarks
	 * 移除一个回调函数，当某物品在方块上使用时不会调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

/**
 * 包含与可充能物品完成使用周期或玩家释放该物品的使用动作相关的信息。
 *
 * Contains information related to a chargeable item that has finished an item use cycle, or when the player has released the use action with the item.
 */
export class ItemStopUseAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 停止充能的物品堆。ItemStopUseAfterEvent 可以在传送到不同维度时被调用，可以为空。
	 *
	 * The impacted item stack that is stopping being charged. ItemStopUseAfterEvent can be called when teleporting to a different dimension and this can be undefined.
	 */
	readonly itemStack?: ItemStack;

	/**
	 * @remarks
	 * 返回触发此物品事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 */
	readonly source: Player;

	/**
	 * @remarks
	 * 返回剩余的时间（以刻为单位），在充能完成其周期前。
	 *
	 * Returns the time, in ticks, for the remaining duration left before the charge completes its cycle.
	 */
	readonly useDuration: number;
}

/**
 * 管理与停止拥有 `minecraft:chargeable` 组件的物品的充能相关的回调函数。
 *
 * Manages callbacks that are connected to the stopping of charging for an item that has a registered `minecraft:chargeable` component.
 */
export class ItemStopUseAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当可充能物品停止充能时会调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;

	/**
	 * @remarks
	 * 移除一个回调函数，当可充能物品停止充能时不再调用此回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 */
	unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

/**
 * 包含与在方块上停止使用物品相关的信息。如果玩家按下使用物品 / 放置方块按钮，并成功使用物品或放置方块，此事件会触发。如果放置多个方块，则此事件只会在放置方块开始时触发一次。注意：此事件不能用于锄或斧头物品。
 *
 * Contains information related to an item that has stopped being used on a block. This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
	private constructor();

	/**
	 * 表示此物品被使用的方块。
	 *
	 * The block that the item is used on.
	 *
	 */
	readonly block: Block;

	/**
	 * 表示受影响的物品堆，该物品堆正在被用于方块上。
	 *
	 * The impacted item stack that is being used on a block.
	 *
	 */
	readonly itemStack?: ItemStack;

	/**
	 * 返回触发此物品事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
}

/**
 * 管理与物品停止用于方块事件相关的回调。
 *
 * Manages callbacks that are connected to an item stops used on a block event.
 *
 */
export class ItemStopUseOnAfterEventSignal {
	private constructor();

	/**
	 * 添加一个回调，当物品停止用于方块时会被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called when an item stops being used on a block.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;

	/**
	 * 移除当物品用于方块时被调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called when an item is used on a block.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

/**
 * 表示一类物品，例如：羊毛。
 *
 * Represents the type of an item - for example, Wool.
 *
 */
export class ItemType {
	private constructor();

	/**
	 * 返回该物品类型的标识符，例如："minecraft:apple"。
	 *
	 * Returns the identifier of the item type - for example, 'minecraft:apple'.
	 *
	 */
	readonly id: string;
}

/**
 * 返回在 Minecraft 中注册的物品类型集合。
 *
 * Returns the set of item types registered within Minecraft.
 *
 */
export class ItemTypes {
	private constructor();

	/**
	 * 返回一个特定的物品类型，如果在 Minecraft 中可用的话。
	 *
	 * Returns a specific item type, if available within Minecraft.
	 *
	 */
	static get(itemId: string): ItemType | undefined;

	/**
	 * 检索在 Minecraft 中注册的所有可用物品类型。
	 *
	 * Retrieves all available item types registered within Minecraft.
	 *
	 */
	static getAll(): ItemType[];
}

/**
 * 表示与物品用于方块相关的信息。此事件在玩家成功触发实体交互时触发。
 *
 * Contains information related to an item being used on a block. This event fires when an item used by a player successfully triggers an entity interaction.
 *
 */
export class ItemUseAfterEvent {
	private constructor();

	/**
	 * 表示正在使用的物品堆。
	 *
	 * The impacted item stack that is being used.
	 *
	 */
	itemStack: ItemStack;

	/**
	 * 返回触发此物品事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
}
export class ItemUseAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在物品被使用时会被调用的回调函数。
	 *
	 * Adds a callback that will be called when an item is used.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
	/**
	 * @remarks
	 * 移除物品使用时的回调函数。
	 *
	 * Removes a callback from being called when an item is used.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

/**
 * 包含与使用物品相关的信息。
 *
 * Contains information related to an item being used.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，表示将取消物品的使用行为。
	 *
	 * If set to true, this will cancel the item use behavior.
	 *
	 */
	cancel: boolean;
}

/**
 * 管理在物品使用前触发的回调函数。
 *
 * Manages callbacks that fire before an item is used.
 */
export class ItemUseBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在物品使用前会被调用的回调函数。
	 *
	 * Adds a callback that will be called before an item is used.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除物品使用前的回调函数。
	 *
	 * Removes a callback from being called before an item is used.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

/**
 * 表示对方块使用物品时触发的后置事件。描述了物品的信息与使用的目标方块。
 * 该事件会在玩家成功触发与方块的交互后发生。
 *
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 物品使用的目标方块。
	 *
	 * The block that the item is used on.
	 *
	 */
	readonly block: Block;
	/**
	 * @remarks
	 * 物品在方块的哪一面被使用。
	 *
	 * The face of the block that an item is being used on.
	 *
	 */
	readonly blockFace: Direction;
	/**
	 * @remarks
	 * 物品在方块的面上被使用时，交互点相对于方块西北方底部顶点的坐标。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block where the item is placed.
	 *
	 */
	readonly faceLocation: Vector3;
	/**
	 * @remarks
	 * 此值为 true，则表示事件是由玩家初次按下交互按钮触发的；为 false，则表示事件是由于玩家长按交互按钮触发的。
	 *
	 * This value will be true if the event was triggered on
	 * players initial interaction button press and false on events
	 * triggered from holding the interaction button.
	 *
	 */
	readonly isFirstEvent: boolean;
	/**
	 * @remarks
	 * 对方块使用物品时物品所在的物品堆叠。
	 *
	 * The impacted item stack that is being used on a block.
	 *
	 */
	readonly itemStack: ItemStack;
	/**
	 * @remarks
	 * 触发此事件的源实体。
	 *
	 * Returns the source entity that triggered this item event.
	 *
	 */
	readonly source: Player;
}

/**
 * 管理连接到对方块使用物品时触发的事件的回调函数。
 *
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在对方块使用物品时会被调用的回调函数。
	 *
	 * Adds a callback that will be called when an item is used on
	 * a block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemUseOnAfterEvent) => void): (arg0: ItemUseOnAfterEvent) => void;
	/**
	 * @remarks
	 * 移除物品使用在方块上的回调函数。
	 *
	 * Removes a callback from being called when an item is used on
	 * a block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemUseOnAfterEvent) => void): void;
}

/**
 * 包含与在方块上使用物品信息相关的信息。
 *
 * Contains information related to an item being used on a
 * block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 若为 `true`，则会取消物品使用行为。
	 *
	 * If set to true, this will cancel the item use behavior.
	 *
	 */
	cancel: boolean;
}

/**
 * 管理在物品使用到方块之前触发的回调。
 *
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class ItemUseOnBeforeEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 添加在物品使用到方块之前调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式下调用。
	 *
	 * Adds a callback that will be called before an item is used
	 * on a block.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): (arg0: ItemUseOnBeforeEvent) => void;

	/**
	 * @remarks
	 * 移除在物品使用到方块之前调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * 此函数可以在早期执行模式下调用。
	 *
	 * Removes a callback from being called before an item is used
	 * on a block.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): void;
}

/**
 * 包含将物品使用在方块上的相关信息。
 *
 * Contains information regarding the use of an item on a
 * block.
 */
export class ItemUseOnEvent {
	private constructor();

	/**
	 * @remarks
	 * 受到该事件影响的方块。
	 *
	 * The block impacted by this event.
	 *
	 */
	readonly block: Block;

	/**
	 * @remarks
	 * 物品使用到的方块面。
	 *
	 * The face of the block that the item was used on.
	 *
	 */
	readonly blockFace: Direction;

	/**
	 * @remarks
	 * 物品在方块上使用时，相对于方块底部西北角的位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block that the item was used on.
	 *
	 */
	readonly faceLocation: Vector3;

	/**
	 * @remarks
	 * 在方块上使用的物品堆。
	 *
	 * The item stack used on the block.
	 *
	 */
	readonly itemStack: ItemStack;
}

/**
 * 包含与杠杆激活或停用相关的更改信息。
 * @seeExample leverActionEvent.ts
 *
 * Contains information related to changes to a lever
 * activating or deactivating.
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEvent extends BlockEvent {
	private constructor();

	/**
	 * @remarks
	 * 若为 `true`，则表示杠杆已激活（即正在传输能量）。
	 *
	 * True if the lever is activated (that is, transmitting
	 * power).
	 *
	 */
	readonly isPowered: boolean;

	/**
	 * @remarks
	 * 激活杠杆的玩家（可选）。
	 *
	 * Optional player that triggered the lever activation.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理与杠杆移动（激活或停用）相关的回调。
 * @seeExample leverActionEvent.ts
 *
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
	private constructor();
}

/**
 * 由唯一方块位置的无序容器组成的卷。
 *
 * Volume composed of an unordered container of unique block
 * locations.
 */
export class ListBlockVolume extends BlockVolumeBase {
	/**
	 * @remarks
	 * 创建一个新的 ListBlockVolume 实例。
	 *
	 * Creates a new instance of ListBlockVolume.
	 *
	 * @param locations
	 * ListBlockVolume 将用来构建的初始方块位置数组。
	 *
	 * Initial array of block locations that ListBlockVolume will be constructed with.
	 */
	constructor(locations: Vector3[]);
	/**
	 * @remarks
	 * 将方块位置插入到容器中。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Insert block locations into container.
	 *
	 * @param locations
	 * 要插入到容器中的方块位置数组。
	 *
	 * Array of block locations to be inserted into container.
	 */
	add(locations: Vector3[]): void;
	/**
	 * @remarks
	 * 从容器中移除方块位置。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Remove block locations from container.
	 *
	 * @param locations
	 * 要从容器中移除的方块位置数组。
	 *
	 * Array of block locations to be removed from container.
	 */
	remove(locations: Vector3[]): void;
}

/**
 * @beta
 * 用于从客户端向服务器传递消息的特定暂时内部事件。
 *
 * A specific currently-internal event used for passing messages from client to server.
 */
export class MessageReceiveAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 消息标识符。
	 *
	 * The message identifier.
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 消息内容。
	 *
	 * The message.
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送消息的玩家。
	 *
	 * The player who sent the message.
	 */
	readonly player: Player;
}

/**
 * Minecraft 默认维度类型的集合。
 *
 * A collection of default Minecraft dimension types.
 */
export class MinecraftDimensionTypes {
	private constructor();
	/**
	 * @remarks
	 * 下界是一个由独立于主世界的生物群系组成的世界，包括灵魂沙峡谷和绯红森林。下届要塞包含独有的资源。烈焰人、疣猪兽、猪灵和恶魂等生物会聚集在这里。
	 *
	 * The Nether is a collection of biomes separate from the Overworld, including Soul Sand Valleys and Crimson forests. Nether fortresses contain exclusive resources. Mobs such as Blaze, Hoglins, Piglins, and Ghasts congregate here.
	 */
	static readonly nether = "minecraft:nether";
	/**
	 * @remarks
	 * 主世界是由各种生物群系组成的世界，包括森林、平原、丛林、山脉、沙漠、针叶林等。这是 Minecraft 的默认起始维度。美西螈、牛、爬行者和僵尸等生物会聚集在这里。
	 *
	 * The overworld is a collection of biomes, including forests, plains, jungles, mountains, deserts, taiga, and more. This is the default starter dimension for Minecraft. Mobs such as Axolotl, Cows, Creepers, and Zombies congregate here.
	 */
	static readonly overworld = "minecraft:overworld";
	/**
	 * @remarks
	 * 末地独立于主世界和下界，并在创建末地传送门时生成。这里有一个巨大的中心岛屿，周围环绕着几个较小的区域和岛屿。你可以在这里找到末影人。末地中部地区是从中心到末地边缘的过渡地带，包含潜影贝、末影人、末地传送门和末地城市。末地传送门通常位于虚空的最外边缘。末地荒芜地区通常位于主要区域或陆地的边缘。
	 *
	 * The End is separate from the Overworld and the Nether and is generated whenever you create an End portal. Here, a giant center island is surrounded by several smaller areas and islands. You can find Endermen here. End midlands are larger areas that transition you from the center to the outer edges of the End. They contain Shulkers, Endermen, End gateway portals, and End cities. End gateway portals are commonly found at the outermost edge of the void. You usually find End barrens toward the edges of the main areas or land in the End.
	 */
	static readonly theEnd = "minecraft:the_end";
}

/**
 * 包含一组额外的变量值，以进一步定义渲染和动画的功能。
 *
 * Contains a set of additional variable values for further defining how rendering and animations function.
 */
export class MolangVariableMap {
	/**
	 * @remarks
	 * 将以下变量添加到 Molang：
	 * - `<variable_name>.r` - 红色值 [0-1]
	 * - `<variable_name>.g` - 绿色值 [0-1]
	 * - `<variable_name>.b` - 蓝色值 [0-1]
	 *
	 * Adds the following variables to Molang:
	 * - `<variable_name>.r` - Red color value [0-1]
	 * - `<variable_name>.g` - Green color value [0-1]
	 * - `<variable_name>.b` - Blue color value [0-1]
	 *
	 * @throws 若参数类型正确的情况下不会报错。
	 */
	setColorRGB(variableName: string, color: RGB): void;
	/**
	 * @remarks
	 * 将以下变量添加到 Molang：
	 * - `<variable_name>.r` - 红色值 [0-1]
	 * - `<variable_name>.g` - 绿色值 [0-1]
	 * - `<variable_name>.b` - 蓝色值 [0-1]
	 * - `<variable_name>.a` - 透明度值 [0-1]
	 *
	 * Adds the following variables to Molang:
	 * - `<variable_name>.r` - Red color value [0-1]
	 * - `<variable_name>.g` - Green color value [0-1]
	 * - `<variable_name>.b` - Blue color value [0-1]
	 * - `<variable_name>.a` - Alpha (transparency) color value [0-1]
	 *
	 * @throws 若参数类型正确的情况下不会报错。
	 */
	setColorRGBA(variableName: string, color: RGBA): void;
	/**
	 * @remarks
	 * 设置 Molang 变量映射中的数值（小数）。
	 *
	 * Sets a numeric (decimal) value within the Molang variable map.
	 *
	 * @param variableName
	 * 要设置的基于浮点数的变量名。
	 *
	 * Name of the float-based number to set.
	 *
	 * @param number
	 * 要设置的 Molang 变量值。
	 *
	 * Value for the Molang-based variable to set.
	 * @throws 若参数类型正确的情况下不会报错。
	 */
	setFloat(variableName: string, number: number): void;
	/**
	 * @remarks
	 * 将以下变量添加到 Molang：
	 * - `<variable_name>.speed` - 提供的速度值
	 * - `<variable_name>.direction_x` - 来自 {@link Vector3} 的 X 坐标
	 * - `<variable_name>.direction_y` - 来自 {@link Vector3} 的 Y 坐标
	 * - `<variable_name>.direction_z` - 来自 {@link Vector3} 的 Z 坐标
	 *
	 * Adds the following variables to Molang:
	 * - `<variable_name>.speed` - Speed number provided
	 * - `<variable_name>.direction_x` - X value from the {@link Vector3} provided
	 * - `<variable_name>.direction_y` - Y value from the {@link Vector3} provided
	 * - `<variable_name>.direction_z` - Z value from the {@link Vector3} provided
	 *
	 * @throws 若参数类型正确的情况下不会报错。
	 */
	setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
	/**
	 * @remarks
	 * 将以下变量添加到 Molang：
	 * - `<variable_name>.x` - 来自 {@link Vector3} 的 X 坐标
	 * - `<variable_name>.y` - 来自 {@link Vector3} 的 Y 坐标
	 * - `<variable_name>.z` - 来自 {@link Vector3} 的 Z 坐标
	 *
	 * Adds the following variables to Molang:
	 * - `<variable_name>.x` - X value from the {@link Vector3} provided
	 * - `<variable_name>.y` - Y value from the {@link Vector3} provided
	 * - `<variable_name>.z` - Z value from the {@link Vector3} provided
	 *
	 * @throws 若参数类型正确的情况下不会报错。
	 */
	setVector3(variableName: string, vector: Vector3): void;
}

/**
 * 包含与活塞伸展或收缩的变化相关的信息。
 *
 * Contains information related to changes to a piston expanding or retracting.
 * @seeExample pistonAfterEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 如果活塞正在扩展，则为 true。
	 *
	 * True if the piston is the process of expanding.
	 */
	readonly isExpanding: boolean;
	/**
	 * @remarks
	 * 包含活塞的附加属性和细节。
	 *
	 * Contains additional properties and details of the piston.
	 */
	readonly piston: BlockPistonComponent;
}

/**
 * 管理与活塞激活有关的回调。
 *
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @seeExample pistonAfterEvent.ts
	 */
	subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;

	/**
	 * @remarks
	 * 删除一个当活塞扩展或缩回时触发的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

/**
 * 表示世界中的玩家。
 */
export class Player extends Entity {
	private constructor();

	/**
	 * @remarks
	 * 玩家视角。
	 */
	readonly camera: Camera;

	/**
	 * @remarks
	 * 包含玩家的设备信息。
	 */
	readonly clientSystemInfo: ClientSystemInfo;

	/**
	 * @rc
	 * @remarks
	 * 包含玩家的输入信息。
	 */
	readonly inputInfo: InputInfo;

	/**
	 * @remarks
	 * 玩家输入权限。
	 */
	readonly inputPermissions: PlayerInputPermissions;

	/**
	 * @remarks
	 * 若为 `true`，则表示玩家正在做动作。
	 */
	readonly isEmoting: boolean;

	/**
	 * @remarks
	 * 指示玩家是否在飞行。例如，在创造模式或旁观者模式中。
	 */
	readonly isFlying: boolean;

	/**
	 * @remarks
	 * 指示玩家是否在使用鞘翅滑翔。
	 */
	readonly isGliding: boolean;

	/**
	 * @remarks
	 * 指示玩家是否在跳跃。只要玩家保持按住跳跃键，将一直为 `true`。
	 */
	readonly isJumping: boolean;

	/**
	 * @remarks
	 * 基于经验的玩家当前总等级。
	 */
	readonly level: number;

	/**
	 * @remarks
	 * 玩家名称。
	 */
	readonly name: string;

	/**
	 * @remarks
	 * 包含操控玩家屏幕显示的方法。
	 */
	readonly onScreenDisplay: ScreenDisplay;

	/**
	 * @remarks
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 */
	selectedSlotIndex: number;

	/**
	 * @remarks
	 * 达到玩家下一级别所需的总体经验。
	 */
	readonly totalXpNeededForNextLevel: number;

	/**
	 * @remarks
	 * 玩家当前获得的经验总量。
	 */
	readonly xpEarnedAtCurrentLevel: number;

	/**
	 * @remarks
	 * 增加/减少玩家的经验并返回玩家的当前经验值。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param amount
	 * 增加的经验量。注意，这个值可以为负。
	 * 范围 -2^24 到 2^24
	 * @returns
	 * 返回玩家的当前经验值。
	 */
	addExperience(amount: number): number;

	/**
	 * @remarks
	 * 增加/减少玩家的等级并返回玩家的当前等级。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param amount
	 * 增加的等级量。范围 -2^24 到 2^24
	 * @returns
	 * 返回玩家的当前等级。
	 */
	addLevels(amount: number): number;

	/**
	 * @beta
	 * @remarks
	 * 吃下一个物品，为玩家提供物品的饥饿值和饱和度效果。只能在食物物品上使用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param itemStack
	 * 要吃下的物品。
	 * @throws
	 * 抛出错误，如果该物品不是食物物品。
	 */
	eatItem(itemStack: ItemStack): void;

	/**
	 * @beta
	 * @remarks
	 * 玩家瞄准辅助设置。
	 *
	 *
	 * Required Experiments:
	 * - Camera Aim Assist
	 *
	 */
	getAimAssist(): PlayerAimAssist;

	/**
	 * @remarks
	 * 获取玩家当前的游戏模式（如果指定）。
	 */
	getGameMode(): GameMode;

	/**
	 * @remarks
	 * 获取特定冷却类别的当前物品冷却时间。
	 *
	 * @param cooldownCategory
	 * 指定要检索当前冷却时间的冷却类别。
	 */
	getItemCooldown(cooldownCategory: string): number;

	/**
	 * @remarks
	 * 获取玩家的当前重生点。
	 */
	getSpawnPoint(): DimensionLocation | undefined;

	/**
	 * @remarks
	 * 获取玩家的总经验。
	 */
	getTotalXp(): number;

	/**
	 * @beta
	 * @remarks
	 * 如果玩家具有操作员级别的权限，则返回 `true`。
	 */
	isOp(): boolean;

	/**
	 * @remarks
	 * 播放只有这个特定玩家可以听到的音乐曲目。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param trackId
	 * 要播放的音乐曲目的标识符。
	 * @param musicOptions
	 * 音乐曲目的其他选项。
	 */
	playMusic(trackId: string, musicOptions?: MusicOptions): void;

	/**
	 * @remarks
	 * 播放只有这个特定玩家可以听到的声音。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param soundId
	 * 要播放的声音标识符。
	 * @param soundOptions
	 * 声音的其他可选选项。
	 */
	playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;

	/**
	 * @beta
	 * @remarks
	 * 这是一个内部方法，用于将系统消息发布到下游客户端。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */
	postClientMessage(id: string, value: string): void;

	/**
	 * @remarks
	 * 排队播放一个额外的只有这个特定玩家可以听到的音乐曲目。如果没有播放曲目，则播放音乐曲目。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param trackId
	 * 要播放的音乐曲目的标识符。
	 * @param musicOptions
	 * 音乐曲目的其他选项。
	 * @throws
	 * 当音量小于 0.0 时抛出错误。
	 * 当淡入小于 0.0 时抛出错误。
	 */
	queueMusic(trackId: string, musicOptions?: MusicOptions): void;

	/**
	 * @remarks
	 * 重置玩家的等级。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */
	resetLevel(): void;

	/**
	 * @remarks
	 * 向玩家发送消息。
	 *
	 * @param message
	 * 显示的消息。
	 * @throws
	 * 如果提供的 {@link RawMessage} 格式无效，则此方法可能会抛出错误。例如，如果提供给 `score` 的 `name` 字符串为空。
	 */
	sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;

	/**
	 * @remarks
	 * 设置此玩家的游戏模式覆盖。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param gameMode
	 * 活动的游戏模式。
	 */
	setGameMode(gameMode?: GameMode): void;

	/**
	 * @beta
	 * @remarks
	 * 将更改指定玩家的权限，以及他们是否为操作员。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */
	setOp(isOp: boolean): void;

	/**
	 * @remarks
	 * 设置这个特定玩家的当前起始重生点。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	setSpawnPoint(spawnPoint?: DimensionLocation): void;

	/**
	 * @beta
	 * @remarks
	 * 在世界上的指定位置创建一个新的粒子发射器。仅对目标玩家可见。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param effectName
	 * 要创建的粒子的标识符。
	 * @param location
	 * 创建粒子发射器的位置。
	 * @param molangVariables
	 * 一组可选的、可自定义的变量，可以为此粒子调整。
	 */
	spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;

	/**
	 * @remarks
	 * 为特定冷却类别设置物品冷却时间。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param cooldownCategory
	 * 指定要检索当前冷却时间的冷却类别。
	 * @param tickDuration
	 * 物品冷却的持续时间（以刻为单位）。
	 */
	startItemCooldown(cooldownCategory: string, tickDuration: number): void;

	/**
	 * @remarks
	 * 停止这个特定玩家播放的任何音乐曲目。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 */
	stopMusic(): void;
}

/**
 * @beta
 * 一个与玩家瞄准辅助相关的API容器。
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class PlayerAimAssist {
	private constructor();

	/**
	 * @remarks
	 * 玩家当前激活的瞄准辅助设置，如果没有激活则为 undefined。
	 */
	readonly settings?: PlayerAimAssistSettings;

	/**
	 * @remarks
	 * 设置玩家的瞄准辅助设置。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param settings
	 * 要为玩家激活的瞄准辅助设置，如果为 undefined 将禁用瞄准辅助。
	 */
	set(settings?: PlayerAimAssistSettings): void;
}

/**
 * 包含关于玩家破坏方块后事件的信息。
 */
export class PlayerBreakBlockAfterEvent extends BlockEvent {
	private constructor();

	/**
	 * @remarks
	 * 返回在方块被破坏之前的方块排列信息。
	 */
	readonly brokenBlockPermutation: BlockPermutation;

	/**
	 * @remarks
	 * 在方块被破坏后用于破坏方块的物品（物品堆），如果是空手则为 undefined。
	 */
	readonly itemStackAfterBreak?: ItemStack;

	/**
	 * @remarks
	 * 在方块被破坏之前用于破坏方块的物品（物品堆），如果是空手则为 undefined。
	 */
	readonly itemStackBeforeBreak?: ItemStack;

	/**
	 * @remarks
	 * 破坏此事件方块的玩家。
	 */
	readonly player: Player;
}

/**
 * 管理玩家破坏方块时连接的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 添加一个当玩家破坏方块时触发的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent) => void;

	/**
	 * @remarks
	 * 删除一个当玩家破坏方块时触发的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

/**
 * 包含关于玩家破坏方块之前事件的信息。
 */
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 取消挖掘方块事件，若为 `true`。
	 *
	 * If set to true, cancels the block break event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 用于挖掘方块的物品堆，如果空手则为 `undefined`。
	 *
	 * The item stack that is being used to break the block, or
	 * undefined if empty hand.
	 *
	 */
	itemStack?: ItemStack;
	/**
	 * @remarks
	 * 正在挖掘方块的玩家。
	 *
	 * Player breaking the block for this event.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理在玩家挖掘方块之前连接的回调函数。
 *
 * Manages callbacks that are connected to before a player
 * breaks a block.
 */
export class PlayerBreakBlockBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在玩家挖掘方块之前被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called before a block is broken
	 * by a player.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在玩家挖掘方块之前被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called before a player breaks
	 * a block.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

/**
 * @beta
 * 当玩家按下按钮时的事件数据。
 *
 * Event data for when a player presses a button.
 */
export class PlayerButtonInputAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 此事件相关的按钮。
	 *
	 * The button this event is about.
	 *
	 */
	readonly button: InputButton;
	/**
	 * @remarks
	 * 按钮转变的状态。
	 *
	 * The state that this button transferred to.
	 *
	 */
	readonly newButtonState: ButtonState;
	/**
	 * @remarks
	 * 进行输入操作的玩家。
	 *
	 * The player that performed the input event.
	 *
	 */
	readonly player: Player;
}

/**
 * @beta
 * 管理与玩家输入相关的回调函数。
 *
 * Manages callbacks that are connected to player inputs.
 */
export class PlayerButtonInputAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在玩家进行输入后被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called after the player
	 * performs an input.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void, options?: InputEventOptions): (arg0: PlayerButtonInputAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在玩家进行输入后被调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called after the player
	 * performs an input.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

/**
 * 表示玩家的光标物品栏。用于在物品栏界面中在不同容器间移动物品。 不适用于触控操作。
 *
 * Represents the players cursor inventory. Used when moving
 * items between between containers in the inventory UI. Not
 * used with touch controls.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 玩家光标物品栏中当前的物品堆。
	 *
	 * The ItemStack currently in the players cursor inventory.
	 *
	 * @throws This property can throw when used.
	 */
	readonly item?: ItemStack;
	static readonly componentId = "minecraft:cursor_inventory";
	/**
	 * @remarks
	 * 清空玩家的光标物品栏。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	clear(): void;
}

/**
 * 包含有关玩家维度发生变化的相关信息。
 *
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示玩家正在从哪个维度切换。
	 *
	 * The dimension the player is changing from.
	 *
	 */
	readonly fromDimension: Dimension;

	/**
	 * @remarks
	 * 表示玩家在维度切换前的位置。
	 *
	 * The location the player was at before changing dimensions.
	 *
	 */
	readonly fromLocation: Vector3;

	/**
	 * @remarks
	 * 表示正在切换维度的玩家句柄。
	 *
	 * Handle to the player that is changing dimensions.
	 *
	 */
	readonly player: Player;

	/**
	 * @remarks
	 * 表示玩家将要切换到哪个维度。
	 *
	 * The dimension that the player is changing to.
	 *
	 */
	readonly toDimension: Dimension;

	/**
	 * @remarks
	 * 表示玩家切换维度后生成的位置。
	 *
	 * The location the player will spawn to after changing
	 * dimensions.
	 *
	 */
	readonly toLocation: Vector3;
}

/**
 * 管理与成功的玩家维度变化相关的回调。
 *
 * Manages callbacks that are connected to successful player
 * dimension changes.
 */
export class PlayerDimensionChangeAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 订阅指定的回调到玩家维度变化后事件。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Subscribes the specified callback to a player dimension
	 * change after event.
	 *
	 */
	subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): (arg0: PlayerDimensionChangeAfterEvent) => void;

	/**
	 * @remarks
	 * 从玩家维度变化后事件中删除指定的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes the specified callback from a player dimension
	 * change after event.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
	private constructor();
	readonly personaPieceId: string;
	readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;

	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

/**
 * 描述了玩家游戏模式更改后的事件信息。
 *
 * Contains information regarding an event after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 表示更改前的游戏模式。
	 *
	 * The previous game mode before the change.
	 *
	 */
	readonly fromGameMode: GameMode;

	/**
	 * @remarks
	 * 表示此事件的源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;

	/**
	 * @remarks
	 * 表示更改后的当前游戏模式。
	 *
	 * The current game mode after the change.
	 *
	 */
	readonly toGameMode: GameMode;
}

/**
 * 管理与玩家游戏模式更改后相关的回调。
 *
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 */
export class PlayerGameModeChangeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在玩家游戏模式更改后调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在玩家游戏模式更改后调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

/**
 * 包含玩家与实体交互前的事件信息。
 *
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerGameModeChangeBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则取消游戏模式更改。
	 *
	 * If set to true the game mode change will be cancelled.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 当前的游戏模式。
	 *
	 * The current game mode.
	 *
	 */
	readonly fromGameMode: GameMode;
	/**
	 * @remarks
	 * 该事件的来源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;
	/**
	 * @remarks
	 * 即将更改到的游戏模式。
	 *
	 * The game mode being changed to.
	 *
	 */
	toGameMode: GameMode;
}

/**
 * 管理与玩家游戏模式更改前相关的回调函数。
 *
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在玩家游戏模式更改前调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): (arg0: PlayerGameModeChangeBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除在玩家游戏模式更改前调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

/**
 * @rc
 * 玩家输入模式更改事件数据。
 *
 * Event data for when a player input mode changes.
 */
export class PlayerInputModeChangeAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 玩家使用的新输入模式。
	 *
	 * The new input mode used by the player.
	 *
	 */
	readonly newInputModeUsed: InputMode;
	/**
	 * @remarks
	 * 输入模式发生更改的玩家。
	 *
	 * The player that had an input mode change.
	 *
	 */
	readonly player: Player;
	/**
	 * @remarks
	 * 玩家之前使用的输入模式。
	 *
	 * The previous input mode used by the player.
	 *
	 */
	readonly previousInputModeUsed: InputMode;
}

/**
 * @rc
 * 管理与玩家输入模式相关的回调函数。
 *
 * Manages callbacks that are connected to player input mode.
 */
export class PlayerInputModeChangeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在玩家输入模式更改后调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): (arg0: PlayerInputModeChangeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在玩家输入模式更改后调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}
export class PlayerInputPermissionCategoryChangeAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示已更改的输入权限类别。
	 *
	 * The category of input permissions that have changed.
	 *
	 */
	readonly category: InputPermissionCategory;
	/**
	 * @remarks
	 * 表示玩家输入权限的启用/禁用状态。
	 *
	 * The enabled/disabled state of the players input permissions.
	 *
	 */
	readonly enabled: boolean;
	/**
	 * @remarks
	 * 表示输入权限已更改的玩家。
	 *
	 * The player that has had their input permissions changed.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理在玩家输入权限更改后连接的回调。
 *
 * Manages callbacks that are connected to after a players
 * input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，在玩家输入权限更改后调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called after a players input
	 * permissions change.
	 *
	 */
	subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在玩家输入权限更改后调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called after a players input
	 * permissions change.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

/**
 * 包含用于启用/禁用玩家输入权限的 API。
 *
 * Contains APIs to enable/disable player input permissions.
 */
export class PlayerInputPermissions {
	private constructor();
	/**
	 * @remarks
	 * 玩家相机输入权限。若为 `true`，则启用与相机移动相关的输入。
	 *
	 * Camera input permissions for the player. If set to true,
	 * input relating to camera movement is enabled for the player.
	 *
	 */
	cameraEnabled: boolean;
	/**
	 * @remarks
	 * 玩家移动输入权限。若为 `true`，则启用与移动相关的输入。
	 *
	 * Movement input permissions for the player. If set to true
	 * input relating to movement is enabled for the player.
	 *
	 */
	movementEnabled: boolean;
	/**
	 * @rc
	 * @remarks
	 * 若输入权限被启用，则返回 `true`。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 *
	 * {@link Error}
	 *
	 * Returns true if an input permission is enabled.
	 *
	 * This function can throw errors.
	 *
	 */
	isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
	/**
	 * @rc
	 * @remarks
	 * 启用或禁用输入权限。当启用时，输入生效，当禁用时，输入失效。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws
	 *
	 * Enable or disable an input permission. When enabled the
	 * input will work, when disabled will not work.
	 *
	 * This function can throw errors.
	 */
	setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

/**
 * 包含关于玩家成功与方块交互后的事件信息。
 *
 * Contains information regarding an event after a player
 * successfully interacts with a block.
 */
export class PlayerInteractWithBlockAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 交互成功前的物品堆，如果手上没有物品则为 `undefined`。
	 *
	 * The ItemStack before the interaction succeeded, or undefined
	 * if hand is empty.
	 *
	 */
	readonly beforeItemStack?: ItemStack;
	/**
	 * @remarks
	 * 将要交互的方块。
	 *
	 * The block that will be interacted with.
	 *
	 */
	readonly block: Block;
	/**
	 * @remarks
	 * 交互的方块面。
	 *
	 * The face of the block that is being interacted with.
	 *
	 */
	readonly blockFace: Direction;
	/**
	 * @remarks
	 * 相对于方块底部西北角放置物品的位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block where the item is placed.
	 *
	 */
	readonly faceLocation: Vector3;
	/**
	 * @remarks
	 * 若事件触发于玩家最初的交互按钮按下时，为 `true`；若触发于持续按住交互按钮，则为 `false`。
	 *
	 * This value will be true if the event was triggered on
	 * players initial interaction button press and false on events
	 * triggered from holding the interaction button.
	 *
	 */
	readonly isFirstEvent: boolean;
	/**
	 * @remarks
	 * 交互成功后的物品堆，如果手上没有物品则为 `undefined`。
	 *
	 * The ItemStack after the interaction succeeded, or undefined
	 * if hand is empty.
	 *
	 */
	readonly itemStack?: ItemStack;
	/**
	 * @remarks
	 * 表示本次事件的源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理在玩家与方块交互后连接的回调。
 *
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，在玩家与方块交互后调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called after a player interacts
	 * with a block.
	 *
	 */
	subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): (arg0: PlayerInteractWithBlockAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在玩家与方块交互后调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called after a player
	 * interacts with a block.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

/**
 * 包含关于玩家与方块交互之前的事件信息。
 *
 * Contains information regarding an event before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEvent {
	private constructor();

	/**
	 * 表示将要被交互的方块。
	 *
	 * The block that will be interacted with.
	 *
	 */
	readonly block: Block;

	/**
	 * 表示正在被交互的方块的面。
	 *
	 * The face of the block that is being interacted with.
	 *
	 */
	readonly blockFace: Direction;

	/**
	 * 若为 `true`，则表示取消交互。
	 *
	 * If set to true the interaction will be cancelled.
	 *
	 */
	cancel: boolean;

	/**
	 * 表示物品放置在相对方块底部西北角的位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block where the item is placed.
	 *
	 */
	readonly faceLocation: Vector3;

	/**
	 * 如果事件在玩家最初的交互按键按下时触发，此值为 `true`，如果事件在按住交互按键时触发，此值为 `false`。
	 *
	 * This value will be true if the event was triggered on
	 * players initial interaction button press and false on events
	 * triggered from holding the interaction button.
	 *
	 */
	readonly isFirstEvent: boolean;

	/**
	 * 表示在交互中使用的物品堆，如果为空手则为 `undefined`。
	 *
	 * The item stack that is being used in the interaction, or
	 * undefined if empty hand.
	 *
	 */
	readonly itemStack?: ItemStack;

	/**
	 * 表示该事件的来源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理在玩家与方块交互之前连接的回调。
 *
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 */
export class PlayerInteractWithBlockBeforeEventSignal {
	private constructor();

	/**
	 * 添加在玩家与方块交互之前将被调用的回调。
	 *
	 * Adds a callback that will be called before a player
	 * interacts with a block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): (arg0: PlayerInteractWithBlockBeforeEvent) => void;

	/**
	 * 移除在玩家与方块交互之前被调用的回调。
	 *
	 * Removes a callback from being called before a player
	 * interacts with a block.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

/**
 * 包含有关玩家成功与实体交互后事件的信息。
 *
 * Contains information regarding an event after a player
 * successfully interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
	private constructor();

	/**
	 * 表示交互成功之前的物品堆，如果为空手则为 `undefined`。
	 *
	 * The ItemStack before the interaction succeeded, or undefined
	 * if hand is empty.
	 *
	 */
	readonly beforeItemStack?: ItemStack;

	/**
	 * 表示交互成功之后的物品堆，如果为空手则为 `undefined`。
	 *
	 * The ItemStack after the interaction succeeded, or undefined
	 * if hand is empty.
	 *
	 */
	readonly itemStack?: ItemStack;

	/**
	 * 表示该事件的来源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;

	/**
	 * 表示将要被交互的实体。
	 *
	 * The entity that will be interacted with.
	 *
	 */
	readonly target: Entity;
}

/**
 * 管理在玩家与实体交互之后连接的回调。
 *
 * Manages callbacks that are connected to after a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
	private constructor();

	/**
	 * 添加在玩家与实体交互之后将被调用的回调。
	 *
	 * Adds a callback that will be called after a player interacts
	 * with an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): (arg0: PlayerInteractWithEntityAfterEvent) => void;

	/**
	 * 移除在玩家与实体交互之后被调用的回调。
	 *
	 * Removes a callback from being called after a player
	 * interacts with an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

/**
 * 包含有关玩家与实体交互之前事件的信息。
 *
 * Contains information regarding an event before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEvent {
	private constructor();

	/**
	 * 若为 `true`，则表示取消交互。
	 *
	 * If set to true the interaction will be cancelled.
	 *
	 */
	cancel: boolean;

	/**
	 * 表示在交互中使用的物品堆，如果为空手则为 `undefined`。
	 *
	 * The item stack that is being used in the interaction, or
	 * undefined if empty hand.
	 *
	 */
	readonly itemStack?: ItemStack;

	/**
	 * 表示该事件的来源玩家。
	 *
	 * Source Player for this event.
	 *
	 */
	readonly player: Player;

	/**
	 * 表示将要被交互的实体。
	 *
	 * The entity that will be interacted with.
	 *
	 */
	readonly target: Entity;
}

/**
 * 管理在玩家与实体交互之前连接的回调。
 *
 * Manages callbacks that are connected to before a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityBeforeEventSignal {
	private constructor();

	/**
	 * @remarks
	 * 在玩家与一个实体交互之前添加一个回调函数。
	 *
	 * Adds a callback that will be called before a player interacts with an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): (arg0: PlayerInteractWithEntityBeforeEvent) => void;

	/**
	 * @remarks
	 * 在玩家与一个实体交互之前移除一个回调函数。
	 *
	 * Removes a callback from being called before a player interacts with an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

/**
 * @beta
 * 此类型可用于遍历玩家集合。这意味着它可以在 for...of 语句、Array.from(iterator) 等语句中使用。
 *
 * This type is usable for iterating over a set of players. This means it can be used in statements like for...of statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
	private constructor();

	/**
	 * @remarks
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	[Symbol.iterator](): Iterator<Player>;

	/**
	 * @remarks
	 * 检索此迭代中的下一个项目。结果的 IteratorResult 包含 .done 和 .value 属性，这些属性可用于查看迭代中的下一个玩家。
	 *
	 * Retrieves the next item in this iteration. The resulting IteratorResult contains .done and .value properties which can be used to see the next Player in the iteration.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	next(): IteratorResult<Player>;
}

/**
 * 表示一个已加入的玩家的信息。有关玩家第一次在游戏中生成时可以返回的更详细信息，请参见 playerSpawn 事件。
 *
 * Contains information regarding a player that has joined. See the playerSpawn event for more detailed information that could be returned after the first time a player has spawned within the game.
 */
export class PlayerJoinAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 已加入游戏的玩家的不透明字符串标识符。
	 *
	 * Opaque string identifier of the player that joined the game.
	 *
	 */
	readonly playerId: string;

	/**
	 * @remarks
	 * 已加入的玩家的名称。
	 *
	 * Name of the player that has joined.
	 *
	 */
	readonly playerName: string;
}

/**
 * 管理与玩家加入世界相关的回调。
 *
 * Manages callbacks that are connected to a player joining the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
	private constructor();
}

/**
 * 表示一个已离开世界的玩家的信息。
 *
 * Contains information regarding a player that has left the world.
 */
export class PlayerLeaveAfterEvent {
	private constructor();

	/**
	 * @remarks
	 * 已离开事件的玩家的不透明字符串标识符。
	 *
	 * Opaque string identifier of the player that has left the event.
	 *
	 */
	readonly playerId: string;

	/**
	 * @remarks
	 * 已离开世界的玩家的名称。
	 *
	 * Player that has left the world.
	 *
	 */
	readonly playerName: string;
}

/**
 * 管理与玩家离开世界相关的回调。
 *
 * Manages callbacks that are connected to a player leaving the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
	private constructor();
}

/**
 * 包含有关玩家正在离开世界的信息。
 *
 * Contains information regarding a player that is leaving the
 * world.
 */
export class PlayerLeaveBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 离开的玩家。
	 *
	 * The leaving player.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理与玩家离开世界相关的回调。
 *
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，该回调将在玩家离开世界时被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除将在玩家离开世界时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

/**
 * 包含有关玩家放置方块事件的信息。
 *
 * Contains information regarding an event where a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 放置此方块的玩家。
	 *
	 * Player that placed the block for this event.
	 *
	 */
	readonly player: Player;
}

/**
 * 管理与玩家放置方块相关的回调。
 *
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调，当玩家放置方块时将被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个当玩家放置方块时将被调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

/**
 * @beta
 * 包含有关玩家在放置方块之前的事件的信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 若设置为 `true`，则取消放置方块事件。
	 *
	 * If set to true, cancels the block place event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 新方块被放置的方块表面。
	 *
	 * The face of the block that the new block is being placed on.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 新方块相对于被放置方块的左下角（西北角）的坐标位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block where the new block is being placed onto.
	 *
	 */
	readonly faceLocation: Vector3;
	/**
	 * @remarks
	 * 正在被放置的方块变体。
	 *
	 * The block permutation that is being placed.
	 *
	 */
	readonly permutationBeingPlaced: BlockPermutation;
	/**
	 * @remarks
	 * 进行此事件的玩家。
	 *
	 * Player that is placing the block for this event.
	 *
	 */
	readonly player: Player;
}

/**
 * @beta
 * 管理在玩家放置方块前连接的回调。
 *
 * Manages callbacks that are connected to before a block is
 * placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 增加在玩家放置方块前调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called before a block is placed
	 * by a player.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除此回调，不再在玩家放置方块前调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called before an block is
	 * placed by a player.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

/**
 * 包含关于玩家生成的更多信息的事件。
 *
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示这是玩家加入游戏后的初次生成。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * If true, this is the initial spawn of a player after joining
	 * the game.
	 *
	 */
	initialSpawn: boolean;
	/**
	 * @remarks
	 * 表示刚刚加入游戏的玩家。
	 *
	 * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
	 *
	 * Object that represents the player that joined the game.
	 *
	 */
	player: Player;
}

/**
 * 注册一个当玩家生成（或死亡后重生）并完全准备好时的事件。
 *
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
	private constructor();
}

/**
 * @beta
 * 表示一种药水效果类型，比如治疗或跳跃（可用于 PotionOptions）。
 *
 * Represents a type of potion effect - like healing or leaping
 * - that can be used with PotionOptions.
 */
export class PotionEffectType {
	private constructor();
	readonly id: string;
}

/**
 * @beta
 * 表示一种药水液体类型，比如喷溅或滞留（可用于 PotionOptions）。
 *
 * Represents a type of potion liquid - like splash, or
 * lingering - that can be used with PotionOptions.
 */
export class PotionLiquidType {
	private constructor();
	readonly id: string;
}

/**
 * @beta
 * 表示一种药水修饰符类型，如强效或长效，可以用于 `PotionOptions`。
 *
 * Represents a type of potion modifier - like strong, or long
 * - that can be used with PotionOptions.
 */
export class PotionModifierType {
	private constructor();
	readonly id: string;
}

/**
 * @beta
 * 用于访问当前可在世界中使用的所有药水效果、液体和修饰符。
 *
 * Used for accessing all potion effects, liquids, and
 * modifiers currently available for use within the world.
 */
export class Potions {
	private constructor();
	/**
	 * @remarks
	 * 获取指定药水效果 ID 的类型句柄。
	 *
	 * Retrieves a type handle for a specified potion effect id.
	 *
	 * @param potionEffectId
	 * 有效的药水效果 ID。参见 `@minecraft/vanilla-data.MinecraftPotionEffectTypes`。
	 * A valid potion effect id. See
	 * @minecraft/vanilla-data.MinecraftPotionEffectTypes
	 * @returns
	 * 包含有效效果 ID 的类型句柄，对于无效效果 ID 返回 `undefined`。
	 * A type handle wrapping the valid effect id, or undefined for
	 * an invalid effect id.
	 */
	static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;

	/**
	 * @remarks
	 * 获取指定药水液体 ID 的类型句柄。
	 *
	 * Retrieves a type handle for a specified potion liquid id.
	 *
	 * @returns
	 * 包含有效液体 ID 的类型句柄，对于无效液体 ID 返回 `undefined`。
	 * A type handle wrapping the valid liquid id, or undefined for
	 * an invalid liquid id.
	 */
	static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;

	/**
	 * @remarks
	 * 获取指定药水修饰符 ID 的类型句柄。
	 *
	 * Retrieves a type handle for a specified potion modifier id.
	 *
	 * @returns
	 * 包含有效修饰符 ID 的类型句柄，对于无效修饰符 ID 返回 `undefined`。
	 * A type handle wrapping the valid modifier id, or undefined
	 * for an invalid modifier id.
	 */
	static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}

/**
 * 包含与压力板触发相关的变更信息。
 *
 * Contains information related to changes to a pressure plate
 * pop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 压力板触发前的红石信号强度。
	 *
	 * The redstone power of the pressure plate before it was
	 * popped.
	 */
	readonly previousRedstonePower: number;

	/**
	 * @remarks
	 * 压力板触发时的红石信号强度。
	 *
	 * The redstone power of the pressure plate at the time of the
	 * pop.
	 */
	readonly redstonePower: number;
}

/**
 * 管理与压力板触发时连接的回调函数。
 *
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 */
export class PressurePlatePopAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加在压力板触发时调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called when a pressure plate is
	 * popped.
	 */
	subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;

	/**
	 * @remarks
	 * 移除在压力板触发时调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called when a pressure plate
	 * is popped.
	 */
	unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

/**
 * 包含与压力板按下相关的变更信息。
 *
 * Contains information related to changes to a pressure plate
 * push.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示压力板在被触发前的红石强度。
	 *
	 * The redstone power of the pressure plate before it was
	 * pushed.
	 *
	 */
	readonly previousRedstonePower: number;
	/**
	 * @remarks
	 * 表示压力板在被触发时的红石强度。
	 *
	 * The redstone power of the pressure plate at the time of the
	 * push.
	 *
	 */
	readonly redstonePower: number;
	/**
	 * @remarks
	 * 表示触发压力板的来源。
	 *
	 * Source that triggered the pressure plate push.
	 *
	 */
	readonly source: Entity;
}

/**
 * 管理与压力板被触发时的回调连接。
 *
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在压力板被触发时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback 在压力板被触发时要调用的回调函数。
	 *
	 * Adds a callback that will be called when a pressure plate is
	 * pushed.
	 * @returns 注册的回调函数。
	 */
	subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在压力板被触发时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback 要移除的回调函数。
	 *
	 * Removes a callback from being called when a pressure plate
	 * is pushed.
	 */
	unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

/**
 * 包含投射物击中方块相关的信息。
 *
 * Contains information related to a projectile hitting a
 * block.
 */
export class ProjectileHitBlockAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示投射物击中发生所在的维度。
	 *
	 * Dimension where this projectile hit took place.
	 *
	 */
	readonly dimension: Dimension;
	/**
	 * @remarks
	 * 表示投射物击中方块时的方向向量。
	 *
	 * Direction vector of the projectile as it hit a block.
	 *
	 */
	readonly hitVector: Vector3;
	/**
	 * @remarks
	 * 表示投射物击中发生的具体位置。
	 *
	 * Location where the projectile hit occurred.
	 *
	 */
	readonly location: Vector3;
	/**
	 * @remarks
	 * 表示击中方块的投射物实体。
	 *
	 * Entity for the projectile that hit a block.
	 *
	 */
	readonly projectile: Entity;
	/**
	 * @remarks
	 * 表示发射投射物的可选来源实体。
	 *
	 * Optional source entity that fired the projectile.
	 *
	 */
	readonly source?: Entity;
	/**
	 * @remarks
	 * 表示击中方块时的附加信息。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Contains additional information about the block that was hit
	 * by the projectile.
	 *
	 * @returns 包含击中方块时的附加信息的对象。
	 */
	getBlockHit(): BlockHitInformation;
}

/**
 * 管理与投射物击中方块时的回调连接。
 *
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 */
export class ProjectileHitBlockAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在投射物击中方块时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback 在投射物击中方块时要调用的回调函数。
	 *
	 * Adds a callback that will be called when a projectile hits a
	 * block.
	 * @returns 注册的回调函数。
	 */
	subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在投射物击中方块时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback 要移除的回调函数。
	 *
	 * Removes a callback from being called when a projectile
	 * hits a block.
	 */
	unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

/**
 * 包含投射物击中实体相关的信息。
 *
 * Contains information related to a projectile hitting an
 * entity.
 */
export class ProjectileHitEntityAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示投射物击中发生所在的维度。
	 *
	 * Dimension where this projectile hit took place.
	 *
	 */
	readonly dimension: Dimension;
	/**
	 * @remarks
	 * 表示投射物击中实体时的方向向量。
	 *
	 * Direction vector of the projectile as it hit an entity.
	 *
	 */
	readonly hitVector: Vector3;
	/**
	 * @remarks
	 * 表示投射物击中发生的具体位置。
	 *
	 * Location where the projectile hit occurred.
	 *
	 */
	readonly location: Vector3;
	/**
	 * @remarks
	 * 表示击中实体的投射物实体。
	 *
	 * Entity for the projectile that hit an entity.
	 *
	 */
	readonly projectile: Entity;
	/**
	 * @remarks
	 * 表示发射投射物的可选来源实体。
	 *
	 * Optional source entity that fired the projectile.
	 *
	 */
	readonly source?: Entity;
	/**
	 * @remarks
	 * 表示击中实体时的附加信息。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Contains additional information about an entity that was
	 * hit.
	 *
	 * @returns 包含击中实体时的附加信息的对象。
	 */
	getEntityHit(): EntityHitInformation;
}

/**
 * 管理与投射物击中实体时的回调连接。
 *
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 */
export class ProjectileHitEntityAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * Adds a callback that will be called when a projectile hits
	 * an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
	/**
	 * @remarks
	 * Removes a callback from being called when a projectile hits
	 * an entity.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

/**
 * 表示记分板。其上包含了记分项和分数持有者。
 *
 * Contains objectives and participants for the scoreboard.
 * @seeExample updateScoreboard.ts
 */
export class Scoreboard {
	private constructor();
	/**
	 * @remarks
	 * 在记分板上添加一个新的记分项。
	 *
	 * Adds a new objective to the scoreboard.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 * @param objectiveId 记分项名称。
	 * @param displayName 记分项的显示名称。
	 * @returns 创建的记分项对象。
	 * @throws
	 * 若同名记分项已存在时，抛出 `"Failed to add objective 'objectiveId' as it is already being tracked"`。
	 * @seeExample updateScoreboard.ts
	 */
	addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
	/**
	 * @remarks
	 * 清除显示位置上正在显示的记分项。
	 *
	 * Clears the objective that occupies a display slot.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 * @param displaySlotId 显示位置。
	 * @returns 先前正显示的记分项，为空时返回 `null`。
	 *
	 */
	clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
	/**
	 * @remarks
	 * 获取名称为 `objectiveId` 的记分项对象。
	 *
	 * Returns a specific objective (by id).
	 *
	 * @param objectiveId
	 * 记分项名称。
	 *
	 * Identifier of the objective.
	 * @returns 指定的记分项对象。不存在时返回 `null`。
	 */
	getObjective(objectiveId: string): ScoreboardObjective | undefined;
	/**
	 * @remarks
	 * 获取位于指定显示位置上的记分项对象与显示配置。
	 *
	 * Returns an objective that occupies the specified display
	 * slot.
	 * @param displaySlotId 显示位置。
	 * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
	 *
	 */
	getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
	/**
	 * @remarks
	 * 获取记分板上的已定义的所有记分项。
	 *
	 * Returns all defined objectives.
	 * @returns 所有记分项对象组成的数组。
	 *
	 */
	getObjectives(): ScoreboardObjective[];
	/**
	 * @remarks
	 * 获取所有已经定义的分数持有者。
	 *
	 * Returns all defined scoreboard identities.
	 * @returns 所有分数持有者对象组成的数组。
	 *
	 */
	getParticipants(): ScoreboardIdentity[];
	/**
	 * @remarks
	 * 从记分板上移除指定的记分项。
	 *
	 * Removes an objective from the scoreboard.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 * @param objectiveId 记分项对象或名称。
	 * @returns 总是返回 `true`。
	 * @throws
	 * 若指定的记分项不存在时，抛出 `"Failed to find the objective specified"`。
	 */
	removeObjective(objectiveId: ScoreboardObjective | string): boolean;
	/**
	 * @remarks
	 * 设置指定的显示位置显示的记分项与其他显示配置。
	 *
	 * Sets an objective into a display slot with specified
	 * additional display settings.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 * @param displaySlotId 显示位置。
	 * @param objectiveDisplaySetting 记分项显示配置。
	 * @returns
	 * 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
	 *
	 * Returns the previous `ScoreboardObjective` set at the
	 * display slot, if no objective was previously set it returns
	 * `undefined`.
	 * @throws
	 * 若记分项无效，抛出 `"Failed to set invalid objective at DisplaySlot"`。
	 */
	setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective | undefined;
}

/**
 * 表示记分板上的分数持有者。
 *
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
	private constructor();
	/**
	 * @remarks
	 * 此分数持有者在玩家视角显示的名称。
	 *
	 * Returns the player-visible name of this identity.
	 *
	 */
	readonly displayName: string;
	/**
	 * @remarks
	 * 此分数持有者的 ID。
	 *
	 * Identifier of the scoreboard identity.
	 *
	 */
	readonly id: number;
	/**
	 * @remarks
	 * 此分数持有者的类型。
	 *
	 * Type of the scoreboard identity.
	 *
	 */
	readonly "type": ScoreboardIdentityType;
	/**
	 * @remarks
	 * 返回此分数持有者对应的实体对象（仅当此分数持有者是一个实体或者玩家时）。
	 *
	 * If the scoreboard identity is an entity or player, returns
	 * the entity that this scoreboard item corresponds to.
	 * @returns 对应的实体对象。虚拟玩家类型的分数持有者会返回 `undefined`。
	 * @throws
	 * 若实体不存在时，抛出。
	 */
	getEntity(): Entity | undefined;
	/**
	 * @remarks
	 * Returns true if the ScoreboardIdentity reference is still
	 * valid.
	 *
	 */
	isValid(): boolean;
}

/**
 * 表示记分板上的记分项。包含了分数持有者和各自的分数。
 *
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
	private constructor();
	/**
	 * @remarks
	 * 此记分项的显示名称。
	 *
	 * Returns the player-visible name of this scoreboard
	 * objective.
	 *
	 * @throws
	 * 若记分项无效，则抛出。
	 */
	readonly displayName: string;
	/**
	 * @remarks
	 * 此记分项的名称。
	 *
	 * Identifier of the scoreboard objective.
	 *
	 * @throws
	 * 若记分项无效，则抛出。
	 */
	readonly id: string;
	/**
	 * @remarks
	 * Adds a score to the given participant and objective.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param participant
	 * Participant to apply the scoreboard value addition to.
	 * @throws This function can throw errors.
	 */
	addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
	/**
	 * @remarks
	 * 返回此记分项上已记录的分数持有者。
	 *
	 * Returns all objective participant identities.
	 * @returns 由分数持有者对象组成的数组。
	 * @throws
	 * 若记分项无效时，抛出。
	 */
	getParticipants(): ScoreboardIdentity[];
	/**
	 * @remarks
	 * 获取指定分数持有者的分数。
	 *
	 * Returns a specific score for a participant.
	 *
	 * @param participant
	 * 分数持有者。
	 *
	 * Identifier of the participant to retrieve a score for.
	 * @returns 指定分数持有者的分数。
	 * @throws
	 * 若此记分项上未记录分数持有者的分数，抛出 `"Failed to retrieve score for '<participant>'"`。
	 * 若记分项无效时，抛出。
	 */
	getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
	/**
	 * @remarks
	 * 获取记分项上记录的所有分数信息。
	 *
	 * Returns specific scores for this objective for all
	 * participants.
	 * @returns 由分数信息对象组成的数组。
	 * @throws
	 * 若记分项无效时，抛出。
	 */
	getScores(): ScoreboardScoreInfo[];
	/**
	 * @remarks
	 * Returns if the specified identity is a participant of the
	 * scoreboard objective.
	 *
	 * @throws This function can throw errors.
	 */
	hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
	/**
	 * @remarks
	 * Returns true if the ScoreboardObjective reference is still
	 * valid.
	 *
	 */
	isValid(): boolean;
	/**
	 * @remarks
	 * Removes a participant from this scoreboard objective.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param participant
	 * Participant to remove from being tracked with this
	 * objective.
	 * @throws This function can throw errors.
	 */
	removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
	/**
	 * @remarks
	 * Sets a score for a participant.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param participant
	 * Identity of the participant.
	 * @param score
	 * New value of the score.
	 * @throws This function can throw errors.
	 */
	setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

/**
 * 表示分数信息。包含了分数持有者以及它在记分板上的对应的分数。
 *
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
	private constructor();
	/**
	 * @remarks
	 * 分数归属的分数持有者。
	 *
	 * This scoreboard participant for this score.
	 *
	 */
	readonly participant: ScoreboardIdentity;
	/**
	 * @remarks
	 * 该记分项上分数持有者的分数。
	 *
	 * Score value of the identity for this objective.
	 *
	 */
	readonly score: number;
}

/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * @seeExample setTitle.ts
 * @seeExample setTitleAndSubtitle.ts
 * @seeExample countdown.ts
 */
export class ScreenDisplay {
	private constructor();

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	getHiddenHudElements(): HudElement[];

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	hideAllExcept(hudElements?: HudElement[]): void;

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	isForcedHidden(hudElement: HudElement): boolean;

	/**
	 * 如果当前对屏幕显示管理对象的引用有效且功能正常，则返回 true。
	 *
	 * Returns true if the current reference to this screen display manager object is valid and functional.
	 *
	 */
	isValid(): boolean;

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 */
	resetHudElements(): void;

	/**
	 * 设置动作栏文字 - 显示在标题下方和热栏上的一段文字。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param text
	 * 新的动作栏文字内容。
	 * New value for the action bar text.
	 * @throws This function can throw errors.
	 */
	setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;

	/**
	 * 设置抬头显示（HUD）中某个特定元素的可见性。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param visible
	 * 设置 HUD 元素是否可见，或者将其重置为默认值。
	 * Whether to set the HUD element to invisible, or to reset it back to its default.
	 * @param hudElements
	 * 可选的 HUD 元素列表，用于配置其可见性。
	 * Optional list of HUD elements to configure visibility for.
	 * @throws This function can throw errors.
	 */
	setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;

	/**
	 * 将在玩家屏幕上显示标题。如果设置为空字符串，将清除标题。您还可以选择指定一个额外的副标题以及淡入、停留和淡出时间。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 * @seeExample setTitle.ts
	 * @seeExample setTitleAndSubtitle.ts
	 * @seeExample countdown.ts
	 */
	setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;

	/**
	 * 如果副标题是通过 setTitle 方法先前显示的，则更新副标题。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @throws This function can throw errors.
	 * @seeExample countdown.ts
	 */
	updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

/**
 * 返回有关 /scriptevent 命令调用的附加数据。
 *
 * Returns additional data about a /scriptevent command invocation.
 */
export class ScriptEventCommandMessageAfterEvent {
	private constructor();

	/**
	 * 此 ScriptEvent 命令消息的标识符。
	 *
	 * Identifier of this ScriptEvent command message.
	 */
	readonly id: string;

	/**
	 * 如果此命令是通过 NPC 启动的，则返回启动 NPC 对话的实体。
	 *
	 * If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue.
	 */
	readonly initiator?: Entity;

	/**
	 * 通过脚本事件命令传递的可选附加数据。
	 *
	 * Optional additional data passed in with the script event command.
	 */
	readonly message: string;

	/**
	 * 如果此命令是通过方块触发的（例如命令方块），则返回源方块。
	 *
	 * Source block if this command was triggered via a block (e.g., a command block).
	 */
	readonly sourceBlock?: Block;

	/**
	 * 如果此命令是由实体触发的（例如一个 NPC），则返回源实体。
	 *
	 * Source entity if this command was triggered by an entity (e.g., an NPC).
	 */
	readonly sourceEntity?: Entity;

	/**
	 * 返回触发此命令的源类型。
	 *
	 * Returns the type of source that fired this command.
	 */
	readonly sourceType: ScriptEventSource;
}

/**
 * 允许为响应传入的 /scriptevent 命令注册事件处理程序。
 *
 * Allows for registering an event handler that responds to inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageAfterEventSignal {
	private constructor();

	/**
	 * 注册新的 ScriptEvent 处理程序。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent) => void;

	/**
	 * 取消订阅特定的 ScriptEvent 事件处理程序。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

/**
 * 描述关于该可骑乘实体的一个特定座位位置。
 *
 * Describes a particular seating position on this rideable entity.
 */
export class Seat {
	private constructor();

	/**
	 * 骑乘此实体时骑乘者允许旋转的角度（以度为单位）。
	 *
	 * Angle in degrees that a rider is allowed to rotate while riding this entity.
	 */
	readonly lockRiderRotation: number;

	/**
	 * 此座位可支持的最大骑乘者数量。
	 *
	 * A maximum number of riders that this seat can support.
	 */
	readonly maxRiderCount: number;

	/**
	 * 如果要填满此座位，则可以占据此座位位置的最小骑乘者数量。
	 *
	 * A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
	 */
	readonly minRiderCount: number;

	/**
	 * 此座位相对于实体位置的物理位置。
	 *
	 * Physical location of this seat, relative to the entity's location.
	 */
	readonly position: Vector3;

	/**
	 * 旋转骑乘者的角度（以度为单位）。
	 *
	 * Angle in degrees to rotate riders by.
	 */
	readonly seatRotation: number;
}

/**
 * @beta
 * 管理传递给服务器的消息回调。此事件目前尚未完全实现，应该避免使用。
 *
 * Manages callbacks that are message passing to a server. This event is not currently fully implemented, and should not be used.
 */
export class ServerMessageAfterEventSignal {
	private constructor();

	/**
	 * 添加将在传递内部消息时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;

	/**
	 * 删除在传递内部消息时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

/**
 * @beta
 */
export class ShutdownBeforeEventSignal {
	private constructor();

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

/**
 * @beta
 */
export class ShutdownEvent {
	private constructor();
}

/**
 * 表示已加载的结构模板（.mcstructure 文件）。可以使用 /structure 命令或 {@link StructureManager} API 在世界中放置结构。
 *
 * Represents a loaded structure template (.mcstructure file).
 * Structures can be placed in a world using the /structure
 * command or the {@link StructureManager} APIs.
 */
export class Structure {
	private constructor();

	/**
	 *
	 * 结构的名称。标识符必须包含一个命名空间。对于通过 /structure 命令或结构方块创建的结构，此命名空间默认为 "mystructure"。
	 *
	 * The name of the structure. The identifier must include a
	 * namespace. For structures created via the /structure command
	 * or structure blocks, this namespace defaults to
	 * "mystructure".
	 *
	 */
	readonly id: string;

	/**
	 * 结构的尺寸。例如，一个单块结构的大小为 {x:1, y:1, z:1}。
	 *
	 * The dimensions of the structure. For example, a single block
	 * structure will have a size of {x:1, y:1, z:1}
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link InvalidStructureError}
	 *
	 */
	readonly size: Vector3;

	/**
	 * 返回表示在给定位置的结构内包含的方块的 BlockPermutation。
	 *
	 * Returns a BlockPermutation representing the block contained
	 * within the Structure at the given location.
	 *
	 * @param location
	 * 方块相对于结构原点的位置。
	 *
	 * The block location relative to the Structure's origin.
	 *
	 * @returns
	 * 返回一个 BlockPermutation。如果在给定位置不存在方块，则返回 undefined。
	 *
	 * Returns a BlockPermutation. Returns undefined if a block
	 * does not exist at the given location.
	 *
	 * @throws
	 * 如果位置超出结构的边界，则抛出错误。 如果结构已被删除，则抛出错误。
	 *
	 * Throws if the location is outside the structure's bounds.
	 * Throws if the Structure has been deleted.
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link InvalidStructureError}
	 */
	getBlockPermutation(location: Vector3): BlockPermutation | undefined;

	/**
	 * 返回给定位置的方块是否被水淹没。
	 *
	 * Returns whether the block at the given location is
	 * waterlogged.
	 *
	 * @param location
	 * 方块相对于结构原点的位置。
	 *
	 * The block location relative to the Structure's origin.
	 *
	 * @returns
	 * 返回给定位置的方块是否被水淹没。如果在给定位置不存在方块，则返回 false。
	 *
	 * Returns whether the block at the given location is
	 * waterlogged. Returns false if a block does not exist at the
	 * given location.
	 *
	 * @throws
	 * 如果位置超出结构的边界，则抛出错误。 如果结构已被删除，则抛出错误。
	 *
	 * Throws if the location is outside the structure's bounds.
	 * Throws if the Structure has been deleted.
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link InvalidStructureError}
	 */
	getIsWaterlogged(location: Vector3): boolean;

	/**
	 * 返回结构是否有效。如果结构被删除，则可能变为无效。
	 *
	 * Returns whether the Structure is valid. The Structure may
	 * become invalid if it is deleted.
	 *
	 * @returns
	 * 返回结构是否有效。
	 *
	 * Returns whether the Structure is valid.
	 */
	isValid(): boolean;

	/**
	 * 创建一个结构的副本并以新名称保存。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Creates a copy of a Structure and saves it with a new name.
	 *
	 * @param identifier
	 * 新创建结构的名称。
	 *
	 * The name of the newly created Structure.
	 *
	 * @param saveMode
	 * 决定结构如何保存。默认保存到世界。
	 *
	 * Determines how the Structure should be saved. Defaults to
	 * saving to the world.
	 *
	 * @returns
	 * 返回新创建的结构。
	 *
	 * Returns the newly created structure.
	 *
	 * @throws
	 * 如果标识符无效，则抛出错误。有效标识符必须包含一个命名空间并且必须唯一。如果结构已被删除，则抛出错误。
	 *
	 * Throws if the identifier is invalid. A valid identifier must
	 * include a namespace and must be unique.
	 * Throws if the Structure has been deleted.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link InvalidStructureError}
	 */
	saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;

	/**
	 * 保存已修改的结构到世界文件。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Saves a modified Structure to the world file.
	 *
	 * @throws
	 * 如果结构已被删除，则抛出错误。
	 *
	 * Throws if the Structure has been deleted.
	 *
	 * {@link InvalidStructureError}
	 */
	saveToWorld(): void;

	/**
	 * 在结构内设置一个 BlockPermutation。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Sets a BlockPermutation within a Structure.
	 *
	 * @param location
	 * 方块相对于结构原点的位置。
	 *
	 * The block location relative to the Structure's origin.
	 *
	 * @param blockPermutation
	 * 要设置的 BlockPermutation。
	 *
	 * The BlockPermutation to set.
	 *
	 * @param waterlogged
	 * 指定方块是否应被水淹没。空气和未定义方块不能被水淹没。
	 *
	 * Specifies whether the block should be waterlogged. Air and
	 * undefined blocks cannot be waterlogged.
	 *
	 * @throws
	 * 如果方块类型是 StructureVoid，则抛出错误。 如果方块未定义且 waterlogged 设置为 true，则抛出错误。 如果方块是空气且 waterlogged 设置为 true，则抛出错误。如果位置超出结构的边界，则抛出错误。如果结构已被删除，则抛出错误。
	 *
	 * Throws if the type of block is StructureVoid.
	 * Throws if the block is undefined and waterlogged is set to
	 * true.
	 * Throws if the block is air and waterlogged is set to true.
	 * Throws if the location is outside the structure's bounds.
	 * Throws if the Structure has been deleted.
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link InvalidStructureError}
	 */
	setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

/**
 * 结构相关 API 的管理器。包括创建、获取、放置和删除结构的 API。
 *
 * Manager for Structure related APIs. Includes APIs for
 * creating, getting, placing and deleting Structures.
 */
export class StructureManager {
	private constructor();

	/**
	 * 创建内存中的空结构。使用 {@link Structure.setBlockPermutation} 填充块并使用 {@link Structure.saveAs} 保存更改。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Creates an empty Structure in memory. Use {@link
	 * Structure.setBlockPermutation} to populate the structure
	 * with blocks and save changes with {@link Structure.saveAs}.
	 *
	 * @param identifier
	 * 结构的名称。有效标识符必须包含一个命名空间并且必须唯一。
	 *
	 * The name of the structure. A valid identifier must include a
	 * namespace and must be unique.
	 *
	 * @param size
	 * 结构的大小。例如，要创建一个单块结构，大小应为 {x:1, y:1, z:1}。
	 *
	 * The size of the structure. For example, to create a single
	 * block structure the size should be {x:1, y:1, z:1}.
	 *
	 * @param saveMode
	 * 创建时结构应如何保存。默认保存模式为 StructureSaveMode.Memory。
	 *
	 * How the Structure should be saved upon creation. Defaults to
	 * StructureSaveMode.Memory.
	 *
	 * @returns
	 * 返回新创建的结构。
	 *
	 * Returns the newly created Structure.
	 *
	 * @throws
	 * 如果标识符无效，则抛出错误。有效标识符必须包含一个命名空间并且必须唯一。
	 *
	 * Throws if the identifier is invalid. A valid identifier must
	 * include a namespace and must be unique.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 */
	createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;

	/**
	 * 从世界中的方块创建一个新结构。这在功能上等同于 /structure save 命令。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Creates a new Structure from blocks in the world. This is
	 * functionally equivalent to the /structure save command.
	 *
	 * @param identifier
	 * 结构的名称。有效标识符必须包含一个命名空间并且必须唯一。
	 *
	 * The name of the structure. A valid identifier must include a
	 * namespace and must be unique.
	 *
	 * @param dimension
	 * 应读取方块的维度。
	 *
	 * The dimension where the blocks should be read from.
	 *
	 * @param options
	 * 从世界创建结构的其他选项。
	 *
	 * Additional options for creating a structure from the world.
	 *
	 * @returns
	 * 返回新创建的结构。
	 *
	 * Returns the newly created Structure.
	 *
	 * @throws
	 * 如果标识符无效，则抛出错误。有效标识符必须包含一个命名空间并且必须唯一。如果结构边界超出最大大小，则抛出错误。 如果结构边界包含超出世界边界的方块，则抛出错误。
	 *
	 * Throws if the identifier is invalid. A valid identifier must
	 * include a namespace and must be unique.
	 * Throws if the structure bounds exceed the maximum size.
	 * Throws if the structure bounds contains blocks outside the
	 * world bounds.
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 */
	createFromWorld(identifier: string, dimension: Dimension, from: Vector3, to: Vector3, options?: StructureCreateOptions): Structure;

	/**
	 * 从内存和世界中删除结构（如果存在）。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Deletes a structure from memory and from the world if it
	 * exists.
	 *
	 * @param structure
	 * 要删除的结构标识符或结构对象。注意，结构对象在删除后将变为无效。
	 *
	 * The structure identifier or Structure object that should be
	 * deleted. Note, a Structure object will become invalid after
	 * it is deleted.
	 *
	 * @returns
	 * 返回结构是否被删除。
	 *
	 * Returns whether the structure was removed.
	 *
	 * @throws
	 * 如果无法删除结构，则抛出错误。例如，从行为包加载的结构。
	 *
	 * Throws if a structure cannot be removed. For example, a
	 * structure loaded from a Behavior Pack.
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 */
	delete(structure: string | Structure): boolean;

	/**
	 * 获取保存到内存或世界的结构。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Gets a Structure that is saved to memory or the world.
	 *
	 * @param identifier
	 * 要获取的结构的名称。
	 *
	 * The name of the structure to get.
	 *
	 * @returns
	 * 如果存在，则返回一个结构，否则返回 undefined。
	 *
	 * Returns a Structure if it exists, otherwise undefined.
	 */
	get(identifier: string): Structure | undefined;

	/**
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	getWorldStructureIds(): string[];

	/**
	 * 在世界中放置一个结构。放置在未加载区块中的结构将被排队等待加载。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Places a structure in the world. Structures placed in
	 * unloaded chunks will be queued for loading.
	 *
	 * @param structure
	 * 结构的标识符或结构对象。
	 *
	 * The structure's identifier or a Structure object.
	 *
	 * @param dimension
	 * 结构应放置的维度。
	 *
	 * The dimension where the Structure should be placed.
	 *
	 * @param location
	 * 结构应放置在维度内的位置。
	 *
	 * The location within the dimension where the Structure should
	 * be placed.
	 *
	 * @param options
	 * 结构放置的其他选项。
	 *
	 * Additional options for Structure placement.
	 *
	 * @throws
	 * 如果完整性值超出范围 [0,1]，则抛出错误 如果完整性种子无效，则抛出错误 如果放置位置包含超出世界边界的块，则抛出错误
	 *
	 * Throws if the integrity value is outside of the range [0,1]
	 * Throws if the integrity seed is invalid.
	 * Throws if the placement location contains blocks that are
	 * outside the world bounds.
	 *
	 * {@link minecraftcommon.ArgumentOutOfBoundsError}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link InvalidStructureError}
	 */
	place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;

	/**
	 * @beta
	 * @remarks
	 * 在世界中放置部分拼图结构。这对于调试拼图块之间的连接很有用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Places a partial jigsaw structure in the world. This is
	 * useful for debugging connections between jigsaw blocks.
	 *
	 * @param pool
	 * 要从中启动的模板池标识符。
	 *
	 * The identifier of the template pool to start from.
	 *
	 * @param targetJigsaw
	 * 要从中启动的拼图块名称。此块必须包含在至少一个起始池结构模板中。
	 *
	 * The name of the jigsaw block to start from. This block must
	 * be included in at least one of the starting pool structure
	 * templates.
	 *
	 * @param maxDepth
	 * 拼图结构的最大递归深度。
	 *
	 * The maximum recursion depth for the jigsaw structure.
	 *
	 * @param dimension
	 * 维度，放置拼图结构的位置。
	 *
	 * The dimension to place the jigsaw structure in.
	 *
	 * @param location
	 * 相对于 targetJigsaw 块开始生成拼图结构的位置。
	 *
	 * The location where the jigsaw structure will begin
	 * generating relative to the targetJigsaw block.
	 *
	 * @param options
	 * 生成拼图结构时要使用的可选设置。
	 *
	 * Optional settings to use when generating the jigsaw
	 * structure.
	 *
	 * @returns
	 * 返回表示拼图结构最大边界的 {@link BoundingBox} 对象。
	 *
	 * Returns a {@link BoundingBox} object which represents the
	 * maximum bounds of the jigsaw structure.
	 *
	 * @throws
	 * 如果 maxDepth 超出范围 [1,20]，则抛出错误 如果生成失败是由于无效参数或拼图配置造成的。 如果放置位置包含超出世界边界的块，则抛出错误
	 *
	 * Throws if maxDepth is outside of the range [1,20]
	 * Throws if generation fails due to invalid parameters or
	 * jigsaw configuration.
	 * Throws if the placement location contains blocks that are
	 * outside the world bounds.
	 *
	 * {@link PlaceJigsawError}
	 */
	placeJigsaw(pool: string, targetJigsaw: string, maxDepth: number, dimension: Dimension, location: Vector3, options?: JigsawPlaceOptions): BoundingBox;
	/**
     * @beta
     * @remarks
     * 在世界中放置拼图结构。

     * Places a jigsaw structure in the world.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     * @param identifier
     * 拼图结构的标识符。
     * 
     * The identifier of the jigsaw structure.
     * @param dimension
     * 放置拼图结构的维度。
     * 
     * The dimension to place the jigsaw structure in.
     * @param location
     * 拼图结构开始生成的位置。注意，除非设置了
     * ignoreStarJigsawStructurePlaceOptions ignoreStartHeight
     * 选项，否则 y 值将被结构的起始高度覆盖。
     * 
     * The location where the jigsaw structure will begin
     * generating. Note that the y value will be overridden by the
     * structure's start height unless the
     * ignoreStarJigsawStructurePlaceOptions ignoreStartHeight
     * option is set.
     * @param options
     * 生成拼图结构时使用的可选设置。
     * 
     * Optional settings to use when generating the jigsaw
     * structure.
     * @returns
     * 返回一个 {@link BoundingBox} 对象，表示拼图结构的最大边界。
     * 
     * Returns a {@link BoundingBox} object which represents the
     * maximum bounds of the jigsaw structure.
     * @throws
     * 如果由于无效参数或拼图配置导致生成失败，则抛出错误。
     * 如果放置位置包含超出世界边界的方块，则抛出错误。
     * 
     * Throws if generation fails due to invalid parameters or
     * jigsaw configuration.
     * Throws if the placement location contains blocks that are
     * outside the world bounds.
     *
     * {@link PlaceJigsawError}
     */
	placeJigsawStructure(identifier: string, dimension: Dimension, location: Vector3, options?: JigsawStructurePlaceOptions): BoundingBox;
}

/**
 * 提供系统级事件和功能的类。
 *
 * A class that provides system-level events and functions.
 */
export class System {
	private constructor();
	/**
	 * @remarks
	 * 返回用于系统级操作的后事件集合。
	 *
	 * Returns a collection of after-events for system-level
	 * operations.
	 *
	 */
	readonly afterEvents: SystemAfterEvents;
	/**
	 * @beta
	 * @remarks
	 * 表示系统级操作的前置事件集合。
	 *
	 * Returns a collection of before-events for system-level
	 * operations.
	 *
	 */
	readonly beforeEvents: SystemBeforeEvents;
	/**
	 * @remarks
	 * 表示服务器当前的世界刻。
	 *
	 * Represents the current world tick of the server.
	 *
	 */
	readonly currentTick: number;
	/**
	 * @remarks
	 * 包含服务器的设备信息。
	 *
	 * Contains the device information for the server.
	 *
	 */
	readonly serverSystemInfo: SystemInfo;
	/**
	 * @remarks
	 * 取消通过 {@link System.runJob} 排队的作业的执行。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param jobId
	 * 从 {@link System.runJob} 返回的作业 ID。
	 * The job ID returned from {@link System.runJob}.
	 */
	clearJob(jobId: number): void;
	/**
	 * @remarks
	 * 取消之前通过 {@link System.run} 调度的函数运行。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Cancels the execution of a function run that was previously
	 * scheduled via {@link System.run}.
	 */
	clearRun(runId: number): void;
	/**
	 * @remarks
	 * 在下一个可用的未来时间运行指定的函数。这通常用于实现延迟行为和游戏循环。当在事件处理程序的上下文中运行时，这通常将在事件发生的同一刻结束时运行代码。当在其他代码（如 system.run 调用）中运行时，这将在下一刻运行函数。然而，请注意，根据系统的负载，在同一刻或下一刻运行并不保证。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 要在下一个游戏刻运行的函数回调。
	 * Function callback to run at the next game tick.
	 * @returns
	 * 一个不透明的标识符，可用于 `clearRun` 函数取消此运行的执行。
	 * An opaque identifier that can be used with the `clearRun`
	 * function to cancel the execution of this run.
	 * @seeExample trapTick.ts
	 */
	run(callback: () => void): number;
	/**
	 * @remarks
	 * 按间隔运行一组代码。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 当此间隔发生时将运行的功能代码。
	 * Functional code that will run when this interval occurs.
	 * @param tickInterval
	 * 每 N 个刻调用回调的间隔。
	 * An interval of every N ticks that the callback will be
	 * called upon.
	 * @returns
	 * 一个不透明的句柄，可用于 clearRun 方法停止在间隔上运行此函数。
	 * An opaque handle that can be used with the clearRun method
	 * to stop the run of this function on an interval.
	 * @seeExample every30Seconds.ts
	 */
	runInterval(callback: () => void, tickInterval?: number): number;
	/**
	 * @remarks
	 * 将生成器排队运行直到完成。生成器将在每个刻给定一个时间片，并将运行直到它产出或完成。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param generator
	 * 要运行的生成器实例。
	 * The instance of the generator to run.
	 * @returns
	 * 一个不透明的句柄，可用于 {@link System.clearJob} 停止此生成器的运行。
	 * An opaque handle that can be used with {@link
	 * System.clearJob} to stop the run of this generator.
	 * @seeExample cubeGenerator.ts
	 */
	runJob(generator: Generator<void, void, void>): number;
	/**
	 * @remarks
	 * 在由 tickDelay 指定的未来时间运行一组代码。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param callback
	 * 当此超时发生时将运行的功能代码。
	 * Functional code that will run when this timeout occurs.
	 * @param tickDelay
	 * 在调用间隔前的刻数。
	 * Amount of time, in ticks, before the interval will be
	 * called.
	 * @returns
	 * 一个不透明的句柄，可用于 clearRun 方法停止在间隔上运行此函数。
	 * An opaque handle that can be used with the clearRun method
	 * to stop the run of this function on an interval.
	 */
	runTimeout(callback: () => void, tickDelay?: number): number;
	/**
	 * @beta
	 * @remarks
	 * 使事件在脚本中以指定的消息 ID 和负载触发。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Causes an event to fire within script with the specified
	 * message ID and payload.
	 *
	 * @param id
	 * 要发送的消息的标识符。这是自定义的，并且依赖于您可能在世界中安装的行为包和内容。
	 * Identifier of the message to send. This is custom and
	 * dependent on the kinds of behavior packs and content you may
	 * have installed within the world.
	 * @param message
	 * 要发送的消息的数据组件。这是自定义的，并且依赖于您可能在世界中安装的行为包和内容。消息不得超过 2048 个字符。
	 * Data component of the message to send. This is custom and
	 * dependent on the kinds of behavior packs and content you may
	 * have installed within the world. Message may not exceed 2048
	 * characters in length.
	 * @throws
	 * 此函数可能会抛出错误。
	 * This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 */
	scriptEvent(id: string, message: string): void;
	/**
	 * @remarks
	 * waitTicks 返回一个在请求的刻数后解析的承诺。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * @param ticks
	 * 要等待的刻数。最小值为 1。
	 * The amount of ticks to wait. Minimum value is 1.
	 * @returns
	 * 当指定的刻数发生时解析的承诺。
	 * A promise that is resolved when the specified amount of
	 * ticks have occurred.
	 * @throws
	 * 此函数可能会抛出错误。
	 * This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 */
	waitTicks(ticks: number): Promise<void>;
}

/**
 * 提供了一组在 Minecraft 更广泛的脚本系统中触发的事件。
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 */
export class SystemAfterEvents {
	private constructor();
	/**
	 * @remarks
	 * 当设置 /scriptevent 命令时触发的事件。提供了一种方法，可以通过命令和其他系统在脚本中触发行为。
	 *
	 * An event that fires when a /scriptevent command is set. This provides a way for commands and other systems to trigger behavior within script.
	 *
	 */
	readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

/**
 * @beta
 * 表示在实际操作发生之前触发的一组事件。在大多数情况下，您可以取消或修改即将发生的事件。请注意，在 before 事件中，任何修改游戏状态的 API 都将无法运行，并会抛出错误。
 *
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error.
 */
export class SystemBeforeEvents {
	private constructor();
	readonly shutdown: ShutdownBeforeEventSignal;
	/**
	 * @remarks
	 * 当脚本看门狗关闭服务器时触发。可能是由于使用了太多内存，或引起了明显的停顿或卡顿。要防止关闭，请将事件的 cancel 属性设置为 true。
	 *
	 * Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang. To prevent shutdown, set the event's cancel property to true.
	 *
	 */
	readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

/**
 * 包含设备信息，如内存层级。
 *
 * Contains device information, like memory tier.
 */
export class SystemInfo {
	private constructor();
	/**
	 * @remarks
	 * 描述设备的内存情况。
	 *
	 * Describes the memory of the device.
	 *
	 */
	readonly memoryTier: MemoryTier;
}

/**
 * 表示与目标方块被击中的变化相关的信息。
 *
 * Contains information related to changes to a target block hit.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 来源击中方块的位置。
	 *
	 * The position where the source hit the block.
	 *
	 */
	readonly hitVector: Vector3;
	/**
	 * @remarks
	 * 方块被击中之前的红石电力值。
	 *
	 * The redstone power before the block is hit.
	 *
	 */
	readonly previousRedstonePower: number;
	/**
	 * @remarks
	 * 方块被击中时的红石电力值。
	 *
	 * The redstone power at the time the block is hit.
	 *
	 */
	readonly redstonePower: number;
	/**
	 * @remarks
	 * 击中目标方块的可选来源。
	 *
	 * Optional source that hit the target block.
	 *
	 */
	readonly source: Entity;
}

/**
 * 管理在目标方块被击中时触发的回调。
 *
 * Manages callbacks that are connected to when a target block is hit.
 */
export class TargetBlockHitAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加在目标方块被击中时调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called when a target block is hit.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
	/**
	 * @remarks
	 * 移除在目标方块被击中时调用的回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called when a target block is hit.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

/**
 * 表示触发事件的触发器。
 *
 * Represents a trigger for firing an event.
 */
export class Trigger {
	/**
	 * @remarks
	 * 触发器的事件名称。
	 *
	 * Event name of the trigger.
	 *
	 */
	eventName: string;
	/**
	 * @remarks
	 * 创建一个新的触发器。
	 *
	 * Creates a new trigger.
	 *
	 */
	constructor(eventName: string);
}

/**
 * 包含与触发线触发有关的变化信息。
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 方块是否有红石信号。
	 *
	 * Whether or not the block has redstone power.
	 *
	 */
	readonly isPowered: boolean;
	/**
	 * @remarks
	 * 触发线被触发的来源。
	 *
	 * The sources that triggered the trip wire to trip.
	 *
	 */
	readonly sources: Entity[];
}

/**
 * 管理触发线被触发时的回调。
 * @seeExample tripWireTripEvent.ts
 */
export class TripWireTripAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调以在触发线被触发时调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called when a trip wire is
	 * tripped.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在触发线被触发时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called when a trip wire is
	 * tripped.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

/**
 * @beta
 * 包含与脚本看门狗终止相关的信息。
 * Contains information related to a script watchdog
 * termination.
 */
export class WatchdogTerminateBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 如果设置为 `true`，取消脚本运行时的终止。请注意，取消终止操作可能会根据服务器配置设置不被允许。
	 *
	 * If set to true, cancels the termination of the script
	 * runtime. Note that depending on server configuration
	 * settings, cancellation of the termination may not be
	 * allowed.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 包含脚本运行时将被终止的原因。
	 *
	 * Contains the reason why a script runtime is to be
	 * terminated.
	 *
	 */
	readonly terminateReason: WatchdogTerminateReason;
}

/**
 * @beta
 * 管理与脚本运行时因违反性能看门狗系统而被终止时的回调。
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class WatchdogTerminateBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调以在脚本运行时因违反性能看门狗系统而被终止时调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Adds a callback that will be called when a script runtime is
	 * being terminated due to a violation of the performance
	 * watchdog system.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在脚本运行时因违反性能看门狗系统而被终止时调用的回调。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * Removes a callback from being called when a script runtime
	 * is being terminated due to a violation of the performance
	 * watchdog system.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

/**
 * 包含与环境中的天气变化相关的信息。
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 天气变更发生的维度。
	 *
	 * Dimension in which the weather has changed.
	 *
	 */
	readonly dimension: string;
	/**
	 * @remarks
	 * 天气变化后的天气类型。
	 *
	 * The weather type after the weather was changed.
	 *
	 */
	readonly newWeather: WeatherType;
	/**
	 * @remarks
	 * 天气变化前的天气类型。
	 *
	 * The weather type before the weather was changed.
	 *
	 */
	readonly previousWeather: WeatherType;
}

/**
 * 管理与天气变化相关的回调。
 *
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在天气变化时调用的回调。
	 *
	 * Adds a callback that will be called when weather changes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在天气变化时调用的回调。
	 *
	 * Removes a callback from being called when weather changes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

/**
 * 包含与环境中天气变化相关的信息。
 *
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 设为 `true` 时，将取消天气变化。
	 *
	 * If set to true the weather change will be cancelled.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 设置新天气的持续时间（以刻为单位）。
	 *
	 * Sets the duration of the new weather (in ticks).
	 *
	 */
	duration: number;
	/**
	 * @remarks
	 * 将要应用的天气类型。
	 *
	 * The type of weather that will be applied.
	 *
	 */
	newWeather: WeatherType;
	/**
	 * @remarks
	 * 事件触发前的天气类型。
	 *
	 * The type of weather that it was prior to the event being
	 * fired.
	 *
	 */
	readonly previousWeather: WeatherType;
}

/**
 * 管理在天气变化之前连接的回调。
 *
 * Manages callbacks that are connected to before weather
 * changing.
 */
export class WeatherChangeBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在天气变化之前调用的回调。
	 *
	 * Adds a callback that will be called before weather changes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在天气变化之前调用的回调。
	 *
	 * Removes a callback from being called before weather changes.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

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
	 * 包含一组适用于整个世界的事件。事件回调以延迟方式调用。事件回调以读写模式执行。
	 *
	 * Contains a set of events that are applicable to the entirety
	 * of the world. Event callbacks are called in a deferred
	 * manner. Event callbacks are executed in read-write mode.
	 *
	 */
	readonly afterEvents: WorldAfterEvents;
	/**
	 * @remarks
	 * 包含一组适用于整个世界的事件。事件回调立即调用。事件回调以只读模式执行。
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
	 * 适用于世界的游戏规则。
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
	 * 获取与 {@link Structure} 相关的 API 管理器。
	 *
	 * Returns the manager for {@link Structure} related APIs.
	 *
	 */
	readonly structureManager: StructureManager;
	/**
	 * @beta
	 * @remarks
	 * 一个仅限内部使用的方法，用于在客户端和服务器之间广播特定消息。
	 *
	 * A method that is internal-only, used for broadcasting
	 * specific messages between client and server.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
	 * 清除为该行为包在世界中声明的动态属性集。
	 *
	 * Clears the set of dynamic properties declared for this
	 * behavior pack within the world.
	 *
	 */
	clearDynamicProperties(): void;
	/**
	 * @remarks
	 * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
	 *
	 * Returns the absolute time since the start of the world.
	 * @returns 自游戏开始以来流逝的时间，以刻为单位。
	 *
	 * Returns the absolute time since the start of the world.
	 *
	 */
	getAbsoluteTime(): number;
	/**
	 * @beta
	 * @remarks
	 * 获取世界中的瞄准辅助预设和类别。
	 *
	 * The aim-assist presets and categories that can be used in the world.
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
	 *
	 * Returns an array of all active players within the world.
	 * @throws This function can throw errors.
	 */
	getAllPlayers(): Player[];
	/**
	 * @remarks
	 * 返回当前的日期。
	 *
	 * Returns the current day.
	 * @returns 当前日期，以游戏刻为单位。新世界从第 0 天开始。
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
	 * @returns 默认的主世界出生点位置。默认情况下，Y 坐标为 32767，表示玩家的出生高度未固定，将由周围方块确定。
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
	 * 获取在此世界中已设置的一组动态属性标识符。
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
	 * 获取动态属性的总字节数。这可以潜在地用于你自己的分析，以确保你没有存储巨大的动态属性集合。
	 *
	 * Gets the total byte count of dynamic properties. This could
	 * potentially be used for your own analytics to ensure you're
	 * not storing gigantic sets of dynamic properties.
	 *
	 */
	getDynamicPropertyTotalByteCount(): number;
	/**
	 * @remarks
	 * 返回提供的ID的实体。
	 *
	 * Returns an entity based on the provided id.
	 *
	 * @param id
	 * 实体的ID。
	 *
	 * The id of the entity.
	 * @returns
	 * 请求的实体对象。
	 *
	 * The requested entity object.
	 * @throws
	 * 若提供的实体ID无效，抛出错误。
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
	 * Additional options that can be used to filter the set of
	 * players returned.
	 * @returns
	 * 返回玩家数组。
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
	 * 获取当前一天中的时间。
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
	 * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会产生任何效果。
	 *
	 * Plays a particular music track for all players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param trackId
	 * 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
	 *
	 * Identifier of the music track to play.
	 * @param musicOptions
	 * 可选，指定播放音乐使用的附加参数。
	 *
	 * Optional additional parameters to play the music with.
	 * @throws This function can throw errors.
	 * @seeExample playMusicAndSound.ts
	 */
	playMusic(trackId: string, musicOptions?: MusicOptions): void;
	/**
	 * @remarks
	 * 向玩家播放一段声音。
	 *
	 * Plays a sound for all players. DEPRECATED: Use Dimension.playSound.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param soundId
	 * 声音项目的标识符。
	 *
	 * Identifier of the sound effect to play.
	 * @param soundOptions
	 * 可选，指定播放声音使用的附加参数。
	 *
	 * Optional additional parameters to play the sound effect.
	 * @throws
	 * 若从 `soundOptions` 传入的 `volume` 小于 `0.0` 时会抛出错误。
	 *
	 * 若从 `soundOptions` 传入的 `fade` 小于 `0.0` 时会抛出错误。
	 *
	 * 若从 `soundOptions` 传入的 `pitch` 小于 `0.01` 时会抛出错误。
	 *
	 * 若从 `soundOptions` 传入的 `volume` 小于 `0.0` 时会抛出错误。
	 *
	 * An error will be thrown if volume is less than 0.0.
	 * An error will be thrown if fade is less than 0.0.
	 * An error will be thrown if pitch is less than 0.01.
	 * An error will be thrown if volume is less than 0.0.
	 * @seeExample playMusicAndSound.ts
	 */
	playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
	/**
	 * @remarks
	 * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按添加顺序播放（需要更多测试）。
	 *
	 * Queues an additional music track for players. If a track is
	 * not playing, a music track will play.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
	 * 若从 `musicOptions` 传入的 `volume` 小于 `0.0` 时会抛出错误。
	 *
	 * 若从 `musicOptions` 传入的 `fade` 小于 `0.0` 时会抛出错误。
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
	 * 将要广播的一段消息。消息可以是字符串，符合 `RawMessage` 接口的对象，或是这两种类型的组合。
	 *
	 * The message to be displayed. This message can be a string, an object implementing the RawMessage interface, or a combination of these types.
	 * @throws
	 * 当 `message` 格式不正确时会抛出错误。例如 `score` 的 `name` 为空字符串时。
	 *
	 * This method can throw if the provided RawMessage is in an invalid format. For example, if an empty `name` string is provided to `score`.
	 */
	sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
	/**
	 * @remarks
	 * 设置世界时间。
	 *
	 * Sets the world time.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param absoluteTime
	 * 世界时间，以刻为单位。
	 *
	 * The world time, in ticks.
	 */
	setAbsoluteTime(absoluteTime: number): void;

	/**
	 * @remarks
	 * 设置所有玩家的默认出生位置。
	 *
	 * Sets a default spawn location for all players.
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param spawnLocation
	 * 出生点的位置。请注意，这假定在主世界维度内。
	 *
	 * Location of the spawn point. Note that this is assumed to be
	 * within the overworld dimension.
	 * @throws
	 * 如果提供的出生位置超出边界，则抛出错误。
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
	 * 设置多个动态属性的特定值。
	 *
	 * Sets multiple dynamic properties with specific values.
	 *
	 * @param values
	 * 包含要设置的动态属性的键值对记录。
	 *
	 * A Record of key value pairs of the dynamic properties to
	 * set.
	 * @throws
	 * 该函数可能抛出错误。
	 *
	 * This function can throw errors.
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
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * @param timeOfDay
	 * 一天中的时间，以刻为单位，范围在 0 到 24000 之间。
	 *
	 * The time of day, in ticks, between 0 and 24000.
	 * @throws
	 * 如果提供的时间不在有效范围内，则抛出错误。
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
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 */
	stopMusic(): void;
}

/**
 * 包含在世界范围内可用的一组事件。
 *
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class WorldAfterEvents {
	private constructor();
	/**
	 * @remarks
	 * 此事件会在爆炸摧毁每一个方块位置后触发。
	 *
	 * This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed.
	 *
	 */
	readonly blockExplode: BlockExplodeAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在按钮被按下时触发。
	 *
	 * This event fires when a button is pushed.
	 *
	 */
	readonly buttonPush: ButtonPushAfterEventSignal;
	/**
	 * @beta
	 * @remarks
	 * 此事件会在聊天消息被广播或发送给玩家后触发。
	 *
	 * This event is triggered after a chat message has been broadcast or sent to players.
	 *
	 */
	readonly chatSend: ChatSendAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体事件被触发时发生，该事件会更新实体的组件定义状态。
	 *
	 * This event is fired when an entity event has been triggered that will update the component definition state of an entity.
	 *
	 */
	readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在效果（如中毒）被添加到某实体时触发。
	 *
	 * This event fires when an effect, like poisoning, is added to an entity.
	 *
	 */
	readonly effectAdd: EffectAddAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体死亡时触发。
	 *
	 * This event fires when an entity dies.
	 *
	 */
	readonly entityDie: EntityDieAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在实体生命值发生任何变化时触发。
	 *
	 * This event fires when entity health changes in any degree.
	 *
	 */
	readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体攻击（即近战攻击）方块时触发。
	 *
	 * This event fires when an entity hits (that is, melee attacks) a block.
	 *
	 */
	readonly entityHitBlock: EntityHitBlockAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体攻击（即近战攻击）另一个实体时触发。
	 *
	 * This event fires when an entity hits (that is, melee attacks) another entity.
	 *
	 */
	readonly entityHitEntity: EntityHitEntityAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体受到伤害时触发。
	 *
	 * This event fires when an entity is hurt (takes damage).
	 *
	 */
	readonly entityHurt: EntityHurtAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体被加载时触发。
	 *
	 * Fires when an entity is loaded.
	 *
	 */
	readonly entityLoad: EntityLoadAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体被移除时触发（例如，可能是在卸载或被杀死后移除）。
	 *
	 * Fires when an entity is removed (for example, potentially unloaded, or removed after being killed).
	 *
	 */
	readonly entityRemove: EntityRemoveAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个实体生成时触发。
	 *
	 * This event fires when an entity is spawned.
	 *
	 */
	readonly entitySpawn: EntitySpawnAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在爆炸发生后触发。
	 *
	 * This event is fired after an explosion occurs.
	 *
	 */
	readonly explosion: ExplosionAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在 world.gameRules 属性更改时触发。
	 *
	 * This event fires when a world.gameRules property has changed.
	 *
	 */
	readonly gameRuleChange: GameRuleChangeAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个可充能物品完成充能时触发。
	 *
	 * This event fires when a chargeable item completes charging.
	 *
	 */
	readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个可充能物品停止充能时触发。
	 *
	 * This event fires when a chargeable item is released from charging.
	 *
	 */
	readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个可充能物品开始充能时触发。
	 *
	 * This event fires when a chargeable item starts charging.
	 *
	 */
	readonly itemStartUse: ItemStartUseAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家成功使用物品或按下"使用物品/放置方块"按钮来放置方块时触发。如果是放置多个方块，此事件只会在放置的开始触发一次。注意：此事件不能用于锄头或斧子的使用。
	 *
	 * This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items.
	 *
	 */
	readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个可充能物品停止充能时触发。
	 *
	 * This event fires when a chargeable item stops charging.
	 *
	 */
	readonly itemStopUse: ItemStopUseAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家在成功使用物品后松开"使用物品/放置方块"按钮时触发。注意：此事件不能用于锄头或斧子的使用。
	 *
	 * This event fires when a player releases the Use Item / Place Block button after successfully using an item. Note: This event cannot be used with Hoe or Axe items.
	 *
	 */
	readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家成功使用物品时触发。
	 *
	 * This event fires when an item is successfully used by a player.
	 *
	 */
	readonly itemUse: ItemUseAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家对方块使用物品时触发。
	 *
	 * This event fires when an item is used on a block by a player.
	 *
	 */
	readonly itemUseOn: ItemUseOnAfterEventSignal;
	/**
	 * @remarks
	 * 当一个拉杆被拉动时触发。
	 *
	 * A lever has been pulled.
	 *
	 */
	readonly leverAction: LeverActionAfterEventSignal;
	/**
	 * @beta
	 * @remarks
	 * 此事件是一个内部实现细节，目前不是功能性的。
	 *
	 * This event is an internal implementation detail, and is otherwise not currently functional.
	 *
	 */
	readonly messageReceive: ServerMessageAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在活塞伸展或收缩时触发。
	 *
	 * This event fires when a piston expands or retracts.
	 *
	 */
	readonly pistonActivate: PistonActivateAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家破坏方块时触发。
	 *
	 * This event fires for a block that is broken by a player.
	 *
	 */
	readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
	/**
	 * @beta
	 * @remarks
	 * 此事件会在 {@link @minecraft/Server.InputButton} 状态更改时触发。
	 *
	 * This event fires when an {@link @minecraft/Server.InputButton} state is changed.
	 *
	 */
	readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
	/**
	 * @remarks
	 * 当玩家移动到不同维度时触发。
	 *
	 * Fires when a player moved to a different dimension.
	 *
	 */
	readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
	readonly playerEmote: PlayerEmoteAfterEventSignal;
	readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
	/**
	 * @rc
	 * @remarks
	 * 此事件会在玩家的 {@link @minecraft/Server.InputMode} 更改时触发。
	 *
	 * This event fires when a player's {@link @minecraft/Server.InputMode} changes.
	 *
	 */
	readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家输入权限更改时触发。
	 *
	 * This event fires when a players input permissions change.
	 *
	 */
	readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
	/**
	 * @remarks
	 * 玩家与方块交互时的事件。
	 *
	 * An event for when a player interacts with a block.
	 *
	 */
	readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家与实体交互时触发。
	 *
	 * This event fires when a player interacts with an entity.
	 *
	 */
	readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家加入世界时触发。参见玩家生成事件，用于捕捉玩家首次生成在世界中的情况。
	 *
	 * This event fires when a player joins a world. See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world.
	 *
	 */
	readonly playerJoin: PlayerJoinAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家离开世界时触发。
	 *
	 * This event fires when a player leaves a world.
	 *
	 */
	readonly playerLeave: PlayerLeaveAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家放置方块时触发。
	 *
	 * This event fires for a block that is placed by a player.
	 *
	 */
	readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家生成或重生时触发。此事件中的一个额外标志将告诉你玩家是在加入后生成还是重生。
	 *
	 * This event fires when a player spawns or respawns. Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn.
	 *
	 */
	readonly playerSpawn: PlayerSpawnAfterEventSignal;
	/**
	 * @remarks
	 * 当压力板弹起时（即压力板上没有实体）触发。
	 *
	 * A pressure plate has popped back up (i.e., there are no entities on the pressure plate.)
	 *
	 */
	readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
	/**
	 * @remarks
	 * 当压力板被压下时（即至少有一个实体踩上了压力板）触发。
	 *
	 * A pressure plate has pushed (at least one entity has moved onto a pressure plate.)
	 *
	 */
	readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在投射物击中方块时触发。
	 *
	 * This event fires when a projectile hits a block.
	 *
	 */
	readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在投射物击中实体时触发。
	 *
	 * This event fires when a projectile hits an entity.
	 *
	 */
	readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
	/**
	 * @remarks
	 * 当目标方块被击中时触发。
	 *
	 * A target block was hit.
	 *
	 */
	readonly targetBlockHit: TargetBlockHitAfterEventSignal;
	/**
	 * @remarks
	 * 当绊线被触发时触发。
	 *
	 * A trip wire was tripped.
	 *
	 */
	readonly tripWireTrip: TripWireTripAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在天气变化时触发。
	 *
	 * This event will be triggered when the weather changes within Minecraft.
	 *
	 */
	readonly weatherChange: WeatherChangeAfterEventSignal;
	/**
	 * @remarks
	 * 此事件会在世界脚本环境初始化时触发。
	 *
	 * This event fires when the script environment is initialized on a World.
	 *
	 */
	readonly worldInitialize: WorldInitializeAfterEventSignal;
}

/**
 * 表示一系列触发于实际动作发生之前的事件。通常来说，即将触发的事件可被修改或取消。
 * 但请注意，在 before 类事件过程中，能够改变游戏状态的 API 将失效，试图调用将会抛出错误。
 * （例如：dimension.spawnEntity）
 *
 * A set of events that fire before an actual action occurs. In most cases, you can potentially cancel or modify the impending event. Note that in before events any APIs that modify gameplay state will not function and will throw an error. (e.g., dimension.spawnEntity)
 */
export class WorldBeforeEvents {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * 此事件会在聊天消息被广播或发送给玩家前触发。
	 *
	 * This event is triggered after a chat message has been broadcast or sent to players.
	 *
	 * @seeExample customCommand.ts
	 */
	readonly chatSend: ChatSendBeforeEventSignal;
	/**
	 * @remarks
	 * 此事件会在一个效果被添加到实体前触发。
	 *
	 * This event is triggered after an event has been added to an entity.
	 *
	 */
	readonly effectAdd: EffectAddBeforeEventSignal;
	/**
	 * @remarks
	 * 实体从世界移除之前触发（例如卸载或被杀死后移除）。
	 *
	 * Fires before an entity is removed from the world (for example, unloaded or removed after being killed.)
	 *
	 */
	readonly entityRemove: EntityRemoveBeforeEventSignal;
	/**
	 * @remarks
	 * 在爆炸发生之前触发。
	 *
	 * This event is fired after an explosion occurs.
	 *
	 */
	readonly explosion: ExplosionBeforeEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家成功使用物品前触发。
	 *
	 * This event fires when an item is successfully used by a player.
	 *
	 */
	readonly itemUse: ItemUseBeforeEventSignal;
	/**
	 * @remarks
	 * 此事件会在玩家对方块使用物品前触发。
	 *
	 * This event fires when an item is used on a block by a player.
	 *
	 */
	readonly itemUseOn: ItemUseOnBeforeEventSignal;
	/**
	 * @remarks
	 * 在玩家破坏方块前触发。
	 *
	 * This event fires before a block is broken by a player.
	 *
	 */
	readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
	readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
	/**
	 * @remarks
	 * 玩家与方块互动前触发。
	 *
	 * Fires before a player interacts with a block.
	 *
	 */
	readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
	/**
	 * @remarks
	 * 玩家与实体互动前触发。
	 *
	 * Fires before a player interacts with an entity.
	 *
	 */
	readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
	/**
	 * @remarks
	 * 玩家离开游戏时触发。
	 *
	 * Fires when a player leaves the game.
	 *
	 */
	readonly playerLeave: PlayerLeaveBeforeEventSignal;
	/**
	 * @beta
	 * @remarks
	 * 在玩家放置方块前触发。
	 *
	 * This event fires before a block is placed by a player.
	 *
	 */
	readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
	readonly weatherChange: WeatherChangeBeforeEventSignal;
	/**
	 * @remarks
	 * 在世界脚本环境初始化时立即触发。并非所有脚本功能都可用。为确保访问世界状态，请使用世界初始化后事件。
	 *
	 * This event fires immediately when the script environment is initialized on a World. Not all script functionality may be available. For guaranteed access to world state, use the world initialize after event.
	 *
	 */
	readonly worldInitialize: WorldInitializeBeforeEventSignal;
}

/**
 * 包括在世界的脚本环境初始化时可使用的信息和方法。
 *
 * Contains information and methods that can be used at the initialization of the scripting environment for a World.
 */
export class WorldInitializeAfterEvent {
	private constructor();
}

/**
 * 管理在世界的第一刻调用的回调。请注意，如果使用 /reload 命令，本事件在一次会话内可能会被多次调用。
 *
 * Manages callbacks that are run on the first tick of the World. Do note that this event may run multiple times within a session in the case that the /reload command is used.
 */
export class WorldInitializeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当脚本环境为世界初始化时将调用该回调函数。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: WorldInitializeAfterEvent) => void): (arg0: WorldInitializeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其在脚本环境为世界初始化时不再被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: WorldInitializeAfterEvent) => void): void;
}

/**
 * 包含在世界的脚本环境初始化时可使用的信息和方法。
 * 还可以使用提供的 blockRegistry 对象在世界初始化执行范围内注册方块自定义组件。
 */
export class WorldInitializeBeforeEvent {
	private constructor();
	readonly blockComponentRegistry: BlockComponentRegistry;
	/**
	 * @remarks
	 * 提供为物品注册自定义组件的功能。
	 *
	 */
	readonly itemComponentRegistry: ItemComponentRegistry;
}

/**
 * 管理在世界的脚本环境初始化时运行的回调函数。请注意，在使用 /reload 命令的情况下，此事件可能在一个会话中多次运行。
 *
 * * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，会在脚本环境为世界初始化时调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Adds a callback that will be called when the scripting
	 * environment is initialized for a World.
	 */
	subscribe(callback: (arg0: WorldInitializeBeforeEvent) => void): (arg0: WorldInitializeBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其在脚本环境为世界初始化时不再被调用。
	 *
	 * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
	 *
	 * This function can be called in early-execution mode.
	 *
	 * Removes a callback from being called the scripting
	 * environment is initialized for a World.
	 */
	unsubscribe(callback: (arg0: WorldInitializeBeforeEvent) => void): void;
}

/**
 * @beta
 * 包含用于 dimension.findNearestBiome API 搜索的附加选项。
 *
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 */
export interface BiomeSearchOptions {
	/**
	 * @remarks
	 * 要在其内查找的边界体积大小。
	 *
	 * Bounding volume size to look within.
	 */
	boundingSize?: Vector3;
}

/**
 * 包含将在某个方块上引发的一组事件。
 * 该对象必须通过 BlockRegistry 进行绑定。
 *
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 */
export interface BlockCustomComponent {
	/**
	 * @remarks
	 * 该函数将在玩家放置方块之前被调用。
	 *
	 * This function will be called before a player places the
	 * block.
	 */
	beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent) => void;
	/**
	 * @remarks
	 * 该函数将在实体掉落到绑定到此自定义组件的方块上时调用。
	 *
	 * This function will be called when an entity falls onto the
	 * block that this custom component is bound to.
	 */
	onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent) => void;
	/**
	 * @remarks
	 * 该函数将在绑定到此自定义组件的方块被放置时调用。
	 *
	 * This function will be called when the block that this custom
	 * component is bound to is placed.
	 */
	onPlace?: (arg0: BlockComponentOnPlaceEvent) => void;
	/**
	 * @remarks
	 * 该函数将在玩家破坏特定方块时调用。
	 *
	 * This function will be called when a player destroys a
	 * specific block.
	 */
	onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent) => void;
	/**
	 * @remarks
	 * 该函数将在玩家成功与绑定到此自定义组件的方块互动时调用。
	 *
	 * This function will be called when a player sucessfully
	 * interacts with the block that this custom component is bound
	 * to.
	 */
	onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent) => void;
	/**
	 * @remarks
	 * 该函数将在方块随机 tick 时调用。
	 *
	 * This function will be called when a block randomly ticks.
	 */
	onRandomTick?: (arg0: BlockComponentRandomTickEvent) => void;
	/**
	 * @remarks
	 * 该函数将在绑定到此自定义组件的方块上实体步离时调用。
	 *
	 * This function will be called when an entity steps off the
	 * block that this custom component is bound to.
	 */
	onStepOff?: (arg0: BlockComponentStepOffEvent) => void;
	/**
	 * @remarks
	 * 该函数将在绑定到此自定义组件的方块上实体步入时调用。
	 *
	 * This function will be called when an entity steps onto the
	 * block that this custom component is bound to.
	 */
	onStepOn?: (arg0: BlockComponentStepOnEvent) => void;
	/**
	 * @remarks
	 * 该函数将在方块 tick 时调用。
	 *
	 * This function will be called when a block ticks.
	 */
	onTick?: (arg0: BlockComponentTickEvent) => void;
}

/**
 * 包含注册方块事件的可选参数。
 *
 * Contains optional parameters for registering a block event.
 */
export interface BlockEventOptions {
	/**
	 * @remarks
	 * 如果设置了该值，则仅在受影响的方块类型与该参数匹配时触发事件。
	 *
	 * If this value is set, this event will only fire if the
	 * impacted block's type matches this parameter.
	 */
	blockTypes?: string[];
	/**
	 * @remarks
	 * 如果设置了该值，则仅在受影响的方块的变体与该参数匹配时触发事件。
	 *
	 * If this value is set, this event will only fire if the
	 * impacted block's permutation matches this parameter.
	 */
	permutations?: BlockPermutation[];
}

/**
 * 包含方块填充操作的附加选项。
 *
 * Contains additional options for a block fill operation.
 */
export interface BlockFillOptions {
	/**
	 * @remarks
	 * 当指定时，填充操作将包括/排除添加到方块过滤器的方块。
	 *
	 * When specified, the fill operation will include / exclude
	 * the blocks added to the block filter.
	 */
	blockFilter?: BlockFilter;
	/**
	 * @remarks
	 * 当为 true 时，如果填充体积的一部分超出了加载的区块边界，
	 * fillBlocks 将不会报错。而是仅填充加载的区块边界内的方块，
	 * 忽略边界外的方块。
	 *
	 * When true fillBlocks will not error if part of the fill
	 * volume is outside of loaded chunks bounds. Instead it will
	 * just fill the blocks that are inside the loaded chunk bounds
	 * and ignoring blocks outside.
	 */
	ignoreChunkBoundErrors?: boolean;
}

/**
 * 用于基于类型、标签或变体包含或排除方块的选项。
 * 如果没有添加包含选项，它将选择未被排除选项拒绝的所有方块。
 * 如果至少添加了一个包含选项，方块必须匹配其中一个包含选项才能不被拒绝。
 *
 * Options to include or exclude blocks based on type, tag or
 * permutation. If no include options are added it will select
 * all blocks that are not rejected by the exclude options. If
 * at least one include option is added the block must match
 * one of the include options to not be rejected.
 */
export interface BlockFilter {
	/**
	 * @remarks
	 * 阻止筛选器选择这些方块变化的数组，如果任意一个匹配。
	 *
	 * Array of block permutations that the filter should reject if
	 * any matches.
	 *
	 */
	excludePermutations?: BlockPermutation[];
	/**
	 * @remarks
	 * 阻止筛选器选择的方块标签数组，如果任意一个匹配。
	 *
	 * Array of block tags that the filter should reject if any
	 * matches.
	 *
	 */
	excludeTags?: string[];
	/**
	 * @remarks
	 * 阻止筛选器选择的方块类型数组，如果任意一个匹配。
	 *
	 * Array of block types that the filter should reject if any
	 * matches.
	 *
	 */
	excludeTypes?: string[];
	/**
	 * @remarks
	 * 筛选器应选择的方块变化数组，如果至少有一个匹配。
	 *
	 * Array of block permutations that the filter should select if
	 * at least one matches.
	 *
	 */
	includePermutations?: BlockPermutation[];
	/**
	 * @remarks
	 * 筛选器应选择的方块标签数组，如果至少有一个匹配。
	 *
	 * Array of block tags that the filter should select if at
	 * least one matches.
	 *
	 */
	includeTags?: string[];
	/**
	 * @remarks
	 * 筛选器应选择的方块类型数组，如果至少有一个匹配。
	 *
	 * Array of block types that the filter should select if at
	 * least one matches.
	 *
	 */
	includeTypes?: string[];
}

/**
 * 描述了一个方块被击中的事件的详细信息。
 *
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
	/**
	 * @remarks
	 * 被击中的方块。
	 *
	 * Block that was hit.
	 *
	 */
	block: Block;

	/**
	 * @remarks
	 * 被击中的方块面。
	 *
	 * Face of the block that was hit.
	 *
	 */
	face: Direction;

	/**
	 * @remarks
	 * 相对于方块底部西北角的位置。
	 *
	 * Location relative to the bottom north-west corner of the
	 * block.
	 *
	 */
	faceLocation: Vector3;
}

/**
 * 描述了方块射线击中结果的详细信息。
 *
 * Contains information for block raycast hit results.
 */
export interface BlockRaycastHit {
	/**
	 * @remarks
	 * 被击中的方块。
	 *
	 * Block that was hit.
	 *
	 */
	block: Block;

	/**
	 * @remarks
	 * 被击中的方块面。
	 *
	 * Face of the block that was hit.
	 *
	 */
	face: Direction;

	/**
	 * @remarks
	 * 相对于方块底部西北角的位置。
	 *
	 * Hit location relative to the bottom north-west corner of the
	 * block.
	 *
	 */
	faceLocation: Vector3;
}

/**
 * 包含配置方块射线投射查询的附加选项。
 *
 * Contains additional options for configuring a block raycast query.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
	/**
	 * @remarks
	 * 若为 `true`，液体方块将被视为“阻止”射线的方块。
	 *
	 * If true, liquid blocks will be considered as blocks that
	 * 'stop' the raycast.
	 *
	 */
	includeLiquidBlocks?: boolean;

	/**
	 * @remarks
	 * 若为 `true`，类似藤蔓和花的可通过方块将被视为“阻止”射线的方块。
	 *
	 * If true, passable blocks like vines and flowers will be
	 * considered as blocks that 'stop' the raycast.
	 *
	 */
	includePassableBlocks?: boolean;

	/**
	 * @remarks
	 * 射线投射的最大距离（以方块为单位）。
	 *
	 * Maximum distance, in blocks, to process the raycast.
	 *
	 */
	maxDistance?: number;
}

/**
 * @beta
 * BoundingBox 是表示对齐轴的 AABB 矩形的对象接口。
 * BoundingBox 假设它在创建时处于有效状态（min <= max），但无法保证这点（除非使用关联的 {@link BoundingBoxUtils} 实用函数创建）。
 * min/max 坐标表示矩形的对角线相对的角。
 * BoundingBox 并不表示方块——它没有与任何类型相关联，它只是一个数学结构，因此一个从
 * (0,0,0) 到 ( 0,0,0 ) 的矩形具有大小 (0,0,0)（与非常相似的 {@link BlockVolume} 对象不同）。
 *
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link BoundingBoxUtils} utility
 * functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object).
 */
export interface BoundingBox {
	/**
	 * @remarks
	 * 表示矩形最大角的 {@link Vector3}
	 *
	 * A {@link Vector3} that represents the largest corner of the
	 * rectangle
	 *
	 */
	max: Vector3;

	/**
	 * @remarks
	 * 表示矩形最小角的 {@link Vector3}
	 *
	 * A {@link Vector3} that represents the smallest corner of the
	 * rectangle
	 *
	 */
	min: Vector3;
}
export interface CameraDefaultOptions {
	/**
	 * @remarks
	 * 设置相机的缓动选项。
	 *
	 * Sets a set of easing options for the camera.
	 */
	easeOptions: CameraEaseOptions;
}

/**
 * 包含镜头缓动操作的选项。
 *
 * Contains options associated with a camera ease operation.
 */
export interface CameraEaseOptions {
	/**
	 * @remarks
	 * 镜头缓动操作的时间。
	 *
	 * Time for the ease operation.
	 */
	easeTime?: number;
	/**
	 * @remarks
	 * 使用的缓动操作类型。
	 *
	 * Type of ease operation to use.
	 */
	easeType?: EasingType;
}

/**
 * 用于开启全屏颜色淡入淡出效果。
 *
 * Used to initiate a full-screen color fade.
 */
export interface CameraFadeOptions {
	/**
	 * @remarks
	 * 要使用的渐变颜色。
	 *
	 * Fade color to use.
	 */
	fadeColor?: RGB;
	/**
	 * @remarks
	 * 淡入、停留和淡出的时间（秒）。
	 *
	 * Time in seconds for the fade-in, hold, and fade-out seconds.
	 */
	fadeTime?: CameraFadeTimeOptions;
}

/**
 * 包含淡入淡出转换的时间选项。
 *
 * Contains timings for a fade transition.
 */
export interface CameraFadeTimeOptions {
	/**
	 * @remarks
	 * 淡入的时间（秒）。
	 *
	 * Time, in seconds, for a fade-in.
	 */
	fadeInTime: number;
	/**
	 * @remarks
	 * 淡出的时间（秒）。
	 *
	 * Time, in seconds, for a fade-out.
	 */
	fadeOutTime: number;
	/**
	 * @remarks
	 * 全屏颜色保持的时间（秒）。
	 *
	 * Time, in seconds, to hold the full screen color.
	 */
	holdTime: number;
}

/**
 * @beta
 *
 * 需要实验：
 * - 第三人称相机
 *
 * Required Experiments:
 * - Third Person Cameras
 */
export interface CameraFixedBoomOptions {
	entityOffset?: Vector3;
	viewOffset?: Vector2;
}
export interface CameraSetFacingOptions {
	动作选项?: CameraEaseOptions;
	朝向实体: Entity;
	位置?: Vector3;
}

export interface CameraSetLocationOptions {
	动作选项?: CameraEaseOptions;
	位置: Vector3;
}

export interface CameraSetPosOptions {
	动作选项?: CameraEaseOptions;
	朝向位置: Vector3;
	位置?: Vector3;
}

export interface CameraSetRotOptions {
	动作选项?: CameraEaseOptions;
	位置?: Vector3;
	旋转: Vector2;
}

/**
 * 用于用自由相机瞄准一个实体。
 * Used to target an entity with a free camera.
 */
export interface CameraTargetOptions {
	/**
	 * @remarks
	 * 设置从目标实体的中心偏移的<x, y, z>。
	 *
	 * Set an <x, y, z> offset from the target entity's center.
	 *
	 */
	从目标中心偏移?: Vector3;

	/**
	 * @remarks
	 * 你想要瞄准的单个实体。
	 *
	 * The singular entity you want to target.
	 *
	 */
	目标实体: Entity;
}

/**
 * @beta
 * 此接口定义了 {@link CompoundBlockVolume} 中的一个条目，表示一个正或负的空间体积。
 * This interface defines an entry into the {@link CompoundBlockVolume} which represents a volume of positive or negative space.
 *
 */
export interface CompoundBlockVolumeItem {
	/**
	 * @remarks
	 * "action" 用于定义在复合方块体积堆栈中方块体积的表示方式。
	 * "Add" 创建一个被正向选择的方块体积。
	 * "Subtract" 创建一个表示孔洞或负空间的方块体积。
	 *
	 * The 'action' defines how the block volume is represented in the compound block volume stack. 'Add' creates a block volume which is positively selected. 'Subtract' creates a block volume which represents a hole or negative space in the overall compound block volume.
	 */
	action?: CompoundBlockVolumeAction;
	/**
	 * @remarks
	 * "locationRelativity" 枚举决定了指定的 BlockVolume 是相对于父复合方块体积原点定位，还是在绝对世界空间中定位。
	 *
	 * The relativity enumeration determines whether the BlockVolume specified is positioned relative to the parent compound block volume origin, or in absolute world space.
	 */
	locationRelativity?: CompoundBlockVolumePositionRelativity;
	/**
	 * @remarks
	 * 空间的体积。
	 *
	 * The volume of space.
	 */
	volume: BlockVolume;
}

/**
 * 包含一组实体组件定义状态的更新。
 *
 * Contains a set of updates to the component definition state of an entity.
 */
export interface DefinitionModifier {
	/**
	 * @remarks
	 * 获取通过此定义修改添加的组件组列表。
	 *
	 * Retrieves the list of component groups that will be added via this definition modification.
	 */
	addedComponentGroups: string[];
	/**
	 * @remarks
	 * 获取通过此定义修改移除的组件组列表。
	 *
	 * The list of component groups that will be removed via this definition modification.
	 */
	removedComponentGroups: string[];
	/**
	 * @beta
	 * @remarks
	 * 获取通过此更新触发的实体定义事件列表。
	 *
	 * The list of entity definition events that will be fired via this update.
	 */
	triggers: Trigger[];
}

/**
 * 世界中的精确坐标，包括其维度和位置。
 *
 * An exact coordinate within the world, including its dimension and location.
 */
export interface DimensionLocation {
	/**
	 * @remarks
	 * 此坐标关联的维度。
	 *
	 * Dimension that this coordinate is associated with.
	 */
	dimension: Dimension;
	/**
	 * @remarks
	 * 此维度位置的 X 组件。
	 *
	 * X component of this dimension-location.
	 */
	x: number;
	/**
	 * @remarks
	 * 此维度位置的 Y 组件。
	 *
	 * Y component of this dimension-location.
	 */
	y: number;
	/**
	 * @remarks
	 * 此维度位置的 Z 组件。
	 *
	 * Z component of this dimension-location.
	 */
	z: number;
}

/**
 * 表示应用于物品的特定等级的附魔。
 *
 * This interface represents a specific leveled enchantment that is applied to an item.
 */
export interface Enchantment {
	/**
	 * @remarks
	 * 此附魔实例的等级。
	 *
	 * The level of this enchantment instance.
	 */
	level: number;
	/**
	 * @remarks
	 * 此实例的附魔类型。
	 *
	 * The enchantment type of this instance.
	 */
	type: EnchantmentType;
}

/**
 * 使用投射物造成伤害时的附加选项。
 *
 * Additional options for when damage has been applied via a projectile.
 */
export interface EntityApplyDamageByProjectileOptions {
	/**
	 * @remarks
	 * 发射投射物的可选实体。
	 *
	 * Optional entity that fired the projectile.
	 */
	damagingEntity?: Entity;
	/**
	 * @remarks
	 * 造成伤害的投射物。
	 *
	 * Projectile that caused damage.
	 */
	damagingProjectile: Entity;
}

/**
 * 伤害事件的附加描述和元数据。
 *
 * Additional descriptions and metadata for a damage event.
 */
export interface EntityApplyDamageOptions {
	/**
	 * @remarks
	 * 造成伤害的根本原因。
	 *
	 * Underlying cause of the damage.
	 */
	cause: EntityDamageCause;

	/**
	 * @remarks
	 * 造成伤害的可选实体。
	 *
	 * Optional entity that caused the damage.
	 */
	damagingEntity?: Entity;
}

/**
 * 提供有关如何向实体施加伤害的信息。
 * Provides information about how damage has been applied to an entity.
 */
export interface EntityDamageSource {
	/**
	 * @remarks
	 * 伤害的原因枚举。
	 *
	 * Cause enumeration of damage.
	 */
	cause: EntityDamageCause;

	/**
	 * @remarks
	 * 造成伤害的可选实体。
	 *
	 * Optional entity that caused the damage.
	 */
	damagingEntity?: Entity;

	/**
	 * @remarks
	 * 可能造成伤害的可选弹射物。
	 *
	 * Optional projectile that may have caused damage.
	 */
	damagingProjectile?: Entity;
}

/**
 * 指定用于注册实体数据驱动触发事件的附加过滤器。
 * Specifies additional filters that are used in registering a data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
	/**
	 * @remarks
	 * 如果设置了此值，则此事件仅在匹配此集合中的实体时触发。
	 *
	 * If this value is set, this event will only fire for entities that match the entities within this collection.
	 */
	entities?: Entity[];

	/**
	 * @remarks
	 * 如果设置了此值，则此事件仅在受影响实体的类型匹配此参数时触发。
	 *
	 * If this value is set, this event will only fire if the impacted entities' type matches this parameter.
	 */
	entityTypes?: string[];

	/**
	 * @remarks
	 * 如果设置了此值，则此事件仅在触发的事件匹配此参数中列出的事件之一时触发。
	 *
	 * If this value is set, this event will only fire if the impacted triggered event matches one of the events listed in this parameter.
	 */
	eventTypes?: string[];
}

/**
 * 包含关于实体效果的其他选项。
 * Contains additional options for entity effects.
 */
export interface EntityEffectOptions {
	/**
	 * @remarks
	 * 效果的强度。
	 *
	 * The strength of the effect.
	 */
	amplifier?: number;

	/**
	 * @remarks
	 * 若为 `true`，当效果作用于实体时显示粒子。
	 *
	 * If true, will show particles when effect is on the entity.
	 */
	showParticles?: boolean;
}

/**
 * 包含用于注册实体事件的可选参数。
 * Contains optional parameters for registering an entity event.
 */
export interface EntityEventOptions {
	/**
	 * @remarks
	 * 如果设置了此值，则此事件仅在匹配此集合中的实体时触发。
	 *
	 * If this value is set, this event will only fire for entities that match the entities within this collection.
	 */
	entities?: Entity[];

	/**
	 * @remarks
	 * 如果设置了此值，则此事件仅在受影响实体的类型匹配此参数时触发。
	 *
	 * If this value is set, this event will only fire if the impacted entities' type matches this parameter.
	 */
	entityTypes?: string[];
}

/**
 * 包含用于筛选实体的选项。
 * Contains options for filtering entities.
 */
export interface EntityFilter {
	/**
	 * @remarks
	 * 排除匹配一个或多个指定家族的实体。
	 *
	 * Excludes entities that match one or more of the specified
	 * families.
	 */
	excludeFamilies?: string[];

	/**
	 * @remarks
	 * 排除拥有特定游戏模式并匹配指定游戏模式的实体。
	 *
	 * Excludes entities if have a specific gamemode that matches
	 * the specified gamemode.
	 */
	excludeGameModes?: GameMode[];

	/**
	 * @remarks
	 * 排除名称匹配指定值之一的实体。
	 *
	 * Excludes entities that have a name that match one of the
	 * specified values.
	 */
	excludeNames?: string[];

	/**
	 * @remarks
	 * 排除标签匹配指定值之一的实体。
	 *
	 * Excludes entities with a tag that matches one of the
	 * specified values.
	 */
	excludeTags?: string[];

	/**
	 * @remarks
	 * 排除类型匹配指定类型之一的实体。
	 *
	 * Excludes entities if they are one of the specified types.
	 */
	excludeTypes?: string[];

	/**
	 * @remarks
	 * 若指定，则包括匹配所有指定家族的实体。
	 *
	 * If specified, includes entities that match all of the
	 * specified families.
	 */
	families?: string[];

	/**
	 * @remarks
	 * 若指定，则包括具有匹配指定游戏模式的游戏模式的实体。
	 *
	 * If specified, includes entities with a gamemode that matches
	 * the specified gamemode.
	 */
	gameMode?: GameMode;

	/**
	 * @remarks
	 * 若指定，则只包括水平旋转不超过此值的实体。
	 *
	 * If specified, will only include entities that have at most
	 * this horizontal rotation.
	 */
	maxHorizontalRotation?: number;

	/**
	 * @remarks
	 * 若定义，则只返回不超过该等级的玩家。
	 *
	 * If defined, only players that have at most this level are
	 * returned.
	 */
	maxLevel?: number;

	/**
	 * @remarks
	 * 若指定，则只返回不超过该垂直旋转的实体。
	 *
	 * If specified, only entities that have at most this vertical
	 * rotation are returned.
	 */
	maxVerticalRotation?: number;

	/**
	 * @remarks
	 * 若指定，则只包括水平旋转至少为此值的实体。
	 *
	 * If specified, will only include entities that have at a
	 * minimum this horizontal rotation.
	 */
	minHorizontalRotation?: number;

	/**
	 * @remarks
	 * 若定义，则只返回至少达到该等级的玩家。
	 *
	 * If defined, only players that have at least this level are
	 * returned.
	 */
	minLevel?: number;

	/**
	 * @remarks
	 * 若指定，则只包括垂直旋转至少为此值的实体。
	 *
	 * If specified, will only include entities that have at least
	 * this vertical rotation.
	 */
	minVerticalRotation?: number;

	/**
	 * @remarks
	 * 包括具有指定名称的实体。
	 *
	 * Includes entities with the specified name.
	 */
	name?: string;

	propertyOptions?: EntityQueryPropertyOptions[];

	/**
	 * @remarks
	 * 获取或设置带有特定记分板目标筛选器的 EntityQueryScoreOptions 对象集合。
	 *
	 * Gets/sets a collection of EntityQueryScoreOptions objects
	 * with filters for specific scoreboard objectives.
	 */
	scoreOptions?: EntityQueryScoreOptions[];

	/**
	 * @remarks
	 * 包括匹配所有指定标签的实体。
	 *
	 * Includes entities that match all of the specified tags.
	 */
	tags?: string[];

	/**
	 * @remarks
	 * 若定义，则包括匹配此类型的实体。
	 *
	 * If defined, entities that match this type are included.
	 */
	type?: string;
}

/**
 * 包含有关被击中实体的附加信息。
 *
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
	/**
	 * @remarks
	 * 被击中的实体。
	 *
	 * Entity that was hit.
	 */
	entity?: Entity;
}

/**
 * 包含选择区域内实体的选项。
 *
 * Contains options for selecting entities within an area.
 * @seeExample blockConditional.ts
 * @seeExample findEntitiesHavingPropertyEqualsTo.ts
 * @seeExample playSoundChained.ts
 * @seeExample setScoreboardChained.ts
 * @seeExample summonMobChained.ts
 * @seeExample bounceSkeletons.ts
 * @seeExample tagsQuery.ts
 * @seeExample testThatEntityIsFeatherItem.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
	/**
	 * @remarks
	 * 限制返回的实体数量，选择距离最近的 N 个实体。必须在查询选项对象上也指定位置值。
	 *
	 * Limits the number of entities to return, opting for the
	 * closest N entities as specified by this property. The
	 * location value must also be specified on the query options
	 * object.
	 */
	closest?: number;

	/**
	 * @remarks
	 * 限制返回的实体数量，选择距离最远的 N 个实体。必须在查询选项对象上也指定位置值。
	 *
	 * Limits the number of entities to return, opting for the
	 * farthest N entities as specified by this property. The
	 * location value must also be specified on the query options
	 * object.
	 */
	farthest?: number;

	/**
	 * @remarks
	 * 为查询添加一个种子位置，该位置与最近、最远、限制、体积和距离属性一起使用。
	 *
	 * Adds a seed location to the query that is used in
	 * conjunction with closest, farthest, limit, volume, and
	 * distance properties.
	 */
	location?: Vector3;

	/**
	 * @remarks
	 * 若指定，则包括距离位置属性中指定位置小于此距离的实体。
	 *
	 * If specified, includes entities that are less than this
	 * distance away from the location specified in the location
	 * property.
	 */
	maxDistance?: number;

	/**
	 * @remarks
	 * 若指定，则包括距离位置属性中指定位置至少为此距离的实体。
	 *
	 * If specified, includes entities that are least this distance
	 * away from the location specified in the location property.
	 */
	minDistance?: number;

	/**
	 * @remarks
	 * 与位置一起，指定包含实体的长方体体积。
	 *
	 * In conjunction with location, specified a cuboid volume of
	 * entities to include.
	 */
	volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
	exclude?: boolean;
	propertyId: string;
	value?: boolean | string | EqualsComparison | GreaterThanComparison | GreaterThanOrEqualsComparison | LessThanComparison | LessThanOrEqualsComparison | NotEqualsComparison | RangeComparison;
}

/**
 * 包含基于玩家在目标得分上的附加筛选选项。
 *
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
	/**
	 * @remarks
	 * 若为 `true`，则在该得分范围内的实体和玩家从查询结果中排除。
	 *
	 * If set to true, entities and players within this score range
	 * are excluded from query results.
	 */
	exclude?: boolean;

	/**
	 * @remarks
	 * 若定义，则只包括得分等于或低于 maxScore 的玩家。
	 *
	 * If defined, only players that have a score equal to or under
	 * maxScore are included.
	 */
	maxScore?: number;

	/**
	 * @remarks
	 * 若定义，则只包括得分等于或高于 minScore 的玩家。
	 *
	 * If defined, only players that have a score equal to or over
	 * minScore are included.
	 */
	minScore?: number;

	/**
	 * @remarks
	 * 要筛选的记分板目标的标识符。
	 *
	 * Identifier of the scoreboard objective to filter on.
	 */
	objective?: string;
}

/**
 * 包含实体射线投射命中结果的信息。
 *
 * Contains information for entity raycast hit results.
 */
export interface EntityRaycastHit {
	/**
	 * @remarks
	 * 从射线起点到实体边界的距离。
	 *
	 * Distance from ray origin to entity bounds.
	 *
	 */
	distance: number;
	/**
	 * @remarks
	 * 被击中的实体。
	 *
	 * Entity that was hit.
	 *
	 */
	entity: Entity;
}

/**
 * Contains additional options for an entity raycast operation.
 * 包含实体光线投射操作的附加选项。
 */
export interface EntityRaycastOptions extends EntityFilter {
	/**
	 * @remarks
	 * 若为 `true`，则方块不会被视为‘阻止’光线投射的方块。
	 *
	 * If true, blocks will not be considered as blocks that 'stop'
	 * the raycast.
	 *
	 */
	ignoreBlockCollision?: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则液体方块会被视为‘阻止’光线投射的方块。
	 *
	 * If true, liquid blocks will be considered as blocks that
	 * 'stop' the raycast.
	 *
	 */
	includeLiquidBlocks?: boolean;
	/**
	 * @remarks
	 * 若为 `true`，像藤蔓和花朵这样的通行方块会被视为‘阻止’光线投射的方块。
	 *
	 * If true, passable blocks like vines and flowers will be
	 * considered as blocks that 'stop' the raycast.
	 *
	 */
	includePassableBlocks?: boolean;
	/**
	 * @remarks
	 * 光线投射处理的最大距离（以方块为单位）。
	 *
	 * Maximum distance, in blocks, to process the raycast.
	 *
	 */
	maxDistance?: number;
}

/**
 * Equal to operator.
 * 等于操作符。
 */
export interface EqualsComparison {
	/**
	 * @remarks
	 * 与之比较的阈值。
	 *
	 * Threshold value compared against.
	 *
	 */
	equals: boolean | number | string;
}

/**
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 * 为 {@link Dimension.createExplosion} 方法添加的配置选项。
 * @seeExample createNoBlockExplosion.ts
 * @seeExample createExplosions.ts
 */
export interface ExplosionOptions {
	/**
	 * @remarks
	 * 爆炸是否影响水下部分。
	 *
	 * Whether parts of the explosion also impact underwater.
	 *
	 */
	allowUnderwater?: boolean;
	/**
	 * @remarks
	 * 爆炸是否会破坏爆炸半径内的方块。
	 *
	 * Whether the explosion will break blocks within the blast
	 * radius.
	 *
	 */
	breaksBlocks?: boolean;
	/**
	 * @remarks
	 * 若为 `true`，则爆炸半径内或附近会伴随火焰。
	 *
	 * If true, the explosion is accompanied by fires within or
	 * near the blast radius.
	 *
	 */
	causesFire?: boolean;
	/**
	 * @remarks
	 * 可选的爆炸来源。
	 *
	 * Optional source of the explosion.
	 *
	 */
	source?: Entity;
}

/**
 * Greater than operator.
 * 大于操作符。
 */
export interface GreaterThanComparison {
	/**
	 * @remarks
	 * 与之比较的阈值。
	 *
	 * Threshold value compared against.
	 *
	 */
	greaterThan: number;
}

/**
 * Greater than or equal to operator.
 * 大于或等于操作符。
 */
export interface GreaterThanOrEqualsComparison {
	/**
	 * @remarks
	 * 用于比较的阈值。
	 *
	 * Threshold value compared against.
	 */
	greaterThanOrEquals: number;
}

/**
 * @beta
 * 一个接口，用于传递到 {@link
 * @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe}，
 * 用于过滤哪些事件会传递给提供的回调函数。
 */
export interface InputEventOptions {
	/**
	 * @remarks
	 * 指定回调函数应被调用的按钮。如果未定义，则回调函数会被调用于所有按钮。
	 *
	 * The buttons the callback should be called for. If undefined,
	 * the callback will be called for all buttons.
	 */
	buttons?: InputButton[];
	/**
	 * @remarks
	 * 指定回调函数应被调用的按钮状态。如果未定义，则回调函数会被调用于所有按钮状态。
	 *
	 * The state the callback should be called for. If undefined,
	 * the callback will be called for all button states.
	 */
	state?: ButtonState;
}

/**
 * 包含一组将为某个物品触发的事件。
 * 这个对象必须通过 ItemComponentRegistry 绑定。
 */
export interface ItemCustomComponent {
	/**
	 * @remarks
	 * 当包含此组件的物品即将对实体造成耐久度损伤时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is hitting an entity and about to take durability
	 * damage.
	 */
	onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品使用持续时间完成时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component's use duration was completed.
	 */
	onCompleteUse?: (arg0: ItemComponentCompleteUseEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品被实体食用时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is eaten by an entity.
	 */
	onConsume?: (arg0: ItemComponentConsumeEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品用于攻击另一个实体时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is used to hit another entity.
	 */
	onHitEntity?: (arg0: ItemComponentHitEntityEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品用于挖掘方块时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is used to mine a block.
	 */
	onMineBlock?: (arg0: ItemComponentMineBlockEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品被玩家使用时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is used by a player.
	 */
	onUse?: (arg0: ItemComponentUseEvent) => void;
	/**
	 * @remarks
	 * 当包含此组件的物品用于方块上时调用此函数。
	 *
	 * This function will be called when an item containing this
	 * component is used on a block.
	 */
	onUseOn?: (arg0: ItemComponentUseOnEvent) => void;
}

/**
 * @beta
 * 为 {@link StructureManager.placeJigsaw} 提供附加选项。
 */
export interface JigsawPlaceOptions {
	/**
	 * @remarks
	 * 是否在结构中包含实体。默认为 true。
	 *
	 * Whether entities should be included in the structure.
	 * Defaults to true.
	 */
	includeEntities?: boolean;
	/**
	 * @remarks
	 * 生成结构时是否保留拼图方块。默认为 false。
	 *
	 * Whether the jigsaw blocks should be kept when generating the
	 * structure. Defaults to false.
	 */
	keepJigsaws?: boolean;
}

/**
 * @beta
 * 为 {@link StructureManager.placeJigsawStructure} 提供附加选项。
 */
export interface JigsawStructurePlaceOptions {
	/**
	 * @remarks
	 * 是否忽略拼图结构定义中的起始高度，并用指定的 y 坐标替代。默认为 false。
	 *
	 * Whether the start height defined in the jigsaw structure
	 * definition should be ignored and overridden with the
	 * specified y coordinate. Defaults to false.
	 */
	ignoreStartHeight?: boolean;
	/**
	 * @remarks
	 * 是否在结构中包含实体。默认为 true。
	 *
	 * Whether entities should be included in the structure.
	 * Defaults to true.
	 */
	includeEntities?: boolean;
	/**
	 * @remarks
	 * 生成结构时是否保留拼图方块。默认为 false。
	 *
	 * Whether the jigsaw blocks should be kept when generating the
	 * structure. Defaults to false.
	 */
	keepJigsaws?: boolean;
}

/**
 * 小于运算符。
 */
export interface LessThanComparison {
	/**
	 * @remarks
	 * 用于比较的阈值。
	 *
	 * Threshold value compared against.
	 *
	 */
	lessThan: number;
}

/**
 * 小于或等于的运算符。
 *
 * Less than or equal to operator.
 */
export interface LessThanOrEqualsComparison {
	/**
	 * @remarks
	 * 用于比较的阈值。
	 *
	 * Threshold value compared against.
	 *
	 */
	lessThanOrEquals: number;
}

/**
 * 使用 {@link World.playMusic} 和 {@link World.queueMusic} 方法的附加配置选项。
 *
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
	/**
	 * @remarks
	 * 指定音乐播放结束时的淡出重叠。
	 *
	 * Specifies a fade overlap for music at the end of play.
	 *
	 */
	fade?: number;
	/**
	 * @remarks
	 * 若设置为 `true`，则此音乐轨道将重复播放。
	 *
	 * If set to true, this music track will play repeatedly.
	 *
	 */
	loop?: boolean;
	/**
	 * @remarks
	 * 音乐的相对音量级别。
	 *
	 * Relative volume level of the music.
	 *
	 */
	volume?: number;
}

/**
 * 不等于运算符。
 *
 * Not equal to operator.
 */
export interface NotEqualsComparison {
	/**
	 * @remarks
	 * 用于比较的阈值。
	 *
	 * Threshold value compared against.
	 *
	 */
	notEquals: boolean | number | string;
}

/**
 * 包含动画播放的附加选项。
 *
 * Contains additional options for how an animation is played.
 */
export interface PlayAnimationOptions {
	/**
	 * @remarks
	 * 动画停止后淡出的时间。
	 *
	 * Amount of time to fade out after an animation stops.
	 *
	 */
	blendOutTime?: number;
	/**
	 * @remarks
	 * 指定在实体上定义的控制器。
	 *
	 * Specifies a controller to use that has been defined on the
	 * entity.
	 *
	 */
	controller?: string;
	/**
	 * @remarks
	 * 指定要转到的状态。
	 *
	 * Specifies the state to transition to.
	 *
	 */
	nextState?: string;
	/**
	 * @remarks
	 * 动画对其可见的玩家列表。
	 *
	 * A list of players the animation will be visible to.
	 *
	 */
	players?: string[];
	/**
	 * @remarks
	 * 指定动画应该完成的 Molang 表达式。
	 *
	 * Specifies a Molang expression for when this animation should
	 * complete.
	 *
	 */
	stopExpression?: string;
}

/**
 * @beta
 * 与玩家瞄准辅助目标有关的设置。
 *
 * 设置玩家瞄准辅助目标的实验要求：
 * - 摄像机瞄准辅助
 *
 * Settings relating to a player's aim-assist targeting.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export interface PlayerAimAssistSettings {
	/**
	 * @remarks
	 * 瞄准辅助目标的视距限制。
	 *
	 * The view distance limit to use for aim-assist targeting.
	 *
	 */
	distance?: number;
	/**
	 * @remarks
	 * 要激活的瞄准辅助预设ID。必须包含命名空间。
	 *
	 * The Id of the aim-assist preset to activate. Must have a
	 * namespace.
	 *
	 */
	presetId: string;
	/**
	 * @remarks
	 * 瞄准辅助目标使用的模式。
	 *
	 * The mode to use for aim-assist targeting.
	 *
	 */
	targetMode?: AimAssistTargetMode;
	/**
	 * @remarks
	 * 瞄准辅助目标的视角限制。
	 *
	 * The view angle limit to use for aim-assist targeting.
	 *
	 */
	viewAngle?: Vector2;
}

/**
 * 玩家声音播放的附加选项。
 *
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
	/**
	 * @remarks
	 * 声音位置；如果未指定，声音将在玩家附近播放。
	 *
	 * Location of the sound; if not specified, the sound is played
	 * near a player.
	 *
	 */
	location?: Vector3;
	/**
	 * @remarks
	 * 可选的声音音调。
	 *
	 * Optional pitch of the sound.
	 *
	 */
	pitch?: number;
	/**
	 * @remarks
	 * 可选的声音音量。
	 *
	 * Optional volume of the sound.
	 *
	 */
	volume?: number;
}

/**
 * @beta
 * 用于创建药水的选项。参见 ItemStack.createPotion。
 *
 * Options for use in creating potions. See
 * ItemStack.createPotion.
 */
export interface PotionOptions {
	/**
	 * @remarks
	 * 要创建的药水效果类型。参见 @minecraft/vanilla-data.MinecraftPotionEffectTypes。
	 *
	 * The type of potion effect to create. See
	 * @minecraft/vanilla-data.MinecraftPotionEffectTypes.
	 *
	 */
	effect: PotionEffectType | string;
	/**
	 * @remarks
	 * 可选的药水液体，默认为‘Regular’。参见 @minecraft/vanilla-data.MinecraftPotionLiquidTypes。
	 *
	 * Optional potion liquid, defaults to 'Regular'. See
	 * @minecraft/vanilla-data.MinecraftPotionLiquidTypes.
	 *
	 */
	liquid?: PotionLiquidType | string;
	/**
	 * @remarks
	 * 可选的药水修饰符，默认为‘Normal’。参见 @minecraft/vanilla-data.MinecraftPotionModifierTypes。
	 *
	 * Optional potion modifier, defaults to 'Normal'. See
	 * @minecraft/vanilla-data.MinecraftPotionModifierTypes.
	 *
	 */
	modifier?: PotionModifierType | string;
}

/**
 * @minecraft/server.EntityProjectileComponent.shoot 的可选参数。
 *
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 */
export interface ProjectileShootOptions {
	/**
	 * @remarks
	 * 控制射击的准确性。值为0时为完全准确。
	 *
	 * Controls the accuracy of the shot. A value of 0 is perfect
	 * accuracy.
	 *
	 */
	uncertainty?: number;
}

/**
 * Operator 表示用于表示可能的数字范围的上下限结构。
 *
 * Operator represents a lower/upper bound structure for
 * expressing a potential range of numbers.
 */
export interface RangeComparison {
	/**
	 * @remarks
	 * 范围内的下限。
	 *
	 * Lower bound within a range.
	 *
	 */
	lowerBound: number;
	/**
	 * @remarks
	 * 范围内的上限。
	 *
	 * Upper bound within a range.
	 *
	 */
	upperBound: number;
}

/**
 * 定义了一个用于更灵活的 JSON 结构。
 * @seeExample addTranslatedSign.ts 9d3a2d98
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 *
 * Defines a JSON structure that is used for more flexible.
 * @seeExample addTranslatedSign.ts 9d3a2d98
 * @seeExample showTranslatedMessageForm.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export interface RawMessage {
	/**
	 * 提供当前消息的原始文本等效内容。
	 *
	 * Provides a raw-text equivalent of the current message.
	 *
	 */
	rawtext?: RawMessage[];
	/**
	 * 提供一个标记，该标记将被分数值替换。
	 *
	 * Provides a token that will get replaced with the value of a score.
	 *
	 */
	score?: RawMessageScore;
	/**
	 * 提供一个字符串字面量值。
	 *
	 * Provides a string literal value to use.
	 *
	 */
	text?: string;
	/**
	 * 提供一个翻译标记，如果客户端在玩家的语言资源中有匹配的标记，则在客户端翻译。
	 *
	 * Provides a translation token where, if the client has an available resource in the players' language which matches the token, will get translated on the client.
	 *
	 */
	translate?: string;
	/**
	 * 翻译标记的参数。可以是字符串数组或包含原始文本对象数组的 RawMessage。
	 *
	 * Arguments for the translation token. Can be either an array of strings or RawMessage containing an array of raw text objects.
	 *
	 */
	with?: string[] | RawMessage;
}

/**
 * 提供一个记分标记的描述，用于在原始消息中使用。
 *
 * Provides a description of a score token to use within a raw message.
 */
export interface RawMessageScore {
	/**
	 * 要匹配的分数值的名称。
	 *
	 * Name of the score value to match.
	 *
	 */
	name?: string;
	/**
	 * 要匹配的分数值的目标名称。
	 *
	 * Name of the score value to match.
	 *
	 */
	objective?: string;
}

/**
 * 只有 `rawtext` 属性的 `RawMessage`。当 `RawMessage` 被序列化时，内容会放入一个 rawtext 属性中，因此在读取保存的 RawMessages 时很有用。请参阅 `BlockSignComponent.setText` 和 `BlockSignComponent.getRawText` 示例。
 *
 * A `RawMessage` with only the `rawtext` property. When a `RawMessage` is serialized the contents are put into a rawtext property, so this is useful when reading saved RawMessages. See `BlockSignComponent.setText` and `BlockSignComponent.getRawText` for examples.
 */
export interface RawText {
	/**
	 * 与相关告示牌当前值的序列化表示。
	 *
	 * A serialization of the current value of an associated sign.
	 *
	 */
	rawtext?: RawMessage[];
}

/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
export interface RGB {
	/**
	 * 确定颜色的蓝色分量。有效值在 0 到 1.0 之间。
	 *
	 * Determines a color's blue component. Valid values are between 0 and 1.0.
	 *
	 */
	blue: number;
	/**
	 * 确定颜色的绿色分量。有效值在 0 到 1.0 之间。
	 *
	 * Determines a color's green component. Valid values are between 0 and 1.0.
	 *
	 */
	green: number;
	/**
	 * 确定颜色的红色分量。有效值在 0 到 1.0 之间。
	 *
	 * Determines a color's red component. Valid values are between 0 and 1.0.
	 *
	 */
	red: number;
}

/**
 * 表示 Minecraft 中完全可自定义的颜色。
 *
 * Represents a fully customizable color within Minecraft.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
	/**
	 * 确定颜色的透明度（不透明度）分量。有效值在 0（透明）到 1.0（不透明）之间。
	 *
	 * Determines a color's alpha (opacity) component. Valid values are between 0 (transparent) and 1.0 (opaque).
	 *
	 */
	alpha: number;
}

/**
 * 表示记分项显示位置配置。描述了如何在记分板显示位置上显示记分项。
 *
 * Contains additional options for how a scoreboard should be displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
	/**
	 * @remarks
	 * 要显示的记分项。
	 *
	 * Objective to be displayed.
	 *
	 */
	objective: ScoreboardObjective;
	/**
	 * @remarks
	 * 记分项条目的显示排序顺序。
	 *
	 * The sort order to display the objective items within.
	 *
	 */
	sortOrder?: ObjectiveSortOrder;
}

/**
 * 包含注册脚本事件回调的额外选项。
 * Contains additional options for registering a script event
 * event callback.
 */
export interface ScriptEventMessageFilterOptions {
	/**
	 * @remarks
	 * 可选的命名空间列表，用于过滤入站的脚本事件消息。
	 *
	 * Optional list of namespaces to filter inbound script event
	 * messages.
	 *
	 */
	namespaces: string[];
}

/**
 * @beta
 */
export interface SpawnEntityOptions {
	/**
	 * @remarks
	 * 实体在生成时是否具有持久性。
	 *
	 * Whether the entity has persistence when spawned.
	 *
	 */
	initialPersistence?: boolean;
	/**
	 * @remarks
	 * 实体在生成时的初始旋转角度（以度为单位）。
	 *
	 * The initial rotation of the entity when spawned, in degrees.
	 *
	 */
	initialRotation?: number;
}

/**
 * 为结构管理器的 `createFromWorld` 方法提供额外选项。
 * Provides additional options for {@link
 * StructureManager.createFromWorld}
 */
export interface StructureCreateOptions {
	/**
	 * @remarks
	 * 是否应将方块包含在结构中。默认为 `true`。
	 *
	 * Whether blocks should be included in the structure. Defaults
	 * to true.
	 *
	 */
	includeBlocks?: boolean;
	/**
	 * @remarks
	 * 是否应将实体包含在结构中。默认为 `true`。
	 *
	 * Whether entities should be included in the structure.
	 * Defaults to true.
	 *
	 */
	includeEntities?: boolean;
	/**
	 * @remarks
	 * 结构应如何保存。默认为 `StructureSaveMode.World`。
	 *
	 * How the Structure should be saved. Defaults to
	 * StructureSaveMode.World.
	 *
	 */
	saveMode?: StructureSaveMode;
}

/**
 * 为结构管理器的 `place` 方法提供额外选项。
 * Provides additional options for {@link
 * StructureManager.place}
 */
export interface StructurePlaceOptions {
	/**
	 * @remarks
	 * 结构放置时应如何动画播放。
	 *
	 * How the Structure should be animated when placed.
	 *
	 */
	animationMode?: StructureAnimationMode;
	/**
	 * @remarks
	 * 动画播放应持续多少秒。
	 *
	 * How many seconds the animation should take.
	 *
	 */
	animationSeconds?: number;
	/**
	 * @remarks
	 * 是否应将方块包含在结构中。默认为 `true`。
	 *
	 * Whether blocks should be included in the structure. Defaults
	 * to true.
	 *
	 */
	includeBlocks?: boolean;
	/**
	 * @remarks
	 * 是否应将实体包含在结构中。默认为 `true`。
	 *
	 * Whether entities should be included in the structure.
	 * Defaults to true.
	 *
	 */
	includeEntities?: boolean;
	/**
	 * @remarks
	 * 应放置多少百分比的方块。值为 `1` 时放置 100% 的方块，值为 `0` 时不放置任何方块。方块是根据结构放置选项中的 `integritySeed` 随机选择的。
	 *
	 * What percentage of blocks should be placed. A value of 1
	 * will place 100% of the blocks while a value of 0 will place
	 * none. The blocks are chosen randomly based on the {@link
	 * StructurePlaceOptions.integritySeed}.
	 *
	 */
	integrity?: number;
	/**
	 * @remarks
	 * 确定要随机选择放置的方块的种子。默认为随机种子。
	 *
	 * Seed that determines which blocks are randomly chosen to be
	 * placed. Defaults to a random seed.
	 *
	 */
	integritySeed?: string;
	/**
	 * @remarks
	 * 结构在放置时应镜像在哪些轴上。默认为 `StructureMirrorAxis.None`。
	 *
	 * Which axes the Structure should be mirrored on when placed.
	 * Defaults to StructureMirrorAxis.None.
	 *
	 */
	mirror?: StructureMirrorAxis;
	/**
	 * @remarks
	 * 结构在放置时应如何旋转。默认为 `AxisAlignedRotation.None`。
	 *
	 * How the Structure should be rotated when placed. Defaults to
	 * AxisAlignedRotation.None.
	 *
	 */
	rotation?: StructureRotation;
	/**
	 * @remarks
	 * 当放置在水中时，结构是否应被水浸透。默认为 `false`。如果为 `true`，则在水中放置的方块会被水浸透。
	 *
	 * Whether the structure should be waterlogged when placed.
	 * Defaults to false. If true, blocks will become waterlogged
	 * when placed in water.
	 *
	 */
	waterlogged?: boolean;
}

/**
 * 包含传送实体的额外选项。
 * Contains additional options for teleporting an entity.
 * @seeExample teleport.ts
 * @seeExample teleportMovement.ts
 */
export interface TeleportOptions {
	/**
	 * @remarks
	 * 是否检查传送后是否有方块阻挡实体。
	 *
	 * Whether to check whether blocks will block the entity after
	 * teleport.
	 */
	checkForBlocks?: boolean;
	/**
	 * @remarks
	 * 实体可能要移动到的维度。如果没有指定，实体将在所在的维度内传送。
	 *
	 * Dimension to potentially move the entity to.  If not
	 * specified, the entity is teleported within the dimension
	 * that they reside.
	 */
	dimension?: Dimension;
	/**
	 * @remarks
	 * 实体传送后应面对的位置。
	 *
	 * Location that the entity should be facing after teleport.
	 */
	facingLocation?: Vector3;
	/**
	 * @remarks
	 * 是否在传送后保留实体的速度。
	 *
	 * Whether to retain the entities velocity after teleport.
	 */
	keepVelocity?: boolean;
	/**
	 * @remarks
	 * 实体传送后的旋转。
	 *
	 * Rotation of the entity after teleport.
	 */
	rotation?: Vector2;
}

/**
 * Contains additional options for displaying a title and
 * optional subtitle.
 *
 * 显示标题和可选副标题的附加选项。
 */
export interface TitleDisplayOptions {
	/**
	 * @remarks
	 * 标题和副标题的淡入时间，以刻为单位。每秒有 20 个刻。使用 {@link TicksPerSecond} 常数在刻与秒之间转换。
	 *
	 * Fade-in duration for the title and subtitle, in ticks. There
	 * are 20 ticks per second. Use {@link TicksPerSecond} constant
	 * to convert between ticks and seconds.
	 */
	fadeInDuration: number;
	/**
	 * @remarks
	 * 标题和副标题的淡出时间，以刻为单位。每秒有 20 个刻。使用 {@link TicksPerSecond} 常数在刻与秒之间转换。
	 *
	 * Fade-out time for the title and subtitle, in ticks. There
	 * are 20 ticks per second. Use {@link TicksPerSecond} constant
	 * to convert between ticks and seconds.
	 */
	fadeOutDuration: number;
	/**
	 * @remarks
	 * 标题和副标题停留的时间，以刻为单位。每秒有 20 个刻。使用 {@link TicksPerSecond} 常数在刻与秒之间转换。
	 *
	 * Amount of time for the title and subtitle to stay in place,
	 * in ticks. There are 20 ticks per second. Use {@link
	 * TicksPerSecond} constant to convert between ticks and
	 * seconds.
	 */
	stayDuration: number;
	/**
	 * @remarks
	 * 可选的副标题文本。
	 *
	 * Optional subtitle text.
	 */
	subtitle?: (RawMessage | string)[] | RawMessage | string;
}

/**
 * Represents a two-directional vector.
 *
 * 表示一个二维向量。
 */
export interface Vector2 {
	/**
	 * @remarks
	 * 二维向量的 X 分量。
	 *
	 * X component of the two-dimensional vector.
	 */
	x: number;
	/**
	 * @remarks
	 * 二维向量的 Y 分量。
	 *
	 * Y component of the two-dimensional vector.
	 */
	y: number;
}

/**
 * Contains a description of a vector.
 *
 * 包含一个向量的描述。
 */
export interface Vector3 {
	/**
	 * @remarks
	 * 此向量的 X 分量。
	 *
	 * X component of this vector.
	 */
	x: number;
	/**
	 * @remarks
	 * 此向量的 Y 分量。
	 *
	 * Y component of this vector.
	 */
	y: number;
	/**
	 * @remarks
	 * 此向量的 Z 分量。
	 *
	 * Z component of this vector.
	 */
	z: number;
}

export interface VectorXZ {
	x: number;
	z: number;
}

/**
 * Contains additional options for a playSound occurrence.
 *
 * 包含播放声音事件的附加选项。
 */
export interface WorldSoundOptions {
	/**
	 * @remarks
	 * 声音播放的音调。
	 *
	 * Pitch of the sound played.
	 */
	pitch?: number;

	/**
	 * @remarks
	 * 该声音的相对音量和空间感。
	 *
	 * Relative volume and space by which this sound is heard.
	 */
	volume?: number;
}

export class BlockCustomComponentAlreadyRegisteredError extends Error {
	private constructor();
}

export class BlockCustomComponentReloadNewComponentError extends Error {
	private constructor();
}

export class BlockCustomComponentReloadNewEventError extends Error {
	private constructor();
}

export class BlockCustomComponentReloadVersionError extends Error {
	private constructor();
}
export class CommandError extends Error {
	private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentInvalidRegistryError extends Error {
	private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
	private constructor();
	reason: CustomComponentNameErrorReason;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentLevelOutOfBoundsError extends Error {
	private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeNotCompatibleError extends Error {
	private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EnchantmentTypeUnknownIdError extends Error {
	private constructor();
}

/**
 * 容器槽无效。当所属容器被破坏或卸载时，会出现这种情况。
 * The container slot is invalid. This can occur when the
 * owning container is destroyed or unloaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
	private constructor();
}

/**
 * @rc
 * 当实体无效时调用的错误。当访问被移除实体的组件时，会出现这种情况。
 * The error called when an entity is invalid. This can occur
 * when accessing components on a removed entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
	private constructor();
	/**
	 * @remarks
	 * 无效实体的 ID。
	 * The id of the entity that is now invalid.
	 *
	 */
	id: string;
	/**
	 * @remarks
	 * 无效实体的类型。
	 * The type of the entity that is now invalid.
	 *
	 */
	type: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidIteratorError extends Error {
	private constructor();
}

/**
 * 当结构体无效时抛出。当结构体被删除时，它会变得无效。
 * Thrown when a Structure is invalid. A structure becomes
 * invalid when it is deleted.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
	private constructor();
}

/**
 * 尝试注册带有已注册名称的物品自定义组件时抛出。
 * Thrown when trying to register an item custom component with
 * a name that has already been registered.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
	private constructor();
}

/**
 * 在尝试注册之前未注册的自定义物品组件时使用 /reload 命令后抛出。
 *
 * Thrown after using the /reload command when trying to register a previously unregistered item custom component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
	private constructor();
}

/**
 * 在尝试注册之前已注册的并处理新事件的自定义物品组件时使用 /reload 命令后抛出。
 *
 * Thrown after using the /reload command when trying to register a previously registered item custom component that handles a new event.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
	private constructor();
}

/**
 * 在尝试注册具有更新 API 版本的之前已注册的自定义物品组件时使用 /reload 命令后抛出。
 *
 * Thrown after using the /reload command when trying to register a previously registered item custom component with a newer API version.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
	private constructor();
}

/**
 * 提供的位置或边界区域所在的区块未加载时抛出。
 *
 * Thrown when the chunk for provided location or bounding area is not loaded.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
	private constructor();
}

/**
 * 提供的位置或边界区域超出最小或最大维度高度时抛出。
 *
 * Thrown when a provided location or bounding area is outside the minimum or maximum dimension height.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
	private constructor();
}

/**
 * @beta
 * 当名称需要命名空间且验证命名空间时发生错误时抛出。
 *
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
	private constructor();
	reason: NamespaceNameErrorReason;
}

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlaceJigsawError extends Error {
	private constructor();
}

/**
 * 当指定区域包含一个或多个未加载的区块时抛出错误。
 *
 * Error thrown when the specified area contains one or more
 * unloaded chunks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
	private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
/**
 * @remarks
 * 表示月相的数量。
 *
 * Holds the number of MoonPhases
 *
 */
export const MoonPhaseCount = 8;
/**
 * @beta
 */
export const TicksPerDay = 24000;
/**
 * @remarks
 * 表示服务器每秒的真实时间内的刻数。
 *
 * How many times the server ticks per second of real time.
 *
 */
export const TicksPerSecond = 20;
/**
 * @remarks
 * 表示一个提供系统级事件和功能的类。
 *
 * A class that provides system-level events and functions.
 *
 */
export const system: System;
/**
 * @remarks
 * 表示一个包装了世界状态的类 - 一组维度以及 Minecraft 的环境。
 *
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 *
 */
export const world: World;
