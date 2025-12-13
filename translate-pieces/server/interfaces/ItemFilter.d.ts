/* IMPORT */ import { ItemType } from '..';

/**
 * @beta
 * Contains options for filtering items.
 */
export interface ItemFilter {
    /**
     * @remarks
     * If defined, items that match these types are included.
     *
     */
    includeTypes?: (ItemType | string)[];
}
