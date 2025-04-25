/* IMPORT */ import { PlayerLeaveAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @rc
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @rc
     * @remarks
     * Removes a callback from being called when a player leaves
     * the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}