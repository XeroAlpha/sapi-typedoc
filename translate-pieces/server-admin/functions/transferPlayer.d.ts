/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @remarks
 * Transfer player to another server.
 *
 * @worldMutation
 *
 * @param player
 * Player to transfer.
 * @param host
 * Host of the server to transfer to.
 * @param port
 * Port of the server to transfer to.
 * @throws This function can throw errors.
 */
export function transferPlayer(player: minecraftserver.Player, host: string, port: number): void;