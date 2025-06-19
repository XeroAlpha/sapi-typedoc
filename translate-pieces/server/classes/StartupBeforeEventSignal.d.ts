/* IMPORT */ import { StartupEvent } from '../index';

export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}