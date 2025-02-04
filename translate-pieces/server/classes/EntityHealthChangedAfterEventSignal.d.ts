/* IMPORT */ import { EntityEventOptions, EntityHealthChangedAfterEvent } from '../index';

/**
 * 管理与实体生命值变化相关的回调函数。
 *
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 */
export class EntityHealthChangedAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，当实体的生命值发生变化时会调用该函数。
     * 
	 * Adds a callback that will be called when the health of an
     * entity changes.
	 * This function can't be called in read-only mode.
	 *
	 * 该函数可以在早期执行模式下调用。
	 *
	 * Adds a callback that will be called when the health of an
	 * entity changes.
	 *
	 */
	subscribe(
		callback: (arg0: EntityHealthChangedAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EntityHealthChangedAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，使其不再在实体生命值变化时被调用。
     * 
     * Removes a callback from being called when the health of an
     * entity changes.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * 该函数可以在早期执行模式下调用。
	 *
	 * Removes a callback from being called when the health of an
	 * entity changes.
	 *
	 */
	unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}
