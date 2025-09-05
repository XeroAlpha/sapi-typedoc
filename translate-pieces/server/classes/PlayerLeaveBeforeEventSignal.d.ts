/* IMPORT */ import { PlayerLeaveBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called when a player leaves
     * the world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}
