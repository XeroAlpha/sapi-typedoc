/* IMPORT */ import { Effect, Entity } from '../index';

/**
 * 表示有关效果（如中毒）添加到实体时的变化信息。
 *
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 */
export class EffectAddAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 效果的附加属性和详细信息。
	 *
	 * Additional properties and details of the effect.
	 *
	 */
	readonly effect: Effect;
	/**
	 * @remarks
	 * 效果添加到的实体。
	 *
	 * Entity that the effect is being added to.
	 *
	 */
	readonly entity: Entity;
}
