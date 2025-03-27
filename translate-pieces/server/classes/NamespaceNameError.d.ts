/* IMPORT */ import { NamespaceNameErrorReason } from '../index';

/**
 * Thrown when a name requires a namespace and an error occurs
 * when validating that namespace
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: NamespaceNameErrorReason;
}