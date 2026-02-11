/* IMPORT */ import { BasicTooltipContent, CollectionTreeEntryItemType, ICollectionTreeEntry, LocalizedString } from '..';

export interface ICollectionTreeEntryItem {
    /**
     * @remarks
     * Enabled state of the entry.
     *
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * Tree entry that owns the item.
     *
     */
    readonly parentEntry: ICollectionTreeEntry;
    /**
     * @remarks
     * Type of the item.
     *
     */
    readonly type: CollectionTreeEntryItemType;
    /**
     * @remarks
     * Visibility state of the entry.
     *
     */
    readonly visible: boolean;
    /**
     * @remarks
     * Updates enabled state of the item.
     *
     * @param enabled
     * New value.
     */
    setEnabled(enabled: boolean): void;
    /**
     * @remarks
     * Updates title of the item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the item.
     *
     */
    setTooltip(title: BasicTooltipContent | undefined): void;
    /**
     * @remarks
     * Updates visibility of the item.
     *
     * @param visible
     * New value.
     */
    setVisible(visible: boolean): void;
}
