/* IMPORT */ import { EntityFilter, ItemFilter } from '..';

/**
 * @beta
 * An interface that is passed into {@link
 * @minecraft/Server.EntityItemDropAfterEventSignal.subscribe}
 * that filters out which events are passed to the provided
 * callback.
 */
export interface EntityItemDropEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match.
     *
     */
    entityFilter?: EntityFilter;
    /**
     * @remarks
     * If this value is set, this event will only fire if an item
     * in the event matches.
     *
     */
    itemFilter?: ItemFilter;
}
