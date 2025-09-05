/* IMPORT */ import { MemoryTier } from '..';

/**
 * Contains device information, like memory tier.
 */
export class SystemInfo {
    private constructor();
    /**
     * @remarks
     * Describes the memory of the device.
     *
     */
    readonly memoryTier: MemoryTier;
}
