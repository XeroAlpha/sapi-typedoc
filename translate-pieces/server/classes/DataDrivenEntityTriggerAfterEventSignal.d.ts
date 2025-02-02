/* IMPORT */ import { DataDrivenEntityTriggerAfterEvent, EntityDataDrivenTriggerEventOptions } from "../index";

/**
 * 包含与触发数据驱动实体事件相关的事件注册，例如鸡的 minecraft:ageable_grow_up 事件。
 *
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 */
export class DataDrivenEntityTriggerAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个回调函数，该回调函数会在数据驱动实体事件被触发后调用。
	 *
	 * Adds a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个回调函数，该回调函数会在数据驱动实体事件被触发后调用。
	 *
	 * Removes a callback that will be called after a data driven
	 * entity event is triggered.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}
