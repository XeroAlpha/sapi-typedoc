/* IMPORT */ import { BlockComponentRegistry, CustomCommandRegistry, ItemComponentRegistry } from '../index';

export class StartupEvent {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @rc
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
    readonly itemComponentRegistry: ItemComponentRegistry;
}