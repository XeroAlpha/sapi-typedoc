/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to piston activations.
 * @example pistonAfterEvent.ts
 * ```typescript
 * import { world, system, PistonActivateAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
 *     console.warn(
 *         `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
 *     );
 * });
 * ```
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}