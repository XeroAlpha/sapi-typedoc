/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当添加此组件时，表示该实体是一个幼体。
 *
 * When added, this component signifies that this entity is a
 * baby.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:is_baby';
}
