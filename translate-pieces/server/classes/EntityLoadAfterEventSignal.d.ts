/* IMPORT */ import { EntityLoadAfterEvent } from '../index';

/**
 * Registers a script-based event handler for handling what
 * happens when an entity loads.
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity loads.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Function that handles the load event.
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}