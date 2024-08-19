/* IMPORT */ import { ItemComponentBeforeDurabilityDamageEvent, ItemComponentCompleteUseEvent, ItemComponentConsumeEvent, ItemComponentHitEntityEvent, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from '../index';

/**
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is hitting an entity and about to take durability
     * damage.
     *
     */
    onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component's use duration was completed.
     *
     */
    onCompleteUse?: (arg: ItemComponentCompleteUseEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is eaten by an entity.
     *
     */
    onConsume?: (arg: ItemComponentConsumeEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to hit another entity.
     *
     */
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
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used on a block.
     *
     */
    onUseOn?: (arg: ItemComponentUseOnEvent) => void;
}