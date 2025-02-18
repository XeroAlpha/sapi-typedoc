/* IMPORT */ import { LeverActionAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @seeExample leverActionEvent.ts
 */
export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @beta
     * @remarks
     * Adds a callback that will be called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @beta
     * @remarks
     * Removes a callback from being called when a lever is moved
     * (activates or deactivates).
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}