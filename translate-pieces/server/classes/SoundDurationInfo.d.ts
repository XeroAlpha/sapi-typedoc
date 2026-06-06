/**
 * @beta
 * Provides duration and playback information for a sound whose
 * definition declares a duration.
 */
export class SoundDurationInfo {
    private constructor();
    /**
     * @remarks
     * Gets the total duration of the sound in seconds.
     *
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets whether the sound is still being tracked.
     *
     */
    readonly isActive: boolean;
    /**
     * @remarks
     * Returns the elapsed playback time of the sound, in seconds,
     * since it started playing.
     *
     * @worldMutation
     *
     * @returns
     * Elapsed playback time in seconds.
     */
    getPlaybackPosition(): number;
}
