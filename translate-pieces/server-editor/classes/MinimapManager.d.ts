/* IMPORT */ import { BiomeType, RGB } from '../../server';
/* IMPORT */ import { MinimapCreateOptions, MinimapItem, MinimapViewType } from '..';

/**
 * Manage minimap instances within the editor, providing
 * functionality to create, destroy, and retrieve minimap
 * displays.
 *
 */
export class MinimapManager {
    private constructor();
    /**
     * @remarks
     * Create a new minimap instance with the specified view type
     * and dimensions.
     *
     * @worldMutation
     *
     * @throws
     */
    createMinimap(
        viewType: MinimapViewType,
        mapWidth: number,
        mapHeight: number,
        options?: MinimapCreateOptions,
    ): MinimapItem;
    /**
     * @remarks
     * Remove an existing minimap instance from the manager using
     * its unique identifier.
     *
     * @worldMutation
     *
     * @throws
     */
    destroyMinimap(minimapId: string): void;
    /**
     * @remarks
     * Retrieve a list of all active minimap identifiers currently
     * managed by the system.
     *
     * @worldMutation
     *
     * @throws
     */
    getAllMinimapIds(): string[];
    /**
     * @remarks
     * Retrieve a specific minimap instance using its unique
     * identifier.
     *
     * @worldMutation
     *
     * @throws
     */
    getMinimap(minimapId: string): MinimapItem;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setVanillaBiomeColorMap(minimapId: string, colorMap: Record<string, RGB>): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    updateVanillaColorMap(minimapId: string, biomeType: BiomeType, color: RGB): void;
}
