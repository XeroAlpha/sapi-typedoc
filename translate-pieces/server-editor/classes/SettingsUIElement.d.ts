export class SettingsUIElement {
    readonly initialValue: boolean | number;
    readonly max?: number;
    readonly min?: number;
    readonly name: string;
    readonly valueChanged?: (arg: boolean | number) => void;
    constructor(
        name: string,
        initialValue: boolean | number,
        min?: number,
        max?: number,
        valueChanged?: (arg: boolean | number) => void,
    );
}