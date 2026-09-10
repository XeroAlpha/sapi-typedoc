/**
 * Enumeration representing identifiers for graphics settings
 * properties.
 */
export enum GraphicsSettingsProperty {
    DisableBlockEntityRendering = 'DisableBlockEntityRendering',
    DisableCloudRendering = 'DisableCloudRendering',
    DisableEntityRendering = 'DisableEntityRendering',
    DisableParticleRendering = 'DisableParticleRendering',
    DisableTerrainRendering = 'DisableTerrainRendering',
    DisableWeatherRendering = 'DisableWeatherRendering',
    GraphicsMode = 'GraphicsMode',
    NightVision = 'NightVision',
    ShowChat = 'ShowChat',
    ShowChunkBoundaries = 'ShowChunkBoundaries',
    ShowCompass = 'ShowCompass',
    /**
     * @remarks
     * Manages rendering of invisible blocks (e.g., barrier, light,
     * structure_void).
     *
     */
    ShowInvisibleBlocks = 'ShowInvisibleBlocks',
    ShowToastNotifications = 'ShowToastNotifications',
}
