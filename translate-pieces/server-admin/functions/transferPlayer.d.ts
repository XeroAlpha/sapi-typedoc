/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { TransferPlayerIpPortOptions, TransferPlayerNetherNetOptions } from '..';

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
    player: Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;
