/* IMPORT */ import { BlockComponentRegistry, ItemComponentRegistry } from '../index';

/**
 * @beta
 */
export class StartupEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
}