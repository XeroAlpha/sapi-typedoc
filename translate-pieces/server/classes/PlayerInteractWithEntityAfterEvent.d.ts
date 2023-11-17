/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * @beta
 * Contains information regarding an event after a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     *
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     *
     */
    readonly target: Entity;
}