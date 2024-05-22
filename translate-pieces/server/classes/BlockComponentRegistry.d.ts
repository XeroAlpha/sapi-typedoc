/* IMPORT */ import { BlockCustomComponent, CustomComponentInvalidRegistryError, CustomComponentNameError, minecraftcommon } from '../index';

/**
 * @beta
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link CustomComponentNameError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}