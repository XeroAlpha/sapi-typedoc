/* IMPORT */ import { ShutdownEvent } from '../index';

/**
 * @beta
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}