/* IMPORT */ import { Player } from "../index";

/**
 * @beta
 * 玩家发送聊天消息前触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendBeforeEvent {
	private constructor();
	/**
	 * @remarks
	 * 若为 `true`，则表示在 beforeChat 事件处理器中设置为 true ，此消息不会被广播。
	 *
	 * If set to true in a beforeChat event handler, this message
	 * is not broadcast out.
	 *
	 */
	cancel: boolean;
	/**
	 * @remarks
	 * 正在广播的消息。
	 *
	 * Message that is being broadcast.
	 *
	 */
	readonly message: string;
	/**
	 * @remarks
	 * 发送聊天消息的玩家。
	 *
	 * Player that sent the chat message.
	 *
	 */
	readonly sender: Player;
	/**
	 * @remarks
	 * 将接收此消息的玩家的可选列表。若定义了此列表，则此消息将直接发送给一个或多个玩家（即，不会广播到全局）。
	 *
	 * Optional list of players that will receive this message. If
	 * defined, this message is directly targeted to one or more
	 * players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}
