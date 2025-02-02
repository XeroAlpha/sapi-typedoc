/**
 * Describes how an an item can be moved within a container.
 *
 * 表示物品在容器中如何移动。
 */
export enum ItemLockMode {
	/**
	 * @remarks
	 * The item cannot be dropped or crafted with.
	 *
	 * 物品不能被丢弃或用于合成。
	 */
	inventory = "inventory",
	/**
	 * @remarks
	 * The item has no container restrictions.
	 *
	 * 物品没有容器限制。
	 */
	none = "none",
	/**
	 * @remarks
	 * The item cannot be moved from its slot, dropped or crafted
	 * with.
	 *
	 * 物品不能从其槽位移动、丢弃或用于合成。
	 */
	slot = "slot",
}
