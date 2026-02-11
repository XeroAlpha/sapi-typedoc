/* IMPORT */ import { ICollectionTreeEntryItem } from '..';

export interface ICollectionTreeEntryNumberItem extends ICollectionTreeEntryItem {
    /**
     * @remarks
     * Value of the entry item.
     *
     */
    readonly value: number;
}
