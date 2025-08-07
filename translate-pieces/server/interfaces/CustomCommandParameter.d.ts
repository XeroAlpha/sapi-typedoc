/* IMPORT */ import { CustomCommandParamType } from '../index';

/**
 * Definition for each parameter expected by the custom
 * command.
 */
export interface CustomCommandParameter {
    /**
     * @beta
     * @remarks
     * Can be used to reference the enum name when {@link
     * CustomCommandParamType} is 'Enum'. Allows the parameter name
     * to be different from the enum name.
     *
     */
    enumName?: string;
    /**
     * @remarks
     * The name of parameter as it appears on the command line.
     *
     */
    name: string;
    /**
     * @remarks
     * The data type of the parameter.
     *
     */
    type: CustomCommandParamType;
}