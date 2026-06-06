/* IMPORT */ import { EntityFilter } from '..';

/**
 * @beta
 * Contains options for filtering entity tamed events.
 */
export interface EntityTamedEventFilter {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}
