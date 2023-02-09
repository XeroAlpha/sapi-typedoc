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
 * Contains many types related to manipulating a Minecraft
 * world, including entities, blocks, dimensions, and more.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server",
 *   "version": "1.1.0-internal.1.19.70-preview.22"
 * }
 * ```
 *
 */
/**
 * @beta
 * 表示朝向。
 * 
 * Represents a direction for expressing relative position or
 * facing.
 */
export enum Direction {
    /**
     * @beta
     * 表示下方（y - 1）。
     * 
     * Represents an object located or facing in the down (z - 1)
     * direction.
     */
    down = 'down',
    /**
     * @beta
     * 表示东方（x + 1）。
     * 
     * Represents an object located or facing in the east (x + 1)
     * direction.
     */
    east = 'east',
    /**
     * @beta
     * 表示北方（z - 1）。
     * 
     * Represents an object located or facing in the north (z - 1)
     * direction.
     */
    north = 'north',
    /**
     * @beta
     * 表示南方（z + 1）。
     * 
     * Represents an object located or facing in the south (z + 1)
     * direction.
     */
    south = 'south',
    /**
     * @beta
     * 表示上方（y + 1）。
     * 
     * Represents an object located or facing in the up (z + 1)
     * direction.
     */
    up = 'up',
    /**
     * @beta
     * 表示西方（x - 1）。
     * 
     * Represents an object located or facing in the west (x - 1)
     * direction.
     */
    west = 'west',
}
/**
 * @beta
 * 表示记分项的显示位置。
 * 
 * An enumeration for the locations where scoreboard objectives
 * can be displayed.
 */
export enum DisplaySlotId {
    /**
     * @beta
     * 记分项上的分数将显示在玩家名称牌下方。
     * 
     * Score for an objective is displayed below a player's
     * nametag.
     */
    belowname = 'belowname',
    /**
     * @beta
     * 该记分项与对应的分数持有者将显示在暂停菜单上。
     * 
     * This objective and respective list of players is shown on
     * the Pause menu.
     */
    list = 'list',
    /**
     * @beta
     * 记分项将在屏幕右侧显示。
     * 
     * The objective is shown on the right-hand side of the screen.
     */
    sidebar = 'sidebar',
}
export enum EntityDamageCause {
    anvil = 'anvil',
    blockExplosion = 'blockExplosion',
    charging = 'charging',
    contact = 'contact',
    drowning = 'drowning',
    entityAttack = 'entityAttack',
    entityExplosion = 'entityExplosion',
    fall = 'fall',
    fallingBlock = 'fallingBlock',
    fire = 'fire',
    fireTick = 'fireTick',
    fireworks = 'fireworks',
    flyIntoWall = 'flyIntoWall',
    freezing = 'freezing',
    lava = 'lava',
    lightning = 'lightning',
    magic = 'magic',
    magma = 'magma',
    none = 'none',
    override = 'override',
    piston = 'piston',
    projectile = 'projectile',
    stalactite = 'stalactite',
    stalagmite = 'stalagmite',
    starve = 'starve',
    suffocation = 'suffocation',
    suicide = 'suicide',
    temperature = 'temperature',
    thorns = 'thorns',
    'void' = 'void',
    wither = 'wither',
}
/**
 * @beta
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 */
export enum FluidType {
    /**
     * @beta
     * Represents lava as a type of fluid.
     */
    lava = 'lava',
    /**
     * @beta
     * Represents a potion as a type of fluid.
     */
    potion = 'potion',
    /**
     * @beta
     * Represents powder snow as a type of fluid.
     */
    powderSnow = 'powderSnow',
    /**
     * @beta
     * Represents water as a type of fluida.
     */
    water = 'water',
}
/**
 * @beta
 * Represents a game mode for the current world experience.
 */
export enum GameMode {
    /**
     * @beta
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     */
    adventure = 'adventure',
    /**
     * @beta
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     */
    creative = 'creative',
    spectator = 'spectator',
    /**
     * @beta
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     */
    survival = 'survival',
}
export enum ItemLockMode {
    inventory = 'inventory',
    none = 'none',
    slot = 'slot',
}
export enum MessageSourceType {
    clientScript = 'clientScript',
    commandBlock = 'commandBlock',
    dialogueCommand = 'dialogueCommand',
    entityCommand = 'entityCommand',
    serverCommand = 'serverCommand',
    serverScript = 'serverScript',
}
/**
 * @beta
 * 表示分数持有者列表的排序顺序。
 * 
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * 以升序显示分数持有者列表（例如：A-Z）。
     * 
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     */
    ascending = 0,
    /**
     * @beta
     * 以降序显示分数持有者列表（例如：Z-A）。
     * 
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     */
    descending = 1,
}
/**
 * @beta
 * 表示分数持有者的类型。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export enum ScoreboardIdentityType {
    /**
     * @beta
     * 分数持有者是一个实体。
     * 
     * This scoreboard participant is tied to an entity.
     */
    entity = 'entity',
    /**
     * @beta
     * 分数持有者是一个虚拟玩家（通常用于存储数据或者作为抽象进度）。
     * 
     * This scoreboard participant is tied to a pseudo player
     * entity - typically this is used to store scores as data or
     * as abstract progress.
     */
    fakePlayer = 'fakePlayer',
    /**
     * @beta
     * 分数持有者是一位玩家。
     * 
     * This scoreboard participant is tied to a player.
     */
    player = 'player',
}
export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}
/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 */
export enum WatchdogTerminateReason {
    /**
     * @beta
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     */
    hang = 'hang',
    /**
     * @beta
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     */
    stackOverflow = 'stackOverflow',
}
/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class BeforeChatEvent {
    protected constructor();
    /**
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     */
    cancel: boolean;
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    message: string;
    /**
     * Player that sent the chat message.
     */
    sender: Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    sendToTargets: boolean;
    getTargets(): Player[];
    setTargets(players: Player[]): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 */
export class BeforeChatEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     * @param callback
     */
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEvent {
    protected constructor();
    /**
     * If set to true, this entity event is not triggered.
     */
    cancel: boolean;
    /**
     * Entity that the event triggered on.
     */
    readonly entity: Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly id: string;
    getModifiers(): DefinitionModifier[];
    setModifiers(modifiers: DefinitionModifier[]): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class BeforeDataDrivenEntityTriggerEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: BeforeDataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called before a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeDataDrivenEntityTriggerEvent) => void): void;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
export class BeforeExplosionEvent {
    protected constructor();
    /**
     * If set to true, cancels the explosion event.
     */
    cancel: boolean;
    /**
     * Dimension where the explosion has occurred.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
    getImpactedBlocks(): Vector3[];
    setImpactedBlocks(blocks: Vector3[]): void;
}
/**
 * @beta
 * Manages callbacks that are connected to before an explosion
 * occurs.
 */
export class BeforeExplosionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     * @param callback
     */
    subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class BeforeItemDefinitionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(
        callback: (arg: BeforeItemDefinitionTriggeredEvent) => void,
    ): (arg: BeforeItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemDefinitionTriggeredEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a triggering of a custom
 * item definition change.
 */
export class BeforeItemDefinitionTriggeredEvent {
    protected constructor();
    /**
     * If set to true, will cancel the application of this item
     * definition change.
     */
    cancel: boolean;
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly eventName: string;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Contains information related to an item being used.
 */
export class BeforeItemUseEvent {
    protected constructor();
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that fire before an item is used.
 */
export class BeforeItemUseEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class BeforeItemUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * If set to true, this will cancel the item use behavior.
     */
    cancel: boolean;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationX: number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationY: number;
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that fire before an item being used on a
 * block event.
 */
export class BeforeItemUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     * @param callback
     */
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to changes before a piston
 * expands or retracts.
 */
export class BeforePistonActivateEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     */
    cancel: boolean;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly piston: BlockPistonComponent;
}
/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before a piston is activated.
 */
export class BeforePistonActivateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a piston expands
     * or retracts.
     * @param callback
     */
    subscribe(callback: (arg: BeforePistonActivateEvent) => void): (arg: BeforePistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforePistonActivateEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 */
export class BeforeWatchdogTerminateEvent {
    protected constructor();
    /**
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     */
    cancel: boolean;
    /**
     * Contains the reason why a script runtime is to be
     * terminated.
     */
    readonly terminateReason: WatchdogTerminateReason;
}
/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 */
export class BeforeWatchdogTerminateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     * @param callback
     */
    subscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): (arg: BeforeWatchdogTerminateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BeforeWatchdogTerminateEvent) => void): void;
}
/**
 * @beta
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    protected constructor();
    /**
     * Returns the dimension that the block is within.
     */
    readonly dimension: Dimension;
    /**
     * Returns or sets whether this block has a liquid on it.
     */
    isWaterlogged: boolean;
    /**
     * Coordinates of the specified block.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * Additional block configuration data that describes the
     * block.
     * @throws This property can throw when used.
     */
    readonly permutation: BlockPermutation;
    /**
     * Gets the type of block.
     * @throws This property can throw when used.
     */
    readonly 'type': BlockType;
    /**
     * Identifier of the type of block for this block.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * X coordinate of the block.
     */
    readonly x: number;
    /**
     * Y coordinate of the block.
     */
    readonly y: number;
    /**
     * Z coordinate of the block.
     */
    readonly z: number;
    /**
     * @remarks
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
     */
    canPlace(blockToPlace: BlockPermutation | BlockType, faceToPlaceOn?: Direction): boolean;
    /**
     * @remarks
     * Gets additional configuration properties (a component) for
     * specific capabilities of particular blocks - for example, an
     * inventory component of a chest block.
     * @param componentName
     * Identifier of the component. If a namespace is not
     * specified, minecraft: is assumed.
     * @returns
     * Returns the component object if it is present on the
     * particular block.
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): any;
    /**
     * @remarks
     * Returns the net redstone power of this block.
     * @returns
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks
     * Returns a set of tags for a block.
     * @returns
     * The list of tags that the block has.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *
     *        console.log(`Block is dirt: ${block.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${block.hasTag("wood")}`);
     *        console.log(`Block is stone: ${block.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
    isAir(): boolean;
    isLiquid(): boolean;
    isSolid(): boolean;
    /**
     * @remarks
     * Sets the block in the dimension to the state of the
     * permutation.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @throws This function can throw errors.
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks
     * Sets the type of block.
     * @param blockType
     * Identifier of the type of block to apply - for example,
     * minecraft:powered_repeater.
     * @throws This function can throw errors.
     */
    setType(blockType: BlockType): void;
    /**
     * @remarks
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
     * Returns `true` if the block permutation data was
     * successfully set, else `false`.
     * @throws This function can throw errors.
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
}
/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * X size (west to east) component of this block area.
     */
    x: number;
    /**
     * Y size (down to up) of this block area size.
     */
    y: number;
    /**
     * Z size (south to north) of this block area size.
     */
    z: number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     * @param x
     * @param y
     * @param z
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     * @param other
     */
    equals(other: BlockAreaSize): boolean;
}
/**
 * @beta
 * Contains information regarding an event where a player
 * breaks a block.
 */
export class BlockBreakEvent extends BlockEvent {
    protected constructor();
    /**
     * Block broken in this event. Note that because this event
     * fires right after a block is broken, the block you will
     * receive will likely be of type 'minecraft:air'. See the
     * .brokenBlockPermutation property for information on this
     * block before it was broken.
     */
    readonly block: Block;
    /**
     * Returns permutation information about this block before it
     * was broken.
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * Dimension that contains the block that has been broken in
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Player that broke the block for this event.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to when a block is
 * broken.
 */
export class BlockBreakEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * broken.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockBreakEvent) => void): void;
}
/**
 * @beta
 * Base type for components associated with blocks.
 */
// tslint:disable-next-line:no-unnecessary-class
export class BlockComponent {
    protected constructor();
}
/**
 * @beta
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
export class BlockExplodeEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this explosion event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this explosion event.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     */
    subscribe(callback: (arg: BlockExplodeEvent) => void): (arg: BlockExplodeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockExplodeEvent) => void): void;
}
/**
 * @beta
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 */
export class BlockInventoryComponent extends BlockComponent {
    protected constructor();
    /**
     * The container which holds an {@link ItemStack}.
     * @throws This property can throw when used.
     */
    readonly container: BlockInventoryComponentContainer;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    static readonly componentId = 'minecraft:inventory';
}
/**
 * @beta
 * Represents the inventory of a {@link Block} in the world.
 * Used with blocks like chests.
 */
export class BlockInventoryComponentContainer extends Container {
    protected constructor();
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly emptySlotsCount: number;
    /**
     * Returns the size capacity of the inventory container on this
     * block.
     * @throws This property can throw when used.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Clears the entirety of the inventory of this block (i.e.,
     * chest)
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @remarks
     * Clears a specific item within the chest.
     * @param slot
     * @throws This function can throw errors.
     */
    clearItem(slot: number): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * ```typescript
     *        const itemStack = rightChestContainer.getItem(0);
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * ```
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Gets a container slot within the chest.
     * @param slot
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * ```typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap item in slot 1 of rightChestContainer with item in slot 0 of leftChestContainer
     *
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * ```typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * ```
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * lava.
 */
export class BlockLavaContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of lava within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lavaContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:lavaContainer.
     */
    static readonly componentId = 'minecraft:lavaContainer';
}
/**
 * @beta
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}). This type was introduced as of version 1.17.10.21.
 */
export class BlockPermutation {
    protected constructor();
    /**
     * The {@link BlockType} that the permutation has.
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * Creates a copy of this permutation.
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @remarks
     * Returns all available properties associated with this block.
     * @returns
     * Returns the list of all of the properties that the
     * permutation has.
     */
    getAllProperties(): IBlockProperty[];
    /**
     * @remarks
     * Gets a property for the permutation.
     * @param propertyName
     * @returns
     * Returns the property if the permutation has it, else `null`.
     * @throws This function can throw errors.
     */
    getProperty(propertyName: string): IBlockProperty;
    /**
     * @remarks
     * Creates a copy of the permutation.
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation has a specific tag.
     * @param tag
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     *        import { world } from "@minecraft/server";
     *
     *        // Fetch the block
     *        const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     *        const blockPerm = block.getPermutation();
     *
     *        console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     *        console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     *        console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     *
     * ```
     */
    hasTag(tag: string): boolean;
}
/**
 * @beta
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
export class BlockPistonComponent extends BlockComponent {
    protected constructor();
    /**
     * Whether the piston is fully expanded.
     * @throws This property can throw when used.
     */
    readonly isExpanded: boolean;
    /**
     * Whether the piston is in the process of expanding.
     * @throws This property can throw when used.
     */
    readonly isExpanding: boolean;
    /**
     * Whether the piston is in the process of expanding or
     * retracting.
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * Whether the piston is fully retracted.
     * @throws This property can throw when used.
     */
    readonly isRetracted: boolean;
    /**
     * Whether the piston is in the process of retracting.
     * @throws This property can throw when used.
     */
    readonly isRetracting: boolean;
    /**
     * Identifier of this component.
     */
    readonly typeId: string;
    /**
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:piston';
    getAttachedBlocks(): Vector3[];
}
/**
 * @beta
 * Contains information regarding an event where a player
 * places a block.
 */
export class BlockPlaceEvent extends BlockEvent {
    protected constructor();
    /**
     * Block placed in this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that has been placed in
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Player that placed the block for this event.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to when a block is
 * placed.
 */
export class BlockPlaceEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     * @param callback
     */
    subscribe(callback: (arg: BlockPlaceEvent) => void): (arg: BlockPlaceEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is
     * placed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: BlockPlaceEvent) => void): void;
}
/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 */
export class BlockPotionContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of potion liquid within this block. Valid
     * values are between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:potionContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:potionContainer.
     */
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     * @param item
     * Potion to use as the type of potion for this potion
     * container.
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
}
/**
 * @beta
 * Returns an enumeration of available block properties.
 */
// tslint:disable-next-line:no-unnecessary-class
export class BlockProperties {
    protected constructor();
    static readonly active = 'active';
    /**
     * Integer property that represents the age of the block. Valid
     * values are between 0 and 15 inclusive.
     */
    static readonly age = 'age';
    /**
     * Boolean property that determines if saplings should grow.
     */
    static readonly ageBit = 'age_bit';
    /**
     * Boolean property that determines if an explosion propagates
     * underwater.
     */
    static readonly allowUnderwaterBit = 'allow_underwater_bit';
    /**
     * Boolean property that determines if a tripwire is attached
     * to another tripwire.
     */
    static readonly attachedBit = 'attached_bit';
    /**
     * String property that represents the type of attachment used
     * by a bell or grindstone block. Valid values are 'standing',
     * 'hanging', 'side' and 'multiple'.
     */
    static readonly attachment = 'attachment';
    /**
     * String property that determines the thickness of a bamboo
     * stalk. Valid values are 'thin' and 'thick'.
     */
    static readonly bambooLeafSize = 'bamboo_leaf_size';
    /**
     * String property that determines the size of bamboo leaves.
     * Valid values are 'no_leaves', 'small_leaves', and
     * 'large_leaves'.
     */
    static readonly bambooStalkThickness = 'bamboo_stalk_thickness';
    static readonly bigDripleafHead = 'big_dripleaf_head';
    /**
     * String property that represents the tilt state of big
     * dripleaf block. Valid values are 'none', 'unstable',
     * 'partial_tilt' and 'full_tilt'.
     */
    static readonly bigDripleafTilt = 'big_dripleaf_tilt';
    /**
     * Integer property that tracks how many bites of cake have
     * been taken. Valid values are between 0 and 6 inclusive.
     */
    static readonly biteCounter = 'bite_counter';
    static readonly blockLightLevel = 'block_light_level';
    static readonly bloom = 'bloom';
    static readonly booksStored = 'books_stored';
    /**
     * Boolean property that determines if a bottle is shown in the
     * first slot of the brewing stand.
     */
    static readonly brewingStandSlotABit = 'brewing_stand_slot_a_bit';
    /**
     * Boolean property that determines if a bottle is shown in the
     * second slot of the brewing stand.
     */
    static readonly brewingStandSlotBBit = 'brewing_stand_slot_b_bit';
    /**
     * Boolean property that determines if a bottle is shown in the
     * third slot of the brewing stand.
     */
    static readonly brewingStandSlotCBit = 'brewing_stand_slot_c_bit';
    /**
     * Boolean property that determines if a button is in a pressed
     * state or not.
     */
    static readonly buttonPressedBit = 'button_pressed_bit';
    /**
     * Integer property that describes how many extra candles are
     * in the same block space. Valid values are between 0 and 3
     * inclusive.
     */
    static readonly candles = 'candles';
    static readonly canSummon = 'can_summon';
    /**
     * String property that represents the type of liquid in a
     * cauldron. Valid values are 'water', 'powder_snow', and
     * 'lava'.
     */
    static readonly cauldronLiquid = 'cauldron_liquid';
    /**
     * String property that represents the type of work benches
     * that are within Minecraft Education experiences. Valid
     * values are 'compound_creator', 'material_reducer',
     * 'element_constructor' and 'lab_table'.
     */
    static readonly chemistryTableType = 'chemistry_table_type';
    /**
     * String property determines the pattern of quartz and purpur
     * blocks. Valid values are 'default', 'chiseled', 'lines',
     * 'smooth'.
     */
    static readonly chiselType = 'chisel_type';
    /**
     * Integer property that describes how many sea pickles are in
     * a cluster. Valid values are between 0 and 3 inclusive.
     */
    static readonly clusterCount = 'cluster_count';
    /**
     * String property that represents the color of a block, like
     * wool. Valid values are 'white', 'orange', 'magenta',
     * 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver',
     * 'cyan', 'purple', 'blue', 'brown', 'green', 'red' and
     * 'black'.
     */
    static readonly color = 'color';
    /**
     * Boolean property that determines if a torch has a particular
     * color.
     */
    static readonly colorBit = 'color_bit';
    static readonly composterFillLevel = 'composter_fill_level';
    /**
     * Boolean property that determines if a command block is
     * conditional or not.
     */
    static readonly conditionalBit = 'conditional_bit';
    /**
     * String property that represents the color of a coral block.
     * Valid values are 'blue', 'pink', 'purple', 'red', 'yellow',
     * 'blue dead', 'pink dead', 'red dead', and 'yellow dead'.
     */
    static readonly coralColor = 'coral_color';
    /**
     * Integer property that describes the rotation of coral fans.
     * Valid values are between 0 and 3 inclusive.
     */
    static readonly coralDirection = 'coral_direction';
    static readonly coralFanDirection = 'coral_fan_direction';
    /**
     * Boolean property that represents the type of hanging for
     * coral fan.
     */
    static readonly coralHangTypeBit = 'coral_hang_type_bit';
    /**
     * Boolean property that describes if a top snow block is
     * covering another block.
     */
    static readonly coveredBit = 'covered_bit';
    /**
     * String property that determines the cracked state of turtle
     * eggs. Valid values are 'no_cracks', 'cracked', and
     * 'max_cracked'.
     */
    static readonly crackedState = 'cracked_state';
    /**
     * String property that determines the damage state of an
     * anvil. Valid values are 'undamaged', 'slightly_damaged',
     * 'very_damaged', and 'broken'
     */
    static readonly damage = 'damage';
    /**
     * Boolean property that determines if coral, coral fans, or
     * sea pickles are dead.
     */
    static readonly deadBit = 'dead_bit';
    static readonly deprecated = 'deprecated';
    /**
     * Integer property determines the north, south, east, or west
     * direction of a block. Valid values include are south = 0,
     * west = 1, north = 2, east = 3.
     */
    static readonly direction = 'direction';
    /**
     * String property that determines the dirt type of a block.
     * Valid values are 'normal' and 'coarse'.
     */
    static readonly dirtType = 'dirt_type';
    /**
     * Boolean property that determines if a tripwire is disarmed
     * or not.
     */
    static readonly disarmedBit = 'disarmed_bit';
    /**
     * Boolean property that determines if a door's hinge is
     * mirrored or not.
     */
    static readonly doorHingeBit = 'door_hinge_bit';
    /**
     * String property that represents the type of a double plant
     * block. Valid values are 'sunflower', 'syringa', 'grass',
     * 'fern', 'rose', and 'paeonia'.
     */
    static readonly doublePlantType = 'double_plant_type';
    /**
     * Boolean property that describes if bubble columns drag
     * entities down or push them up.
     */
    static readonly dragDown = 'drag_down';
    /**
     * String property that represents the type of a pointed
     * dripstone block. Valid values are 'tip', 'frustum', 'base',
     * 'middle' and 'merge'.
     */
    static readonly dripstoneThickness = 'dripstone_thickness';
    /**
     * Boolean property that determines if an end portal block has
     * an Eye of Ender in it.
     */
    static readonly endPortalEyeBit = 'end_portal_eye_bit';
    /**
     * Boolean property that determines if a TNT block should start
     * its explode sequence.
     */
    static readonly explodeBit = 'explode_bit';
    static readonly extinguished = 'extinguished';
    /**
     * Integer property that determines the facing direction of
     * some types of blocks. Valid values include down = 0, up = 1,
     * north = 2, south = 3, west = 4, east = 5.
     */
    static readonly facingDirection = 'facing_direction';
    /**
     * Integer property that determines the fill level of a
     * cauldron block. Valid values are between 0 and 6 inclusive.
     */
    static readonly fillLevel = 'fill_level';
    /**
     * String property that represents the type of flow. Valid
     * values are 'poppy', 'orchid', 'allium', 'houstonia',
     * 'tulip_red', 'tulip_orange', 'tulip_white', 'tulip_pink',
     * 'oxeye', 'cornflower' and 'lily_of_the_valley'.
     */
    static readonly flowerType = 'flower_type';
    /**
     * Integer property that represents the rotation of signs and
     * standing banners. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly groundSignDirection = 'ground_sign_direction';
    static readonly growingPlantAge = 'growing_plant_age';
    /**
     * Integer property that determines the growth level of crops.
     * Valid values are between 0 and 7 inclusive.
     */
    static readonly growth = 'growth';
    /**
     * Boolean property that represents if a lantern block is
     * hanging or not.
     */
    static readonly hanging = 'hanging';
    /**
     * Boolean property that determines if a block is the pillow
     * side of a bed.
     */
    static readonly headPieceBit = 'head_piece_bit';
    /**
     * Integer property that determines the height of a top snow
     * block. Valid values are between 0 and 7 inclusive.
     */
    static readonly height = 'height';
    static readonly honeyLevel = 'honey_level';
    /**
     * Integer property that determines which huge mushroom block
     * should be displayed. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly hugeMushroomBits = 'huge_mushroom_bits';
    /**
     * Boolean property that determines if a block should burn
     * infinitely.
     */
    static readonly infiniburnBit = 'infiniburn_bit';
    /**
     * Boolean property that determines if a fence block is
     * connected to a wall block.
     */
    static readonly inWallBit = 'in_wall_bit';
    /**
     * Boolean property that describes if an item frame block has a
     * map in it.
     */
    static readonly itemFrameMapBit = 'item_frame_map_bit';
    static readonly itemFramePhotoBit = 'item_frame_photo_bit';
    static readonly kelpAge = 'kelp_age';
    static readonly leverDirection = 'lever_direction';
    /**
     * Integer property that represents the level of liquid blocks.
     * Valid values are between 0 and 15 inclusive.
     */
    static readonly liquidDepth = 'liquid_depth';
    /**
     * Boolean property that determines if a block is lit or not.
     */
    static readonly lit = 'lit';
    /**
     * Integer property that represents the moisture level of crop.
     * Valid values are between 0 and 7 inclusive.
     */
    static readonly moisturizedAmount = 'moisturized_amount';
    /**
     * String property that represents the stone type of an
     * Infested Stone block. Valid values are 'stone',
     * 'cobblestone', 'stone_brick', 'mossy_stone_brick',
     * 'cracked_stone_brick' and 'chiseled_stone_brick'.
     */
    static readonly monsterEggStoneType = 'monster_egg_stone_type';
    static readonly multiFaceDirectionBits = 'multi_face_direction_bits';
    /**
     * String property that represents the leaf type of some block
     * types. Valid values are 'acacia' and 'dark_oak'.
     */
    static readonly newLeafType = 'new_leaf_type';
    /**
     * String property that represents the wood type of certain
     * types of blocks. Valid values are 'acacia' and 'dark_oak'.
     */
    static readonly newLogType = 'new_log_type';
    /**
     * Boolean property that determines if a skull block should
     * drop loot.
     */
    static readonly noDropBit = 'no_drop_bit';
    /**
     * Boolean property that determines if a bed block is occupied.
     */
    static readonly occupiedBit = 'occupied_bit';
    /**
     * String property that represents the leaf type of some block
     * types. Valid values are 'oak', 'spruce', 'birch', and
     * 'jungle'.
     */
    static readonly oldLeafType = 'old_leaf_type';
    /**
     * String property that determines the wood type of certain
     * types of blocks. Valid values are 'oak', 'spruce', 'birch'
     * and 'jungle'.
     */
    static readonly oldLogType = 'old_log_type';
    /**
     * Boolean property that determines if a door, gate, or
     * trapdoor is open.
     */
    static readonly openBit = 'open_bit';
    /**
     * Boolean property that determines if a comparator's output is
     * lit.
     */
    static readonly outputLitBit = 'output_lit_bit';
    /**
     * Boolean property that determines if a comparator is set to
     * subtract output.
     */
    static readonly outputSubtractBit = 'output_subtract_bit';
    /**
     * Boolean property that determines if a leaf block is
     * persistent.
     */
    static readonly persistentBit = 'persistent_bit';
    static readonly pillarAxis = 'pillar_axis';
    /**
     * String property that determines the orientation of portal
     * blocks. Valid values include 'unknown', 'x', and 'z'.
     */
    static readonly portalAxis = 'portal_axis';
    /**
     * Boolean property that is true when an observer or tripwire
     * sends a redstone signal.
     */
    static readonly poweredBit = 'powered_bit';
    static readonly prismarineBlockType = 'prismarine_block_type';
    static readonly propaguleStage = 'propagule_stage';
    /**
     * Boolean property that returns true if a rail has a redstone
     * signal.
     */
    static readonly railDataBit = 'rail_data_bit';
    /**
     * Integer property determines the orientation of a placed rail
     * block. Valid values are between 0 and 8 inclusive.
     */
    static readonly railDirection = 'rail_direction';
    /**
     * Integer property that determines the signal strength of a
     * redstone signal. Valid values are between 0 and 15
     * inclusive.
     */
    static readonly redstoneSignal = 'redstone_signal';
    /**
     * Integer property that represents the amount of delay of a
     * repeater. Valid values are between 0 and 3 inclusive.
     */
    static readonly repeaterDelay = 'repeater_delay';
    static readonly respawnAnchorCharge = 'respawn_anchor_charge';
    static readonly rotation = 'rotation';
    /**
     * String property that represents the pattern of a sandstone
     * block. Valid values are 'default', 'heiroglyphs', 'cut', and
     * 'smooth'.
     */
    static readonly sandStoneType = 'sand_stone_type';
    /**
     * String property that represents the sand type of a block.
     * Valid values are 'normal' and 'red'.
     */
    static readonly sandType = 'sand_type';
    /**
     * String property that determines the type of the sapling
     * block. Valid values are 'evergreen', 'birch', 'jungle',
     * 'acacia', and 'roofed_oak'.
     */
    static readonly saplingType = 'sapling_type';
    /**
     * String property that determines the type of a sea grass
     * block. Valid values are 'default', 'double_top' and
     * 'double_bot'.
     */
    static readonly seaGrassType = 'sea_grass_type';
    /**
     * String property that represents the type of a sponge block.
     * Valid values are 'dry' and 'wet'.
     */
    static readonly spongeType = 'sponge_type';
    /**
     * Integer property that determines the stability of a
     * scaffolding block. Valid values are between 0 and 5
     * inclusive.
     */
    static readonly stability = 'stability';
    /**
     * Boolean property that describes if a scaffolding block has
     * been checked for stability.
     */
    static readonly stabilityCheck = 'stability_check';
    /**
     * String property that determines the type of a stone brick
     * block. Valid values are 'default', 'mossy', 'cracked',
     * 'chiseled' and 'smooth'.
     */
    static readonly stoneBrickType = 'stone_brick_type';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'smooth_stone',
     * 'sandstone', 'wood', 'cobblestone', 'brick', 'stone_brick',
     * 'quartz' and 'nether_brick'.
     */
    static readonly stoneSlabType = 'stone_slab_type';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'red_sandstone',
     * 'purpur', 'prismarine_rough', 'prismarine_dark',
     * 'prismarine_brick', 'mossy_cobblestone', 'smooth_sandstone'
     * and 'red_nether_brick'.
     */
    static readonly stoneSlabType2 = 'stone_slab_type_2';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'end_stone_brick',
     * 'smooth_red_sandstone', 'polished_andesite', 'andesite',
     * 'diorite', 'polished_diorite', 'granite', and
     * 'polished_granite'.
     */
    static readonly stoneSlabType3 = 'stone_slab_type_3';
    /**
     * String property that represents the type of certain types of
     * stone slab blocks. Valid values are 'mossy_stone_brick',
     * 'smooth_quartz', 'stone', 'cut_sandstone', and
     * 'cut_red_sandstone'.
     */
    static readonly stoneSlabType4 = 'stone_slab_type_4';
    /**
     * String property that determines the type of a stone block.
     * Valid values are 'stone', 'granite', 'granite_smooth',
     * 'diorite', 'diorite_smooth', 'andesite', and
     * 'andesite_smooth'.
     */
    static readonly stoneType = 'stone_type';
    /**
     * Boolean property that represents if a wood log has been
     * stripped of bark.
     */
    static readonly strippedBit = 'stripped_bit';
    /**
     * String property that represents the state of a structure
     * block. Valid values are 'data', 'save', 'load', 'corner',
     * 'invalid' and 'export'.
     */
    static readonly structureBlockType = 'structure_block_type';
    /**
     * String property that determines which void mode to draw for
     * structure blocks. Valid values are 'void' and 'air'.
     */
    static readonly structureVoidType = 'structure_void_type';
    /**
     * Boolean property that indicates if a tripwire block is
     * suspended.
     */
    static readonly suspendedBit = 'suspended_bit';
    /**
     * String property that represents the type of a tall grass
     * block. Valid values are 'default', 'tall', 'fern', and
     * 'snow'.
     */
    static readonly tallGrassType = 'tall_grass_type';
    /**
     * Boolean property that determines if a hopper block is active
     * or not.
     */
    static readonly toggleBit = 'toggle_bit';
    /**
     * Boolean property that determines if a slab is the top half
     * of the block or not
     */
    static readonly topSlotBit = 'top_slot_bit';
    /**
     * String property that determines the direction of a torch in
     * relation to the block it is attached to. Valid values are
     * 'unknown', 'west', 'east', 'north', 'south', 'top'.
     */
    static readonly torchFacingDirection = 'torch_facing_direction';
    /**
     * Boolean property that determines if a dispenser is
     * triggered.
     */
    static readonly triggeredBit = 'triggered_bit';
    /**
     * String property that represents the amount of turtle eggs in
     * an egg block. Valid values are 'one_egg', 'two_egg',
     * 'three_egg' and 'four_egg'.
     */
    static readonly turtleEggCount = 'turtle_egg_count';
    static readonly twistingVinesAge = 'twisting_vines_age';
    /**
     * Boolean property that determines if a leaf block or flower
     * block should be updated.
     */
    static readonly updateBit = 'update_bit';
    /**
     * Boolean property that determines if a block is the upper
     * half of an object like a door or a tall plant.
     */
    static readonly upperBlockBit = 'upper_block_bit';
    /**
     * Boolean property that determines if a stair block or
     * trapdoor block is upside-down.
     */
    static readonly upsideDownBit = 'upside_down_bit';
    /**
     * Integer property that represents the facing direction for
     * vines. Valid values are between 0 and 15 inclusive.
     */
    static readonly vineDirectionBits = 'vine_direction_bits';
    /**
     * String property that represents the type of stone used in a
     * wall block. Valid values are 'cobblestone',
     * 'mossy_cobblestone', 'granite', 'diorite', 'andesite',
     * 'sandstone', 'brick', 'stone_brick', 'mossy_stone_brick',
     * 'nether_brick', 'end_brick', 'prismarine', 'red_sandstone'
     * and 'red_nether_brick'.
     */
    static readonly wallBlockType = 'wall_block_type';
    /**
     * String property that determines what kind of connection a
     * wall has to the east. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly wallConnectionTypeEast = 'wall_connection_type_east';
    /**
     * String property that determines what kind of connection a
     * wall has to the north. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly wallConnectionTypeNorth = 'wall_connection_type_north';
    /**
     * String property that determines what kind of connection a
     * wall has to the south. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly wallConnectionTypeSouth = 'wall_connection_type_south';
    /**
     * String property that determines what kind of connection a
     * wall has to the west. Valid values are 'none', 'short' and
     * 'tall'.
     */
    static readonly wallConnectionTypeWest = 'wall_connection_type_west';
    /**
     * Boolean property that determines if a wall should contain a
     * post.
     */
    static readonly wallPostBit = 'wall_post_bit';
    static readonly weepingVinesAge = 'weeping_vines_age';
    /**
     * Integer property that represents the rotation of stairs.
     * Valid values are between 0 and 3 inclusive.
     */
    static readonly weirdoDirection = 'weirdo_direction';
    /**
     * String property that determines the wood type of a block.
     * Valid values are 'oak', 'spruce', 'birch', 'jungle',
     * 'acacia', and 'dark_oak'.
     */
    static readonly woodType = 'wood_type';
}
/**
 * @beta
 * Represents a block that can play a record.
 */
export class BlockRecordPlayerComponent extends BlockComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:recordPlayer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:recordPlayer.
     */
    static readonly componentId = 'minecraft:recordPlayer';
    /**
     * @remarks
     * Clears the currently playing record of this record-playing
     * block.
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     * @param recordItemType
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
}
/**
 * @beta
 * Represents a block that can display text on it.
 */
export class BlockSignComponent extends BlockComponent {
    protected constructor();
    /**
     * Text of the sign
     * @throws This property can throw when used.
     */
    readonly text: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:sign.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:sign.
     */
    static readonly componentId = 'minecraft:sign';
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * snow.
 */
export class BlockSnowContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of snow within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:snowContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:snowContainer.
     */
    static readonly componentId = 'minecraft:snowContainer';
}
/**
 * @beta
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    protected constructor();
    /**
     * Represents whether this type of block can be waterlogged.
     */
    readonly canBeWaterlogged: boolean;
    /**
     * Block type name - for example, `minecraft:acacia_stairs`.
     */
    readonly id: string;
    /**
     * @remarks
     * Creates the default {@link BlockPermutation} for this type
     * which uses the default values for all properties.
     * @returns
     * Returns created permutation.
     * @throws This function can throw errors.
     */
    createDefaultBlockPermutation(): BlockPermutation;
}
/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 */
export class BlockWaterContainerComponent extends BlockComponent {
    protected constructor();
    /**
     * Relative level of water within this block. Valid values are
     * between FluidContainer.minFillLevel (0) and
     * FluidContainer.maxFillLevel (6).
     */
    fillLevel: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:waterContainer.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:waterContainer.
     */
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     * @param itemType
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    getCustomColor(): Color;
    setCustomColor(color: Color): void;
}
/**
 * @beta
 * Contains the state of a boolean-based property for a {@link
 * BlockPermutation}.
 */
export class BoolBlockProperty extends IBlockProperty {
    protected constructor();
    /**
     * The name of this property.
     */
    readonly name: string;
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use {@link
     * @minecraft/server.BoolBlockProperty.validValues} to check
     * allowed values.
     */
    value: boolean;
    getValidValues(): boolean[];
}
/**
 * @beta
 * Contains information related to changes to a button push.
 */
export class ButtonPushEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * Optional source that triggered the button push.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when a button is
 * pushed.
 */
export class ButtonPushEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a button is pushed.
     * @param callback
     */
    subscribe(callback: (arg: ButtonPushEvent) => void): (arg: ButtonPushEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a button is
     * pushed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ButtonPushEvent) => void): void;
}
/**
 * @beta
 * An event that fires as players enter chat messages.
 */
export class ChatEvent {
    protected constructor();
    /**
     * Message that is being broadcast. In a beforeChat event
     * handler, _message_ can be updated with edits before the
     * message is displayed to players.
     */
    message: string;
    /**
     * Player that sent the chat message.
     */
    sender: Player;
    /**
     * If true, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     */
    sendToTargets: boolean;
    getTargets(): Player[];
}
/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     * @param callback
     * @example custom_command.js
     * ```typescript
     *        const chatCallback = World.events.beforeChat.subscribe((eventData) => {
     *          if (eventData.message.includes("cancel")) {
     *            // Cancel event if the message contains "cancel"
     *            eventData.canceled = true;
     *          } else {
     *            // Modify chat message being sent
     *            eventData.message = `Modified '${eventData.message}'`;
     *          }
     *        });
     *
     * ```
     */
    subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ChatEvent) => void): void;
}
/**
 * Contains return data on the result of a command execution.
 */
export class CommandResult {
    protected constructor();
    /**
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     */
    readonly successCount: number;
}
/**
 * @beta
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 */
export class Container {
    protected constructor();
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly emptySlotsCount: number;
    /**
     * Represents the size of the container. For example, a
     * standard single-block chest has a size of 27, for the 27
     * slots in their inventory.
     * @throws This property can throw when used.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Clears all inventory items in the container.
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @remarks
     * Clears a specific item at a slot within the container.
     * @param slot
     * @throws This function can throw errors.
     */
    clearItem(slot: number): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * ```typescript
     *        const rightInventoryComp = rightChestCart.getComponent("inventory");
     *        const rightChestContainer = rightInventoryComp.container;
     *
     *        const itemStack = rightChestContainer.getItem(0);
     *
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * ```
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Returns a container slot item holder within the container.
     * @param slot
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * ```typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
     *
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * ```typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * ```
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 */
export class ContainerSlot {
    protected constructor();
    /**
     * Amount of the specified item within the container slot.
     */
    amount: number;
    /**
     * Modifier value for the item type stored within the slot.
     */
    data: number;
    readonly isStackable: boolean;
    /**
     * If true, the state of this container slot is still valid
     * (e.g., the underlying block or entity for this container
     * slot still exists.)
     */
    readonly isValid: boolean;
    keepOnDeath: boolean;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    /**
     * Returns a name tag for the container slot.
     */
    nameTag?: string;
    readonly 'type': ItemType;
    /**
     * Returns a string identifier of the type if item stored in
     * this slot.
     * @throws This property can throw when used.
     */
    readonly typeId?: string;
    clone(): ItemStack;
    /**
     * @remarks
     * Returns the item stored within the container.
     * @throws This function can throw errors.
     */
    getItem(): ItemStack;
    /**
     * @remarks
     * Returns the lore value for the item stored within this
     * container slot.
     * @throws This function can throw errors.
     */
    getLore(): string[];
    isStackableWith(itemStack: ItemStack): boolean;
    setCanDestroy(blockIdentifiers?: string[]): void;
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the item within the slot to a new value.
     * @param itemStack
     * The item stack to set within this container slot.
     * @throws This function can throw errors.
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore string for the item at the specified slot.
     * @param loreList
     * An array of strings for lines of text for this lore.
     * @throws This function can throw errors.
     */
    setLore(loreList?: string[]): void;
}
/**
 * @beta
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 */
export class DataDrivenEntityTriggerEvent {
    protected constructor();
    /**
     * Entity that the event triggered on.
     */
    readonly entity: Entity;
    /**
     * Name of the data driven event being triggered.
     */
    readonly id: string;
    getModifiers(): DefinitionModifier[];
}
/**
 * @beta
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}
/**
 * @beta
 * Contains a set of updates to the component definition state
 * of an entity.
 */
export class DefinitionModifier {
    getComponentGroupsToAdd(): string[];
    getComponentGroupsToRemove(): string[];
    getTriggers(): Trigger[];
    setComponentGroupsToAdd(newGroups: string[]): void;
    setComponentGroupsToRemove(removedGroups: string[]): void;
    setTriggers(newTriggers: Trigger[]): void;
}
/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 */
export class Dimension {
    protected constructor();
    /**
     * Identifier of the dimension.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Creates an explosion at the specified location.
     * @param location
     * The location of the explosion.
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * @throws This function can throw errors.
     * @example createExplosion.ts
     * ```typescript
     *          overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
     * ```
     * @example createFireAndWaterExplosions.ts
     * ```typescript
     *        const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };
     *
     *        const fireExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode with fire
     *        fireExplosionOptions.causesFire = true;
     *
     *        overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
     *        const waterExplosionOptions = new mc.ExplosionOptions();
     *
     *        // Explode in water
     *        waterExplosionOptions.allowUnderwater = true;
     *
     *        const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };
     *
     *        overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
     *
     * ```
     * @example createNoBlockExplosion.ts
     * ```typescript
     *        const explosionOptions = new mc.ExplosionOptions();
     *
     *        // Start by exploding without breaking blocks
     *        explosionOptions.breaksBlocks = false;
     *
     *        const explodeNoBlocksLoc: mc.Vector3 = {
     *          x: Math.floor(targetLocation.x + 1),
     *          y: Math.floor(targetLocation.y + 2),
     *          z: Math.floor(targetLocation.z + 1),
     *        };
     *
     *        overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
     *
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void;
    fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType, options?: BlockFillOptions): number;
    /**
     * @beta
     * @remarks
     * Returns a block instance at the given location. This method
     * was introduced as of version 1.17.10.21.
     * @param location
     * The location at which to return a block.
     * @returns
     * Block at the specified location.
     * @throws This function can throw errors.
     */
    getBlock(location: Vector3): Block;
    /**
     * @beta
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getEntities
     * @returns
     * An entity iterator that can be used to loop over the
     * returned entities.
     * @throws This function can throw errors.
     * @example testThatEntityIsFeatherItem.ts
     * ```typescript
     *        const query = {
     *          type: "item",
     *          location: targetLocation,
     *        };
     *        const items = overworld.getEntities(query);
     *
     *        for (const item of items) {
     *          const itemComp = item.getComponent("item") as any;
     *
     *          if (itemComp) {
     *            if (itemComp.itemStack.id.endsWith("feather")) {
     *              console.log("Success! Found a feather", 1);
     *            }
     *          }
     *        }
     *
     * ```
     */
    getEntities(getEntities?: EntityQueryOptions): EntityIterator;
    /**
     * @beta
     * @remarks
     * Returns a set of entities at a particular location.
     * @param location
     * The location at which to return entities.
     * @returns
     * Zero or more entities at the specified location.
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @beta
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     * @param location
     * @param direction
     * @param options
     * Additional options for processing this raycast query.
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): Entity[];
    /**
     * @beta
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * @param getPlayers
     * @returns
     * An entity iterator that can be used to loop over the
     * returned players.
     * @throws This function can throw errors.
     */
    getPlayers(getPlayers?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * @param location
     * The location at which to create the entity.
     * @returns
     * Newly created entity at the specified location.
     * @throws This function can throw errors.
     * @example createOldHorse.ts
     * ```typescript
     *          // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult
     *          overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     * ```
     * @example trapTick.ts
     * ```typescript
     *          let ticks = 0;
     *
     *          mc.world.events.tick.subscribe((event: mc.TickEvent) => {
     *            ticks++;
     *
     *            // Minecraft runs at 20 ticks per second
     *            if (ticks % 1200 === 0) {
     *              overworld.runCommand("say Another minute passes...");
     *            }
     *          });
     * ```
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     * @param item
     * @param location
     * The location at which to create the item stack.
     * @returns
     * Newly created item stack entity at the specified location.
     * @throws This function can throw errors.
     * @example itemStacks.ts
     * ```typescript
     *        const oneItemLoc: mc.Vector3 = { x: 3, y: 2, z: 1 };
     *        const fiveItemsLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const diamondPickaxeLoc: mc.Vector3 = { x: 2, y: 2, z: 4 };
     *
     *        const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
     *        const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
     *        const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
     *
     *        overworld.spawnItem(oneEmerald, oneItemLoc);
     *        overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
     *        overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
     *
     * ```
     * @example spawnItem.ts
     * ```typescript
     *          const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);
     *
     *          overworld.spawnItem(featherItem, targetLocation);
     *          log("New feather created!");
     * ```
     */
    spawnItem(item: ItemStack, location: Vector3): Entity;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     * @param effectName
     * Identifier of the particle to create.
     * @param location
     * The location at which to create the particle emitter.
     * @param molangVariables
     * A set of additional, customizable variables that can be
     * adjusted for this particle emitter.
     * @returns
     * Newly created entity at the specified location.
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables: MolangVariableMap): void;
}
/**
 * @beta
 * For block properties that take a direction, provides a
 * structured way to specify the direction of a block property.
 */
export class DirectionBlockProperty extends IBlockProperty {
    protected constructor();
    /**
     * Name of the property.
     */
    readonly name: string;
    /**
     * Value of the block property.
     */
    value: Direction;
    getValidValues(): Direction[];
}
/**
 * @beta
 * 此类型用于定义一系列动态属性。能够与 {@link PropertyRegistry} 结合使用，在实体或世界上定义动态属性。一个 “{@link PropertyRegistry} 对象” 可从 {@link WorldInitializeEvent.propertyRegistry} 获取。
 *
 * Class used in conjunction with {@link PropertyRegistry} to
 * define dynamic properties that can be used on entities of a
 * specified type or at the global World- level.
 */
export class DynamicPropertiesDefinition {
    /**
     * @remarks
     * 定义布尔类型的动态属性。
     *
     * Defines a new boolean dynamic property.
     * @param identifier 将要增加的动态属性所使用的标识符。
     * @throws
     * 若此对象中已经增加了与 `identifier` 拥有相同标识符的动态属性，抛出 `"A dynamic property with identifier '<identifier>' has already been defined"`。
     */
    defineBoolean(identifier: string): void;
    /**
     * @remarks
     * 定义数字类型的动态属性。
     *
     * Defines a new number dynamic property.
     * @param identifier 将要增加的动态属性所使用的标识符。
     * @throws
     * 若此对象中已经增加了与 `identifier` 拥有相同标识符的动态属性，抛出 `"A dynamic property with identifier '<identifier>' has already been defined"`。
     */
    defineNumber(identifier: string): void;
    /**
     * @remarks
     * 定义字符串类型的动态属性。
     *
     * 注册字符串类型的动态属性时，对属性的值最大长度 `maxLength` 有着如下限制：
     *
     * 在实体类型上的限制是这样计算的：设 “属性的标识符编码为 UTF-8 后的字节长度” 为 `a`，允许使用的最大长度为 `allocateMaxLength = 998 - a`。
     *
     * 在世界中的限制是这样计算的：设 “属性的标识符编码为 UTF-8 后的字节长度” 为 `a`，则允许使用的最大长度为 `allocateMaxLength = 9998 - a`。
     *
     * Defines a new string dynamic property.
     * @param identifier 将要增加的动态属性所使用的标识符。
     * @param maxLength 字符串在编码为 UTF-8 后允许的最大字节长度（需要验证）。
     * @throws
     * 若此对象中已经增加了与 `identifier` 拥有相同标识符的动态属性，抛出 `"A dynamic property with identifier '<identifier>' has already been defined"`。
     */
    defineString(identifier: string, maxLength: number): void;
}
/**
 * @beta
 * Represents an effect - like poison - that has been added to
 * an Entity.
 */
export class Effect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * Gets the player-friendly name of this effect.
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * Gets the entire specified duration, in ticks, of this
     * effect.
     * @throws This property can throw when used.
     */
    readonly duration: number;
}
/**
 * @beta
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddEvent {
    protected constructor();
    /**
     * Additional properties and details of the effect.
     */
    effect: Effect;
    /**
     * Additional variant number for the effect.
     */
    effectState: number;
    /**
     * Entity that the effect is being added to.
     */
    entity: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EffectAddEvent) => void, options?: EntityEventOptions): (arg: EffectAddEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EffectAddEvent) => void): void;
}
/**
 * @beta
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
    protected constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     * @returns
     * Identifier of the effect type.
     */
    getName(): string;
}
/**
 * @beta
 * This class represents a specific leveled enchantment that is
 * applied to an item.
 */
export class Enchantment {
    /**
     * The level of this enchantment instance.
     */
    level: number;
    /**
     * The enchantment type of this instance.
     */
    readonly 'type': EnchantmentType;
    /**
     * @remarks
     * Creates a new particular type of enchantment configuration.
     * @param enchantmentType
     * Type of the enchantment.
     * @param level
     * Level of the enchantment.
     */
    constructor(enchantmentType: EnchantmentType, level?: number);
}
/**
 * @beta
 * This class represents a collection of enchantments that can
 * be applied to an item.
 */
export class EnchantmentList implements Iterable<Enchantment> {
    /**
     * The item slot/type that this collection is applied to.
     */
    readonly slot: number;
    constructor(enchantmentSlot: number);
    [Symbol.iterator](): Iterator<Enchantment>;
    /**
     * @remarks
     * Attempts to add the enchantment to this collection. Returns
     * true if successful.
     * @param enchantment
     */
    addEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns whether or not the provided EnchantmentInstance can
     * be added to this collection.
     * @param enchantment
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * Returns an enchantment associated with a type.
     * @param enchantmentType
     */
    getEnchantment(enchantmentType: EnchantmentType): Enchantment;
    /**
     * @remarks
     * If this collection has an EnchantmentInstance with type,
     * returns the level of the enchantment. Returns 0 if not
     * present.
     * @param enchantmentType
     */
    hasEnchantment(enchantmentType: EnchantmentType): number;
    next(): IteratorResult<Enchantment>;
    /**
     * @remarks
     * Removes an EnchantmentInstance with type from this
     * collection if present.
     * @param enchantmentType
     */
    removeEnchantment(enchantmentType: EnchantmentType): void;
}
/**
 * @beta
 * This enum represents the item slot or type that an
 * enchantment can be applied to.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EnchantmentSlot {
    protected constructor();
    static readonly all = -1;
    static readonly armorFeet = 4;
    static readonly armorHead = 1;
    static readonly armorLegs = 8;
    static readonly armorTorso = 2;
    static readonly axe = 512;
    static readonly bow = 32;
    static readonly carrotStick = 8192;
    static readonly cosmeticHead = 262144;
    static readonly crossbow = 65536;
    static readonly elytra = 16384;
    static readonly fishingRod = 4096;
    static readonly flintsteel = 256;
    static readonly gArmor = 15;
    static readonly gDigging = 3648;
    static readonly gTool = 131520;
    static readonly hoe = 64;
    static readonly none = 0;
    static readonly pickaxe = 1024;
    static readonly shears = 128;
    static readonly shield = 131072;
    static readonly shovel = 2048;
    static readonly spear = 32768;
    static readonly sword = 16;
}
/**
 * @beta
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
    protected constructor();
    /**
     * The name of the enchantment type.
     */
    readonly id: string;
    /**
     * The maximum level this type of enchantment can have.
     */
    readonly maxLevel: number;
}
/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 */
export class Entity {
    protected constructor();
    /**
     * @beta
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     */
    isSneaking: boolean;
    /**
     * @beta
     * Current location of the entity.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @beta
     * Given name of the entity.
     */
    nameTag: string;
    /**
     * @beta
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly scoreboard: ScoreboardIdentity;
    /**
     * @beta
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking.
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:skeleton'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    /**
     * @beta
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     * @example addEffect.js
     * ```typescript
     *        const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
     *        const villagerLoc: mc.Vector3 = { x: 1, y: 2, z: 1 };
     *        const villager = test.spawn(villagerId, villagerLoc);
     *        const duration = 20;
     *
     *        villager.addEffect(MinecraftEffectTypes.poison, duration, 1);
     *
     *
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     *        const fox = overworld.spawnEntity("minecraft:fox", {
     *          x: targetLocation.x + 1,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
     *        log("Created a fox.");
     *
     *        const wolf = overworld.spawnEntity("minecraft:wolf", {
     *          x: targetLocation.x + 4,
     *          y: targetLocation.y + 2,
     *          z: targetLocation.z + 3,
     *        });
     *        wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
     *        wolf.isSneaking = true;
     *        log("Created a sneaking wolf.", 1);
     *
     *
     * ```
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    applyDamage(amount: number, source?: EntityDamageSource): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearVelocity(): void;
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Returns a potential set of entities from the direction that
     * this entity is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    getHeadLocation(): Vector3;
    getRotation(): XYRotation;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     * @param identifier
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param xRotation
     * X rotation of the entity after teleportation.
     * @param yRotation
     * Y rotation of the entity after teleportation.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected entity to a new location, and will
     * have the entity facing a specified location.
     * @param location
     * New location for the entity.
     * @param dimension
     * Dimension to move the selected entity to.
     * @param facingLocation
     * Location that this entity will be facing.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}
/**
 * @beta
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 */
export class EntityAddRiderComponent extends IEntityComponent {
    protected constructor();
    /**
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:addrider.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:addrider.
     */
    static readonly componentId = 'minecraft:addrider';
}
/**
 * @beta
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
export class EntityAgeableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * Event to run when this entity grows up.
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:ageable.
     */
    static readonly componentId = 'minecraft:ageable';
    getDropItems(): string[];
    getFeedItems(): EntityDefinitionFeedItem[];
}
/**
 * @beta
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
export class EntityBreathableComponent extends IEntityComponent {
    protected constructor();
    /**
     * If true, this entity can breathe in air.
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * If true, this entity can breathe in lava.
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * If true, this entity can breathe in solid blocks.
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * If true, this entity can breathe in water.
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * If true, this entity will have visible bubbles while in
     * water.
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * Time in seconds to recover breath to maximum.
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * Time in seconds between suffocation damage.
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * Time in seconds the entity can hold its breath.
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:breathable.
     */
    static readonly componentId = 'minecraft:breathable';
    getBreatheBlocks(): BlockPermutation[];
    getNonBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * Sets the current air supply of the entity.
     * @param value
     * New air supply for the entity.
     * @throws This function can throw errors.
     */
    setAirSupply(value: number): void;
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
export class EntityCanClimbComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_climb.
     */
    static readonly componentId = 'minecraft:can_climb';
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
export class EntityCanFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_fly.
     */
    static readonly componentId = 'minecraft:can_fly';
}
/**
 * @beta
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 */
export class EntityCanPowerJumpComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:can_power_jump.
     */
    static readonly componentId = 'minecraft:can_power_jump';
}
/**
 * @beta
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (sheep, llama, shulker).
 */
export class EntityColorComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    readonly typeId: string;
    /**
     * The palette color value of the entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:color.
     */
    static readonly componentId = 'minecraft:color';
}
/**
 * @beta
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
    protected constructor();
    /**
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     */
    readonly growth: number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
}
export class EntityDieEvent {
    protected constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}
export class EntityDieEventSignal {
    protected constructor();
    subscribe(callback: (arg: EntityDieEvent) => void, options?: EntityEventOptions): (arg: EntityDieEvent) => void;
    unsubscribe(callback: (arg: EntityDieEvent) => void): void;
}
/**
 * @beta
 * When added, this component signifies that this entity
 * doesn't take damage from fire.
 */
export class EntityFireImmuneComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:fire_immune.
     */
    static readonly componentId = 'minecraft:fire_immune';
}
/**
 * @beta
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:floats_in_liquid.
     */
    static readonly componentId = 'minecraft:floats_in_liquid';
}
/**
 * @beta
 * Represents the flying speed of an entity.
 */
export class EntityFlyingSpeedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    readonly typeId: string;
    /**
     * Speed while flying value of the entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:flying_speed.
     */
    static readonly componentId = 'minecraft:flying_speed';
}
/**
 * @beta
 * Defines how much friction affects this entity.
 */
export class EntityFrictionModifierComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    readonly typeId: string;
    /**
     * The higher the number, the more the friction affects this
     * entity. A value of 1.0 means regular friction, while 2.0
     * means twice as much.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:friction_modifier.
     */
    static readonly componentId = 'minecraft:friction_modifier';
}
/**
 * @beta
 * Sets the offset from the ground that the entity is actually
 * at.
 */
export class EntityGroundOffsetComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    readonly typeId: string;
    /**
     * The value of the entity's offset from the terrain, in
     * blocks.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:ground_offset.
     */
    static readonly componentId = 'minecraft:ground_offset';
}
/**
 * @beta
 * Defines the interactions with this entity for healing it.
 */
export class EntityHealableComponent extends IEntityComponent {
    protected constructor();
    /**
     * A set of filters for when these Healable items would apply.
     * @throws This property can throw when used.
     */
    readonly filters: FilterGroup;
    /**
     * Determines if an item can be used regardless of the entity
     * being at full health.
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:healable.
     */
    static readonly componentId = 'minecraft:healable';
    getFeedItems(): FeedItem[];
}
/**
 * @beta
 * Defines the health properties of an entity.
 */
export class EntityHealthComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of health for the
     * entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    readonly typeId: string;
    /**
     * Value for health as defined through entity components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:health.
     */
    static readonly componentId = 'minecraft:health';
    /**
     * @remarks
     * Resets the current health value of the entity to its default
     * value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current health of the entity to its maximum
     * value.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current health to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current health of the entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEvent {
    protected constructor();
    /**
     * Entity that made a hit/melee attack.
     */
    readonly entity: Entity;
    /**
     * Block that was hit by the attack, or undefined if the hit
     * attack did not hit a block. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly hitBlock?: Block;
    /**
     * Entity that was hit by the attack, or undefined if the hit
     * attack did not hit an entity. If both hitEntity and hitBlock
     * are undefined, then the entity basically swiped into the
     * air.
     */
    readonly hitEntity?: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 */
export class EntityHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an entity getting hurt by
 * another entity.
 */
export class EntityHurtEvent {
    protected constructor();
    /**
     * Describes the amount of damage caused.
     */
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    /**
     * Entity that was hurt.
     */
    readonly hurtEntity: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     * @param callback
     * @param options
     */
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}
/**
 * @beta
 * 表示一个实体的物品栏属性。
 *
 * Defines this entity's inventory properties.
 */
export class EntityInventoryComponent extends IEntityComponent {
    protected constructor();
    /**
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     *
     * Number of slots that this entity can gain per extra
     * strength.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     *
     * If true, the contents of this inventory can be removed by a
     * hopper.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * 表示实体的容器。
     *
     * Defines the container for this entity.
     */
    readonly container: InventoryComponentContainer;
    /**
     * 表示实体容器的种类。
     *
     * Type of container this entity has.
     */
    readonly containerType: string;
    /**
     * 表示实体容器的槽位数量。
     *
     * Number of slots the container has.
     */
    readonly inventorySize: number;
    /**
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     *
     * If true, the entity will not drop it's inventory on death.
     */
    readonly 'private': boolean;
    /**
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     *
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     */
    readonly restrictToOwner: boolean;
    /**
     * 组件标识符。应当为 `minecraft:inventory`。
     *
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    readonly typeId: string;
    /**
     * 组件标识符。
     *
     * Identifier of this component. Should always be
     * minecraft:inventory.
     */
    static readonly componentId = 'minecraft:inventory';
}
/**
 * @beta
 * When added, this component signifies that this entity is a
 * baby.
 */
export class EntityIsBabyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_baby.
     */
    static readonly componentId = 'minecraft:is_baby';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * charged.
 */
export class EntityIsChargedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_charged.
     */
    static readonly componentId = 'minecraft:is_charged';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 */
export class EntityIsChestedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_chested.
     */
    static readonly componentId = 'minecraft:is_chested';
}
/**
 * @beta
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 */
export class EntityIsDyableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_dyeable.
     */
    static readonly componentId = 'minecraft:is_dyeable';
}
/**
 * @beta
 * When added, this component signifies that this entity can
 * hide from hostile mobs while invisible.
 */
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_hidden_when_invisible.
     */
    static readonly componentId = 'minecraft:is_hidden_when_invisible';
}
/**
 * @beta
 * When added, this component signifies that this entity this
 * currently on fire.
 */
export class EntityIsIgnitedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_ignited.
     */
    static readonly componentId = 'minecraft:is_ignited';
}
/**
 * @beta
 * When added, this component signifies that this entity is an
 * illager captain.
 */
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_illager_captain.
     */
    static readonly componentId = 'minecraft:is_illager_captain';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently saddled.
 */
export class EntityIsSaddledComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_saddled.
     */
    static readonly componentId = 'minecraft:is_saddled';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently shaking.
 */
export class EntityIsShakingComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_shaking.
     */
    static readonly componentId = 'minecraft:is_shaking';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently sheared.
 */
export class EntityIsShearedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_sheared.
     */
    static readonly componentId = 'minecraft:is_sheared';
}
/**
 * @beta
 * When added, this component signifies that this entity can be
 * stacked.
 */
export class EntityIsStackableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stackable.
     */
    static readonly componentId = 'minecraft:is_stackable';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently stunned.
 */
export class EntityIsStunnedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_stunned.
     */
    static readonly componentId = 'minecraft:is_stunned';
}
/**
 * @beta
 * When added, this component signifies that this entity is
 * currently tamed.
 */
export class EntityIsTamedComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:is_tamed.
     */
    static readonly componentId = 'minecraft:is_tamed';
}
/**
 * @beta
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 */
export class EntityItemComponent extends IEntityComponent {
    protected constructor();
    /**
     * Item stack represented by this entity in the world.
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    /**
     * Identifier of this component.
     */
    readonly typeId: string;
    /**
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:item';
}
/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class EntityIterator implements Iterable<Entity> {
    protected constructor();
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     */
    next(): IteratorResult<Entity>;
}
/**
 * @beta
 * Defines the base movement speed in lava of this entity.
 */
export class EntityLavaMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of movement speed on
     * lava for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    readonly typeId: string;
    /**
     * Value for movement speed on lava as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:lava_movement.
     */
    static readonly componentId = 'minecraft:lava_movement';
    /**
     * @remarks
     * Resets the current movement speed on lava for the entity to
     * its default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed on lava speed to the minimum
     * value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed on lava for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Allows this entity to be leashed and defines the conditions
 * and events for this entity when is leashed.
 */
export class EntityLeashableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:leashable.
     */
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws This function can throw errors.
     */
    leash(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     * @throws This function can throw errors.
     */
    unleash(): void;
}
/**
 * @beta
 * Additional variant value. Can be used to further
 * differentiate variants.
 */
export class EntityMarkVariantComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    readonly typeId: string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:mark_variant.
     */
    static readonly componentId = 'minecraft:mark_variant';
}
/**
 * @beta
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
export class EntityMountTamingComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:mount_taming.
     */
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    setTamed(showParticles: boolean): void;
}
/**
 * @beta
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 */
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.amphibious.
     */
    static readonly componentId = 'minecraft:movement.amphibious';
}
/**
 * @beta
 * This component accents the movement of an entity.
 */
export class EntityMovementBasicComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.basic.
     */
    static readonly componentId = 'minecraft:movement.basic';
}
/**
 * @beta
 * Defines the general movement speed of this entity.
 */
export class EntityMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of default movement
     * speed for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    readonly typeId: string;
    /**
     * Value for default movement speed as defined through entity
     * components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.
     */
    static readonly componentId = 'minecraft:movement';
    /**
     * @remarks
     * Resets the current default movement speed value for the
     * entity to the default value.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the maximum value for
     * the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the default movement speed to the minimum value.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of default movement speed for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * When added, this move control causes the mob to fly.
 */
export class EntityMovementFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.fly.
     */
    static readonly componentId = 'minecraft:movement.fly';
}
/**
 * @beta
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 */
export class EntityMovementGenericComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.generic.
     */
    static readonly componentId = 'minecraft:movement.generic';
}
/**
 * @beta
 * When added, this movement control allows the mob to glide.
 */
export class EntityMovementGlideComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Speed in effect when the entity is turning.
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * Start speed during a glide.
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.glide.
     */
    static readonly componentId = 'minecraft:movement.glide';
}
/**
 * @beta
 * When added, this move control causes the mob to hover.
 */
export class EntityMovementHoverComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.hover.
     */
    static readonly componentId = 'minecraft:movement.hover';
}
/**
 * @beta
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 */
export class EntityMovementJumpComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.jump.
     */
    static readonly componentId = 'minecraft:movement.jump';
}
/**
 * @beta
 * When added, this move control causes the mob to hop as it
 * moves.
 */
export class EntityMovementSkipComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.skip.
     */
    static readonly componentId = 'minecraft:movement.skip';
}
/**
 * @beta
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 */
export class EntityMovementSwayComponent extends IEntityComponent {
    protected constructor();
    /**
     * The maximum number in degrees the mob can turn per tick.
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
    /**
     * Amplitude of the sway motion.
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * Amount of sway frequency.
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:movement.sway.
     */
    static readonly componentId = 'minecraft:movement.sway';
}
/**
 * @beta
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 */
export class EntityNavigationClimbComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.climb.
     */
    static readonly componentId = 'minecraft:navigation.climb';
}
/**
 * @beta
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 */
export class EntityNavigationFloatComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.float.
     */
    static readonly componentId = 'minecraft:navigation.float';
}
/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like Minecraft parrots do.)
 */
export class EntityNavigationFlyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.fly.
     */
    static readonly componentId = 'minecraft:navigation.fly';
}
/**
 * @beta
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 */
export class EntityNavigationGenericComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.generic.
     */
    static readonly componentId = 'minecraft:navigation.generic';
}
/**
 * @beta
 * Allows this entity to generate paths in the air (for
 * example, like the Minecraft Bees do.) Keeps them from
 * falling out of the skies and doing predictive movement.
 */
export class EntityNavigationHoverComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.hover.
     */
    static readonly componentId = 'minecraft:navigation.hover';
}
/**
 * @beta
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 */
export class EntityNavigationWalkComponent extends IEntityComponent {
    protected constructor();
    /**
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * Tells the pathfinder to avoid water when creating a path.
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * Tells the pathfinder whether or not it can float.
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * Tells the pathfinder whether or not it can jump up blocks.
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * Whether a path can be created through a door.
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * Tells the pathfinder that it can start pathing when in the
     * air.
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:navigation.swim.
     */
    static readonly componentId = 'minecraft:navigation.walk';
}
export class EntityOnFireComponent extends IEntityComponent {
    protected constructor();
    readonly onFireTicksRemaining: number;
    readonly typeId: string;
    static readonly componentId = 'minecraft:onfire';
}
/**
 * @beta
 * Sets the distance through which the entity can push through.
 */
export class EntityPushThroughComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    readonly typeId: string;
    /**
     * The value of the entity's push-through, in blocks.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:push_through.
     */
    static readonly componentId = 'minecraft:push_through';
}
/**
 * @beta
 * When added, this component adds the capability that an
 * entity can be ridden by another entity.
 */
export class EntityRideableComponent extends IEntityComponent {
    protected constructor();
    /**
     * Zero-based index of the seat that can used to control this
     * entity.
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * Determines whether interactions are not supported if the
     * entity is crouching.
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * If true, this entity will be picked when looked at by the
     * rider.
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * Number of seats for riders defined for this entity.
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:rideable.
     */
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     * @param rider
     * Entity that will become the rider of this entity.
     * @returns
     * True if the rider entity was successfully added.
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     * @param rider
     * Entity that should be ejected from this entity.
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    getFamilyTypes(): string[];
    getSeats(): Seat[];
}
/**
 * @beta
 * Sets the entity's visual size.
 */
export class EntityScaleComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    readonly typeId: string;
    /**
     * The value of the scale. 1.0 means the entity will appear at
     * the scale they are defined in their model. Higher numbers
     * make the entity bigger.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:scale.
     */
    static readonly componentId = 'minecraft:scale';
}
/**
 * @beta
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 */
export class EntitySkinIdComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    readonly typeId: string;
    /**
     * The identifier of the skin. By convention, 0 is the
     * identifier of the base skin.
     */
    value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:skin_id.
     */
    static readonly componentId = 'minecraft:skin_id';
}
/**
 * @beta
 * Contains data related to an entity spawning within the
 * world.
 */
export class EntitySpawnEvent {
    protected constructor();
    /**
     * Entity that was spawned.
     */
    entity: Entity;
}
/**
 * @beta
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 */
export class EntitySpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     * @param callback
     * Function that handles the spawn event.
     */
    subscribe(callback: (arg: EntitySpawnEvent) => void): (arg: EntitySpawnEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: EntitySpawnEvent) => void): void;
}
/**
 * @beta
 * Defines the entity's strength to carry items.
 */
export class EntityStrengthComponent extends IEntityComponent {
    protected constructor();
    /**
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    readonly typeId: string;
    /**
     * Current strength value of this entity, after any effects or
     * component updates are applied.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:strength.
     */
    static readonly componentId = 'minecraft:strength';
}
/**
 * @beta
 * Defines the rules for a mob to be tamed by the player.
 */
export class EntityTameableComponent extends IEntityComponent {
    protected constructor();
    /**
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * Event to run when this entity becomes tamed.
     * @throws This property can throw when used.
     */
    readonly tameEvent: Trigger;
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:tameable.
     */
    static readonly componentId = 'minecraft:tameable';
    getTameItems(): string[];
    /**
     * @remarks
     * Tames this entity.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(): boolean;
}
/**
 * @beta
 * Represents information about a type of entity.
 */
export class EntityType {
    protected constructor();
    /**
     * Identifier of this entity type - for example,
     * 'minecraft:skeleton'.
     */
    readonly id: string;
}
/**
 * @beta
 * An iterator that loops through available entity types.
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    protected constructor();
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
}
/**
 * @beta
 * Used for accessing all entity types currently available for
 * use within the world.
 */
// tslint:disable-next-line:no-unnecessary-class
export class EntityTypes {
    protected constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     * @param identifier
     */
    static get(identifier: string): EntityType;
    /**
     * @remarks
     * Retrieves an iterator of all entity types within this world.
     */
    static getAll(): EntityTypeIterator;
}
/**
 * @beta
 * Defines the general movement speed underwater of this
 * entity.
 */
export class EntityUnderwaterMovementComponent extends IEntityComponent {
    protected constructor();
    /**
     * Read-only. Returns the current value of movement speed
     * underwater for the entity.
     * @throws This property can throw when used.
     */
    readonly current: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    readonly typeId: string;
    /**
     * Value for movement speed underwater as defined through
     * entity components.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:underwater_movement.
     */
    static readonly componentId = 'minecraft:underwater_movement';
    /**
     * @remarks
     * Resets the current movement speed underwater for the entity
     * to the default value implied by the current component state
     * of the entity.
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the maximum value
     * for the entity, as determined by the set of components that
     * are on the entity.
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the movement speed underwater to the minimum value as
     * defined by the component state of this entity.
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of movement speed underwater for the
     * entity.
     * @param value
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}
/**
 * @beta
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 */
export class EntityVariantComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    readonly typeId: string;
    /**
     * The identifier of the variant. By convention, 0 is the
     * identifier of the base entity.
     * @throws This property can throw when used.
     */
    readonly value: number;
    /**
     * Identifier of this component. Should always be
     * minecraft:variant.
     */
    static readonly componentId = 'minecraft:variant';
}
/**
 * @beta
 * When added, this component signifies that this entity wants
 * to become a jockey.
 */
export class EntityWantsJockeyComponent extends IEntityComponent {
    protected constructor();
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    readonly typeId: string;
    /**
     * Identifier of this component. Should always be
     * minecraft:wants_jockey.
     */
    static readonly componentId = 'minecraft:wants_jockey';
}
/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the World.
 */
export class Events {
    protected constructor();
    /**
     * This event fires before a chat message is broadcast or
     * delivered. The event can be canceled, and the message can
     * also be updated.
     */
    readonly beforeChat: BeforeChatEventSignal;
    /**
     * This event is fired before the triggering of an entity event
     * that updates the component definition state of an entity.
     * Within this event, you can cancel or shape the impacted
     * components and event triggers.
     */
    readonly beforeDataDrivenEntityTriggerEvent: BeforeDataDrivenEntityTriggerEventSignal;
    /**
     * This event is fired before an explosion occurs.
     */
    readonly beforeExplosion: BeforeExplosionEventSignal;
    /**
     * For custom items, this event is triggered before the set of
     * defined components for the item change in response to a
     * triggered event. Note that this event is only fired for
     * custom data-driven items.
     */
    readonly beforeItemDefinitionEvent: BeforeItemDefinitionEventSignal;
    /**
     * This event fires before an item is used by an entity or
     * player.
     */
    readonly beforeItemUse: BeforeItemUseEventSignal;
    /**
     * This event fires before an item is used on a block by an
     * entity or player.
     */
    readonly beforeItemUseOn: BeforeItemUseOnEventSignal;
    /**
     * Fires before a piston is activated.
     */
    readonly beforePistonActivate: BeforePistonActivateEventSignal;
    /**
     * This event fires for a block that is broken by a player.
     */
    readonly blockBreak: BlockBreakEventSignal;
    /**
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     */
    readonly blockExplode: BlockExplodeEventSignal;
    /**
     * This event fires for a block that is placed by a player.
     */
    readonly blockPlace: BlockPlaceEventSignal;
    /**
     * This event fires when a button is pushed.
     */
    readonly buttonPush: ButtonPushEventSignal;
    /**
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     */
    readonly chat: ChatEventSignal;
    /**
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     */
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;
    /**
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     */
    readonly effectAdd: EffectAddEventSignal;
    readonly entityDie: EntityDieEventSignal;
    /**
     * This event fires when an entity hits (makes a melee attack)
     * and potentially impacts another entity or block.
     */
    readonly entityHit: EntityHitEventSignal;
    /**
     * This event fires when an entity is hurt (takes damage).
     */
    readonly entityHurt: EntityHurtEventSignal;
    /**
     * This event fires when an entity is spawned.
     */
    readonly entitySpawn: EntitySpawnEventSignal;
    /**
     * This event is fired after an explosion occurs.
     */
    readonly explosion: ExplosionEventSignal;
    /**
     * This event fires when a chargeable item completes charging.
     */
    readonly itemCompleteCharge: ItemCompleteChargeEventSignal;
    /**
     * For custom items, this event is triggered when the
     * fundamental set of defined components for the item change.
     * Note that this event is only fired for custom data-driven
     * items.
     */
    readonly itemDefinitionEvent: ItemDefinitionEventSignal;
    /**
     * This event fires when a chargeable item is released from
     * charging.
     */
    readonly itemReleaseCharge: ItemReleaseChargeEventSignal;
    /**
     * This event fires when a chargeable item starts charging.
     */
    readonly itemStartCharge: ItemStartChargeEventSignal;
    /**
     * This event fires when any particular item is starting to be
     * used by an entity or player.
     */
    readonly itemStartUseOn: ItemStartUseOnEventSignal;
    /**
     * This event fires when a chargeable item stops charging.
     */
    readonly itemStopCharge: ItemStopChargeEventSignal;
    /**
     * This event fires when any particular item is ending being
     * used by an entity or player.
     */
    readonly itemStopUseOn: ItemStopUseOnEventSignal;
    /**
     * This event fires when any particular item is used by an
     * entity or player.
     */
    readonly itemUse: ItemUseEventSignal;
    /**
     * This event fires when any particular item is used on a block
     * by an entity or player.
     */
    readonly itemUseOn: ItemUseOnEventSignal;
    /**
     * This event fires when a lever activates or is deactivated.
     */
    readonly leverActivate: LeverActionEventSignal;
    /**
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     */
    readonly messageReceive: ServerMessageSignal;
    /**
     * This event fires when a piston expands or retracts.
     */
    readonly pistonActivate: PistonActivateEventSignal;
    /**
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is spawned the first time within a world.
     */
    readonly playerJoin: PlayerJoinEventSignal;
    /**
     * This event fires when a player leaves a world.
     */
    readonly playerLeave: PlayerLeaveEventSignal;
    /**
     * This event fires when a player spawns or respawns. Note that
     * an additional flag within this event will tell you whether
     * the player is spawning right after join vs. a respawn.
     */
    readonly playerSpawn: PlayerSpawnEventSignal;
    /**
     * This event fires when a projectile hits an entity or block.
     */
    readonly projectileHit: ProjectileHitEventSignal;
    /**
     * This event will be triggered when the weather changes within
     * Minecraft.
     */
    readonly weatherChange: WeatherChangeEventSignal;
    /**
     * This event fires when the script environment is initialized
     * on a World. In addition, you can register dynamic properties
     * within the scope of a world Initialize event.
     */
    readonly worldInitialize: WorldInitializeEventSignal;
}
/**
 * @beta
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionEvent {
    protected constructor();
    /**
     * Dimension where the explosion has occurred.
     */
    readonly dimension: Dimension;
    /**
     * Optional source of the explosion.
     */
    readonly source: Entity;
    getImpactedBlocks(): Vector3[];
}
/**
 * @beta
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     * @param callback
     */
    subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ExplosionEvent) => void): void;
}
/**
 * @beta
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 */
export class FeedItem {
    protected constructor();
    /**
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     */
    readonly healAmount: number;
    /**
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     */
    readonly item: string;
    getEffects(): FeedItemEffect[];
}
/**
 * @beta
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 */
export class FeedItemEffect {
    protected constructor();
    /**
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     */
    readonly amplifier: number;
    /**
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     */
    readonly chance: number;
    /**
     * Gets the duration, in ticks, of this effect.
     */
    readonly duration: number;
    /**
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     */
    readonly name: string;
}
/**
 * @beta
 * Represents a set of filters for when an event should occur.
 */
// tslint:disable-next-line:no-unnecessary-class
export class FilterGroup {
    protected constructor();
}
/**
 * @beta
 * Represents constants related to fluid containers.
 */
// tslint:disable-next-line:no-unnecessary-class
export class FluidContainer {
    protected constructor();
    /**
     * Constant that represents the maximum fill level of a fluid
     * container.
     */
    static readonly maxFillLevel = 6;
    /**
     * Constant that represents the minimum fill level of a fluid
     * container.
     */
    static readonly minFillLevel = 0;
}
/**
 * @beta
 * Contains an interface for defining the state of a property
 * for a {@link BlockPermutation}.
 */
export class IBlockProperty {
    protected constructor();
    /**
     * The name of this property.
     */
    readonly name: string;
}
/**
 * @beta
 * Base interface that defines components associated with an
 * entity.
 */
export class IEntityComponent {
    protected constructor();
    /**
     * Identifier of the type of entity component.
     */
    readonly typeId: string;
}
/**
 * @beta
 * Contains the state of an integer-based property for a {@link
 * BlockPermutation}.
 */
export class IntBlockProperty extends IBlockProperty {
    protected constructor();
    /**
     * The name of this property.
     */
    readonly name: string;
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use {@link
     * @minecraft/server.IntBlockProperty.validValues} to check
     * allowed values.
     */
    value: number;
    getValidValues(): number[];
}
/**
 * @beta
 * Represents a container that can hold stacks of items. Used
 * for entities like players, chest minecarts, llamas, and
 * more.
 */
export class InventoryComponentContainer extends Container {
    protected constructor();
    /**
     * The number of empty slots in the container.
     * @throws This property can throw when used.
     */
    readonly emptySlotsCount: number;
    /**
     * Represents the size of the container. For example, a
     * standard single-block chest has a size of 27, for the 27
     * slots in their inventory.
     * @throws This property can throw when used.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the specified container. Items will be
     * placed in the first available empty slot. (Use {@link
     * InventoryComponentContainer.setItem} if you wish to set
     * items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Empties all items in this entities' inventory.
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @remarks
     * Clears out a specific item at the specified slot index.
     * @param slot
     * @throws This function can throw errors.
     */
    clearItem(slot: number): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     * @example getItem.js
     * ```typescript
     *        const itemStack = rightChestContainer.getItem(0);
     *        test.assert(itemStack.id === "apple", "Expected apple");
     *        test.assert(itemStack.amount === 10, "Expected 10 apples");
     * ```
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Returns a slot object for specifically managing a slot
     * within a broader inventory.
     * @param slot
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     * @example swapItems.js
     * ```typescript
     *        rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
     *
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     * @example transferItem.js
     * ```typescript
     *        rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
     *
     * ```
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteChargeEvent {
    protected constructor();
    /**
     * Returns the item stack that has completed charging.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 */
export class ItemCompleteChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}
/**
 * @beta
 * 表示物品使用冷却组件。当出现在物品上时，表示该物品被实体使用后会有冷却效果。
 * 注意，若使用不会进行冷却，原版物品会获取到没有实际作用的该组件。
 * 
 * When present on an item, this item has a cooldown effect
 * when used by entities.
 */
export class ItemCooldownComponent {
    protected constructor();
    /**
     * 表示物品的冷却类别。
     * 
     * Represents the cooldown category that this item is
     * associated with.
     */
    readonly cooldownCategory: string;
    /**
     * 以刻为单位，物品冷却的（剩余）时间。
     * 
     * Amount of time, in ticks, that remain for this item
     * cooldown.
     */
    readonly cooldownTicks: number;
    /**
     * 组件的标识符。
     * 
     * Identifier of this component. Should always be
     * 'minecraft:cooldown'.
     */
    static readonly componentId = 'minecraft:cooldown';
    /**
     * @remarks
     * 开始物品的冷却周期。
     * 如果物品已在冷却中，将重新开始冷却。
     * 
     * Starts a new cooldown period for this item.
     * @param player 要开始冷却的玩家。
     */
    startCooldown(player: Player): void;
}
/**
 * @beta
 * Manages callbacks that are connected to an item's definition
 * and components changing.
 */
export class ItemDefinitionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item's
     * definition and components change.
     * @param callback
     */
    subscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): (arg: ItemDefinitionTriggeredEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item's
     * definition and components change.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemDefinitionTriggeredEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
export class ItemDefinitionTriggeredEvent {
    protected constructor();
    /**
     * Name of the data-driven item event that is triggering this
     * change.
     */
    readonly eventName: string;
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * 表示物品耐久组件。当出现在物品上时，表示该物品可以在使用中受到损坏。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item can take damage in the
 * process of being used. Note that this component only applies
 * to data-driven items.
 */
export class ItemDurabilityComponent {
    protected constructor();
    /**
     * 此物品当前的损坏值。
     * 物品当前耐久度为 `maxDurability - damage`。
     * 当被设置为 负数，`Infinity`，`NaN` 等值时，值为 0。
     * 
     * Returns the current damage level of this particular item.
     */
    damage: number;
    /**
     * 表示该物品在损坏前可以承受的损坏值。
     * 
     * Represents the amount of damage that this item can take
     * before breaking.
     */
    readonly maxDurability: number;
    /**
     * 组件的标识符。
     * 
     * Identifier of this component. Should always be
     * 'minecraft:durability'.
     */
    static readonly componentId = 'minecraft:durability';
    /**
     * @remarks
     * 返回根据 `damageRange` 属性生成的最大损坏概率，
     * 附带一个耐久附魔等级作为可选参数。
     * 
     * Returns the maximum chance that this item would be damaged
     * using the damageRange property, given an unbreaking level.
     * @param unbreaking
     * 耐久魔咒等级，在计算损坏概率时受到此参数的影响。
     * 传入的 `unbreaking` 参数必须大于等于 0。
     * 
     * Unbreaking factor to consider in factoring the damage
     * chance. Incoming unbreaking parameter must be greater than
     * 0.
     * @returns 使用时的最大损坏概率。
     * @throws
     * 若 `unbreaking` 参数小于 0，抛出 `TypeError` 。
     */
    getDamageChance(unbreaking?: number): number;
    getDamageRange(): NumberRange;
}
/**
 * @beta
 * 表示物品魔咒组件。当出现在物品上时，可以操作物品上的魔咒。
 * 
 * When present on an item, this item has applied enchantment
 * effects. Note that this component only applies to
 * data-driven items.
 */
export class ItemEnchantsComponent {
    protected constructor();
    /**
     * 该物品堆叠上的魔咒集合。
     * 注意，该属性仅返回一个拷贝，若需应用修改，需要先赋值为变量，进行操作，再将变量赋值回这个属性。
     * 
     * Returns a collection of the enchantments applied to this
     * item stack.
     * 
     * @throws
     * 当被赋值到属性上的魔咒集合的槽位与原集合不同时，抛出 `Failed to set property 'enchantments'`。
     */
    enchantments: EnchantmentList;
    /**
     * 组件的标识符。
     * 
     * Identifier of this component.
     */
    static readonly componentId = 'minecraft:enchantments';
    /**
     * @remarks
     * 移除该物品堆叠上的所有魔咒。
     * 
     * Removes all enchantments applied to this item stack.
     */
    removeAllEnchantments(): void;
}
/**
 * @beta
 * 表示物品食物组件。当出现在物品上时，实体可以消耗此物品。
 * 注意，只能在数驱物品上获取和使用该组件。
 * 
 * When present on an item, this item is consumable by
 * entities. Note that this component only applies to
 * data-driven items.
 */
export class ItemFoodComponent {
    protected constructor();
    /**
     * 若为 `true` ，则无论饥饿值是否已满，玩家始终可以食用该物品。
     * 
     * If true, the player can always eat this item (even when not
     * hungry).
     */
    readonly canAlwaysEat: boolean;
    /**
     * 表示实体在食用该物品后恢复的饥饿值，即营养值。
     * 
     * Represents how much nutrition this food item will give an
     * entity when eaten.
     */
    readonly nutrition: number;
    /**
     * 当一个物品被食用，
     * 将根据公式 `nutrition * saturation_modifier * 2`
     * 来为玩家添加饱和状态。
     * 
     * When an item is eaten, this value is used according to this
     * formula (nutrition * saturation_modifier * 2) to apply a
     * saturation buff.
     */
    readonly saturationModifier: number;
    /**
     * 若给出，则将该物品转换为标识符指定的物品。
     * 
     * When specified, converts the active item to the one
     * specified by this property.
     */
    readonly usingConvertsTo: string;
    /**
     * 组件的标识符。
     * 
     * Identifier of this component. Should always be
     * 'minecraft:food'.
     */
    static readonly componentId = 'minecraft:food';
}
/**
 * @beta
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseChargeEvent {
    protected constructor();
    /**
     * Returns the item stack that triggered this item event.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 */
export class ItemReleaseChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}
/**
 * @beta
 * Represents a collection of all of the available item types
 * in Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class Items {
    protected constructor();
    /**
     * @remarks
     * Returns an item type given an item type identifier.
     * @param itemId
     * Type of the item to return.
     */
    static get(itemId: string): ItemType;
}
/**
 * @beta
 * Defines a collection of items.
 */
export class ItemStack {
    /**
     * Number of the items in the stack. Valid values range between
     * 0 and 64.
     */
    amount: number;
    readonly isStackable: boolean;
    keepOnDeath: boolean;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    /**
     * Given name of this stack of items.
     */
    nameTag?: string;
    readonly 'type': ItemType;
    /**
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     */
    readonly typeId: string;
    /**
     * @remarks
     * Creates a new instance of a stack of items for use in the
     * world.
     * @param itemType
     * Type of item to create. See the {@link MinecraftItemTypes}
     * enumeration for a list of standard item types in Minecraft
     * experiences.
     * @param amount
     * Number of items to place in the stack, between 1 and 64.
     * Note that certain items can only have one item in the stack.
     * @throws This function can throw errors.
     */
    constructor(itemType: ItemType | string, amount?: number);
    clone(): ItemStack;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed. If the component is not present on the item
     * stack, undefined is returned.
     */
    getComponent(componentId: string): any;
    /**
     * @remarks
     * Returns all components that are both present on this item
     * stack and supported by the API.
     */
    getComponents(): any[];
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * item stack.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:food') to
     * retrieve. If no namespace prefix is specified, 'minecraft:'
     * is assumed.
     */
    hasComponent(componentId: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    setCanDestroy(blockIdentifiers?: string[]): void;
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     * @param loreList
     */
    setLore(loreList?: string[]): void;
    /**
     * @remarks
     * Triggers an item type event. For custom items, a number of
     * events are defined in an items' definition for key item
     * behaviors.
     * @param eventName
     * Name of the item type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     */
    triggerEvent(eventName: string): void;
}
/**
 * @beta
 * Contains information related to a chargeable item starting
 * to be charged.
 */
export class ItemStartChargeEvent {
    protected constructor();
    /**
     * The impacted item stack that is starting to be charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 */
export class ItemStartChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class ItemStartUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * The impacted item stack that is starting to be used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
    getBuildBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStartUseOnEvent) => void): (arg: ItemStartUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 */
export class ItemStopChargeEvent {
    protected constructor();
    /**
     * The impacted item stack that is stopping being charged.
     */
    readonly itemStack: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    /**
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     */
    readonly useDuration: number;
}
/**
 * @beta
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 */
export class ItemStopChargeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item that has stopped
 * being used on a block.
 */
export class ItemStopUseOnEvent {
    protected constructor();
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 */
export class ItemStopUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemStopUseOnEvent) => void): (arg: ItemStopUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStopUseOnEvent) => void): void;
}
/**
 * @beta
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    protected constructor();
    /**
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     */
    readonly id: string;
}
/**
 * @beta
 * An iterator over a set of available item types.
 */
export class ItemTypeIterator implements Iterable<ItemType> {
    protected constructor();
    [Symbol.iterator](): Iterator<ItemType>;
    next(): IteratorResult<ItemType>;
}
/**
 * @beta
 * Returns the set of item types registered within Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class ItemTypes {
    protected constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     * @param itemId
     */
    static get(itemId: string): ItemType;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     */
    static getAll(): ItemTypeIterator;
}
/**
 * @beta
 * Contains information related to an item being used.
 */
export class ItemUseEvent {
    protected constructor();
    /**
     * The impacted item stack that is being used.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
}
/**
 * @beta
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseEvent) => void): (arg: ItemUseEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseEvent) => void): void;
}
/**
 * @beta
 * Contains information related to an item being used on a
 * block.
 */
export class ItemUseOnEvent {
    protected constructor();
    /**
     * The face of the block that an item is being used on.
     */
    readonly blockFace: Direction;
    /**
     * X coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationX: number;
    /**
     * Y coordinate of the item-use impact location on the face of
     * the target block.
     */
    readonly faceLocationY: number;
    /**
     * The impacted item stack that is being used on a block.
     */
    item: ItemStack;
    /**
     * Returns the source entity that triggered this item event.
     */
    readonly source: Entity;
    getBlockLocation(): Vector3;
}
/**
 * @beta
 * Manages callbacks that are connected to an item being used
 * on a block event.
 */
export class ItemUseOnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * @param callback
     */
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to changes to a lever
 * activating or deactivating.
 */
export class LeverActionEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the lever is activated (that is, transmitting
     * power).
     */
    readonly isPowered: boolean;
    /**
     * Optional player that triggered the lever activation.
     */
    readonly player: Player;
}
/**
 * @beta
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 */
export class LeverActionEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     * @param callback
     */
    subscribe(callback: (arg: LeverActionEvent) => void): (arg: LeverActionEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: LeverActionEvent) => void): void;
}
/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 */
export class MessageReceiveEvent {
    protected constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
    readonly sourceType: MessageSourceType;
}
/**
 * @beta
 * 表示 Minecraft 原版与教育版已注册的方块类型的集合。
 * 
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftBlockTypes {
    protected constructor();
    /**
     * 金合欢木按钮。
     * 
     * Represents an acacia button within Minecraft.
     */
    static readonly acaciaButton: BlockType;
    /**
     * 金合欢木门。
     * 
     * Represents an acacia door within Minecraft.
     */
    static readonly acaciaDoor: BlockType;
    /**
     * 金合欢木栅栏门。
     * 
     * Represents an acacia fence gate within Minecraft.
     */
    static readonly acaciaFenceGate: BlockType;
    /**
     * 悬挂式金合欢木告示牌。
     */
    static readonly acaciaHangingSign: BlockType;
    /**
     * 金合欢木压力板。
     * 
     * Represents an acacia pressure plate within Minecraft.
     */
    static readonly acaciaPressurePlate: BlockType;
    /**
     * 金合欢木楼梯。
     * 
     * Represents a set of acacia stairs within Minecraft.
     */
    static readonly acaciaStairs: BlockType;
    /**
     * 金合欢木告示牌。
     * 
     * Represents an acacia standing sign within Minecraft.
     */
    static readonly acaciaStandingSign: BlockType;
    /**
     * 金合欢木活板门。
     * 
     * Represents an acacia trapdoor within Minecraft.
     */
    static readonly acaciaTrapdoor: BlockType;
    /**
     * 墙上的金合欢木告示牌。
     * 
     * Represents an acacia wall sign within Minecraft.
     */
    static readonly acaciaWallSign: BlockType;
    /**
     * 激活铁轨。
     * 
     * Represents an activator rail within Minecraft.
     */
    static readonly activatorRail: BlockType;
    /**
     * 空气。
     * 
     * Represents an empty space (air) within Minecraft.
     */
    static readonly air: BlockType;
    /**
     * 允许方块。
     * 
     * Represents an allow block within Minecraft.
     */
    static readonly allow: BlockType;
    /**
     * 紫水晶块。
     * 
     * Represents an amethyst block within Minecraft.
     */
    static readonly amethystBlock: BlockType;
    /**
     * 紫水晶簇。
     * 
     * Represents a cluster of amethyst within Minecraft.
     */
    static readonly amethystCluster: BlockType;
    /**
     * 远古残骸。
     * 
     * Represents ancient debris within Minecraft.
     */
    static readonly ancientDebris: BlockType;
    /**
     * 安山岩楼梯。
     * 
     * Represents andesite stairs within Minecraft.
     */
    static readonly andesiteStairs: BlockType;
    /**
     * 铁砧。
     * 
     * Represents an anvil within Minecraft.
     */
    static readonly anvil: BlockType;
    /**
     * 杜鹃花丛。
     * 
     * Represents an azalea flowering plant within Minecraft.
     */
    static readonly azalea: BlockType;
    /**
     * 杜鹃树叶。
     * 
     * Represents azalea leaves within Minecraft.
     */
    static readonly azaleaLeaves: BlockType;
    /**
     * 盛开的杜鹃树叶。
     * 
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly azaleaLeavesFlowered: BlockType;
    /**
     * 竹子。
     * 
     * Represents a bamboo tree within Minecraft.
     */
    static readonly bamboo: BlockType;
    /**
     * 竹块。
     */
    static readonly bambooBlock: BlockType;
    /**
     * 竹按钮。
     */
    static readonly bambooButton: BlockType;
    /**
     * 竹门。
     */
    static readonly bambooDoor: BlockType;
    /**
     * 双层竹台阶。
     */
    static readonly bambooDoubleSlab: BlockType;
    /**
     * 竹栅栏。
     */
    static readonly bambooFence: BlockType;
    /**
     * 竹栅栏门。
     */
    static readonly bambooFenceGate: BlockType;
    /**
     * 悬挂式竹告示牌。
     */
    static readonly bambooHangingSign: BlockType;
    /**
     * 竹马赛克。
     */
    static readonly bambooMosaic: BlockType;
    /**
     * 双层竹马赛克台阶。
     */
    static readonly bambooMosaicDoubleSlab: BlockType;
    /**
     * 竹马赛克台阶。
     */
    static readonly bambooMosaicSlab: BlockType;
    /**
     * 竹马赛克楼梯。
     */
    static readonly bambooMosaicStairs: BlockType;
    /**
     * 竹板。
     */
    static readonly bambooPlanks: BlockType;
    /**
     * 竹压力板。
     */
    static readonly bambooPressurePlate: BlockType;
    /**
     * 竹笋。
     * 
     * Represents a bamboo sapling within Minecraft.
     */
    static readonly bambooSapling: BlockType;
    /**
     * 竹台阶。
     */
    static readonly bambooSlab: BlockType;
    /**
     * 竹楼梯。
     */
    static readonly bambooStairs: BlockType;
    /**
     * 竹告示牌。
     */
    static readonly bambooStandingSign: BlockType;
    /**
     * 竹活板门。
     */
    static readonly bambooTrapdoor: BlockType;
    /**
     * 墙上的竹告示牌。
     */
    static readonly bambooWallSign: BlockType;
    /**
     * 木桶。
     * 
     * Represents a barrel within Minecraft.
     */
    static readonly barrel: BlockType;
    /**
     * 屏障。
     * 
     * Represents an invisible but logical barrier within
     * Minecraft.
     */
    static readonly barrier: BlockType;
    /**
     * 玄武岩。
     * 
     * Represents a basalt block within Minecraft.
     */
    static readonly basalt: BlockType;
    /**
     * 信标。
     * 
     * Represents a beacon within Minecraft.
     */
    static readonly beacon: BlockType;
    /**
     * 床。
     * 
     * Represents a bed within Minecraft.
     */
    static readonly bed: BlockType;
    /**
     * 基岩。
     * 
     * Represents a bedrock block within Minecraft.
     */
    static readonly bedrock: BlockType;
    /**
     * 蜂箱。
     * 
     * Represents a beehive within Minecraft.
     */
    static readonly beehive: BlockType;
    /**
     * 蜂巢。
     * 
     * Represents a bee nest within Minecraft.
     */
    static readonly beeNest: BlockType;
    /**
     * 甜菜根。
     * 
     * Represents a beetroot vegetable within Minecraft.
     */
    static readonly beetroot: BlockType;
    /**
     * 钟。
     * 
     * Represents a bell within Minecraft.
     */
    static readonly bell: BlockType;
    /**
     * 大型垂滴叶。
     * 
     * Represents a big dripleaf plant within Minecraft.
     */
    static readonly bigDripleaf: BlockType;
    /**
     * 白桦木按钮。
     * 
     * Represents a birch button within Minecraft.
     */
    static readonly birchButton: BlockType;
    /**
     * 白桦木门。
     * 
     * Represents a birch door within Minecraft.
     */
    static readonly birchDoor: BlockType;
    /**
     * 白桦木栅栏门。
     * 
     * Represents a birch fence gate within Minecraft.
     */
    static readonly birchFenceGate: BlockType;
    /**
     * 悬挂式白桦木告示牌。
     */
    static readonly birchHangingSign: BlockType;
    /**
     * 白桦木压力板。
     * 
     * Represents a birch pressure plate within Minecraft.
     */
    static readonly birchPressurePlate: BlockType;
    /**
     * 白桦木楼梯。
     * 
     * Represents a birch stairs block within Minecraft.
     */
    static readonly birchStairs: BlockType;
    /**
     * 白桦木告示牌。
     * 
     * Represents a birch standing sign within Minecraft.
     */
    static readonly birchStandingSign: BlockType;
    /**
     * 白桦木活板门。
     * 
     * Represents a birch trapdoor within Minecraft.
     */
    static readonly birchTrapdoor: BlockType;
    /**
     * 墙上的白桦木告示牌。
     * 
     * Represents a birch wall sign within Minecraft.
     */
    static readonly birchWallSign: BlockType;
    /**
     * 黑色蜡烛。
     * 
     * Represents a black candle within Minecraft.
     */
    static readonly blackCandle: BlockType;
    /**
     * 插上黑色蜡烛的蛋糕。
     * 
     * Represents a black candle cake within Minecraft.
     */
    static readonly blackCandleCake: BlockType;
    /**
     * 黑色带釉陶瓦。
     * 
     * Represents a black glazed terracotta block within Minecraft.
     */
    static readonly blackGlazedTerracotta: BlockType;
    /**
     * 黑石。
     * 
     * Represents a blackstone block within Minecraft.
     */
    static readonly blackstone: BlockType;
    /**
     * 双层黑石台阶。
     * 
     * Represents a blackstone double slab within Minecraft.
     */
    static readonly blackstoneDoubleSlab: BlockType;
    /**
     * 黑石台阶。
     * 
     * Represents a blackstone slab within Minecraft.
     */
    static readonly blackstoneSlab: BlockType;
    /**
     * 黑石楼梯。
     * 
     * Represents blackstone stairs within Minecraft.
     */
    static readonly blackstoneStairs: BlockType;
    /**
     * 黑石墙。
     * 
     * Represents a blackstone wall within Minecraft.
     */
    static readonly blackstoneWall: BlockType;
    /**
     * 黑色羊毛。
     */
    static readonly blackWool: BlockType;
    /**
     * 高炉。
     * 
     * Represents a blast furnace within Minecraft.
     */
    static readonly blastFurnace: BlockType;
    /**
     * 蓝色蜡烛。
     * 
     * Represents a blue candle within Minecraft.
     */
    static readonly blueCandle: BlockType;
    /**
     * 插上蓝色蜡烛的蛋糕。
     * 
     * Represents a blue candle cake within Minecraft.
     */
    static readonly blueCandleCake: BlockType;
    /**
     * 蓝色带釉陶瓦。
     * 
     * Represents a blue glazed terracotta block within Minecraft.
     */
    static readonly blueGlazedTerracotta: BlockType;
    /**
     * 蓝冰。
     * 
     * Represents a blue ice block within Minecraft.
     */
    static readonly blueIce: BlockType;
    /**
     * 蓝色羊毛。
     */
    static readonly blueWool: BlockType;
    /**
     * 骨块。
     * 
     * Represents a bone block within Minecraft.
     */
    static readonly boneBlock: BlockType;
    /**
     * 书架。
     * 
     * Represents an unbreakable border block within Minecraft.
     */
    static readonly bookshelf: BlockType;
    /**
     * 边界。
     * 
     * Represents a border block within Minecraft.
     */
    static readonly borderBlock: BlockType;
    /**
     * 酿造台。
     * 
     * Represents a brewing stand within Minecraft.
     */
    static readonly brewingStand: BlockType;
    /**
     * 红砖块。
     * 
     * Represents a block of brick within Minecraft.
     */
    static readonly brickBlock: BlockType;
    /**
     * 红砖楼梯。
     * 
     * Represents brick stairs within Minecraft.
     */
    static readonly brickStairs: BlockType;
    /**
     * 棕色蜡烛。
     * 
     * Represents a brown candle within Minecraft.
     */
    static readonly brownCandle: BlockType;
    /**
     * 插上棕色蜡烛的蛋糕。
     * 
     * Represents a brown candle cake within Minecraft.
     */
    static readonly brownCandleCake: BlockType;
    /**
     * 棕色带釉陶瓦。
     * 
     * Represents a brown glazed terracotta block within Minecraft.
     */
    static readonly brownGlazedTerracotta: BlockType;
    /**
     * 棕色蘑菇。
     * 
     * Represents a brown mushroom within Minecraft.
     */
    static readonly brownMushroom: BlockType;
    /**
     * 棕色蘑菇方块。
     * 
     * Represents a block of brown mushroom within Minecraft.
     */
    static readonly brownMushroomBlock: BlockType;
    /**
     * 棕色羊毛。
     */
    static readonly brownWool: BlockType;
    /**
     * 气泡柱。
     * 
     * Represents a column of bubbles within Minecraft.
     */
    static readonly bubbleColumn: BlockType;
    /**
     * 紫水晶母岩。
     * 
     * Represents a block of budding amethyst within Minecraft.
     */
    static readonly buddingAmethyst: BlockType;
    /**
     * 仙人掌。
     * 
     * Represents a cactus within Minecraft.
     */
    static readonly cactus: BlockType;
    /**
     * 蛋糕。
     * 
     * Represents a cake within Minecraft.
     */
    static readonly cake: BlockType;
    /**
     * 方解石。
     * 
     * Represents a calcite block within Minecraft.
     */
    static readonly calcite: BlockType;
    /**
     * 相机。
     * 
     * Represents a camera within Minecraft Education Edition. It
     * is not available in Minecraft Bedrock Edition.
     */
    static readonly camera: BlockType;
    /**
     * 营火。
     * 
     * Represents a campfire within Minecraft.
     */
    static readonly campfire: BlockType;
    /**
     * 蜡烛。
     * 
     * Represents a candle within Minecraft.
     */
    static readonly candle: BlockType;
    /**
     * 插上蜡烛的蛋糕。
     * 
     * Represents a cake with candles within Minecraft.
     */
    static readonly candleCake: BlockType;
    /**
     * 地毯。
     * 
     * Represents a carpet within Minecraft.
     */
    static readonly carpet: BlockType;
    /**
     * 胡萝卜。
     * 
     * Represents carrots within Minecraft.
     */
    static readonly carrots: BlockType;
    /**
     * 制图台。
     * 
     * Represents a cartography table block within Minecraft.
     */
    static readonly cartographyTable: BlockType;
    /**
     * 雕刻过的南瓜。
     * 
     * Represents a carved pumpkin within Minecraft.
     */
    static readonly carvedPumpkin: BlockType;
    /**
     * 炼药锅。
     * 
     * Represents a cauldron within Minecraft.
     */
    static readonly cauldron: BlockType;
    /**
     * 洞穴藤蔓。
     * 
     * Represents a set of cave vines within Minecraft.
     */
    static readonly caveVines: BlockType;
    /**
     * 洞穴藤蔓植株。
     * 
     * Represents the body of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly caveVinesBodyWithBerries: BlockType;
    /**
     * 洞穴藤蔓植株。
     * 
     * Represents the head of a set of cave vines with berries
     * within Minecraft.
     */
    static readonly caveVinesHeadWithBerries: BlockType;
    /**
     * 锁链。
     * 
     * Represents a metallic chain within Minecraft.
     */
    static readonly chain: BlockType;
    /**
     * 连锁型命令方块。
     * 
     * Represents a block that gives off heat but not light, within
     * Minecraft Education Edition or Bedrock Edition with
     * Education features.
     */
    static readonly chainCommandBlock: BlockType;
    /**
     * 加热块。
     * 
     * Represents a chemical heat block within Minecraft.
     */
    static readonly chemicalHeat: BlockType;
    /**
     * 化合物创建器/材料分解器/元素构造器/实验台。
     * 
     * Represents a chemistry table within Minecraft Education
     * experiences.
     */
    static readonly chemistryTable: BlockType;
    /**
     * 箱子。
     * 
     * Represents a chest within Minecraft.
     */
    static readonly chest: BlockType;
    /**
     * 雕纹书架。
     */
    static readonly chiseledBookshelf: BlockType;
    /**
     * 雕纹深板岩。
     * 
     * Represents a set of chiseled deepslate within Minecraft.
     */
    static readonly chiseledDeepslate: BlockType;
    /**
     * 雕纹下界砖块。
     * 
     * Represents a block of chiseled nether bricks within
     * Minecraft.
     */
    static readonly chiseledNetherBricks: BlockType;
    /**
     * 雕纹磨制黑石。
     * 
     * Represents a block of chiseled polished blackstone within
     * Minecraft.
     */
    static readonly chiseledPolishedBlackstone: BlockType;
    /**
     * 紫颂花。
     * 
     * Represents a chorus flower within Minecraft.
     */
    static readonly chorusFlower: BlockType;
    /**
     * 紫颂植株。
     * 
     * Represents a chorus plant within Minecraft.
     */
    static readonly chorusPlant: BlockType;
    /**
     * 黏土块。
     * 
     * Represents a block of clay within Minecraft.
     */
    static readonly clay: BlockType;
    /**
     * 客户端请求占位符方块。
     */
    static readonly clientRequestPlaceholderBlock: BlockType;
    /**
     * 煤炭块。
     * 
     * Represents a block of solid coal within Minecraft.
     */
    static readonly coalBlock: BlockType;
    /**
     * 煤矿石。
     * 
     * Represents a block with embedded coal ore within Minecraft.
     */
    static readonly coalOre: BlockType;
    /**
     * 深板岩圆石。
     * 
     * Represents a block of cobbled deepslate within Minecraft.
     */
    static readonly cobbledDeepslate: BlockType;
    /**
     * 双层深板岩圆石台阶。
     * 
     * Represents a double slab of cobbled deepslate within
     * Minecraft.
     */
    static readonly cobbledDeepslateDoubleSlab: BlockType;
    /**
     * 深板岩圆石台阶。
     * 
     * Represents a slab of deepslate within Minecraft.
     */
    static readonly cobbledDeepslateSlab: BlockType;
    /**
     * 深板岩圆石楼梯。
     * 
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly cobbledDeepslateStairs: BlockType;
    /**
     * 深板岩圆石墙。
     * 
     * Represents a cobbled deepslate wall within Minecraft.
     */
    static readonly cobbledDeepslateWall: BlockType;
    /**
     * 圆石。
     * 
     * Represents a block of cobblestone within Minecraft.
     */
    static readonly cobblestone: BlockType;
    /**
     * 圆石墙/苔石墙/花岗岩墙/闪长岩墙/安山岩墙/砂岩墙/红砖墙/石砖墙/苔石砖墙/末地石砖墙/下界砖墙/海晶石墙/红砂岩墙/红色下界砖墙。
     * 
     * Represents a wall of cobblestone within Minecraft.
     */
    static readonly cobblestoneWall: BlockType;
    /**
     * 可可果。
     * 
     * Represents a set of cocoa beans (typically on a tree) within
     * Minecraft.
     */
    static readonly cocoa: BlockType;
    /**
     * 蓝色火把/紫色火把。
     * 
     * Represents blue/purple torches within Minecraft.
     */
    static readonly coloredTorchBp: BlockType;
    /**
     * 红色火把/绿色火把。
     * 
     * Represents red/green torches within Minecraft.
     */
    static readonly coloredTorchRg: BlockType;
    /**
     * 命令方块。
     * 
     * Represents a block that can run commands within Minecraft.
     */
    static readonly commandBlock: BlockType;
    /**
     * 堆肥桶。
     * 
     * Represents a composter block within Minecraft.
     */
    static readonly composter: BlockType;
    /**
     * 混凝土。
     * 
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly concrete: BlockType;
    /**
     * 混凝土粉末。
     * 
     * Represents a block of concrete powder within Minecraft.
     */
    static readonly concretePowder: BlockType;
    /**
     * 潮涌核心。
     * 
     * Represents a conduit block within Minecraft.
     */
    static readonly conduit: BlockType;
    /**
     * 铜块。
     * 
     * Represents a solid block of copper within Minecraft.
     */
    static readonly copperBlock: BlockType;
    /**
     * 铜矿石。
     * 
     * Represents a block with embedded copper ore within
     * Minecraft.
     */
    static readonly copperOre: BlockType;
    /**
     * 珊瑚。
     * 
     * Represents coral within Minecraft.
     */
    static readonly coral: BlockType;
    /**
     * 珊瑚块。
     * 
     * Represents a solid block of coral within Minecraft.
     */
    static readonly coralBlock: BlockType;
    /**
     * 珊瑚扇。
     * 
     * Represents a fan formation of coral within Minecraft.
     */
    static readonly coralFan: BlockType;
    /**
     * 失活的珊瑚扇。
     * 
     * Represents a fan formation of dead coral within Minecraft.
     */
    static readonly coralFanDead: BlockType;
    /**
     * 墙上的珊瑚扇。
     * 
     * Represents a hanging fan formation of coral within
     * Minecraft.
     */
    static readonly coralFanHang: BlockType;
    /**
     * 墙上的珊瑚扇。
     * 
     * Represents an alternate hanging fan formation of coral (#2)
     * within Minecraft.
     */
    static readonly coralFanHang2: BlockType;
    /**
     * 墙上的珊瑚扇。
     * 
     * Represents an alternate hanging fan formation of coral (#3)
     * within Minecraft.
     */
    static readonly coralFanHang3: BlockType;
    /**
     * 裂纹深板岩砖。
     * 
     * Represents a block of cracked deepslate bricks within
     * Minecraft.
     */
    static readonly crackedDeepslateBricks: BlockType;
    /**
     * 裂纹深板岩瓦。
     * 
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly crackedDeepslateTiles: BlockType;
    /**
     * 裂纹下界砖块。
     * 
     * Represents a block of cracked nether bricks within
     * Minecraft.
     */
    static readonly crackedNetherBricks: BlockType;
    /**
     * 裂纹磨制黑石砖。
     * 
     * Represents a block of cracked and polished blackstone bricks
     * within Minecraft.
     */
    static readonly crackedPolishedBlackstoneBricks: BlockType;
    /**
     * 工作台。
     * 
     * Represents a crafting table within Minecraft.
     */
    static readonly craftingTable: BlockType;
    /**
     * 绯红木按钮。
     * 
     * Represents a crimson button within Minecraft.
     */
    static readonly crimsonButton: BlockType;
    /**
     * 绯红木门。
     * 
     * Represents a crimson door within Minecraft.
     */
    static readonly crimsonDoor: BlockType;
    /**
     * 双绯红木台阶。
     * 
     * Represents a crimson double slab within Minecraft.
     */
    static readonly crimsonDoubleSlab: BlockType;
    /**
     * 绯红木栅栏。
     * 
     * Represents a crimson fence within Minecraft.
     */
    static readonly crimsonFence: BlockType;
    /**
     * 绯红木栅栏门。
     * 
     * Represents a crimson fence gate within Minecraft.
     */
    static readonly crimsonFenceGate: BlockType;
    /**
     * 绯红菌。
     * 
     * Represents a crimson fungus within Minecraft.
     */
    static readonly crimsonFungus: BlockType;
    /**
     * 悬挂式绯红木告示牌。
     */
    static readonly crimsonHangingSign: BlockType;
    /**
     * 绯红菌核。
     * 
     * Represents crimson hyphae within Minecraft.
     */
    static readonly crimsonHyphae: BlockType;
    /**
     * 绯红菌岩。
     * 
     * Represents crimson nylium within Minecraft.
     */
    static readonly crimsonNylium: BlockType;
    /**
     * 绯红木板。
     * 
     * Represents a set of crimson planks within Minecraft.
     */
    static readonly crimsonPlanks: BlockType;
    /**
     * 绯红木压力板。
     * 
     * Represents a crimson pressure plate within Minecraft.
     */
    static readonly crimsonPressurePlate: BlockType;
    /**
     * 绯红菌索。
     * 
     * Represents a set of crimson roots within Minecraft.
     */
    static readonly crimsonRoots: BlockType;
    /**
     * 绯红木台阶。
     * 
     * Represents a crimson slab within Minecraft.
     */
    static readonly crimsonSlab: BlockType;
    /**
     * 绯红木楼梯。
     * 
     * Represents a set of crimson stairs within Minecraft.
     */
    static readonly crimsonStairs: BlockType;
    /**
     * 绯红木告示牌。
     * 
     * Represents a crimson standing sign within Minecraft.
     */
    static readonly crimsonStandingSign: BlockType;
    /**
     * 绯红菌柄。
     * 
     * Represents a crimson stem within Minecraft.
     */
    static readonly crimsonStem: BlockType;
    /**
     * 绯红木活板门。
     * 
     * Represents a crimson trapdoor within Minecraft.
     */
    static readonly crimsonTrapdoor: BlockType;
    /**
     * 墙上的绯红木告示牌。
     * 
     * Represents a crimson wall sign within Minecraft.
     */
    static readonly crimsonWallSign: BlockType;
    /**
     * 哭泣的黑曜石。
     * 
     * Represents crying obsidian within Minecraft.
     */
    static readonly cryingObsidian: BlockType;
    /**
     * 切制铜块。
     * 
     * Represents a cut copper block within Minecraft.
     */
    static readonly cutCopper: BlockType;
    /**
     * 切制铜台阶。
     * 
     * Represents a cut copper slab within Minecraft.
     */
    static readonly cutCopperSlab: BlockType;
    /**
     * 切制铜楼梯。
     * 
     * Represents a set of cut copper stairs within Minecraft.
     */
    static readonly cutCopperStairs: BlockType;
    /**
     * 青色蜡烛。
     * 
     * Represents a cyan-colored candle within Minecraft.
     */
    static readonly cyanCandle: BlockType;
    /**
     * 插上青色蜡烛的蛋糕。
     * 
     * Represents a cake with a cyan-colored candle within
     * Minecraft.
     */
    static readonly cyanCandleCake: BlockType;
    /**
     * 青色带釉陶瓦。
     * 
     * Represents a block of cyan-colored glazed terracotta within
     * Minecraft.
     */
    static readonly cyanGlazedTerracotta: BlockType;
    /**
     * 青色羊毛。
     */
    static readonly cyanWool: BlockType;
    /**
     * 深色橡木按钮。
     * 
     * Represents a dark oak button within Minecraft.
     */
    static readonly darkOakButton: BlockType;
    /**
     * 深色橡木门。
     * 
     * Represents a dark oak door within Minecraft.
     */
    static readonly darkOakDoor: BlockType;
    /**
     * 深色橡木栅栏门。
     * 
     * Represents a dark oak fence gate within Minecraft.
     */
    static readonly darkOakFenceGate: BlockType;
    /**
     * 悬挂式深色橡木告示牌。
     */
    static readonly darkOakHangingSign: BlockType;
    /**
     * 深色橡木压力板。
     * 
     * Represents a dark oak pressure plate within Minecraft.
     */
    static readonly darkOakPressurePlate: BlockType;
    /**
     * 深色橡木楼梯。
     * 
     * Represents a set of dark oak stairs within Minecraft.
     */
    static readonly darkOakStairs: BlockType;
    /**
     * 深色橡木告示牌。
     * 
     * Represents a dark oak standing sign within Minecraft.
     */
    static readonly darkoakStandingSign: BlockType;
    /**
     * 深色橡木活板门。
     * 
     * Represents a dark oak trapdoor within Minecraft.
     */
    static readonly darkOakTrapdoor: BlockType;
    /**
     * 墙上的深色橡木告示牌。
     * 
     * Represents a dark oak wall sign within Minecraft.
     */
    static readonly darkoakWallSign: BlockType;
    /**
     * 暗海晶石楼梯。
     * 
     * Represents a set of dark prismarine stairs within Minecraft.
     */
    static readonly darkPrismarineStairs: BlockType;
    /**
     * 阳光探测器。
     * 
     * Represents a daylight detector within Minecraft.
     */
    static readonly daylightDetector: BlockType;
    /**
     * 反向阳光探测器。
     * 
     * Represents an inverted daylight detector within Minecraft.
     */
    static readonly daylightDetectorInverted: BlockType;
    /**
     * 枯萎的灌木。
     * 
     * Represents a dead bush within Minecraft.
     */
    static readonly deadbush: BlockType;
    /**
     * 深板岩。
     * 
     * Represents a block of deepslate within Minecraft.
     */
    static readonly deepslate: BlockType;
    /**
     * 双层深板岩砖台阶。
     * 
     * Represents a double slab of deepslate brick within
     * Minecraft.
     */
    static readonly deepslateBrickDoubleSlab: BlockType;
    /**
     * 深板岩砖。
     * 
     * Represents a block of deepslate bricks within Minecraft.
     */
    static readonly deepslateBricks: BlockType;
    /**
     * 深板岩砖台阶。
     * 
     * Represents a slab of deepslate brick within Minecraft.
     */
    static readonly deepslateBrickSlab: BlockType;
    /**
     * 深板岩砖楼梯。
     * 
     * Represents a set of deepslate brick stairs within Minecraft.
     */
    static readonly deepslateBrickStairs: BlockType;
    /**
     * 深板岩砖墙。
     * 
     * Represents a deepslate brick wall within Minecraft.
     */
    static readonly deepslateBrickWall: BlockType;
    /**
     * 深层煤矿石。
     * 
     * Represents a block of deepslate with embedded coal ore
     * within Minecraft.
     */
    static readonly deepslateCoalOre: BlockType;
    /**
     * 深层铜矿石。
     * 
     * Represents a block of deepslate with embedded copper ore
     * within Minecraft.
     */
    static readonly deepslateCopperOre: BlockType;
    /**
     * 深层钻石矿石。
     * 
     * Represents a block of deepslate with embedded diamond ore
     * within Minecraft.
     */
    static readonly deepslateDiamondOre: BlockType;
    /**
     * 深层绿宝石矿石。
     * 
     * Represents a block of deepslate with embedded emerald ore
     * within Minecraft.
     */
    static readonly deepslateEmeraldOre: BlockType;
    /**
     * 深层金矿石。
     * 
     * Represents a block of deepslate with embedded gold ore
     * within Minecraft.
     */
    static readonly deepslateGoldOre: BlockType;
    /**
     * 深层铁矿石。
     * 
     * Represents a block of deepslate with embedded iron ore
     * within Minecraft.
     */
    static readonly deepslateIronOre: BlockType;
    /**
     * 深层青金石矿石。
     * 
     * Represents a block of deepslate with embedded lapis lazuli
     * ore within Minecraft.
     */
    static readonly deepslateLapisOre: BlockType;
    /**
     * 深层红石矿石。
     * 
     * Represents a block of deepslate with embedded redstone ore
     * within Minecraft.
     */
    static readonly deepslateRedstoneOre: BlockType;
    /**
     * 双层深板岩瓦台阶。
     * 
     * Represents a double slab of tiled deepslate within
     * Minecraft.
     */
    static readonly deepslateTileDoubleSlab: BlockType;
    /**
     * 深板岩瓦。
     * 
     * Represents a set of deepslate tiles within Minecraft.
     */
    static readonly deepslateTiles: BlockType;
    /**
     * 深板岩瓦台阶。
     * 
     * Represents a slab of deepslate tiles within Minecraft.
     */
    static readonly deepslateTileSlab: BlockType;
    /**
     * 深板岩瓦楼梯。
     * 
     * Represents a set of deepslate tile stairs within Minecraft.
     */
    static readonly deepslateTileStairs: BlockType;
    /**
     * 深板岩瓦墙。
     * 
     * Represents a wall of deepslate tile within Minecraft.
     */
    static readonly deepslateTileWall: BlockType;
    /**
     * 拒绝方块。
     * 
     * Represents a logical but generally invisible Deny logic
     * block within Minecraft.
     */
    static readonly deny: BlockType;
    /**
     * 探测铁轨。
     * 
     * Represents a detector rail within Minecraft.
     */
    static readonly detectorRail: BlockType;
    /**
     * 钻石块。
     * 
     * Represents a block of diamond within Minecraft.
     */
    static readonly diamondBlock: BlockType;
    /**
     * 钻石矿石。
     * 
     * Represents a block with embedded diamond ore within
     * Minecraft.
     */
    static readonly diamondOre: BlockType;
    /**
     * 闪长岩楼梯。
     * 
     * Represents a set of diorite stairs within Minecraft.
     */
    static readonly dioriteStairs: BlockType;
    /**
     * 泥土/砂土。
     * 
     * Represents a block of dirt within Minecraft.
     */
    static readonly dirt: BlockType;
    /**
     * 缠根泥土。
     * 
     * Represents a block of dirt with roots within Minecraft.
     */
    static readonly dirtWithRoots: BlockType;
    /**
     * 发射器。
     * 
     * Represents a dispenser within Minecraft.
     */
    static readonly dispenser: BlockType;
    /**
     * 双切制铜台阶。
     * 
     * Represents a slab of double cut copper within Minecraft.
     */
    static readonly doubleCutCopperSlab: BlockType;
    /**
     * 向日葵/丁香/高草丛/大型蕨/玫瑰丛/牡丹。
     * 
     * Represents a double plant within Minecraft.
     */
    static readonly doublePlant: BlockType;
    /**
     * 双层平滑石头台阶/双层砂岩台阶/双层石化橡木台阶/双层圆石台阶/双层红砖台阶/双层石砖台阶/双层石英台阶/双层下界砖台阶。
     */
    static readonly doubleStoneBlockSlab: BlockType;
    /**
     * 双层红砂岩台阶/双层紫珀台阶/双层海晶石台阶/双层暗海晶石台阶/双层海晶石砖台阶/双层苔石台阶/双层平滑砂岩台阶/双层红色下界砖台阶。
     */
    static readonly doubleStoneBlockSlab2: BlockType;
    /**
     * 双层末地石砖台阶/双层平滑红砂岩台阶/双层磨制安山岩台阶/双层安山岩台阶/双层闪长岩台阶/双层磨制闪长岩台阶/双层花岗岩台阶/双层磨制花岗岩台阶。
     */
    static readonly doubleStoneBlockSlab3: BlockType;
    /**
     * 双层苔石砖台阶/双层平滑石英台阶/双层石头台阶/双层切制砂岩台阶/双层切制红砂岩台阶。
     */
    static readonly doubleStoneBlockSlab4: BlockType;
    /**
     * 双层平滑石头台阶/双层砂岩台阶/双层石化橡木台阶/双层圆石台阶/双层红砖台阶/双层石砖台阶/双层石英台阶/双层下界砖台阶。
     * 
     * Represents a double slab of stone within Minecraft.
     */
    static readonly doubleStoneSlab: BlockType;
    /**
     * 双层红砂岩台阶/双层紫珀台阶/双层海晶石台阶/双层暗海晶石台阶/双层海晶石砖台阶/双层苔石台阶/双层平滑砂岩台阶/双层红色下界砖台阶。
     * 
     * Represents an alternate double slab of stone (#2) within
     * Minecraft.
     */
    static readonly doubleStoneSlab2: BlockType;
    /**
     * 双层末地石砖台阶/双层平滑红砂岩台阶/双层磨制安山岩台阶/双层安山岩台阶/双层闪长岩台阶/双层磨制闪长岩台阶/双层花岗岩台阶/双层磨制花岗岩台阶。
     * 
     * Represents an alternate double slab of stone (#3) within
     * Minecraft.
     */
    static readonly doubleStoneSlab3: BlockType;
    /**
     * 双层苔石砖台阶/双层平滑石英台阶/双层石头台阶/双层切制砂岩台阶/双层切制红砂岩台阶。
     * 
     * Represents an alternate double slab of stone (#4) within
     * Minecraft.
     */
    static readonly doubleStoneSlab4: BlockType;
    /**
     * 双层橡木台阶/双层云杉木台阶/双层白桦木台阶/双层丛林木台阶/双层金合欢木台阶/双层深色橡木台阶。
     * 
     * Represents a double slab of wood within Minecraft.
     */
    static readonly doubleWoodenSlab: BlockType;
    /**
     * 龙蛋。
     * 
     * Represents a dragon egg within Minecraft.
     */
    static readonly dragonEgg: BlockType;
    /**
     * 干海带块。
     * 
     * Represents a block of dried kelp within Minecraft.
     */
    static readonly driedKelpBlock: BlockType;
    /**
     * 滴水石块。
     * 
     * Represents a block of dripstone within Minecraft.
     */
    static readonly dripstoneBlock: BlockType;
    /**
     * 投掷器。
     * 
     * Represents a dropper within Minecraft.
     */
    static readonly dropper: BlockType;
    /**
     * ???。
     * 
     * Represents an element in Minecraft Education experiences.
     */
    static readonly element0: BlockType;
    /**
     * 氢。
     * 
     * Represents the hydrogen element in Minecraft Education
     * experiences.
     */
    static readonly element1: BlockType;
    /**
     * 氖。
     * 
     * Represents the neon element in Minecraft Education
     * experiences.
     */
    static readonly element10: BlockType;
    /**
     * 镄。
     * 
     * Represents the fermium element in Minecraft Education
     * experiences.
     */
    static readonly element100: BlockType;
    /**
     * 钔。
     * 
     * Represents the mendelevium element in Minecraft Education
     * experiences.
     */
    static readonly element101: BlockType;
    /**
     * 锘。
     * 
     * Represents the nobelium element in Minecraft Education
     * experiences.
     */
    static readonly element102: BlockType;
    /**
     * 铹。
     * 
     * Represents the lawrencium element in Minecraft Education
     * experiences.
     */
    static readonly element103: BlockType;
    /**
     * 鑪。
     * 
     * Represents the rutherfordium element in Minecraft Education
     * experiences.
     */
    static readonly element104: BlockType;
    /**
     * 𨧀。
     * 
     * Represents the dubnium element in Minecraft Education
     * experiences.
     */
    static readonly element105: BlockType;
    /**
     * 𨭎。
     * 
     * Represents the seaborgium element in Minecraft Education
     * experiences.
     */
    static readonly element106: BlockType;
    /**
     * 𨨏。
     * 
     * Represents the bohrium element in Minecraft Education
     * experiences.
     */
    static readonly element107: BlockType;
    /**
     * 𨭆。
     * 
     * Represents the hassium element in Minecraft Education
     * experiences.
     */
    static readonly element108: BlockType;
    /**
     * 䥑。
     * 
     * Represents the meitnerium element in Minecraft Education
     * experiences.
     */
    static readonly element109: BlockType;
    /**
     * 钠。
     * 
     * Represents the sodium element in Minecraft Education
     * experiences.
     */
    static readonly element11: BlockType;
    /**
     * 鐽。
     * 
     * Represents the darmstadtium element in Minecraft Education
     * experiences.
     */
    static readonly element110: BlockType;
    /**
     * 錀。
     * 
     * Represents the roentgenium element in Minecraft Education
     * experiences.
     */
    static readonly element111: BlockType;
    /**
     * 鎶。
     * 
     * Represents the copernicium element in Minecraft Education
     * experiences.
     */
    static readonly element112: BlockType;
    /**
     * 鉨。
     * 
     * Represents the nihonium element in Minecraft Education
     * experiences.
     */
    static readonly element113: BlockType;
    /**
     * 鈇。
     * 
     * Represents the flerovium element in Minecraft Education
     * experiences.
     */
    static readonly element114: BlockType;
    /**
     * 镆。
     * 
     * Represents the moscovium element in Minecraft Education
     * experiences.
     */
    static readonly element115: BlockType;
    /**
     * 鉝。
     * 
     * Represents the livermorium element in Minecraft Education
     * experiences.
     */
    static readonly element116: BlockType;
    /**
     * Tennessine。
     * 
     * Represents the tennessine element in Minecraft Education
     * experiences.
     */
    static readonly element117: BlockType;
    /**
     * Oganesson。
     * 
     * Represents the oganesson element in Minecraft Education
     * experiences.
     */
    static readonly element118: BlockType;
    /**
     * 镁。
     * 
     * Represents the magnesium element in Minecraft Education
     * experiences.
     */
    static readonly element12: BlockType;
    /**
     * 铝。
     * 
     * Represents the aluminum element in Minecraft Education
     * experiences.
     */
    static readonly element13: BlockType;
    /**
     * 硅。
     * 
     * Represents the silicon element in Minecraft Education
     * experiences.
     */
    static readonly element14: BlockType;
    /**
     * 磷。
     * 
     * Represents the phosphorus element in Minecraft Education
     * experiences.
     */
    static readonly element15: BlockType;
    /**
     * 硫。
     * 
     * Represents the sulfur element in Minecraft Education
     * experiences.
     */
    static readonly element16: BlockType;
    /**
     * 氯。
     * 
     * Represents the chlorine element in Minecraft Education
     * experiences.
     */
    static readonly element17: BlockType;
    /**
     * 氩。
     * 
     * Represents the argon element in Minecraft Education
     * experiences.
     */
    static readonly element18: BlockType;
    /**
     * 钾。
     * 
     * Represents the potassium element in Minecraft Education
     * experiences.
     */
    static readonly element19: BlockType;
    /**
     * 氦。
     * 
     * Represents the helium element in Minecraft Education
     * experiences.
     */
    static readonly element2: BlockType;
    /**
     * 钙。
     * 
     * Represents the calcium element in Minecraft Education
     * experiences.
     */
    static readonly element20: BlockType;
    /**
     * 钪。
     * 
     * Represents the scandium element in Minecraft Education
     * experiences.
     */
    static readonly element21: BlockType;
    /**
     * 钛。
     * 
     * Represents the titanium element in Minecraft Education
     * experiences.
     */
    static readonly element22: BlockType;
    /**
     * 钒。
     * 
     * Represents the vanadium element in Minecraft Education
     * experiences.
     */
    static readonly element23: BlockType;
    /**
     * 铬。
     * 
     * Represents the chromium element in Minecraft Education
     * experiences.
     */
    static readonly element24: BlockType;
    /**
     * 锰。
     * 
     * Represents the manganese element in Minecraft Education
     * experiences.
     */
    static readonly element25: BlockType;
    /**
     * 铁。
     * 
     * Represents the iron element in Minecraft Education
     * experiences.
     */
    static readonly element26: BlockType;
    /**
     * 钴。
     * 
     * Represents the cobalt element in Minecraft Education
     * experiences.
     */
    static readonly element27: BlockType;
    /**
     * 镍。
     * 
     * Represents the nickel element in Minecraft Education
     * experiences.
     */
    static readonly element28: BlockType;
    /**
     * 铜。
     * 
     * Represents the copper element in Minecraft Education
     * experiences.
     */
    static readonly element29: BlockType;
    /**
     * 锂。
     * 
     * Represents a lithium element in Minecraft Education
     * experiences.
     */
    static readonly element3: BlockType;
    /**
     * 锌。
     * 
     * Represents the zinc element in Minecraft Education
     * experiences.
     */
    static readonly element30: BlockType;
    /**
     * 镓。
     * 
     * Represents the gallium element in Minecraft Education
     * experiences.
     */
    static readonly element31: BlockType;
    /**
     * 锗。
     * 
     * Represents a germanium element in Minecraft Education
     * experiences.
     */
    static readonly element32: BlockType;
    /**
     * 砷。
     * 
     * Represents the arsenic element in Minecraft Education
     * experiences.
     */
    static readonly element33: BlockType;
    /**
     * 硒。
     * 
     * Represents the selenium element in Minecraft Education
     * experiences.
     */
    static readonly element34: BlockType;
    /**
     * 溴。
     * 
     * Represents the bromine element in Minecraft Education
     * experiences.
     */
    static readonly element35: BlockType;
    /**
     * 氪。
     * 
     * Represents the krypton element in Minecraft Education
     * experiences.
     */
    static readonly element36: BlockType;
    /**
     * 铷。
     * 
     * Represents the rubidium element in Minecraft Education
     * experiences.
     */
    static readonly element37: BlockType;
    /**
     * 锶。
     * 
     * Represents the strontium element in Minecraft Education
     * experiences.
     */
    static readonly element38: BlockType;
    /**
     * 钇。
     * 
     * Represents the yttrium element in Minecraft Education
     * experiences.
     */
    static readonly element39: BlockType;
    /**
     * 铍。
     * 
     * Represents a beryllium element in Minecraft Education
     * experiences.
     */
    static readonly element4: BlockType;
    /**
     * 锆。
     * 
     * Represents the zirconium element in Minecraft Education
     * experiences.
     */
    static readonly element40: BlockType;
    /**
     * 铌。
     * 
     * Represents the niobium element in Minecraft Education
     * experiences.
     */
    static readonly element41: BlockType;
    /**
     * 钼。
     * 
     * Represents the molybdenum element in Minecraft Education
     * experiences.
     */
    static readonly element42: BlockType;
    /**
     * 锝。
     * 
     * Represents the technetium element in Minecraft Education
     * experiences.
     */
    static readonly element43: BlockType;
    /**
     * 钌。
     * 
     * Represents the ruthenium element in Minecraft Education
     * experiences.
     */
    static readonly element44: BlockType;
    /**
     * 铑。
     * 
     * Represents the rhodium element in Minecraft Education
     * experiences.
     */
    static readonly element45: BlockType;
    /**
     * 钯。
     * 
     * Represents the palladium element in Minecraft Education
     * experiences.
     */
    static readonly element46: BlockType;
    /**
     * 银。
     * 
     * Represents the silver element in Minecraft Education
     * experiences.
     */
    static readonly element47: BlockType;
    /**
     * 镉。
     * 
     * Represents the cadmium element in Minecraft Education
     * experiences.
     */
    static readonly element48: BlockType;
    /**
     * 铟。
     * 
     * Represents the indium element in Minecraft Education
     * experiences.
     */
    static readonly element49: BlockType;
    /**
     * 硼。
     * 
     * Represents the boron element in Minecraft Education
     * experiences.
     */
    static readonly element5: BlockType;
    /**
     * 锡。
     * 
     * Represents the tin element in Minecraft Education
     * experiences.
     */
    static readonly element50: BlockType;
    /**
     * 锑。
     * 
     * Represents the antimony element in Minecraft Education
     * experiences.
     */
    static readonly element51: BlockType;
    /**
     * 碲。
     * 
     * Represents the tellurium element in Minecraft Education
     * experiences.
     */
    static readonly element52: BlockType;
    /**
     * 碘。
     * 
     * Represents the iodine element in Minecraft Education
     * experiences.
     */
    static readonly element53: BlockType;
    /**
     * 氙。
     * 
     * Represents the xenon element in Minecraft Education
     * experiences.
     */
    static readonly element54: BlockType;
    /**
     * 铯。
     * 
     * Represents the cesium element in Minecraft Education
     * experiences.
     */
    static readonly element55: BlockType;
    /**
     * 钡。
     * 
     * Represents the barium element in Minecraft Education
     * experiences.
     */
    static readonly element56: BlockType;
    /**
     * 镧。
     * 
     * Represents the lanthanum element in Minecraft Education
     * experiences.
     */
    static readonly element57: BlockType;
    /**
     * 铈。
     * 
     * Represents the cerium element in Minecraft Education
     * experiences.
     */
    static readonly element58: BlockType;
    /**
     * 镨。
     * 
     * Represents the praseodymium element in Minecraft Education
     * experiences.
     */
    static readonly element59: BlockType;
    /**
     * 碳。
     * 
     * Represents the carbon element in Minecraft Education
     * experiences.
     */
    static readonly element6: BlockType;
    /**
     * 钕。
     * 
     * Represents the neodymium element in Minecraft Education
     * experiences.
     */
    static readonly element60: BlockType;
    /**
     * 钷。
     * 
     * Represents the promethium element in Minecraft Education
     * experiences.
     */
    static readonly element61: BlockType;
    /**
     * 钐。
     * 
     * Represents the samarium element in Minecraft Education
     * experiences.
     */
    static readonly element62: BlockType;
    /**
     * 铕。
     * 
     * Represents the europium element in Minecraft Education
     * experiences.
     */
    static readonly element63: BlockType;
    /**
     * 钆。
     * 
     * Represents the gadolinium element in Minecraft Education
     * experiences.
     */
    static readonly element64: BlockType;
    /**
     * 铽。
     * 
     * Represents a terbium element in Minecraft Education
     * experiences.
     */
    static readonly element65: BlockType;
    /**
     * 镝。
     * 
     * Represents the dysprosium element in Minecraft Education
     * experiences.
     */
    static readonly element66: BlockType;
    /**
     * 钬。
     * 
     * Represents the holmium element in Minecraft Education
     * experiences.
     */
    static readonly element67: BlockType;
    /**
     * 铒。
     * 
     * Represents the erbium element in Minecraft Education
     * experiences.
     */
    static readonly element68: BlockType;
    /**
     * 铥。
     * 
     * Represents the thulium element in Minecraft Education
     * experiences.
     */
    static readonly element69: BlockType;
    /**
     * 氮。
     * 
     * Represents the nitrogen element in Minecraft Education
     * experiences.
     */
    static readonly element7: BlockType;
    /**
     * 镱。
     * 
     * Represents the ytterbium element in Minecraft Education
     * experiences.
     */
    static readonly element70: BlockType;
    /**
     * 镥。
     * 
     * Represents the lutetium element in Minecraft Education
     * experiences.
     */
    static readonly element71: BlockType;
    /**
     * 铪。
     * 
     * Represents a hafnium element in Minecraft Education
     * experiences.
     */
    static readonly element72: BlockType;
    /**
     * 钽。
     * 
     * Represents the tantalum element in Minecraft Education
     * experiences.
     */
    static readonly element73: BlockType;
    /**
     * 钨。
     * 
     * Represents the tungsten element in Minecraft Education
     * experiences.
     */
    static readonly element74: BlockType;
    /**
     * 铼。
     * 
     * Represents the rhenium element in Minecraft Education
     * experiences.
     */
    static readonly element75: BlockType;
    /**
     * 锇。
     * 
     * Represents the osmium element in Minecraft Education
     * experiences.
     */
    static readonly element76: BlockType;
    /**
     * 铱。
     * 
     * Represents the iridium element in Minecraft Education
     * experiences.
     */
    static readonly element77: BlockType;
    /**
     * 铂。
     * 
     * Represents the platinum element in Minecraft Education
     * experiences.
     */
    static readonly element78: BlockType;
    /**
     * 金。
     * 
     * Represents the gold element in Minecraft Education
     * experiences.
     */
    static readonly element79: BlockType;
    /**
     * 氧。
     * 
     * Represents the oxygen element in Minecraft Education
     * experiences.
     */
    static readonly element8: BlockType;
    /**
     * 汞。
     * 
     * Represents the mercury element in Minecraft Education
     * experiences.
     */
    static readonly element80: BlockType;
    /**
     * 铊。
     * 
     * Represents the thallium element in Minecraft Education
     * experiences.
     */
    static readonly element81: BlockType;
    /**
     * 铅。
     * 
     * Represents the lead element in Minecraft Education
     * experiences.
     */
    static readonly element82: BlockType;
    /**
     * 铋。
     * 
     * Represents the bismuth element in Minecraft Education
     * experiences.
     */
    static readonly element83: BlockType;
    /**
     * 钋。
     * 
     * Represents the polonium element in Minecraft Education
     * experiences.
     */
    static readonly element84: BlockType;
    /**
     * 砹。
     * 
     * Represents the astatine element in Minecraft Education
     * experiences.
     */
    static readonly element85: BlockType;
    /**
     * 氡。
     * 
     * Represents the radon element in Minecraft Education
     * experiences.
     */
    static readonly element86: BlockType;
    /**
     * 钫。
     * 
     * Represents the francium element in Minecraft Education
     * experiences.
     */
    static readonly element87: BlockType;
    /**
     * 镭。
     * 
     * Represents the radium element in Minecraft Education
     * experiences.
     */
    static readonly element88: BlockType;
    /**
     * 锕。
     * 
     * Represents the actinium element in Minecraft Education
     * experiences.
     */
    static readonly element89: BlockType;
    /**
     * 氟。
     * 
     * Represents the fluorine element in Minecraft Education
     * experiences.
     */
    static readonly element9: BlockType;
    /**
     * 钍。
     * 
     * Represents the thorium element in Minecraft Education
     * experiences.
     */
    static readonly element90: BlockType;
    /**
     * 镤。
     * 
     * Represents the protactinium element in Minecraft Education
     * experiences.
     */
    static readonly element91: BlockType;
    /**
     * 铀。
     * 
     * Represents the uranium element in Minecraft Education
     * experiences.
     */
    static readonly element92: BlockType;
    /**
     * 镎。
     * 
     * Represents the neptunium element in Minecraft Education
     * experiences.
     */
    static readonly element93: BlockType;
    /**
     * 钚。
     * 
     * Represents the plutonium element in Minecraft Education
     * experiences.
     */
    static readonly element94: BlockType;
    /**
     * 镅。
     * 
     * Represents the americium element in Minecraft Education
     * experiences.
     */
    static readonly element95: BlockType;
    /**
     * 锔。
     * 
     * Represents the curium element in Minecraft Education
     * experiences.
     */
    static readonly element96: BlockType;
    /**
     * 锫。
     * 
     * Represents the berkelium element in Minecraft Education
     * experiences.
     */
    static readonly element97: BlockType;
    /**
     * 锎。
     * 
     * Represents the californium element in Minecraft Education
     * experiences.
     */
    static readonly element98: BlockType;
    /**
     * 锿。
     * 
     * Represents the einsteinium element in Minecraft Education
     * experiences.
     */
    static readonly element99: BlockType;
    /**
     * 绿宝石块。
     * 
     * Represents a block of emerald within Minecraft.
     */
    static readonly emeraldBlock: BlockType;
    /**
     * 绿宝石矿石。
     * 
     * Represents a block with embedded emerald ore within
     * Minecraft.
     */
    static readonly emeraldOre: BlockType;
    /**
     * 附魔台。
     * 
     * Represents an enchanting table within Minecraft.
     */
    static readonly enchantingTable: BlockType;
    /**
     * 末地石砖。
     * 
     * Represents an end bricks block within Minecraft.
     */
    static readonly endBricks: BlockType;
    /**
     * 末地石砖楼梯。
     * 
     * Represents a set of end brick stairs within Minecraft.
     */
    static readonly endBrickStairs: BlockType;
    /**
     * 末影箱。
     * 
     * Represents an ender chest within Minecraft.
     */
    static readonly enderChest: BlockType;
    /**
     * 末地折跃门。
     * 
     * Represents an end gateway within Minecraft.
     */
    static readonly endGateway: BlockType;
    /**
     * 末地传送门。
     * 
     * Represents an end portal block within Minecraft.
     */
    static readonly endPortal: BlockType;
    /**
     * 末地传送门框架。
     * 
     * Represents an end portal frame within Minecraft.
     */
    static readonly endPortalFrame: BlockType;
    /**
     * 末地烛。
     * 
     * Represents an end rod within Minecraft.
     */
    static readonly endRod: BlockType;
    /**
     * 末地石。
     * 
     * Represents an end stone block within Minecraft.
     */
    static readonly endStone: BlockType;
    /**
     * 斑驳的铜块。
     * 
     * Represents a block of exposed copper within Minecraft.
     */
    static readonly exposedCopper: BlockType;
    /**
     * 斑驳的切制铜块。
     * 
     * Represents a block of exposed cut copper within Minecraft.
     */
    static readonly exposedCutCopper: BlockType;
    /**
     * 斑驳的切制铜台阶。
     * 
     * Represents a slab of exposed cut copper within Minecraft.
     */
    static readonly exposedCutCopperSlab: BlockType;
    /**
     * 斑驳的切制铜楼梯。
     * 
     * Represents a set of exposed cut copper stairs within
     * Minecraft.
     */
    static readonly exposedCutCopperStairs: BlockType;
    /**
     * 斑驳的双切制铜台阶。
     * 
     * Represents a double slab of exposed cut copper within
     * Minecraft.
     */
    static readonly exposedDoubleCutCopperSlab: BlockType;
    /**
     * 耕地。
     * 
     * Represents a farmland block within Minecraft.
     */
    static readonly farmland: BlockType;
    /**
     * 橡木栅栏/云杉木栅栏/白桦木栅栏/丛林木栅栏/金合欢木栅栏/深色橡木栅栏。
     * 
     * Represents a fence within Minecraft.
     */
    static readonly fence: BlockType;
    /**
     * 橡木栅栏门。
     * 
     * Represents a fence gate within Minecraft.
     */
    static readonly fenceGate: BlockType;
    /**
     * 火。
     * 
     * Represents a fire within Minecraft.
     */
    static readonly fire: BlockType;
    /**
     * 制箭台。
     * 
     * Represents a fletching table within Minecraft.
     */
    static readonly fletchingTable: BlockType;
    /**
     * 盛开的杜鹃花丛。
     * 
     * Represents a flowering azalea plant within Minecraft.
     */
    static readonly floweringAzalea: BlockType;
    /**
     * 花盆。
     * 
     * Represents a flower pot within Minecraft.
     */
    static readonly flowerPot: BlockType;
    /**
     * 流动熔岩。
     * 
     * Represents flowing lava within Minecraft.
     */
    static readonly flowingLava: BlockType;
    /**
     * 流动水。
     * 
     * Represents flowing water within Minecraft.
     */
    static readonly flowingWater: BlockType;
    /**
     * 物品展示框。
     * 
     * Represents a frame within Minecraft.
     */
    static readonly frame: BlockType;
    /**
     * 青蛙卵。
     */
    static readonly frogSpawn: BlockType;
    /**
     * 霜冰。
     * 
     * Represents a frosted ice block within Minecraft.
     */
    static readonly frostedIce: BlockType;
    /**
     * 熔炉。
     * 
     * Represents a furnace within Minecraft.
     */
    static readonly furnace: BlockType;
    /**
     * 镶金黑石。
     * 
     * Represents a block of gilded blackstone within Minecraft.
     */
    static readonly gildedBlackstone: BlockType;
    /**
     * 玻璃。
     * 
     * Represents a glass block within Minecraft.
     */
    static readonly glass: BlockType;
    /**
     * 玻璃板。
     * 
     * Represents a pane of glass within Minecraft.
     */
    static readonly glassPane: BlockType;
    /**
     * 荧光物品展示框。
     * 
     * Represents a glowing frame within Minecraft.
     */
    static readonly glowFrame: BlockType;
    /**
     * 发光的黑曜石。
     * 
     * Represents a glowing obsidian block within Minecraft.
     */
    static readonly glowingobsidian: BlockType;
    /**
     * 发光地衣。
     * 
     * Represents glow lichen within Minecraft.
     */
    static readonly glowLichen: BlockType;
    /**
     * 荧石。
     * 
     * Represents a block of glowstone within Minecraft.
     */
    static readonly glowstone: BlockType;
    /**
     * 金块。
     * 
     * Represents a gold block within Minecraft.
     */
    static readonly goldBlock: BlockType;
    /**
     * 动力铁轨。
     * 
     * Represents a golden rail element within Minecraft.
     */
    static readonly goldenRail: BlockType;
    /**
     * 金矿石。
     * 
     * Represents a block with embedded gold ore within Minecraft.
     */
    static readonly goldOre: BlockType;
    /**
     * 花岗岩楼梯。
     * 
     * Represents a set of granite stairs within Minecraft.
     */
    static readonly graniteStairs: BlockType;
    /**
     * 草。
     * 
     * Represents a block of dirt and grass within Minecraft.
     */
    static readonly grass: BlockType;
    /**
     * 草径。
     * 
     * Represents a block of dirt and grass with a path within
     * Minecraft.
     */
    static readonly grassPath: BlockType;
    /**
     * 沙砾。
     * 
     * Represents a block of gravel within Minecraft.
     */
    static readonly gravel: BlockType;
    /**
     * 灰色蜡烛。
     * 
     * Represents a gray-colored candle within Minecraft.
     */
    static readonly grayCandle: BlockType;
    /**
     * 插上灰色蜡烛的蛋糕。
     * 
     * Represents a cake with gray-colored candle within Minecraft.
     */
    static readonly grayCandleCake: BlockType;
    /**
     * 灰色带釉陶瓦。
     * 
     * Represents a gray-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly grayGlazedTerracotta: BlockType;
    /**
     * 灰色羊毛。
     */
    static readonly grayWool: BlockType;
    /**
     * 绿色蜡烛。
     * 
     * Represents a green-colored candle within Minecraft.
     */
    static readonly greenCandle: BlockType;
    /**
     * 插上绿色蜡烛的蛋糕。
     * 
     * Represents a green-colored candle cake within Minecraft.
     */
    static readonly greenCandleCake: BlockType;
    /**
     * 绿色带釉陶瓦。
     * 
     * Represents a green block of glazed terracotta within
     * Minecraft.
     */
    static readonly greenGlazedTerracotta: BlockType;
    /**
     * 绿色羊毛。
     */
    static readonly greenWool: BlockType;
    /**
     * 砂轮。
     * 
     * Represents a grindstone within Minecraft.
     */
    static readonly grindstone: BlockType;
    /**
     * 垂根。
     * 
     * Represents a set of hanging roots within Minecraft.
     */
    static readonly hangingRoots: BlockType;
    /**
     * 陶瓦。
     * 
     * Represents a block of hardened clay within Minecraft.
     */
    static readonly hardenedClay: BlockType;
    /**
     * 强化玻璃。
     * 
     * Represents a block of hard glass within Minecraft.
     */
    static readonly hardGlass: BlockType;
    /**
     * 强化玻璃板。
     * 
     * Represents a pane of hard glass within Minecraft.
     */
    static readonly hardGlassPane: BlockType;
    /**
     * 染色强化玻璃。
     * 
     * Represents a stained hard glass block within Minecraft.
     */
    static readonly hardStainedGlass: BlockType;
    /**
     * 染色强化玻璃板。
     * 
     * Represents a stained pane of hard glass within Minecraft.
     */
    static readonly hardStainedGlassPane: BlockType;
    /**
     * 干草块。
     * 
     * Represents a block of hay within Minecraft.
     */
    static readonly hayBlock: BlockType;
    /**
     * 重质测重压力板。
     * 
     * Represents a heavy weighted pressure plate within Minecraft.
     */
    static readonly heavyWeightedPressurePlate: BlockType;
    /**
     * 蜂蜜块。
     * 
     * Represents a block of honey within Minecraft.
     */
    static readonly honeyBlock: BlockType;
    /**
     * 蜜脾块。
     * 
     * Represents a honeycomb block within Minecraft.
     */
    static readonly honeycombBlock: BlockType;
    /**
     * 漏斗。
     * 
     * Represents a hopper within Minecraft.
     */
    static readonly hopper: BlockType;
    /**
     * 冰。
     * 
     * Represents a block of ice within Minecraft.
     */
    static readonly ice: BlockType;
    /**
     * 被虫蚀的深板岩。
     * 
     * Represents an infested block of deepslate within Minecraft.
     */
    static readonly infestedDeepslate: BlockType;
    /**
     * 数据更新方块。
     * 
     * Represents an information update block within Minecraft.
     */
    static readonly infoUpdate: BlockType;
    /**
     * 数据更新方块。
     * 
     * Represents an information update block within Minecraft.
     */
    static readonly infoUpdate2: BlockType;
    /**
     * 隐形的基岩。
     * 
     * Represents an invisible boundary bedrock block within
     * Minecraft.
     */
    static readonly invisibleBedrock: BlockType;
    /**
     * 铁栏杆。
     * 
     * Represents iron bars within Minecraft.
     */
    static readonly ironBars: BlockType;
    /**
     * 铁块。
     * 
     * Represents a block of iron within Minecraft.
     */
    static readonly ironBlock: BlockType;
    /**
     * 铁门。
     * 
     * Represents an iron door within Minecraft.
     */
    static readonly ironDoor: BlockType;
    /**
     * 铁矿石。
     * 
     * Represents a block with embedded iron ore within Minecraft.
     */
    static readonly ironOre: BlockType;
    /**
     * 铁活板门。
     * 
     * Represents an iron trapdoor within Minecraft.
     */
    static readonly ironTrapdoor: BlockType;
    /**
     * 拼图方块。
     * 
     * Represents a jigsaw within Minecraft.
     */
    static readonly jigsaw: BlockType;
    /**
     * 唱片机。
     * 
     * Represents a jukebox within Minecraft.
     */
    static readonly jukebox: BlockType;
    /**
     * 丛林木按钮。
     * 
     * Represents jungle wood button within Minecraft.
     */
    static readonly jungleButton: BlockType;
    /**
     * 丛林木门。
     * 
     * Represents a jungle wood door within Minecraft.
     */
    static readonly jungleDoor: BlockType;
    /**
     * 丛林木栅栏门。
     * 
     * Represents a jungle wood fence gate within Minecraft.
     */
    static readonly jungleFenceGate: BlockType;
    /**
     * 悬挂式丛林木告示牌。
     */
    static readonly jungleHangingSign: BlockType;
    /**
     * 丛林木压力板。
     * 
     * Represents a jungle wood pressure plate within Minecraft.
     */
    static readonly junglePressurePlate: BlockType;
    /**
     * 丛林木楼梯。
     * 
     * Represents a set of jungle wood stairs within Minecraft.
     */
    static readonly jungleStairs: BlockType;
    /**
     * 丛林木告示牌。
     * 
     * Represents a jungle wood standing sign within Minecraft.
     */
    static readonly jungleStandingSign: BlockType;
    /**
     * 丛林木活板门。
     * 
     * Represents a jungle wood trapdoor within Minecraft.
     */
    static readonly jungleTrapdoor: BlockType;
    /**
     * 墙上的丛林木告示牌。
     * 
     * Represents a jungle wood wall sign within Minecraft.
     */
    static readonly jungleWallSign: BlockType;
    /**
     * 海带。
     * 
     * Represents a set of kelp within Minecraft.
     */
    static readonly kelp: BlockType;
    /**
     * 梯子。
     * 
     * Represents a ladder within Minecraft.
     */
    static readonly ladder: BlockType;
    /**
     * 灯笼。
     * 
     * Represents a lantern within Minecraft.
     */
    static readonly lantern: BlockType;
    /**
     * 青金石块。
     * 
     * Represents a block of lapis lazuli within Minecraft.
     */
    static readonly lapisBlock: BlockType;
    /**
     * 青金石矿石。
     * 
     * Represents a block with embedded lapis lazuli within
     * Minecraft.
     */
    static readonly lapisOre: BlockType;
    /**
     * 大型紫晶芽。
     * 
     * Represents a bud of large amethyst within Minecraft.
     */
    static readonly largeAmethystBud: BlockType;
    /**
     * 熔岩。
     * 
     * Represents lava within Minecraft.
     */
    static readonly lava: BlockType;
    /**
     * 装有熔岩的炼药锅。
     * 
     * Represents a cauldron filled with lava within Minecraft.
     */
    static readonly lavaCauldron: BlockType;
    /**
     * 橡树树叶/云杉树叶/白桦树叶/丛林树叶。
     * 
     * Represents a set of leaves within Minecraft.
     */
    static readonly leaves: BlockType;
    /**
     * 金合欢树叶/深色橡树树叶。
     * 
     * Represents an updated set of leaves within Minecraft.
     */
    static readonly leaves2: BlockType;
    /**
     * 讲台。
     * 
     * Represents a lectern within Minecraft.
     */
    static readonly lectern: BlockType;
    /**
     * 拉杆。
     * 
     * Represents a lever within Minecraft.
     */
    static readonly lever: BlockType;
    /**
     * 光源方块。
     * 
     * Represents a block of light within Minecraft.
     */
    static readonly lightBlock: BlockType;
    /**
     * 淡蓝色蜡烛。
     * 
     * Represents a light blue candle within Minecraft.
     */
    static readonly lightBlueCandle: BlockType;
    /**
     * 插上淡蓝色蜡烛的蛋糕。
     * 
     * Represents a light blue candle cake within Minecraft.
     */
    static readonly lightBlueCandleCake: BlockType;
    /**
     * 淡蓝色带釉陶瓦。
     * 
     * Represents a light blue block of glazed terracotta within
     * Minecraft.
     */
    static readonly lightBlueGlazedTerracotta: BlockType;
    /**
     * 淡蓝色羊毛。
     */
    static readonly lightBlueWool: BlockType;
    /**
     * 淡灰色蜡烛。
     * 
     * Represents a light gray candle within Minecraft.
     */
    static readonly lightGrayCandle: BlockType;
    /**
     * 插上淡灰色蜡烛的蛋糕。
     * 
     * Represents a light gray candle cake within Minecraft.
     */
    static readonly lightGrayCandleCake: BlockType;
    /**
     * 淡灰色羊毛。
     */
    static readonly lightGrayWool: BlockType;
    /**
     * 避雷针。
     * 
     * Represents a lightning rod within Minecraft.
     */
    static readonly lightningRod: BlockType;
    /**
     * 轻质测重压力板。
     * 
     * Represents a light weighted pressure plate within Minecraft.
     */
    static readonly lightWeightedPressurePlate: BlockType;
    /**
     * 黄绿色蜡烛。
     * 
     * Represents a lime candle within Minecraft.
     */
    static readonly limeCandle: BlockType;
    /**
     * 插上黄绿色蜡烛的蛋糕。
     * 
     * Represents a lime-colored candle cake within Minecraft.
     */
    static readonly limeCandleCake: BlockType;
    /**
     * 黄绿色带釉陶瓦。
     * 
     * Represents a lime-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly limeGlazedTerracotta: BlockType;
    /**
     * 黄绿色羊毛。
     */
    static readonly limeWool: BlockType;
    /**
     * 燃烧中的高炉。
     * 
     * Represents a lit blast furnace within Minecraft.
     */
    static readonly litBlastFurnace: BlockType;
    /**
     * 点亮的深层红石矿石。
     * 
     * Represents lit deepslate redstone ore within Minecraft.
     */
    static readonly litDeepslateRedstoneOre: BlockType;
    /**
     * 燃烧中的熔炉。
     * 
     * Represents a lit furnace within Minecraft.
     */
    static readonly litFurnace: BlockType;
    /**
     * 南瓜灯。
     * 
     * Represents a lit pumpkin within Minecraft.
     */
    static readonly litPumpkin: BlockType;
    /**
     * 点亮的红石灯。
     * 
     * Represents a lit redstone lamp within Minecraft.
     */
    static readonly litRedstoneLamp: BlockType;
    /**
     * 点亮的红石矿石。
     * 
     * Represents lit redstone ore within Minecraft.
     */
    static readonly litRedstoneOre: BlockType;
    /**
     * 燃烧中的烟熏炉。
     * 
     * Represents a lit smoker within Minecraft.
     */
    static readonly litSmoker: BlockType;
    /**
     * 磁石。
     * 
     * Represents a lodestone within Minecraft.
     */
    static readonly lodestone: BlockType;
    /**
     * 橡木原木/云杉原木/白桦原木/丛林原木。
     * 
     * Represents a log within Minecraft.
     */
    static readonly log: BlockType;
    /**
     * 金合欢原木/深色橡木原木。
     * 
     * Represents a more updated, customizable log within
     * Minecraft.
     */
    static readonly log2: BlockType;
    /**
     * 织布机。
     * 
     * Represents a loom within Minecraft.
     */
    static readonly loom: BlockType;
    /**
     * 品红色蜡烛。
     * 
     * Represents a magenta candle within Minecraft.
     */
    static readonly magentaCandle: BlockType;
    /**
     * 插上品红色蜡烛的蛋糕。
     * 
     * Represents a magenta candle cake within Minecraft.
     */
    static readonly magentaCandleCake: BlockType;
    /**
     * 品红色带釉陶瓦。
     * 
     * Represents a block of magenta-colored glazed terracotta
     * within Minecraft.
     */
    static readonly magentaGlazedTerracotta: BlockType;
    /**
     * 品红色羊毛。
     */
    static readonly magentaWool: BlockType;
    /**
     * 岩浆块。
     * 
     * Represents magma within Minecraft.
     */
    static readonly magma: BlockType;
    /**
     * 红树木按钮。
     */
    static readonly mangroveButton: BlockType;
    /**
     * 红树木门。
     */
    static readonly mangroveDoor: BlockType;
    /**
     * 双红树木台阶。
     */
    static readonly mangroveDoubleSlab: BlockType;
    /**
     * 红树木栅栏。
     */
    static readonly mangroveFence: BlockType;
    /**
     * 红树木栅栏门。
     */
    static readonly mangroveFenceGate: BlockType;
    /**
     * 悬挂式红树木告示牌。
     */
    static readonly mangroveHangingSign: BlockType;
    /**
     * 红树树叶。
     */
    static readonly mangroveLeaves: BlockType;
    /**
     * 红树原木。
     */
    static readonly mangroveLog: BlockType;
    /**
     * 红树木板。
     */
    static readonly mangrovePlanks: BlockType;
    /**
     * 红树木压力板。
     */
    static readonly mangrovePressurePlate: BlockType;
    /**
     * 红树胎生苗。
     */
    static readonly mangrovePropagule: BlockType;
    /**
     * 红树根。
     */
    static readonly mangroveRoots: BlockType;
    /**
     * 红树木台阶。
     */
    static readonly mangroveSlab: BlockType;
    /**
     * 红树木楼梯。
     */
    static readonly mangroveStairs: BlockType;
    /**
     * 红树木告示牌。
     */
    static readonly mangroveStandingSign: BlockType;
    /**
     * 红树木活板门。
     */
    static readonly mangroveTrapdoor: BlockType;
    /**
     * 墙上的红树木告示牌。
     */
    static readonly mangroveWallSign: BlockType;
    /**
     * 红树木。
     */
    static readonly mangroveWood: BlockType;
    /**
     * 中型紫晶芽。
     * 
     * Represents a medium-sized bud of amethyst within Minecraft.
     */
    static readonly mediumAmethystBud: BlockType;
    /**
     * 西瓜。
     * 
     * Represents a block of melon within Minecraft.
     */
    static readonly melonBlock: BlockType;
    /**
     * 西瓜茎。
     * 
     * Represents a stem of melon within Minecraft.
     */
    static readonly melonStem: BlockType;
    /**
     * 刷怪笼。
     * 
     * Represents a mob spawner within Minecraft.
     */
    static readonly mobSpawner: BlockType;
    /**
     * 被虫蚀的石头/被虫蚀的圆石/被虫蚀的石砖/被虫蚀的苔石砖/被虫蚀的裂纹石砖/被虫蚀的雕纹石砖。
     * 
     * Represents a monster egg within Minecraft.
     */
    static readonly monsterEgg: BlockType;
    /**
     * 苔藓块。
     * 
     * Represents a block of moss within Minecraft.
     */
    static readonly mossBlock: BlockType;
    /**
     * 苔藓地毯。
     * 
     * Represents a carpet of moss within Minecraft.
     */
    static readonly mossCarpet: BlockType;
    /**
     * 苔石。
     * 
     * Represents a block of cobblestone with moss within
     * Minecraft.
     */
    static readonly mossyCobblestone: BlockType;
    /**
     * 苔石楼梯。
     * 
     * Represents a set of mossy cobblestone stairs within
     * Minecraft.
     */
    static readonly mossyCobblestoneStairs: BlockType;
    /**
     * 苔石砖楼梯。
     * 
     * Represents a set of mossy stone brick stairs within
     * Minecraft.
     */
    static readonly mossyStoneBrickStairs: BlockType;
    /**
     * 移动的方块。
     */
    static readonly movingBlock: BlockType;
    /**
     * 泥巴。
     */
    static readonly mud: BlockType;
    /**
     * 双层泥砖台阶。
     */
    static readonly mudBrickDoubleSlab: BlockType;
    /**
     * 泥砖。
     */
    static readonly mudBricks: BlockType;
    /**
     * 泥砖台阶。
     */
    static readonly mudBrickSlab: BlockType;
    /**
     * 泥砖楼梯。
     */
    static readonly mudBrickStairs: BlockType;
    /**
     * 泥砖墙。
     */
    static readonly mudBrickWall: BlockType;
    /**
     * 沾泥的红树根。
     */
    static readonly muddyMangroveRoots: BlockType;
    /**
     * 菌丝体。
     * 
     * Represents a mycelium plant within Minecraft.
     */
    static readonly mycelium: BlockType;
    /**
     * 下界砖。
     * 
     * Represents a nether brick block within Minecraft.
     */
    static readonly netherBrick: BlockType;
    /**
     * 下界砖栅栏。
     * 
     * Represents a nether brick fence within Minecraft.
     */
    static readonly netherBrickFence: BlockType;
    /**
     * 下界砖楼梯。
     * 
     * Represents a set of nether brick stairs within Minecraft.
     */
    static readonly netherBrickStairs: BlockType;
    /**
     * 下界金矿石。
     * 
     * Represents a block of nether with embedded gold ore within
     * Minecraft.
     */
    static readonly netherGoldOre: BlockType;
    /**
     * 下界合金块。
     * 
     * Represents a block of netherite within Minecraft.
     */
    static readonly netheriteBlock: BlockType;
    /**
     * 下界岩。
     * 
     * Represents a block of netherrack within Minecraft.
     */
    static readonly netherrack: BlockType;
    /**
     * 下界反应核。
     * 
     * Represents a nether rock within Minecraft.
     */
    static readonly netherreactor: BlockType;
    /**
     * 下界苗。
     * 
     * Represents nether sprouts within Minecraft.
     */
    static readonly netherSprouts: BlockType;
    /**
     * 下界疣。
     * 
     * Represents nether wart within Minecraft.
     */
    static readonly netherWart: BlockType;
    /**
     * 下界疣块。
     * 
     * Represents a block of nether wart within Minecraft.
     */
    static readonly netherWartBlock: BlockType;
    /**
     * 石头楼梯。
     * 
     * Represents a standard set of stone stairs within Minecraft.
     */
    static readonly normalStoneStairs: BlockType;
    /**
     * 音符盒。
     * 
     * Represents a note block within Minecraft.
     */
    static readonly noteblock: BlockType;
    /**
     * 悬挂式橡木告示牌。
     */
    static readonly oakHangingSign: BlockType;
    /**
     * 橡木楼梯。
     * 
     * Represents a set of oak stairs within Minecraft.
     */
    static readonly oakStairs: BlockType;
    /**
     * 侦测器。
     * 
     * Represents an observer within Minecraft.
     */
    static readonly observer: BlockType;
    /**
     * 黑曜石。
     * 
     * Represents an obsidian block within Minecraft.
     */
    static readonly obsidian: BlockType;
    /**
     * 赭黄蛙明灯。
     */
    static readonly ochreFroglight: BlockType;
    /**
     * 橙色蜡烛。
     * 
     * Represents an orange candle within Minecraft.
     */
    static readonly orangeCandle: BlockType;
    /**
     * 插上橙色蜡烛的蛋糕。
     * 
     * Represents an orange candle cake within Minecraft.
     */
    static readonly orangeCandleCake: BlockType;
    /**
     * 橙色带釉陶瓦。
     * 
     * Represents a block of orange-colored glazed terracotta
     * within Minecraft.
     */
    static readonly orangeGlazedTerracotta: BlockType;
    /**
     * 橙色羊毛。
     */
    static readonly orangeWool: BlockType;
    /**
     * 氧化的铜块。
     * 
     * Represents a block of oxidized copper within Minecraft.
     */
    static readonly oxidizedCopper: BlockType;
    /**
     * 氧化的切制铜块。
     * 
     * Represents a block of oxidized cut copper within Minecraft.
     */
    static readonly oxidizedCutCopper: BlockType;
    /**
     * 氧化的切制铜台阶。
     * 
     * Represents a slab of oxidized cut copper within Minecraft.
     */
    static readonly oxidizedCutCopperSlab: BlockType;
    /**
     * 氧化的切制铜楼梯。
     * 
     * Represents a set of oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly oxidizedCutCopperStairs: BlockType;
    /**
     * 氧化的双切制铜台阶。
     * 
     * Represents a double slab of oxidized cut copper within
     * Minecraft.
     */
    static readonly oxidizedDoubleCutCopperSlab: BlockType;
    /**
     * 浮冰。
     * 
     * Represents a block of packed ice within Minecraft.
     */
    static readonly packedIce: BlockType;
    /**
     * 泥坯。
     */
    static readonly packedMud: BlockType;
    /**
     * 珠光蛙明灯。
     */
    static readonly pearlescentFroglight: BlockType;
    /**
     * 粉红色蜡烛。
     * 
     * Represents a pink candle within Minecraft.
     */
    static readonly pinkCandle: BlockType;
    /**
     * 插上粉红色蜡烛的蛋糕。
     * 
     * Represents a pink candle cake within Minecraft.
     */
    static readonly pinkCandleCake: BlockType;
    /**
     * 粉红色带釉陶瓦。
     * 
     * Represents a pink-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly pinkGlazedTerracotta: BlockType;
    /**
     * 粉红色羊毛。
     */
    static readonly pinkWool: BlockType;
    /**
     * 活塞。
     * 
     * Represents a piston within Minecraft.
     */
    static readonly piston: BlockType;
    /**
     * 活塞头。
     */
    static readonly pistonArmCollision: BlockType;
    /**
     * 橡木木板/云杉木板/白桦木板/丛林木板/金合欢木板/深色橡木木板。
     * 
     * Represents a set of planks within Minecraft.
     */
    static readonly planks: BlockType;
    /**
     * 灰化土。
     * 
     * Represents podzol within Minecraft.
     */
    static readonly podzol: BlockType;
    /**
     * 滴水石锥。
     * 
     * Represents pointed dripstone within Minecraft.
     */
    static readonly pointedDripstone: BlockType;
    /**
     * 磨制安山岩楼梯。
     * 
     * Represents a set of polished andesite stairs within
     * Minecraft.
     */
    static readonly polishedAndesiteStairs: BlockType;
    /**
     * 磨制玄武岩。
     * 
     * Represents a block of polished basalt within Minecraft.
     */
    static readonly polishedBasalt: BlockType;
    /**
     * 磨制黑石。
     * 
     * Represents a block of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstone: BlockType;
    /**
     * 双层磨制黑石砖台阶。
     * 
     * Represents a double slab of polished blackstone brick within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickDoubleSlab: BlockType;
    /**
     * 磨制黑石砖。
     * 
     * Represents a block of polished blackstone bricks within
     * Minecraft.
     */
    static readonly polishedBlackstoneBricks: BlockType;
    /**
     * 磨制黑石砖台阶。
     * 
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstoneBrickSlab: BlockType;
    /**
     * 磨制黑石砖楼梯。
     * 
     * Represents a set of polished blackstone brick stairs within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickStairs: BlockType;
    /**
     * 磨制黑石砖墙。
     * 
     * Represents a polished blackstone brick wall within
     * Minecraft.
     */
    static readonly polishedBlackstoneBrickWall: BlockType;
    /**
     * 磨制黑石按钮。
     * 
     * Represents a polished blackstone button within Minecraft.
     */
    static readonly polishedBlackstoneButton: BlockType;
    /**
     * 双层磨制黑石台阶。
     * 
     * Represents a double slab of polished blackstone within
     * Minecraft.
     */
    static readonly polishedBlackstoneDoubleSlab: BlockType;
    /**
     * 磨制黑石压力板。
     * 
     * Represents a polished blackstone pressure plate within
     * Minecraft.
     */
    static readonly polishedBlackstonePressurePlate: BlockType;
    /**
     * 磨制黑石台阶。
     * 
     * Represents a slab of polished blackstone within Minecraft.
     */
    static readonly polishedBlackstoneSlab: BlockType;
    /**
     * 磨制黑石楼梯。
     * 
     * Represents a set of polished blackstone stairs within
     * Minecraft.
     */
    static readonly polishedBlackstoneStairs: BlockType;
    /**
     * 磨制黑石墙。
     * 
     * Represents a polished blackstone wall within Minecraft.
     */
    static readonly polishedBlackstoneWall: BlockType;
    /**
     * 磨制深板岩。
     * 
     * Represents a block of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslate: BlockType;
    /**
     * 双层磨制深板岩台阶。
     * 
     * Represents a double slab of polished deepslate within
     * Minecraft.
     */
    static readonly polishedDeepslateDoubleSlab: BlockType;
    /**
     * 磨制深板岩台阶。
     * 
     * Represents a slab of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslateSlab: BlockType;
    /**
     * 磨制深板岩楼梯。
     * 
     * Represents a set of polished deepslate stairs within
     * Minecraft.
     */
    static readonly polishedDeepslateStairs: BlockType;
    /**
     * 磨制深板岩墙。
     * 
     * Represents a wall of polished deepslate within Minecraft.
     */
    static readonly polishedDeepslateWall: BlockType;
    /**
     * 磨制闪长岩楼梯。
     * 
     * Represents a block of polished diorite within Minecraft.
     */
    static readonly polishedDioriteStairs: BlockType;
    /**
     * 磨制花岗岩楼梯。
     * 
     * Represents a set of polished granite stairs within
     * Minecraft.
     */
    static readonly polishedGraniteStairs: BlockType;
    /**
     * 下界传送门。
     * 
     * Represents a portal within Minecraft.
     */
    static readonly portal: BlockType;
    /**
     * 马铃薯。
     * 
     * Represents a set of potatoes within Minecraft.
     */
    static readonly potatoes: BlockType;
    /**
     * 细雪。
     * 
     * Represents a block of powder snow within Minecraft.
     */
    static readonly powderSnow: BlockType;
    /**
     * 激活的红石比较器。
     * 
     * Represents a powered comparator within Minecraft.
     */
    static readonly poweredComparator: BlockType;
    /**
     * 激活的红石中继器。
     * 
     * Represents a powered repeater within Minecraft.
     */
    static readonly poweredRepeater: BlockType;
    /**
     * 海晶石/暗海晶石/海晶石砖。
     * 
     * Represents a block of prismarine within Minecraft.
     */
    static readonly prismarine: BlockType;
    /**
     * 海晶石砖楼梯。
     * 
     * Represents a set of prismarine brick stairs within
     * Minecraft.
     */
    static readonly prismarineBricksStairs: BlockType;
    /**
     * 海晶石楼梯。
     * 
     * Represents a set of prismarine stairs within Minecraft.
     */
    static readonly prismarineStairs: BlockType;
    /**
     * 南瓜。
     * 
     * Represents a pumpkin within Minecraft.
     */
    static readonly pumpkin: BlockType;
    /**
     * 南瓜茎。
     * 
     * Represents a pumpkin stem within Minecraft.
     */
    static readonly pumpkinStem: BlockType;
    /**
     * 紫色蜡烛。
     * 
     * Represents a purple candle within Minecraft.
     */
    static readonly purpleCandle: BlockType;
    /**
     * 插上紫色蜡烛的蛋糕。
     * 
     * Represents a purple colored candle cake within Minecraft.
     */
    static readonly purpleCandleCake: BlockType;
    /**
     * 紫色带釉陶瓦。
     * 
     * Represents a purple-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly purpleGlazedTerracotta: BlockType;
    /**
     * 紫色羊毛。
     */
    static readonly purpleWool: BlockType;
    /**
     * 紫珀块/雕纹紫珀块/紫珀柱/平滑紫珀块。
     * 
     * Represents a purpur block within Minecraft.
     */
    static readonly purpurBlock: BlockType;
    /**
     * 紫珀楼梯。
     * 
     * Represents a set of purpur stairs within Minecraft.
     */
    static readonly purpurStairs: BlockType;
    /**
     * 石英块/雕纹石英块/石英柱/平滑石英块。
     * 
     * Represents a block of solid quartz within Minecraft.
     */
    static readonly quartzBlock: BlockType;
    /**
     * 石英砖。
     * 
     * Represents a block of solid quartz bricks within Minecraft.
     */
    static readonly quartzBricks: BlockType;
    /**
     * 下界石英矿石。
     * 
     * Represents a block with embedded quartz ore within
     * Minecraft.
     */
    static readonly quartzOre: BlockType;
    /**
     * 石英楼梯。
     * 
     * Represents a set of quartz stairs within Minecraft.
     */
    static readonly quartzStairs: BlockType;
    /**
     * 铁轨。
     * 
     * Represents a set of rails within Minecraft.
     */
    static readonly rail: BlockType;
    /**
     * 粗铜块。
     * 
     * Represents a block of raw copper within Minecraft.
     */
    static readonly rawCopperBlock: BlockType;
    /**
     * 粗金块。
     * 
     * Represents a block of raw gold within Minecraft.
     */
    static readonly rawGoldBlock: BlockType;
    /**
     * 粗铁块。
     * 
     * Represents a block of raw iron within Minecraft.
     */
    static readonly rawIronBlock: BlockType;
    /**
     * 红色蜡烛。
     * 
     * Represents a red candle within Minecraft.
     */
    static readonly redCandle: BlockType;
    /**
     * 插上红色蜡烛的蛋糕。
     * 
     * Represents a red candle cake within Minecraft.
     */
    static readonly redCandleCake: BlockType;
    /**
     * 虞美人/兰花/绒球葱/蓝花美耳草/红色郁金香/橙色郁金香/白色郁金香/粉红色郁金香/滨菊/矢车菊/铃兰。
     * 
     * Represents a red flower within Minecraft.
     */
    static readonly redFlower: BlockType;
    /**
     * 红色带釉陶瓦。
     * 
     * Represents a red-colored block of glazed terracotta within
     * Minecraft.
     */
    static readonly redGlazedTerracotta: BlockType;
    /**
     * 红色蘑菇。
     * 
     * Represents a red mushroom within Minecraft.
     */
    static readonly redMushroom: BlockType;
    /**
     * 红色蘑菇方块。
     * 
     * Represents a block of red mushroom within Minecraft.
     */
    static readonly redMushroomBlock: BlockType;
    /**
     * 红色下界砖块。
     * 
     * Represents a block of red nether brick within Minecraft.
     */
    static readonly redNetherBrick: BlockType;
    /**
     * 红色下界砖楼梯。
     * 
     * Represents a set of red nether brick stairs within
     * Minecraft.
     */
    static readonly redNetherBrickStairs: BlockType;
    /**
     * 红砂岩/雕纹红砂岩/切制红砂岩/平滑红砂岩。
     * 
     * Represents a block of red sandstone within Minecraft.
     */
    static readonly redSandstone: BlockType;
    /**
     * 红砂岩楼梯。
     * 
     * Represents a set of red sandstone stairs within Minecraft.
     */
    static readonly redSandstoneStairs: BlockType;
    /**
     * 红石块。
     * 
     * Represents a block of redstone within Minecraft.
     */
    static readonly redstoneBlock: BlockType;
    /**
     * 红石灯。
     * 
     * Represents a redstone lamp within Minecraft.
     */
    static readonly redstoneLamp: BlockType;
    /**
     * 红石矿石。
     * 
     * Represents a block with embedded redstone ore within
     * Minecraft.
     */
    static readonly redstoneOre: BlockType;
    /**
     * 红石火把。
     * 
     * Represents a redstone torch within Minecraft.
     */
    static readonly redstoneTorch: BlockType;
    /**
     * 红石线。
     * 
     * Represents a redstone wire within Minecraft.
     */
    static readonly redstoneWire: BlockType;
    /**
     * 红色羊毛。
     */
    static readonly redWool: BlockType;
    /**
     * 甘蔗。
     * 
     * Represents reeds within Minecraft.
     */
    static readonly reeds: BlockType;
    /**
     * 强化深板岩。
     */
    static readonly reinforcedDeepslate: BlockType;
    /**
     * 循环型命令方块。
     * 
     * Represents a repeating command block within Minecraft.
     */
    static readonly repeatingCommandBlock: BlockType;
    /**
     * reserved6。
     * 
     * Represents a reserved block within Minecraft.
     */
    static readonly reserved6: BlockType;
    /**
     * 重生锚。
     * 
     * Represents a respawn anchor within Minecraft.
     */
    static readonly respawnAnchor: BlockType;
    /**
     * 沙子/红沙。
     * 
     * Represents a block of sand within Minecraft.
     */
    static readonly sand: BlockType;
    /**
     * 砂岩/雕纹砂岩/切制砂岩/平滑砂岩。
     * 
     * Represents a block of sandstone within Minecraft.
     */
    static readonly sandstone: BlockType;
    /**
     * 砂岩楼梯。
     * 
     * Represents a set of sandstone stairs within Minecraft.
     */
    static readonly sandstoneStairs: BlockType;
    /**
     * 橡树树苗/云杉树苗/白桦树苗/丛林树苗/金合欢树苗/深色橡树树苗。
     * 
     * Represents a sapling within Minecraft.
     */
    static readonly sapling: BlockType;
    /**
     * 脚手架。
     * 
     * Represents a set of scaffolding within Minecraft.
     */
    static readonly scaffolding: BlockType;
    /**
     * 幽匿块。
     */
    static readonly sculk: BlockType;
    /**
     * 幽匿催发体。
     */
    static readonly sculkCatalyst: BlockType;
    /**
     * 幽匿感测体。
     * 
     * Represents a sculk sensor within Minecraft.
     */
    static readonly sculkSensor: BlockType;
    /**
     * 幽匿尖啸体。
     */
    static readonly sculkShrieker: BlockType;
    /**
     * 幽匿脉络。
     */
    static readonly sculkVein: BlockType;
    /**
     * 海草。
     * 
     * Represents seagrass within Minecraft.
     */
    static readonly seagrass: BlockType;
    /**
     * 海晶灯。
     * 
     * Represents a sealantern within Minecraft.
     */
    static readonly seaLantern: BlockType;
    /**
     * 海泡菜。
     * 
     * Represents a seapickle within Minecraft.
     */
    static readonly seaPickle: BlockType;
    /**
     * 菌光体。
     * 
     * Represents a shroom light within Minecraft.
     */
    static readonly shroomlight: BlockType;
    /**
     * 潜影盒。
     * 
     * Represents a shulker box within Minecraft.
     */
    static readonly shulkerBox: BlockType;
    /**
     * 淡灰色带釉陶瓦。
     * 
     * Represents a silver-colored block of glazed terracotta
     * within Minecraft.
     */
    static readonly silverGlazedTerracotta: BlockType;
    /**
     * 生物头颅。
     * 
     * Represents a skull within Minecraft.
     */
    static readonly skull: BlockType;
    /**
     * 黏液块。
     * 
     * Represents slime within Minecraft.
     */
    static readonly slime: BlockType;
    /**
     * 小型紫晶芽。
     * 
     * Represents a small bud of amethyst within Minecraft.
     */
    static readonly smallAmethystBud: BlockType;
    /**
     * 小型垂滴叶。
     * 
     * Represents a small dripleaf block within Minecraft.
     */
    static readonly smallDripleafBlock: BlockType;
    /**
     * 锻造台。
     * 
     * Represents a smithing table within Minecraft.
     */
    static readonly smithingTable: BlockType;
    /**
     * 烟熏炉。
     * 
     * Represents a smoker within Minecraft.
     */
    static readonly smoker: BlockType;
    /**
     * 平滑玄武岩。
     * 
     * Represents a block of smooth basalt within Minecraft.
     */
    static readonly smoothBasalt: BlockType;
    /**
     * 平滑石英楼梯。
     * 
     * Represents a set of smooth quartz stairs within Minecraft.
     */
    static readonly smoothQuartzStairs: BlockType;
    /**
     * 平滑红砂岩楼梯。
     * 
     * Represents a set of smooth red sandstone stairs within
     * Minecraft.
     */
    static readonly smoothRedSandstoneStairs: BlockType;
    /**
     * 平滑砂岩楼梯。
     * 
     * Represents a set of smooth redstone stairs within Minecraft.
     */
    static readonly smoothSandstoneStairs: BlockType;
    /**
     * 平滑石头。
     * 
     * Represents a smooth stone block within Minecraft.
     */
    static readonly smoothStone: BlockType;
    /**
     * 雪块。
     * 
     * Represents snow within Minecraft.
     */
    static readonly snow: BlockType;
    /**
     * 顶层雪。
     * 
     * Represents a layer of snow within Minecraft.
     */
    static readonly snowLayer: BlockType;
    /**
     * 灵魂营火。
     * 
     * Represents a soul campfire within Minecraft.
     */
    static readonly soulCampfire: BlockType;
    /**
     * 灵魂火。
     * 
     * Represents soul fire within Minecraft.
     */
    static readonly soulFire: BlockType;
    /**
     * 灵魂灯笼。
     * 
     * Represents a soul lantern within Minecraft.
     */
    static readonly soulLantern: BlockType;
    /**
     * 灵魂沙。
     * 
     * Represents a block of soul sand within Minecraft.
     */
    static readonly soulSand: BlockType;
    /**
     * 灵魂土。
     * 
     * Represents soul soil within Minecraft.
     */
    static readonly soulSoil: BlockType;
    /**
     * 灵魂火把。
     * 
     * Represents a soul torch within Minecraft.
     */
    static readonly soulTorch: BlockType;
    /**
     * 海绵/湿海绵。
     * 
     * Represents a sponge within Minecraft.
     */
    static readonly sponge: BlockType;
    /**
     * 孢子花。
     * 
     * Represents a spore blossom within Minecraft.
     */
    static readonly sporeBlossom: BlockType;
    /**
     * 云杉木按钮。
     * 
     * Represents a spruce wood button within Minecraft.
     */
    static readonly spruceButton: BlockType;
    /**
     * 云杉木门。
     * 
     * Represents a spruce wood door within Minecraft.
     */
    static readonly spruceDoor: BlockType;
    /**
     * 云杉木栅栏门。
     * 
     * Represents a spruce wood fence gate within Minecraft.
     */
    static readonly spruceFenceGate: BlockType;
    /**
     * 悬挂式云杉木告示牌。
     */
    static readonly spruceHangingSign: BlockType;
    /**
     * 云杉木压力板。
     * 
     * Represents a spruce wood pressure plate within Minecraft.
     */
    static readonly sprucePressurePlate: BlockType;
    /**
     * 云杉木楼梯。
     * 
     * Represents a set of spruce wood stairs within Minecraft.
     */
    static readonly spruceStairs: BlockType;
    /**
     * 云杉木告示牌。
     * 
     * Represents a spruce wood standing sign within Minecraft.
     */
    static readonly spruceStandingSign: BlockType;
    /**
     * 云杉木活板门。
     * 
     * Represents a spruce wood trapdoor within Minecraft.
     */
    static readonly spruceTrapdoor: BlockType;
    /**
     * 墙上的云杉木告示牌。
     * 
     * Represents a spruce wood wall sign within Minecraft.
     */
    static readonly spruceWallSign: BlockType;
    /**
     * 染色玻璃。
     * 
     * Represents stained glass within Minecraft.
     */
    static readonly stainedGlass: BlockType;
    /**
     * 染色玻璃板。
     * 
     * Represents a pane of stained glass within Minecraft.
     */
    static readonly stainedGlassPane: BlockType;
    /**
     * 染色陶瓦。
     * 
     * Represents a block of stained hardened clay within
     * Minecraft.
     */
    static readonly stainedHardenedClay: BlockType;
    /**
     * 旗帜。
     * 
     * Represents a standing banner within Minecraft.
     */
    static readonly standingBanner: BlockType;
    /**
     * 橡木告示牌。
     * 
     * Represents a standing sign within Minecraft.
     */
    static readonly standingSign: BlockType;
    /**
     * 黏性活塞。
     * 
     * Represents a piston block with a sticky arm within
     * Minecraft.
     */
    static readonly stickyPiston: BlockType;
    /**
     * 黏性活塞头。
     */
    static readonly stickyPistonArmCollision: BlockType;
    /**
     * 石头/花岗岩/磨制花岗岩/闪长岩/磨制闪长岩/安山岩/磨制安山岩。
     * 
     * Represents a block of stone within Minecraft.
     */
    static readonly stone: BlockType;
    /**
     * 平滑石头台阶/砂岩台阶/石化橡木台阶/圆石台阶/红砖台阶/石砖台阶/石英台阶/下界砖台阶。
     */
    static readonly stoneBlockSlab: BlockType;
    /**
     * 红砂岩台阶/紫珀台阶/海晶石台阶/暗海晶石台阶/海晶石砖台阶/苔石台阶/平滑砂岩台阶/红色下界砖台阶。
     */
    static readonly stoneBlockSlab2: BlockType;
    /**
     * 末地石砖台阶/平滑红砂岩台阶/磨制安山岩台阶/安山岩台阶/闪长岩台阶/磨制闪长岩台阶/花岗岩台阶/磨制花岗岩台阶。
     */
    static readonly stoneBlockSlab3: BlockType;
    /**
     * 苔石砖台阶/平滑石英台阶/石头台阶/切制砂岩台阶/切制红砂岩台阶。
     */
    static readonly stoneBlockSlab4: BlockType;
    /**
     * 石砖/苔石砖/裂纹石砖/雕纹石砖。
     * 
     * Represents a block of stone brick within Minecraft.
     */
    static readonly stonebrick: BlockType;
    /**
     * 石砖楼梯。
     * 
     * Represents a set of stone brick stairs within Minecraft.
     */
    static readonly stoneBrickStairs: BlockType;
    /**
     * 石头按钮。
     * 
     * Represents a stone button within Minecraft.
     */
    static readonly stoneButton: BlockType;
    /**
     * 切石机（旧版）。
     * 
     * Represents a stonecutter within Minecraft.
     */
    static readonly stonecutter: BlockType;
    /**
     * 切石机。
     * 
     * Represents a stonecutter block within Minecraft.
     */
    static readonly stonecutterBlock: BlockType;
    /**
     * 石头压力板。
     * 
     * Represents a stone pressure plate within Minecraft.
     */
    static readonly stonePressurePlate: BlockType;
    /**
     * 平滑石头台阶/砂岩台阶/石化橡木台阶/圆石台阶/红砖台阶/石砖台阶/石英台阶/下界砖台阶。
     * 
     * Represents a slab of stone within Minecraft.
     */
    static readonly stoneSlab: BlockType;
    /**
     * 红砂岩台阶/紫珀台阶/海晶石台阶/暗海晶石台阶/海晶石砖台阶/苔石台阶/平滑砂岩台阶/红色下界砖台阶。
     * 
     * Represents a variant of a slab of stone (#2) within
     * Minecraft.
     */
    static readonly stoneSlab2: BlockType;
    /**
     * 末地石砖台阶/平滑红砂岩台阶/磨制安山岩台阶/安山岩台阶/闪长岩台阶/磨制闪长岩台阶/花岗岩台阶/磨制花岗岩台阶。
     * 
     * Represents a slab of stone (variant #3) within Minecraft.
     */
    static readonly stoneSlab3: BlockType;
    /**
     * 苔石砖台阶/平滑石英台阶/石头台阶/切制砂岩台阶/切制红砂岩台阶。
     * 
     * Represents a slab of stone (variant #4) within Minecraft.
     */
    static readonly stoneSlab4: BlockType;
    /**
     * 石头楼梯。
     * 
     * Represents a set of stone stairs within Minecraft.
     */
    static readonly stoneStairs: BlockType;
    /**
     * 去皮金合欢原木。
     * 
     * Represents a stripped acacia log within Minecraft.
     */
    static readonly strippedAcaciaLog: BlockType;
    /**
     * 去皮竹块。
     */
    static readonly strippedBambooBlock: BlockType;
    /**
     * 去皮白桦原木。
     * 
     * Represents a stripped birch log within Minecraft.
     */
    static readonly strippedBirchLog: BlockType;
    /**
     * 去皮绯红菌核。
     * 
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly strippedCrimsonHyphae: BlockType;
    /**
     * 去皮绯红菌柄。
     * 
     * Represents a stripped crimson stem within Minecraft.
     */
    static readonly strippedCrimsonStem: BlockType;
    /**
     * 去皮深色橡木原木。
     * 
     * Represents a stripped dark oak log within Minecraft.
     */
    static readonly strippedDarkOakLog: BlockType;
    /**
     * 去皮丛林原木。
     * 
     * Represents a stripped jungle log within Minecraft.
     */
    static readonly strippedJungleLog: BlockType;
    /**
     * 去皮红树原木。
     */
    static readonly strippedMangroveLog: BlockType;
    /**
     * 去皮红树木。
     */
    static readonly strippedMangroveWood: BlockType;
    /**
     * 去皮橡木原木。
     * 
     * Represents a stripped oak log within Minecraft.
     */
    static readonly strippedOakLog: BlockType;
    /**
     * 去皮云杉原木。
     * 
     * Represents a stripped spruce log within Minecraft.
     */
    static readonly strippedSpruceLog: BlockType;
    /**
     * 去皮诡异菌核。
     * 
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly strippedWarpedHyphae: BlockType;
    /**
     * 去皮诡异菌柄。
     * 
     * Represents stripped warped stem within Minecraft.
     */
    static readonly strippedWarpedStem: BlockType;
    /**
     * 结构方块。
     * 
     * Represents a structure block, which provides for the saving
     * and loading of block structures, within Minecraft.
     */
    static readonly structureBlock: BlockType;
    /**
     * 结构空位。
     * 
     * Represents a structure void within Minecraft.
     */
    static readonly structureVoid: BlockType;
    /**
     * 甜浆果丛。
     * 
     * Represents a sweet berry bush within Minecraft.
     */
    static readonly sweetBerryBush: BlockType;
    /**
     * 蕨/草。
     * 
     * Represents tall grass within Minecraft.
     */
    static readonly tallgrass: BlockType;
    /**
     * 标靶。
     * 
     * Represents a target within Minecraft.
     */
    static readonly target: BlockType;
    /**
     * 遮光玻璃。
     * 
     * Represents tinted glass within Minecraft.
     */
    static readonly tintedGlass: BlockType;
    /**
     * TNT。
     * 
     * Represents a block of TnT within Minecraft.
     */
    static readonly tnt: BlockType;
    /**
     * 火把。
     * 
     * Represents a torch within Minecraft.
     */
    static readonly torch: BlockType;
    /**
     * 活板门。
     * 
     * Represents a trapdoor within Minecraft.
     */
    static readonly trapdoor: BlockType;
    /**
     * 陷阱箱。
     * 
     * Represents a trapped chest within Minecraft.
     */
    static readonly trappedChest: BlockType;
    /**
     * 绊线。
     */
    static readonly tripWire: BlockType;
    /**
     * 绊线钩。
     * 
     * Represents a tripwire hook within Minecraft.
     */
    static readonly tripwireHook: BlockType;
    /**
     * 凝灰岩。
     * 
     * Represents a block of tuff within Minecraft.
     */
    static readonly tuff: BlockType;
    /**
     * 海龟蛋。
     * 
     * Represents a turtle egg within Minecraft.
     */
    static readonly turtleEgg: BlockType;
    /**
     * 缠怨藤。
     * 
     * Represents a set of twisting vines within Minecraft.
     */
    static readonly twistingVines: BlockType;
    /**
     * 水下火把。
     * 
     * Represents an underwater torch within Minecraft.
     */
    static readonly underwaterTorch: BlockType;
    /**
     * 潜影盒。
     * 
     * Represents an undyed shulker box within Minecraft.
     */
    static readonly undyedShulkerBox: BlockType;
    /**
     * 数据更新方块。
     * 
     * Represents an unknown block within Minecraft.
     */
    static readonly unknown: BlockType;
    /**
     * 熄灭的红石火把。
     * 
     * Represents an unlit redstone torch within Minecraft.
     */
    static readonly unlitRedstoneTorch: BlockType;
    /**
     * 红石比较器。
     * 
     * Represents an unpowered comparator within Minecraft.
     */
    static readonly unpoweredComparator: BlockType;
    /**
     * 红石中继器。
     * 
     * Represents an unpowered repeater within Minecraft.
     */
    static readonly unpoweredRepeater: BlockType;
    /**
     * 青翠蛙明灯。
     */
    static readonly verdantFroglight: BlockType;
    /**
     * 藤蔓。
     * 
     * Represents a set of vines within Minecraft.
     */
    static readonly vine: BlockType;
    /**
     * 墙上的旗帜。
     * 
     * Represents a wall banner within Minecraft.
     */
    static readonly wallBanner: BlockType;
    /**
     * 墙上的橡木告示牌。
     * 
     * Represents a wall sign within Minecraft.
     */
    static readonly wallSign: BlockType;
    /**
     * 诡异木按钮。
     * 
     * Represents a warped button within Minecraft.
     */
    static readonly warpedButton: BlockType;
    /**
     * 诡异木门。
     * 
     * Represents a warped door within Minecraft.
     */
    static readonly warpedDoor: BlockType;
    /**
     * 双诡异木台阶。
     * 
     * Represents a double slab of warped within Minecraft.
     */
    static readonly warpedDoubleSlab: BlockType;
    /**
     * 诡异木栅栏。
     * 
     * Represents a warped fence within Minecraft.
     */
    static readonly warpedFence: BlockType;
    /**
     * 诡异木栅栏门。
     * 
     * Represents a warped fence gate within Minecraft.
     */
    static readonly warpedFenceGate: BlockType;
    /**
     * 诡异菌。
     * 
     * Represents warped fungus within Minecraft.
     */
    static readonly warpedFungus: BlockType;
    /**
     * 悬挂式诡异木告示牌。
     */
    static readonly warpedHangingSign: BlockType;
    /**
     * 诡异菌核。
     * 
     * Represents warped hyphae within Minecraft.
     */
    static readonly warpedHyphae: BlockType;
    /**
     * 诡异菌岩。
     * 
     * Represents warped nylium within Minecraft.
     */
    static readonly warpedNylium: BlockType;
    /**
     * 诡异木板。
     * 
     * Represents warped planks within Minecraft.
     */
    static readonly warpedPlanks: BlockType;
    /**
     * 诡异木压力板。
     * 
     * Represents a warped pressure plate within Minecraft.
     */
    static readonly warpedPressurePlate: BlockType;
    /**
     * 诡异菌索。
     * 
     * Represents a set of warped roots within Minecraft.
     */
    static readonly warpedRoots: BlockType;
    /**
     * 诡异木台阶。
     * 
     * Represents a slab of warped material within Minecraft.
     */
    static readonly warpedSlab: BlockType;
    /**
     * 诡异木楼梯。
     * 
     * Represents a set of warped stairs within Minecraft.
     */
    static readonly warpedStairs: BlockType;
    /**
     * 诡异木告示牌。
     * 
     * Represents a warped standing sign within Minecraft.
     */
    static readonly warpedStandingSign: BlockType;
    /**
     * 诡异菌柄。
     * 
     * Represents a warped stem within Minecraft.
     */
    static readonly warpedStem: BlockType;
    /**
     * 诡异木活板门。
     * 
     * Represents a warped trapdoor within Minecraft.
     */
    static readonly warpedTrapdoor: BlockType;
    /**
     * 墙上的诡异木告示牌。
     * 
     * Represents a warped wall sign within Minecraft.
     */
    static readonly warpedWallSign: BlockType;
    /**
     * 诡异疣块。
     * 
     * Represents a warped wart block within Minecraft.
     */
    static readonly warpedWartBlock: BlockType;
    /**
     * 水。
     * 
     * Represents water within Minecraft.
     */
    static readonly water: BlockType;
    /**
     * 睡莲。
     * 
     * Represents a water lily within Minecraft.
     */
    static readonly waterlily: BlockType;
    /**
     * 涂蜡铜块。
     * 
     * Represents a block of waxed copper within Minecraft.
     */
    static readonly waxedCopper: BlockType;
    /**
     * 涂蜡切制铜块。
     * 
     * Represents a block of waxed cut copper within Minecraft.
     */
    static readonly waxedCutCopper: BlockType;
    /**
     * 涂蜡切制铜台阶。
     * 
     * Represents a slab of waxed cut copper within Minecraft.
     */
    static readonly waxedCutCopperSlab: BlockType;
    /**
     * 涂蜡切制铜楼梯。
     * 
     * Represents a set of waxed cut copper stairs within
     * Minecraft.
     */
    static readonly waxedCutCopperStairs: BlockType;
    /**
     * 涂蜡双切制铜台阶。
     * 
     * Represents a double slab of waxed cut copper within
     * Minecraft.
     */
    static readonly waxedDoubleCutCopperSlab: BlockType;
    /**
     * 斑驳的涂蜡铜块。
     * 
     * Represents a block of waxed exposed copper within Minecraft.
     */
    static readonly waxedExposedCopper: BlockType;
    /**
     * 斑驳的涂蜡切制铜块。
     * 
     * Represents a block of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedCutCopper: BlockType;
    /**
     * 斑驳的涂蜡切制铜台阶。
     * 
     * Represents a slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedCutCopperSlab: BlockType;
    /**
     * 斑驳的涂蜡切制铜楼梯。
     * 
     * Represents a set of waxed exposed cut copper stairs within
     * Minecraft.
     */
    static readonly waxedExposedCutCopperStairs: BlockType;
    /**
     * 斑驳的涂蜡双切制铜台阶。
     * 
     * Represents a double slab of waxed exposed cut copper within
     * Minecraft.
     */
    static readonly waxedExposedDoubleCutCopperSlab: BlockType;
    /**
     * 氧化的涂蜡铜块。
     * 
     * Represents a block of waxed oxidized copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCopper: BlockType;
    /**
     * 氧化的涂蜡切制铜块。
     * 
     * Represents a block of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopper: BlockType;
    /**
     * 氧化的涂蜡切制铜台阶。
     * 
     * Represents a slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopperSlab: BlockType;
    /**
     * 氧化的涂蜡切制铜楼梯。
     * 
     * Represents a set of waxed oxidized cut copper stairs within
     * Minecraft.
     */
    static readonly waxedOxidizedCutCopperStairs: BlockType;
    /**
     * 氧化的涂蜡双切制铜台阶。
     * 
     * Represents a double slab of waxed oxidized cut copper within
     * Minecraft.
     */
    static readonly waxedOxidizedDoubleCutCopperSlab: BlockType;
    /**
     * 锈蚀的涂蜡铜块。
     * 
     * Represents a block of waxed weathered copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCopper: BlockType;
    /**
     * 锈蚀的涂蜡切制铜块。
     * 
     * Represents a block of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopper: BlockType;
    /**
     * 锈蚀的涂蜡切制铜台阶。
     * 
     * Represents a slab of waxed weathered cut copper within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopperSlab: BlockType;
    /**
     * 锈蚀的涂蜡切制铜楼梯。
     * 
     * Represents a set of waxed weathered cut copper stairs within
     * Minecraft.
     */
    static readonly waxedWeatheredCutCopperStairs: BlockType;
    /**
     * 锈蚀的涂蜡双切制铜台阶。
     * 
     * Represents a double slab of waxed weathered cut copper
     * within Minecraft.
     */
    static readonly waxedWeatheredDoubleCutCopperSlab: BlockType;
    /**
     * 锈蚀的铜块。
     * 
     * Represents a block of weathered copper within Minecraft.
     */
    static readonly weatheredCopper: BlockType;
    /**
     * 锈蚀的切制铜块。
     * 
     * Represents a block of weathered cut copper within Minecraft.
     */
    static readonly weatheredCutCopper: BlockType;
    /**
     * 锈蚀的切制铜台阶。
     * 
     * Represents a slab of weathered cut copper within Minecraft.
     */
    static readonly weatheredCutCopperSlab: BlockType;
    /**
     * 锈蚀的切制铜楼梯。
     * 
     * Represents a set of weathered cut copper stairs within
     * Minecraft.
     */
    static readonly weatheredCutCopperStairs: BlockType;
    /**
     * 锈蚀的双切制铜台阶。
     * 
     * Represents a double slab of weathered cut copper within
     * Minecraft.
     */
    static readonly weatheredDoubleCutCopperSlab: BlockType;
    /**
     * 蜘蛛网。
     * 
     * Represents a web within Minecraft.
     */
    static readonly web: BlockType;
    /**
     * 垂泪藤。
     * 
     * Represents a set of weeping vines within Minecraft.
     */
    static readonly weepingVines: BlockType;
    /**
     * 小麦。
     * 
     * Represents wheat within Minecraft.
     */
    static readonly wheat: BlockType;
    /**
     * 白色蜡烛。
     * 
     * Represents a white candle within Minecraft.
     */
    static readonly whiteCandle: BlockType;
    /**
     * 插上白色蜡烛的蛋糕。
     * 
     * Represents a white candle cake within Minecraft.
     */
    static readonly whiteCandleCake: BlockType;
    /**
     * 白色带釉陶瓦。
     * 
     * Represents a block of white glazed terracotta within
     * Minecraft.
     */
    static readonly whiteGlazedTerracotta: BlockType;
    /**
     * 白色羊毛。
     */
    static readonly whiteWool: BlockType;
    /**
     * 凋灵玫瑰。
     * 
     * Represents a wither rose within Minecraft.
     */
    static readonly witherRose: BlockType;
    /**
     * 橡木/云杉木/白桦木/丛林木/金合欢木/深色橡木/去皮橡木/去皮云杉木/去皮白桦木/去皮丛林木/去皮金合欢木/去皮深色橡木。
     * 
     * Represents a block of wood within Minecraft.
     */
    static readonly wood: BlockType;
    /**
     * 橡木按钮。
     * 
     * Represents a wooden button within Minecraft.
     */
    static readonly woodenButton: BlockType;
    /**
     * 橡木门。
     * 
     * Represents a wooden door within Minecraft.
     */
    static readonly woodenDoor: BlockType;
    /**
     * 橡木压力板。
     * 
     * Represents a wooden pressure plate within Minecraft.
     */
    static readonly woodenPressurePlate: BlockType;
    /**
     * 橡木台阶/云杉木台阶/白桦木台阶/丛林木台阶/金合欢木台阶/深色橡木台阶。
     * 
     * Represents a wooden slab within Minecraft.
     */
    static readonly woodenSlab: BlockType;
    /**
     * 黄色蜡烛。
     * 
     * Represents a yellow candle within Minecraft.
     */
    static readonly yellowCandle: BlockType;
    /**
     * 插上黄色蜡烛的蛋糕。
     * 
     * Represents a yellow candle cake within Minecraft.
     */
    static readonly yellowCandleCake: BlockType;
    /**
     * 蒲公英。
     * 
     * Represents a yellow flower within Minecraft.
     */
    static readonly yellowFlower: BlockType;
    /**
     * 黄色带釉陶瓦。
     * 
     * Represents a yellow block of glazed terracotta within
     * Minecraft.
     */
    static readonly yellowGlazedTerracotta: BlockType;
    /**
     * 黄色羊毛。
     */
    static readonly yellowWool: BlockType;
    /**
     * @remarks
     * 返回 `typeName` 指定的方块类型。
     * 
     * Returns a specific Minecraft block type given a type id.
     * @param typeName 方块类型标识符。
     * @returns 指定的方块类型。
     */
    static get(typeName: string): BlockType;
    /**
     * @remarks
     * 返回已注册的所有方块类型的集合。
     * 
     * Returns an array of all block types within Minecraft.
     * @returns 由已注册的所有方块类型组成的数组。
     */
    static getAllBlockTypes(): BlockType[];
}
/**
 * A collection of default Minecraft dimension types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftDimensionTypes {
    protected constructor();
    /**
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     */
    static readonly nether = 'minecraft:nether';
    /**
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     */
    static readonly overworld = 'minecraft:overworld';
    /**
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     */
    static readonly theEnd = 'minecraft:the_end';
}
/**
 * @beta
 * 表示 Minecraft 内置的可用状态效果类型的集合。
 * 
 * Returns available installed effect types within Minecraft.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEffectTypes {
    protected constructor();
    /**
     * 伤害吸收。
     */
    static readonly absorption: EffectType;
    /**
     * 不祥之兆。
     */
    static readonly badOmen: EffectType;
    /**
     * 失明。
     */
    static readonly blindness: EffectType;
    /**
     * 潮涌能量。
     */
    static readonly conduitPower: EffectType;
    /**
     * 黑暗。
     */
    static readonly darkness: EffectType;
    static readonly empty: EffectType;
    /**
     * 中毒（致命）。
     */
    static readonly fatalPoison: EffectType;
    /**
     * 防火。
     */
    static readonly fireResistance: EffectType;
    /**
     * 急迫。
     */
    static readonly haste: EffectType;
    /**
     * 生命提升。
     */
    static readonly healthBoost: EffectType;
    /**
     * 饥饿。
     */
    static readonly hunger: EffectType;
    /**
     * 瞬间伤害。
     */
    static readonly instantDamage: EffectType;
    /**
     * 瞬间治疗。
     */
    static readonly instantHealth: EffectType;
    /**
     * 隐身。
     */
    static readonly invisibility: EffectType;
    /**
     * 跳跃提升。
     */
    static readonly jumpBoost: EffectType;
    /**
     * 飘浮。
     */
    static readonly levitation: EffectType;
    /**
     * 挖掘疲劳。
     */
    static readonly miningFatigue: EffectType;
    /**
     * 反胃。
     */
    static readonly nausea: EffectType;
    /**
     * 夜视。
     */
    static readonly nightVision: EffectType;
    /**
     * 中毒。
     */
    static readonly poison: EffectType;
    /**
     * 生命恢复。
     */
    static readonly regeneration: EffectType;
    /**
     * 抗性提升。
     */
    static readonly resistance: EffectType;
    /**
     * 饱和。
     */
    static readonly saturation: EffectType;
    /**
     * 缓降。
     */
    static readonly slowFalling: EffectType;
    /**
     * 缓慢。
     */
    static readonly slowness: EffectType;
    /**
     * 速度。
     */
    static readonly speed: EffectType;
    /**
     * 力量。
     */
    static readonly strength: EffectType;
    /**
     * 村庄英雄。
     */
    static readonly villageHero: EffectType;
    /**
     * 水下呼吸。
     */
    static readonly waterBreathing: EffectType;
    /**
     * 虚弱。
     */
    static readonly weakness: EffectType;
    /**
     * 凋零。
     */
    static readonly wither: EffectType;
}
/**
 * 表示 Minecraft 内置的可用魔咒类型的集合。
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEnchantmentTypes {
    protected constructor();
    /**
     * 水下速掘。
     */
    static readonly aquaAffinity: EnchantmentType;
    /**
     * 节肢杀手。
     */
    static readonly baneOfArthropods: EnchantmentType;
    /**
     * 绑定诅咒。
     */
    static readonly binding: EnchantmentType;
    /**
     * 爆炸保护。
     */
    static readonly blastProtection: EnchantmentType;
    /**
     * 引雷。
     */
    static readonly channeling: EnchantmentType;
    /**
     * 深海探索者。
     */
    static readonly depthStrider: EnchantmentType;
    /**
     * 效率。
     */
    static readonly efficiency: EnchantmentType;
    /**
     * 摔落保护。
     */
    static readonly featherFalling: EnchantmentType;
    /**
     * 火焰附加。
     */
    static readonly fireAspect: EnchantmentType;
    /**
     * 火焰保护。
     */
    static readonly fireProtection: EnchantmentType;
    /**
     * 火矢。
     */
    static readonly flame: EnchantmentType;
    /**
     * 时运。
     */
    static readonly fortune: EnchantmentType;
    /**
     * 冰霜行者。
     */
    static readonly frostWalker: EnchantmentType;
    /**
     * 穿刺。
     */
    static readonly impaling: EnchantmentType;
    /**
     * 无限。
     */
    static readonly infinity: EnchantmentType;
    /**
     * 击退。
     */
    static readonly knockback: EnchantmentType;
    /**
     * 抢夺。
     */
    static readonly looting: EnchantmentType;
    /**
     * 忠诚。
     */
    static readonly loyalty: EnchantmentType;
    /**
     * 海之眷顾。
     */
    static readonly luckOfTheSea: EnchantmentType;
    /**
     * 饵钓。
     */
    static readonly lure: EnchantmentType;
    /**
     * 经验修补。
     */
    static readonly mending: EnchantmentType;
    /**
     * 多重射击。
     */
    static readonly multishot: EnchantmentType;
    /**
     * 穿透。
     */
    static readonly piercing: EnchantmentType;
    /**
     * 力量。
     */
    static readonly power: EnchantmentType;
    /**
     * 弹射物保护。
     */
    static readonly projectileProtection: EnchantmentType;
    /**
     * 保护。
     */
    static readonly protection: EnchantmentType;
    /**
     * 冲击。
     */
    static readonly punch: EnchantmentType;
    /**
     * 快速装填。
     */
    static readonly quickCharge: EnchantmentType;
    /**
     * 水下呼吸。
     */
    static readonly respiration: EnchantmentType;
    /**
     * 激流。
     */
    static readonly riptide: EnchantmentType;
    /**
     * 锋利。
     */
    static readonly sharpness: EnchantmentType;
    /**
     * 精准采集。
     */
    static readonly silkTouch: EnchantmentType;
    /**
     * 亡灵杀手。
     */
    static readonly smite: EnchantmentType;
    /**
     * 灵魂疾行。
     */
    static readonly soulSpeed: EnchantmentType;
    /**
     * 迅捷潜行。
     */
    static readonly swiftSneak: EnchantmentType;
    /**
     * 荆棘。
     */
    static readonly thorns: EnchantmentType;
    /**
     * 耐久。
     */
    static readonly unbreaking: EnchantmentType;
    /**
     * 消失诅咒。
     */
    static readonly vanishing: EnchantmentType;
}
/**
 * 表示 Minecraft 已注册的实体类型的集合。
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftEntityTypes {
    protected constructor();
    /**
     * 智能体。
     */
    static readonly agent: EntityType;
    /**
     * 悦灵。
     */
    static readonly allay: EntityType;
    /**
     * 区域效果云。
     */
    static readonly areaEffectCloud: EntityType;
    /**
     * 盔甲架。
     */
    static readonly armorStand: EntityType;
    /**
     * 箭。
     */
    static readonly arrow: EntityType;
    /**
     * 美西螈。
     */
    static readonly axolotl: EntityType;
    /**
     * 蝙蝠。
     */
    static readonly bat: EntityType;
    /**
     * 蜜蜂。
     */
    static readonly bee: EntityType;
    /**
     * 烈焰人。
     */
    static readonly blaze: EntityType;
    /**
     * 船。
     */
    static readonly boat: EntityType;
    /**
     * 猫。
     */
    static readonly cat: EntityType;
    /**
     * 洞穴蜘蛛。
     */
    static readonly caveSpider: EntityType;
    /**
     * 运输船。
     */
    static readonly chestBoat: EntityType;
    /**
     * 运输矿车。
     */
    static readonly chestMinecart: EntityType;
    /**
     * 鸡。
     */
    static readonly chicken: EntityType;
    /**
     * 鳕鱼。
     */
    static readonly cod: EntityType;
    /**
     * 命令方块矿车。
     */
    static readonly commandBlockMinecart: EntityType;
    /**
     * 牛。
     */
    static readonly cow: EntityType;
    /**
     * 苦力怕。
     */
    static readonly creeper: EntityType;
    /**
     * 海豚。
     */
    static readonly dolphin: EntityType;
    /**
     * 驴。
     */
    static readonly donkey: EntityType;
    /**
     * 末影龙火球。
     */
    static readonly dragonFireball: EntityType;
    /**
     * 溺尸。
     */
    static readonly drowned: EntityType;
    /**
     * 鸡蛋。
     */
    static readonly egg: EntityType;
    /**
     * 远古守卫者。
     */
    static readonly elderGuardian: EntityType;
    /**
     * 末地水晶。
     */
    static readonly enderCrystal: EntityType;
    /**
     * 末影龙。
     */
    static readonly enderDragon: EntityType;
    /**
     * 末影人。
     */
    static readonly enderman: EntityType;
    /**
     * 末影螨。
     */
    static readonly endermite: EntityType;
    /**
     * 末影珍珠。
     */
    static readonly enderPearl: EntityType;
    /**
     * 唤魔者。
     */
    static readonly evocationIllager: EntityType;
    /**
     * 末影之眼。
     */
    static readonly eyeOfEnderSignal: EntityType;
    /**
     * 火球。
     */
    static readonly fireball: EntityType;
    /**
     * 烟花火箭。
     */
    static readonly fireworksRocket: EntityType;
    /**
     * 浮漂。
     */
    static readonly fishingHook: EntityType;
    /**
     * 狐狸。
     */
    static readonly fox: EntityType;
    /**
     * 青蛙。
     */
    static readonly frog: EntityType;
    /**
     * 恶魂。
     */
    static readonly ghast: EntityType;
    /**
     * 发光鱿鱼。
     */
    static readonly glowSquid: EntityType;
    /**
     * 山羊。
     */
    static readonly goat: EntityType;
    /**
     * 守卫者。
     */
    static readonly guardian: EntityType;
    /**
     * 疣猪兽。
     */
    static readonly hoglin: EntityType;
    /**
     * 漏斗矿车。
     */
    static readonly hopperMinecart: EntityType;
    /**
     * 马。
     */
    static readonly horse: EntityType;
    /**
     * 尸壳。
     */
    static readonly husk: EntityType;
    /**
     * 铁傀儡。
     */
    static readonly ironGolem: EntityType;
    /**
     * 闪电。
     */
    static readonly lightningBolt: EntityType;
    /**
     * 滞留药水。
     */
    static readonly lingeringPotion: EntityType;
    /**
     * 羊驼。
     */
    static readonly llama: EntityType;
    /**
     * 羊驼唾沫。
     */
    static readonly llamaSpit: EntityType;
    /**
     * 岩浆怪。
     */
    static readonly magmaCube: EntityType;
    /**
     * 矿车。
     */
    static readonly minecart: EntityType;
    /**
     * 哞菇。
     */
    static readonly mooshroom: EntityType;
    /**
     * 骡。
     */
    static readonly mule: EntityType;
    /**
     * NPC。
     */
    static readonly npc: EntityType;
    /**
     * 豹猫。
     */
    static readonly ocelot: EntityType;
    /**
     * 熊猫。
     */
    static readonly panda: EntityType;
    /**
     * 鹦鹉。
     */
    static readonly parrot: EntityType;
    /**
     * 幻翼。
     */
    static readonly phantom: EntityType;
    /**
     * 猪。
     */
    static readonly pig: EntityType;
    /**
     * 猪灵。
     */
    static readonly piglin: EntityType;
    /**
     * 猪灵蛮兵。
     */
    static readonly piglinBrute: EntityType;
    /**
     * 掠夺者。
     */
    static readonly pillager: EntityType;
    /**
     * 玩家。
     */
    static readonly player: EntityType;
    /**
     * 北极熊。
     */
    static readonly polarBear: EntityType;
    /**
     * 河豚。
     */
    static readonly pufferfish: EntityType;
    /**
     * 兔子。
     */
    static readonly rabbit: EntityType;
    /**
     * 劫掠兽。
     */
    static readonly ravager: EntityType;
    /**
     * 鲑鱼。
     */
    static readonly salmon: EntityType;
    /**
     * 绵羊。
     */
    static readonly sheep: EntityType;
    /**
     * 潜影贝。
     */
    static readonly shulker: EntityType;
    /**
     * 潜影弹。
     */
    static readonly shulkerBullet: EntityType;
    /**
     * 蠹虫。
     */
    static readonly silverfish: EntityType;
    /**
     * 骷髅。
     */
    static readonly skeleton: EntityType;
    /**
     * 骷髅马。
     */
    static readonly skeletonHorse: EntityType;
    /**
     * 史莱姆。
     */
    static readonly slime: EntityType;
    /**
     * 小火球。
     */
    static readonly smallFireball: EntityType;
    /**
     * 雪球。
     */
    static readonly snowball: EntityType;
    /**
     * 雪傀儡。
     */
    static readonly snowGolem: EntityType;
    /**
     * 蜘蛛。
     */
    static readonly spider: EntityType;
    /**
     * 喷溅药水。
     */
    static readonly splashPotion: EntityType;
    /**
     * 鱿鱼。
     */
    static readonly squid: EntityType;
    /**
     * 流浪者。
     */
    static readonly stray: EntityType;
    /**
     * 炽足兽。
     */
    static readonly strider: EntityType;
    /**
     * 蝌蚪。
     */
    static readonly tadpole: EntityType;
    /**
     * 三叉戟。
     */
    static readonly thrownTrident: EntityType;
    /**
     * 被激活的TNT。
     */
    static readonly tnt: EntityType;
    /**
     * TNT矿车。
     */
    static readonly tntMinecart: EntityType;
    /**
     * 行商羊驼。
     */
    static readonly traderLlama: EntityType;
    /**
     * 相机。
     */
    static readonly tripodCamera: EntityType;
    /**
     * 热带鱼。
     */
    static readonly tropicalfish: EntityType;
    /**
     * 海龟。
     */
    static readonly turtle: EntityType;
    /**
     * 恼鬼。
     */
    static readonly vex: EntityType;
    /**
     * 村民。
     */
    static readonly villager: EntityType;
    /**
     * 村民。
     */
    static readonly villagerV2: EntityType;
    /**
     * 卫道士。
     */
    static readonly vindicator: EntityType;
    /**
     * 流浪商人。
     */
    static readonly wanderingTrader: EntityType;
    /**
     * 监守者。
     */
    static readonly warden: EntityType;
    /**
     * 女巫。
     */
    static readonly witch: EntityType;
    /**
     * 凋灵。
     */
    static readonly wither: EntityType;
    /**
     * 凋灵骷髅。
     */
    static readonly witherSkeleton: EntityType;
    /**
     * 凋灵之首。
     */
    static readonly witherSkull: EntityType;
    /**
     * 蓝色凋灵之首。
     */
    static readonly witherSkullDangerous: EntityType;
    /**
     * 狼。
     */
    static readonly wolf: EntityType;
    /**
     * 附魔之瓶。
     */
    static readonly xpBottle: EntityType;
    /**
     * 经验球。
     */
    static readonly xpOrb: EntityType;
    /**
     * 僵尸疣猪兽。
     */
    static readonly zoglin: EntityType;
    /**
     * 僵尸。
     */
    static readonly zombie: EntityType;
    /**
     * 僵尸马。
     */
    static readonly zombieHorse: EntityType;
    /**
     * 僵尸猪灵。
     */
    static readonly zombiePigman: EntityType;
    /**
     * 僵尸村民。
     */
    static readonly zombieVillager: EntityType;
    /**
     * 僵尸村民。
     */
    static readonly zombieVillagerV2: EntityType;
}
/**
 * @beta
 * 表示 Minecraft 原版与教育版已注册的物品类型的集合。
 * 
 * Contains definitions of standard Minecraft and Minecraft
 * Education Edition block types.
 */
// tslint:disable-next-line:no-unnecessary-class
export class MinecraftItemTypes {
    protected constructor();
    /**
     * 金合欢木船。
     */
    static readonly acaciaBoat: ItemType;
    /**
     * 金合欢木按钮。
     * 
     * Represents an item that can place an acacia button within
     * Minecraft.
     */
    static readonly acaciaButton: ItemType;
    /**
     * 金合欢木运输船。
     */
    static readonly acaciaChestBoat: ItemType;
    /**
     * 金合欢木门。
     * 
     * Represents an item that can place an acacia door within
     * Minecraft.
     */
    static readonly acaciaDoor: ItemType;
    /**
     * 金合欢木栅栏门。
     * 
     * Represents an item that can place an acacia fence gate
     * within Minecraft.
     */
    static readonly acaciaFenceGate: ItemType;
    /**
     * 金合欢木压力板。
     * 
     * Represents an item that can place an acacia pressure plate
     * within Minecraft.
     */
    static readonly acaciaPressurePlate: ItemType;
    /**
     * 金合欢木告示牌。
     * 
     * Represents an item that can place an acacia sign within
     * Minecraft.
     */
    static readonly acaciaSign: ItemType;
    /**
     * 金合欢木楼梯。
     * 
     * Represents an item that can place a set of acacia stairs
     * within Minecraft.
     */
    static readonly acaciaStairs: ItemType;
    /**
     * 金合欢木活板门。
     * 
     * Represents an item that can place an acacia trapdoor within
     * Minecraft.
     */
    static readonly acaciaTrapdoor: ItemType;
    /**
     * 激活铁轨。
     * 
     * Represents an item that can place an activator rail within
     * Minecraft.
     */
    static readonly activatorRail: ItemType;
    /**
     * 悦灵刷怪蛋。
     */
    static readonly allaySpawnEgg: ItemType;
    /**
     * 允许方块。
     * 
     * Represents an item that can place an allow block within
     * Minecraft.
     */
    static readonly allow: ItemType;
    /**
     * 紫水晶块。
     * 
     * Represents an item that can place an amethyst block within
     * Minecraft.
     */
    static readonly amethystBlock: ItemType;
    /**
     * 紫水晶簇。
     * 
     * Represents an item that can place a cluster of amethyst
     * within Minecraft.
     */
    static readonly amethystCluster: ItemType;
    /**
     * 紫水晶碎片。
     */
    static readonly amethystShard: ItemType;
    /**
     * 远古残骸。
     * 
     * Represents an item that can place ancient debris within
     * Minecraft.
     */
    static readonly ancientDebris: ItemType;
    /**
     * 安山岩楼梯。
     * 
     * Represents an item that can place andesite stairs within
     * Minecraft.
     */
    static readonly andesiteStairs: ItemType;
    /**
     * 铁砧。
     * 
     * Represents an item that can place an anvil within Minecraft.
     */
    static readonly anvil: ItemType;
    /**
     * 苹果。
     */
    static readonly apple: ItemType;
    /**
     * 盔甲架。
     */
    static readonly armorStand: ItemType;
    /**
     * 箭。
     */
    static readonly arrow: ItemType;
    /**
     * 美西螈桶。
     */
    static readonly axolotlBucket: ItemType;
    /**
     * 美西螈刷怪蛋。
     */
    static readonly axolotlSpawnEgg: ItemType;
    /**
     * 杜鹃花丛。
     * 
     * Represents an item that can place an azalea flowering plant
     * within Minecraft.
     */
    static readonly azalea: ItemType;
    /**
     * 杜鹃树叶。
     * 
     * Represents an item that can place azalea leaves within
     * Minecraft.
     */
    static readonly azaleaLeaves: ItemType;
    /**
     * 盛开的杜鹃树叶。
     * 
     * Represents flowered azalea leaves within Minecraft.
     */
    static readonly azaleaLeavesFlowered: ItemType;
    /**
     * 烤马铃薯。
     */
    static readonly bakedPotato: ItemType;
    /**
     * 竹子。
     * 
     * Represents an item that can place a bamboo tree within
     * Minecraft.
     */
    static readonly bamboo: ItemType;
    /**
     * 旗帜。
     */
    static readonly banner: ItemType;
    /**
     * 旗帜图案。
     */
    static readonly bannerPattern: ItemType;
    /**
     * 木桶。
     * 
     * Represents an item that can place a barrel within Minecraft.
     */
    static readonly barrel: ItemType;
    /**
     * 屏障。
     * 
     * Represents an item that can place an invisible but logical
     * barrier within Minecraft.
     */
    static readonly barrier: ItemType;
    /**
     * 玄武岩。
     * 
     * Represents an item that can place a basalt block within
     * Minecraft.
     */
    static readonly basalt: ItemType;
    /**
     * 蝙蝠刷怪蛋。
     */
    static readonly batSpawnEgg: ItemType;
    /**
     * 信标。
     * 
     * Represents an item that can place a beacon within Minecraft.
     */
    static readonly beacon: ItemType;
    /**
     * 床。
     * 
     * Represents an item that can place a bed within Minecraft.
     */
    static readonly bed: ItemType;
    /**
     * 基岩。
     * 
     * Represents an item that can place a bedrock block within
     * Minecraft.
     */
    static readonly bedrock: ItemType;
    /**
     * 生牛肉。
     */
    static readonly beef: ItemType;
    /**
     * 蜂箱。
     * 
     * Represents an item that can place a beehive within
     * Minecraft.
     */
    static readonly beehive: ItemType;
    /**
     * 蜂巢。
     * 
     * Represents an item that can place a bee nest within
     * Minecraft.
     */
    static readonly beeNest: ItemType;
    /**
     * 蜜蜂刷怪蛋。
     */
    static readonly beeSpawnEgg: ItemType;
    /**
     * 甜菜根。
     * 
     * Represents an item that can place a beetroot vegetable
     * within Minecraft.
     */
    static readonly beetroot: ItemType;
    /**
     * 甜菜种子。
     */
    static readonly beetrootSeeds: ItemType;
    /**
     * 甜菜汤。
     */
    static readonly beetrootSoup: ItemType;
    /**
     * 钟。
     * 
     * Represents an item that can place a bell within Minecraft.
     */
    static readonly bell: ItemType;
    /**
     * 大型垂滴叶。
     * 
     * Represents an item that can place a big dripleaf plant
     * within Minecraft.
     */
    static readonly bigDripleaf: ItemType;
    /**
     * 白桦木船。
     */
    static readonly birchBoat: ItemType;
    /**
     * 白桦木按钮。
     * 
     * Represents an item that can place a birch button within
     * Minecraft.
     */
    static readonly birchButton: ItemType;
    /**
     * 白桦木运输船。
     */
    static readonly birchChestBoat: ItemType;
    /**
     * 白桦木门。
     * 
     * Represents an item that can place a birch door within
     * Minecraft.
     */
    static readonly birchDoor: ItemType;
    /**
     * 白桦木栅栏门。
     * 
     * Represents an item that can place a birch fence gate within
     * Minecraft.
     */
    static readonly birchFenceGate: ItemType;
    /**
     * 白桦木压力板。
     * 
     * Represents an item that can place a birch pressure plate
     * within Minecraft.
     */
    static readonly birchPressurePlate: ItemType;
    /**
     * 白桦木告示牌。
     * 
     * Represents an item that can place a birch sign within
     * Minecraft.
     */
    static readonly birchSign: ItemType;
    /**
     * 白桦木楼梯。
     * 
     * Represents an item that can place a birch stairs block
     * within Minecraft.
     */
    static readonly birchStairs: ItemType;
    /**
     * 白桦木活板门。
     * 
     * Represents an item that can place a birch trapdoor within
     * Minecraft.
     */
    static readonly birchTrapdoor: ItemType;
    /**
     * 黑色蜡烛。
     * 
     * Represents an item that can place a black candle within
     * Minecraft.
     */
    static readonly blackCandle: ItemType;
    /**
     * 黑色染料。
     */
    static readonly blackDye: ItemType;
    /**
     * 黑色带釉陶瓦。
     * 
     * Represents an item that can place a black glazed terracotta
     * block within Minecraft.
     */
    static readonly blackGlazedTerracotta: ItemType;
    /**
     * 黑石。
     * 
     * Represents an item that can place a blackstone block within
     * Minecraft.
     */
    static readonly blackstone: ItemType;
    /**
     * 黑石台阶。
     * 
     * Represents an item that can place a blackstone slab within
     * Minecraft.
     */
    static readonly blackstoneSlab: ItemType;
    /**
     * 黑石楼梯。
     * 
     * Represents blackstone stairs within Minecraft.
     */
    static readonly blackstoneStairs: ItemType;
    /**
     * 黑石墙。
     * 
     * Represents an item that can place a blackstone wall within
     * Minecraft.
     */
    static readonly blackstoneWall: ItemType;
    /**
     * 黑色羊毛。
     */
    static readonly blackWool: ItemType;
    /**
     * 高炉。
     * 
     * Represents an item that can place a blast furnace within
     * Minecraft.
     */
    static readonly blastFurnace: ItemType;
    /**
     * 烈焰粉。
     */
    static readonly blazePowder: ItemType;
    /**
     * 烈焰棒。
     */
    static readonly blazeRod: ItemType;
    /**
     * 烈焰人刷怪蛋。
     */
    static readonly blazeSpawnEgg: ItemType;
    /**
     * 蓝色蜡烛。
     * 
     * Represents an item that can place a blue candle within
     * Minecraft.
     */
    static readonly blueCandle: ItemType;
    /**
     * 蓝色染料。
     */
    static readonly blueDye: ItemType;
    /**
     * 蓝色带釉陶瓦。
     * 
     * Represents an item that can place a blue glazed terracotta
     * block within Minecraft.
     */
    static readonly blueGlazedTerracotta: ItemType;
    /**
     * 蓝冰。
     * 
     * Represents an item that can place a blue ice block within
     * Minecraft.
     */
    static readonly blueIce: ItemType;
    /**
     * 蓝色羊毛。
     */
    static readonly blueWool: ItemType;
    /**
     * 船。
     */
    static readonly boat: ItemType;
    /**
     * 骨头。
     */
    static readonly bone: ItemType;
    /**
     * 骨块。
     * 
     * Represents an item that can place a bone block within
     * Minecraft.
     */
    static readonly boneBlock: ItemType;
    /**
     * 骨粉。
     */
    static readonly boneMeal: ItemType;
    /**
     * 书。
     */
    static readonly book: ItemType;
    /**
     * 书架。
     * 
     * Represents an item that can place an unbreakable border
     * block within Minecraft.
     */
    static readonly bookshelf: ItemType;
    /**
     * 边界。
     * 
     * Represents an item that can place a border block within
     * Minecraft.
     */
    static readonly borderBlock: ItemType;
    /**
     * 波纹边旗帜图案。
     */
    static readonly bordureIndentedBannerPattern: ItemType;
    /**
     * 弓。
     */
    static readonly bow: ItemType;
    /**
     * 碗。
     */
    static readonly bowl: ItemType;
    /**
     * 面包。
     */
    static readonly bread: ItemType;
    /**
     * 酿造台。
     * 
     * Represents an item that can place a brewing stand within
     * Minecraft.
     */
    static readonly brewingStand: ItemType;
    /**
     * 红砖。
     */
    static readonly brick: ItemType;
    /**
     * 红砖块。
     * 
     * Represents an item that can place a block of brick within
     * Minecraft.
     */
    static readonly brickBlock: ItemType;
    /**
     * 红砖楼梯。
     * 
     * Represents brick stairs within Minecraft.
     */
    static readonly brickStairs: ItemType;
    /**
     * 棕色蜡烛。
     * 
     * Represents an item that can place a brown candle within
     * Minecraft.
     */
    static readonly brownCandle: ItemType;
    /**
     * 棕色染料。
     */
    static readonly brownDye: ItemType;
    /**
     * 棕色带釉陶瓦。
     * 
     * Represents an item that can place a brown glazed terracotta
     * block within Minecraft.
     */
    static readonly brownGlazedTerracotta: ItemType;
    /**
     * 棕色蘑菇。
     * 
     * Represents an item that can place a brown mushroom within
     * Minecraft.
     */
    static readonly brownMushroom: ItemType;
    /**
     * 棕色蘑菇方块。
     * 
     * Represents an item that can place a block of brown mushroom
     * within Minecraft.
     */
    static readonly brownMushroomBlock: ItemType;
    /**
     * 棕色羊毛。
     */
    static readonly brownWool: ItemType;
    /**
     * 桶。
     */
    static readonly bucket: ItemType;
    /**
     * 紫水晶母岩。
     * 
     * Represents an item that can place a block of budding
     * amethyst within Minecraft.
     */
    static readonly buddingAmethyst: ItemType;
    /**
     * 仙人掌。
     * 
     * Represents an item that can place a cactus within Minecraft.
     */
    static readonly cactus: ItemType;
    /**
     * 蛋糕。
     * 
     * Represents an item that can place a cake within Minecraft.
     */
    static readonly cake: ItemType;
    /**
     * 方解石。
     * 
     * Represents an item that can place a calcite block within
     * Minecraft.
     */
    static readonly calcite: ItemType;
    /**
     * 营火。
     * 
     * Represents an item that can place a campfire within
     * Minecraft.
     */
    static readonly campfire: ItemType;
    /**
     * 蜡烛。
     * 
     * Represents an item that can place a candle within Minecraft.
     */
    static readonly candle: ItemType;
    /**
     * 地毯。
     * 
     * Represents an item that can place a carpet within Minecraft.
     */
    static readonly carpet: ItemType;
    /**
     * 胡萝卜。
     */
    static readonly carrot: ItemType;
    /**
     * 胡萝卜钓竿。
     */
    static readonly carrotOnAStick: ItemType;
    /**
     * 制图台。
     * 
     * Represents an item that can place a cartography table block
     * within Minecraft.
     */
    static readonly cartographyTable: ItemType;
    /**
     * 雕刻过的南瓜。
     * 
     * Represents an item that can place a carved pumpkin within
     * Minecraft.
     */
    static readonly carvedPumpkin: ItemType;
    /**
     * 猫刷怪蛋。
     */
    static readonly catSpawnEgg: ItemType;
    /**
     * 炼药锅。
     * 
     * Represents an item that can place a cauldron within
     * Minecraft.
     */
    static readonly cauldron: ItemType;
    /**
     * 洞穴蜘蛛刷怪蛋。
     */
    static readonly caveSpiderSpawnEgg: ItemType;
    /**
     * 锁链。
     * 
     * Represents an item that can place a metallic chain within
     * Minecraft.
     */
    static readonly chain: ItemType;
    /**
     * 连锁型命令方块。
     * 
     * Represents an item that can place a block that gives off
     * heat but not light, within Minecraft Education Edition or
     * Bedrock Edition with Education features.
     */
    static readonly chainCommandBlock: ItemType;
    /**
     * 锁链靴子。
     */
    static readonly chainmailBoots: ItemType;
    /**
     * 锁链胸甲。
     */
    static readonly chainmailChestplate: ItemType;
    /**
     * 锁链头盔。
     */
    static readonly chainmailHelmet: ItemType;
    /**
     * 锁链护腿。
     */
    static readonly chainmailLeggings: ItemType;
    /**
     * 木炭。
     */
    static readonly charcoal: ItemType;
    /**
     * 箱子。
     * 
     * Represents an item that can place a chest within Minecraft.
     */
    static readonly chest: ItemType;
    /**
     * 运输船。
     */
    static readonly chestBoat: ItemType;
    /**
     * 运输矿车。
     */
    static readonly chestMinecart: ItemType;
    /**
     * 鸡。
     */
    static readonly chicken: ItemType;
    /**
     * 鸡刷怪蛋。
     */
    static readonly chickenSpawnEgg: ItemType;
    /**
     * 雕纹深板岩。
     * 
     * Represents an item that can place a set of chiseled
     * deepslate within Minecraft.
     */
    static readonly chiseledDeepslate: ItemType;
    /**
     * 雕纹下界砖块。
     * 
     * Represents an item that can place a block of chiseled nether
     * bricks within Minecraft.
     */
    static readonly chiseledNetherBricks: ItemType;
    /**
     * 雕纹磨制黑石。
     * 
     * Represents an item that can place a block of chiseled
     * polished blackstone within Minecraft.
     */
    static readonly chiseledPolishedBlackstone: ItemType;
    /**
     * 紫颂花。
     * 
     * Represents an item that can place a chorus flower within
     * Minecraft.
     */
    static readonly chorusFlower: ItemType;
    /**
     * 紫颂果。
     */
    static readonly chorusFruit: ItemType;
    /**
     * 紫颂植株。
     * 
     * Represents an item that can place a chorus plant within
     * Minecraft.
     */
    static readonly chorusPlant: ItemType;
    /**
     * 黏土块。
     * 
     * Represents an item that can place a block of clay within
     * Minecraft.
     */
    static readonly clay: ItemType;
    /**
     * 黏土球。
     */
    static readonly clayBall: ItemType;
    /**
     * 时钟。
     */
    static readonly clock: ItemType;
    /**
     * 煤炭。
     */
    static readonly coal: ItemType;
    /**
     * 煤炭块。
     * 
     * Represents an item that can place a block of solid coal
     * within Minecraft.
     */
    static readonly coalBlock: ItemType;
    /**
     * 煤矿石。
     * 
     * Represents an item that can place a block with embedded coal
     * ore within Minecraft.
     */
    static readonly coalOre: ItemType;
    /**
     * 深板岩圆石。
     * 
     * Represents an item that can place a block of cobbled
     * deepslate within Minecraft.
     */
    static readonly cobbledDeepslate: ItemType;
    /**
     * 深板岩圆石台阶。
     * 
     * Represents an item that can place a slab of deepslate within
     * Minecraft.
     */
    static readonly cobbledDeepslateSlab: ItemType;
    /**
     * 深板岩圆石楼梯。
     * 
     * Represents cobbled deepslate stairs within Minecraft.
     */
    static readonly cobbledDeepslateStairs: ItemType;
    /**
     * 深板岩圆石墙。
     * 
     * Represents an item that can place a cobbled deepslate wall
     * within Minecraft.
     */
    static readonly cobbledDeepslateWall: ItemType;
    /**
     * 圆石。
     * 
     * Represents an item that can place a block of cobblestone
     * within Minecraft.
     */
    static readonly cobblestone: ItemType;
    /**
     * 圆石墙/苔石墙/花岗岩墙/闪长岩墙/安山岩墙/砂岩墙/红砖墙/石砖墙/苔石砖墙/末地石砖墙/下界砖墙/海晶石墙/红砂岩墙/红色下界砖墙。
     * 
     * Represents an item that can place a wall of cobblestone
     * within Minecraft.
     */
    static readonly cobblestoneWall: ItemType;
    /**
     * 可可豆。
     */
    static readonly cocoaBeans: ItemType;
    /**
     * 鳕鱼。
     */
    static readonly cod: ItemType;
    /**
     * 鳕鱼桶。
     */
    static readonly codBucket: ItemType;
    /**
     * 鳕鱼刷怪蛋。
     */
    static readonly codSpawnEgg: ItemType;
    /**
     * 命令方块。
     * 
     * Represents an item that can place a block that can run
     * commands within Minecraft.
     */
    static readonly commandBlock: ItemType;
    /**
     * 命令方块矿车。
     */
    static readonly commandBlockMinecart: ItemType;
    /**
     * 红石比较器。
     */
    static readonly comparator: ItemType;
    /**
     * 指南针。
     */
    static readonly compass: ItemType;
    /**
     * 堆肥桶。
     * 
     * Represents an item that can place a composter block within
     * Minecraft.
     */
    static readonly composter: ItemType;
    /**
     * 混凝土。
     * 
     * Represents an item that can place a block of concrete powder
     * within Minecraft.
     */
    static readonly concrete: ItemType;
    /**
     * 混凝土粉末。
     */
    static readonly concretePowder: ItemType;
    /**
     * 潮涌核心。
     * 
     * Represents an item that can place a conduit block within
     * Minecraft.
     */
    static readonly conduit: ItemType;
    /**
     * 牛排。
     */
    static readonly cookedBeef: ItemType;
    /**
     * 熟鸡肉。
     */
    static readonly cookedChicken: ItemType;
    /**
     * 熟鳕鱼。
     */
    static readonly cookedCod: ItemType;
    /**
     * 熟羊肉。
     */
    static readonly cookedMutton: ItemType;
    /**
     * 熟猪排。
     */
    static readonly cookedPorkchop: ItemType;
    /**
     * 熟兔肉。
     */
    static readonly cookedRabbit: ItemType;
    /**
     * 熟鲑鱼。
     */
    static readonly cookedSalmon: ItemType;
    /**
     * 曲奇。
     */
    static readonly cookie: ItemType;
    /**
     * 铜块。
     * 
     * Represents an item that can place a solid block of copper
     * within Minecraft.
     */
    static readonly copperBlock: ItemType;
    /**
     * 铜锭。
     */
    static readonly copperIngot: ItemType;
    /**
     * 铜矿石。
     * 
     * Represents an item that can place a block with embedded
     * copper ore within Minecraft.
     */
    static readonly copperOre: ItemType;
    /**
     * 珊瑚。
     * 
     * Represents coral within Minecraft.
     */
    static readonly coral: ItemType;
    /**
     * 珊瑚块。
     * 
     * Represents an item that can place a solid block of coral
     * within Minecraft.
     */
    static readonly coralBlock: ItemType;
    /**
     * 珊瑚扇。
     * 
     * Represents an item that can place a fan formation of coral
     * within Minecraft.
     */
    static readonly coralFan: ItemType;
    /**
     * 失活的珊瑚扇。
     * 
     * Represents an item that can place a fan formation of dead
     * coral within Minecraft.
     */
    static readonly coralFanDead: ItemType;
    /**
     * 牛刷怪蛋。
     */
    static readonly cowSpawnEgg: ItemType;
    /**
     * 裂纹深板岩砖。
     * 
     * Represents an item that can place a block of cracked
     * deepslate bricks within Minecraft.
     */
    static readonly crackedDeepslateBricks: ItemType;
    /**
     * 裂纹深板岩瓦。
     * 
     * Represents tiles of cracked deepslate within Minecraft.
     */
    static readonly crackedDeepslateTiles: ItemType;
    /**
     * 裂纹下界砖块。
     * 
     * Represents an item that can place a block of cracked nether
     * bricks within Minecraft.
     */
    static readonly crackedNetherBricks: ItemType;
    /**
     * 裂纹磨制黑石砖。
     * 
     * Represents an item that can place a block of cracked and
     * polished blackstone bricks within Minecraft.
     */
    static readonly crackedPolishedBlackstoneBricks: ItemType;
    /**
     * 工作台。
     * 
     * Represents an item that can place a crafting table within
     * Minecraft.
     */
    static readonly craftingTable: ItemType;
    /**
     * 苦力怕盾徽旗帜图案。
     */
    static readonly creeperBannerPattern: ItemType;
    /**
     * 苦力怕刷怪蛋。
     */
    static readonly creeperSpawnEgg: ItemType;
    /**
     * 绯红木按钮。
     * 
     * Represents an item that can place a crimson button within
     * Minecraft.
     */
    static readonly crimsonButton: ItemType;
    /**
     * 绯红木门。
     * 
     * Represents an item that can place a crimson door within
     * Minecraft.
     */
    static readonly crimsonDoor: ItemType;
    /**
     * 绯红木栅栏。
     * 
     * Represents an item that can place a crimson fence within
     * Minecraft.
     */
    static readonly crimsonFence: ItemType;
    /**
     * 绯红木栅栏门。
     * 
     * Represents an item that can place a crimson fence gate
     * within Minecraft.
     */
    static readonly crimsonFenceGate: ItemType;
    /**
     * 绯红菌。
     * 
     * Represents an item that can place a crimson fungus within
     * Minecraft.
     */
    static readonly crimsonFungus: ItemType;
    /**
     * 绯红菌核。
     * 
     * Represents crimson hyphae within Minecraft.
     */
    static readonly crimsonHyphae: ItemType;
    /**
     * 绯红菌岩。
     * 
     * Represents crimson nylium within Minecraft.
     */
    static readonly crimsonNylium: ItemType;
    /**
     * 绯红木板。
     * 
     * Represents an item that can place a set of crimson planks
     * within Minecraft.
     */
    static readonly crimsonPlanks: ItemType;
    /**
     * 绯红木压力板。
     * 
     * Represents an item that can place a crimson pressure plate
     * within Minecraft.
     */
    static readonly crimsonPressurePlate: ItemType;
    /**
     * 绯红菌索。
     * 
     * Represents an item that can place a set of crimson roots
     * within Minecraft.
     */
    static readonly crimsonRoots: ItemType;
    /**
     * 绯红木告示牌。
     */
    static readonly crimsonSign: ItemType;
    /**
     * 绯红木台阶。
     * 
     * Represents an item that can place a crimson slab within
     * Minecraft.
     */
    static readonly crimsonSlab: ItemType;
    /**
     * 绯红木楼梯。
     * 
     * Represents an item that can place a set of crimson stairs
     * within Minecraft.
     */
    static readonly crimsonStairs: ItemType;
    /**
     * 绯红菌柄。
     * 
     * Represents an item that can place a crimson stem within
     * Minecraft.
     */
    static readonly crimsonStem: ItemType;
    /**
     * 绯红木活板门。
     * 
     * Represents an item that can place a crimson trapdoor within
     * Minecraft.
     */
    static readonly crimsonTrapdoor: ItemType;
    /**
     * 弩。
     */
    static readonly crossbow: ItemType;
    /**
     * 哭泣的黑曜石。
     * 
     * Represents crying obsidian within Minecraft.
     */
    static readonly cryingObsidian: ItemType;
    /**
     * 切制铜块。
     * 
     * Represents an item that can place a cut copper block within
     * Minecraft.
     */
    static readonly cutCopper: ItemType;
    /**
     * 切制铜台阶。
     * 
     * Represents an item that can place a cut copper slab within
     * Minecraft.
     */
    static readonly cutCopperSlab: ItemType;
    /**
     * 切制铜楼梯。
     * 
     * Represents an item that can place a set of cut copper stairs
     * within Minecraft.
     */
    static readonly cutCopperStairs: ItemType;
    /**
     * 青色蜡烛。
     * 
     * Represents an item that can place a cyan-colored candle
     * within Minecraft.
     */
    static readonly cyanCandle: ItemType;
    /**
     * 青色染料。
     */
    static readonly cyanDye: ItemType;
    /**
     * 青色带釉陶瓦。
     * 
     * Represents an item that can place a block of cyan-colored
     * glazed terracotta within Minecraft.
     */
    static readonly cyanGlazedTerracotta: ItemType;
    /**
     * 青色羊毛。
     */
    static readonly cyanWool: ItemType;
    /**
     * 深色橡木船。
     */
    static readonly darkOakBoat: ItemType;
    /**
     * 深色橡木按钮。
     * 
     * Represents an item that can place a dark oak button within
     * Minecraft.
     */
    static readonly darkOakButton: ItemType;
    /**
     * 深色橡木运输船。
     */
    static readonly darkOakChestBoat: ItemType;
    /**
     * 深色橡木门。
     * 
     * Represents an item that can place a dark oak door within
     * Minecraft.
     */
    static readonly darkOakDoor: ItemType;
    /**
     * 深色橡木栅栏门。
     * 
     * Represents an item that can place a dark oak fence gate
     * within Minecraft.
     */
    static readonly darkOakFenceGate: ItemType;
    /**
     * 深色橡木压力板。
     * 
     * Represents an item that can place a dark oak pressure plate
     * within Minecraft.
     */
    static readonly darkOakPressurePlate: ItemType;
    /**
     * 深色橡木告示牌。
     * 
     * Represents an item that can place a dark oak sign within
     * Minecraft.
     */
    static readonly darkOakSign: ItemType;
    /**
     * 深色橡木楼梯。
     * 
     * Represents an item that can place a set of dark oak stairs
     * within Minecraft.
     */
    static readonly darkOakStairs: ItemType;
    /**
     * 深色橡木活板门。
     * 
     * Represents an item that can place a dark oak trapdoor within
     * Minecraft.
     */
    static readonly darkOakTrapdoor: ItemType;
    /**
     * 暗海晶石楼梯。
     * 
     * Represents an item that can place a set of dark prismarine
     * stairs within Minecraft.
     */
    static readonly darkPrismarineStairs: ItemType;
    /**
     * 阳光探测器。
     * 
     * Represents an item that can place a daylight detector within
     * Minecraft.
     */
    static readonly daylightDetector: ItemType;
    /**
     * 枯萎的灌木。
     * 
     * Represents an item that can place a dead bush within
     * Minecraft.
     */
    static readonly deadbush: ItemType;
    static readonly debugStick: ItemType;
    /**
     * 深板岩。
     * 
     * Represents an item that can place a block of deepslate
     * within Minecraft.
     */
    static readonly deepslate: ItemType;
    /**
     * 深板岩砖。
     * 
     * Represents an item that can place a block of deepslate
     * bricks within Minecraft.
     */
    static readonly deepslateBricks: ItemType;
    /**
     * 深板岩砖台阶。
     * 
     * Represents an item that can place a slab of deepslate brick
     * within Minecraft.
     */
    static readonly deepslateBrickSlab: ItemType;
    /**
     * 深板岩砖楼梯。
     * 
     * Represents an item that can place a set of deepslate brick
     * stairs within Minecraft.
     */
    static readonly deepslateBrickStairs: ItemType;
    /**
     * 深板岩砖墙。
     * 
     * Represents an item that can place a deepslate brick wall
     * within Minecraft.
     */
    static readonly deepslateBrickWall: ItemType;
    /**
     * 深层煤矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded coal ore within Minecraft.
     */
    static readonly deepslateCoalOre: ItemType;
    /**
     * 深层铜矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded copper ore within Minecraft.
     */
    static readonly deepslateCopperOre: ItemType;
    /**
     * 深层钻石矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded diamond ore within Minecraft.
     */
    static readonly deepslateDiamondOre: ItemType;
    /**
     * 深层绿宝石矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded emerald ore within Minecraft.
     */
    static readonly deepslateEmeraldOre: ItemType;
    /**
     * 深层金矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded gold ore within Minecraft.
     */
    static readonly deepslateGoldOre: ItemType;
    /**
     * 深层铁矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded iron ore within Minecraft.
     */
    static readonly deepslateIronOre: ItemType;
    /**
     * 深层青金石矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded lapis lazuli ore within Minecraft.
     */
    static readonly deepslateLapisOre: ItemType;
    /**
     * 深层红石矿石。
     * 
     * Represents an item that can place a block of deepslate with
     * embedded redstone ore within Minecraft.
     */
    static readonly deepslateRedstoneOre: ItemType;
    /**
     * 深板岩瓦。
     * 
     * Represents an item that can place a set of deepslate tiles
     * within Minecraft.
     */
    static readonly deepslateTiles: ItemType;
    /**
     * 深板岩瓦台阶。
     * 
     * Represents an item that can place a slab of deepslate tiles
     * within Minecraft.
     */
    static readonly deepslateTileSlab: ItemType;
    /**
     * 深板岩瓦楼梯。
     * 
     * Represents an item that can place a set of deepslate tile
     * stairs within Minecraft.
     */
    static readonly deepslateTileStairs: ItemType;
    /**
     * 深板岩瓦墙。
     * 
     * Represents an item that can place a wall of deepslate tile
     * within Minecraft.
     */
    static readonly deepslateTileWall: ItemType;
    /**
     * 拒绝方块。
     * 
     * Represents an item that can place a logical but generally
     * invisible Deny logic block within Minecraft.
     */
    static readonly deny: ItemType;
    /**
     * 探测铁轨。
     * 
     * Represents an item that can place a detector rail within
     * Minecraft.
     */
    static readonly detectorRail: ItemType;
    /**
     * 钻石。
     */
    static readonly diamond: ItemType;
    /**
     * 钻石斧。
     */
    static readonly diamondAxe: ItemType;
    /**
     * 钻石块。
     * 
     * Represents an item that can place a block of diamond within
     * Minecraft.
     */
    static readonly diamondBlock: ItemType;
    /**
     * 钻石靴子。
     */
    static readonly diamondBoots: ItemType;
    /**
     * 钻石胸甲。
     */
    static readonly diamondChestplate: ItemType;
    /**
     * 钻石头盔。
     */
    static readonly diamondHelmet: ItemType;
    /**
     * 钻石锄。
     */
    static readonly diamondHoe: ItemType;
    /**
     * 钻石马铠。
     */
    static readonly diamondHorseArmor: ItemType;
    /**
     * 钻石护腿。
     */
    static readonly diamondLeggings: ItemType;
    /**
     * 钻石矿石。
     * 
     * Represents an item that can place a block with embedded
     * diamond ore within Minecraft.
     */
    static readonly diamondOre: ItemType;
    /**
     * 钻石镐。
     */
    static readonly diamondPickaxe: ItemType;
    /**
     * 钻石锹。
     */
    static readonly diamondShovel: ItemType;
    /**
     * 钻石剑。
     */
    static readonly diamondSword: ItemType;
    /**
     * 闪长岩楼梯。
     * 
     * Represents an item that can place a set of diorite stairs
     * within Minecraft.
     */
    static readonly dioriteStairs: ItemType;
    /**
     * 泥土/砂土。
     * 
     * Represents an item that can place a block of dirt within
     * Minecraft.
     */
    static readonly dirt: ItemType;
    /**
     * 缠根泥土。
     * 
     * Represents an item that can place a block of dirt with roots
     * within Minecraft.
     */
    static readonly dirtWithRoots: ItemType;
    /**
     * 唱片残片 Samuel Åberg - 5。
     */
    static readonly discFragment5: ItemType;
    /**
     * 发射器。
     * 
     * Represents an item that can place a dispenser within
     * Minecraft.
     */
    static readonly dispenser: ItemType;
    /**
     * 海豚刷怪蛋。
     */
    static readonly dolphinSpawnEgg: ItemType;
    /**
     * 驴刷怪蛋。
     */
    static readonly donkeySpawnEgg: ItemType;
    /**
     * 向日葵/丁香/高草丛/大型蕨/玫瑰丛/牡丹。
     * 
     * Represents an item that can place a double plant within
     * Minecraft.
     */
    static readonly doublePlant: ItemType;
    /**
     * 龙息。
     */
    static readonly dragonBreath: ItemType;
    /**
     * 龙蛋。
     * 
     * Represents an item that can place a dragon egg within
     * Minecraft.
     */
    static readonly dragonEgg: ItemType;
    /**
     * 干海带。
     */
    static readonly driedKelp: ItemType;
    /**
     * 干海带块。
     * 
     * Represents an item that can place a block of dried kelp
     * within Minecraft.
     */
    static readonly driedKelpBlock: ItemType;
    /**
     * 滴水石块。
     * 
     * Represents an item that can place a block of dripstone
     * within Minecraft.
     */
    static readonly dripstoneBlock: ItemType;
    /**
     * 投掷器。
     * 
     * Represents an item that can place a dropper within
     * Minecraft.
     */
    static readonly dropper: ItemType;
    /**
     * 溺尸刷怪蛋。
     */
    static readonly drownedSpawnEgg: ItemType;
    /**
     * 染料。
     */
    static readonly dye: ItemType;
    /**
     * 回响碎片。
     */
    static readonly echoShard: ItemType;
    /**
     * 鸡蛋。
     */
    static readonly egg: ItemType;
    /**
     * 远古守卫者刷怪蛋。
     */
    static readonly elderGuardianSpawnEgg: ItemType;
    /**
     * 鞘翅。
     */
    static readonly elytra: ItemType;
    /**
     * 绿宝石。
     */
    static readonly emerald: ItemType;
    /**
     * 绿宝石块。
     * 
     * Represents an item that can place a block of emerald within
     * Minecraft.
     */
    static readonly emeraldBlock: ItemType;
    /**
     * 绿宝石矿石。
     * 
     * Represents an item that can place a block with embedded
     * emerald ore within Minecraft.
     */
    static readonly emeraldOre: ItemType;
    /**
     * 空地图。
     */
    static readonly emptyMap: ItemType;
    /**
     * 附魔书。
     */
    static readonly enchantedBook: ItemType;
    /**
     * 附魔金苹果。
     */
    static readonly enchantedGoldenApple: ItemType;
    /**
     * 附魔台。
     * 
     * Represents an item that can place an enchanting table within
     * Minecraft.
     */
    static readonly enchantingTable: ItemType;
    /**
     * 末地石砖。
     * 
     * Represents an item that can place an end bricks block within
     * Minecraft.
     */
    static readonly endBricks: ItemType;
    /**
     * 末地石砖楼梯。
     * 
     * Represents an item that can place a set of end brick stairs
     * within Minecraft.
     */
    static readonly endBrickStairs: ItemType;
    /**
     * 末地水晶。
     */
    static readonly endCrystal: ItemType;
    /**
     * 末影箱。
     * 
     * Represents an item that can place an ender chest within
     * Minecraft.
     */
    static readonly enderChest: ItemType;
    /**
     * 末影龙刷怪蛋。
     */
    static readonly enderDragonSpawnEgg: ItemType;
    /**
     * 末影之眼。
     */
    static readonly enderEye: ItemType;
    /**
     * 末影人刷怪蛋。
     */
    static readonly endermanSpawnEgg: ItemType;
    /**
     * 末影螨刷怪蛋。
     */
    static readonly endermiteSpawnEgg: ItemType;
    /**
     * 末影珍珠。
     */
    static readonly enderPearl: ItemType;
    /**
     * 末地传送门框架。
     * 
     * Represents an item that can place an end portal frame within
     * Minecraft.
     */
    static readonly endPortalFrame: ItemType;
    /**
     * 末地烛。
     * 
     * Represents an item that can place an end rod within
     * Minecraft.
     */
    static readonly endRod: ItemType;
    /**
     * 末地石。
     * 
     * Represents an item that can place an end stone block within
     * Minecraft.
     */
    static readonly endStone: ItemType;
    /**
     * 唤魔者刷怪蛋。
     */
    static readonly evokerSpawnEgg: ItemType;
    /**
     * 附魔之瓶。
     */
    static readonly experienceBottle: ItemType;
    /**
     * 斑驳的铜块。
     * 
     * Represents an item that can place a block of exposed copper
     * within Minecraft.
     */
    static readonly exposedCopper: ItemType;
    /**
     * 斑驳的切制铜块。
     * 
     * Represents an item that can place a block of exposed cut
     * copper within Minecraft.
     */
    static readonly exposedCutCopper: ItemType;
    /**
     * 斑驳的切制铜台阶。
     * 
     * Represents an item that can place a slab of exposed cut
     * copper within Minecraft.
     */
    static readonly exposedCutCopperSlab: ItemType;
    /**
     * 斑驳的切制铜楼梯。
     * 
     * Represents an item that can place a set of exposed cut
     * copper stairs within Minecraft.
     */
    static readonly exposedCutCopperStairs: ItemType;
    /**
     * 耕地。
     * 
     * Represents an item that can place a farmland block within
     * Minecraft.
     */
    static readonly farmland: ItemType;
    /**
     * 羽毛。
     */
    static readonly feather: ItemType;
    /**
     * 橡木栅栏/云杉木栅栏/白桦木栅栏/丛林木栅栏/金合欢木栅栏/深色橡木栅栏。
     * 
     * Represents an item that can place a fence within Minecraft.
     */
    static readonly fence: ItemType;
    /**
     * 橡木栅栏门。
     * 
     * Represents an item that can place a fence gate within
     * Minecraft.
     */
    static readonly fenceGate: ItemType;
    /**
     * 发酵蛛眼。
     */
    static readonly fermentedSpiderEye: ItemType;
    /**
     * 砖纹旗帜图案。
     */
    static readonly fieldMasonedBannerPattern: ItemType;
    /**
     * 地图。
     */
    static readonly filledMap: ItemType;
    /**
     * 火焰弹。
     */
    static readonly fireCharge: ItemType;
    /**
     * 烟花火箭。
     */
    static readonly fireworkRocket: ItemType;
    /**
     * 烟火之星。
     */
    static readonly fireworkStar: ItemType;
    /**
     * 钓鱼竿。
     */
    static readonly fishingRod: ItemType;
    /**
     * 制箭台。
     * 
     * Represents an item that can place a fletching table within
     * Minecraft.
     */
    static readonly fletchingTable: ItemType;
    /**
     * 燧石。
     */
    static readonly flint: ItemType;
    /**
     * 打火石。
     */
    static readonly flintAndSteel: ItemType;
    /**
     * 花朵盾徽旗帜图案。
     */
    static readonly flowerBannerPattern: ItemType;
    /**
     * 盛开的杜鹃花丛。
     * 
     * Represents an item that can place a flowering azalea plant
     * within Minecraft.
     */
    static readonly floweringAzalea: ItemType;
    /**
     * 花盆。
     * 
     * Represents an item that can place a flower pot within
     * Minecraft.
     */
    static readonly flowerPot: ItemType;
    /**
     * 狐狸刷怪蛋。
     */
    static readonly foxSpawnEgg: ItemType;
    /**
     * 物品展示框。
     * 
     * Represents an item that can place a frame within Minecraft.
     */
    static readonly frame: ItemType;
    /**
     * 青蛙卵。
     */
    static readonly frogSpawn: ItemType;
    /**
     * 青蛙刷怪蛋。
     */
    static readonly frogSpawnEgg: ItemType;
    /**
     * 霜冰。
     * 
     * Represents an item that can place a frosted ice block within
     * Minecraft.
     */
    static readonly frostedIce: ItemType;
    /**
     * 熔炉。
     * 
     * Represents an item that can place a furnace within
     * Minecraft.
     */
    static readonly furnace: ItemType;
    /**
     * 恶魂刷怪蛋。
     */
    static readonly ghastSpawnEgg: ItemType;
    /**
     * 恶魂之泪。
     */
    static readonly ghastTear: ItemType;
    /**
     * 镶金黑石。
     * 
     * Represents an item that can place a block of gilded
     * blackstone within Minecraft.
     */
    static readonly gildedBlackstone: ItemType;
    /**
     * 玻璃。
     * 
     * Represents an item that can place a glass block within
     * Minecraft.
     */
    static readonly glass: ItemType;
    /**
     * 玻璃瓶。
     */
    static readonly glassBottle: ItemType;
    /**
     * 玻璃板。
     * 
     * Represents an item that can place a pane of glass within
     * Minecraft.
     */
    static readonly glassPane: ItemType;
    /**
     * 闪烁的西瓜片。
     */
    static readonly glisteringMelonSlice: ItemType;
    /**
     * 地球旗帜图案。
     */
    static readonly globeBannerPattern: ItemType;
    /**
     * 发光浆果。
     */
    static readonly glowBerries: ItemType;
    /**
     * 荧光物品展示框。
     * 
     * Represents an item that can place a glowing frame within
     * Minecraft.
     */
    static readonly glowFrame: ItemType;
    /**
     * 荧光墨囊。
     */
    static readonly glowInkSac: ItemType;
    /**
     * 发光地衣。
     * 
     * Represents glow lichen within Minecraft.
     */
    static readonly glowLichen: ItemType;
    /**
     * 发光鱿鱼刷怪蛋。
     */
    static readonly glowSquidSpawnEgg: ItemType;
    /**
     * 荧石。
     * 
     * Represents an item that can place a block of glowstone
     * within Minecraft.
     */
    static readonly glowstone: ItemType;
    /**
     * 荧石粉。
     */
    static readonly glowstoneDust: ItemType;
    /**
     * 山羊角。
     */
    static readonly goatHorn: ItemType;
    /**
     * 山羊刷怪蛋。
     */
    static readonly goatSpawnEgg: ItemType;
    /**
     * 金块。
     * 
     * Represents an item that can place a gold block within
     * Minecraft.
     */
    static readonly goldBlock: ItemType;
    /**
     * 金苹果。
     */
    static readonly goldenApple: ItemType;
    /**
     * 金斧。
     */
    static readonly goldenAxe: ItemType;
    /**
     * 金靴子。
     */
    static readonly goldenBoots: ItemType;
    /**
     * 金胡萝卜。
     */
    static readonly goldenCarrot: ItemType;
    /**
     * 金胸甲。
     */
    static readonly goldenChestplate: ItemType;
    /**
     * 金头盔。
     */
    static readonly goldenHelmet: ItemType;
    /**
     * 金锄。
     */
    static readonly goldenHoe: ItemType;
    /**
     * 金马铠。
     */
    static readonly goldenHorseArmor: ItemType;
    /**
     * 金护腿。
     */
    static readonly goldenLeggings: ItemType;
    /**
     * 金镐。
     */
    static readonly goldenPickaxe: ItemType;
    /**
     * 动力铁轨。
     * 
     * Represents an item that can place a golden rail element
     * within Minecraft.
     */
    static readonly goldenRail: ItemType;
    /**
     * 金锹。
     */
    static readonly goldenShovel: ItemType;
    /**
     * 金剑。
     */
    static readonly goldenSword: ItemType;
    /**
     * 金锭。
     */
    static readonly goldIngot: ItemType;
    /**
     * 金粒。
     */
    static readonly goldNugget: ItemType;
    /**
     * 金矿石。
     * 
     * Represents an item that can place a block with embedded gold
     * ore within Minecraft.
     */
    static readonly goldOre: ItemType;
    /**
     * 花岗岩楼梯。
     * 
     * Represents an item that can place a set of granite stairs
     * within Minecraft.
     */
    static readonly graniteStairs: ItemType;
    /**
     * 草。
     * 
     * Represents an item that can place a block of dirt and grass
     * within Minecraft.
     */
    static readonly grass: ItemType;
    /**
     * 草径。
     * 
     * Represents an item that can place a block of dirt and grass
     * with a path within Minecraft.
     */
    static readonly grassPath: ItemType;
    /**
     * 沙砾。
     * 
     * Represents an item that can place a block of gravel within
     * Minecraft.
     */
    static readonly gravel: ItemType;
    /**
     * 灰色蜡烛。
     * 
     * Represents an item that can place a gray-colored candle
     * within Minecraft.
     */
    static readonly grayCandle: ItemType;
    /**
     * 灰色染料。
     */
    static readonly grayDye: ItemType;
    /**
     * 灰色带釉陶瓦。
     * 
     * Represents an item that can place a gray-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly grayGlazedTerracotta: ItemType;
    /**
     * 灰色羊毛。
     */
    static readonly grayWool: ItemType;
    /**
     * 绿色蜡烛。
     * 
     * Represents an item that can place a green-colored candle
     * within Minecraft.
     */
    static readonly greenCandle: ItemType;
    /**
     * 绿色染料。
     */
    static readonly greenDye: ItemType;
    /**
     * 绿色带釉陶瓦。
     * 
     * Represents an item that can place a green block of glazed
     * terracotta within Minecraft.
     */
    static readonly greenGlazedTerracotta: ItemType;
    /**
     * 绿色羊毛。
     */
    static readonly greenWool: ItemType;
    /**
     * 砂轮。
     * 
     * Represents an item that can place a grindstone within
     * Minecraft.
     */
    static readonly grindstone: ItemType;
    /**
     * 守卫者刷怪蛋。
     */
    static readonly guardianSpawnEgg: ItemType;
    /**
     * 火药。
     */
    static readonly gunpowder: ItemType;
    /**
     * 垂根。
     * 
     * Represents an item that can place a set of hanging roots
     * within Minecraft.
     */
    static readonly hangingRoots: ItemType;
    /**
     * 陶瓦。
     * 
     * Represents an item that can place a block of hardened clay
     * within Minecraft.
     */
    static readonly hardenedClay: ItemType;
    /**
     * 干草块。
     * 
     * Represents an item that can place a block of hay within
     * Minecraft.
     */
    static readonly hayBlock: ItemType;
    /**
     * 海洋之心。
     */
    static readonly heartOfTheSea: ItemType;
    /**
     * 重质测重压力板。
     * 
     * Represents an item that can place a heavy weighted pressure
     * plate within Minecraft.
     */
    static readonly heavyWeightedPressurePlate: ItemType;
    /**
     * 疣猪兽刷怪蛋。
     */
    static readonly hoglinSpawnEgg: ItemType;
    /**
     * 蜂蜜块。
     * 
     * Represents an item that can place a block of honey within
     * Minecraft.
     */
    static readonly honeyBlock: ItemType;
    /**
     * 蜂蜜瓶。
     */
    static readonly honeyBottle: ItemType;
    /**
     * 蜜脾。
     */
    static readonly honeycomb: ItemType;
    /**
     * 蜜脾块。
     * 
     * Represents an item that can place a honeycomb block within
     * Minecraft.
     */
    static readonly honeycombBlock: ItemType;
    /**
     * 漏斗。
     * 
     * Represents an item that can place a hopper within Minecraft.
     */
    static readonly hopper: ItemType;
    /**
     * 漏斗矿车。
     */
    static readonly hopperMinecart: ItemType;
    /**
     * 马刷怪蛋。
     */
    static readonly horseSpawnEgg: ItemType;
    /**
     * 尸壳刷怪蛋。
     */
    static readonly huskSpawnEgg: ItemType;
    /**
     * 冰。
     * 
     * Represents an item that can place a block of ice within
     * Minecraft.
     */
    static readonly ice: ItemType;
    /**
     * 被虫蚀的深板岩。
     * 
     * Represents an item that can place an infested block of
     * deepslate within Minecraft.
     */
    static readonly infestedDeepslate: ItemType;
    /**
     * 墨囊。
     */
    static readonly inkSac: ItemType;
    /**
     * 铁斧。
     */
    static readonly ironAxe: ItemType;
    /**
     * 铁栏杆。
     * 
     * Represents iron bars within Minecraft.
     */
    static readonly ironBars: ItemType;
    /**
     * 铁块。
     * 
     * Represents an item that can place a block of iron within
     * Minecraft.
     */
    static readonly ironBlock: ItemType;
    /**
     * 铁靴子。
     */
    static readonly ironBoots: ItemType;
    /**
     * 铁胸甲。
     */
    static readonly ironChestplate: ItemType;
    /**
     * 铁门。
     * 
     * Represents an item that can place an iron door within
     * Minecraft.
     */
    static readonly ironDoor: ItemType;
    /**
     * 铁傀儡刷怪蛋。
     */
    static readonly ironGolemSpawnEgg: ItemType;
    /**
     * 铁头盔。
     */
    static readonly ironHelmet: ItemType;
    /**
     * 铁锄。
     */
    static readonly ironHoe: ItemType;
    /**
     * 铁马铠。
     */
    static readonly ironHorseArmor: ItemType;
    /**
     * 铁锭。
     */
    static readonly ironIngot: ItemType;
    /**
     * 铁护腿。
     */
    static readonly ironLeggings: ItemType;
    /**
     * 铁粒。
     */
    static readonly ironNugget: ItemType;
    /**
     * 铁矿石。
     * 
     * Represents an item that can place a block with embedded iron
     * ore within Minecraft.
     */
    static readonly ironOre: ItemType;
    /**
     * 铁镐。
     */
    static readonly ironPickaxe: ItemType;
    /**
     * 铁锹。
     */
    static readonly ironShovel: ItemType;
    /**
     * 铁剑。
     */
    static readonly ironSword: ItemType;
    /**
     * 铁活板门。
     * 
     * Represents an item that can place an iron trapdoor within
     * Minecraft.
     */
    static readonly ironTrapdoor: ItemType;
    /**
     * 拼图方块。
     * 
     * Represents an item that can place a jigsaw within Minecraft.
     */
    static readonly jigsaw: ItemType;
    /**
     * 唱片机。
     * 
     * Represents an item that can place a jukebox within
     * Minecraft.
     */
    static readonly jukebox: ItemType;
    /**
     * 丛林木船。
     */
    static readonly jungleBoat: ItemType;
    /**
     * 丛林木按钮。
     * 
     * Represents jungle wood button within Minecraft.
     */
    static readonly jungleButton: ItemType;
    /**
     * 丛林木运输船。
     */
    static readonly jungleChestBoat: ItemType;
    /**
     * 丛林木门。
     * 
     * Represents an item that can place a jungle wood door within
     * Minecraft.
     */
    static readonly jungleDoor: ItemType;
    /**
     * 丛林木栅栏门。
     * 
     * Represents an item that can place a jungle wood fence gate
     * within Minecraft.
     */
    static readonly jungleFenceGate: ItemType;
    /**
     * 丛林木压力板。
     * 
     * Represents an item that can place a jungle wood pressure
     * plate within Minecraft.
     */
    static readonly junglePressurePlate: ItemType;
    /**
     * 丛林木告示牌。
     * 
     * Represents an item that can place a jungle sign within
     * Minecraft.
     */
    static readonly jungleSign: ItemType;
    /**
     * 丛林木楼梯。
     * 
     * Represents an item that can place a set of jungle wood
     * stairs within Minecraft.
     */
    static readonly jungleStairs: ItemType;
    /**
     * 丛林木活板门。
     * 
     * Represents an item that can place a jungle wood trapdoor
     * within Minecraft.
     */
    static readonly jungleTrapdoor: ItemType;
    /**
     * 海带。
     * 
     * Represents an item that can place a set of kelp within
     * Minecraft.
     */
    static readonly kelp: ItemType;
    /**
     * 梯子。
     * 
     * Represents an item that can place a ladder within Minecraft.
     */
    static readonly ladder: ItemType;
    /**
     * 灯笼。
     * 
     * Represents an item that can place a lantern within
     * Minecraft.
     */
    static readonly lantern: ItemType;
    /**
     * 青金石块。
     * 
     * Represents an item that can place a block of lapis lazuli
     * within Minecraft.
     */
    static readonly lapisBlock: ItemType;
    /**
     * 青金石。
     */
    static readonly lapisLazuli: ItemType;
    /**
     * 青金石矿石。
     * 
     * Represents an item that can place a block with embedded
     * lapis lazuli within Minecraft.
     */
    static readonly lapisOre: ItemType;
    /**
     * 大型紫晶芽。
     * 
     * Represents an item that can place a bud of large amethyst
     * within Minecraft.
     */
    static readonly largeAmethystBud: ItemType;
    /**
     * 熔岩桶。
     */
    static readonly lavaBucket: ItemType;
    /**
     * 拴绳。
     */
    static readonly lead: ItemType;
    /**
     * 皮革。
     */
    static readonly leather: ItemType;
    /**
     * 皮革靴子。
     */
    static readonly leatherBoots: ItemType;
    /**
     * 皮革外套。
     */
    static readonly leatherChestplate: ItemType;
    /**
     * 皮革帽子。
     */
    static readonly leatherHelmet: ItemType;
    /**
     * 皮革马铠。
     */
    static readonly leatherHorseArmor: ItemType;
    /**
     * 皮革裤子。
     */
    static readonly leatherLeggings: ItemType;
    /**
     * 橡树树叶/云杉树叶/白桦树叶/丛林树叶。
     * 
     * Represents an item that can place a set of leaves within
     * Minecraft.
     */
    static readonly leaves: ItemType;
    /**
     * 金合欢树叶/深色橡树树叶。
     * 
     * Represents an item that can place an updated set of leaves
     * within Minecraft.
     */
    static readonly leaves2: ItemType;
    /**
     * 讲台。
     * 
     * Represents an item that can place a lectern within
     * Minecraft.
     */
    static readonly lectern: ItemType;
    /**
     * 拉杆。
     * 
     * Represents an item that can place a lever within Minecraft.
     */
    static readonly lever: ItemType;
    /**
     * 光源方块。
     * 
     * Represents an item that can place a block of light within
     * Minecraft.
     */
    static readonly lightBlock: ItemType;
    /**
     * 淡蓝色蜡烛。
     * 
     * Represents an item that can place a light blue candle within
     * Minecraft.
     */
    static readonly lightBlueCandle: ItemType;
    /**
     * 淡蓝色染料。
     */
    static readonly lightBlueDye: ItemType;
    /**
     * 淡蓝色带釉陶瓦。
     * 
     * Represents an item that can place a light blue block of
     * glazed terracotta within Minecraft.
     */
    static readonly lightBlueGlazedTerracotta: ItemType;
    /**
     * 淡蓝色羊毛。
     */
    static readonly lightBlueWool: ItemType;
    /**
     * 淡灰色蜡烛。
     * 
     * Represents an item that can place a light gray candle within
     * Minecraft.
     */
    static readonly lightGrayCandle: ItemType;
    /**
     * 淡灰色染料。
     */
    static readonly lightGrayDye: ItemType;
    /**
     * 淡灰色羊毛。
     */
    static readonly lightGrayWool: ItemType;
    /**
     * 避雷针。
     * 
     * Represents an item that can place a lightning rod within
     * Minecraft.
     */
    static readonly lightningRod: ItemType;
    /**
     * 轻质测重压力板。
     * 
     * Represents an item that can place a light weighted pressure
     * plate within Minecraft.
     */
    static readonly lightWeightedPressurePlate: ItemType;
    /**
     * 黄绿色蜡烛。
     * 
     * Represents an item that can place a lime candle within
     * Minecraft.
     */
    static readonly limeCandle: ItemType;
    /**
     * 黄绿色染料。
     */
    static readonly limeDye: ItemType;
    /**
     * 黄绿色带釉陶瓦。
     * 
     * Represents an item that can place a lime-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly limeGlazedTerracotta: ItemType;
    /**
     * 黄绿色羊毛。
     */
    static readonly limeWool: ItemType;
    /**
     * 滞留药水。
     */
    static readonly lingeringPotion: ItemType;
    /**
     * 南瓜灯。
     * 
     * Represents an item that can place a lit pumpkin within
     * Minecraft.
     */
    static readonly litPumpkin: ItemType;
    /**
     * 羊驼刷怪蛋。
     */
    static readonly llamaSpawnEgg: ItemType;
    /**
     * 磁石。
     * 
     * Represents an item that can place a lodestone within
     * Minecraft.
     */
    static readonly lodestone: ItemType;
    /**
     * 磁石指针。
     */
    static readonly lodestoneCompass: ItemType;
    /**
     * 橡木原木/云杉原木/白桦原木/丛林原木。
     * 
     * Represents an item that can place a log within Minecraft.
     */
    static readonly log: ItemType;
    /**
     * 金合欢原木/深色橡木原木。
     * 
     * Represents an item that can place a more updated,
     * customizable log within Minecraft.
     */
    static readonly log2: ItemType;
    /**
     * 织布机。
     * 
     * Represents an item that can place a loom within Minecraft.
     */
    static readonly loom: ItemType;
    /**
     * 品红色蜡烛。
     * 
     * Represents an item that can place a magenta candle within
     * Minecraft.
     */
    static readonly magentaCandle: ItemType;
    /**
     * 品红色染料。
     */
    static readonly magentaDye: ItemType;
    /**
     * 品红色带釉陶瓦。
     * 
     * Represents an item that can place a block of magenta-colored
     * glazed terracotta within Minecraft.
     */
    static readonly magentaGlazedTerracotta: ItemType;
    /**
     * 品红色羊毛。
     */
    static readonly magentaWool: ItemType;
    /**
     * 岩浆块。
     * 
     * Represents magma within Minecraft.
     */
    static readonly magma: ItemType;
    /**
     * 岩浆膏。
     */
    static readonly magmaCream: ItemType;
    /**
     * 岩浆怪刷怪蛋。
     */
    static readonly magmaCubeSpawnEgg: ItemType;
    /**
     * 红树木船。
     */
    static readonly mangroveBoat: ItemType;
    /**
     * 红树木按钮。
     */
    static readonly mangroveButton: ItemType;
    /**
     * 红树木运输船。
     */
    static readonly mangroveChestBoat: ItemType;
    /**
     * 红树木门。
     */
    static readonly mangroveDoor: ItemType;
    /**
     * 红树木栅栏。
     */
    static readonly mangroveFence: ItemType;
    /**
     * 红树木栅栏门。
     */
    static readonly mangroveFenceGate: ItemType;
    /**
     * 红树树叶。
     */
    static readonly mangroveLeaves: ItemType;
    /**
     * 红树原木。
     */
    static readonly mangroveLog: ItemType;
    /**
     * 红树木板。
     */
    static readonly mangrovePlanks: ItemType;
    /**
     * 红树木压力板。
     */
    static readonly mangrovePressurePlate: ItemType;
    /**
     * 红树胎生苗。
     */
    static readonly mangrovePropagule: ItemType;
    /**
     * 红树根。
     */
    static readonly mangroveRoots: ItemType;
    /**
     * 红树木告示牌。
     */
    static readonly mangroveSign: ItemType;
    /**
     * 红树木台阶。
     */
    static readonly mangroveSlab: ItemType;
    /**
     * 红树木楼梯。
     */
    static readonly mangroveStairs: ItemType;
    /**
     * 红树木活板门。
     */
    static readonly mangroveTrapdoor: ItemType;
    /**
     * 红树木。
     */
    static readonly mangroveWood: ItemType;
    /**
     * 中型紫晶芽。
     * 
     * Represents an item that can place a medium-sized bud of
     * amethyst within Minecraft.
     */
    static readonly mediumAmethystBud: ItemType;
    /**
     * 西瓜。
     * 
     * Represents an item that can place a block of melon within
     * Minecraft.
     */
    static readonly melonBlock: ItemType;
    /**
     * 西瓜种子。
     */
    static readonly melonSeeds: ItemType;
    /**
     * 西瓜片。
     */
    static readonly melonSlice: ItemType;
    /**
     * 奶桶。
     */
    static readonly milkBucket: ItemType;
    /**
     * 矿车。
     */
    static readonly minecart: ItemType;
    /**
     * 刷怪笼。
     * 
     * Represents an item that can place a mob spawner within
     * Minecraft.
     */
    static readonly mobSpawner: ItemType;
    /**
     * Mojang徽标旗帜图案。
     */
    static readonly mojangBannerPattern: ItemType;
    /**
     * 被虫蚀的石头/被虫蚀的圆石/被虫蚀的石砖/被虫蚀的苔石砖/被虫蚀的裂纹石砖/被虫蚀的雕纹石砖。
     * 
     * Represents an item that can place a monster egg within
     * Minecraft.
     */
    static readonly monsterEgg: ItemType;
    /**
     * 哞菇刷怪蛋。
     */
    static readonly mooshroomSpawnEgg: ItemType;
    /**
     * 苔藓块。
     * 
     * Represents an item that can place a block of moss within
     * Minecraft.
     */
    static readonly mossBlock: ItemType;
    /**
     * 苔藓地毯。
     * 
     * Represents an item that can place a carpet of moss within
     * Minecraft.
     */
    static readonly mossCarpet: ItemType;
    /**
     * 苔石。
     * 
     * Represents an item that can place a block of cobblestone
     * with moss within Minecraft.
     */
    static readonly mossyCobblestone: ItemType;
    /**
     * 苔石楼梯。
     * 
     * Represents an item that can place a set of mossy cobblestone
     * stairs within Minecraft.
     */
    static readonly mossyCobblestoneStairs: ItemType;
    /**
     * 苔石砖楼梯。
     * 
     * Represents an item that can place a set of mossy stone brick
     * stairs within Minecraft.
     */
    static readonly mossyStoneBrickStairs: ItemType;
    /**
     * 泥巴。
     */
    static readonly mud: ItemType;
    /**
     * 泥砖。
     */
    static readonly mudBricks: ItemType;
    /**
     * 泥砖台阶。
     */
    static readonly mudBrickSlab: ItemType;
    /**
     * 泥砖楼梯。
     */
    static readonly mudBrickStairs: ItemType;
    /**
     * 泥砖墙。
     */
    static readonly mudBrickWall: ItemType;
    /**
     * 沾泥的红树根。
     */
    static readonly muddyMangroveRoots: ItemType;
    /**
     * 骡刷怪蛋。
     */
    static readonly muleSpawnEgg: ItemType;
    /**
     * 蘑菇煲。
     */
    static readonly mushroomStew: ItemType;
    /**
     * 音乐唱片 C418 - 11。
     */
    static readonly musicDisc11: ItemType;
    /**
     * 音乐唱片 C418 - 13。
     */
    static readonly musicDisc13: ItemType;
    /**
     * 音乐唱片 Samuel Åberg - 5。
     */
    static readonly musicDisc5: ItemType;
    /**
     * 音乐唱片 C418 - blocks。
     */
    static readonly musicDiscBlocks: ItemType;
    /**
     * 音乐唱片 C418 - cat。
     */
    static readonly musicDiscCat: ItemType;
    /**
     * 音乐唱片 C418 - chirp。
     */
    static readonly musicDiscChirp: ItemType;
    /**
     * 音乐唱片 C418 - far。
     */
    static readonly musicDiscFar: ItemType;
    /**
     * 音乐唱片 C418 - mall。
     */
    static readonly musicDiscMall: ItemType;
    /**
     * 音乐唱片 C418 - mellohi。
     */
    static readonly musicDiscMellohi: ItemType;
    /**
     * 音乐唱片 Lena Raine - otherside。
     */
    static readonly musicDiscOtherside: ItemType;
    /**
     * 音乐唱片 Lena Raine - Pigstep。
     */
    static readonly musicDiscPigstep: ItemType;
    /**
     * 音乐唱片 C418 - stal。
     */
    static readonly musicDiscStal: ItemType;
    /**
     * 音乐唱片 C418 - strad。
     */
    static readonly musicDiscStrad: ItemType;
    /**
     * 音乐唱片 C418 - wait。
     */
    static readonly musicDiscWait: ItemType;
    /**
     * 音乐唱片 C418 - ward。
     */
    static readonly musicDiscWard: ItemType;
    /**
     * 生羊肉。
     */
    static readonly mutton: ItemType;
    /**
     * 菌丝体。
     * 
     * Represents an item that can place a mycelium plant within
     * Minecraft.
     */
    static readonly mycelium: ItemType;
    /**
     * 命名牌。
     */
    static readonly nameTag: ItemType;
    /**
     * 鹦鹉螺壳。
     */
    static readonly nautilusShell: ItemType;
    /**
     * 下界砖块。
     * 
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly netherbrick: ItemType;
    /**
     * 下界砖。
     * 
     * Represents an item that can place a nether brick block
     * within Minecraft.
     */
    static readonly netherBrick: ItemType;
    /**
     * 下界砖栅栏。
     * 
     * Represents an item that can place a nether brick fence
     * within Minecraft.
     */
    static readonly netherBrickFence: ItemType;
    /**
     * 下界砖楼梯。
     * 
     * Represents an item that can place a set of nether brick
     * stairs within Minecraft.
     */
    static readonly netherBrickStairs: ItemType;
    /**
     * 下界金矿石。
     * 
     * Represents an item that can place a block of nether with
     * embedded gold ore within Minecraft.
     */
    static readonly netherGoldOre: ItemType;
    /**
     * 下界合金斧。
     */
    static readonly netheriteAxe: ItemType;
    /**
     * 下界合金块。
     * 
     * Represents an item that can place a block of netherite
     * within Minecraft.
     */
    static readonly netheriteBlock: ItemType;
    /**
     * 下界合金靴子。
     */
    static readonly netheriteBoots: ItemType;
    /**
     * 下界合金胸甲。
     */
    static readonly netheriteChestplate: ItemType;
    /**
     * 下界合金头盔。
     */
    static readonly netheriteHelmet: ItemType;
    /**
     * 下界合金锄。
     */
    static readonly netheriteHoe: ItemType;
    /**
     * 下界合金锭。
     */
    static readonly netheriteIngot: ItemType;
    /**
     * 下界合金护腿。
     */
    static readonly netheriteLeggings: ItemType;
    /**
     * 下界合金镐。
     */
    static readonly netheritePickaxe: ItemType;
    /**
     * 下界合金碎片。
     */
    static readonly netheriteScrap: ItemType;
    /**
     * 下界合金锹。
     */
    static readonly netheriteShovel: ItemType;
    /**
     * 下界合金剑。
     */
    static readonly netheriteSword: ItemType;
    /**
     * 下界岩。
     * 
     * Represents an item that can place a block of netherrack
     * within Minecraft.
     */
    static readonly netherrack: ItemType;
    /**
     * 下界苗。
     * 
     * Represents nether sprouts within Minecraft.
     */
    static readonly netherSprouts: ItemType;
    /**
     * 下界之星。
     */
    static readonly netherStar: ItemType;
    /**
     * 下界疣。
     * 
     * Represents nether wart within Minecraft.
     */
    static readonly netherWart: ItemType;
    /**
     * 下界疣块。
     * 
     * Represents an item that can place a block of nether wart
     * within Minecraft.
     */
    static readonly netherWartBlock: ItemType;
    /**
     * 石头楼梯。
     * 
     * Represents an item that can place a standard set of stone
     * stairs within Minecraft.
     */
    static readonly normalStoneStairs: ItemType;
    /**
     * 音符盒。
     * 
     * Represents an item that can place a note block within
     * Minecraft.
     */
    static readonly noteblock: ItemType;
    /**
     * 橡木船。
     */
    static readonly oakBoat: ItemType;
    /**
     * 橡木运输船。
     */
    static readonly oakChestBoat: ItemType;
    /**
     * 橡木告示牌。
     */
    static readonly oakSign: ItemType;
    /**
     * 橡木楼梯。
     * 
     * Represents an item that can place a set of oak stairs within
     * Minecraft.
     */
    static readonly oakStairs: ItemType;
    /**
     * 侦测器。
     * 
     * Represents an item that can place an observer within
     * Minecraft.
     */
    static readonly observer: ItemType;
    /**
     * 黑曜石。
     * 
     * Represents an item that can place an obsidian block within
     * Minecraft.
     */
    static readonly obsidian: ItemType;
    /**
     * 豹猫刷怪蛋。
     */
    static readonly ocelotSpawnEgg: ItemType;
    /**
     * 赭黄蛙明灯。
     */
    static readonly ochreFroglight: ItemType;
    /**
     * 橙色蜡烛。
     * 
     * Represents an item that can place an orange candle within
     * Minecraft.
     */
    static readonly orangeCandle: ItemType;
    /**
     * 橙色染料。
     */
    static readonly orangeDye: ItemType;
    /**
     * 橙色带釉陶瓦。
     * 
     * Represents an item that can place a block of orange-colored
     * glazed terracotta within Minecraft.
     */
    static readonly orangeGlazedTerracotta: ItemType;
    /**
     * 橙色羊毛。
     */
    static readonly orangeWool: ItemType;
    /**
     * 氧化的铜块。
     * 
     * Represents an item that can place a block of oxidized copper
     * within Minecraft.
     */
    static readonly oxidizedCopper: ItemType;
    /**
     * 氧化的切制铜块。
     * 
     * Represents an item that can place a block of oxidized cut
     * copper within Minecraft.
     */
    static readonly oxidizedCutCopper: ItemType;
    /**
     * 氧化的切制铜台阶。
     * 
     * Represents an item that can place a slab of oxidized cut
     * copper within Minecraft.
     */
    static readonly oxidizedCutCopperSlab: ItemType;
    /**
     * 氧化的切制铜楼梯。
     * 
     * Represents an item that can place a set of oxidized cut
     * copper stairs within Minecraft.
     */
    static readonly oxidizedCutCopperStairs: ItemType;
    /**
     * 浮冰。
     * 
     * Represents an item that can place a block of packed ice
     * within Minecraft.
     */
    static readonly packedIce: ItemType;
    /**
     * 泥坯。
     */
    static readonly packedMud: ItemType;
    /**
     * 画。
     */
    static readonly painting: ItemType;
    /**
     * 熊猫刷怪蛋。
     */
    static readonly pandaSpawnEgg: ItemType;
    /**
     * 纸。
     */
    static readonly paper: ItemType;
    /**
     * 鹦鹉刷怪蛋。
     */
    static readonly parrotSpawnEgg: ItemType;
    /**
     * 珠光蛙明灯。
     */
    static readonly pearlescentFroglight: ItemType;
    /**
     * 幻翼膜。
     */
    static readonly phantomMembrane: ItemType;
    /**
     * 幻翼刷怪蛋。
     */
    static readonly phantomSpawnEgg: ItemType;
    /**
     * 猪鼻旗帜图案。
     */
    static readonly piglinBannerPattern: ItemType;
    /**
     * 猪灵蛮兵刷怪蛋。
     */
    static readonly piglinBruteSpawnEgg: ItemType;
    /**
     * 猪灵刷怪蛋。
     */
    static readonly piglinSpawnEgg: ItemType;
    /**
     * 猪刷怪蛋。
     */
    static readonly pigSpawnEgg: ItemType;
    /**
     * 掠夺者刷怪蛋。
     */
    static readonly pillagerSpawnEgg: ItemType;
    /**
     * 粉红色蜡烛。
     * 
     * Represents an item that can place a pink candle within
     * Minecraft.
     */
    static readonly pinkCandle: ItemType;
    /**
     * 粉红色染料。
     */
    static readonly pinkDye: ItemType;
    /**
     * 粉红色带釉陶瓦。
     * 
     * Represents an item that can place a pink-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly pinkGlazedTerracotta: ItemType;
    /**
     * 粉红色羊毛。
     */
    static readonly pinkWool: ItemType;
    /**
     * 活塞。
     * 
     * Represents an item that can place a piston within Minecraft.
     */
    static readonly piston: ItemType;
    /**
     * 橡木木板/云杉木板/白桦木板/丛林木板/金合欢木板/深色橡木木板。
     * 
     * Represents an item that can place a set of planks within
     * Minecraft.
     */
    static readonly planks: ItemType;
    /**
     * 灰化土。
     * 
     * Represents podzol within Minecraft.
     */
    static readonly podzol: ItemType;
    /**
     * 滴水石锥。
     * 
     * Represents pointed dripstone within Minecraft.
     */
    static readonly pointedDripstone: ItemType;
    /**
     * 毒马铃薯。
     */
    static readonly poisonousPotato: ItemType;
    /**
     * 北极熊刷怪蛋。
     */
    static readonly polarBearSpawnEgg: ItemType;
    /**
     * 磨制安山岩楼梯。
     * 
     * Represents an item that can place a set of polished andesite
     * stairs within Minecraft.
     */
    static readonly polishedAndesiteStairs: ItemType;
    /**
     * 磨制玄武岩。
     * 
     * Represents an item that can place a block of polished basalt
     * within Minecraft.
     */
    static readonly polishedBasalt: ItemType;
    /**
     * 磨制黑石。
     * 
     * Represents an item that can place a block of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstone: ItemType;
    /**
     * 磨制黑石砖。
     * 
     * Represents an item that can place a block of polished
     * blackstone bricks within Minecraft.
     */
    static readonly polishedBlackstoneBricks: ItemType;
    /**
     * 磨制黑石砖台阶。
     * 
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstoneBrickSlab: ItemType;
    /**
     * 磨制黑石砖楼梯。
     * 
     * Represents an item that can place a set of polished
     * blackstone brick stairs within Minecraft.
     */
    static readonly polishedBlackstoneBrickStairs: ItemType;
    /**
     * 磨制黑石砖墙。
     * 
     * Represents an item that can place a polished blackstone
     * brick wall within Minecraft.
     */
    static readonly polishedBlackstoneBrickWall: ItemType;
    /**
     * 磨制黑石按钮。
     * 
     * Represents an item that can place a polished blackstone
     * button within Minecraft.
     */
    static readonly polishedBlackstoneButton: ItemType;
    /**
     * 磨制黑石压力板。
     * 
     * Represents an item that can place a polished blackstone
     * pressure plate within Minecraft.
     */
    static readonly polishedBlackstonePressurePlate: ItemType;
    /**
     * 磨制黑石台阶。
     * 
     * Represents an item that can place a slab of polished
     * blackstone within Minecraft.
     */
    static readonly polishedBlackstoneSlab: ItemType;
    /**
     * 磨制黑石楼梯。
     * 
     * Represents an item that can place a set of polished
     * blackstone stairs within Minecraft.
     */
    static readonly polishedBlackstoneStairs: ItemType;
    /**
     * 磨制黑石墙。
     * 
     * Represents an item that can place a polished blackstone wall
     * within Minecraft.
     */
    static readonly polishedBlackstoneWall: ItemType;
    /**
     * 磨制深板岩。
     * 
     * Represents an item that can place a block of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslate: ItemType;
    /**
     * 磨制深板岩台阶。
     * 
     * Represents an item that can place a slab of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslateSlab: ItemType;
    /**
     * 磨制深板岩楼梯。
     * 
     * Represents an item that can place a set of polished
     * deepslate stairs within Minecraft.
     */
    static readonly polishedDeepslateStairs: ItemType;
    /**
     * 磨制深板岩墙。
     * 
     * Represents an item that can place a wall of polished
     * deepslate within Minecraft.
     */
    static readonly polishedDeepslateWall: ItemType;
    /**
     * 磨制闪长岩楼梯。
     * 
     * Represents an item that can place a block of polished
     * diorite within Minecraft.
     */
    static readonly polishedDioriteStairs: ItemType;
    /**
     * 磨制花岗岩楼梯。
     * 
     * Represents an item that can place a set of polished granite
     * stairs within Minecraft.
     */
    static readonly polishedGraniteStairs: ItemType;
    /**
     * 爆裂紫颂果。
     */
    static readonly poppedChorusFruit: ItemType;
    /**
     * 生猪排。
     */
    static readonly porkchop: ItemType;
    /**
     * 马铃薯。
     */
    static readonly potato: ItemType;
    /**
     * 药水。
     */
    static readonly potion: ItemType;
    /**
     * 细雪桶。
     */
    static readonly powderSnowBucket: ItemType;
    /**
     * 海晶石/暗海晶石/海晶石砖。
     * 
     * Represents an item that can place a block of prismarine
     * within Minecraft.
     */
    static readonly prismarine: ItemType;
    /**
     * 海晶石砖楼梯。
     * 
     * Represents an item that can place a set of prismarine brick
     * stairs within Minecraft.
     */
    static readonly prismarineBricksStairs: ItemType;
    /**
     * 海晶砂粒。
     */
    static readonly prismarineCrystals: ItemType;
    /**
     * 海晶碎片。
     */
    static readonly prismarineShard: ItemType;
    /**
     * 海晶石楼梯。
     * 
     * Represents an item that can place a set of prismarine stairs
     * within Minecraft.
     */
    static readonly prismarineStairs: ItemType;
    /**
     * 河豚。
     */
    static readonly pufferfish: ItemType;
    /**
     * 河豚桶。
     */
    static readonly pufferfishBucket: ItemType;
    /**
     * 河豚刷怪蛋。
     */
    static readonly pufferfishSpawnEgg: ItemType;
    /**
     * 南瓜。
     * 
     * Represents an item that can place a pumpkin within
     * Minecraft.
     */
    static readonly pumpkin: ItemType;
    /**
     * 南瓜派。
     */
    static readonly pumpkinPie: ItemType;
    /**
     * 南瓜种子。
     */
    static readonly pumpkinSeeds: ItemType;
    /**
     * 紫色蜡烛。
     * 
     * Represents an item that can place a purple candle within
     * Minecraft.
     */
    static readonly purpleCandle: ItemType;
    /**
     * 紫色染料。
     */
    static readonly purpleDye: ItemType;
    /**
     * 紫色带釉陶瓦。
     * 
     * Represents an item that can place a purple-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly purpleGlazedTerracotta: ItemType;
    /**
     * 紫色羊毛。
     */
    static readonly purpleWool: ItemType;
    /**
     * 紫珀块/雕纹紫珀块/紫珀柱/平滑紫珀块。
     * 
     * Represents an item that can place a purpur block within
     * Minecraft.
     */
    static readonly purpurBlock: ItemType;
    /**
     * 紫珀楼梯。
     * 
     * Represents an item that can place a set of purpur stairs
     * within Minecraft.
     */
    static readonly purpurStairs: ItemType;
    /**
     * 下界石英。
     */
    static readonly quartz: ItemType;
    /**
     * 石英块/雕纹石英块/石英柱/平滑石英块。
     * 
     * Represents an item that can place a block of solid quartz
     * within Minecraft.
     */
    static readonly quartzBlock: ItemType;
    /**
     * 石英砖。
     * 
     * Represents an item that can place a block of solid quartz
     * bricks within Minecraft.
     */
    static readonly quartzBricks: ItemType;
    /**
     * 下界石英矿石。
     * 
     * Represents an item that can place a block with embedded
     * quartz ore within Minecraft.
     */
    static readonly quartzOre: ItemType;
    /**
     * 石英楼梯。
     * 
     * Represents an item that can place a set of quartz stairs
     * within Minecraft.
     */
    static readonly quartzStairs: ItemType;
    /**
     * 兔子。
     */
    static readonly rabbit: ItemType;
    /**
     * 兔子脚。
     */
    static readonly rabbitFoot: ItemType;
    /**
     * 兔子皮。
     */
    static readonly rabbitHide: ItemType;
    /**
     * 兔子刷怪蛋。
     */
    static readonly rabbitSpawnEgg: ItemType;
    /**
     * 兔肉煲。
     */
    static readonly rabbitStew: ItemType;
    /**
     * 铁轨。
     * 
     * Represents an item that can place a set of rails within
     * Minecraft.
     */
    static readonly rail: ItemType;
    /**
     * 劫掠兽刷怪蛋。
     */
    static readonly ravagerSpawnEgg: ItemType;
    /**
     * 粗铜。
     */
    static readonly rawCopper: ItemType;
    /**
     * 粗铜块。
     * 
     * Represents an item that can place a block of raw copper
     * within Minecraft.
     */
    static readonly rawCopperBlock: ItemType;
    /**
     * 粗金。
     */
    static readonly rawGold: ItemType;
    /**
     * 粗金块。
     * 
     * Represents an item that can place a block of raw gold within
     * Minecraft.
     */
    static readonly rawGoldBlock: ItemType;
    /**
     * 粗铁。
     */
    static readonly rawIron: ItemType;
    /**
     * 粗铁块。
     * 
     * Represents an item that can place a block of raw iron within
     * Minecraft.
     */
    static readonly rawIronBlock: ItemType;
    /**
     * 追溯指针。
     */
    static readonly recoveryCompass: ItemType;
    /**
     * 红色蜡烛。
     * 
     * Represents an item that can place a red candle within
     * Minecraft.
     */
    static readonly redCandle: ItemType;
    /**
     * 红色染料。
     */
    static readonly redDye: ItemType;
    /**
     * 虞美人/兰花/绒球葱/蓝花美耳草/红色郁金香/橙色郁金香/白色郁金香/粉红色郁金香/滨菊/矢车菊/铃兰。
     * 
     * Represents an item that can place a red flower within
     * Minecraft.
     */
    static readonly redFlower: ItemType;
    /**
     * 红色带釉陶瓦。
     * 
     * Represents an item that can place a red-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly redGlazedTerracotta: ItemType;
    /**
     * 红色蘑菇。
     * 
     * Represents an item that can place a red mushroom within
     * Minecraft.
     */
    static readonly redMushroom: ItemType;
    /**
     * 红色蘑菇方块。
     * 
     * Represents an item that can place a block of red mushroom
     * within Minecraft.
     */
    static readonly redMushroomBlock: ItemType;
    /**
     * 红色下界砖块。
     * 
     * Represents an item that can place a block of red nether
     * brick within Minecraft.
     */
    static readonly redNetherBrick: ItemType;
    /**
     * 红色下界砖楼梯。
     * 
     * Represents an item that can place a set of red nether brick
     * stairs within Minecraft.
     */
    static readonly redNetherBrickStairs: ItemType;
    /**
     * 红砂岩/雕纹红砂岩/切制红砂岩/平滑红砂岩。
     * 
     * Represents an item that can place a block of red sandstone
     * within Minecraft.
     */
    static readonly redSandstone: ItemType;
    /**
     * 红砂岩楼梯。
     * 
     * Represents an item that can place a set of red sandstone
     * stairs within Minecraft.
     */
    static readonly redSandstoneStairs: ItemType;
    /**
     * 红石粉。
     */
    static readonly redstone: ItemType;
    /**
     * 红石块。
     * 
     * Represents an item that can place a block of redstone within
     * Minecraft.
     */
    static readonly redstoneBlock: ItemType;
    /**
     * 红石灯。
     * 
     * Represents an item that can place a redstone lamp within
     * Minecraft.
     */
    static readonly redstoneLamp: ItemType;
    /**
     * 红石矿石。
     * 
     * Represents an item that can place a block with embedded
     * redstone ore within Minecraft.
     */
    static readonly redstoneOre: ItemType;
    /**
     * 红石火把。
     * 
     * Represents an item that can place a redstone torch within
     * Minecraft.
     */
    static readonly redstoneTorch: ItemType;
    /**
     * 红色羊毛。
     */
    static readonly redWool: ItemType;
    /**
     * 强化深板岩。
     */
    static readonly reinforcedDeepslate: ItemType;
    /**
     * 红石中继器。
     */
    static readonly repeater: ItemType;
    /**
     * 循环型命令方块。
     * 
     * Represents an item that can place a repeating command block
     * within Minecraft.
     */
    static readonly repeatingCommandBlock: ItemType;
    /**
     * 重生锚。
     * 
     * Represents an item that can place a respawn anchor within
     * Minecraft.
     */
    static readonly respawnAnchor: ItemType;
    /**
     * 腐肉。
     */
    static readonly rottenFlesh: ItemType;
    /**
     * 鞍。
     */
    static readonly saddle: ItemType;
    /**
     * 鲑鱼。
     */
    static readonly salmon: ItemType;
    /**
     * 鲑鱼桶。
     */
    static readonly salmonBucket: ItemType;
    /**
     * 鲑鱼刷怪蛋。
     */
    static readonly salmonSpawnEgg: ItemType;
    /**
     * 沙子/红沙。
     * 
     * Represents an item that can place a block of sand within
     * Minecraft.
     */
    static readonly sand: ItemType;
    /**
     * 砂岩/雕纹砂岩/切制砂岩/平滑砂岩。
     * 
     * Represents an item that can place a block of sandstone
     * within Minecraft.
     */
    static readonly sandstone: ItemType;
    /**
     * 砂岩楼梯。
     * 
     * Represents an item that can place a set of sandstone stairs
     * within Minecraft.
     */
    static readonly sandstoneStairs: ItemType;
    /**
     * 橡树树苗/云杉树苗/白桦树苗/丛林树苗/金合欢树苗/深色橡树树苗。
     * 
     * Represents an item that can place a sapling within
     * Minecraft.
     */
    static readonly sapling: ItemType;
    /**
     * 脚手架。
     * 
     * Represents an item that can place a set of scaffolding
     * within Minecraft.
     */
    static readonly scaffolding: ItemType;
    /**
     * 幽匿块。
     */
    static readonly sculk: ItemType;
    /**
     * 幽匿催发体。
     */
    static readonly sculkCatalyst: ItemType;
    /**
     * 幽匿感测体。
     * 
     * Represents an item that can place a sculk sensor within
     * Minecraft.
     */
    static readonly sculkSensor: ItemType;
    /**
     * 幽匿尖啸体。
     */
    static readonly sculkShrieker: ItemType;
    /**
     * 幽匿脉络。
     */
    static readonly sculkVein: ItemType;
    /**
     * 鳞甲。
     */
    static readonly scute: ItemType;
    /**
     * 海草。
     * 
     * Represents seagrass within Minecraft.
     */
    static readonly seagrass: ItemType;
    /**
     * 海晶灯。
     */
    static readonly seaLantern: ItemType;
    /**
     * 海泡菜。
     * 
     * Represents an item that can place a seapickle within
     * Minecraft.
     */
    static readonly seaPickle: ItemType;
    /**
     * 剪刀。
     */
    static readonly shears: ItemType;
    /**
     * 绵羊刷怪蛋。
     */
    static readonly sheepSpawnEgg: ItemType;
    /**
     * 盾牌。
     */
    static readonly shield: ItemType;
    /**
     * 菌光体。
     * 
     * Represents an item that can place a shroom light within
     * Minecraft.
     */
    static readonly shroomlight: ItemType;
    /**
     * 潜影盒。
     * 
     * Represents an item that can place a shulker box within
     * Minecraft.
     */
    static readonly shulkerBox: ItemType;
    /**
     * 潜影壳。
     */
    static readonly shulkerShell: ItemType;
    /**
     * 潜影贝刷怪蛋。
     */
    static readonly shulkerSpawnEgg: ItemType;
    /**
     * 蠹虫刷怪蛋。
     */
    static readonly silverfishSpawnEgg: ItemType;
    /**
     * 淡灰色带釉陶瓦。
     * 
     * Represents an item that can place a silver-colored block of
     * glazed terracotta within Minecraft.
     */
    static readonly silverGlazedTerracotta: ItemType;
    /**
     * 骷髅马刷怪蛋。
     */
    static readonly skeletonHorseSpawnEgg: ItemType;
    /**
     * 骷髅刷怪蛋。
     */
    static readonly skeletonSpawnEgg: ItemType;
    /**
     * 生物头颅。
     * 
     * Represents an item that can place a skull within Minecraft.
     */
    static readonly skull: ItemType;
    /**
     * 头颅盾徽旗帜图案。
     */
    static readonly skullBannerPattern: ItemType;
    /**
     * 黏液块。
     * 
     * Represents slime within Minecraft.
     */
    static readonly slime: ItemType;
    /**
     * 黏液球。
     */
    static readonly slimeBall: ItemType;
    /**
     * 史莱姆刷怪蛋。
     */
    static readonly slimeSpawnEgg: ItemType;
    /**
     * 小型紫晶芽。
     * 
     * Represents an item that can place a small bud of amethyst
     * within Minecraft.
     */
    static readonly smallAmethystBud: ItemType;
    /**
     * 小型垂滴叶。
     * 
     * Represents an item that can place a small dripleaf block
     * within Minecraft.
     */
    static readonly smallDripleafBlock: ItemType;
    /**
     * 锻造台。
     * 
     * Represents an item that can place a smithing table within
     * Minecraft.
     */
    static readonly smithingTable: ItemType;
    /**
     * 烟熏炉。
     * 
     * Represents an item that can place a smoker within Minecraft.
     */
    static readonly smoker: ItemType;
    /**
     * 平滑玄武岩。
     * 
     * Represents an item that can place a block of smooth basalt
     * within Minecraft.
     */
    static readonly smoothBasalt: ItemType;
    /**
     * 平滑石英楼梯。
     * 
     * Represents an item that can place a set of smooth quartz
     * stairs within Minecraft.
     */
    static readonly smoothQuartzStairs: ItemType;
    /**
     * 平滑红砂岩楼梯。
     * 
     * Represents an item that can place a set of smooth red
     * sandstone stairs within Minecraft.
     */
    static readonly smoothRedSandstoneStairs: ItemType;
    /**
     * 平滑砂岩楼梯。
     * 
     * Represents an item that can place a set of smooth redstone
     * stairs within Minecraft.
     */
    static readonly smoothSandstoneStairs: ItemType;
    /**
     * 平滑石头。
     * 
     * Represents an item that can place a smooth stone block
     * within Minecraft.
     */
    static readonly smoothStone: ItemType;
    /**
     * 雪块。
     * 
     * Represents snow within Minecraft.
     */
    static readonly snow: ItemType;
    /**
     * 雪球。
     */
    static readonly snowball: ItemType;
    /**
     * 雪傀儡刷怪蛋。
     */
    static readonly snowGolemSpawnEgg: ItemType;
    /**
     * 顶层雪。
     * 
     * Represents an item that can place a layer of snow within
     * Minecraft.
     */
    static readonly snowLayer: ItemType;
    /**
     * 灵魂营火。
     * 
     * Represents an item that can place a soul campfire within
     * Minecraft.
     */
    static readonly soulCampfire: ItemType;
    /**
     * 灵魂灯笼。
     * 
     * Represents an item that can place a soul lantern within
     * Minecraft.
     */
    static readonly soulLantern: ItemType;
    /**
     * 灵魂沙。
     * 
     * Represents an item that can place a block of soul sand
     * within Minecraft.
     */
    static readonly soulSand: ItemType;
    /**
     * 灵魂土。
     * 
     * Represents soul soil within Minecraft.
     */
    static readonly soulSoil: ItemType;
    /**
     * 灵魂火把。
     * 
     * Represents an item that can place a soul torch within
     * Minecraft.
     */
    static readonly soulTorch: ItemType;
    /**
     * 刷怪蛋。
     */
    static readonly spawnEgg: ItemType;
    /**
     * 蜘蛛眼。
     */
    static readonly spiderEye: ItemType;
    /**
     * 蜘蛛刷怪蛋。
     */
    static readonly spiderSpawnEgg: ItemType;
    /**
     * 喷溅药水。
     */
    static readonly splashPotion: ItemType;
    /**
     * 海绵/湿海绵。
     * 
     * Represents an item that can place a sponge within Minecraft.
     */
    static readonly sponge: ItemType;
    /**
     * 孢子花。
     * 
     * Represents an item that can place a spore blossom within
     * Minecraft.
     */
    static readonly sporeBlossom: ItemType;
    /**
     * 云杉木船。
     */
    static readonly spruceBoat: ItemType;
    /**
     * 云杉木按钮。
     * 
     * Represents an item that can place a spruce wood button
     * within Minecraft.
     */
    static readonly spruceButton: ItemType;
    /**
     * 云杉木运输船。
     */
    static readonly spruceChestBoat: ItemType;
    /**
     * 云杉木门。
     * 
     * Represents an item that can place a spruce wood door within
     * Minecraft.
     */
    static readonly spruceDoor: ItemType;
    /**
     * 云杉木栅栏门。
     * 
     * Represents an item that can place a spruce wood fence gate
     * within Minecraft.
     */
    static readonly spruceFenceGate: ItemType;
    /**
     * 云杉木压力板。
     * 
     * Represents an item that can place a spruce wood pressure
     * plate within Minecraft.
     */
    static readonly sprucePressurePlate: ItemType;
    /**
     * 云杉木告示牌。
     * 
     * Represents an item that can place a spruce sign within
     * Minecraft.
     */
    static readonly spruceSign: ItemType;
    /**
     * 云杉木楼梯。
     * 
     * Represents an item that can place a set of spruce wood
     * stairs within Minecraft.
     */
    static readonly spruceStairs: ItemType;
    /**
     * 云杉木活板门。
     * 
     * Represents an item that can place a spruce wood trapdoor
     * within Minecraft.
     */
    static readonly spruceTrapdoor: ItemType;
    /**
     * 望远镜。
     */
    static readonly spyglass: ItemType;
    /**
     * 鱿鱼刷怪蛋。
     */
    static readonly squidSpawnEgg: ItemType;
    /**
     * 染色玻璃。
     * 
     * Represents stained glass within Minecraft.
     */
    static readonly stainedGlass: ItemType;
    /**
     * 染色玻璃板。
     * 
     * Represents an item that can place a pane of stained glass
     * within Minecraft.
     */
    static readonly stainedGlassPane: ItemType;
    /**
     * 染色陶瓦。
     * 
     * Represents an item that can place a block of stained
     * hardened clay within Minecraft.
     */
    static readonly stainedHardenedClay: ItemType;
    /**
     * 木棍。
     */
    static readonly stick: ItemType;
    /**
     * 黏性活塞。
     * 
     * Represents an item that can place a piston block with a
     * sticky arm within Minecraft.
     */
    static readonly stickyPiston: ItemType;
    /**
     * 石头/花岗岩/磨制花岗岩/闪长岩/磨制闪长岩/安山岩/磨制安山岩。
     * 
     * Represents an item that can place a block of stone within
     * Minecraft.
     */
    static readonly stone: ItemType;
    /**
     * 石斧。
     */
    static readonly stoneAxe: ItemType;
    /**
     * 平滑石头台阶/砂岩台阶/石化橡木台阶/圆石台阶/红砖台阶/石砖台阶/石英台阶/下界砖台阶。
     */
    static readonly stoneBlockSlab: ItemType;
    /**
     * 红砂岩台阶/紫珀台阶/海晶石台阶/暗海晶石台阶/海晶石砖台阶/苔石台阶/平滑砂岩台阶/红色下界砖台阶。
     */
    static readonly stoneBlockSlab2: ItemType;
    /**
     * 末地石砖台阶/平滑红砂岩台阶/磨制安山岩台阶/安山岩台阶/闪长岩台阶/磨制闪长岩台阶/花岗岩台阶/磨制花岗岩台阶。
     */
    static readonly stoneBlockSlab3: ItemType;
    /**
     * 苔石砖台阶/平滑石英台阶/石头台阶/切制砂岩台阶/切制红砂岩台阶。
     */
    static readonly stoneBlockSlab4: ItemType;
    /**
     * 石砖/苔石砖/裂纹石砖/雕纹石砖。
     * 
     * Represents an item that can place a block of stone brick
     * within Minecraft.
     */
    static readonly stonebrick: ItemType;
    /**
     * 石砖楼梯。
     * 
     * Represents an item that can place a set of stone brick
     * stairs within Minecraft.
     */
    static readonly stoneBrickStairs: ItemType;
    /**
     * 石头按钮。
     * 
     * Represents an item that can place a stone button within
     * Minecraft.
     */
    static readonly stoneButton: ItemType;
    /**
     * 切石机。
     * 
     * Represents an item that can place a stonecutter block within
     * Minecraft.
     */
    static readonly stonecutterBlock: ItemType;
    /**
     * 石锄。
     */
    static readonly stoneHoe: ItemType;
    /**
     * 石镐。
     */
    static readonly stonePickaxe: ItemType;
    /**
     * 石头压力板。
     * 
     * Represents an item that can place a stone pressure plate
     * within Minecraft.
     */
    static readonly stonePressurePlate: ItemType;
    /**
     * 石锹。
     */
    static readonly stoneShovel: ItemType;
    /**
     * 石头楼梯。
     * 
     * Represents an item that can place a set of stone stairs
     * within Minecraft.
     */
    static readonly stoneStairs: ItemType;
    /**
     * 石剑。
     */
    static readonly stoneSword: ItemType;
    /**
     * 流浪者刷怪蛋。
     */
    static readonly straySpawnEgg: ItemType;
    /**
     * 炽足兽刷怪蛋。
     */
    static readonly striderSpawnEgg: ItemType;
    /**
     * 线。
     */
    static readonly 'string': ItemType;
    /**
     * 去皮金合欢原木。
     * 
     * Represents an item that can place a stripped acacia log
     * within Minecraft.
     */
    static readonly strippedAcaciaLog: ItemType;
    /**
     * 去皮白桦原木。
     * 
     * Represents an item that can place a stripped birch log
     * within Minecraft.
     */
    static readonly strippedBirchLog: ItemType;
    /**
     * 去皮绯红菌核。
     * 
     * Represents stripped crimson hyphae within Minecraft.
     */
    static readonly strippedCrimsonHyphae: ItemType;
    /**
     * 去皮绯红菌柄。
     * 
     * Represents an item that can place a stripped crimson stem
     * within Minecraft.
     */
    static readonly strippedCrimsonStem: ItemType;
    /**
     * 去皮深色橡木原木。
     * 
     * Represents an item that can place a stripped dark oak log
     * within Minecraft.
     */
    static readonly strippedDarkOakLog: ItemType;
    /**
     * 去皮丛林原木。
     * 
     * Represents an item that can place a stripped jungle log
     * within Minecraft.
     */
    static readonly strippedJungleLog: ItemType;
    /**
     * 去皮红树原木。
     */
    static readonly strippedMangroveLog: ItemType;
    /**
     * 去皮红树木。
     */
    static readonly strippedMangroveWood: ItemType;
    /**
     * 去皮橡木原木。
     * 
     * Represents an item that can place a stripped oak log within
     * Minecraft.
     */
    static readonly strippedOakLog: ItemType;
    /**
     * 去皮云杉原木。
     * 
     * Represents an item that can place a stripped spruce log
     * within Minecraft.
     */
    static readonly strippedSpruceLog: ItemType;
    /**
     * 去皮诡异菌核。
     * 
     * Represents stripped warped hyphae within Minecraft.
     */
    static readonly strippedWarpedHyphae: ItemType;
    /**
     * 去皮诡异菌柄。
     * 
     * Represents stripped warped stem within Minecraft.
     */
    static readonly strippedWarpedStem: ItemType;
    /**
     * 结构方块。
     * 
     * Represents an item that can place a structure block, which
     * provides for the saving and loading of block structures,
     * within Minecraft.
     */
    static readonly structureBlock: ItemType;
    /**
     * 结构空位。
     * 
     * Represents an item that can place a structure void within
     * Minecraft.
     */
    static readonly structureVoid: ItemType;
    /**
     * 糖。
     */
    static readonly sugar: ItemType;
    /**
     * 甘蔗。
     */
    static readonly sugarCane: ItemType;
    /**
     * 迷之炖菜。
     */
    static readonly suspiciousStew: ItemType;
    /**
     * 甜浆果。
     */
    static readonly sweetBerries: ItemType;
    /**
     * 蝌蚪桶。
     */
    static readonly tadpoleBucket: ItemType;
    /**
     * 蝌蚪刷怪蛋。
     */
    static readonly tadpoleSpawnEgg: ItemType;
    /**
     * 蕨/草。
     * 
     * Represents tall grass within Minecraft.
     */
    static readonly tallgrass: ItemType;
    /**
     * 标靶。
     * 
     * Represents an item that can place a target within Minecraft.
     */
    static readonly target: ItemType;
    /**
     * 遮光玻璃。
     * 
     * Represents tinted glass within Minecraft.
     */
    static readonly tintedGlass: ItemType;
    /**
     * TNT。
     * 
     * Represents an item that can place a block of TnT within
     * Minecraft.
     */
    static readonly tnt: ItemType;
    /**
     * TNT矿车。
     */
    static readonly tntMinecart: ItemType;
    /**
     * 火把。
     * 
     * Represents an item that can place a torch within Minecraft.
     */
    static readonly torch: ItemType;
    /**
     * 不死图腾。
     */
    static readonly totemOfUndying: ItemType;
    /**
     * 行商羊驼刷怪蛋。
     */
    static readonly traderLlamaSpawnEgg: ItemType;
    /**
     * 活板门。
     * 
     * Represents an item that can place a trapdoor within
     * Minecraft.
     */
    static readonly trapdoor: ItemType;
    /**
     * 陷阱箱。
     * 
     * Represents an item that can place a trapped chest within
     * Minecraft.
     */
    static readonly trappedChest: ItemType;
    /**
     * 三叉戟。
     */
    static readonly trident: ItemType;
    /**
     * 绊线钩。
     * 
     * Represents an item that can place a tripwire hook within
     * Minecraft.
     */
    static readonly tripwireHook: ItemType;
    /**
     * 热带鱼。
     */
    static readonly tropicalFish: ItemType;
    /**
     * 热带鱼桶。
     */
    static readonly tropicalFishBucket: ItemType;
    /**
     * 热带鱼刷怪蛋。
     */
    static readonly tropicalFishSpawnEgg: ItemType;
    /**
     * 凝灰岩。
     * 
     * Represents an item that can place a block of tuff within
     * Minecraft.
     */
    static readonly tuff: ItemType;
    /**
     * 海龟蛋。
     * 
     * Represents an item that can place a turtle egg within
     * Minecraft.
     */
    static readonly turtleEgg: ItemType;
    /**
     * 海龟壳。
     */
    static readonly turtleHelmet: ItemType;
    /**
     * 海龟刷怪蛋。
     */
    static readonly turtleSpawnEgg: ItemType;
    /**
     * 缠怨藤。
     * 
     * Represents an item that can place a set of twisting vines
     * within Minecraft.
     */
    static readonly twistingVines: ItemType;
    /**
     * 潜影盒。
     * 
     * Represents an item that can place an undyed shulker box
     * within Minecraft.
     */
    static readonly undyedShulkerBox: ItemType;
    /**
     * 青翠蛙明灯。
     */
    static readonly verdantFroglight: ItemType;
    /**
     * 恼鬼刷怪蛋。
     */
    static readonly vexSpawnEgg: ItemType;
    /**
     * 村民刷怪蛋。
     */
    static readonly villagerSpawnEgg: ItemType;
    /**
     * 卫道士刷怪蛋。
     */
    static readonly vindicatorSpawnEgg: ItemType;
    /**
     * 藤蔓。
     * 
     * Represents an item that can place a set of vines within
     * Minecraft.
     */
    static readonly vine: ItemType;
    /**
     * 流浪商人刷怪蛋。
     */
    static readonly wanderingTraderSpawnEgg: ItemType;
    /**
     * 监守者刷怪蛋。
     */
    static readonly wardenSpawnEgg: ItemType;
    /**
     * 诡异木按钮。
     * 
     * Represents an item that can place a warped button within
     * Minecraft.
     */
    static readonly warpedButton: ItemType;
    /**
     * 诡异木门。
     * 
     * Represents an item that can place a warped door within
     * Minecraft.
     */
    static readonly warpedDoor: ItemType;
    /**
     * 诡异木栅栏。
     * 
     * Represents an item that can place a warped fence within
     * Minecraft.
     */
    static readonly warpedFence: ItemType;
    /**
     * 诡异木栅栏门。
     * 
     * Represents an item that can place a warped fence gate within
     * Minecraft.
     */
    static readonly warpedFenceGate: ItemType;
    /**
     * 诡异菌。
     * 
     * Represents warped fungus within Minecraft.
     */
    static readonly warpedFungus: ItemType;
    /**
     * 诡异菌钓竿。
     */
    static readonly warpedFungusOnAStick: ItemType;
    /**
     * 诡异菌核。
     * 
     * Represents warped hyphae within Minecraft.
     */
    static readonly warpedHyphae: ItemType;
    /**
     * 诡异菌岩。
     * 
     * Represents warped nylium within Minecraft.
     */
    static readonly warpedNylium: ItemType;
    /**
     * 诡异木板。
     * 
     * Represents warped planks within Minecraft.
     */
    static readonly warpedPlanks: ItemType;
    /**
     * 诡异木压力板。
     * 
     * Represents an item that can place a warped pressure plate
     * within Minecraft.
     */
    static readonly warpedPressurePlate: ItemType;
    /**
     * 诡异菌索。
     * 
     * Represents an item that can place a set of warped roots
     * within Minecraft.
     */
    static readonly warpedRoots: ItemType;
    /**
     * 诡异木告示牌。
     */
    static readonly warpedSign: ItemType;
    /**
     * 诡异木台阶。
     * 
     * Represents an item that can place a slab of warped material
     * within Minecraft.
     */
    static readonly warpedSlab: ItemType;
    /**
     * 诡异木楼梯。
     * 
     * Represents an item that can place a set of warped stairs
     * within Minecraft.
     */
    static readonly warpedStairs: ItemType;
    /**
     * 诡异菌柄。
     * 
     * Represents an item that can place a warped stem within
     * Minecraft.
     */
    static readonly warpedStem: ItemType;
    /**
     * 诡异木活板门。
     * 
     * Represents an item that can place a warped trapdoor within
     * Minecraft.
     */
    static readonly warpedTrapdoor: ItemType;
    /**
     * 诡异疣块。
     * 
     * Represents an item that can place a warped wart block within
     * Minecraft.
     */
    static readonly warpedWartBlock: ItemType;
    /**
     * 水桶。
     */
    static readonly waterBucket: ItemType;
    /**
     * 睡莲。
     * 
     * Represents an item that can place a water lily within
     * Minecraft.
     */
    static readonly waterlily: ItemType;
    /**
     * 涂蜡铜块。
     * 
     * Represents an item that can place a block of waxed copper
     * within Minecraft.
     */
    static readonly waxedCopper: ItemType;
    /**
     * 涂蜡切制铜块。
     * 
     * Represents an item that can place a block of waxed cut
     * copper within Minecraft.
     */
    static readonly waxedCutCopper: ItemType;
    /**
     * 涂蜡切制铜台阶。
     * 
     * Represents an item that can place a slab of waxed cut copper
     * within Minecraft.
     */
    static readonly waxedCutCopperSlab: ItemType;
    /**
     * 涂蜡切制铜楼梯。
     * 
     * Represents an item that can place a set of waxed cut copper
     * stairs within Minecraft.
     */
    static readonly waxedCutCopperStairs: ItemType;
    /**
     * 斑驳的涂蜡铜块。
     * 
     * Represents an item that can place a block of waxed exposed
     * copper within Minecraft.
     */
    static readonly waxedExposedCopper: ItemType;
    /**
     * 斑驳的涂蜡切制铜块。
     * 
     * Represents an item that can place a block of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly waxedExposedCutCopper: ItemType;
    /**
     * 斑驳的涂蜡切制铜台阶。
     * 
     * Represents an item that can place a slab of waxed exposed
     * cut copper within Minecraft.
     */
    static readonly waxedExposedCutCopperSlab: ItemType;
    /**
     * 斑驳的涂蜡切制铜楼梯。
     * 
     * Represents an item that can place a set of waxed exposed cut
     * copper stairs within Minecraft.
     */
    static readonly waxedExposedCutCopperStairs: ItemType;
    /**
     * 氧化的涂蜡铜块。
     * 
     * Represents an item that can place a block of waxed oxidized
     * copper within Minecraft.
     */
    static readonly waxedOxidizedCopper: ItemType;
    /**
     * 氧化的涂蜡切制铜块。
     * 
     * Represents an item that can place a block of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly waxedOxidizedCutCopper: ItemType;
    /**
     * 氧化的涂蜡切制铜台阶。
     * 
     * Represents an item that can place a slab of waxed oxidized
     * cut copper within Minecraft.
     */
    static readonly waxedOxidizedCutCopperSlab: ItemType;
    /**
     * 氧化的涂蜡切制铜楼梯。
     * 
     * Represents an item that can place a set of waxed oxidized
     * cut copper stairs within Minecraft.
     */
    static readonly waxedOxidizedCutCopperStairs: ItemType;
    /**
     * 锈蚀的涂蜡铜块。
     * 
     * Represents an item that can place a block of waxed weathered
     * copper within Minecraft.
     */
    static readonly waxedWeatheredCopper: ItemType;
    /**
     * 锈蚀的涂蜡切制铜块。
     * 
     * Represents an item that can place a block of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly waxedWeatheredCutCopper: ItemType;
    /**
     * 锈蚀的涂蜡切制铜台阶。
     * 
     * Represents an item that can place a slab of waxed weathered
     * cut copper within Minecraft.
     */
    static readonly waxedWeatheredCutCopperSlab: ItemType;
    /**
     * 锈蚀的涂蜡切制铜楼梯。
     * 
     * Represents an item that can place a set of waxed weathered
     * cut copper stairs within Minecraft.
     */
    static readonly waxedWeatheredCutCopperStairs: ItemType;
    /**
     * 锈蚀的铜块。
     * 
     * Represents an item that can place a block of weathered
     * copper within Minecraft.
     */
    static readonly weatheredCopper: ItemType;
    /**
     * 锈蚀的切制铜块。
     * 
     * Represents an item that can place a block of weathered cut
     * copper within Minecraft.
     */
    static readonly weatheredCutCopper: ItemType;
    /**
     * 锈蚀的切制铜台阶。
     * 
     * Represents an item that can place a slab of weathered cut
     * copper within Minecraft.
     */
    static readonly weatheredCutCopperSlab: ItemType;
    /**
     * 锈蚀的切制铜楼梯。
     * 
     * Represents an item that can place a set of weathered cut
     * copper stairs within Minecraft.
     */
    static readonly weatheredCutCopperStairs: ItemType;
    /**
     * 蜘蛛网。
     * 
     * Represents an item that can place a web within Minecraft.
     */
    static readonly web: ItemType;
    /**
     * 垂泪藤。
     * 
     * Represents an item that can place a set of weeping vines
     * within Minecraft.
     */
    static readonly weepingVines: ItemType;
    /**
     * 小麦。
     * 
     * Represents wheat within Minecraft.
     */
    static readonly wheat: ItemType;
    /**
     * 小麦种子。
     */
    static readonly wheatSeeds: ItemType;
    /**
     * 白色蜡烛。
     * 
     * Represents an item that can place a white candle within
     * Minecraft.
     */
    static readonly whiteCandle: ItemType;
    /**
     * 白色染料。
     */
    static readonly whiteDye: ItemType;
    /**
     * 白色带釉陶瓦。
     * 
     * Represents an item that can place a block of white glazed
     * terracotta within Minecraft.
     */
    static readonly whiteGlazedTerracotta: ItemType;
    /**
     * 白色羊毛。
     */
    static readonly whiteWool: ItemType;
    /**
     * 女巫刷怪蛋。
     */
    static readonly witchSpawnEgg: ItemType;
    /**
     * 凋灵玫瑰。
     * 
     * Represents an item that can place a wither rose within
     * Minecraft.
     */
    static readonly witherRose: ItemType;
    /**
     * 凋灵骷髅刷怪蛋。
     */
    static readonly witherSkeletonSpawnEgg: ItemType;
    /**
     * 凋灵刷怪蛋。
     */
    static readonly witherSpawnEgg: ItemType;
    /**
     * 狼刷怪蛋。
     */
    static readonly wolfSpawnEgg: ItemType;
    /**
     * 橡木/云杉木/白桦木/丛林木/金合欢木/深色橡木/去皮橡木/去皮云杉木/去皮白桦木/去皮丛林木/去皮金合欢木/去皮深色橡木。
     * 
     * Represents an item that can place a block of wood within
     * Minecraft.
     */
    static readonly wood: ItemType;
    /**
     * 木斧。
     */
    static readonly woodenAxe: ItemType;
    /**
     * 橡木按钮。
     * 
     * Represents an item that can place a wooden button within
     * Minecraft.
     */
    static readonly woodenButton: ItemType;
    /**
     * 橡木门。
     * 
     * Represents an item that can place a wooden door within
     * Minecraft.
     */
    static readonly woodenDoor: ItemType;
    /**
     * 木锄。
     */
    static readonly woodenHoe: ItemType;
    /**
     * 木镐。
     */
    static readonly woodenPickaxe: ItemType;
    /**
     * 橡木压力板。
     * 
     * Represents an item that can place a wooden pressure plate
     * within Minecraft.
     */
    static readonly woodenPressurePlate: ItemType;
    /**
     * 木锹。
     */
    static readonly woodenShovel: ItemType;
    /**
     * 橡木台阶/云杉木台阶/白桦木台阶/丛林木台阶/金合欢木台阶/深色橡木台阶。
     * 
     * Represents an item that can place a wooden slab within
     * Minecraft.
     */
    static readonly woodenSlab: ItemType;
    /**
     * 木剑。
     */
    static readonly woodenSword: ItemType;
    /**
     * 羊毛。
     * 
     * Represents wool within Minecraft.
     */
    static readonly wool: ItemType;
    /**
     * 书与笔。
     */
    static readonly writableBook: ItemType;
    /**
     * 黄色蜡烛。
     * 
     * Represents an item that can place a yellow candle within
     * Minecraft.
     */
    static readonly yellowCandle: ItemType;
    /**
     * 黄色染料。
     */
    static readonly yellowDye: ItemType;
    /**
     * 蒲公英。
     * 
     * Represents an item that can place a yellow flower within
     * Minecraft.
     */
    static readonly yellowFlower: ItemType;
    /**
     * 黄色带釉陶瓦。
     * 
     * Represents an item that can place a yellow block of glazed
     * terracotta within Minecraft.
     */
    static readonly yellowGlazedTerracotta: ItemType;
    /**
     * 黄色羊毛。
     */
    static readonly yellowWool: ItemType;
    /**
     * 僵尸疣猪兽刷怪蛋。
     */
    static readonly zoglinSpawnEgg: ItemType;
    /**
     * 僵尸马刷怪蛋。
     */
    static readonly zombieHorseSpawnEgg: ItemType;
    /**
     * 僵尸猪人刷怪蛋。
     */
    static readonly zombiePigmanSpawnEgg: ItemType;
    /**
     * 僵尸刷怪蛋。
     */
    static readonly zombieSpawnEgg: ItemType;
    /**
     * 僵尸村民刷怪蛋。
     */
    static readonly zombieVillagerSpawnEgg: ItemType;
}
/**
 * @beta
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * @param variableName
     * @param color
     */
    setColorRGB(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     * @param variableName
     * @param color
     */
    setColorRGBA(variableName: string, color: Color): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     * @param variableName
     * @param speed
     * @param direction
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     * @param variableName
     * @param vector
     */
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}
/**
 * @beta
 * Contains data resulting from a navigation operation,
 * including whether the navigation is possible and the path of
 * navigation.
 */
export class NavigationResult {
    protected constructor();
    /**
     * Whether the navigation result contains a full path,
     * including to the requested destination.
     */
    readonly isFullPath: boolean;
    getPath(): Vector3[];
}
/**
 * @beta
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
export class PistonActivateEvent extends BlockEvent {
    protected constructor();
    /**
     * Block impacted by this event.
     */
    readonly block: Block;
    /**
     * Dimension that contains the block that is the subject of
     * this event.
     */
    readonly dimension: Dimension;
    /**
     * True if the piston is the process of expanding.
     */
    readonly isExpanding: boolean;
    /**
     * Contains additional properties and details of the piston.
     */
    readonly piston: BlockPistonComponent;
}
/**
 * @beta
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     * @param callback
     * @example pistonEvent.ts
     * ```typescript
     *        let canceled = false;
     *
     *        const pistonLoc: mc.Vector3 = {
     *          x: Math.floor(targetLocation.x) + 1,
     *          y: Math.floor(targetLocation.y) + 2,
     *          z: Math.floor(targetLocation.z) + 1,
     *        };
     *
     *        const pistonCallback = mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
     *          if (pistonEvent.piston.location.equals(pistonLoc)) {
     *            log("Cancelling piston event");
     *            pistonEvent.cancel = true;
     *            canceled = true;
     *          }
     *        });
     *
     *
     * ```
     */
    subscribe(callback: (arg: PistonActivateEvent) => void): (arg: PistonActivateEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateEvent) => void): void;
}
/**
 * Represents a player within the world.
 */
export class Player extends Entity {
    protected constructor();
    /**
     * @beta
     * Dimension that the entity is currently within.
     * @throws This property can throw when used.
     */
    readonly dimension: Dimension;
    /**
     * Unique identifier of the player. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it.
     * @throws This property can throw when used.
     */
    readonly id: string;
    /**
     * @beta
     * True if the player is currently using a sneaking movement.
     */
    isSneaking: boolean;
    readonly level: number;
    /**
     * @beta
     * Current location of the player.
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * Name of the player.
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @beta
     * Optional name tag of the player.
     */
    nameTag: string;
    /**
     * @beta
     * Contains methods for manipulating the on-screen display of a
     * Player.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @beta
     * Returns a scoreboard identity that represents this entity.
     * @throws This property can throw when used.
     */
    readonly scoreboard: ScoreboardIdentity;
    /**
     * @beta
     * Manages the selected slot in the player's hotbar.
     */
    selectedSlot: number;
    readonly spawnDimension?: Dimension;
    /**
     * @beta
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. For players, which
     * don't use any AI semantics, this property does not do
     * anything.
     * @throws This property can throw when used.
     */
    readonly target: Entity;
    readonly totalXpNeededForNextLevel: number;
    /**
     * Unique identifier of the type of the entity - for example,
     * 'minecraft:player'.
     * @throws This property can throw when used.
     */
    readonly typeId: string;
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @beta
     * @remarks
     * Adds an effect, like poison, to the entity.
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply.
     * @param amplifier
     * Optional amplification of the effect to apply.
     * @param showParticles
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addExperience(amount: number): number;
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Adds a specified tag to an entity.
     * @param tag
     * Content of the tag to add.
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    applyDamage(amount: number, source?: EntityDamageSource): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearSpawn(): void;
    clearVelocity(): void;
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Returns the first intersecting block from the direction that
     * this player is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): Block;
    /**
     * @beta
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed. If the component is not present on
     * the entity, undefined is returned.
     */
    getComponent(componentId: string): IEntityComponent;
    /**
     * @beta
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     */
    getComponents(): IEntityComponent[];
    /**
     * @beta
     * @remarks
     * Returns a property value.
     * @param identifier
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, or undefined if the effect is not present.
     * @param effectType
     * @returns
     * Effect object for the specified effect, or undefined if the
     * effect is not present.
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect;
    getEffects(): Effect[];
    /**
     * @beta
     * @remarks
     * Returns a potential set of entities from the direction that
     * this player is looking at.
     * @param options
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): Entity[];
    getHeadLocation(): Vector3;
    /**
     * @beta
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @throws This function can throw errors.
     */
    getItemCooldown(itemCategory: string): number;
    getRotation(): XYRotation;
    getSpawnPosition(): Vector3 | undefined;
    /**
     * @beta
     * @remarks
     * Returns all tags associated with an entity.
     * @throws This function can throw errors.
     */
    getTags(): string[];
    getTotalXp(): number;
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     */
    hasComponent(componentId: string): boolean;
    /**
     * @beta
     * @remarks
     * Tests whether an entity has a particular tag.
     * @param tag
     * Identifier of the tag to test for.
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @beta
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     * @throws This function can throw errors.
     */
    kill(): void;
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @beta
     * @remarks
     * Plays a sound that only this particular player can hear.
     * @param soundID
     * Identifier of the sound to play.
     * @param soundOptions
     * Additional optional options for the sound.
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     * @param id
     * @param value
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * Removes a specified property.
     * @param identifier
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * Removes a specified tag from an entity.
     * @param tag
     * Content of the tag to remove.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    resetLevel(): void;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity.  Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @beta
     * @remarks
     * Sets a specified property to a value.
     * @param identifier 动态属性的标识符。
     * @param value 要设定的值，值的类型必须与动态属性注册的类型相同。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     *
     * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
     *
     * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所设置的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     * @param isOp
     * @throws This function can throw errors.
     */
    setOp(isOp: boolean): void;
    /**
     * @beta
     * @remarks
     * Sets the main rotation of the entity.
     * @param degreesX
     * @param degreesY
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    setSpawn(spawnPosition: Vector3, spawnDimension: Dimension): void;
    /**
     * @beta
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * @param itemCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * @throws This function can throw errors.
     */
    startItemCooldown(itemCategory: string, tickDuration: number): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected player to a new location
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param xRotation
     * X rotation of the player after teleportation.
     * @param yRotation
     * Y rotation of the player after teleportation.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleport(
        location: Vector3,
        dimension: Dimension,
        xRotation: number,
        yRotation: number,
        keepVelocity?: boolean,
    ): void;
    /**
     * @beta
     * @remarks
     * Teleports the selected player to a new location, and will
     * have the player facing a specified location.
     * @param location
     * New location for the player.
     * @param dimension
     * Dimension to move the selected player to.
     * @param facingLocation
     * Location that this player will be facing.
     * @param keepVelocity
     * @throws This function can throw errors.
     */
    teleportFacing(location: Vector3, dimension: Dimension, facingLocation: Vector3, keepVelocity?: boolean): void;
    /**
     * @beta
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}
/**
 * @beta
 * Represents the inventory of a {@link Player} in the world.
 */
export class PlayerInventoryComponentContainer extends InventoryComponentContainer {
    protected constructor();
    /**
     * Contains a count of the slots in the container that are
     * empty.
     * @throws This property can throw when used.
     */
    readonly emptySlotsCount: number;
    /**
     * Returns the size capacity of the inventory container on this
     * block.
     * @throws This property can throw when used.
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the specified container. Item will be placed
     * in the first available empty slot. (use .setItem if you wish
     * to set items in a particular slot.)
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Empties all items in this players' inventory.
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @remarks
     * Clears out a specific item at the specified slot index.
     * @param slot
     * @throws This function can throw errors.
     */
    clearItem(slot: number): void;
    /**
     * @remarks
     * Gets the item stack for the set of items at the specified
     * slot. If the slot is empty, returns undefined. This method
     * does not change or clear the contents of the specified slot.
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack;
    /**
     * @remarks
     * Returns a slot object for specifically managing a slot
     * within a broader inventory.
     * @param slot
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot.
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     * @param fromSlot
     * @param toSlot
     * Zero-based index of the slot to move to.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}
/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 */
export class PlayerIterator implements Iterable<Player> {
    protected constructor();
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     */
    next(): IteratorResult<Player>;
}
/**
 * @beta
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 */
export class PlayerJoinEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that joined the game.
     */
    readonly playerId: string;
    /**
     * Name of the player that has joined.
     */
    readonly playerName: string;
}
/**
 * @beta
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}
/**
 * @beta
 * Contains information regarding a player that has left the
 * world.
 */
export class PlayerLeaveEvent {
    protected constructor();
    /**
     * Opaque string identifier of the player that has left the
     * event.
     */
    readonly playerId: string;
    /**
     * Player that has left the world.
     */
    readonly playerName: string;
}
/**
 * @beta
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * @param callback
     */
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}
/**
 * @beta
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnEvent {
    protected constructor();
    /**
     * If true, this is the initial spawn of a player after joining
     * the game.
     */
    initialSpawn: boolean;
    /**
     * Object that represents the player that joined the game.
     */
    player: Player;
}
/**
 * @beta
 * Registers an event when a player is spawned (or re-spawned
 * after death) and fully ready within the world.
 */
export class PlayerSpawnEventSignal {
    protected constructor();
    /**
     * @remarks
     * Registers a new event receiver for this particular type of
     * event.
     * @param callback
     */
    subscribe(callback: (arg: PlayerSpawnEvent) => void): (arg: PlayerSpawnEvent) => void;
    /**
     * @remarks
     * De-registers an event receiver for the player spawn event.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerSpawnEvent) => void): void;
}
/**
 * @beta
 * Contains information related to a projectile hitting an
 * entity or block.
 */
export class ProjectileHitEvent {
    protected constructor();
    /**
     * Dimension where this projectile hit took place.
     */
    readonly dimension: Dimension;
    /**
     * Direction vector of the projectile as it hit a block/entity.
     */
    readonly hitVector: Vector;
    /**
     * Location where the projectile hit occurred.
     */
    readonly location: Vector3;
    /**
     * Entity for the projectile that hit a block/entity.
     */
    readonly projectile: Entity;
    /**
     * Optional source entity that fired the projectile.
     */
    readonly source: Entity;
    getBlockHit(): BlockHitInformation | undefined;
    getEntityHit(): EntityHitInformation | undefined;
}
/**
 * @beta
 * Manages callbacks that are connected to when a projectile
 * hits an entity or block.
 */
export class ProjectileHitEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity or block.
     * @param callback
     */
    subscribe(callback: (arg: ProjectileHitEvent) => void): (arg: ProjectileHitEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity or block.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ProjectileHitEvent) => void): void;
}
/**
 * @beta
 * 提供了用于注册一系列可以持久存储的动态属性的方法，应在 {@link WorldInitializeEvent} 中使用。
 *
 * Provides methods that should be used within the World
 * Initialize event to register dynamic properties that can be
 * used and stored within Minecraft.
 */
export class PropertyRegistry {
    protected constructor();
    /**
     * @remarks
     * 为特定实体类型注册动态属性。
     *
     * Registers a dynamic property for a particular entity type
     * (e.g., a minecraft:skeleton.).
     * @param propertiesDefinition 将要为实体定义的一系列动态属性。
     * @param entityType 实体类型。
     * @throws
     * 若尝试为实体类型 `entityType` 注册字符串类型的动态属性，且大小超出了限制，抛出 `"Dynamic property size limit exceeded (<totalMaxLength>/1000) for '<entityTypeId>'"`。
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityType: EntityType,
    ): void;
    /**
     * @remarks
     * 在世界中注册动态属性。
     *
     * Registers a globally available dynamic property for a world.
     * @param propertiesDefinition 将要为世界定义的一系列动态属性。
     * @throws
     * 若尝试在世界中注册字符串类型的动态属性，且大小超出了限制，抛出 `"Dynamic property size limit exceeded (<totalMaxLength>/1000) for '<entityTypeId>'"`。
     */
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}
/**
 * @beta
 * 表示记分板。其上包含了记分项和分数持有者。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export class Scoreboard {
    protected constructor();
    /**
     * @remarks
     * 在记分板上添加一个新的记分项。
     * 
     * Adds a new objective to the scoreboard.
     * @param objectiveId 记分项名称。
     * @param displayName 记分项的显示名称。
     * @returns 创建的记分项对象。
     * @throws
     * 若同名记分项已存在时，抛出 `"Failed to add objective 'objectiveId' as it is already being tracked"`。
     */
    addObjective(objectiveId: string, displayName: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除显示位置上正在显示的记分项。
     * 
     * Clears the objective that occupies a display slot.
     * @param displaySlotId 显示位置。
     * @returns 先前正显示的记分项，为空时返回 `null`。
     */
    clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective;
    /**
     * @remarks
     * 获取名称为 `objectiveId` 的记分项对象。
     * 
     * Returns a specific objective (by id).
     * @param objectiveId 记分项名称。
     * @returns 指定的记分项对象。不存在时返回 `null`。
     */
    getObjective(objectiveId: string): ScoreboardObjective;
    /**
     * @remarks
     * 获取位于指定显示位置上的记分项对象与显示配置。
     * 
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId 显示位置。
     * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
     */
    getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions;
    /**
     * @remarks
     * 获取记分板上的已定义的所有记分项。
     * 
     * Returns all defined objectives.
     * @returns 所有记分项对象组成的数组。
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 获取所有已经定义的分数持有者。
     * 
     * Returns all defined scoreboard identities.
     * @returns 所有分数持有者对象组成的数组。
     */
    getParticipants(): ScoreboardIdentity[];
    getScore(objective: ScoreboardObjective, participant: ScoreboardIdentity): number;
    /**
     * @remarks
     * 从记分板上移除指定的记分项。
     * 
     * Removes an objective from the scoreboard.
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
     * @param displaySlotId 显示位置。
     * @param objectiveDisplaySetting 记分项显示配置。
     * @returns 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
     * @throws
     * 若记分项无效，抛出 `"Failed to set invalid objective at DisplaySlot"`。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: string,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective;
    setScore(objective: ScoreboardObjective, participant: ScoreboardIdentity, score: number): boolean;
}
/**
 * @beta
 * 表示记分板上的分数持有者。
 * 
 * Contains an identity of the scoreboard item.
 */
export class ScoreboardIdentity {
    protected constructor();
    /**
     * 此分数持有者在玩家视角显示的名称。
     * 
     * Returns the player-visible name of this identity.
     */
    readonly displayName: string;
    /**
     * 此分数持有者的 ID。
     * 
     * Identifier of the scoreboard identity.
     */
    readonly id: number;
    /**
     * 此分数持有者的类型。
     * 
     * Type of the scoreboard identity.
     */
    readonly 'type': ScoreboardIdentityType;
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
    getEntity(): Entity;
    getScore(objective: ScoreboardObjective): number;
    removeFromObjective(objective: ScoreboardObjective): boolean;
    setScore(objective: ScoreboardObjective, score: number): boolean;
}
/**
 * @beta
 * 表示记分板上的记分项。包含了分数持有者和各自的分数。
 * 
 * Contains objectives and participants for the scoreboard.
 */
export class ScoreboardObjective {
    protected constructor();
    /**
     * 此记分项的显示名称。
     * 
     * Returns the player-visible name of this scoreboard
     * objective.
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly displayName: string;
    /**
     * 此记分项的名称。
     * 
     * Identifier of the scoreboard objective.
     * @throws
     * 若记分项无效，则抛出。
     */
    readonly id: string;
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
     * @param participant 分数持有者。
     * @returns 指定分数持有者的分数。
     * @throws
     * 若此记分项上未记录分数持有者的分数，抛出 `"Failed to retrieve score for '<participant>'"`。
     * 若记分项无效时，抛出。
     */
    getScore(participant: ScoreboardIdentity): number;
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
    removeParticipant(participant: ScoreboardIdentity): boolean;
    setScore(participant: ScoreboardIdentity, score: number): boolean;
}
/**
 * @beta
 * 表示分数信息。包含了分数持有者以及它在记分板上的对应的分数。
 * 
 * Contains a pair of a scoreboard participant and its
 * respective score.
 */
export class ScoreboardScoreInfo {
    protected constructor();
    /**
     * 分数归属的分数持有者。
     * 
     * This scoreboard participant for this score.
     */
    readonly participant: ScoreboardIdentity;
    /**
     * 该记分项上分数持有者的分数。
     * 
     * Score value of the identity for this objective.
     */
    readonly score: number;
}
/**
 * @beta
 * Contains information about user interface elements that are
 * showing up on the screen.
 */
export class ScreenDisplay {
    protected constructor();
    /**
     * @remarks
     * Clears the title and subtitle, if currently displayed.
     * @throws This function can throw errors.
     */
    clearTitle(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     * @param text
     * @throws This function can throw errors.
     */
    setActionBar(text: string): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. You can optionally specify an additional subtitle
     * as well as fade in, stay and fade out times.
     * @param title
     * @param options
     * @throws This function can throw errors.
     */
    setTitle(title: string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     * @param subtitle
     * @throws This function can throw errors.
     */
    updateSubtitle(subtitle: string): void;
}
export class ScriptEventCommandMessageEvent {
    protected constructor();
    readonly id: string;
    readonly initiator: Entity;
    readonly message: string;
    readonly sourceBlock: Block;
    readonly sourceEntity: Entity;
    readonly sourceType: MessageSourceType;
}
/**
 * @beta
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 */
export class ScriptEventCommandMessageSignal {
    protected constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     * @param callback
     * @param options
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageEvent) => void): void;
}
/**
 * @beta
 * Describes a particular seating position on this rideable
 * entity.
 */
export class Seat {
    protected constructor();
    /**
     * If specified, contains a forced rotation that the riders in
     * this seat are facing.
     */
    readonly lockRiderRotation: number;
    /**
     * A maximum number of riders that this seat can support.
     */
    readonly maxRiderCount: number;
    /**
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     */
    readonly minRiderCount: number;
    /**
     * Physical location of this seat, relative to the entity's
     * location.
     */
    readonly position: Vector3;
}
/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 */
export class ServerMessageSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     * @param callback
     */
    subscribe(callback: (arg: MessageReceiveEvent) => void): (arg: MessageReceiveEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: MessageReceiveEvent) => void): void;
}
/**
 * @beta
 * Contains the state of a string-based property for a {@link
 * BlockPermutation}.
 */
export class StringBlockProperty extends IBlockProperty {
    protected constructor();
    /**
     * Name of this property.
     */
    readonly name: string;
    /**
     * The current value of this property.
     * @throws
     * Setting this property can throw if the value passed is not
     * valid for the property. Use {@link
     * @minecraft/server.StringBlockProperty.validValues} to check
     * allowed values.
     */
    value: string;
    getValidValues(): string[];
}
/**
 * A class that provides system-level events and functions.
 */
export class System {
    protected constructor();
    /**
     * @beta
     * Represents the current world tick of the server.
     */
    readonly currentTick: number;
    /**
     * @beta
     * Contains a set of events that are applicable for the
     * lifecycle of items in the Minecraft system.
     */
    readonly events: SystemEvents;
    /**
     * @beta
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via the `run` function.
     * @param runId
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at a future time. This is
     * frequently used to implement delayed behaviors and game
     * loops.
     * @param callback
     * Function callback to run when the tickDelay time criteria is
     * met.
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     */
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
}
/**
 * @beta
 * Contains a set of events that are available across the scope
 * of the Minecraft add-on system.
 */
export class SystemEvents {
    protected constructor();
    /**
     * This event fires before a the performance watchdog
     * terminates scripting execution due to exceeding a
     * performance boundary. Depending on the configuration of the
     * runtime environment, this event can be canceled. For
     * example, on certain dedicated server environments the
     * ability to override termination events may be disabled.
     */
    readonly beforeWatchdogTerminate: BeforeWatchdogTerminateEventSignal;
    /**
     * This event fires if a /scriptevent command is invoked by a
     * player, NPC, or block.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageSignal;
}
/**
 * @beta
 * An event for handling updates, that fires 20 times every
 * second.
 */
export class TickEvent {
    protected constructor();
    /**
     * Current tick at the time this event was fired.
     */
    readonly currentTick: number;
    /**
     * Time since the last tick was fired.
     */
    readonly deltaTime: number;
}
/**
 * @beta
 * Manages callbacks that are connected to a tick event.
 */
export class TickEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called on every tick.
     * @param callback
     */
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called every tick.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TickEvent) => void): void;
}
/**
 * @beta
 * Represents a trigger for firing an event.
 */
export class Trigger {
    /**
     * Event name of the trigger.
     */
    eventName: string;
    constructor(eventName: string);
}
/**
 * @beta
 * Contains a description of a vector.
 */
export class Vector {
    /**
     * X component of this vector.
     */
    x: number;
    /**
     * Y component of this vector.
     */
    y: number;
    /**
     * Z component of this vector.
     */
    z: number;
    /**
     * A constant vector that represents (0, 0, -1).
     */
    static readonly back: Vector;
    /**
     * A constant vector that represents (0, -1, 0).
     */
    static readonly down: Vector;
    /**
     * A constant vector that represents (0, 0, 1).
     */
    static readonly forward: Vector;
    /**
     * A constant vector that represents (-1, 0, 0).
     */
    static readonly left: Vector;
    /**
     * A constant vector that represents (1, 1, 1).
     */
    static readonly one: Vector;
    /**
     * A constant vector that represents (1, 0, 0).
     */
    static readonly right: Vector;
    /**
     * A constant vector that represents (0, 1, 0).
     */
    static readonly up: Vector;
    /**
     * A constant vector that represents (0, 0, 0).
     */
    static readonly zero: Vector;
    /**
     * @remarks
     * Creates a new instance of an abstract vector.
     * @param x
     * X component of the vector.
     * @param y
     * Y component of the vector.
     * @param z
     * Z component of the vector.
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Compares this vector and another vector to one another.
     * @param other
     * Other vector to compare this vector to.
     * @returns
     * True if the two vectors are equal.
     */
    equals(other: Vector): boolean;
    /**
     * @remarks
     * Returns the length of this vector.
     */
    length(): number;
    /**
     * @remarks
     * Returns the squared length of this vector.
     */
    lengthSquared(): number;
    /**
     * @remarks
     * Returns this vector as a normalized vector.
     */
    normalized(): Vector;
    /**
     * @remarks
     * Returns the addition of these vectors.
     * @param a
     * @param b
     */
    static add(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the cross product of these two vectors.
     * @param a
     * @param b
     */
    static cross(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the distance between two vectors.
     * @param a
     * @param b
     */
    static distance(a: Vector3, b: Vector3): number;
    /**
     * @remarks
     * Returns the component-wise division of these vectors.
     * @param a
     * @param b
     */
    static divide(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the linear interpolation between a and b using t as
     * the control.
     * @param a
     * @param b
     * @param t
     */
    static lerp(a: Vector3, b: Vector3, t: number): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the largest components of
     * two vectors.
     * @param a
     * @param b
     */
    static max(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns a vector that is made from the smallest components
     * of two vectors.
     * @param a
     * @param b
     */
    static min(a: Vector3, b: Vector3): Vector;
    /**
     * @remarks
     * Returns the component-wise product of these vectors.
     * @param a
     * @param b
     */
    static multiply(a: Vector3, b: number | Vector3): Vector;
    /**
     * @remarks
     * Returns the spherical linear interpolation between a and b
     * using s as the control.
     * @param a
     * @param b
     * @param s
     */
    static slerp(a: Vector3, b: Vector3, s: number): Vector;
    /**
     * @remarks
     * Returns the subtraction of these vectors.
     * @param a
     * @param b
     */
    static subtract(a: Vector3, b: Vector3): Vector;
}
/**
 * @beta
 * Contains information related to changes in weather in the
 * environment.
 */
export class WeatherChangeEvent {
    protected constructor();
    /**
     * Dimension in which the weather has changed.
     */
    readonly dimension: string;
    /**
     * Whether it is lightning after the change in weather.
     */
    readonly lightning: boolean;
    /**
     * Whether it is raining after the change in weather.
     */
    readonly raining: boolean;
}
/**
 * @beta
 * Manages callbacks that are connected to weather changing.
 */
export class WeatherChangeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     * @param callback
     */
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}
/**
 * 表示一个世界。包含了世界的各种状态，即一系列维度以及 Minecraft 的环境。
 *
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export class World {
    protected constructor();
    /**
     * @beta
     * 世界上会发生的事件的集合。
     * 
     * Contains a set of events that are applicable to the entirety
     * of the world.
     */
    readonly events: Events;
    /**
     * @beta
     * 全局的、唯一的记分板对象。
     * 
     * Returns the general global scoreboard that applies to the
     * world.
     */
    readonly scoreboard: Scoreboard;
    /**
     * @beta
     * @remarks
     * 此方法仅用作内部测试。用于在客户端与服务器之间传递信息（不确定实际用途）。
     *
     * A method that is internal-only, used for broadcasting
     * specific messages between client and server.
     * @param id
     * @param value
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @beta
     * @remarks
     * 获取自游戏开始以来流逝的时间（计算公式：`day*24000+daytime`）。
     * 时间的流逝受到游戏规则 `dodaylightcycle` 的影响。
     *
     * Returns the absolute time since the start of the world.
     * @returns 自游戏开始以来流逝的时间，以刻为单位。
     */
    getAbsoluteTime(): number;
    /**
     * @remarks
     * 获取一个包含了游戏中所有玩家的对象的数组。
     * 
     * Returns an array of all active players within the world.
     * @returns 返回包含了游戏中所有玩家的对象的数组。
     */
    getAllPlayers(): Player[];
    getDefaultSpawnPosition(): Vector3;
    /**
     * @remarks
     * 由 `dimensionId` 获取维度对象。
     *
     * Returns a dimension object.
     * @param dimensionId 要获取的维度的标识符。
     *
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
     * @beta
     * @remarks
     * 获取由 `identifier` 指定的世界中已定义的动态属性的值。
     * 
     * Returns a property value.
     * @param identifier 动态属性的标识符。
     * @returns 返回动态属性 `identifier` 的值。属性的值尚未设定时，返回 `undefined`。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"` 。
     */
    getDynamicProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * 获取世界上的玩家。
     *
     * Returns all players currently in the world.
     * @param options
     * 可选的参数，用作于筛选指定条件的玩家。
     *
     * 注意，不能使用接口中的 `type`、`location`、`maxDistance`、`minDistance` 或 `volume` 属性。
     * @returns
     * 一个能够获取到世界中所有玩家的可迭代迭代器。
     *
     * 若指定了用作筛选玩家的 `options` 参数，则返回一个能够获取到世界中满足筛选条件的玩家的可迭代迭代器。
     *
     * All players currently in the world.
     * @throws
     * 若向 `options` 传入的对象含有 `type` 属性，抛出 `"command.generic.invalidPlayerType"`。
     * 
     * 若向 `options` 传入的对象含有 `location`、`maxDistance`、`minDistance` 或 `volume` 属性，抛出 `"EntityQueryOptions property '<property>' is incompatible with function world.getPlayers"`。
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @beta
     * @remarks
     * 返回当前一天中的时间。
     *
     * Sets the current game time of the day.
     * @returns 当前一天中的时间，以刻为单位，为 `0` 至 `23999` 之间的整数。
     */
    getTime(): number;
    /**
     * @beta
     * @remarks
     * 停止正在播放的音乐，并开始向玩家播放指定音乐。播放类别不为音乐的声音项目不会有任何效果。
     *
     * Plays a particular music track for all players.
     * @param trackID 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     */
    playMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * 向玩家播放一段声音。
     *
     * Plays a sound for all players.
     * @param soundID 声音项目的标识符。
     * @param soundOptions 可选，指定播放声音使用的附加参数。
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @beta
     * @remarks
     * 将音乐添加到播放列表。如果没有任何正在播放的音乐，将会开始播放音乐。播放列表中的音乐将会按照添加顺序播放（需要更多测试）。
     *
     * Queues an additional music track for players. If a track is
     * not playing, a music track will play.
     * @param trackID 声音项目的标识符，要求声音项目的类别为音乐（`category: music`）。
     * @param musicOptions 可选，指定播放音乐使用的附加参数。
     */
    queueMusic(trackID: string, musicOptions?: MusicOptions): void;
    /**
     * @beta
     * @remarks
     * 重置由 `identifier` 指定的世界动态属性。
     *
     * Removes a specified property.
     * @param identifier 动态属性的标识符。
     * @returns 若动态属性 `identifier` 在注册后尚未被设置过值，返回 `false`。否则返回 `true`，即使曾经调用过此方法重置动态属性 `identifier` 的值（需要更多测试）。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @beta
     * @remarks
     * 向所有客户端的聊天栏广播一条消息。
     *
     * Broadcasts a message that is displayed on all connected
     * clients.
     * @param message 将要广播的一段消息。这段消息可能是一段字符串，或者符合 `RawMessage` 接口的对象，（需要验证）或是这两种类型的组合。
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setDefaultSpawn(spawnPosition: Vector3): void;
    /**
     * @beta
     * @remarks
     * 为世界动态属性 `identifier` 设置一个值。
     *
     * Sets a specified property to a value.
     * @param identifier 动态属性的标识符。
     * @param value 要设定的值，值的类型必须与动态属性注册的类型相同。
     * @throws
     * 若并未注册以 `identifier` 为标识符的动态属性，抛出 `"Dynamic Property '<identifier>' is not defined"`。
     * 
     * 若动态属性的类型不符合值的类型，抛出 `"Type mismatch for dynamic property '<identifier>'"`。
     * 
     * 若动态属性的类型为字符串，且值在使用 UTF-8 编码后的字节长度大于动态属性所允许的最大长度，抛出 `"Maximum string length exceeded (<length>/<maxLength>) for dynamic property '<identifier>'"`。
     */
    setDynamicProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @beta
     * @remarks
     * Returns the current game time of the day.
     * @param timeOfDay
     */
    setTime(timeOfDay: number): void;
    /**
     * @beta
     * @remarks
     * 停止客户端中正在播放的所有音乐曲目（需要更多测试）。
     * 
     * Stops any music tracks from playing.
     */
    stopMusic(): void;
}
/**
 * @beta
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied propertyRegistry object to register
 * any dynamic properties, within the scope of the World
 * Initialize execution.
 */
export class WorldInitializeEvent {
    protected constructor();
    /**
     * Contains methods for scripts to initialize and register
     * dynamic properties they may wish to use within a world.
     * @example propertyRegistration.js
     * ```typescript
     *        import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";
     *
     *        world.events.worldInitialize.subscribe((e) => {
     *          let def = new DynamicPropertiesDefinition();
     *
     *          def.defineNumber("rpgStrength");
     *          def.defineString("rpgRole", 16);
     *          def.defineBoolean("rpgIsHero");
     *
     *          e.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.skeleton);
     *        });
     *
     * ```
     */
    readonly propertyRegistry: PropertyRegistry;
}
/**
 * @beta
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeEventSignal {
    protected constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     * @param callback
     */
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     * @param callback
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}
/**
 * @beta
 * Represents a rotation structure with pitch and yaw
 * components.
 */
export class XYRotation {
    protected constructor();
    /**
     * Yaw component (left-to-right) of this position.
     */
    x: number;
    /**
     * Pitch (up-and-down) element of this rotation.
     */
    y: number;
}
export interface BlockFillOptions {
    matchingBlock?: BlockPermutation;
}
/**
 * @beta
 * Contains more information for events where a block is hit.
 */
export interface BlockHitInformation {
    /**
     * Block that was hit.
     */
    block: Block;
    /**
     * Face of the block that was hit.
     */
    face: Direction;
    /**
     * X coordinate on the face that was hit.
     */
    faceLocationX: number;
    /**
     * Y coordinate on the face that was hit.
     */
    faceLocationY: number;
}
/**
 * @beta
 * Contains additional options for configuring a block raycast
 * query.
 */
export interface BlockRaycastOptions {
    /**
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     */
    includeLiquidBlocks?: boolean;
    /**
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     */
    includePassableBlocks?: boolean;
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}
/**
 * @beta
 * Represents a fully customizable color within Minecraft.
 */
export interface Color {
    /**
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     */
    alpha: number;
    /**
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     */
    blue: number;
    /**
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     */
    green: number;
    /**
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     */
    red: number;
}
export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}
/**
 * @beta
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    entityTypes?: string[];
    /**
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     */
    eventTypes?: string[];
}
/**
 * @beta
 * Contains optional parameters for registering an entity
 * event.
 */
export interface EntityEventOptions {
    /**
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     */
    entities?: Entity[];
    /**
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     */
    entityTypes?: string[];
}
/**
 * @beta
 * Contains additional information about an entity that was
 * hit.
 */
export interface EntityHitInformation {
    /**
     * Entity that was hit.
     */
    entity: Entity;
}
/**
 * @beta
 * Contains options for selecting entities within an area.
 */
export interface EntityQueryOptions {
    /**
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    closest?: number;
    /**
     * Excludes entities that match one or more of the specified
     * families.
     */
    excludeFamilies?: string[];
    /**
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     */
    excludeGameModes?: GameMode[];
    /**
     * Excludes entities that have a name that match one of the
     * specified values.
     */
    excludeNames?: string[];
    /**
     * Excludes entities with a tag that matches one of the
     * specified values.
     */
    excludeTags?: string[];
    /**
     * Excludes entities if they are one of the specified types.
     */
    excludeTypes?: string[];
    /**
     * If specified, includes entities that match all of the
     * specified families.
     */
    families?: string[];
    /**
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     */
    farthest?: number;
    /**
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     */
    gameMode?: GameMode;
    /**
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     */
    location?: Vector3;
    /**
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     */
    maxDistance?: number;
    /**
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     */
    maxHorizontalRotation?: number;
    /**
     * If defined, only players that have at most this level are
     * returned.
     */
    maxLevel?: number;
    /**
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     */
    maxVerticalRotation?: number;
    /**
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     */
    minDistance?: number;
    /**
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     */
    minHorizontalRotation?: number;
    /**
     * If defined, only players that have at least this level are
     * returned.
     */
    minLevel?: number;
    /**
     * If specified, will only include entities that have at least
     * this vertical rotation.
     */
    minVerticalRotation?: number;
    /**
     * Includes entities with the specified name.
     */
    name?: string;
    /**
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * Includes entities that match all of the specified tags.
     */
    tags?: string[];
    /**
     * If defined, entities that match this type are included.
     */
    type?: string;
    /**
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     */
    volume?: BlockAreaSize;
}
/**
 * @beta
 * Contains additional options for filtering players based on
 * their score for an objective.
 */
export interface EntityQueryScoreOptions {
    /**
     * If set to true, entities and players within this score range
     * are excluded from query results.
     */
    exclude?: boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    maxScore?: number;
    /**
     * If defined, only players that have a score equal to or over
     * minScore are included.
     */
    minScore?: number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    objective?: string;
}
/**
 * @beta
 * Contains additional options for an entity raycast operation.
 */
export interface EntityRaycastOptions {
    /**
     * Maximum distance, in blocks, to process the raycast.
     */
    maxDistance?: number;
}
/**
 * @beta
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 */
export interface ExplosionOptions {
    /**
     * Whether parts of the explosion also impact underwater.
     */
    allowUnderwater?: boolean;
    /**
     * Whether the explosion will break blocks within the blast
     * radius.
     */
    breaksBlocks?: boolean;
    /**
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     */
    causesFire?: boolean;
    /**
     * Optional source of the explosion.
     */
    source?: Entity;
}
/**
 * @beta
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 */
export interface MusicOptions {
    /**
     * Specifies a fade overlap for music at the end of play.
     */
    fade?: number;
    /**
     * If set to true, this music track will play repeatedly.
     */
    loop?: boolean;
    /**
     * Relative volume level of the music.
     */
    volume?: number;
}
/**
 * @beta
 * Represents a min/max structure for expressing a potential
 * range of numbers.
 */
export interface NumberRange {
    /**
     * Maximum value within a range.
     */
    max: number;
    /**
     * Minimum value within a range.
     */
    min: number;
}
export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    stopExpression?: string;
}
export interface RawMessage {
    rawtext?: (RawMessage | string)[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}
export interface RawMessageScore {
    name?: string;
    objective?: string;
}
/**
 * @beta
 * 表示记分项显示位置配置。描述了如何在记分板显示位置上显示记分项。
 * 
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * 要显示的记分项。
     * 
     * Objective to be displayed.
     */
    objective: ScoreboardObjective;
    /**
     * 记分项条目的显示排序顺序。
     * 
     * The sort order to display the objective items within.
     */
    sortOrder?: ObjectiveSortOrder;
}
export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}
/**
 * @beta
 * Additional configuration options for the {@link
 * Player.playSound}/{@link World.playSound} method.
 */
export interface SoundOptions {
    /**
     * Specifies a location of where to play a particular sound.
     */
    location?: Vector3;
    /**
     * Pitch adjustment level for the sound.
     */
    pitch?: number;
    /**
     * Relative volume level of the sound.
     */
    volume?: number;
}
/**
 * @beta
 * Contains additional options for displaying a title and
 * optional subtitle.
 */
export interface TitleDisplayOptions {
    /**
     * Fade-in time for the title and subtitle, in seconds.
     */
    fadeInSeconds: number;
    /**
     * Fade-out time for the title and subtitle, in seconds.
     */
    fadeOutSeconds: number;
    /**
     * Amount of time for the title and subtitle to stay in place.
     */
    staySeconds: number;
    /**
     * Optional subtitle text.
     */
    subtitle?: string;
}
/**
 * @beta
 * Contains a description of a vector.
 */
export interface Vector3 {
    /**
     * X component of this vector.
     */
    x: number;
    /**
     * Y component of this vector.
     */
    y: number;
    /**
     * Z component of this vector.
     */
    z: number;
}
export const TicksPerDay = 24000;
/**
 * @beta
 * How many times the server ticks per second of real time.
 */
export const TicksPerSecond = 20;
/**
 * A class that provides system-level events and functions.
 */
export const system: System;
/**
 * A class that wraps the state of a world - a set of
 * dimensions and the environment of Minecraft.
 */
export const world: World;
