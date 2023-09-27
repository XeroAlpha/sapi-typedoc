/**
 * @beta
 * An enumeration describing initialization cause of an entity.
 */
export enum EntityInitializationCause {
    /**
     * @beta
     * @remarks
     * Case when an entity is created as child of other entity or
     * entities, e.g., cows making a cow or slimes making smaller
     * slimes after dying.
     *
     */
    Born = 'Born',
    /**
     * @beta
     * @remarks
     * Case when an entity is created by an event, e.g., Wandering
     * trader spawning llamas.
     *
     */
    Event = 'Event',
    Loaded = 'Loaded',
    /**
     * @beta
     * @remarks
     * Case when an entity is naturally spawned in the world.
     *
     */
    Spawned = 'Spawned',
    /**
     * @beta
     * @remarks
     * Case when an entity is transformed into another entity.
     *
     */
    Transformed = 'Transformed',
}