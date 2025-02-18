/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}