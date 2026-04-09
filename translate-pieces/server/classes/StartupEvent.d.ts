/* IMPORT */ import { BlockComponentRegistry, CustomCommandRegistry, DimensionRegistry, ItemComponentRegistry } from '..';

export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @beta
     * @remarks
     * @earlyExecution
     *
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}
