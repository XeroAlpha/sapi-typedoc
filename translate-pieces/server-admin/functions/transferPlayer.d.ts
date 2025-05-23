/* IMPORT */ import { TransferPlayerIpPortOptions, TransferPlayerNetherNetOptions, minecraftserver } from '../index';

/**
 * @remarks
 * Transfer player to another server.
 *
 * @worldMutation
 *
 * @param player
 * Player to transfer.
 * @param options
 * Options for where to send the player.
 * @throws This function can throw errors.
 */
export function transferPlayer(
    player: minecraftserver.Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;