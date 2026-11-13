/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * Contains information about the release of an item being used
 * through a custom item component.
 */
export class ItemComponentReleaseUseEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that was released.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * The remaining use duration, in ticks, when the item was
     * released.
     *
     */
    readonly remainingUseDuration: number;
    /**
     * @remarks
     * The player who released the item.
     *
     */
    readonly source: Player;
}
