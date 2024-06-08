/* IMPORT */ import { CustomComponentNameErrorReason } from '../index';

/**
 * @rc
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    reason: CustomComponentNameErrorReason;
}