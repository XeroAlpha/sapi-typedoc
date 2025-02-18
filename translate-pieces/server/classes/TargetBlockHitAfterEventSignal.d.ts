/* IMPORT */ import { TargetBlockHitAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a target block
 * is hit.
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}