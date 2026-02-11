/**
 * Represents the type of an item - for example, Wool.
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     *
     */
    readonly id: string;
    /**
     * @rc
     * @remarks
     * Key for the localization of this ItemType's name used in
     * .lang files.
     *
     */
    readonly localizationKey: string;
}
