export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Text to display.
     *
     */
    text: string;
    hide(): void;
    show(): void;
}