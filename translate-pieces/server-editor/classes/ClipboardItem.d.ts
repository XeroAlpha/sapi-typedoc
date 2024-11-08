/* IMPORT */ import { ClipboardWriteOptions, EditorStructure, Selection, minecraftserver } from '../index';

/**
 * A ClipboardItem is a handle to an object which represents a
 * set of blocks in a contained bounding area (most likely
 * copied from the world)
 */
export class ClipboardItem {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * Return whether there is any block content in the item
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Clear the contents of the item
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Create a {@link @minecraft/server.CompoundBlockVolume}
     * container which represents the occupied block volumes within
     * the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link @minecraft/server.CompoundBlockVolume} which
     * represents the occupied block volumes within the
     * ClipboardItem as they would be written to the world with the
     * specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * Create a {@link Selection} container which represents the
     * occupied block volumes within the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * @returns
     * A {@link Selection} which represents the occupied block
     * volumes within the ClipboardItem as they would be written to
     * the world with the specified {@link ClipboardWriteOptions}
     * @throws This function can throw errors.
     */
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    /**
     * @remarks
     * Get the bounding size of the ClipboardItem
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSize(): minecraftserver.Vector3;
    /**
     * @remarks
     * Copy the contents of the area represented by a {@link
     * Selection} volume into the ClipboardItem
     *
     * This function can't be called in read-only mode.
     *
     * @param selection
     * A volume which represents the area to be copied
     * @throws This function can throw errors.
     */
    readFromSelection(selection: Selection): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     *
     * This function can't be called in read-only mode.
     *
     * @param from
     * The world location of one corner of a bounding volume
     * @param to
     * The world location of the opposite corner of a bounding
     * volume
     * @throws This function can throw errors.
     */
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The root point of the world location to which the
     * ClipboardItem is written (this is modified by the various
     * anchor, offset and rotation parameters of the {@link
     * ClipboardWriteOptions}
     * @param options
     * An optional set of write parameters which modify the
     * properties of the ClipboardItem as it is applied to the
     * world
     * @returns
     * Success or Failure
     * @throws This function can throw errors.
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}