/* IMPORT */ import { IDataTablePropertyItemEntry, IPropertyItemOptionsBase, LocalizedString } from '..';

/**
 * Properties of data table item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IDataTablePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * List of default data table entries
     *
     */
    entries?: IDataTablePropertyItemEntry[][];
    /**
     * @remarks
     * Localized title of the property item.
     *
     */
    title?: LocalizedString;
}
