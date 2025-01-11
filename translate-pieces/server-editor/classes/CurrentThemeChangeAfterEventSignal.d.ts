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
    subscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): (arg0: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): void;
}