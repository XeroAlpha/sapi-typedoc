/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { DimensionLocation, GameMode } from '../../server';
/* IMPORT */ import { SimulatedPlayer, Test } from '..';

/**
 * @remarks
 * Spawns a simulated player that isn't associated to a
 * specific {@link Test}.  You can use {@link
 * SimulatedPlayer.remove} to remove the player from the world.
 *
 * @worldMutation
 *
 * @param location
 * The location in which to spawn the player.
 * @param name
 * The name for the player.
 * @param gameMode
 * The game mode for the player.
 * @throws This function can throw errors.
 *
 * {@link EngineError}
 */
export function spawnSimulatedPlayer(
    location: DimensionLocation,
    name: string,
    gameMode: GameMode,
): SimulatedPlayer;
