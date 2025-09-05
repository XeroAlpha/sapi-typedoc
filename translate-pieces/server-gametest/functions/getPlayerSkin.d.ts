/* IMPORT */ import { InvalidArgumentError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { PlayerSkinData } from '..';

/**
 * @remarks
 * Returns data about a player's skin.
 *
 * @worldMutation
 *
 * @param player
 * The player who's skin is returned.
 * @throws This function can throw errors.
 *
 * {@link InvalidArgumentError}
 *
 * {@link InvalidEntityError}
 */
export function getPlayerSkin(player: Player): PlayerSkinData;
