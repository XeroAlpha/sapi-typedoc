/**
 * @beta
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     *
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     *
     */
    readonly useDuration: number;
}