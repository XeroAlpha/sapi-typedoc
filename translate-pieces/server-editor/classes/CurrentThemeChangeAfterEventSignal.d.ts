/* IMPORT */ import { CurrentThemeChangeAfterEvent } from '../index';

export class CurrentThemeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): (arg: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): void;
}