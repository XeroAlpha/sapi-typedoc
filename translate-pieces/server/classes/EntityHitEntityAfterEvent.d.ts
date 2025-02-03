/* IMPORT */ import { Entity } from "../index";

/**
 * 表示一个实体击中（近战攻击）另一个实体相关的信息。
 *
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 */
export class EntityHitEntityAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示发起击中/近战攻击的实体。
	 *
	 * Entity that made a hit/melee attack.
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * 表示被攻击击中的实体。
	 *
	 * Entity that was hit by the attack.
	 */
	readonly hitEntity: Entity;
}
