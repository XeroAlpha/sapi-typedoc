/* IMPORT */ import { PlayerInventoryType } from '../index';

/**
 * @rc
 * Contains additional filtering options for inventory item
 * events.
 */
export interface InventoryItemEventOptions {
    /**
     * @remarks
     * The slot indexes to consider. Values should be positive
     * numbers. If not specified, all slots are considered.
     *
     */
    allowedSlots?: number[];
    /**
     * @remarks
     * The names for the items to exclude.
     *
     */
    excludeItems?: string[];
    /**
     * @remarks
     * The item tags to exclude.
     *
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Flag to specify to ignore quantity changes only. True to
     * ignore quantity changes, false to not ignore quantity
     * changes.
     *
     */
    ignoreQuantityChange?: boolean;
    /**
     * @remarks
     * The item names to consider.
     *
     */
    includeItems?: string[];
    /**
     * @remarks
     * The item tags to consider.
     *
     */
    includeTags?: string[];
    /**
     * @remarks
     * The player inventory type to consider.
     *
     */
    inventoryType?: PlayerInventoryType;
}