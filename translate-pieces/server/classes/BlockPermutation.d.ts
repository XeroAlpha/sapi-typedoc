/* IMPORT */ import { BlockStateArg, BlockType, ItemStack, LiquidType, minecraftvanilladata } from "../index";

/**
 * 表示一个由 {@link BlockType} 类型和属性（有时也称为方块状态）组成的组合，
 * 用于描述一个方块（但不属于特定的 {@link Block}）。
 * @seeExample addTranslatedSign.ts 604a92ba
 *
 * * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export class BlockPermutation {
	private constructor();
	/**
	 * @remarks
	 * 表示当前组合的 {@link BlockType}。
	 *
	 * The {@link BlockType} that the permutation has.
	 *
	 */
	readonly "type": BlockType;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块在被液体接触时是否会被移除。
	 *
	 * Returns whether this block is removed when touched by
	 * liquid.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块在被液体接触时是否会被移除。
	 *
	 * Whether this block is removed when touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块是否可以覆盖液体，例如是否可以被水浸透。
	 *
	 * Returns whether this block can have a liquid placed over it,
	 * i.e. be waterlogged.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块是否可以覆盖液体。
	 *
	 * Whether this block can have a liquid placed over it.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	canContainLiquid(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回与此方块关联的所有可用的方块状态。
	 *
	 * Returns all available block states associated with this
	 * block.
	 *
	 * @returns
	 * 返回此组合拥有的所有方块状态的列表。
	 *
	 * Returns the list of all of the block states that the
	 * permutation has.
	 */
	getAllStates(): Record<string, boolean | number | string>;
	/**
	 * @remarks
	 * 基于此方块组合检索一个原型物品堆，可用于物品容器/容器槽 API。
	 *
	 * Retrieves a prototype item stack based on this block
	 * permutation that can be used with item
	 * Container/ContainerSlot APIs.
	 *
	 * @param amount
	 * 放置在原型物品堆中的此方块实例的数量。
	 *
	 * Number of instances of this block to place in the prototype
	 * item stack.
	 */
	getItemStack(amount?: number): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取此组合的某个状态。
	 *
	 * Gets a state for the permutation.
	 *
	 * @param stateName
	 * 要获取其值的方块状态的名称。
	 *
	 * Name of the block state who's value is to be returned.
	 * @returns
	 * 若此组合拥有该状态则返回状态值，否则返回 `undefined`。
	 *
	 * Returns the state if the permutation has it, else
	 * `undefined`.
	 */
	getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(stateName: T): minecraftvanilladata.BlockStateSuperset[T] | undefined;
	/**
	 * @remarks
	 * 创建此组合的副本。
	 *
	 * Creates a copy of the permutation.
	 *
	 */
	getTags(): string[];
	/**
	 * @remarks
	 * 检查此组合是否具有特定的标签。
	 *
	 * Checks to see if the permutation has a specific tag.
	 *
	 * @returns
	 * 若此组合具有该标签则返回 `true`，否则返回 `false`。
	 *
	 * Returns `true` if the permutation has the tag, else `false`.
	 * @seeExample checkBlockTags.ts
	 */
	hasTag(tag: string): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块是否阻止液体流动。
	 *
	 * Returns whether this block stops liquid from flowing.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块是否阻止液体流动。
	 *
	 * Whether this block stops liquid from flowing.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	isLiquidBlocking(liquidType: LiquidType): boolean;
	/**
	 * @beta
	 * @remarks
	 * 返回此方块在被液体接触时是否会被移除并生成其物品。
	 *
	 * Returns whether this block is removed and spawns its item
	 * when touched by liquid.
	 *
	 * @param liquidType
	 * 此函数需要检测的液体类型。
	 *
	 * The type of liquid this function should be called for.
	 * @returns
	 * 返回此方块在被液体接触时是否会被移除并生成其物品。
	 *
	 * Whether this block is removed and spawns its item when
	 * touched by liquid.
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
	/**
	 * @remarks
	 * 返回一个布尔值，指示指定的组合是否与此组合匹配。
	 * 若未指定状态，则匹配会更广泛地检查类型集合。
	 *
	 * Returns a boolean whether a specified permutation matches
	 * this permutation. If states is not specified, matches checks
	 * against the set of types more broadly.
	 *
	 * @param blockName
	 * 一个可选的状态集合，用于进行比较。
	 * An optional set of states to compare against.
	 */
	matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(blockName: T, states?: BlockStateArg<T>): boolean;
	/**
	 * @remarks
	 * 返回具有特定属性设置的派生 BlockPermutation。
	 *
	 * Returns a derived BlockPermutation with a specific property
	 * set.
	 *
	 * @param name
	 * 方块属性的标识符。
	 * Identifier of the block property.
	 * @param value
	 * 方块属性的值。
	 * Value of the block property.
	 * @throws This function can throw errors.
	 */
	withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(name: T, value: minecraftvanilladata.BlockStateSuperset[T]): BlockPermutation;
	/**
	 * @remarks
	 * 给定一个类型标识符和一个可选的属性集合，
	 * 将返回一个可在其他方块 API 中使用的 BlockPermutation(方块参数) 对象（例如，block.setPermutation）。
	 *
	 * Given a type identifier and an optional set of properties,
	 * will return a BlockPermutation object that is usable in
	 * other block APIs (e.g., block.setPermutation)
	 *
	 * @param blockName
	 * 要检查的方块的标识符。
	 *
	 * Identifier of the block to check.
	 * @throws This function can throw errors.
	 * @seeExample addBlockColorCube.ts
	 */
	static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(blockName: T, states?: BlockStateArg<T>): BlockPermutation;
}
