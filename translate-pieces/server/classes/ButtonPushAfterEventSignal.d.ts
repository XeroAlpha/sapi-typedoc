/* IMPORT */ import { ButtonPushAfterEvent } from "../index";

/**
 * 管理与按钮被按下时相关的回调函数。
 * @seeExample buttonPushEvent.ts
 */

/**
 * Manages callbacks that are connected to when a button is
 * pushed.
 * @seeExample buttonPushEvent.ts
 */
export class ButtonPushAfterEventSignal {
	private constructor();
	/**
	 * @beta
	 * @remarks
	 * Adds a callback that will be called when a button is pushed.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
	/**
	 * @beta
	 * @remarks
	 * Removes a callback from being called when a button is
	 * pushed.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}
