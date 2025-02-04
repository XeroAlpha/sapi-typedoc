/* IMPORT */ import { BlockComponent, Container, ItemStack } from '../index';

/**
 * 表示方块在世界中的库存。用于像箱子这样的方块。
 *
 * * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 *
 * @seeExample placeItemsInChest.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示包含一个 {@link ItemStack} 的容器。
	 *
	 * @throws 使用该属性时可能会抛出异常。
	 */
	readonly container?: Container;
	static readonly componentId = 'minecraft:inventory';
}
