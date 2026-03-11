/* IMPORT */ import { Container, EntityComponent, InvalidEntityError } from '..';

/**
 * @beta
 * Represents this entity's ender inventory properties. This
 * component is always present on players and any items in its
 * container will display for the player when they access an
 * ender chest.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Defines the ender inventory container for this entity. The
     * container will be undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:ender_inventory';
}
