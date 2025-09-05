/* IMPORT */ import { Player } from '..';

/**
 * An event that contains more information about a player
 * spawning.
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     *
     * @worldMutation
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     *
     * @worldMutation
     *
     */
    player: Player;
}
