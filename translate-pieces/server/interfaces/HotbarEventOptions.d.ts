/**
 * Contains additional filtering options for hotbar events.
 */
export interface HotbarEventOptions {
    /**
     * @remarks
     * The slot indexes to consider. Values should be between 0 and
     * 8, inclusive. If not specified, all slots are considered.
     *
     */
    allowedSlots?: number[];
}
