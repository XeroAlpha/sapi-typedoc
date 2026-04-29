/* IMPORT */ import { EntityFilter } from '..';

/**
 * @rc
 * Options for use when filtering container access sources.
 */
export interface ContainerAccessSourceFilter {
    /**
     * @remarks
     * Filter options for the source entity accessing the
     * container.
     *
     */
    entityFilter?: EntityFilter;
}
