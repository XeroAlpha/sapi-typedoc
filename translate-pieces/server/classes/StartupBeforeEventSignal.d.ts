/* IMPORT */ import { StartupEvent } from '..';

export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with early-execution privilege.
     * @returns
     * Closure that is called with early-execution privilege.
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @param callback
     * This closure is called with early-execution privilege.
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}
