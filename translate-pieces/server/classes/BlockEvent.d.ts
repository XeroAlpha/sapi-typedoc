/* IMPORT */ import { Block, Dimension } from '../index';

/**
 * 描述了影响特定方块的事件的信息。
 *
 * Contains information regarding an event that impacts a
 * specific block.
 */
export class BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 此事件影响的方块。
	 *
	 * Block impacted by this event.
	 *
	 */
	readonly block: Block;
	/**
	 * @remarks
	 * 包含此事件相关方块的所在维度。
	 *
	 * Dimension that contains the block that is the subject of
	 * this event.
	 *
	 */
	readonly dimension: Dimension;
}
