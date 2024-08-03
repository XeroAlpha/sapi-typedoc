/* IMPORT */ import { ColorPickerPropertyItemVariant, IPropertyItemOptionsBase, LocalizedString, minecraftserver } from '../index';

/**
 * Optional properties for Color Picker property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorPickerPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true alpha control will be hidden. If undefined, it will
     * default to false.
     *
     */
    hiddenAlpha?: boolean;
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
    onChange?: (newValue: minecraftserver.RGBA, oldValue: minecraftserver.RGBA) => void;
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
    /**
     * @remarks
     * The variant for the button. By default it is Primary.
     *
     */
    variant?: ColorPickerPropertyItemVariant;
}