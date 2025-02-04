/* IMPORT */ import { BlockEvent, BlockPermutation, Player } from '../index';

/**
 * 描述了有关特定方块被破坏的信息。
 *
 * Contains information regarding a specific block being
 * destroyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 返回此方块在被破坏之前的排列信息。
	 *
	 * Returns permutation information about this block before it
	 * was destroyed.
	 *
	 */
	readonly destroyedBlockPermutation: BlockPermutation;
	/**
	 * @remarks
	 * 破坏此方块的玩家。
	 *
	 * The player that destroyed this block.
	 *
	 */
	readonly player?: Player;
}
