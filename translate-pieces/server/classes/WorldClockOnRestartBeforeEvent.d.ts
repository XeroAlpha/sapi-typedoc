/* IMPORT */ import { WorldClock } from '..';

/**
 * @beta
 * Contains information related to a {@link WorldClock}
 * restarting.
 */
export class WorldClockOnRestartBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the world clock restart event. This
     * will keep the world clock at the maximum time value and
     * prevent it from ticking forward.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * The world clock that is restarting.
     *
     */
    readonly clock: WorldClock;
    /**
     * @remarks
     * The time that the world clock will be set to after it
     * restarts. If not set, the world clock will be set to 0.
     *
     * Minimum Value: 0
     */
    newTime: number;
}
