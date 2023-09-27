/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPotionType(itemStack: ItemStack): void;
}