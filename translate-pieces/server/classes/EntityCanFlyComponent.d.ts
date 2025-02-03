/* IMPORT */ import { EntityComponent } from "../index";

/**
 * 当添加此组件时，表示该实体可以飞行，且寻路器不会被限制在需要下方有固体方块的路径上。
 *
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:can_fly";
}
