/**
 * @beta
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 */
export enum MoonPhase {
    /**
     * @beta
     * @remarks
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     */
    FullMoon = 0,
    /**
     * @beta
     * @remarks
     * The phase following the Full Moon.
     *
     */
    WaningGibbous = 1,
    /**
     * @beta
     * @remarks
     * The phase following the Waxing Crescent.
     *
     */
    FirstQuarter = 2,
    /**
     * @beta
     * @remarks
     * The phase following the Last Quarter.
     *
     */
    WaningCrescent = 3,
    /**
     * @beta
     * @remarks
     * The darkest moon phase.
     *
     */
    NewMoon = 4,
    /**
     * @beta
     * @remarks
     * The phase following the New Moon.
     *
     */
    WaxingCrescent = 5,
    /**
     * @beta
     * @remarks
     * The phase following the Waning Gibbous.
     *
     */
    LastQuarter = 6,
    /**
     * @beta
     * @remarks
     * The phase following the First Quarter.
     *
     */
    WaxingGibbous = 7,
}