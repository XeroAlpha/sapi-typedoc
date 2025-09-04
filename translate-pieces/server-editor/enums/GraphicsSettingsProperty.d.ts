/**
 * Enumeration representing identifiers for graphics settings
 * properties.
 */
export enum GraphicsSettingsProperty {
    DisableBlockEntityRendering = 'DisableBlockEntityRendering',
    DisableEntityRendering = 'DisableEntityRendering',
    DisableParticleRendering = 'DisableParticleRendering',
    DisableTerrainRendering = 'DisableTerrainRendering',
    DisableWeatherRendering = 'DisableWeatherRendering',
    GraphicsMode = 'GraphicsMode',
    NightVision = 'NightVision',
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