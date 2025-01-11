/* IMPORT */ import { ButtonPushAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires when a button is pushed.
 */
export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}