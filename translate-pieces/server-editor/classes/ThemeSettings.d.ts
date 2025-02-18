/* IMPORT */ import { ThemeSettingsColorKey, minecraftserver } from '../index';

export class ThemeSettings {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined;
    getThemeIdList(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setThemeName(id: string, name: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}