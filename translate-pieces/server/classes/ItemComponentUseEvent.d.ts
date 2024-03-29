/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @beta
 */
export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}