/* IMPORT */ import { TripWireTripAfterEvent } from '..';

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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}
