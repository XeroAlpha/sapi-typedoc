/* IMPORT */ import { PlayerSkinData, minecraftcommon, minecraftserver } from '../index';

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
 * {@link minecraftcommon.InvalidArgumentError}
 *
 * {@link minecraftserver.InvalidEntityError}
 */
export function getPlayerSkin(player: minecraftserver.Player): PlayerSkinData;