/* IMPORT */ import { ThemeSettingsColorKey, minecraftserver } from '../index';

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: minecraftserver.RGBA;
    readonly colorKey: ThemeSettingsColorKey;
}