/* IMPORT */ import { BlockBoundingBox, Dimension } from '..';

/**
 * @beta
 * A context which provides information about a specific
 * ticking area.
 */
export interface TickingArea {
    /**
     * @remarks
     * The box which contains all the ticking blocks in the ticking
     * area.
     *
     */
    boundingBox: BlockBoundingBox;
    /**
     * @remarks
     * The number of chunks that the ticking area contains.
     *
     */
    chunkCount: number;
    /**
     * @remarks
     * The dimension the ticking area is located.
     *
     */
    dimension: Dimension;
    /**
     * @remarks
     * The unique identifier of the ticking area.
     *
     */
    identifier: string;
    /**
     * @remarks
     * Will be true if all the ticking areas chunks are loaded in
     * ticking and false otherwise.
     *
     */
    isFullyLoaded: boolean;
}
