/* IMPORT */ import { CustomCommandParameter, CustomCommandPermissionLevel } from '../index';

/**
 * @beta
 * Define the custom command, including name, permissions, and
 * parameters.
 */
export interface CustomCommand {
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
    permissionLevel: CustomCommandPermissionLevel;
}