/* IMPORT */ import { BasicTooltipContent, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for String property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IStringPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. If undefined, the label
     * will be visible by default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     *
     */
    onChange?: (newValue: string, oldValue: string) => void;
    /**
     * @remarks
     * Optional regular expression pattern to validate string.
     *
     */
    regexPattern?: string;
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
}
