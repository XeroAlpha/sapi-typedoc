/* IMPORT */ import { BlockEvent, BlockPermutation, Entity } from '../index';

/**
 * 描述了特定方块发生爆炸的相关信息。
 *
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 表示发生爆炸的方块的描述。
	 *
	 * Description of the block that has exploded.
	 *
	 */
	readonly explodedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 爆炸的可选来源。
	 *
	 * Optional source of the explosion.
	 *
	 */
	readonly source?: Entity;
}
