/* IMPORT */ import { Entity, EntityHealSource } from '..';

/**
 * @rc
 * Contains information related to an entity that will be
 * healed.
 */
export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * Entity that will be healed.
     *
     */
    readonly healedEntity: Entity;
    /**
     * @remarks
     * Describes the amount of healing.
     *
     */
    healing: number;
    /**
     * @remarks
     * Information on the source of healing.
     *
     */
    readonly healSource: EntityHealSource;
}
