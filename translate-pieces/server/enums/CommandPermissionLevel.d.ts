/**
 * @rc
 * The required permission level to execute the custom command.
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * Anything can run this level.
     *
     */
    Any = 0,
    /**
     * @remarks
     * Any operator can run this command, including command blocks.
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * Any operator can run this command, but NOT command blocks.
     *
     */
    Admin = 2,
    /**
     * @remarks
     * Any server host can run this command.
     *
     */
    Host = 3,
    /**
     * @remarks
     * Only dedicated server can run this command.
     *
     */
    Owner = 4,
}