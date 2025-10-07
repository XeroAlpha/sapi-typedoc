/* IMPORT */ import { ItemType } from '..';

/**
 * The error called when an item is invalid. This can occur
 * when accessing components on a removed item.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks
     * The type of the item that is now invalid.
     *
     * @earlyExecution
     *
     */
    itemType: ItemType;
}
