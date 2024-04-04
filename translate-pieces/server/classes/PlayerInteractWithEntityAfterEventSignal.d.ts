/* IMPORT */ import { PlayerInteractWithEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a player
 * interacts with an entity.
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with an entity.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}