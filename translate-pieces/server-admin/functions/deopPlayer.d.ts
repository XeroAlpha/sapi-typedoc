/* IMPORT */ import { EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { CannotDeopPlayerError } from '..';

/**
 * @remarks
 * Removes the player's op permissions.
 *
 * @worldMutation
 *
 * @param player
 * Player to remove permissions from.
 * @throws This function can throw errors.
 *
 * {@link CannotDeopPlayerError}
 *
 * {@link EngineError}
 *
 * {@link InvalidArgumentError}
 */
export function deopPlayer(player: Player): void;
