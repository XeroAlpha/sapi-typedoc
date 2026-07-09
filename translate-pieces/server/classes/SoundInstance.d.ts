/* IMPORT */ import { ArgumentOutOfBoundsError } from '../../common';
/* IMPORT */ import { Player, SoundDurationInfo } from '..';

/**
 * Represents a handle to a sound that has been played. The
 * handle is required to control the sound while it is playing
 * (for example, to call `stop`, `setVolume`, `setPitch`,
 * `fade`, or `seekTo`). Infinitely-looping sounds (started
 * with `loop: -1`) stop automatically when the last
 * `SoundInstance` reference is dropped; retain the handle for
 * as long as the sound should keep playing.
 */
export class SoundInstance {
    private constructor();
    /**
     * @beta
     * @remarks
     * Gets duration and playback information for this sound.
     *
     */
    readonly durationInfo?: SoundDurationInfo;
    /**
     * @beta
     * @remarks
     * Unique identifier of this sound instance.
     *
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Gets the player this sound was played for.
     *
     */
    readonly recipient?: Player;
    /**
     * @beta
     * @remarks
     * Gets the identifier of the sound event this instance was
     * started with.
     *
     */
    readonly soundEventId: string;
    /**
     * @beta
     * @remarks
     * Fades this sound instance from its current volume to the
     * target volume over the specified duration. To fade in from
     * silence, call `setVolume(0.0)` first; to fade out, pass a
     * target volume of `0.0`.
     *
     * @worldMutation
     *
     * @param duration
     * Duration of the fade in seconds. Must be non-negative.
     * Minimum value: 0
     * @param targetVolume
     * Volume to fade to. Must be non-negative.
     * Minimum value: 0
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @beta
     * @remarks
     * Pauses this sound.
     *
     * @worldMutation
     *
     */
    pause(): void;
    /**
     * @beta
     * @remarks
     * Resumes this sound after a pause.
     *
     * @worldMutation
     *
     */
    resume(): void;
    /**
     * @beta
     * @remarks
     * Sets the playback position of this sound instance.
     *
     * @worldMutation
     *
     * @param seconds
     * Position to seek to in seconds. Must be non-negative.
     * Bounds: [0, 107374184]
     * @throws
     * Throws if `seconds` is negative, or if the sound has a known
     * duration and `seconds` is greater than that duration.
     *
     * {@link ArgumentOutOfBoundsError}
     */
    seekTo(seconds: number): void;
    /**
     * @beta
     * @remarks
     * Sets the pitch of this sound instance.
     *
     * @worldMutation
     *
     * @param pitch
     * Pitch multiplier between 0.01 and 10.0. A value of 1.0 is
     * normal pitch.
     * Bounds: [0.009999999776482582, 10]
     */
    setPitch(pitch: number): void;
    /**
     * @beta
     * @remarks
     * Sets the volume of this sound instance.
     *
     * @worldMutation
     *
     * @param volume
     * Volume level between 0.0 and 10.0.
     * Bounds: [0, 10]
     */
    setVolume(volume: number): void;
    /**
     * @rc
     * @remarks
     * Stops this sound instance from playing.
     *
     * @worldMutation
     *
     */
    stop(): void;
}
