/* IMPORT */ import { IPropertyItemBase, LocalizedString } from '../index';

/**
 * A property item which supports Link properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ILinkPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     *
     */
    readonly value: Readonly<string>;
    /**
     * @remarks
     * Sets title of the property item.
     *
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Sets tooltip description of the property item.
     *
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}