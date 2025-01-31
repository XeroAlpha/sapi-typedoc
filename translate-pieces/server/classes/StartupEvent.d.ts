/* IMPORT */ import { BlockComponentRegistry, ItemComponentRegistry, SpawnRulesRegistry } from '../index';

/**
 * @beta
 */
export class StartupEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     *
     * Required Experiments:
     * - Simplified Spawn Rules
     *
     */
    getSpawnRulesRegistry(): SpawnRulesRegistry;
}