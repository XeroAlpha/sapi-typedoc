/* IMPORT */ import { ObjectiveSortOrder, ScoreboardObjective } from '../index';

/**
 * 表示记分项显示位置配置。描述了如何在记分板显示位置上显示记分项。
 * 
 * Contains additional options for how a scoreboard should be
 * displayed within its display slot.
 */
export interface ScoreboardObjectiveDisplayOptions {
    /**
     * @remarks
     * 要显示的记分项。
     * 
     * Objective to be displayed.
     *
     */
    objective: ScoreboardObjective;
    /**
     * @remarks
     * 记分项条目的显示排序顺序。
     * 
     * The sort order to display the objective items within.
     *
     */
    sortOrder?: ObjectiveSortOrder;
}