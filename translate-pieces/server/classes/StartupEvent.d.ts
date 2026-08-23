/* IMPORT */ import { BlockComponentRegistry, CustomCommandRegistry, DimensionRegistry, ItemComponentRegistry, WorldClockRegistry } from '..';

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
    /**
     * @beta
     * @remarks
     * @earlyExecution
     *
     */
    readonly worldClockRegistry: WorldClockRegistry;
}
