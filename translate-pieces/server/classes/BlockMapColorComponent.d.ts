/* IMPORT */ import { BlockComponent, RGBA, TintMethod } from '../index';

/**
 * @beta
 * 表示方块在地图上显示的颜色。
 *
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
	private constructor();
	static readonly componentId = 'minecraft:map_color';
	/**
	 * @remarks
	 * 表示该方块定义的基础地图颜色。
	 *
	 * Base map color defined for that block.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	color(): RGBA;
	/**
	 * @remarks
	 * 返回在给定位置下基础颜色与计算得出的色调的乘积。
	 *
	 * Returns the base color multiplied to the evaluated tint at
	 * the given position.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	tintedColor(): RGBA;
	/**
	 * @remarks
	 * 表示应用于颜色的色调类型。
	 *
	 * Type of tint applied to the color.
	 *
	 * 此函数在只读模式下无法调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	tintMethod(): TintMethod;
}
