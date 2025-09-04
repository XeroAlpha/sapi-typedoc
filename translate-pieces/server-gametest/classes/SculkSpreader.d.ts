/* IMPORT */ import { Vector3 } from '../index';

/**
 * Implements a class that can be used for testing sculk
 * spreading behaviors. This sculk spreader class can drive the
 * growth of sculk around a particular block.
 */
export class SculkSpreader {
    private constructor();
    /**
     * @remarks
     * Gets the maximum charge of a sculk spreader.
     *
     * @throws This property can throw when used.
     */
    readonly maxCharge: number;
    /**
     * @remarks
     * Adds a cursor - which is a notional waypoint that the sculk
     * will spread in the direction of.
     *
     * @worldMutation
     *
     */
    addCursorsWithOffset(offset: Vector3, charge: number): void;
    /**
     * @remarks
     * Retrieves the current position of the specified cursor.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): Vector3;
    /**
     * @remarks
     * Returns a number of overall cursors for this sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * Gets the total current charge of the sculk spreader.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
}