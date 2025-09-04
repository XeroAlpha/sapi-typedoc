/* IMPORT */ import { GraphicsMode, GraphicsSettingsProperty } from '../index';

/**
 * Defines type information for graphics settings properties.
 */
export type GraphicsSettingsPropertyTypeMap = {
    [GraphicsSettingsProperty.GraphicsMode]?: GraphicsMode;
    [GraphicsSettingsProperty.ShowInvisibleBlocks]?: boolean;
    [GraphicsSettingsProperty.ShowChunkBoundaries]?: boolean;
    [GraphicsSettingsProperty.ShowCompass]?: boolean;
    [GraphicsSettingsProperty.NightVision]?: boolean;
    [GraphicsSettingsProperty.ShowToastNotifications]?: boolean;
    [GraphicsSettingsProperty.DisableEntityRendering]?: boolean;
    [GraphicsSettingsProperty.DisableTerrainRendering]?: boolean;
    [GraphicsSettingsProperty.DisableWeatherRendering]?: boolean;
    [GraphicsSettingsProperty.DisableParticleRendering]?: boolean;
    [GraphicsSettingsProperty.DisableBlockEntityRendering]?: boolean;
};