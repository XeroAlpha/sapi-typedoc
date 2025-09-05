/* IMPORT */ import { Container, InvalidContainerError, ItemComponent } from '..';

/**
 * @beta
 * This component is added to items with the `Storage Item`
 * component. Can access and modify this items inventory
 * container.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = 'minecraft:inventory';
}
