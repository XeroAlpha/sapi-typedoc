/* IMPORT */ import { Entity, EntityHealSource } from '..';

/**
 * @beta
 * Contains information related to an entity having been
 * healed.
 */
export class EntityHealAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that was healed.
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * Describes the amount of healing.
     *
     */
    readonly healing: number;
    /**
     * @remarks
     * Information on the source of healing.
     *
     */
    readonly healSource: EntityHealSource;
}
