/* IMPORT */ import { Dimension, Player, Vector3 } from '..';

/**
 * Contains information about a successfully activated Nether
 * portal, including its dimension, ignition location, and
 * initiating player (when known).
 */
export class PortalActivateAfterEvent {
    private constructor();
    /**
     * @remarks
     * The dimension in which the portal was activated, not its
     * destination dimension.
     *
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * The coordinates of the ignition position used to activate
     * the portal. This is not necessarily the center or corner of
     * the portal.
     *
     */
    readonly location: Vector3;
    /**
     * @remarks
     * The player who directly activated the portal using an item,
     * if known. Undefined for fire-based activation without a
     * known initiating player, including dispenser-fired fire
     * charges. Nearby players are not used for attribution.
     *
     */
    readonly player?: Player;
}
