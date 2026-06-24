/* IMPORT */ import { IPropertyItemOptionsBase, ITimelinePlayerGroup, TimelinePlayerPlaybackState } from '..';

/**
 * Optional properties for a Timeline Player pane
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITimelinePlayerOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Total duration in seconds.
     *
     */
    duration?: number;
    /**
     * @remarks
     * Group entries for the dropdown.
     *
     */
    groups?: ITimelinePlayerGroup[];
    /**
     * @remarks
     * Callback triggered when the group selection changes.
     *
     */
    onGroupChanged?: (groupId: string) => void;
    /**
     * @remarks
     * Callback triggered when the play/stop toggle is clicked.
     *
     */
    onPlayStopToggled?: () => void;
    /**
     * @remarks
     * Callback triggered when the redistribute button is clicked.
     *
     */
    onRedistributeClicked?: () => void;
    /**
     * @remarks
     * Callback triggered when the playhead time changes.
     *
     */
    onTimeChanged?: (current: number, prev: number) => void;
    /**
     * @remarks
     * Initial playback state.
     *
     */
    playbackState?: TimelinePlayerPlaybackState;
    /**
     * @remarks
     * Decimal precision for keyframe time values.
     *
     */
    precision?: number;
    /**
     * @remarks
     * Initially selected group identifier.
     *
     */
    selectedGroupId?: string;
}
