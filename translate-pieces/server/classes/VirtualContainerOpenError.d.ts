/* IMPORT */ import { VirtualContainerOpenErrorReason } from '..';

/**
 * Error thrown when a virtual container cannot be shown to a
 * player. Contains a reason code indicating why the screen
 * request was not sent.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class VirtualContainerOpenError extends Error {
    private constructor();
    /**
     * @remarks
     * The {@link VirtualContainerOpenErrorReason} code that
     * indicates why the screen request was not sent.
     *
     * @earlyExecution
     *
     */
    readonly reason: VirtualContainerOpenErrorReason;
}
