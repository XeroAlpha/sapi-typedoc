/**
 * Pane represents a container for UI components.
 */
export interface IPane {
    /**
     * @remarks
     * Unique identifier for the pane.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Check visibility of the pane
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Hide the pane.
     *
     */
    hide(): void;
    /**
     * @remarks
     * Show the pane and all of its items.
     *
     */
    show(): void;
}