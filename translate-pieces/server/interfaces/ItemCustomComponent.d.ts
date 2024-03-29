/* IMPORT */ import { ItemComponentUseEvent } from '../index';

/**
 * @beta
 */
export interface ItemCustomComponent {
    onUse?: (arg: ItemComponentUseEvent) => void;
}