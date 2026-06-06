/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @beta
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
}
