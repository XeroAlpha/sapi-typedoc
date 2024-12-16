/* IMPORT */ import { NamespaceNameErrorReason } from '../index';

/**
 * @beta
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    reason: NamespaceNameErrorReason;
}