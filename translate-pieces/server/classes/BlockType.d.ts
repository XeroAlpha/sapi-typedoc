/**
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
    private constructor();
    /**
     * @remarks
     * Block type name - for example, `minecraft:acacia_stairs`.
     *
     */
    readonly id: string;
    /**
     * @rc
     * @remarks
     * Key for the localization of this BlockType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
