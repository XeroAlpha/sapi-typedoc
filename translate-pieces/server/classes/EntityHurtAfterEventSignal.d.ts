/* IMPORT */ import { EntityEventOptions, EntityHurtAfterEvent } from '../index';

/**
 * 管理与实体受伤事件相关的回调函数。
 *
 * Manages callbacks that are connected to when an entity is
 * hurt.
 */
export class EntityHurtAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体受伤时会调用该回调函数。
     * 
     * Adds a callback that will be called when an entity is hurt.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHurtAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EntityHurtAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体受伤时被调用。
     * 
     * Removes a callback from being called when an entity is hurt.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * 此函数可以在早期执行模式中调用。
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}
