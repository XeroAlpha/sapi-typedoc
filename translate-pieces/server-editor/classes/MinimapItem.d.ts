/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { MinimapMarkerType, MinimapViewType } from '..';

/**
 * A MinimapItem represents an individual minimap instance that
 * manages map data, controls display state, and provides
 * configuration for markers and visual properties.
 */
export class MinimapItem {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * Indicate whether this minimap instance is currently active
     * and being displayed to the player.
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * Add a visual marker of the specified type to the minimap
     * display.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addMarker(markerType: MinimapMarkerType): void;
    /**
     * @remarks
     * Retrieve the color assigned to a specific player on the
     * minimap.
     *
     * @throws This function can throw errors.
     */
    getPlayerColor(playerId: string): RGBA;
    /**
     * @remarks
     * Remove a previously added marker of the specified type from
     * the minimap.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    removeMarker(markerType: MinimapMarkerType): void;
    /**
     * @remarks
     * Control whether the minimap is currently active and visible
     * to the player.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setActive(active: boolean): void;
    /**
     * @remarks
     * Adjust the width and height dimensions of the minimap
     * display.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setSize(mapWidth: number, mapHeight: number): void;
    /**
     * @remarks
     * Change the visual perspective or style of the minimap view.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setViewType(viewType: MinimapViewType): void;
}
