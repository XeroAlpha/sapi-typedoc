/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers a block interaction.
 */
export class ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     *
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     *
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     *
     */
    readonly faceLocation: Vector3;
    /**
     * @rc
     * @remarks
     * This value will be true if the event was triggered on
     * players initial interaction button press and false on events
     * triggered from holding the interaction button.
     *
     */
    readonly isFirstEvent: boolean;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
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