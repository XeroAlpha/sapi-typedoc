/**
 * Contains additional options for a playSound occurrence.
 */
export interface WorldSoundOptions {
    /**
     * @beta
     * @remarks
     * Number of additional times to repeat the sound after the
     * initial play. `0` (the default) plays the sound once, `-1`
     * loops it forever, and a positive integer `N` plays the sound
     * `N + 1` times in total. For example, `loopCount: 1` plays
     * the sound twice. The loop count is fixed when the sound
     * starts and cannot be changed afterward. When using `-1`, see
     * `SoundInstance` for handle lifetime requirements.
     *
     */
    loopCount?: number;
    /**
     * @remarks
     * Pitch of the sound played.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume and space by which this sound is heard.
     *
     */
    volume?: number;
}
