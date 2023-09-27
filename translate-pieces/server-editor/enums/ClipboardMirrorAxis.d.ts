/**
 * An enumeration describing the axis on which to mirror
 * clipboard contents when writing to the world
 */
export enum ClipboardMirrorAxis {
    /**
     * @remarks
     * No mirroring
     *
     */
    None = 'None',
    /**
     * @remarks
     * Mirror on the X axis
     *
     */
    X = 'X',
    /**
     * @remarks
     * Mirror on both X and Z axes
     *
     */
    XZ = 'XZ',
    /**
     * @remarks
     * Mirror on the Z axis
     *
     */
    Z = 'Z',
}