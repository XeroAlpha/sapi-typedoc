/* IMPORT */ import { IListViewControlPaneOptions, ListViewControlFilterFlags, LocalizedString, SubPaneViewSortType } from '..';

/**
 * Options to enable sorting and a fixed footer over a sub
 * pane's direct child sub panes.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPaneViewControlOptions extends IListViewControlPaneOptions {
    /**
     * @remarks
     * Flags to determine which filters are visible. If undefined,
     * it will be All.
     *
     */
    filterFlags?: ListViewControlFilterFlags;
    /**
     * @remarks
     * Resolves each child's comparable value for the Custom sort.
     * Only called for the Custom sort; the built-in Default / AtoZ
     * / ZtoA never use it.
     *
     */
    getSortValue?: (childPaneId: string) => string | number;
    /**
     * @remarks
     * Called whenever the filter is changed by the user.
     *
     */
    onFilterChanged?: (visibleChildPaneIds: string[]) => void;
    /**
     * @remarks
     * Called when the user selects an entry in the "Show"
     * dropdown. Receives the zero-based option index.
     *
     */
    onShowOptionChanged?: (optionIndex: number) => void;
    /**
     * @remarks
     * Called when the user changes the sort.
     *
     */
    onSortChanged?: (sort: SubPaneViewSortType) => void;
    /**
     * @remarks
     * When true, the view control renders inline at the bottom of
     * the sub pane instead of in a footer.
     *
     */
    renderInline?: boolean;
    /**
     * @remarks
     * Labels for the "Show" dropdown. When provided, a dropdown is
     * shown and onShowOptionChanged is called with the selected
     * index whenever the user changes the selection.
     *
     */
    showOptions?: {
        label: LocalizedString;
        value: number;
    }[];
    /**
     * @remarks
     * Optional label override per sort. Built-ins fall back to
     * framework labels.
     *
     */
    sortLabels?: Partial<Record<SubPaneViewSortType, LocalizedString>>;
    /**
     * @remarks
     * Sorts shown in the footer dropdown. If undefined, only
     * Default is used.
     *
     */
    sortOptions?: SubPaneViewSortType[];
}
