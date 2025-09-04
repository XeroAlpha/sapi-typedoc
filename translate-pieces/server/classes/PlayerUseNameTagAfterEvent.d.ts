/* IMPORT */ import { Entity, Player } from '../index';

/**
 * @beta
 * Contains information related to when a player successfully
 * names an Entity with a named Name Tag item.
 */
export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks
     * The entity that was named by the player.
     *
     * @worldMutation
     *
     */
    entityNamed: Entity;
    /**
     * @remarks
     * The new name that the player has given to the entity.
     *
     * @worldMutation
     *
     */
    newName: string;
    /**
     * @remarks
     * Handle to the player that used the name tag.
     *
     * @worldMutation
     *
     */
    player: Player;
    /**
     * @remarks
     * The previous name of the entity before the player used the
     * name tag. This will be undefined if the entity was not
     * previously named.
     *
     * @worldMutation
     *
     */
    previousName?: string;
}