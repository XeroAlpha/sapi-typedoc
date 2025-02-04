/* IMPORT */ import { Block, BlockPermutation, Direction, Entity } from '../index';

/**
 * 表示实体击中方块相关的信息。
 *
 * Contains information related to an entity hitting a block.
 */
export class EntityHitBlockAfterEvent {
	private constructor();
	/**
	 * @remarks
	 * 被击中的方块的面。
	 *
	 * Face of the block that was hit.
	 */
	readonly blockFace: Direction;
	/**
	 * @remarks
	 * 发起攻击的实体。
	 *
	 * Entity that made the attack.
	 */
	readonly damagingEntity: Entity;
	/**
	 * @remarks
	 * 被攻击击中的方块。
	 *
	 * Block that was hit by the attack.
	 */
	readonly hitBlock: Block;
	/**
	 * @remarks
	 * 被攻击击中的方块状态。
	 *
	 * Block permutation that was hit by the attack.
	 */
	readonly hitBlockPermutation: BlockPermutation;
}
