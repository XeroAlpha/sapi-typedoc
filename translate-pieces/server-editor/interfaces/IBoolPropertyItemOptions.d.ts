/* IMPORT */ import { BasicTooltipContent, BoolPropertyItemVariant, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Bool property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Changes checkbox variant to use a custom icon
     *
     */
    checkboxIcon?: string;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: boolean, oldValue: boolean) => void;
    /**
     * @remarks
     * Localized title of the text item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to Checkbox.
     *
     */
    variant?: BoolPropertyItemVariant;
}
