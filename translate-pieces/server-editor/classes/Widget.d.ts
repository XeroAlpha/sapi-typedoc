export class Widget {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    deleteWidget(): void;
    getIsSelected(): boolean;
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setIsSelected(isSelected: boolean): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setIsVisible(isVisible: boolean): void;
}