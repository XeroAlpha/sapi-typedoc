/* IMPORT */ import { MinimapItem, MinimapViewType } from '..';

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
     * @throws This function can throw errors.
     */
    createMinimap(viewType: MinimapViewType, mapWidth: number, mapHeight: number): MinimapItem;
    /**
     * @remarks
     * Remove an existing minimap instance from the manager using
     * its unique identifier.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    destroyMinimap(minimapId: string): void;
    /**
     * @remarks
     * Retrieve a list of all active minimap identifiers currently
     * managed by the system.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getAllMinimapIds(): string[];
    /**
     * @remarks
     * Retrieve a specific minimap instance using its unique
     * identifier.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getMinimap(minimapId: string): MinimapItem;
}
