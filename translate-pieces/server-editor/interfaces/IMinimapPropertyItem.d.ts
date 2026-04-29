/* IMPORT */ import { IPropertyItemBase, MinimapMarkerType } from '..';

/**
 * A property item which supports Minimap properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMinimapPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Id of the map.
     *
     */
    readonly mapId: string;
    /**
     * @remarks
     * Height of the map image.
     *
     */
    readonly mapImageHeight: number;
    /**
     * @remarks
     * Width of the map image.
     *
     */
    readonly mapImageWidth: number;
    /**
     * @remarks
     * Get visibility for a specific marker type.
     *
     * @param type
     * The marker type to query.
     */
    isMarkerTypeVisible(type: MinimapMarkerType): boolean;
    /**
     * @remarks
     * Get me marker visibility.
     *
     */
    isMeMarkerShown(): boolean;
    /**
     * @remarks
     * Register a custom marker icon for UI rendering.
     *
     * @param iconIdentifier
     * The iconIdentifier string.
     * @param imagePath
     * The image resource path.
     */
    registerCustomMarkerIcon(iconIdentifier: string, imagePath: string): void;
    /**
     * @remarks
     * Updates the size of the map image.
     *
     * @param width
     * New width of the image.
     * @param height
     * New height of the image.
     */
    resizeMapImage(width: number, height: number): void;
    /**
     * @remarks
     * Set visibility for a specific marker type.
     *
     * @param type
     * The marker type to toggle.
     * @param visible
     * Whether the marker type should be visible.
     */
    setMarkerTypeVisible(type: MinimapMarkerType, visible: boolean): void;
    /**
     * @remarks
     * Set me marker visibility.
     *
     */
    setMeMarkerShown(shown: boolean): void;
    /**
     * @remarks
     * Unregister a custom marker icon.
     *
     * @param iconIdentifier
     * The iconIdentifier string.
     */
    unregisterCustomMarkerIcon(iconIdentifier: string): void;
}
