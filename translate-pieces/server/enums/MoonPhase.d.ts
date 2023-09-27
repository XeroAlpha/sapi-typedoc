/**
 * @beta
 * Enum containing the different phases of the moon based on
 * the current day.
 * Obtain the current MoonPhase using world.getMoonPhase
 */
export enum MoonPhase {
    FullMoon = 0,
    WaningGibbous = 1,
    FirstQuarter = 2,
    WaningCrescent = 3,
    NewMoon = 4,
    WaxingCrescent = 5,
    LastQuarter = 6,
    WaxingGibbous = 7,
}