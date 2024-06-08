/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * @rc
 */
export class ItemComponentConsumeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
}