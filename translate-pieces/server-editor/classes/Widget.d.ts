export class Widget {
    private constructor();
    readonly valid: boolean;
    getIsSelected(): boolean;
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    setIsVisible(isVisible: boolean): void;
}