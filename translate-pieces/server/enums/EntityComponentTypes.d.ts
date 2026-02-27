/**
 * 可通过函数`Entity.getComponent`访问到的实体组件类型。
 * 
 * The types of entity components that are accessible via
 * function Entity.getComponent.
 */
export enum EntityComponentTypes {
    /**
     * @remarks
     * 添加后，实体将生成一个指定 entityType 的骑手。
     * 
     * When added, this component makes the entity spawn with a
     * rider of the specified entityType.
     *
     */
    AddRider = 'minecraft:addrider',
    /**
     * @remarks
     * 添加一个长大定时器（可成长性）。可以通过向实体提供它喜欢的
     * 由 feedItems 定义的物品来加速长大。
     * 
     * Adds a timer for the entity to grow up. It can be
     * accelerated by giving the entity the items it likes as
     * defined by feedItems.
     *
     */
    Ageable = 'minecraft:ageable',
    /**
     * @remarks
     * 定义该实体可以从中呼吸的方块，并赋予其（在其他方块中）窒息的能力。
     * 
     * Defines what blocks this entity can breathe in and gives
     * them the ability to suffocate.
     *
     */
    Breathable = 'minecraft:breathable',
    /**
     * @remarks
     * 添加后，实体可以爬梯子。
     * 
     * When added, this component signifies that the entity can
     * climb up ladders.
     *
     */
    CanClimb = 'minecraft:can_climb',
    /**
     * @remarks
     * 添加后，实体可以飞，并且实体的寻路AI不会局限于脚下有方块的路径。
     * 
     * When added, this component signifies that the entity can
     * fly, and the pathfinder won't be restricted to paths where a
     * solid block is required underneath it.
     *
     */
    CanFly = 'minecraft:can_fly',
    /**
     * @remarks
     * 添加后，实体可以像游戏中的马一样能蓄力跳跃。
     * 
     * When added, this component signifies that the entity can
     * power jump like the horse does within Minecraft.
     *
     */
    CanPowerJump = 'minecraft:can_power_jump',
    /**
     * @remarks
     * 定义实体的颜色。仅适用于有预定颜色值的特定实体（如羊、羊驼、潜影贝）。
     * 
     * Defines the entity's color. Only works on certain entities
     * that have predefined color values (e.g., sheep, llama,
     * shulker).
     *
     */
    Color = 'minecraft:color',
    /**
     * @remarks
     * 定义实体的次要颜色。仅适用于有预定颜色值的特定实体（如热带鱼）。
     * 
     * Defines the entity's secondary color. Only works on certain
     * entities that have predefined secondary color values (e.g.,
     * tropical fish).
     *
     */
    Color2 = 'minecraft:color2',
    CursorInventory = 'minecraft:cursor_inventory',
    /**
     * @remarks
     * 提供对生物装备栏槽位的访问权限。所有生物都存在此组件。
     * 
     * Provides access to a mob's equipment slots. This component
     * exists for all mob entities.
     *
     */
    Equippable = 'minecraft:equippable',
    /**
     * @remarks
     * 添加后，实体不会受到火焰伤害。
     * 
     * When added, this component signifies that this entity
     * doesn't take damage from fire.
     *
     */
    FireImmune = 'minecraft:fire_immune',
    /**
     * @remarks
     * 添加后，实体可以在液体方块中上浮。
     * 
     * When added, this component signifies that this entity can
     * float in liquid blocks.
     *
     */
    FloatsInLiquid = 'minecraft:floats_in_liquid',
    /**
     * @remarks
     * 表示实体的飞行速度。
     * 
     * Represents the flying speed of an entity.
     *
     */
    FlyingSpeed = 'minecraft:flying_speed',
    /**
     * @remarks
     * 定义摩擦对实体的影响程度。
     * 
     * Defines how much friction affects this entity.
     *
     */
    FrictionModifier = 'minecraft:friction_modifier',
    /**
     * @remarks
     * 定义与实体进行治疗的交互。
     * 
     * Defines the interactions with this entity for healing it.
     *
     */
    Healable = 'minecraft:healable',
    /**
     * @remarks
     * 定义实体的血量属性。
     * 
     * Defines the health properties of an entity.
     *
     */
    Health = 'minecraft:health',
    /**
     * @remarks
     * 定义实体的物品栏属性。
     * 
     * Defines this entity's inventory properties.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * 添加后，表示实体是未长大的。
     * 
     * When added, this component signifies that this entity is a
     * baby.
     *
     */
    IsBaby = 'minecraft:is_baby',
    /**
     * @remarks
     * 添加后，表示实体是被闪电击中（过）的。
     * 
     * When added, this component signifies that this entity is
     * charged.
     *
     */
    IsCharged = 'minecraft:is_charged',
    /**
     * @remarks
     * 添加后，表示实体当前扛着一个箱子。
     * 
     * When added, this component signifies that this entity is
     * currently carrying a chest.
     *
     */
    IsChested = 'minecraft:is_chested',
    /**
     * @remarks
     * 添加后，表示染料可以对实体使用来改变它的颜色。
     * 
     * When added, this component signifies that dyes can be used
     * on this entity to change its color.
     *
     */
    IsDyeable = 'minecraft:is_dyeable',
    /**
     * @remarks
     * 添加后，表示实体可以在不可见状态下躲避敌对生物。
     * 
     * When added, this component signifies that this entity can
     * hide from hostile mobs while invisible.
     *
     */
    IsHiddenWhenInvisible = 'minecraft:is_hidden_when_invisible',
    /**
     * @remarks
     * 添加后，表示实体当前处于着火状态。
     * 
     * When added, this component signifies that this entity this
     * currently on fire.
     *
     */
    IsIgnited = 'minecraft:is_ignited',
    /**
     * @remarks
     * 添加后，表示实体是一个掠夺者队长。
     * 
     * When added, this component signifies that this entity is an
     * illager captain.
     *
     */
    IsIllagerCaptain = 'minecraft:is_illager_captain',
    /**
     * @remarks
     * 添加后，表示实体装备了马鞍。
     * 
     * When added, this component signifies that this entity is
     * currently saddled.
     *
     */
    IsSaddled = 'minecraft:is_saddled',
    /**
     * @remarks
     * 添加后，表示实体在颤抖。
     * 
     * When added, this component signifies that this entity is
     * currently shaking.
     *
     */
    IsShaking = 'minecraft:is_shaking',
    /**
     * @remarks
     * 添加后，表示实体已被剪毛。
     * 
     * When added, this component signifies that this entity is
     * currently sheared.
     *
     */
    IsSheared = 'minecraft:is_sheared',
    /**
     * @remarks
     * 添加后，表示实体可以堆叠（如玩家可以站到善魂上）。
     * 
     * When added, this component signifies that this entity can be
     * stacked.
     *
     */
    IsStackable = 'minecraft:is_stackable',
    /**
     * @remarks
     * 添加后，表示实体处于眩晕状态。
     * 
     * When added, this component signifies that this entity is
     * currently stunned.
     *
     */
    IsStunned = 'minecraft:is_stunned',
    /**
     * @remarks
     * 添加后，表示实体已被驯服。
     * 
     * When added, this component signifies that this entity is
     * currently tamed.
     *
     */
    IsTamed = 'minecraft:is_tamed',
    /**
     * @remarks
     * 添加后，表示实体是世界中的一个物品实体，可以通过 itemStack 获取
     * 实际的物品堆内容。
     * 
     * If added onto the entity, this indicates that the entity
     * represents a free-floating item in the world. Lets you
     * retrieve the actual item stack contents via the itemStack
     * property.
     *
     */
    Item = 'minecraft:item',
    /**
     * @remarks
     * 定义实体在岩浆中的基本移动速度。
     * 
     * Defines the base movement speed in lava of this entity.
     *
     */
    LavaMovement = 'minecraft:lava_movement',
    /**
     * @remarks
     * 允许实体被拴绳栓，并定义实体被拴绳栓时的条件和事件。
     * 
     * Allows this entity to be leashed and defines the conditions
     * and events for this entity when is leashed.
     *
     */
    Leashable = 'minecraft:leashable',
    /**
     * @remarks
     * 添加后，表示实体包含一个额外的变体值，可用于进一步区分变体。
     * 
     * When added, this component signifies that this entity
     * contains an additional variant value. Can be used to further
     * differentiate variants.
     *
     */
    MarkVariant = 'minecraft:mark_variant',
    /**
     * @remarks
     * 定义实体的一般移动速度。
     * 
     * Defines the general movement speed of this entity.
     *
     */
    Movement = 'minecraft:movement',
    /**
     * @remarks
     * 添加后，运动控件允许实体在水中游泳和在陆地上行走。
     * 
     * When added, this movement control allows the mob to swim in
     * water and walk on land.
     *
     */
    MovementAmphibious = 'minecraft:movement.amphibious',
    /**
     * @remarks
     * 添加后，允许实体移动。
     * 
     * When added, this component allows the movement of an entity.
     *
     */
    MovementBasic = 'minecraft:movement.basic',
    /**
     * @remarks
     * 添加后，运动控件使生物能够飞行。
     * 
     * When added, this move control causes the mob to fly.
     *
     */
    MovementFly = 'minecraft:movement.fly',
    /**
     * @remarks
     * 添加后，运动控件允许生物飞行、游泳和攀爬等等。
     * 
     * When added, this move control allows a mob to fly, swim,
     * climb, etc.
     *
     */
    MovementGeneric = 'minecraft:movement.generic',
    /**
     * @remarks
     * 添加后，运动控件允许生物滑翔。
     * 
     * When added, this movement control allows the mob to glide.
     *
     */
    MovementGlide = 'minecraft:movement.glide',
    /**
     * @remarks
     * 添加后，运动控件允许生物悬停。
     * 
     * When added, this move control causes the mob to hover.
     *
     */
    MovementHover = 'minecraft:movement.hover',
    /**
     * @remarks
     * 运动控件使生物以跳跃作为移动，并在每次跳跃之间都有指定延迟。
     * 
     * Move control that causes the mob to jump as it moves with a
     * specified delay between jumps.
     *
     */
    MovementJump = 'minecraft:movement.jump',
    /**
     * @remarks
     * 添加后，运动控件使生物在移动时蹦跳。
     * 
     * When added, this move control causes the mob to hop as it
     * moves.
     *
     */
    MovementSkip = 'minecraft:movement.skip',
    /**
     * @remarks
     * 添加后，移动控件使生物左右摆动，给人一种游泳的感觉。
     * 
     * When added, this move control causes the mob to sway side to
     * side giving the impression it is swimming.
     *
     */
    MovementSway = 'minecraft:movement.sway',
    /**
     * @remarks
     * 允许生物生成包含垂直墙面的路径（如蜘蛛）。
     * 
     * Allows this entity to generate paths that include vertical
     * walls (for example, like Minecraft spiders do.)
     *
     */
    NavigationClimb = 'minecraft:navigation.climb',
    /**
     * @remarks
     * 允许生物通过在空中四处飞行来生成路径（如恶魂）。
     * 
     * Allows this entity to generate paths by flying around the
     * air like the regular Ghast.
     *
     */
    NavigationFloat = 'minecraft:navigation.float',
    /**
     * @remarks
     * 允许生物通过在空中飞行来生成路径（如鹦鹉）。
     * 
     * Allows this entity to generate paths in the air (for
     * example, like Minecraft parrots do.)
     *
     */
    NavigationFly = 'minecraft:navigation.fly',
    /**
     * @remarks
     * 允许生物通过行走、游泳、飞行和/或攀爬来生成路径，并且能在方块上上下跳跃。
     * 
     * Allows this entity to generate paths by walking, swimming,
     * flying and/or climbing around and jumping up and down a
     * block.
     *
     */
    NavigationGeneric = 'minecraft:navigation.generic',
    /**
     * @remarks
     * 允许生物在空中生成路径（如蜜蜂）防止他们从空中掉落并进行预测性移动。
     * 
     * Allows this entity to generate paths in the air (for
     * example, like the Minecraft Bees do.) Keeps them from
     * falling out of the skies and doing predictive movement.
     *
     */
    NavigationHover = 'minecraft:navigation.hover',
    /**
     * @remarks
     * 允许这个实体通过行走并在方块上上上下跳跃来生成路径，就像普通生物一样。
     * 
     * Allows this entity to generate paths by walking around and
     * jumping up and down a block like regular mobs.
     *
     */
    NavigationWalk = 'minecraft:navigation.walk',
    /**
     * @beta
     * @remarks
     * 为实体添加 NPC 功能，如自选皮肤、改名和对话交互。
     * 
     * Adds NPC capabilities to an entity such as custom skin,
     * name, and dialogue interactions.
     *
     */
    Npc = 'minecraft:npc',
    /**
     * @remarks
     * 当实体存在组件时，其会着火。
     * 
     * When present on an entity, this entity is on fire.
     *
     */
    OnFire = 'minecraft:onfire',
    /**
     * @remarks
     * 用此来读取玩家的疲劳值（其达到阈值时，会消耗饱和度及饥饿值）。只能用于玩家。
     * 
     * Use this component to read the exhaustion of a player. This
     * is only available on players.
     *
     */
    Exhaustion = 'minecraft:player.exhaustion',
    /**
     * @remarks
     * 用此来读取玩家的饥饿值。只能用于玩家。
     * 
     * Use this component to read the hunger of a player. This is
     * only available on players.
     *
     */
    Hunger = 'minecraft:player.hunger',
    /**
     * @remarks
     * 用此来读取玩家的饱和度。只能用于玩家。
     * 
     * Use this component to read the saturation of a player. This
     * is only available on players.
     *
     */
    Saturation = 'minecraft:player.saturation',
    /**
     * @remarks
     * 投掷物组件控制投掷物实体的属性，并允许它向指定方向发射。（原文往后是废话）
     * 
     * The projectile component controls the properties of a
     * projectile entity and allows it to be shot in a given
     * direction. This component is present when the entity has the
     * minecraft:projectile component.
     *
     */
    Projectile = 'minecraft:projectile',
    /**
     * @remarks
     * 设置投掷物推进距离。
     * 
     * Sets the distance through which the entity can push through.
     *
     */
    PushThrough = 'minecraft:push_through',
    /**
     * @remarks
     * 添加后，实体可以被其他实体骑乘。
     * 
     * When added, this component adds the capability that an
     * entity can be ridden by another entity.
     *
     */
    Rideable = 'minecraft:rideable',
    /**
     * @remarks
     * 当实体在骑乘另外一个实体时，会存在这个组件。
     * 
     * This component is added to any entity when it is riding
     * another entity.
     *
     */
    Riding = 'minecraft:riding',
    /**
     * @remarks
     * 设置实体的视觉大小。
     * 
     * Sets the entity's visual size.
     *
     */
    Scale = 'minecraft:scale',
    /**
     * @remarks
     * 皮肤 Id 数值。可以用于区分不同皮肤，如村民的基础皮肤。
     * 
     * Skin Id value. Can be used to differentiate skins, such as
     * base skins for villagers.
     *
     */
    SkinId = 'minecraft:skin_id',
    /**
     * @remarks
     * 定义实体携带物品的力量。
     * 
     * Defines the entity's strength to carry items.
     *
     */
    Strength = 'minecraft:strength',
    /**
     * @remarks
     * 定义玩家驯服实体的规则。
     * 
     * Defines the rules for an entity to be tamed by the player.
     *
     */
    Tameable = 'minecraft:tameable',
    /**
     * @remarks
     * 包含基于骑乘它的实体来驯服实体的选项。
     * 
     * Contains options for taming a rideable entity based on the
     * entity that mounts it.
     *
     */
    TameMount = 'minecraft:tamemount',
    /**
     * @remarks
     * 确定实体的类型族。
     * 
     * Used to determine the type families the entity belongs to.
     *
     */
    TypeFamily = 'minecraft:type_family',
    /**
     * @remarks
     * 定义实体在水下的一般移动速度。
     * 
     * Defines the general movement speed underwater of this
     * entity.
     *
     */
    UnderwaterMovement = 'minecraft:underwater_movement',
    /**
     * @remarks
     * 用于将实体的变体组件组与其他变体分开（如豹猫、村民）。
     * 
     * Used to differentiate the component group of a variant of an
     * entity from others. (e.g. ocelot, villager).
     *
     */
    Variant = 'minecraft:variant',
    /**
     * @remarks
     * 添加后，这个组件表示这个实体想要成为骑乘者。
     * 
     * When added, this component signifies that this entity wants
     * to become a jockey.
     *
     */
    WantsJockey = 'minecraft:wants_jockey',
}
