/* IMPORT */ import { PressurePlatePushAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * pushed.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is pushed.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}