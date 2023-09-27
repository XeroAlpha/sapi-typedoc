/**
 * @beta
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 */
export class BlockPermutation {
    private constructor();
    /**
     * @beta
     * @remarks
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @beta
     * @remarks
     * Creates a copy of this permutation.
     *
     * @returns
     * A copy of the permutation.
     */
    clone(): BlockPermutation;
    /**
     * @beta
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
     * @beta
     * @remarks
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the prototype
     * item stack.
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @beta
     * @remarks
     * Gets a state for the permutation.
     *
     * @param stateName
     * Name of the block state who's value is to be returned.
     * @returns
     * Returns the state if the permutation has it, else
     * `undefined`.
     */
    getState(stateName: string): boolean | number | string | undefined;
    /**
     * @beta
     * @remarks
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @beta
     * @remarks
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * Returns `true` if the permutation has the tag, else `false`.
     * @example check_block_tags.js
     * ```typescript
     * import { world } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const blockPerm = block.getPermutation();
     *
     * console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     * console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     * console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @beta
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
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @example addBlockColorCube.ts
     * ```typescript
     *   const allColorNames: string[] = [
     *     "white",
     *     "orange",
     *     "magenta",
     *     "light_blue",
     *     "yellow",
     *     "lime",
     *     "pink",
     *     "gray",
     *     "silver",
     *     "cyan",
     *     "purple",
     *     "blue",
     *     "brown",
     *     "green",
     *     "red",
     *     "black",
     *   ];
     *
     *   const cubeDim = 7;
     *
     *   let colorIndex = 0;
     *
     *   for (let x = 0; x <= cubeDim; x++) {
     *     for (let y = 0; y <= cubeDim; y++) {
     *       for (let z = 0; z <= cubeDim; z++) {
     *         colorIndex++;
     *         overworld
     *           .getBlock({ x: targetLocation.x + x, y: targetLocation.y + y, z: targetLocation.z + z })
     *           ?.setPermutation(
     *             mc.BlockPermutation.resolve("minecraft:wool", {
     *               color: allColorNames[colorIndex % allColorNames.length],
     *             })
     *           );
     *       }
     *     }
     *   }
     * ```
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}