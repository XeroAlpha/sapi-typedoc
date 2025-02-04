/**
 * Describes where the script event originated from.
 *
 * 表示脚本事件的来源。
 */
export enum ScriptEventSource {
	/**
	 * @remarks
	 * The script event originated from a Block such as a Command
	 * Block.
	 *
	 * 表示脚本事件来源于方块，例如命令方块。
	 */
	Block = "Block",
	/**
	 * @remarks
	 * The script event originated from an Entity such as a Player,
	 * Command Block Minecart or Animation Controller.
	 *
	 * 表示脚本事件来源于实体，例如玩家、命令方块矿车或动画控制器。
	 */
	Entity = "Entity",
	/**
	 * @remarks
	 * The script event originated from an NPC dialogue.
	 *
	 * 表示脚本事件来源于NPC对话。
	 */
	NPCDialogue = "NPCDialogue",
	/**
	 * @remarks
	 * The script event originated from the server, such as from a
	 * runCommand API call or a dedicated server console.
	 *
	 * 表示脚本事件来源于服务器，例如通过runCommand API调用或专用服务器控制台。
	 */
	Server = "Server",
}
