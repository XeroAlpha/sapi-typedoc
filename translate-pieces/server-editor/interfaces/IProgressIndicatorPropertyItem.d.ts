/* IMPORT */ import { IPropertyItemBase, LocalizedString } from '../index';

/**
 * A property item which supports ProgressIndicator properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IProgressIndicatorPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current progress of the property item.
     *
     */
    readonly progress: Readonly<number> | undefined;
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
     * Updates tooltip description of property item.
     *
     * @param tooltip
     * New tooltip.
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}