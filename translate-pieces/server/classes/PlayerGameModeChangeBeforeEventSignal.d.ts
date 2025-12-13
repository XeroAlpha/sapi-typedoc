/* IMPORT */ import { PlayerGameModeChangeBeforeEvent } from '..';

/**
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     * @returns
     * Closure that is called with restricted-execution privilege.
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with restricted-execution privilege.
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}
