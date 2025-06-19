/* IMPORT */ import { BlockType, Entity, EntityType, ItemType, Player } from '../index';

/**
 * @rc
 * The types of paramaters accepted by a custom command.
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * Block type parameter provides a {@link BlockType}.
     *
     */
    BlockType = 'BlockType',
    /**
     * @remarks
     * Boolean parameter.
     *
     */
    Boolean = 'Boolean',
    /**
     * @remarks
     * Entity selector parameter provides an {@link Entity}.
     *
     */
    EntitySelector = 'EntitySelector',
    /**
     * @remarks
     * Entity type parameter provides an {@link EntityType}.
     *
     */
    EntityType = 'EntityType',
    /**
     * @remarks
     * Command enum parameter.
     *
     */
    Enum = 'Enum',
    /**
     * @remarks
     * Float parameter.
     *
     */
    Float = 'Float',
    /**
     * @remarks
     * Integer parameter.
     *
     */
    Integer = 'Integer',
    /**
     * @remarks
     * Item type parameter provides an {@link ItemType}.
     *
     */
    ItemType = 'ItemType',
    /**
     * @remarks
     * Location parameter provides a {@link
     * @minecraft/server.Location}.
     *
     */
    Location = 'Location',
    /**
     * @remarks
     * Player selector parameter provides a {@link Player}.
     *
     */
    PlayerSelector = 'PlayerSelector',
    /**
     * @remarks
     * String parameter.
     *
     */
    String = 'String',
}