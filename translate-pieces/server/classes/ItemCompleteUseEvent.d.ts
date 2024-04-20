/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @beta
 */
export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}