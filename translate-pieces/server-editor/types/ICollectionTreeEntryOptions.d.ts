/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ICollectionTreeEntry, ImageResourceData } from '..';

/**
 * Options to create an entry in a collection tree folder
 */
export type ICollectionTreeEntryOptions = {
    selected?: boolean;
    image?: ImageResourceData;
    selectable?: boolean;
    removable?: boolean;
    color?: RGBA;
    userData?: unknown;
    onSelectedChange?: (selected: boolean, folder: ICollectionTreeEntry) => void;
};
