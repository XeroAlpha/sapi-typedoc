/* IMPORT */ import { InvalidArgumentErrorType } from '..';

/**
 * 表示指定传递给方法的参数不正确或不被允许。
 * 
 * Specifies that a passed-in argument to a method is not
 * correct or allowed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks
     * Index of the argument that is in error.
     *
     */
    index: number;
    type: InvalidArgumentErrorType;
}
