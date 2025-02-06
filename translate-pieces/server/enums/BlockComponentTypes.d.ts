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
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @remarks
     * Represents a block that can play a record.
     *
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * Represents a block that can display text on it.
     *
     */
    Sign = 'minecraft:sign',
}