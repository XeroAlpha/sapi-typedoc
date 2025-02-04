/**
 * Used for specifying a sort order for how to display an
 * objective and its list of participants.
 *
 * 表示分数持有者列表的排序顺序。
 */
export enum ObjectiveSortOrder {
	/**
	 * @remarks
	 *
	 * Objective participant list is displayed in ascending (e.g.,
	 * A-Z) order.
	 *
	 * 以升序显示分数持有者列表（例如：A-Z）。
	 */
	Ascending = 0,
	/**
	 * @remarks
	 *
	 * Objective participant list is displayed in descending (e.g.,
	 * Z-A) order.
	 *
	 * 以降序显示分数持有者列表（例如：Z-A）。
	 */
	Descending = 1,
}
