/**
 * @rc
 * Tint logic applied to a block or part of a block. The color
 * may vary when a world position is part of the context, as
 * biomes often have an influence on the resulting tint.
 */
export enum TintMethod {
    /**
     * @remarks
     * Specifies a birch foliage tint method.
     *
     */
    BirchFoliage = 'BirchFoliage',
    /**
     * @remarks
     * Specifies a default foliage tint method.
     *
     */
    DefaultFoliage = 'DefaultFoliage',
    /**
     * @remarks
     * Specifies a dry foliage tint method.
     *
     */
    DryFoliage = 'DryFoliage',
    /**
     * @remarks
     * Specifies an evergreen foliage tint method.
     *
     */
    EvergreenFoliage = 'EvergreenFoliage',
    /**
     * @remarks
     * Specifies a grass tint method.
     *
     */
    Grass = 'Grass',
    /**
     * @remarks
     * Specifies no tint method, resulting in a white tint.
     *
     */
    None = 'None',
    /**
     * @remarks
     * Specifies a water tint method.
     *
     */
    Water = 'Water',
}