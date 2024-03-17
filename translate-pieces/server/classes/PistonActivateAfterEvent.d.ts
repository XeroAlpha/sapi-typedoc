/* IMPORT */ import { BlockEvent, BlockPistonComponent } from '../index';

/**
 * Contains information related to changes to a piston
 * expanding or retracting.
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
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}