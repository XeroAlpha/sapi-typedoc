/* IMPORT */ import { BasicTooltipContent, ButtonVariant, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Button property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Icon image of the property item.
     *
     */
    icon?: string;
    /**
     * @remarks
     * Shrinks button to icon size if button has an icon.
     *
     */
    shrinkToIcon?: boolean;
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     *
     */
    tooltip?: BasicTooltipContent;
    /**
     * @remarks
     * The variant for the button. By default it is Primary.
     *
     */
    variant?: ButtonVariant;
}
