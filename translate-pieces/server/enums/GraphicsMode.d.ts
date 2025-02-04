/**
 * @beta
 * Describes the graphics mode of a client. Used by {@link
 * Player.graphicsMode}
 *
 * 表示客户端的图形模式。由 {@link Player.graphicsMode} 使用。
 */
export enum GraphicsMode {
	/**
     * @remarks
     * 
     * A graphics mode that refers to the Deferred Technical
     * Preview graphics mode setting.
     * 
     * 表示延迟技术预览图形模式设置。
     */
	Deferred = 'Deferred',
	/**
	 * @remarks
	 *
	 * A graphics mode that refers to the Fancy graphics mode
	 * setting. Most special graphics effects are turned on in this
	 * setting.
     * 
	 * 表示高级图形模式设置。在此设置中，大多数特殊图形效果都会开启。
	 */
	Fancy = 'Fancy',
	/**
	 * @remarks
	 *
	 * A graphics mode that refers to the Ray Traced graphics mode
	 * setting. This setting enables ray tracing.
	 *
     * 表示光线追踪图形模式设置。此设置会启用光线追踪。
	 */
	RayTraced = 'RayTraced',
	/**
	 * @remarks
	 
	 *
	 * A graphics mode that refers to the Simple graphics mode
	 * setting. Most graphics effects are turned off in this
	 * setting.
	 *
     * 表示简单图形模式设置。在此设置中，大多数图形效果都会关闭。
	 */
	Simple = 'Simple',
}
