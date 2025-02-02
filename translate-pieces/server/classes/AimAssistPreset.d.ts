/**
 * @beta
 * 表示一个存在于 world.aimAssist 注册表中的辅助瞄准预设句柄。
 * Represents a handle to an aim-assist preset that exists in the world.aimAssist registry.
 *
 * 必须启用的实验特性：
 * Required Experiments:
 * - 相机辅助瞄准
 * - Camera Aim Assist
 *
 */
export class AimAssistPreset {
	private constructor();
	/**
	 * @remarks
	 * 可选。用于未通过 setItemSettings 提供的物品的默认辅助瞄准类别 ID。
	 *
	 * Optional. Default aim-assist category Id used for items not provided to setItemSettings.
	 *
	 * @throws 此属性在使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的辅助瞄准类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * @throws 此属性在使用时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 *
	 * {@link Error}
	 */
	readonly handSettings?: string;
	/**
	 * @remarks
	 * 与该预设关联的唯一标识符。
	 *
	 * The unique Id associated with the preset.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 获取从辅助瞄准目标中排除的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist targeting.
	 *
	 * @returns
	 * 包含方块/实体 ID 的数组。
	 *
	 * The array of block/entity Ids.
	 *
	 * @throws 此函数可能会抛出异常。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getExcludedTargets(): string[];
	/**
	 * @remarks
	 * 获取每个物品的辅助瞄准类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 映射物品 ID 到辅助瞄准类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在被持有时会使用辅助瞄准目标液体方块的物品 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks with aim-assist when being held.
	 *
	 * @returns
	 * 包含物品 ID 的数组。
	 *
	 * The array of item Ids.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 *
	 * {@link Error}
	 */
	getLiquidTargetingItems(): string[];
}
