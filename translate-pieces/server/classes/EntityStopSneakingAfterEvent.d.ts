/* IMPORT */ import { Entity } from '..';

/**
 * @beta
 * Contains data related to an entity stopping sneaking.
 */
export class EntityStopSneakingAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that has stopped sneaking.
     *
     */
    readonly entity: Entity;
}
