/* IMPORT */ import { TimeMarker, WorldClock, WorldClockOnTimeMarkerAfterEvent, WorldClockTimeMarkerEventOptions } from '..';

/**
 * @beta
 * Manages callbacks that are connected to when the time of a
 * {@link WorldClock} hits a {@link TimeMarker}.
 */
export class WorldClockOnTimeMarkerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world clock's
     * time hits a time marker.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void,
        options?: WorldClockTimeMarkerEventOptions,
    ): (arg0: WorldClockOnTimeMarkerAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world clock's
     * time hits a time marker.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldClockOnTimeMarkerAfterEvent) => void): void;
}
