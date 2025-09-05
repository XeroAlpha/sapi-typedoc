/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { BlockComponentRegistry, BlockComponentReturnType, BlockComponentTypes, BlockPermutation, BlockType, Dimension, Direction, ItemStack, LiquidType, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, RGBA, Vector3 } from '..';

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
     * 返回 true 如果这个方块是空气方块（例如，空的空间）
     *
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
     * 如果这个方块是液体方块，例如水方块和熔岩方块等，则返回 true。
     * 空气方块和石头方块等则不属于液体方块。
     * 含水方块不算作液体方块。
     *
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
     * 如果该块是实心且不可通行的，则返回 true
     * -（例如，鹅卵石块和钻石块是实心的，而梯子块和栅栏块则不是）。
     *
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
     * 返回或设置该方块是否含水。
     *
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
     * 该方块的坐标。
     *
     * Coordinates of the specified block.
     *
     * @throws This property can throw when used.
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
     * @throws This property can throw when used.
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
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * 该方块的类型标识符。
     *
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
     * 返回该方块下方的{@link Block}（Y 方向为负）。
     *
     * Returns the {@link Block} below this block (negative in the
     * Y direction).
     *
     * @param steps
     * 向下的步数。
     * 留空默认为一。
     *
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
     * 返回该方块在 X 轴和 Z 轴上的中心的 {@link Vector3}。
     *
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
     * @beta
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
     * 检查在该方块的指定面上放置{@link BlockPermutation}或{@link BlockType}或指定标识符的方块是否可行。
     *
     * Checks to see whether it is valid to place the specified
     * block type or block permutation, on a specified face on this
     * block.
     *
     * @param blockToPlace
     * 被检查放置可行性的{@link BlockPermutation}或{@link BlockType}或方块标识符。
     *
     * Block type or block permutation to check placement for.
     * @param faceToPlaceOn
     * 被检查放置的方向（可选）。
     *
     * Optional specific face of this block to check placement
     * against.
     * @returns
     * 如果在此面可以放置这样的方块则返回 `true` 。
     *
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
     * 返回该方块在 X、Y 和 Z 轴上中心的 {@link Vector3}。
     *
     * Returns the {@link Vector3} of the center of this block on
     * the X, Y, and Z axis.
     *
     */
    center(): Vector3;
    /**
     * @remarks
     * 返回位于该方块东侧（X轴正方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the east of this block
     * (positive in the X direction).
     *
     * @param steps
     * 向东的步数。
     *
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
     * 获取一个方块的组件（代表附加功能），例如，一个箱子方块的库存组件。
     *
     * Gets a component (that represents additional capabilities)
     * for a block - for example, an inventory component of a chest
     * block.
     *
     * @param componentId
     * 组件的标识符 （例如 'minecraft:inventory'）。
     * 如果未指定命名空间前缀，将默认使用 'minecraft:'。
     * 可用的组件标识符可以在 {@link BlockComponentTypes} 枚举中找到。
     *
     * The identifier of the component (e.g.,
     * 'minecraft:inventory'). If no namespace prefix is specified,
     * 'minecraft:' is assumed. Available component IDs are those
     * in the {@link BlockComponentTypes} enum and custom component
     * IDs registered with the {@link BlockComponentRegistry}.
     * @returns
     * 如果该组件存在于该方块，则返回该组件。
     * 否则返回 undefined。
     *
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
     * @remarks
     * 创建一个基于该方块的原型物品对象-{@link ItemStack}，可以与 {@link Container}/{@link ContainerSlot} 接口 一起使用。
     *
     * Creates a prototype item stack based on this block that can
     * be used with Container/ContainerSlot APIs.
     *
     * @param amount
     * 要设置在物品对象-{@link ItemStack}中的这个方块的数量。
     *
     * Number of instances of this block to place in the item
     * stack.
     * Defaults to: 1
     * @param withData
     * 是否包括物品对象的附加数据。
     *
     * Whether additional data facets of the item stack are
     * included.
     * Defaults to: false
     * @returns
     * 一个带有指定数量和数据的物品对象。
     * 如果方块类型不兼容，则返回 undefined。
     *
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
     * @beta
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
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @beta
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
     * 返回方块被设置的标签的列表。
     *
     * Returns a set of tags for a block.
     *
     * @returns
     * 方块拥有的标签列表。
     *
     * The list of tags that the block has.
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @remarks
     * 检查该方块的{@link BlockPermutation}是否具有特定的标签。
     *
     * Checks to see if the permutation of this block has a
     * specific tag.
     *
     * @param tag
     * 要检查的标签。
     *
     * Tag to check for.
     * @returns
     * 如果该方块的{@link BlockPermutation}具有该标签，则返回 `true`，否则返回 `false`。
     *
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
     * 返回位于该方块北侧（Z轴负方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the north of this block
     * (negative in the Z direction).
     *
     * @param steps
     * 在返回之前，向北移动的步数。
     *
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
     * 在维度中将方块设置为{@link BlockPermutation}的状态。
     *
     * Sets the block in the dimension to the state of the
     * permutation.
     *
     * @worldMutation
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
     * @worldMutation
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
     * 返回位于该方块南侧（Z轴正方向）的 {@link Block}。
     *
     * Returns the {@link Block} to the south of this block
     * (positive in the Z direction).
     *
     * @param steps
     * 在返回之前，向南移动的步数。
     *
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
     * 首先检查放置是否有效，
     * 如何尝试在维度中将方块设置为{@link BlockPermutation}的状态，
     *
     *
     * Tries to set the block in the dimension to the state of the
     * permutation by first checking if the placement is valid.
     *
     * @worldMutation
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
     * Defaults to: 1
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}
