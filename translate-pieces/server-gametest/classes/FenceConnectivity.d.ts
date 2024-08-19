/**
 * @beta
 * Returns information about whether this fence is connected to
 * other fences in several directions.
 */
export class FenceConnectivity {
    private constructor();
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     *
     */
    readonly east: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     *
     */
    readonly north: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     *
     */
    readonly south: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     *
     */
    readonly west: boolean;
}