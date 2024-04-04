/* IMPORT */ import { WorldInitializeAfterEvent } from '../index';

/**
 * @beta
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
     */
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}