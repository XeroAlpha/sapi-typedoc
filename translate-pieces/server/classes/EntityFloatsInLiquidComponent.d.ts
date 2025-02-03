/* IMPORT */ import { EntityComponent } from "../index";

/**
 * 当添加此组件时，表示该实体可以在液体方块中浮动。
 *
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:floats_in_liquid";
}
