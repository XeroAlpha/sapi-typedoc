/* IMPORT */ import { SettingsUIElementOptions, minecraftserver } from '../index';

export class SettingsUIElement {
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    readonly name: string;
    readonly onChange: (arg0: boolean | number | string | minecraftserver.Vector3) => void;
    readonly options: SettingsUIElementOptions;
    constructor(
        name: string,
        initialValue: boolean | number | string | minecraftserver.Vector3,
        onChange: (arg0: boolean | number | string | minecraftserver.Vector3) => void,
        options?: SettingsUIElementOptions,
    );
}