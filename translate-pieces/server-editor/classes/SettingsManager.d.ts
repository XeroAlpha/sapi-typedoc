/* IMPORT */ import { AudioSettings, GraphicsSettings, SpeedSettings, ThemeSettings } from '..';

/**
 * The SettingsManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management all
 * player settings.
 */
export class SettingsManager {
    private constructor();
    readonly audio: AudioSettings;
    /**
     * @remarks
     * Manages graphics settings properties.
     *
     */
    readonly graphics: GraphicsSettings;
    readonly speed: SpeedSettings;
    readonly theme: ThemeSettings;
}
