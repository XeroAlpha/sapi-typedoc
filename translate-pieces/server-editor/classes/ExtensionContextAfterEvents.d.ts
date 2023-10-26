/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 */
export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     */
    readonly modeChange: ModeChangeAfterEventSignal;
}