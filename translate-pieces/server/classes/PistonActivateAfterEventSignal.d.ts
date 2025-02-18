/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     * @seeExample pistonAfterEvent.ts
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}