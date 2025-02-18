/* IMPORT */ import { WorldLoadAfterEvent } from '../index';

/**
 * @beta
 */
export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}