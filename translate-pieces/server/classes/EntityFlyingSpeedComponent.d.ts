/* IMPORT */ import { EntityComponent } from "../index";

/**
 * 表示实体的飞行速度。
 *
 * Represents the flying speed of an entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示实体当前的飞行速度数值。
	 *
	 * Current value of the flying speed of the associated entity.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	value: number;
	static readonly componentId = "minecraft:flying_speed";
}
