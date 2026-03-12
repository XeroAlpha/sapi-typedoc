/* IMPORT */ import { CollectionTreeSortType, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Collection Tree Pane property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ICollectionTreePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Setting true will enable drag and drop support for entries.
     *
     */
    canDragDropEntries?: boolean;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Custom sort type for folders view.
     *
     */
    viewSortType?: CollectionTreeSortType;
}
