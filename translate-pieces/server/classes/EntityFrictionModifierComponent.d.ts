/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 表示摩擦力如何影响该实体。
 *
 * Defines how much friction affects this entity.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 实体当前的摩擦系数调整值。
	 *
	 * Current value of the friction modifier of the associated
	 * entity.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	value: number;
	static readonly componentId = 'minecraft:friction_modifier';
}
