/* IMPORT */ import { InvalidArgumentErrorType } from '..';

/**
 * 表示指定传递给方法的参数不正确或不被允许。
 * 
 * Specifies that a passed-in argument to a method is not
 * correct or allowed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    /**
     * @remarks
     * Index of the argument that is in error.
     *
     * @earlyExecution
     *
     */
    readonly index: number;
    /**
     * @remarks
     * Type of the argument error.
     *
     * @earlyExecution
     *
     */
    readonly type: InvalidArgumentErrorType;
    /**
     * @remarks
     * @param funcName
     * @param argTypeName
     * @param errorType
     * @param argIndex
     */
    constructor(funcName: string, argTypeName: string, errorType: InvalidArgumentErrorType, argIndex?: number);
}
