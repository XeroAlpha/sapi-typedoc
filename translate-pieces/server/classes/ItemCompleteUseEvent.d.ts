/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * Contains information related to a chargeable item completing
 * being charged.
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}
