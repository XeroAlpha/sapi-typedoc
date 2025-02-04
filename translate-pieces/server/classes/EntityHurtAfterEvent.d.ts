/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * 表示与实体受伤相关的信息。
 *
 * Contains information related to an entity getting hurt.
 */
export class EntityHurtAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示造成的伤害量。
	 *
	 * Describes the amount of damage caused.
	 *
	 */
	readonly damage: number;
	/**
	 * @remarks
	 * 表示可能造成此伤害的实体的来源信息。
	 *
	 * Source information on the entity that may have applied this
	 * damage.
	 *
	 */
	readonly damageSource: EntityDamageSource;
	/**
	 * @remarks
	 * 表示受伤的实体。
	 *
	 * Entity that was hurt.
	 *
	 */
	readonly hurtEntity: Entity;
}
