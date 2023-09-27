export interface IPropertyItemOptionsVector3 extends IPropertyItemOptions {
    /**
     * @remarks
     * The max possible value for the X axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxX?: number;
    /**
     * @remarks
     * The max possible value for the Y axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxY?: number;
    /**
     * @remarks
     * The max possible value for the z axis. By default
     * Number.MAX_SAFE_INTEGER
     *
     */
    maxZ?: number;
    /**
     * @remarks
     * The min possible value for the X axis. By default 0
     *
     */
    minX?: number;
    /**
     * @remarks
     * The min possible value for the Y axis. By default 0
     *
     */
    minY?: number;
    /**
     * @remarks
     * The min possible value for the Z axis. By default 0
     *
     */
    minZ?: number;
}