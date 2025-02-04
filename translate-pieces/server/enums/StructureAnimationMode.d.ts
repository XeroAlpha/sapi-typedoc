/**
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 * 
 * 表示在放置结构时结构方块的使用的动画。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 
     * 表示方块将会被随机一个一个地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置完成所需的时间。
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 
     * 表示方块将会自下而上一层一层地放置。使用 @minecraft/server.StructurePlaceOptions.animationSeconds 来控制所有方块放置完成所需的时间。
     */
    Layers = 'Layers',
    /**
     * @remarks
     * All blocks will be placed immediately.
     * 
     * 表示所有方块将会立即放置。
     */
    None = 'None',
}