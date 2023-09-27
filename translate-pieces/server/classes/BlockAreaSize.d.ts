/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
    /**
     * @remarks
     * X size (west to east) component of this block area.
     *
     */
    x: number;
    /**
     * @remarks
     * Y size (down to up) of this block area size.
     *
     */
    y: number;
    /**
     * @remarks
     * Z size (south to north) of this block area size.
     *
     */
    z: number;
    /**
     * @remarks
     * Creates a new BlockAreaSize object.
     *
     */
    constructor(x: number, y: number, z: number);
    /**
     * @remarks
     * Tests whether this block area size is equal to another
     * BlockAreaSize object.
     *
     */
    equals(other: BlockAreaSize): boolean;
}