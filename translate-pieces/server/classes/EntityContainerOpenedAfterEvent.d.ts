/* IMPORT */ import { ContainerAccessSource, Entity } from '..';

/**
 * @beta
 * Contains information regarding a specific entity container
 * being opened.
 */
export class EntityContainerOpenedAfterEvent {
    private constructor();
    readonly entity: Entity;
    /**
     * @remarks
     * The source of the entity container being opened.
     *
     */
    readonly openSource: ContainerAccessSource;
}
