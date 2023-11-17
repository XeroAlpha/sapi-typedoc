/* IMPORT */ import { Dimension, Player, Vector3 } from '../index';

/**
 * Contains information related to changes to a player's
 * dimension having been changed.
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The dimension the player is changing from.
     *
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * The location the player was at before changing dimensions.
     *
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * Handle to the player that is changing dimensions.
     *
     */
    readonly player: Player;
    /**
     * @remarks
     * The dimension that the player is changing to.
     *
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     *
     */
    readonly toLocation: Vector3;
}