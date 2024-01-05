/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to piston activations.
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a piston expands or
     * retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @example pistonAfterEvent.ts
     * ```typescript
     * // set up a couple of piston blocks
     * let piston = overworld.getBlock(targetLocation);
     * let button = overworld.getBlock({
     *   x: targetLocation.x,
     *   y: targetLocation.y + 1,
     *   z: targetLocation.z,
     * });
     *
     * if (piston === undefined || button === undefined) {
     *   log("Could not find block at location.");
     *   return -1;
     * }
     *
     * piston.setPermutation(
     *   mc.BlockPermutation.resolve("piston").withState("facing_direction", 3)
     * );
     * button.setPermutation(
     *   mc.BlockPermutation.resolve("acacia_button").withState("facing_direction", 1)
     * );
     *
     * mc.world.afterEvents.pistonActivate.subscribe(
     *   (pistonEvent: mc.PistonActivateAfterEvent) => {
     *     let eventLoc = pistonEvent.piston.block.location;
     *
     *     if (
     *       eventLoc.x === targetLocation.x &&
     *       eventLoc.y === targetLocation.y &&
     *       eventLoc.z === targetLocation.z
     *     ) {
     *       log(
     *         "Piston event at " +
     *           mc.system.currentTick +
     *           (pistonEvent.piston.isMoving ? " Moving" : "") +
     *           " State: " +
     *           pistonEvent.piston.state
     *       );
     *     }
     *   }
     * );
     * ```
     */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}