/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player } from "../index";

/**
 * 表示玩家放置方块前的事件信息。
 *
 * Contains information regarding an event before a player
 * places a block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示取消放置方块事件。
	 *
	 * If set to true, cancels the block place event.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 表示被放置的方块面。
	 *
	 * The block face that was placed onto.
	 *
	 */
	readonly face: Direction;
	/**
	 * @remarks
	 * 表示若事件未被取消，将要放置的方块组合。若设置为不同的方块组合，则将放置该组合。
	 *
	 * The block permutation that will be placed if the event is
	 * not cancelled. If set to a different block permutation, that
	 * permutation will be placed instead.
	 *
	 */
	permutationToPlace: BlockPermutation;
	/**
	 * @remarks
	 * 表示正在放置该方块的玩家。
	 *
	 * The player that is placing this block.
	 *
	 */
	readonly player?: Player;
}
