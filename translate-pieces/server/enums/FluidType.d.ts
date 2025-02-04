/**
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 * 
 * 表示用于盛装流体方块中的流体类型，如炼药锅。
 */
export enum FluidType {
    /**
     * @remarks
     * Represents lava as a type of fluid.
     *
     * 表示熔岩作为一种流体类型。
     */
    Lava = 'Lava',
    /**
     * @remarks
     * Represents a potion as a type of fluid.
     *
     * 表示药水作为一种流体类型。
     */
    Potion = 'Potion',
    /**
     * @remarks
     * Represents powder snow as a type of fluid.
     *
     * 表示细雪作为一种流体类型。
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * Represents water as a type of fluida.
     *
     * 表示水作为一种流体类型。
     */
    Water = 'Water',
}