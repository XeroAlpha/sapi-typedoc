/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { CannotKickPlayerError } from '..';

/**
 * @remarks
 * Kicks a player from the server.
 *
 * @worldMutation
 *
 * @param player
 * Player to kick.
 * @param reason
 * Reason for kicking the player.
 * @throws {CannotKickPlayerError}
 *
 * @throws {EngineError}
 *
 * @throws {InvalidArgumentError}
 */
export function kickPlayer(player: Player, reason?: string): void;
