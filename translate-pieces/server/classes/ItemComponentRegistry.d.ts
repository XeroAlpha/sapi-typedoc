/* IMPORT */ import { CustomComponentInvalidRegistryError, ItemCustomComponent, ItemCustomComponentAlreadyRegisteredError, ItemCustomComponentReloadNewComponentError, ItemCustomComponentReloadNewEventError, ItemCustomComponentReloadVersionError, NamespaceNameError, minecraftcommon } from '../index';

/**
 * Provides the functionality for registering custom components
 * for items.
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an item custom component that can be used in item
     * JSON configuration.
     *
     * This function can be called in early-execution mode.
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a item's JSON
     * configuration under the 'minecraft:custom_components' item
     * component.
     * @param itemCustomComponent
     * The collection of event functions that will be called when
     * the event occurs on an item using this custom component id.
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}