/* IMPORT */ import { CustomComponentNameErrorReason } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    reason: CustomComponentNameErrorReason;
}