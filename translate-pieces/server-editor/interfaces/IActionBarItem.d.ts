/**
 * Registered item handle in the Action Bar collection.
 */
export interface IActionBarItem {
    /**
     * @remarks
     * Returns the current enabled state of the item.
     *
     */
    getEnabled: () => boolean;
    /**
     * @remarks
     * Unique identifier of the item.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Text label of the item.
     *
     */
    readonly label: string;
    /**
     * @remarks
     * Modify enabled state of the item.
     *
     */
    setEnabled: (enabled: boolean) => void;
}
