/**
 * Determines how key binding should be processed to fire
 * actions
 */
export declare enum KeyProcessingState {
    /**
     * @remarks
     * Consume key input event and prevent propagation
     *
     */
    Consume = 0,
    /**
     * @remarks
     * Pass key input event to parent context after processing it
     *
     */
    Passthrough = 1,
    /**
     * @remarks
     * Skip key input event processing
     *
     */
    Disabled = 2,
}