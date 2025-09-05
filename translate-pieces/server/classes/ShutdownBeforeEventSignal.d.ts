/* IMPORT */ import { ShutdownEvent } from '..';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires before the game world shuts down. This
 * event occurs after players have left, but before the world
 * has closed.
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a new subscriber callback to this event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function callback that is called when this event fires.
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * Removes a subscriber callback previously subscribed to via
     * the subscribe method.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function closure that was previously passed to the subscribe
     * method.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}
