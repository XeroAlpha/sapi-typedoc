/**
 * The types of block components that are accessible via
 * function Block.getComponent.
 * 
 * 可以通过 Block.getComponent 函数访问的方块组件类型。
 */
export enum BlockComponentTypes {
    FluidContainer = 'minecraft:fluidContainer',
    /**
     * @remarks
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     * 表示世界中方块的库存。用于像箱子这样的方块。
     */
    Inventory = 'minecraft:inventory',
    /**
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     * 当存在时，该方块具有类似活塞的行为。包含用于发现方块活塞状态的附加属性。
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * Represents a block that can play a record.
     *
     * 表示可以播放唱片的方块。
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * Represents a block that can display text on it.
     *
     * 表示可以显示文本的方块。
     */
    Sign = 'minecraft:sign',
}