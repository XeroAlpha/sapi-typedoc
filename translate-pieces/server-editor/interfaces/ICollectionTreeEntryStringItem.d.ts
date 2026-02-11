/* IMPORT */ import { ICollectionTreeEntryItem } from '..';

export interface ICollectionTreeEntryStringItem extends ICollectionTreeEntryItem {
    /**
     * @remarks
     * Value of the entry item.
     *
     */
    readonly value: string;
}
