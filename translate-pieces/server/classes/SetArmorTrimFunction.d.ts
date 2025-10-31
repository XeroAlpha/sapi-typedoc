/* IMPORT */ import { LootItemFunction } from '..';

/**
 * @rc
 * Loot item function that modifies the trim on a dropped armor
 * item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    /**
     * @remarks
     * The material to apply to the armor trim.
     *
     */
    readonly material: string;
    /**
     * @remarks
     * The pattern to apply to the armor trim.
     *
     */
    readonly pattern: string;
}
