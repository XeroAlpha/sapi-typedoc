/* IMPORT */ import { BlockExplodeAfterEvent } from "../index";

/**
 * 管理与爆炸发生时的回调函数，
 * 当爆炸影响到单个方块时触发。
 *
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 */
export class BlockExplodeAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当爆炸发生时，
	 * 该回调函数会在爆炸影响到单个方块时被调用。
	 *
	 * Adds a callback that will be called when an explosion
	 * occurs, as it impacts individual blocks.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其在爆炸发生时
	 * 不再被调用。
	 *
	 * Removes a callback from being called when an explosion
	 * occurs, as it impacts individual blocks.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}
