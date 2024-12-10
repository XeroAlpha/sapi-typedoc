/* IMPORT */ import { NamespaceNameErrorReason } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    reason: NamespaceNameErrorReason;
}