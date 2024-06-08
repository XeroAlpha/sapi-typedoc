/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @rc
 */
export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}