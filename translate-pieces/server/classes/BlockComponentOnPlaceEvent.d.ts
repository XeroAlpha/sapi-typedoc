/* IMPORT */ import { BlockEvent, BlockPermutation } from '../index';

/**
 * 描述了放置的特定方块的信息。
 *
 * Contains information regarding a specific block that was
 * placed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 先前在此位置被替换的方块。
	 *
	 * Previous block at this location that was replaced.
	 *
	 */
	readonly previousBlock: BlockPermutation;
}
