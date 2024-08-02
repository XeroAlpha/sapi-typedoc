/* IMPORT */ import { IPropertyItemBase, LocalizedString, minecraftserver } from '../index';

/**
 * A property item which supports Color Picker properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IColorPickerPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: minecraftserver.RGBA;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip of the property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}