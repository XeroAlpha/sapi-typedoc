/* IMPORT */ import { BasicTooltipContent, IPropertyItemOptionsBase, LocalizedString, NumberPropertyItemVariant } from '../index';

/**
 * Optional properties for Number property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface INumberPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * If we should treat the number as integer. By default is
     * false.
     *
     */
    isInteger?: boolean;
    /**
     * @remarks
     * The min possible number. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     *
     */
    max?: number;
    /**
     * @remarks
     * The min possible number. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     *
     */
    min?: number;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: number, oldValue: number) => void;
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
     * Determines how we display bool as a UI element. If
     * undefined, it will default to InputField.
     *
     */
    variant?: NumberPropertyItemVariant;
}