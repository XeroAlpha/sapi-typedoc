/* IMPORT */ import { EntityComponent, PaletteColor } from '../index';

/**
 * 定义实体的次要颜色。仅适用于某些具有次预定义颜色值的实体（例如热带鱼）。
 *
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此属性表示该次要颜色的具体值。
	 *
	 * Value of this particular color.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly value: PaletteColor;
	static readonly componentId = 'minecraft:color2';
}
