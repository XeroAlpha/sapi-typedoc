/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, NamespaceNameError } from '..';

export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     * @throws {BlockCustomComponentAlreadyRegisteredError}
     *
     * @throws {BlockCustomComponentReloadNewComponentError}
     *
     * @throws {BlockCustomComponentReloadNewEventError}
     *
     * @throws {BlockCustomComponentReloadVersionError}
     *
     * @throws {CustomComponentInvalidRegistryError}
     *
     * @throws {EngineError}
     *
     * @throws {NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}
