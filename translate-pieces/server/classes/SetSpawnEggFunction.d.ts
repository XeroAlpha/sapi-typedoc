/* IMPORT */ import { LootItemFunction } from '..';

/**
 * Loot item function that assigns an entity type to a dropped
 * spawn egg. Does not work on any items other than spawn eggs.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The entity to be assigned to the dropped egg.
     *
     */
    readonly id: string;
}
