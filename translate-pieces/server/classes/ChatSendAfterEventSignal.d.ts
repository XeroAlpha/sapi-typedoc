/**
 * @beta
 * 管理与聊天消息发送相关的回调。
 *
 * Manages callbacks that are connected to chat messages being
 * sent.
 */
export class ChatSendAfterEventSignal {
	private constructor();
	/**
	 * @remarks
	 * 添加一个当新聊天消息发送时会被调用的回调。
	 *
	 * Adds a callback that will be called when new chat messages
	 * are sent.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
	/**
	 * @remarks
	 * 移除一个当新聊天消息发送时会被调用的回调。
	 *
	 * Removes a callback from being called when new chat messages
	 * are sent.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * This function can be called in early-execution mode.
	 *
	 */
	unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}
