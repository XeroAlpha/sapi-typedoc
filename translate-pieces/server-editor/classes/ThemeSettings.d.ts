/* IMPORT */ import { RGBA } from '../../server';
/* IMPORT */ import { ThemeSettingsColorKey } from '..';

export class ThemeSettings {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, RGBA> | undefined;
    getThemeIdList(): string[];
    /**
     * @throws
     */
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): RGBA;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    setThemeName(id: string, name: string): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: RGBA): void;
}
