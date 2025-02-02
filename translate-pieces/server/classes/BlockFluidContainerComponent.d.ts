/* IMPORT */ import { BlockComponent, FluidType, ItemStack, ItemType, RGBA } from "../index";

/**
 * 表示世界中方块的流体容器。像炼药锅这样的方块。
 *
 * Represents the fluid container of a block in the world. Used
 * with blocks like cauldrons.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示流体容器的相对填充水平。
	 *
	 * Relative fill level of the fluid container.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	fillLevel: number;
	/**
	 * @remarks
	 * 表示容器中流体的自定义颜色。
	 *
	 * Custom color of the fluid in the container.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	fluidColor: RGBA;
	static readonly componentId = "minecraft:fluidContainer";
	/**
	 * @remarks
	 * 向流体中添加染料。染料颜色与任何现有的自定义颜色结合。
	 *
	 * Adds a dye to the fluid. The dye color is combined with any
	 * existing custom color.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	addDye(dye: ItemType): void;
	/**
	 * @remarks
	 * 获取容器中当前的流体类型。
	 *
	 * Gets the current fluid type in the container.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getFluidType(): FluidType;
	/**
	 * @remarks
	 * 设置容器中当前的流体类型。
	 *
	 * Sets the current fluid type in the container.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setFluidType(fluidType: FluidType): void;
	/**
	 * @remarks
	 * 在容器中设置药水物品。将容器的流体类型更改为药水。
	 *
	 * Sets a potion item in the container. Changes the container's
	 * fluid type to potion.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	setPotion(itemStack: ItemStack): void;
}
