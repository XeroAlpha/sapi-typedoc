/**
 * Describes the memory of a device.
 *
 * 表示设备的内存。
 */
export enum MemoryTier {
	/**
	 * @remarks
	 * Max memory for Super Low Tier is 1.5GBs.
	 *
	 * 超低级的最大内存为1.5GB。
	 */
	SuperLow = 0,
	/**
	 * @remarks
	 * Max memory for Low Tier is 2GBs.
	 *
	 * 低级的最大内存为2GB。
	 */
	Low = 1,
	/**
	 * @remarks
	 * Max memory for Mid Tier is 4GBs.
	 *
	 * 中级的最大内存为4GB。
	 */
	Mid = 2,
	/**
	 * @remarks
	 * Max memory for High Tier is 8GBs.
	 *
	 * 高级的最大内存为8GB。
	 */
	High = 3,
	/**
	 * @remarks
	 * Memory for Super High Tier is above 8GBs.
	 *
	 * 超高级的内存超过8GB。
	 */
	SuperHigh = 4,
}
