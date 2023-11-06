/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}