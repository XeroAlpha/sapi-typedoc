/* IMPORT */ import { ITimelinePlayerEntry, IVector3Keyframe } from '..';

/**
 * A Vector3 timeline entry owned by a Timeline Player pane
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3TimelinePlayerEntry extends ITimelinePlayerEntry {
    /**
     * @remarks
     * Add a keyframe.
     *
     * @param keyframe
     * Keyframe to add.
     */
    addKeyframe(keyframe: IVector3Keyframe): void;
    /**
     * @remarks
     * Get the list of keyframes for this entry.
     *
     */
    getKeyframes(): IVector3Keyframe[];
    /**
     * @remarks
     * Get the currently selected keyframe identifier for this
     * entry, or undefined if no keyframe in this entry is
     * selected.
     *
     */
    getSelectedKeyframeId(): string | undefined;
    /**
     * @remarks
     * Remove a keyframe by its identifier.
     *
     * @param id
     * Identifier of the keyframe to remove.
     */
    removeKeyframe(id: string): void;
    /**
     * @remarks
     * Bulk replace all keyframes.
     *
     * @param keyframes
     * New set of keyframes.
     */
    setKeyframes(keyframes: IVector3Keyframe[]): void;
    /**
     * @remarks
     * Set the selected keyframe for this entry.
     *
     * @param keyframeId
     * Identifier of the keyframe to select, or undefined to
     * deselect.
     */
    setSelectedKeyframeId(keyframeId: string | undefined): void;
    /**
     * @remarks
     * Update an existing keyframe. Matched by the id field.
     *
     * @param keyframe
     * Keyframe with updated time/value.
     */
    updateKeyframe(keyframe: IVector3Keyframe): void;
}
