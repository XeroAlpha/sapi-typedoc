/* IMPORT */ import { Entity } from '..';

/**
 * @beta
 * Contains data related to an entity beginning to sneak.
 */
export class EntityStartSneakingAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that has started sneaking.
     *
     */
    readonly entity: Entity;
}
