/**
 * @beta
 * Data for an event that happens when an entity is removed
 * from the world (for example, the entity is unloaded because
 * it is not close to players.)
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Id of the entity that was removed.
     *
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * Identifier of the type of the entity removed - for example,
     * 'minecraft:skeleton'.
     *
     */
    readonly typeId: string;
}