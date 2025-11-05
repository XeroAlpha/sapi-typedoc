/* IMPORT */ import { LootItemCondition } from '..';

/**
 * @rc
 * Loot item condition that applies given values to the chances
 * that loot will drop based on the current difficulty level.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    /**
     * @remarks
     * A four-element array containing the chance of a loot drop
     * occurring for each difficulty level, in order: Peaceful,
     * Easy, Normal, Hard.
     *
     */
    readonly chances: number[];
}
