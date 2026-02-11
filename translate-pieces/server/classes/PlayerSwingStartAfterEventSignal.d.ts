/* IMPORT */ import { PlayerSwingEventOptions, PlayerSwingStartAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when a player starts
 * to swing their arm (e.g. attacking, using an item,
 * interacting).
 */
export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player starts to
     * swing their arm (e.g. attacking, using an item,
     * interacting).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}
