/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * @beta
 */
export class ItemComponentConsumeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
}