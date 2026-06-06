/* IMPORT */ import { CameraShakeType } from '..';

/**
 * @beta
 * Options for applying a camera shake effect to a player's
 * camera via `Camera.addShake`. Each call to `addShake` queues
 * a new independent shake event for the specified `type`;
 * positional and rotational shakes are tracked in separate
 * queues and run concurrently. The rendered intensity at any
 * moment is the sum of all active events' intensities for that
 * type, capped at `4.0`. Events expire naturally when their
 * `duration` elapses.
 */
export interface CameraShakeOptions {
    /**
     * @remarks
     * How long this shake event lasts, in seconds. Must be a
     * positive value.
     *
     */
    duration: number;
    /**
     * @remarks
     * The intensity of this shake event. Must be a positive value
     * with a maximum of `4.0`. Multiple active events of the same
     * `type` are summed, capped at `4.0`.
     *
     */
    intensity: number;
    /**
     * @remarks
     * The type of camera shake to apply. Positional and rotational
     * shakes maintain separate event queues and are applied
     * concurrently, so adding a shake of each type does not cause
     * them to interfere with one another.
     *
     */
    type: CameraShakeType;
}
