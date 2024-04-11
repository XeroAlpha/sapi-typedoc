/* IMPORT */ import { ItemComponentBeforeDurabilityDamageEvent, ItemComponentHitEntityEvent, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from '../index';

/**
 * @beta
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;
    onHitEntity?: (arg: ItemComponentHitEntityEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to mine a block.
     *
     */
    onMineBlock?: (arg: ItemComponentMineBlockEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg: ItemComponentUseEvent) => void;
    onUseOn?: (arg: ItemComponentUseOnEvent) => void;
}