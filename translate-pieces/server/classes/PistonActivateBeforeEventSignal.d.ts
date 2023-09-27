/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before a piston is activated.
 */
export class PistonActivateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @example pistonBeforeEvent.ts
     * ```typescript
     *   // set up a couple of piston blocks
     *   let piston = overworld.getBlock(targetLocation);
     *   let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z });
     *
     *   if (piston === undefined || button === undefined) {
     *     log("Could not find block at location.");
     *     return -1;
     *   }
     *
     *   piston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
     *   button.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));
     *
     *   const uncanceledPistonLoc = {
     *     x: Math.floor(targetLocation.x) + 2,
     *     y: Math.floor(targetLocation.y),
     *     z: Math.floor(targetLocation.z) + 2,
     *   };
     *
     *   // this is our control.
     *   let uncanceledPiston = overworld.getBlock(uncanceledPistonLoc);
     *   let uncanceledButton = overworld.getBlock({
     *     x: uncanceledPistonLoc.x,
     *     y: uncanceledPistonLoc.y + 1,
     *     z: uncanceledPistonLoc.z,
     *   });
     *
     *   if (uncanceledPiston === undefined || uncanceledButton === undefined) {
     *     log("Could not find block at location.");
     *     return -1;
     *   }
     *
     *   uncanceledPiston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3));
     *   uncanceledButton.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1));
     *
     *   mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
     *     let eventLoc = pistonEvent.piston.block.location;
     *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
     *       log("Cancelling piston event");
     *       pistonEvent.cancel = true;
     *     }
     *   });
     * ```
     */
    subscribe(callback: (arg: PistonActivateBeforeEvent) => void): (arg: PistonActivateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a piston expands
     * or retracts.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: PistonActivateBeforeEvent) => void): void;
}