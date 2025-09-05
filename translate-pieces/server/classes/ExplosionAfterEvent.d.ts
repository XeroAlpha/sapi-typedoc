/* IMPORT */ import { Block, Dimension, Entity } from '..';

/**
 * Contains information regarding an explosion that has
 * happened.
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where the explosion has occurred.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
    /**
     * @remarks
     * A collection of blocks impacted by this explosion event.
     *
     */
    getImpactedBlocks(): Block[];
}
