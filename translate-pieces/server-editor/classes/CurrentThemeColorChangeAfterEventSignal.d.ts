/* IMPORT */ import { CurrentThemeColorChangeAfterEvent } from '../index';

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): void;
}