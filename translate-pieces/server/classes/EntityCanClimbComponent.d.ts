/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当添加此组件时，表示该实体可以攀爬梯子。
 *
 * When added, this component signifies that the entity can
 * climb up ladders.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
	private constructor();
	static readonly componentId = 'minecraft:can_climb';
}
