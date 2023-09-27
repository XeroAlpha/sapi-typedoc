/**
 * @beta
 * 表示分数持有者列表的排序顺序。
 * 
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 */
export enum ObjectiveSortOrder {
    /**
     * @beta
     * @remarks
     * 以升序显示分数持有者列表（例如：A-Z）。
     * 
     * Objective participant list is displayed in ascending (e.g.,
     * A-Z) order.
     *
     */
    Ascending = 0,
    /**
     * @beta
     * @remarks
     * 以降序显示分数持有者列表（例如：Z-A）。
     * 
     * Objective participant list is displayed in descending (e.g.,
     * Z-A) order.
     *
     */
    Descending = 1,
}