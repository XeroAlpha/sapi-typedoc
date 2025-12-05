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
     * Adds a marker to the minimap.
     *
     * @param markerType
     * The type of marker to add.
     */
    assignMarker(markerType: MinimapMarkerType): void;
    /**
     * @remarks
     * Refreshes the map.
     *
     */
    refreshMap(): void;
    /**
     * @remarks
     * Removes a marker from the minimap.
     *
     * @param markerType
     * The type of marker to remove.
     */
    removeMarker(markerType: MinimapMarkerType): void;
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
}
