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
 * @throws This function can throw errors.
 *
 * {@link EngineError}
 *
 * {@link InvalidArgumentError}
 *
 * {@link PlayerAlreadyOpError}
 */
export function opPlayer(player: Player): void;
