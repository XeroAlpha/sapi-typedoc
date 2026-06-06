/* IMPORT */ import { Vector3 } from '..';

/**
 * Additional options for how a sound plays for a player.
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * Location of the sound; if not specified, the sound is played
     * near a player.
     *
     */
    location?: Vector3;
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
     * Optional pitch of the sound.
     *
     */
    pitch?: number;
    /**
     * @remarks
     * Optional volume of the sound.
     *
     */
    volume?: number;
}
