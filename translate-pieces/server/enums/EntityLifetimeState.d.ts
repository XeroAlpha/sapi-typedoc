/**
 * @beta
 * Describes the lifetime state of an Entity. For example,
 * Entities can be loaded or unloaded depending on whether
 * their chunks are loaded or when they move across dimensions.
 */
export enum EntityLifetimeState {
    /**
     * @beta
     * @remarks
     * Corresponding object is loaded.
     *
     */
    Loaded = 'Loaded',
    /**
     * @beta
     * @remarks
     * Corresponding object is now unloaded. Unloaded entities
     * cannot be manipulated. However, if an unloaded Entity later
     * reloads, it becomes valid and can once again be manipulated.
     *
     */
    Unloaded = 'Unloaded',
}