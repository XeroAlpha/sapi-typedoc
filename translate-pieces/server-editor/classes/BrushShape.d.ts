/* IMPORT */ import { SettingsUIElement, minecraftserver } from '../index';

export class BrushShape {
    readonly getSettingsUIElements: () => SettingsUIElement[];
    readonly icon: string;
    readonly name: string;
    readonly rebuild: () => minecraftserver.CompoundBlockVolume;
    constructor(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUI: () => SettingsUIElement[],
    );
}