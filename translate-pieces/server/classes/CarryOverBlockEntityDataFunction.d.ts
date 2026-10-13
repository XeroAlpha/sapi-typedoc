/* IMPORT */ import { LootItemFunction } from '..';

/**
 * Loot item function that will try to copy the block entity
 * data from the destroyed block to the dropped item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * If true, and if the block entity had dynamic_properties, the
     * function will copy the dynamic properties from the block
     * entity to the dropped item.
     *
     */
    readonly dynamicProperties: boolean;
    /**
     * @remarks
     * If true, and if the block entity supports entity storage,
     * the function will copy the stored entities from the block
     * entity to the dropped item without releasing them. Placing
     * the item restores the stored entities if the placed block
     * supports entity storage. In loot table JSON, the optional
     * entity_storage Boolean field defaults to false and is
     * independent of dynamic_properties. Requires the Upcoming
     * Creator Features experiment.
     *
     */
    readonly entityStorage: boolean;
}
