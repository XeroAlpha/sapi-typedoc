/* IMPORT */ import { minecraftvanilladata } from "../index";

/**
 * @beta
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 *
 * 用于 AimAssistRegistry.addPreset 创建 AimAssistPreset 的设置。
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 * 需要启用的实验性功能：
 * - 摄像机辅助瞄准
 *
 */
export class AimAssistPresetSettings {
	/**
	 * @remarks
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * 可选。用于未在 setItemSettings 中提供的物品的默认瞄准辅助类别 ID。
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	defaultItemSettings?: string;
	/**
	 * @remarks
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * 可选。用于空手的瞄准辅助类别 ID。
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	handSettings?: string;
	/**
	 * @remarks
	 * The unique Id used to register the preset with. Must have a
	 * namespace.
	 *
	 * 用于注册预设的唯一 ID。必须包含命名空间。
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistPreset. Must have a namespace.
	 *
	 * 构造函数，接受一个唯一 ID 来关联创建的 AimAssistPreset。必须包含命名空间。
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * 获取要从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * @returns
	 * The array of block/entity Ids.
	 *
	 * 方块/实体 ID 的数组。
	 */
	getExcludedTargets(): string[] | undefined;
	/**
	 * @remarks
	 * Gets the per-item aim-assist category Ids.
	 *
	 * 获取每个物品的瞄准辅助类别 ID。
	 *
	 * @returns
	 * The record mapping item Ids to aim-assist category Ids.
	 *
	 * 将物品 ID 映射到瞄准辅助类别 ID 的记录。
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * 获取在持有时将使用瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * @returns
	 * The array of item Ids.
	 *
	 * 物品 ID 的数组。
	 */
	getLiquidTargetingItems(): string[] | undefined;
	/**
	 * @remarks
	 * Sets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * 设置要从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * @param targets
	 * An array of block/entity Ids.
	 *
	 * 方块/实体 ID 的数组。
	 */
	setExcludedTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
	/**
	 * @remarks
	 * Sets the per-item aim-assist category Ids.
	 *
	 * 设置每个物品的瞄准辅助类别 ID。
	 *
	 * @param itemSettings
	 * A record mapping item Ids to aim-assist category Ids.
	 * Category Ids must have a namespace.
	 *
	 * 将物品 ID 映射到瞄准辅助类别 ID 的记录。类别 ID 必须包含命名空间。
	 */
	setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
	/**
	 * @remarks
	 * Sets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * 设置在持有时将使用瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * @param items
	 * An array of item Ids.
	 *
	 * 物品 ID 的数组。
	 */
	setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}
