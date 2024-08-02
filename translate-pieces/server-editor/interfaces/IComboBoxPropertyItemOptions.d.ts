/* IMPORT */ import { ComboBoxPropertyItemDataType, IPropertyItemOptionsBase, LocalizedString } from '../index';

/**
 * Optional properties for ComboBox property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IComboBoxPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Possible data types supported by combo box. If undefined, it
     * will be Custom by default.
     *
     */
    dataType?: ComboBoxPropertyItemDataType;
    /**
     * @remarks
     * Default value to fall back to if entry is not found. If
     * undefined, data type will determine the default value (empty
     * string for Custom data type).
     *
     */
    defaultValue?: string;
    /**
     * @remarks
     * List of combo box entries. If undefined, data type will
     * determine the default list (empty list for Custom data
     * type).
     *
     */
    entries?: string[];
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
    onChange?: (newValue: string, oldValue: string) => void;
    /**
     * @remarks
     * If true the image for the selected value will be displayed
     * (if data type supports it). If undefined, it will default to
     * false.
     *
     */
    showImage?: boolean;
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
    tooltip?: LocalizedString;
}