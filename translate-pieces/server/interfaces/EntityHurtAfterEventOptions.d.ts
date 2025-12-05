/* IMPORT */ import { Entity, EntityDamageCause, EntityFilter } from '..';

/**
 * @beta
 * Contains optional parameters for registering an entity hurt
 * after event.
 */
export interface EntityHurtAfterEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for damage
     * causes that match.
     *
     */
    allowedDamageCauses?: EntityDamageCause[];
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     *
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     *
     */
    entityTypes?: string[];
}
