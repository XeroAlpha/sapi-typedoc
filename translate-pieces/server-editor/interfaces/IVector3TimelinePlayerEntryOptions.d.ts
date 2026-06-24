/* IMPORT */ import { IVector3Keyframe, LocalizedString } from '..';

/**
 * Optional properties for a Vector3 timeline entry inside a
 * Timeline Player pane
 */
export interface IVector3TimelinePlayerEntryOptions {
    /**
     * @remarks
     * Initial keyframe entries for this timeline.
     *
     */
    keyframes?: IVector3Keyframe[];
    /**
     * @remarks
     * Callback triggered when a keyframe is added.
     *
     */
    onKeyframeAdded?: (keyframe: IVector3Keyframe) => void;
    /**
     * @remarks
     * Callback triggered when a keyframe is moved or its value
     * changes.
     *
     */
    onKeyframeChanged?: (keyframe: IVector3Keyframe) => void;
    /**
     * @remarks
     * Callback triggered when a keyframe is removed.
     *
     */
    onKeyframeRemoved?: (keyframe: IVector3Keyframe) => void;
    /**
     * @remarks
     * Callback triggered when a keyframe is selected.
     *
     */
    onKeyframeSelected?: (keyframe: IVector3Keyframe) => void;
    /**
     * @remarks
     * Display title shown next to the entry's graph.
     *
     */
    title?: LocalizedString;
}
