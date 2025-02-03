/* IMPORT */ import { AimAssistCategory, AimAssistCategorySettings, AimAssistPreset, AimAssistPresetSettings, NamespaceNameError, minecraftcommon } from "../index";

/**
 * @beta
 * 包含与世界的辅助瞄准设置相关的 API 的容器。
 *
 *  必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 * A container for APIs related to the world's aim-assist
 * settings.
 *
 * Required Experiments:
 * - Camera Aim Assist
 */
export class AimAssistRegistry {
	private constructor();
	/**
	 * @remarks
	 * 默认的辅助瞄准预设标识符，当未另行指定时使用。
	 *
	 */
	static readonly DefaultPresetId = "minecraft:aim_assist_default";
	/**
	 * @remarks
	 * 向注册表中添加一个辅助瞄准类别。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param category
	 * 用于创建新类别的类别设置。
	 * @returns
	 * 创建的类别句柄。
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 */
	addCategory(category: AimAssistCategorySettings): AimAssistCategory;
	/**
	 * @remarks
	 * 向注册表中添加一个辅助瞄准预设。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param preset
	 * 用于创建新预设的预设设置。
	 * @returns
	 * 创建的预设句柄。
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 *
	 * {@link Error}
	 *
	 * {@link minecraftcommon.InvalidArgumentError}
	 *
	 * {@link NamespaceNameError}
	 */
	addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
	/**
	 * @remarks
	 * 获取注册表中所有可用的类别。
	 *
	 * @returns
	 * 一个包含所有可用类别对象的数组。
	 */
	getCategories(): AimAssistCategory[];
	/**
	 * @remarks
	 * 获取与提供的标识符关联的类别。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @returns
	 * 若存在，返回类别对象；否则返回 undefined。
	 */
	getCategory(categoryId: string): AimAssistCategory | undefined;
	/**
	 * @remarks
	 * 获取与提供的标识符关联的预设。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param presetId
	 * 要检索的预设的标识符。必须包含命名空间。
	 * @returns
	 * 若存在，返回预设对象；否则返回 undefined。
	 */
	getPreset(presetId: string): AimAssistPreset | undefined;
	/**
	 * @remarks
	 * 获取注册表中所有可用的预设。
	 *
	 * @returns
	 * 一个包含所有可用预设对象的数组。
	 */
	getPresets(): AimAssistPreset[];
}
