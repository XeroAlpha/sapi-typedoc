/* IMPORT */ import { IListViewControlPane, IPropertyItemBase, IPropertyPane, ISubPaneHeader, ISubPaneHeaderOptions, ISubPaneViewControlOptions, LayoutAlignment, PaneLayoutType, SubPaneViewSortType } from '..';

/**
 * A property item which supports Sub Pane properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ISubPanePropertyItem extends IPropertyItemBase, IPropertyPane {
    /**
     * @remarks
     * Fixed-layout header of the sub pane, or undefined if
     * addHeader() was not called.
     *
     */
    readonly header: ISubPaneHeader | undefined;
    /**
     * @remarks
     * Current sorting type for the direct child sub panes.
     *
     */
    readonly subPaneViewSortType: SubPaneViewSortType;
    /**
     * @remarks
     * View control pane for the direct child sub panes, or
     * undefined if not built.
     *
     */
    readonly viewControlPane: IListViewControlPane | undefined;
    /**
     * @remarks
     * Replaces the default expander header with a fixed-layout
     * header. Available on sub panes only, so root panes never
     * expose it.
     *
     * @param options
     * Options to create the header.
     */
    addHeader(options?: ISubPaneHeaderOptions): ISubPaneHeader;
    /**
     * @remarks
     * Enables sorting and a fixed footer over this sub pane's
     * direct child sub panes. Reuses the list view control,
     * rendered in the root footer or inline.
     *
     * @param options
     * Options to create the view control.
     */
    buildSubPaneViewControl(options: ISubPaneViewControlOptions): IListViewControlPane;
    /**
     * @remarks
     * Updates layout alignment of the sub pane.
     *
     * @param alignment
     * New layout alignment.
     */
    setAlignment(alignment: LayoutAlignment): void;
    /**
     * @remarks
     * Updates layout direction of the sub pane.
     *
     */
    setDirection(layout: PaneLayoutType): void;
    /**
     * @remarks
     * Updates the tags associated with the sub pane, used by a
     * parent sub pane view control's tag filter.
     *
     * @param tags
     * New tags.
     */
    setTags(tags: string[] | undefined): void;
}
