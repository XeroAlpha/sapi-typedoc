/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     * @seeExample pistonAfterEvent.ts
     */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}