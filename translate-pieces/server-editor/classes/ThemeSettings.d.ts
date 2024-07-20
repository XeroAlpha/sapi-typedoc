/* IMPORT */ import { ThemeSettingsColorKey, minecraftserver } from '../index';

export class ThemeSettings {
    private constructor();
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
}