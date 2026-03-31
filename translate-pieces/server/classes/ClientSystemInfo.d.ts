/* IMPORT */ import { PlatformType, RawMessage, SystemInfo } from '..';

/**
 * Contains the device information for a client instance.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    /**
     * @beta
     * @remarks
     * The locale selected by the client (e.g., en_US, fr_FR,
     * ja_JP). Note that in most cases, server scripts should not
     * use this property to manually localize text. Instead, use
     * {@link RawMessage} with a translate field to send
     * localization keys, allowing each client to resolve them in
     * their own language automatically. Direct use of locale for
     * localization is fragile and may produce unexpected results
     * when players with different languages are on the same
     * server.
     *
     */
    readonly locale: string;
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
