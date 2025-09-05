/* IMPORT */ import { PlayerJoinAfterEvent } from '..';

/**
 * Manages callbacks that are connected to a player joining the
 * world.
 */
export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player joins the
     * world.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}
