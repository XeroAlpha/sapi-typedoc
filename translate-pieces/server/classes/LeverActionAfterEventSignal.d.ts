/* IMPORT */ import { ILeverActionAfterEventSignal } from '../index';

/**
 * Manages callbacks that are connected to lever moves
 * (activates or deactivates).
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, LeverActionAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
 *     console.warn(
 *         `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
 *     );
 * });
 *
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}