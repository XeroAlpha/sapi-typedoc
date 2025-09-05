/**
 * Specifies how a structure should be mirrored when placed.
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * No mirroring.
     *
     */
    None = 'None',
    /**
     * @remarks
     * Structure is mirrored across the X axis.
     *
     */
    X = 'X',
    /**
     * @remarks
     * Structure is mirrored across both the X and Z axes.
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * Structure is mirrored across the Z axis.
     *
     */
    Z = 'Z',
}
