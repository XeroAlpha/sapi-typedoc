/**
 * @beta
 * Describes the memory of a device.
 */
export enum MemoryTier {
    /**
     * @remarks
     * Memory not detected.
     *
     */
    Undetermined = 0,
    /**
     * @remarks
     * Max memory for Super Low Tier is 1.5GBs.
     *
     */
    SuperLow = 1,
    /**
     * @remarks
     *  Max memory for Low Tier is 2GBs.
     *
     */
    Low = 2,
    /**
     * @remarks
     * Max memory for Mid Tier is 4GBs.
     *
     */
    Mid = 3,
    /**
     * @remarks
     * Max memory for High Tier is 8GBs.
     *
     */
    High = 4,
    /**
     * @remarks
     * Memory for Super High Tier is above 8GBs.
     *
     */
    SuperHigh = 5,
}