/* IMPORT */ import { BlockStateArg, BlockType, ItemStack, LiquidType, minecraftvanilladata } from '../index';

/**
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 * @seeExample addTranslatedSign.ts 604a92ba
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
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
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Returns all available block states associated with this
     * block.
     *
     * @returns
     * Returns the list of all of the block states that the
     * permutation has.
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the prototype
     * item stack.
     * Defaults to: 1
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * Gets a state for the permutation.
     *
     * @param stateName
     * Name of the block state who's value is to be returned.
     * @returns
     * Returns the state if the permutation has it, else
     * `undefined`.
     */
    getState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        stateName: T,
    ): minecraftvanilladata.BlockStateSuperset[T] | undefined;
    /**
     * @remarks
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @remarks
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
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
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
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
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): boolean;
    /**
     * @remarks
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * @param name
     * Identifier of the block property.
     * @param value
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withState<T extends keyof minecraftvanilladata.BlockStateSuperset>(
        name: T,
        value: minecraftvanilladata.BlockStateSuperset[T],
    ): BlockPermutation;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @seeExample addBlockColorCube.ts
     */
    static resolve<T extends string = minecraftvanilladata.MinecraftBlockTypes>(
        blockName: T,
        states?: BlockStateArg<T>,
    ): BlockPermutation;
}