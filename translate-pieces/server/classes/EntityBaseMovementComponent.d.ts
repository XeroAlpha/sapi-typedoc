/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 实体移动事件族的基础类。
 *
 * Base class for a family of entity movement events.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 此移动模式下生物的最大转向速度。
	 *
	 * Maximum turn rate for this movement modality of the mob.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly maxTurn: number;
}
