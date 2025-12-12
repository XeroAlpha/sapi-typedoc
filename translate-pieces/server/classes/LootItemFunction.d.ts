/* IMPORT */ import { LootItemCondition } from '..';

/**
 * An abstract base class from which all loot item functions
 * are derived. Loot item functions can modify loot drops in a
 * variety of ways as they happen, optionally dependent on a
 * set of conditions which must be met.
 */
export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}
