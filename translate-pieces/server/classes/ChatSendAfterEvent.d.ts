/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * 玩家发送聊天信息时触发的事件。
 *
 * An event that fires as players enter chat messages.
 */
export class ChatSendAfterEvent {
	private constructor();
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
	 * 将接收到该消息的玩家的可选列表。若定义了该列表，则此消息是直接发送给一个或多个玩家的（即，不是广播消息到全局）。
	 *
	 * Optional list of players that will receive this message. If
	 * defined, this message is directly targeted to one or more
	 * players (i.e., is not broadcast.)
	 *
	 */
	readonly targets?: Player[];
}
