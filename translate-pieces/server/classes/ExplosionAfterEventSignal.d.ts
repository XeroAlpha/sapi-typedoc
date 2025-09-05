/* IMPORT */ import { ExplosionAfterEvent } from '..';

/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}
