/* IMPORT */ import { PlayerInputPermissionCategoryChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a players
 * input permissions change.
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players input
     * permissions change.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players input
     * permissions change.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}