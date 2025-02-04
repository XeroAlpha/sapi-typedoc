/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * 表示按钮按下后相关的更改信息。
 *
 * Contains information related to changes to a button push.
 * @seeExample buttonPushEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
	private constructor();
	/**
	 * @remarks
	 * 可选的触发按钮按下的来源。
	 *
	 * Optional source that triggered the button push.
	 *
	 */
	readonly source: Entity;
}
