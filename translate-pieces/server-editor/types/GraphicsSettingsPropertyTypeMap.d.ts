/* IMPORT */ import { GraphicsSettingsProperty, minecraftserver } from '../index';

/**
 * Defines type information for graphics settings properties.
 */
export type GraphicsSettingsPropertyTypeMap = {
    [GraphicsSettingsProperty.GraphicsMode]?: minecraftserver.GraphicsMode;
    [GraphicsSettingsProperty.ShowInvisibleBlocks]?: boolean;
    [GraphicsSettingsProperty.ShowChunkBoundaries]?: boolean;
    [GraphicsSettingsProperty.ShowCompass]?: boolean;
    [GraphicsSettingsProperty.NightVision]?: boolean;
    [GraphicsSettingsProperty.ShowToastNotifications]?: boolean;
};