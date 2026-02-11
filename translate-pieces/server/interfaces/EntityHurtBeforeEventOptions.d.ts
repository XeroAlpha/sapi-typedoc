/* IMPORT */ import { EntityDamageCause, EntityFilter } from '..';

/**
 * @rc
 * Contains optional parameters for registering an entity hurt
 * before event.
 */
export interface EntityHurtBeforeEventOptions {
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
     * that match.
     *
     */
    entityFilter?: EntityFilter;
}
