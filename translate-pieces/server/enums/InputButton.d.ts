/* IMPORT */ import { InputInfo, PlayerButtonInputAfterEvent, WorldAfterEvents } from "../index";

/**
 * @rc
 * All the different input buttons that are supported. Use with
 * {@link @minecraft/server.PlayerInput.getButtonState} via
 * {@link @minecraft/server.Player.input} or {@link
 * PlayerButtonInputAfterEvent} via {@link
 * WorldAfterEvents.playerButtonInput}
 *
 * 表示支持的所有不同输入按钮。可通过 {@link @minecraft/server.Player.input} 使用 {@link @minecraft/server.PlayerInput.getButtonState}，或通过 {@link WorldAfterEvents.playerButtonInput} 使用 {@link PlayerButtonInputAfterEvent}
 */
export enum InputButton {
	/**
	 * @remarks
	 * This is mapped to the 'Jump' button on controllers,
	 * keyboards, and touch interfaces.
	 *
	 * 表示映射到控制器、键盘和触摸界面上的“跳跃”按钮。
	 */
	Jump = "Jump",
	/**
	 * @remarks
	 * This is mapped to the 'Sneak' button on controllers,
	 * keyboards, and touch interfaces. By default, this is shift
	 * on a keyboard or B on an Xbox controller. On touch
	 * interfaces this will only be pressed for 1 tick or less and
	 * then it will be released immediately even if the player
	 * holds their finger down. Dismounting a horse or exiting a
	 * boat will not send a Sneak button change event.
	 *
	 * 表示映射到控制器、键盘和触摸界面上的“潜行”按钮。默认情况下，这在键盘上是 shift 键，在 Xbox 控制器上是 B 键。在触摸界面上，这个按钮只会按下 1 tick 或更短时间，然后即使玩家按住手指，它也会立即释放。下马或离开船只不会发送潜行按钮更改事件。
	 */
	Sneak = "Sneak",
}
