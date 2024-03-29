/* IMPORT */ import { ItemCustomComponent, ItemCustomComponentAlreadyRegisteredError, ItemCustomComponentNameError, ItemCustomComponentReloadNewComponentError, ItemCustomComponentReloadNewEventError, ItemCustomComponentReloadVersionError } from '../index';

/**
 * @beta
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentNameError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}