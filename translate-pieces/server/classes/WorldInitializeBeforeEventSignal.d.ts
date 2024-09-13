/* IMPORT */ import { WorldInitializeBeforeEvent } from '../index';

/**
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 */
export class WorldInitializeBeforeEventSignal {
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
    subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void;
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
    unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void;
}