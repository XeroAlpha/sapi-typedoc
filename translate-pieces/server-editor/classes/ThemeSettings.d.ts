/* IMPORT */ import { ThemeSettingsColorKey, minecraftserver } from '../index';

export class ThemeSettings {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addNewTheme(name: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    deleteTheme(name: string): void;
    getCurrentTheme(): string;
    getThemeList(): string[];
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setCurrentTheme(name: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}