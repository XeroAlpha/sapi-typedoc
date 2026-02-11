/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ICollectionTreeEntryDropdownItem, ICollectionTreeEntryDropdownItemParams, ICollectionTreeEntryItem, ICollectionTreeEntryNumberItem, ICollectionTreeEntryNumberItemParams, ICollectionTreeEntryStringItem, ICollectionTreeEntryStringItemParams, ICollectionTreeFolder } from '..';

export interface ICollectionTreeEntry {
    /**
     * @remarks
     * Unique identifier for the entry.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Index of the entry in the folder
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Parent folder of the entry.
     *
     */
    readonly parent: ICollectionTreeFolder;
    /**
     * @remarks
     * Selected state of the entry
     *
     */
    readonly selected: boolean;
    /**
     * @remarks
     * Adds a dropdown item to the entry
     *
     */
    addDropdownItem(params: ICollectionTreeEntryDropdownItemParams): ICollectionTreeEntryDropdownItem;
    /**
     * @remarks
     * Adds a number item to the entry
     *
     */
    addNumberItem(params: ICollectionTreeEntryNumberItemParams): ICollectionTreeEntryNumberItem;
    /**
     * @remarks
     * Adds a string item to the entry
     *
     */
    addStringItem(params: ICollectionTreeEntryStringItemParams): ICollectionTreeEntryStringItem;
    /**
     * @remarks
     * Gets the tree entry item by index
     *
     * @param index
     * Index of the entry item
     */
    getItemByIndex(index: number): ICollectionTreeEntryItem | undefined;
    /**
     * @remarks
     * Set color associated with the entry
     *
     */
    setColor(color: RGBA | undefined): void;
    /**
     * @remarks
     * Set selected state of the entry.
     *
     * @param selected
     * New selected state
     */
    setSelected(selected: boolean): void;
}
