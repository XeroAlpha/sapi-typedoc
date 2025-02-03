/* IMPORT */ import { EntityComponent } from "../index";

/**
 * 定义实体的颜色。仅对某些具有预定义颜色值的实体有效
 * （例如，羊、羊驼、潜影贝）。
 *
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此颜色的具体值。
	 *
	 * Value of this particular color.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:color";
}
