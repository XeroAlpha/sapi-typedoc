/* IMPORT */ import { BlockEvent, Entity } from '..';

/**
 * Contains information related to changes to a trip wire trip.
 * @seeExample tripWireTripEvent.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Whether or not the block has redstone power.
     *
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * The sources that triggered the trip wire to trip.
     *
     */
    readonly sources: Entity[];
}
