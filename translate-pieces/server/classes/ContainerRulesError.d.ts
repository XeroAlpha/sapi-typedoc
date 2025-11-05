/* IMPORT */ import { ContainerRules, ContainerRulesErrorReason } from '..';

/**
 * Error thrown if {@link ContainerRules} are broken on
 * container operations.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks
     * The specific reason the error was thrown.
     *
     * @earlyExecution
     *
     */
    reason: ContainerRulesErrorReason;
}
