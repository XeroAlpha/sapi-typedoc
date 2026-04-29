/* IMPORT */ import { IPropertyItemOptionsBase, LayoutAlignment, MinimapMarkerType } from '..';

/**
 * Optional properties for Minimap property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMinimapPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Alignment of the map in the container. If not defined,
     * LayoutAlignment.Center is used.
     *
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Whether the minimap is clickable. If undefined, defaults to
     * true.
     *
     */
    clickable?: boolean;
    /**
     * @remarks
     * Custom marker icon registration. Maps the iconIdentifier
     * (used when adding custom markers via addCustomMarker) to
     * image resource paths for UI rendering. Only needed for
     * Custom marker type. Multiplayer and Location use built-in
     * icons.
     *
     */
    customMarkerIcons?: Record<string, string>;
    /**
     * @remarks
     * Whether to show me marker on the minimap. If undefined,
     * defaults to true.
     *
     */
    isMeMarkerShown?: boolean;
    /**
     * @remarks
     * Size of the map image. If undefined, defaults to 35.
     *
     */
    mapImageSize?:
        | number
        | {
              width: number;
              height: number;
          };
    /**
     * @remarks
     * Called when the minimap is clicked.
     *
     */
    onClick?: (worldX: number, worldY: number, worldZ: number) => void;
    /**
     * @remarks
     * Per-type marker visibility. If omitted, no marker types are
     * shown. Only controls presentation. Markers must be added via
     * C++ API to exist.
     *
     */
    visibleMarkerTypes?: MinimapMarkerType[];
}
