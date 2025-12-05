/**
 * The types of block components that are accessible via
 * function Block.getComponent.
 */
export enum BlockComponentTypes {
    FluidContainer = 'minecraft:fluid_container',
    /**
     * @remarks
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @rc
     * @remarks
     * Represents the color of a block when displayed on a map.
     *
     */
    MapColor = 'minecraft:map_color',
    /**
     * @rc
     * @remarks
     * Represents a block that can move (such as a piston).
     *
     */
    Movable = 'minecraft:movable',
    /**
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @rc
     * @remarks
     * Represents a how a block interacts with precipitation (such
     * as rain or snow).
     *
     */
    PrecipitationInteractions = 'minecraft:precipitation_interactions',
    /**
     * @remarks
     * Represents a block that can play a record.
     *
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @rc
     * @remarks
     * Represents a block that can output a redstone signal.
     *
     */
    RedstoneProducer = 'minecraft:redstone_producer',
    /**
     * @remarks
     * Represents a block that can display text on it.
     *
     */
    Sign = 'minecraft:sign',
}
