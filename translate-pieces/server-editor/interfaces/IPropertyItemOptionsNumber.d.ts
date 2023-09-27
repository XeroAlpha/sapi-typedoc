export interface IPropertyItemOptionsNumber extends IPropertyItemOptions {
    /**
     * @remarks
     * The min possible value for the number.
     *
     */
    max?: number;
    /**
     * @remarks
     * The max possible value for the number.
     *
     */
    min?: number;
    /**
     * @remarks
     * If UI should show slider control.
     *
     */
    showSlider?: boolean;
}