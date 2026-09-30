/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { PlayerAlreadyOpError } from '..';

/**
 * @remarks
 * Gives the player op permissions.
 *
 * @worldMutation
 *
 * @param player
 * Player to add permissions to.
 * @throws {EngineError}
 *
 * @throws {InvalidArgumentError}
 *
 * @throws {PlayerAlreadyOpError}
 */
export function opPlayer(player: Player): void;
