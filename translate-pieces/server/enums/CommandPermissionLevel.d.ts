/**
 * 执行自定义指令所需的权限级别。
 * 
 * The required permission level to execute the custom command.
 */
export enum CommandPermissionLevel {
    /**
     * @remarks
     * 任何东西都可以执行。
     * 
     * Anything can run this level.
     *
     */
    Any = 0,
    /**
     * @remarks
     * 任何 OP 可以执行指令，包括命令方块。
     * 
     * Any operator can run this command, including command blocks.
     *
     */
    GameDirectors = 1,
    /**
     * @remarks
     * 任何 OP 可以执行指令，但是命令方块不行。
     * 
     * Any operator can run this command, but NOT command blocks.
     *
     */
    Admin = 2,
    /**
     * @remarks
     * 任何服务器主机可以执行指令。
     * 
     * Any server host can run this command.
     *
     */
    Host = 3,
    /**
     * @remarks
     * 只用专用服务器才能执行指令。
     * 
     * Only dedicated server can run this command.
     *
     */
    Owner = 4,
}
