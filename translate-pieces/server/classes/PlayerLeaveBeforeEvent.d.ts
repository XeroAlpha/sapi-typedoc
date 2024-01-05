/* IMPORT */ import { Player } from '../index';

/**
 * Contains information regarding a player that is leaving the
 * world.
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The leaving player.
     *
     */
    readonly player: Player;
}