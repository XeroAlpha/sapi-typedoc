/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockBeforeEvent } from '..';

/**
 * @beta
 * Manages callbacks that are connected to before a block is
 * placed by a player.
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is placed
     * by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an block is
     * placed by a player.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}
