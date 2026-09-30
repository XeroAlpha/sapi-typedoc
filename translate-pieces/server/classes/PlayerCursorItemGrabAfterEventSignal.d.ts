/* IMPORT */ import { PlayerCursorItemGrabAfterEvent } from '..';

/**
 * Manages callbacks for items grabbed from a container to a
 * player's cursor.
 */
export class PlayerCursorItemGrabAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that is called when a player grabs an item
     * from a container to their cursor.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback function invoked when the event fires.
     */
    subscribe(callback: (arg0: PlayerCursorItemGrabAfterEvent) => void): (arg0: PlayerCursorItemGrabAfterEvent) => void;
    /**
     * @remarks
     * Removes a previously registered event callback.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * The callback function to remove.
     */
    unsubscribe(callback: (arg0: PlayerCursorItemGrabAfterEvent) => void): void;
}
