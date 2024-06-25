/**
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    private constructor();
    /**
     * @beta
     * @remarks
     * Represents whether this type of block can be waterlogged.
     *
     */
    readonly canBeWaterlogged: boolean;
    /**
     * @remarks
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
}