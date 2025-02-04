/**
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * 表示根据当前日期的不同月相的枚举。使用 world.getMoonPhase 获取当前月相。
 *
 * The fullness of the moon controls various mob behaviors such
 * as the number of slimes that spawn in Swamp biomes, the
 * chance skeletons and zombies have to spawn with armor, as
 * well as the chance for spiders to spawn with certain status
 * effects.
 *
 * 月亮的盈亏会影响生物的各种行为，例如沼泽生物群系中生成的史莱姆数量、骷髅和僵尸生成时佩戴盔甲的几率，以及蜘蛛生成时具备特定状态效果的几率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     * 最明亮的月相。在此阶段，猫有50%的几率生成为黑猫。
     */
    FullMoon = 0,
    /**
     * @remarks
     * The phase following the Full Moon.
     *
     * 满月之后的月相。
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * The phase following the Waxing Crescent.
     *
     * 娥眉月之后的月相。
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * The phase following the Last Quarter.
     *
     * 下弦月之后的月相。
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * The darkest moon phase.
     *
     * 最黑暗的月相。
     */
    NewMoon = 4,
    /**
     * @remarks
     * The phase following the New Moon.
     *
     * 新月之后的月相。
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * The phase following the Waning Gibbous.
     *
     * 盈凸月之后的月相。
     */
    LastQuarter = 6,
    /**
     * @remarks
     * The phase following the First Quarter.
     *
     * 上弦月之后的月相。
     */
    WaxingGibbous = 7,
}