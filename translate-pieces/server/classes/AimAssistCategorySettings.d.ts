/* IMPORT */ import { minecraftvanilladata } from "../index";

/**
 * @beta
 * Settings used with AimAssistRegistry.addCategory for
 * creation of the AimAssistCategory.
 *
 * 用于与 AimAssistRegistry.addCategory 一起使用的设置，
 * 用于创建 AimAssistCategory。
 *
 * Required Experiments:
 * - Camera Aim Assist
 *
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 */
export class AimAssistCategorySettings {
	/**
	 * @remarks
	 * Optional. Default targeting priority used for block types
	 * not provided to setBlockPriorities.
	 *
	 * 可选项。用于未提供给 setBlockPriorities 的方块类型的默认目标优先级。
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * 此属性在只读模式下无法编辑。
	 *
	 */
	defaultBlockPriority: number;
	/**
	 * @remarks
	 * Optional. Default targeting priority used for entity types
	 * not provided to setEntityPriorities.
	 *
	 * 可选项。用于未提供给 setEntityPriorities 的实体类型的默认目标优先级。
	 *
	 * This property can't be edited in read-only mode.
	 *
	 * 此属性在只读模式下无法编辑。
	 *
	 */
	defaultEntityPriority: number;
	/**
	 * @remarks
	 * The unique Id used to register the category with. Must have
	 * a namespace.
	 *
	 * 用于注册类别的唯一标识符。必须包含命名空间。
	 *
	 */
	readonly identifier: string;
	/**
	 * @remarks
	 * Constructor that takes a unique Id to associate with the
	 * created AimAssistCategory. Must have a namespace.
	 *
	 * 构造函数，接受一个唯一标识符以与创建的 AimAssistCategory 关联。
	 * 必须包含命名空间。
	 *
	 */
	constructor(identifier: string);
	/**
	 * @remarks
	 * Gets the priority settings used for block targeting.
	 *
	 * 获取用于方块目标选择的优先级设置。
	 *
	 * @returns
	 * The record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射方块 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	getBlockPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * Gets the priority settings used for entity targeting.
	 *
	 * 获取用于实体目标选择的优先级设置。
	 *
	 * @returns
	 * The record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射实体 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	getEntityPriorities(): Record<string, number>;
	/**
	 * @remarks
	 * Sets the priority settings used for block targeting.
	 *
	 * 设置用于方块目标选择的优先级设置。
	 *
	 * @param blockPriorities
	 * A record mapping block Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射方块 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	setBlockPriorities(blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>): void;
	/**
	 * @remarks
	 * Sets the priority settings used for entity targeting.
	 *
	 * 设置用于实体目标选择的优先级设置。
	 *
	 * @param entityPriorities
	 * A record mapping entity Ids to their priority settings.
	 * Larger numbers have greater priority.
	 *
	 * 映射实体 ID 到其优先级设置的记录。数值越大，优先级越高。
	 *
	 */
	setEntityPriorities(entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>): void;
}
