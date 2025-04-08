/**
 * @beta
 * Who executed the command.
 */
export enum CustomCommandSource {
    /**
     * @remarks
     * Command originated from a command block.
     *
     */
    Block = 'Block',
    /**
     * @remarks
     * Command originated from an entity or player.
     *
     */
    Entity = 'Entity',
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * Command originated from the server.
     *
     */
    Server = 'Server',
}