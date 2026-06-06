/**
 * @beta
 * Contains information about a sound thats declared duration
 * elapsed.
 */
export class SoundCompletedAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of the sound instance that completed. Matches the
     * `id` property of the `SoundInstance` returned when the sound
     * was played.
     *
     */
    readonly soundInstanceId: string;
}
