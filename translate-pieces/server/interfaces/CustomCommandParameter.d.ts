/* IMPORT */ import { CustomCommandParamType } from '../index';

/**
 * @rc
 * Definition for each parameter expected by the custom
 * command.
 */
export interface CustomCommandParameter {
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