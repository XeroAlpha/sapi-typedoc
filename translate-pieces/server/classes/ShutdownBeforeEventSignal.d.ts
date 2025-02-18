/* IMPORT */ import { ShutdownEvent } from '../index';

/**
 * @beta
 */
export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}