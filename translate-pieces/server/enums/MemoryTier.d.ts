/**
 * @rc
 * Describes the memory of a device.
 */
export enum MemoryTier {
    /**
     * @remarks
     * Max memory for Super Low Tier is 1.5GBs.
     *
     */
    SuperLow = 0,
    /**
     * @remarks
     *  Max memory for Low Tier is 2GBs.
     *
     */
    Low = 1,
    /**
     * @remarks
     * Max memory for Mid Tier is 4GBs.
     *
     */
    Mid = 2,
    /**
     * @remarks
     * Max memory for High Tier is 8GBs.
     *
     */
    High = 3,
    /**
     * @remarks
     * Memory for Super High Tier is above 8GBs.
     *
     */
    SuperHigh = 4,
}