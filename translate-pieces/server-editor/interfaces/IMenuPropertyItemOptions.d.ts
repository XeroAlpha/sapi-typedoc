/* IMPORT */ import { BasicTooltipContent, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Menu property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IMenuPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Called when a menu item is clicked.
     *
     */
    onMenuItemClick?: (menuId: string) => void;
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
