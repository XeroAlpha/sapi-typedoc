/* IMPORT */ import { ModeChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a player editor
 * mode changes.
 */
export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}