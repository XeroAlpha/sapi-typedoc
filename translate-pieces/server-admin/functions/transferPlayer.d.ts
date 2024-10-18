/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @remarks
 * Transfer player to another server.
 *
 * This function can't be called in read-only mode.
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