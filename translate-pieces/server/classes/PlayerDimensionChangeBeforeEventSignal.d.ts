/**
 * @beta
 */
export class PlayerDimensionChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: PlayerDimensionChangeBeforeEvent) => void,
    ): (arg: PlayerDimensionChangeBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeBeforeEvent) => void): void;
}