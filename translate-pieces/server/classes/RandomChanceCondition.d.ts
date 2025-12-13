/* IMPORT */ import { LootItemCondition } from '..';

/**
 * Loot item condition that applies a given value to the
 * chances that loot will drop.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * The chance, from 0.0-1.0, that loot will drop.
     *
     */
    readonly chance: number;
}
