/* IMPORT */ import { ItemComponent, RGB } from '..';

/**
 * When present on an item, this item can be dyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * Sets and returns the current color of the item.
     *
     * @worldMutation
     *
     */
    color?: RGB;
    /**
     * @remarks
     * Returns the default color of the item.
     *
     * @throws This property can throw when used.
     */
    readonly defaultColor?: RGB;
    static readonly componentId = 'minecraft:dyeable';
}
