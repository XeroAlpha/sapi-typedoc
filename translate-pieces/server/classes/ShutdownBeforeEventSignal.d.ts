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
    subscribe(callback: (arg: ShutdownEvent) => void): (arg: ShutdownEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ShutdownEvent) => void): void;
}