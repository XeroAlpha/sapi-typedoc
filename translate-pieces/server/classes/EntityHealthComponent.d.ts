/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * 表示实体的生命值属性。
 *
 * Defines the health properties of an entity.
 * @seeExample applyDamageThenHeal.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealthComponent extends EntityAttributeComponent {
	private constructor();
	static readonly componentId = 'minecraft:health';
}
