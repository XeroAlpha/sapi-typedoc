/* IMPORT */ import { BlockFilter, ContainerAccessSourceFilter } from '..';

/**
 * @rc
 * Options used to filter block container access events.
 */
export interface BlockContainerAccessEventOptions {
    /**
     * @remarks
     * If present will filter which container access sources can
     * trigger the event.
     *
     */
    accessSourceFilter?: ContainerAccessSourceFilter;
    /**
     * @remarks
     * If present will filter which container blocks can trigger
     * the event.
     *
     */
    blockFilter?: BlockFilter;
}
