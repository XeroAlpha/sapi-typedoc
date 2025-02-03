/* IMPORT */ import { PlayerLeaveAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}