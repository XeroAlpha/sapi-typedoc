/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, CustomComponentNameError, minecraftcommon } from '../index';

export class BlockComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link CustomComponentNameError}
     *
     * {@link minecraftcommon.EngineError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}