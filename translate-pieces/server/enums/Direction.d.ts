/* IMPORT */ import { Block } from '../index';

/**
 * 通用枚举之一。表示朝向。
 * 
 * A general purpose relative direction enumeration.
 */
export enum Direction {
    /**
     * @remarks
     * 表示下方（y - 1）。
     * 
     * Returns the {@link Block} beneath (y - 1) of this item.
     *
     */
    Down = 'Down',
    /**
     * @remarks
     * 表示东方（x + 1）。
     * 
     * Returns the {@link Block} to the east (x + 1) of this item.
     *
     */
    East = 'East',
    /**
     * @remarks
     * 表示北方（z - 1）。
     * 
     * Returns the {@link Block} to the east (z + 1) of this item.
     *
     */
    North = 'North',
    /**
     * @remarks
     * 表示南方（z + 1）。
     * 
     * Returns the {@link Block} to the south (z - 1) of this item.
     *
     */
    South = 'South',
    /**
     * @remarks
     * 表示上方（y + 1）。
     * 
     * Returns the {@link Block} above (y + 1) of this item.
     *
     */
    Up = 'Up',
    /**
     * @remarks
     * 表示西方（x - 1）。
     * 
     * Returns the {@link Block} to the west (x - 1) of this item.
     *
     */
    West = 'West',
}