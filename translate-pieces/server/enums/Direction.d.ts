/* IMPORT */ import { Block } from '..';

/**
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @remarks
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @remarks
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @remarks
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @remarks
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}
