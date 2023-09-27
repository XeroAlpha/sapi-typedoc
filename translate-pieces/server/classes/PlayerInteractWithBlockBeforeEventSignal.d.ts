/**
 * @beta
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}