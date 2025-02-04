/**
 * 表示方块的类型（或模板）。不包含除表示方块类型以外的任何排列数据（状态）。
 * 此类型自版本 1.17.10.21 引入。
 *
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 */
export class BlockType {
	private constructor();
	/**
	 * @remarks
	 * 方块类型名称，例如 `minecraft:acacia_stairs`。
	 *
	 * Block type name - for example, `minecraft:acacia_stairs`.
	 *
	 */
	readonly id: string;
}
