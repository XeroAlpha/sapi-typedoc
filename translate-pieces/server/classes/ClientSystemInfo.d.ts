/* IMPORT */ import { PlatformType, SystemInfo } from '..';

/**
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @remarks
     * The max render distance for the device in chunks.
     *
     */
    readonly maxRenderDistance: number;
    /**
     * @remarks
     * The platform type of the device.
     *
     */
    readonly platformType: PlatformType;
}
