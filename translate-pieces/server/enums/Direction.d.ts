/**
 * @beta
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @beta
     * @remarks
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}