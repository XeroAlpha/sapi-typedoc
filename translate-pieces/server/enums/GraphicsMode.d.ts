/**
 * @beta
 * 表示客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 * 
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 */
export enum GraphicsMode {
    /**
     * @remarks
     * 表示延迟技术预览图形模式设置。
     * 
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     *
     */
    Deferred = 'Deferred',
    /**
     * @remarks
     * 表示高级图形模式设置。在此设置中，大多数特殊图形效果都会开启。
     * 
     * A graphics mode that refers to the Fancy graphics mode
     * setting. Most special graphics effects are turned on in this
     * setting.
     *
     */
    Fancy = 'Fancy',
    /**
     * @remarks
     * 表示光线追踪图形模式设置。此设置会启用光线追踪。
     * 
     * A graphics mode that refers to the Ray Traced graphics mode
     * setting. This setting enables ray tracing.
     *
     */
    RayTraced = 'RayTraced',
    /**
     * @remarks
     * 表示简单图形模式设置。在此设置中，大多数图形效果都会关闭。
     * 
     * A graphics mode that refers to the Simple graphics mode
     * setting. Most graphics effects are turned off in this
     * setting.
     *
     */
    Simple = 'Simple',
}