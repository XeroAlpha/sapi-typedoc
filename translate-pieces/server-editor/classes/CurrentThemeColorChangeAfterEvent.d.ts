/* IMPORT */ import { RGBA } from '../../server';

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: RGBA;
    readonly colorKey: string;
}
