/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
    /**
     * @remarks
     * Retrieves a custom base color used for the sign text.
     *
     * @returns
     * Color that is used as the base color for sign text.
     * @throws This function can throw errors.
     */
    getCustomColor(): RGBA;
    /**
     * @remarks
     * Sets a custom base color used for the sign text.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCustomColor(color: RGBA): void;
}