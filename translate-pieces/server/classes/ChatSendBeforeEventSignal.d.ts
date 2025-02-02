/* IMPORT */ import { ChatSendBeforeEvent } from "../index";

/**
 * @beta
 * 管理在发送聊天消息之前触发的事件的回调。
 *
 * @seeExample customCommand.ts
 */
export class ChatSendBeforeEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个在发送新聊天消息之前会被调用的回调函数。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
	/**
	 * @remarks
	 * 移除一个在发送新聊天消息之前会被调用的回调函数。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}
