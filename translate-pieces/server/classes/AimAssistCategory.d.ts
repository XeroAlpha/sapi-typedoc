/**
 * @beta
 * Handle to an aim-assist category that exists in the
 * world.aimAssist registry.
 * 
 * 句柄，用于访问存在于 world.aimAssist 注册表中的瞄准辅助类别。
 *
 * Required Experiments:
 * - Camera Aim Assist
 * 
 * 必须启用的实验功能：
 * - 摄像机瞄准辅助
 *
 */
export class AimAssistCategory {
    private constructor();
    /**
     * @remarks
     * Default targeting priority used for block types not found in
     * getBlockPriorities.
     * 
     * 用于未在 getBlockPriorities 中找到的方块类型的默认目标优先级。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     *
     * {@link Error}
     */
    readonly defaultBlockPriority: number;
    /**
     * @remarks
     * Default targeting priority used for entity types not found
     * in getEntityPriorities.
     * 
     * 用于未在 getEntityPriorities 中找到的实体类型的默认目标优先级。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     *
     * {@link Error}
     */
    readonly defaultEntityPriority: number;
    /**
     * @remarks
     * The unique Id associated with the category.
     * 
     * 与此类别关联的唯一标识符。
     *
     */
    readonly identifier: string;
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
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     *
     * {@link Error}
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
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     *
     * {@link Error}
     */
    getEntityPriorities(): Record<string, number>;
}
