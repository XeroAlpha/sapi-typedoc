/* IMPORT */ import { BlockCustomComponent, minecraftcommon } from '../index';

/**
 * @beta
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}