/**
 * @beta
 * A class that represents a particular clock within a world.
 */
export class WorldClock {
    private constructor();
    /**
     * @remarks
     * Retrieves or sets whether the world clock is currently
     * paused.
     *
     * @worldMutation
     *
     */
    isPaused: boolean;
    /**
     * @remarks
     * The identifier that represents this world clock.
     *
     */
    readonly name: string;
    /**
     * @remarks
     * Retrieves or sets the current time (in ticks) of the world
     * clock.
     *
     * @worldMutation
     *
     * Minimum Value: 0
     */
    time: number;
}
