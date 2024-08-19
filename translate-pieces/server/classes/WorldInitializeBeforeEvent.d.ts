/* IMPORT */ import { BlockComponentRegistry, ItemComponentRegistry } from '../index';

/**
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied blockRegistry object to register
 * block custom components within the scope of the World
 * Initialize execution.
 */
export class WorldInitializeBeforeEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * Provides the functionality for registering custom components
     * for items.
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}