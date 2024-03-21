/* IMPORT */ import { ItemComponentUseEvent } from '../index';

/**
 * @beta
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg: ItemComponentUseEvent) => void;
}