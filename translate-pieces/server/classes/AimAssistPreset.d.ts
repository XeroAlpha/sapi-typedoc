/**
 * @beta
 * Handle to an aim-assist preset that exists in the
 * world.aimAssist registry.
 *
 * 表示在 world.aimAssist 注册表中存在的辅助瞄准预设的句柄。
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 * 需要启用的实验性功能：
 * - 摄像机辅助瞄准
 *
 */
export class AimAssistPreset {
	private constructor();
	/**
	 * @remarks
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * 可选。用于未提供给 setItemSettings 的物品的默认辅助瞄准类别 ID。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly defaultItemSettings?: string;
	/**
	 * @remarks
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * 可选。用于空手的辅助瞄准类别 ID。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly handSettings?: string;
	/**
	 * @remarks
	 * The unique Id associated with the preset.
	 *
	 * 与预设关联的唯一 ID。
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * 获取要从辅助瞄准目标中排除的方块/实体 ID 列表。
	 *
	 * @returns
	 * The array of block/entity Ids.
	 *
	 * 方块/实体 ID 的数组。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getExcludedTargets(): string[];
	/**
	 * @remarks
	 * Gets the per-item aim-assist category Ids.
	 *
	 * 获取每个物品的辅助瞄准类别 ID。
	 *
	 * @returns
	 * The record mapping item Ids to aim-assist category Ids.
	 *
	 * 将物品 ID 映射到辅助瞄准类别 ID 的记录。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * 获取在持有时将使用辅助瞄准目标液体方块的物品 ID 列表。
	 *
	 * @returns
	 * The array of item Ids.
	 *
	 * 物品 ID 的数组。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getLiquidTargetingItems(): string[];
}
