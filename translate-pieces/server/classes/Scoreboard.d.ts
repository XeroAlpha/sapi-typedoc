/* IMPORT */ import { DisplaySlotId, ScoreboardIdentity, ScoreboardObjective, ScoreboardObjectiveDisplayOptions } from '../index';

/**
 * 表示记分板。其上包含了记分项和分数持有者。
 * 
 * Contains objectives and participants for the scoreboard.
 * @seeExample updateScoreboard.ts
 */
export class Scoreboard {
    private constructor();
    /**
     * @remarks
     * 在记分板上添加一个新的记分项。
     * 
     * Adds a new objective to the scoreboard.
     *
     * This function can't be called in read-only mode.
     * @param objectiveId 记分项名称。
     * @param displayName 记分项的显示名称。
     * @returns 创建的记分项对象。
     * @throws
     * 若同名记分项已存在时，抛出 `"Failed to add objective 'objectiveId' as it is already being tracked"`。
     * @seeExample updateScoreboard.ts
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks
     * 清除显示位置上正在显示的记分项。
     * 
     * Clears the objective that occupies a display slot.
     *
     * This function can't be called in read-only mode.
     * @param displaySlotId 显示位置。
     * @returns 先前正显示的记分项，为空时返回 `null`。
     *
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取名称为 `objectiveId` 的记分项对象。
     * 
     * Returns a specific objective (by id).
     *
     * @param objectiveId
     * 记分项名称。
     * 
     * Identifier of the objective.
     * @returns 指定的记分项对象。不存在时返回 `null`。
     */
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    /**
     * @remarks
     * 获取位于指定显示位置上的记分项对象与显示配置。
     * 
     * Returns an objective that occupies the specified display
     * slot.
     * @param displaySlotId 显示位置。
     * @returns 位于指定显示位置的记分项显示配置。为空时返回 `null`。
     *
     */
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    /**
     * @remarks
     * 获取记分板上的已定义的所有记分项。
     * 
     * Returns all defined objectives.
     * @returns 所有记分项对象组成的数组。
     *
     */
    getObjectives(): ScoreboardObjective[];
    /**
     * @remarks
     * 获取所有已经定义的分数持有者。
     * 
     * Returns all defined scoreboard identities.
     * @returns 所有分数持有者对象组成的数组。
     *
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks
     * 从记分板上移除指定的记分项。
     * 
     * Removes an objective from the scoreboard.
     *
     * This function can't be called in read-only mode.
     * @param objectiveId 记分项对象或名称。
     * @returns 总是返回 `true`。
     * @throws
     * 若指定的记分项不存在时，抛出 `"Failed to find the objective specified"`。
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks
     * 设置指定的显示位置显示的记分项与其他显示配置。
     * 
     * Sets an objective into a display slot with specified
     * additional display settings.
     *
     * This function can't be called in read-only mode.
     * @param displaySlotId 显示位置。
     * @param objectiveDisplaySetting 记分项显示配置。
     * @returns
     * 显示位上先前显示的记分项对象。先前未显示记分项时，返回 `undefined`。
     * 
     * Returns the previous `ScoreboardObjective` set at the
     * display slot, if no objective was previously set it returns
     * `undefined`.
     * @throws
     * 若记分项无效，抛出 `"Failed to set invalid objective at DisplaySlot"`。
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}