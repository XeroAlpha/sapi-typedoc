/**
 * An enumeration describing the amount of rotation to be
 * applied around the Y axis when writing the clipboard to the
 * world
 */
export enum ClipboardRotation {
    /**
     * @remarks
     * No rotation
     *
     */
    None = 'None',
    /**
     * @remarks
     * Rotate by 180 degrees clockwise around the Y axis
     *
     */
    Rotate180 = 'Rotate180',
    /**
     * @remarks
     * Rotate by 270 degrees clockwise around the Y axis
     *
     */
    Rotate270 = 'Rotate270',
    /**
     * @remarks
     * Rotate by 90 degrees clockwise around the Y axis
     *
     */
    Rotate90 = 'Rotate90',
}