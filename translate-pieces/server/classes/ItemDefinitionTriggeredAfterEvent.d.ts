/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @beta
 * Contains information related to a custom item having a data
 * definition change being triggered.
 */
export class ItemDefinitionTriggeredAfterEvent {
    private constructor();
    /**
     * @remarks
     * Name of the data-driven item event that is triggering this
     * change.
     *
     */
    readonly eventName: string;
    /**
     * @remarks
     * Related item stack that the definitional change has been
     * triggered upon.
     *
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     *
     */
    readonly source?: Player;
}