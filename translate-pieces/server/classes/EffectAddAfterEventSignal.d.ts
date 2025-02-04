/* IMPORT */ import { EffectAddAfterEvent, EntityEventOptions } from '../index';

/**
 * 管理连接到实体添加效果时的回调函数。
 *
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 */
export class EffectAddAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在实体添加效果时调用的回调函数。
	 *
	 * Adds a callback that will be called when an effect is added
	 * to an entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(
		callback: (arg0: EffectAddAfterEvent) => void,
		options?: EntityEventOptions,
	): (arg0: EffectAddAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个在实体添加效果时调用的回调函数。
	 *
	 * Removes a callback from being called when an effect is added
	 * to an entity.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}
