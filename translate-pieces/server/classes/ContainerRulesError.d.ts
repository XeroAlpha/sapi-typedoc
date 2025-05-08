/* IMPORT */ import { ContainerRules, ContainerRulesErrorReason } from '../index';

/**
 * Error thrown if {@link ContainerRules} are broken on
 * container operations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @beta
     * @remarks
     * The specific reason the error was thrown.
     *
     * @earlyExecution
     *
     */
    reason: ContainerRulesErrorReason;
}