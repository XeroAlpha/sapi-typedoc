/* IMPORT */ import { CustomComponentParameters, ItemComponentBeforeDurabilityDamageEvent, ItemComponentCompleteUseEvent, ItemComponentConsumeEvent, ItemComponentHitEntityEvent, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from '../index';

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
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component's use duration was completed.
     *
     */
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is eaten by an entity.
     *
     */
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to hit another entity.
     *
     */
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to mine a block.
     *
     */
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used by a player.
     *
     */
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used on a block.
     *
     */
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}