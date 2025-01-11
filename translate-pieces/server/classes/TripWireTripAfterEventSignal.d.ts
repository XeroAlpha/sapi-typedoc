/* IMPORT */ import { TripWireTripAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 * @seeExample tripWireTripEvent.ts
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}