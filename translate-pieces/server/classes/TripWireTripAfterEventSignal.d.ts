/* IMPORT */ import { TripWireTripAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
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
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}