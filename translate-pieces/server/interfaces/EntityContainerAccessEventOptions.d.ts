/* IMPORT */ import { ContainerAccessSourceFilter, EntityFilter } from '..';

/**
 * @beta
 * Options used to filter entity container access events.
 */
export interface EntityContainerAccessEventOptions {
    /**
     * @remarks
     * If present will filter which container access sources can
     * trigger the event.
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * If present will filter which entity containers can trigger
     * the event.
     *
     */
    entityFilter?: EntityFilter;
}
