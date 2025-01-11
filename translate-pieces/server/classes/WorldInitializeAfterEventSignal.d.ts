/* IMPORT */ import { WorldInitializeAfterEvent } from '../index';

/**
 * Manages callbacks that are run on the first tick of the
 * World. Do note that this event may run multiple times within
 * a session in the case that the /reload command is used.
 */
export class WorldInitializeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: WorldInitializeAfterEvent) => void): (arg0: WorldInitializeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: WorldInitializeAfterEvent) => void): void;
}