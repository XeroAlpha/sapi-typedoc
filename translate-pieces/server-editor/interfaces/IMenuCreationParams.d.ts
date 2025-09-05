/**
 * Properties required to create a Menu
 */
export interface IMenuCreationParams {
    /**
     * @remarks
     * Whether the menu should show a checkmark
     *
     */
    checked?: boolean;
    /**
     * @remarks
     * Whether the menu should be enabled or disabled
     *
     */
    enabled?: boolean;
    /**
     * @remarks
     * Whether the menu should have an icon.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Localized display text of the menu
     *
     */
    label: string;
    /**
     * @remarks
     * Whether the menu should have a tooltip.
     *
     */
    tooltip?: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     *
     */
    uniqueId?: string;
}
