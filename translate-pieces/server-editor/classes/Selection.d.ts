/**
 * The Selection represents a volume in space, which may
 * potentially be made up of one or more block locations.
 * These block locations do not need to be contiguous, and a
 * Selection represent an irregular shape.
 * It's important to note that a Selection is only a
 * representation of the volume shape space - and does NOT
 * represent the actual contents of the space.
 */
export class Selection {
    private constructor();
    /**
     * @remarks
     * Returns a boolean representing whether or not there are any
     * volumes pushed to the selection stack
     *
     * @throws This property can throw when used.
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Set whether or not the selection volume is visible to the
     * client user.
     * NOTE: Use this option carefully - Selection volumes are
     * generally server-only, but marking a volume as visible
     * causes the volume (and all volume operations) to be
     * synchronized with the client game which can potentially
     * generate excessive network traffic.
     *
     *
     * This property can't be edited in read-only mode.
     *
     */
    visible: boolean;
    /**
     * @remarks
     * Clear the contents of the Selection
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a block iterator which can be used to step across the
     * Selection shape.  Each call to the iterator will return the
     * next block location within the Selection bounds which is
     * actually selected.
     * Block iteration is not guaranteed to be contiguous - it is
     * possible to create irregular selection shapes by adding
     * volumes to a selection which may or may not be contiguous or
     * adjacent to other volumes within the selection.
     * The Block iterator will return only selected volume
     * locations
     *
     * This function can't be called in read-only mode.
     *
     */
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    /**
     * @remarks
     * Return a bounding rectangle that contains all of the volumes
     * within the selection (the bounding rectangle does NOT
     * represent the shape of the selection, only the largest
     * rectangle that will fit all of the volumes)
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BoundingBox;
    /**
     * @remarks
     * Return the color of the on-screen selection container hull
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFillColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Return the color of the on-screen selection container
     * outline
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getOutlineColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Get the origin of the CompoundBlockVolume that makes up the
     * block component part of selection
     *
     * This function can't be called in read-only mode.
     *
     */
    getVolumeOrigin(): minecraftserver.Vector3;
    /**
     * @remarks
     * Translate a selection by a given amount (this causes all of
     * the volumes within the selection to be moved by the
     * specified offset)
     *
     * This function can't be called in read-only mode.
     *
     * @param delta
     * The amount by which to move
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Move the selection to an absolute world location (causing
     * all of the volumes within the selection to be moved to a
     * location relative to the world location)
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * The world location to which to relocate the selection
     * @returns
     * Return the newly moved position
     * @throws This function can throw errors.
     */
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Fetch the volume information of the last compound volume
     * that was pushed to the volume stack without affecting the
     * stack itself
     *
     * This function can't be called in read-only mode.
     *
     * @param forceRelativity
     * See the description for {@link
     * @minecraft-server/CompoundBlockVolume.peekLastVolume}
     * @returns
     * Returns undefined if the stack is empty
     */
    peekLastVolume(
        forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity,
    ): minecraftserver.CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the volume information that was last pushed to the
     * volume stack.  This will reduce the stack item length by 1
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    popVolume(): void;
    /**
     * @remarks
     * Push a compound volume item (a volume and action pair) to
     * the volume stack.
     *
     * This function can't be called in read-only mode.
     *
     * @param item
     * Item to push to the stack
     * @throws This function can throw errors.
     */
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * Replace the contents of the current selection with a new
     * specified selection.  This operation will delete the current
     * contents and copy the contents of the new selection to the
     * target selection - it does this by content, not by
     * reference.
     *
     * This function can't be called in read-only mode.
     *
     * @param other
     * {@link @minecraft-server/CompoundBlockVolume} - set the
     * block component part of this selection to the specified
     * compound block volume.  This will completely replace all
     * block volume definitions in the selection.
     * {@link @Selection} - replace the selection with the
     * specified selection
     * @throws This function can throw errors.
     */
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    /**
     * @remarks
     * Set the color of the hull of the selection object if it is
     * visible.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setFillColor(color: minecraftserver.RGBA): void;
    /**
     * @remarks
     * Set the color of the outline around the selection object if
     * it is visible
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setOutlineColor(color: minecraftserver.RGBA): void;
}