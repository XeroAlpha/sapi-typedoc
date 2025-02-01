/**
 * @beta
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 */
export enum GraphicsMode {
    /**
     * @remarks
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * A graphics mode that refers to the Fancy graphics mode
     * setting. Most special graphics effects are turned on in this
     * setting.
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * A graphics mode that refers to the Ray Traced graphics mode
     * setting. This setting enables ray tracing.
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * A graphics mode that refers to the Simple graphics mode
     * setting. Most graphics effects are turned off in this
     * setting.
     *
     */
    Simple = 'Simple',
}