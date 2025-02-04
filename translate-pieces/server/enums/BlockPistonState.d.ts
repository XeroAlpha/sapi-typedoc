/**
 * An enumeration describing the state of a block piston.
 *
 * 表示方块活塞状态的枚举。
 */
export enum BlockPistonState {
	/**
	 * @remarks
	 * Whether the piston is fully expanded.
	 *
	 * 活塞是否完全伸展。
	 */
	Expanded = "Expanded",
	/**
	 * @remarks
	 * Whether the piston is in the process of expanding.
	 *
	 * 活塞是否正在伸展中。
	 */
	Expanding = "Expanding",
	/**
	 * @remarks
	 * Whether the piston is fully retracted.
	 *
	 * 活塞是否完全收回。
	 */
	Retracted = "Retracted",
	/**
	 * @remarks
	 * Whether the piston is in the process of retracting.
	 *
	 * 活塞是否正在收回中。
	 */
	Retracting = "Retracting",
}
