/* IMPORT */ import { Vector3 } from '../../server';

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
     * @throws
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
     * @throws
     */
    getCursorPosition(index: number): Vector3;
    /**
     * @remarks
     * Returns a number of overall cursors for this sculk spreader.
     *
     * @worldMutation
     *
     * @throws
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * Gets the total current charge of the sculk spreader.
     *
     * @worldMutation
     *
     * @throws
     */
    getTotalCharge(): number;
}
