/* IMPORT */ import { EntityEventOptions, EntityHitBlockAfterEvent } from '../index';

/**
 * 管理与实体撞击方块时触发的回调函数。
 *
 * Manages callbacks that are connected to when an entity hits
 * a block.
 */
export class EntityHitBlockAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体撞击方块时会调用该回调函数。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * 此函数可在早期执行模式下调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHitBlockAfterEvent) => void,
		options?: EntityEventOptions
	): (arg0: EntityHitBlockAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体撞击方块时被调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * 此函数可在早期执行模式下调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}
