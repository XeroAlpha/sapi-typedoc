/* IMPORT */ import { minecraftvanilladata } from "../index";

/**
 * @beta
 * 用于 AimAssistRegistry.addPreset 创建 AimAssistPreset 的设置。
 *
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 * Settings used with AimAssistRegistry.addPreset for creation
 * of the AimAssistPreset.
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 */
export class AimAssistPresetSettings {
	/**
	 * @remarks
	 * 可选。默认的瞄准辅助类别 ID，用于未通过 setItemSettings 提供的物品。
	 *
	 * Optional. Default aim-assist category Id used for items not
	 * provided to setItemSettings.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	defaultItemSettings?: string;
	/**
	 * @remarks
	 * 可选。用于空手的瞄准辅助类别 ID。
	 *
	 * Optional. Aim-assist category Id used for an empty hand.
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	handSettings?: string;
	/**
	 * @remarks
	 * 用于注册预设的唯一 ID。必须包含命名空间。
	 *
	 * The unique Id used to register the preset with. Must have a
	 * namespace.
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * 构造函数，接受一个与创建的 AimAssistPreset 关联的唯一 ID。必须包含命名空间。
	 *
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistPreset. Must have a namespace.
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * 获取从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * Gets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @returns
	 * 包含方块/实体 ID 的数组。
	 *
	 * The array of block/entity Ids.
	 */
	getExcludedTargets(): string[] | undefined;
	/**
	 * @remarks
	 * 获取每个物品的瞄准辅助类别 ID。
	 *
	 * Gets the per-item aim-assist category Ids.
	 *
	 * @returns
	 * 一个将物品 ID 映射到瞄准辅助类别 ID 的记录。
	 *
	 * The record mapping item Ids to aim-assist category Ids.
	 */
	getItemSettings(): Record<string, string>;
	/**
	 * @remarks
	 * 获取在持有时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * Gets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @returns
	 * 包含物品 ID 的数组。
	 *
	 * The array of item Ids.
	 */
	getLiquidTargetingItems(): string[] | undefined;
	/**
	 * @remarks
	 * 设置从瞄准辅助目标中排除的方块/实体 ID 列表。
	 *
	 * Sets the list of block/entity Ids to exclude from aim assist
	 * targeting.
	 *
	 * @param targets
	 * 一个包含方块/实体 ID 的数组。
	 *
	 * An array of block/entity Ids.
	 */
	setExcludedTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
	/**
	 * @remarks
	 * 设置每个物品的瞄准辅助类别 ID。
	 *
	 * Sets the per-item aim-assist category Ids.
	 *
	 * @param itemSettings
	 * 一个将物品 ID 映射到瞄准辅助类别 ID 的记录。
	 * 类别 ID 必须包含命名空间。
	 *
	 * A record mapping item Ids to aim-assist category Ids.
	 * Category Ids must have a namespace.
	 */
	setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
	/**
	 * @remarks
	 * 设置在持有时将通过瞄准辅助瞄准液体方块的物品 ID 列表。
	 *
	 * Sets the list of item Ids that will target liquid blocks
	 * with aim-assist when being held.
	 *
	 * @param items
	 * 一个包含物品 ID 的数组。
	 *
	 * An array of item Ids.
	 */
	setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}
