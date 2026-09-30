/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { CustomDimensionAlreadyRegisteredError, CustomDimensionInvalidRegistryError, CustomDimensionNameError, CustomDimensionReloadNewDimensionError, NamespaceNameError } from '..';

/**
 * Provides the functionality for registering custom
 * dimensions. Custom dimensions can only be registered during
 * the system startup event.
 */
export class DimensionRegistry {
    private constructor();
    /**
     * @remarks
     * Registers a new custom dimension type. Must be called during
     * the system startup event. The dimension will be created
     * using the void generator.
     *
     * @earlyExecution
     *
     * @param typeId
     * The namespaced identifier for the custom dimension (e.g.,
     * 'mypack:my_dimension'). Must include a namespace and use
     * only valid identifier characters.
     * @throws {CustomDimensionAlreadyRegisteredError}
     *
     * @throws {CustomDimensionInvalidRegistryError}
     *
     * @throws {CustomDimensionNameError}
     *
     * @throws {CustomDimensionReloadNewDimensionError}
     *
     * @throws {EngineError}
     *
     * @throws {NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}
