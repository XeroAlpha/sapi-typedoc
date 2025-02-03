/* IMPORT */ import { BlockComponent, ItemStack, ItemType } from "../index";

/**
 * 表示一个可以播放唱片的方块。
 *
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
	private constructor();
	static readonly componentId = "minecraft:record_player";
	/**
	 * @remarks
	 * 弹出当前设置的唱片。
	 *
	 * Ejects the currently set record of this record-playing
	 * block.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	ejectRecord(): void;
	/**
	 * @remarks
	 * 获取当前设置在此唱片播放方块上的唱片。
	 *
	 * Gets the currently set record of this record-playing block.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getRecord(): ItemStack | undefined;
	/**
	 * @remarks
	 * 若唱片播放方块当前正在播放唱片，则返回 `true`。
	 *
	 * Returns true if the record-playing block is currently
	 * playing a record.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	isPlaying(): boolean;
	/**
	 * @remarks
	 * 暂停当前正在播放的唱片。
	 *
	 * Pauses the currently playing record of this record-playing
	 * block.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	pauseRecord(): void;
	/**
	 * @remarks
	 * 播放当前设置在此唱片播放方块上的唱片。
	 *
	 * Plays the currently set record of this record-playing block.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	playRecord(): void;
	/**
	 * @remarks
	 * 根据物品类型设置并播放一张唱片。
	 *
	 * Sets and plays a record based on an item type.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}
