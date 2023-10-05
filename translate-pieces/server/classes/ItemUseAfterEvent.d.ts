/**
 * @beta
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source: Player;
}