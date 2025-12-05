/* IMPORT */ import { IPropertyItemOptionsBase, LayoutAlignment } from '..';

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
     * Whether to show me marker on the minimap. If undefined,
     * defaults to true.
     *
     */
    isMeMarkerShown?: boolean;
    /**
     * @remarks
     * Whether to show multiplayer markers on the minimap. If
     * undefined, defaults to false.
     *
     */
    isMultiplayerMarkerShown?: boolean;
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
     * Called when map is clicked.
     *
     */
    onClick?: (x: number, y: number) => void;
}
