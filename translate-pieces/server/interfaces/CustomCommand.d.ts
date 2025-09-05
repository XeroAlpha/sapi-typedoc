/* IMPORT */ import { CommandPermissionLevel, CustomCommandParameter } from '..';

/**
 * Define the custom command, including name, permissions, and
 * parameters.
 */
export interface CustomCommand {
    /**
     * @remarks
     * Cheats must be enabled to run this command. Defaults to
     * true.
     *
     */
    cheatsRequired?: boolean;
    /**
     * @remarks
     * Command description as seen on the command line.
     *
     */
    description: string;
    /**
     * @remarks
     * List of mandatory command parameters.
     *
     */
    mandatoryParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * The name of the command. A namespace is required.
     *
     */
    name: string;
    /**
     * @remarks
     * List of optional command parameters.
     *
     */
    optionalParameters?: CustomCommandParameter[];
    /**
     * @remarks
     * The permission level required to execute the command.
     *
     */
    permissionLevel: CommandPermissionLevel;
}
