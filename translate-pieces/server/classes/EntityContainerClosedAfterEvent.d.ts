/* IMPORT */ import { ContainerAccessSource, Entity } from '..';

/**
 * @rc
 * Contains information regarding a specific entity container
 * being closed.
 */
export class EntityContainerClosedAfterEvent {
    private constructor();
    /**
     * @remarks
     * The source of the entity container being closed.
     *
     */
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}
