/* IMPORT */ import { ItemComponent } from '../index';

/**
 * @beta
 * When present, the item can be composted in the composter
 * block if the composting chance is in the range [1 - 100].
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * This is the percent chance of the item composting in the
     * composter block and generating a compost layer. Note this
     * api will not return the percent chance for some vanilla
     * items. To get the compostable chance for all items, use the
     * compostingChance property on the ItemStack.
     *
     * @throws
     * Throws if value outside the range [1 - 100]
     *
     * {@link Error}
     */
    readonly compostingChance: number;
    static readonly componentId = 'minecraft:compostable';
}