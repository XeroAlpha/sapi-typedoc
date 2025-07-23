/* IMPORT */ import { SimulatedPlayer, Test, minecraftcommon, minecraftserver } from '../index';

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
 * {@link minecraftcommon.EngineError}
 */
export function spawnSimulatedPlayer(
    location: minecraftserver.DimensionLocation,
    name: string,
    gameMode: minecraftserver.GameMode,
): SimulatedPlayer;