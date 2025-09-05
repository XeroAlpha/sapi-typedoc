/* IMPORT */ import { ItemStack, Player } from '..';

/**
 * Contains information regarding an event after changing the
 * selected hotbar slot for a player.
 */
export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack of the new slot selected.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The new hotbar slot index selected.
     *
     */
    readonly newSlotSelected: number;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The previous hotbar slot index selected.
     *
     */
    readonly previousSlotSelected: number;
}
