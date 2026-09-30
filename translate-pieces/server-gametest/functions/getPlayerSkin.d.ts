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
 * @throws {InvalidArgumentError}
 *
 * @throws {InvalidEntityError}
 */
export function getPlayerSkin(player: Player): PlayerSkinData;
