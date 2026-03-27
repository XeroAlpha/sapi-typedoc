/**
 * @beta
 */
export interface CustomTexture {
    /**
     * @remarks
     * The height of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconHeight: number;
    /**
     * @remarks
     * The width of the icon, in relative units. Value must be
     * between 0.0 and 1.0, inclusive.
     *
     * Bounds: [0, 1]
     */
    iconWidth: number;
    /**
     * @remarks
     * The resource path to the custom texture. This should be a
     * valid string path to a texture asset.
     *
     */
    path: string;
}
