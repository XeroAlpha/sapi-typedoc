/* IMPORT */ import { BlockVolumeBase, ClipboardWriteOptions, EditorStructure, RelativeVolumeListBlockVolume, Vector3 } from '../index';

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
     */
    readonly isEmpty: boolean;
    readonly normalizedOrigin: Vector3;
    readonly originalWorldLocation: Vector3;
    readonly size: Vector3;
    /**
     * @remarks
     * Clear the contents of the item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    getPredictedWriteVolume(
        location: Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    readFromWorld(source: BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     *
     * @worldMutation
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
    writeToWorld(location: Vector3, options?: ClipboardWriteOptions): boolean;
}