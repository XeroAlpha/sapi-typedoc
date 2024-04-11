/* IMPORT */ import { minecraftserver } from '../index';

export class SettingsUIElement {
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    readonly max?: number;
    readonly min?: number;
    readonly name: string;
    readonly onChange: (arg: boolean | number | string | minecraftserver.Vector3) => boolean;
    readonly options?: string[];
    constructor(
        name: string,
        initialValue: boolean | number | string | minecraftserver.Vector3,
        onChange: (arg: boolean | number | string | minecraftserver.Vector3) => boolean,
        min?: number,
        max?: number,
        options?: string[],
    );
}