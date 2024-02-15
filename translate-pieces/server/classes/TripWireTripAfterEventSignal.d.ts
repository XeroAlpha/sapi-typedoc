/* IMPORT */ import { TripWireTripAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 * @example tripWireTripEvent.ts
 * ```typescript
 * import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';
 *
 * const overworld = world.getDimension('overworld');
 * const targetLocation: Vector3 = { x: 0, y: 0, z: 0 };
 *
 * // set up a tripwire
 * const redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
 * const tripwire = overworld.getBlock(targetLocation);
 *
 * if (redstone === undefined || tripwire === undefined) {
 *     console.warn('Could not find block at location.');
 * } else {
 *
 * redstone.setPermutation(BlockPermutation.resolve('redstone_block'));
 * tripwire.setPermutation(BlockPermutation.resolve('tripwire'));
 *
 * world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
 *     const eventLoc = tripWireTripEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *         console.warn(
 *             'Tripwire trip event at tick ' +
 *                 system.currentTick +
 *                 (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),
 *         );
 *     }
 * });
 * }
 * ```
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}