/* IMPORT */ import { EntityFilter, EntityHealCause } from '..';

/**
 * @beta
 * Contains optional parameters for registering an entity heal
 * event.
 */
export interface EntityHealEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for healing
     * causes that match.
     *
     */
    allowedHealCauses?: EntityHealCause[];
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
}
