/* IMPORT */ import { BlockType } from '../../server';
/* IMPORT */ import { IBlockTableEntryInfo, IPropertyItemBase, LocalizedString } from '..';

/**
 * A property item which supports Block Table properties
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBlockTablePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Create new or update an existing entry in the block table
     *
     * @param block
     * a new entry in the block table.
     * @param blockInfo
     * block info for the entry in the block table.
     */
    addOrUpdateEntry(block: string | BlockType, blockInfo: IBlockTableEntryInfo): void;
    /**
     * @remarks
     * Delete entry in the block table, by block name
     *
     * @param block
     * an entry in the block table.
     */
    deleteEntry(block: string): void;
    /**
     * @remarks
     * Read entry from the block table, by block name
     *
     * @param block
     * an entry in the block table.
     */
    getEntry(block: string | BlockType): IBlockTableEntryInfo | undefined;
    /**
     * @remarks
     * Updates title of the property item.
     *
     * @param title
     * New title.
     */
    setTitle(title: LocalizedString): void;
    /**
     * @remarks
     * Update the block table entries
     *
     * @param entries
     * The new value for the block table.
     */
    updateEntries(entries: Map<string, IBlockTableEntryInfo>): void;
}
