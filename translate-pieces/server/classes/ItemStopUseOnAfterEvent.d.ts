/**
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}