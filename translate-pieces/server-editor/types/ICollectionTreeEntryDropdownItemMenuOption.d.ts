/* IMPORT */ import { ImageResourceData } from '..';

/**
 * Menu options for the collection tree entry dropdown item
 */
export type ICollectionTreeEntryDropdownItemMenuOption = {
    readonly label: string;
    readonly value: string;
    readonly imageData?: ImageResourceData;
};
