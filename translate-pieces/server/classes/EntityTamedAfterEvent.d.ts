/* IMPORT */ import { Entity } from '..';

/**
 * @rc
 * Contains data related to an entity being tamed.
 */
export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}
