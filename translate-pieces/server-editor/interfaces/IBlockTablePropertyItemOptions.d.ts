/* IMPORT */ import { BlockTableOperationType, IBlockTableEntryInfo, IPropertyItemOptionsBase, LocalizedString } from '../index';

/**
 * Properties of block table item
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockTablePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Map of block entries in the block table.
     *
     */
    entries?: Map<string, IBlockTableEntryInfo>;
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     *
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control operation is
     * selected from the UI.
     *
     */
    onOperationClick?: (block: string, operation: BlockTableOperationType) => void;
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