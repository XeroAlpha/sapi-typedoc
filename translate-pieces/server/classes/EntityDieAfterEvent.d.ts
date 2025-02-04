/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * 表示游戏中实体死亡后的相关数据。
 *
 * Contains data related to the death of an entity in the game.
 */
export class EntityDieAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 若指定，提供有关导致该实体死亡的伤害来源的更多信息。
	 *
	 * If specified, provides more information on the source of
	 * damage that caused the death of this entity.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 已死亡的实体对象。
	 *
	 * Now-dead entity object.
	 *
	 */
	readonly deadEntity: Entity;
}
