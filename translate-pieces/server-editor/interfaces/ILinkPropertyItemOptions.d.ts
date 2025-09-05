/* IMPORT */ import { IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Optional properties for Link property item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ILinkPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Hides the link icon. If undefined, it will default to false.
     *
     */
    hideIcon?: boolean;
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
    tooltip?: LocalizedString;
}
