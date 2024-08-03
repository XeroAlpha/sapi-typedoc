/**
 * The types of block components that are accessible via
 * function Block.getComponent.
 */
export enum BlockComponentTypes {
    /**
     * @remarks
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     *
     */
    Inventory = 'minecraft:inventory',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * lava.
     *
     */
    LavaContainer = 'minecraft:lavaContainer',
    /**
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     *
     */
    Piston = 'minecraft:piston',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains a
     * potion.
     *
     */
    PotionContainer = 'minecraft:potionContainer',
    /**
     * @rc
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
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * snow.
     *
     */
    SnowContainer = 'minecraft:snowContainer',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * water.
     *
     */
    WaterContainer = 'minecraft:waterContainer',
}