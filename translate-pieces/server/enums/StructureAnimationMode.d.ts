/**
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     *
     */
    Layers = 'Layers',
    /**
     * @remarks
     * All blocks will be placed immediately.
     *
     */
    None = 'None',
}