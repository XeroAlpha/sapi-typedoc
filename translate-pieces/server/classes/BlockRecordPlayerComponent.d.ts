/* IMPORT */ import { BlockComponent, ItemStack, ItemType } from '../index';

/**
 * Represents a block that can play a record.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * Ejects the currently set record of this record-playing
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    ejectRecord(): void;
    /**
     * @remarks
     * Gets the currently set record of this record-playing block.
     *
     * @throws This function can throw errors.
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * Pauses the currently playing record of this record-playing
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    pauseRecord(): void;
    /**
     * @remarks
     * Plays the currently set record of this record-playing block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playRecord(): void;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}