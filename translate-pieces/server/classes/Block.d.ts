/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockComponent, BlockComponentRegistry, BlockComponentReturnType, BlockComponentTypes, BlockPermutation, BlockType, Dimension, Direction, ItemStack, LiquidType, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, RGBA, Vector3 } from '..';

/**
 * Represents a block in a dimension. A block represents a
 * unique X, Y, and Z within a dimension and get/sets the state
 * of the block at that location. This type was significantly
 * updated in version 1.17.10.21.
 */
export class Block {
    private constructor();
    /**
     * @remarks
     * Returns the dimension that the block is within.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Returns true if this block is an air block (i.e., empty
     * space).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @remarks
     * Returns true if this block is a liquid block - (e.g., a
     * water block and a lava block are liquid, while an air block
     * and a stone block are not. Water logged blocks are not
     * liquid blocks).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @beta
     * @remarks
     * Returns true if this block is solid and impassible - (e.g.,
     * a cobblestone block and a diamond block are solid, while a
     * ladder block and a fence block are not).
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    /**
     * @remarks
     * Returns true if this reference to a block is still valid
     * (for example, if the block is unloaded, references to that
     * block will no longer be valid.)
     *
     */
    readonly isValid: boolean;
    /**
     * @remarks
     * Returns or sets whether this block has water on it.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
    /**
     * @remarks
     * Key for the localization of this block's name used in .lang
     * files.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;
    /**
     * @remarks
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Additional block configuration data that describes the
     * block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @remarks
     * Gets the type of block.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * Identifier of the type of block for this block. Warning:
     * Vanilla block names can be changed in future releases, try
     * using 'Block.matches' instead for block comparison.
     *
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * X coordinate of the block.
     *
     */
    readonly x: number;
    /**
     * @remarks
     * Y coordinate of the block.
     *
     */
    readonly y: number;
    /**
     * @remarks
     * Z coordinate of the block.
     *
     */
    readonly z: number;
    /**
     * @remarks
     * Returns the {@link Block} above this block (positive in the
     * Y direction).
     *
     * @param steps
     * Number of steps above to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @remarks
     * Returns the {@link Block} below this block (negative in the
     * Y direction).
     *
     * @param steps
     * Number of steps below to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    /**
     * @remarks
     * Returns the {@link Vector3} of the center of this block on
     * the X and Z axis.
     *
     */
    bottomCenter(): Vector3;
    /**
     * @remarks
     * Returns whether this block is removed when touched by
     * liquid.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block is removed when touched by liquid.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Returns whether this block can have a liquid placed over it,
     * i.e. be waterlogged.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block can have a liquid placed over it.
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @beta
     * @remarks
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block.
     *
     * @param blockToPlace
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * Returns `true` if the block type or permutation can be
     * placed on this block, else `false`.
     * @throws This function can throw errors.
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
     * Returns the {@link Vector3} of the center of this block on
     * the X, Y, and Z axis.
     *
     */
    center(): Vector3;
    /**
     * @remarks
     * Returns the {@link Block} to the east of this block
     * (positive in the X direction).
     *
     * @param steps
     * Number of steps to the east to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for a block - for example, an inventory component of a chest
     * block.
     *
     * @param componentId
     * The identifier of the component (e.g.,
     * 'minecraft:inventory'). If no namespace prefix is specified,
     * 'minecraft:' is assumed. Available component IDs are those
     * in the {@link BlockComponentTypes} enum and custom component
     * IDs registered with the {@link BlockComponentRegistry}.
     * @returns
     * Returns the component if it exists on the block, otherwise
     * undefined.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;
    /**
     * @beta
     * @remarks
     * Returns all scripting components that are present on this
     * block.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];
    /**
     * @remarks
     * Creates a prototype item stack based on this block that can
     * be used with Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the item
     * stack.
     * Defaults to: 1
     * @param withData
     * Whether additional data facets of the item stack are
     * included.
     * Defaults to: false
     * @returns
     * An itemStack with the specified amount of items and data.
     * Returns undefined if block type is incompatible.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @remarks
     * Returns the total brightness level of light shining on a
     * certain block.
     *
     * @worldMutation
     *
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(): number;
    /**
     * @beta
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;
    /**
     * @remarks
     * Returns the net redstone power of this block.
     *
     * @returns
     * Returns undefined if redstone power is not applicable to
     * this block.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks
     * Returns the brightness level of light shining from the sky
     * on a certain block.
     *
     * @worldMutation
     *
     * @returns
     * The brightness level on the block.
     * @throws This function can throw errors.
     *
     * {@link InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(): number;
    /**
     * @remarks
     * Returns a set of tags for a block.
     *
     * @returns
     * The list of tags that the block has.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Returns true if the specified component is present on this
     * block.
     *
     * @param componentId
     * The identifier of the component (e.g.,
     * 'minecraft:inventory') to retrieve. If no namespace prefix
     * is specified, 'minecraft:' is assumed.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Checks to see if the permutation of this block has a
     * specific tag.
     *
     * @param tag
     * Tag to check for.
     * @returns
     * Returns `true` if the permutation of this block has the tag,
     * else `false`.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @seeExample checkBlockTags.ts
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this block stops liquid from flowing.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether this block stops liquid from flowing.
     * @throws This function can throw errors.
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
     * Returns whether liquid can flow into the block from the
     * provided direction, or flow out from the provided direction
     * when liquid is placed into it with a bucket.
     *
     * @param liquidType
     * The type of liquid this function should be called for.
     * @returns
     * Whether liquid can flow into the block from the provided
     * direction, or flow out from the provided direction when
     * liquid is placed into it with a bucket
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
     * Returns the {@link Block} to the north of this block
     * (negative in the Z direction).
     *
     * @param steps
     * Number of steps to the north to step before returning.
     * Defaults to: 1
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
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * @worldMutation
     *
     * @param permutation
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
     * Sets the type of block.
     *
     * @worldMutation
     *
     * @param blockType
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
     * @remarks
     * Sets whether this block has a water logged state - for
     * example, whether stairs are submerged within water.
     *
     * @worldMutation
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
     * Returns the {@link Block} to the south of this block
     * (positive in the Z direction).
     *
     * @param steps
     * Number of steps to the south to step before returning.
     * Defaults to: 1
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
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     *
     * @worldMutation
     *
     * @param permutation
     * Permutation that contains a set of property states for the
     * Block.
     * @returns
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
     * Returns the {@link Block} to the west of this block
     * (negative in the X direction).
     *
     * @param steps
     * Number of steps to the west to step before returning.
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}
