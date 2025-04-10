/**
 * @beta
 * The types of paramaters accepted by a custom command.
 */
export enum CustomCommandParamType {
    /**
     * @remarks
     * Command boolean parameter expecting true or false as input.
     *
     */
    Boolean = 0,
    /**
     * @remarks
     * Command integer parameter.
     *
     */
    Integer = 1,
    /**
     * @remarks
     * Command float parameter.
     *
     */
    Float = 2,
    /**
     * @remarks
     * Command string parameter.
     *
     */
    String = 3,
    /**
     * @remarks
     * Command entity selector parameter.
     *
     */
    EntitySelector = 4,
    /**
     * @remarks
     * Command player selector parameter.
     *
     */
    PlayerSelector = 5,
    /**
     * @remarks
     * Command location parameter.
     *
     */
    Location = 6,
    /**
     * @remarks
     * Command block type parameter expecting a Minecraft block.
     *
     */
    BlockType = 7,
    /**
     * @remarks
     * Command item name parameter.
     *
     */
    ItemType = 8,
    /**
     * @remarks
     * Command enum parameter.
     *
     */
    Enum = 9,
}