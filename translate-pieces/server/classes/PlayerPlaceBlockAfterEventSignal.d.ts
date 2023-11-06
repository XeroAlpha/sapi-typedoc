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
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}