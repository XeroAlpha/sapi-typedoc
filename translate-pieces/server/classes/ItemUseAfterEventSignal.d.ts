/**
 * @beta
 * Manages callbacks that are connected to an item use event.
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}