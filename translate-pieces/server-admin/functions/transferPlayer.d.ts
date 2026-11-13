/* IMPORT */ import { ArgumentOutOfBoundsError, EngineError, InvalidArgumentError } from '../../common';
/* IMPORT */ import { Player, RawMessageError } from '../../server';
/* IMPORT */ import { TransferPlayerIpPortOptions, TransferPlayerNetherNetOptions, TransferPlayerUIOptions } from '..';

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
 * @param UIOptions
 * Optional progress screen settings. Text fields accept
 * strings or RawMessage values with client-side localization.
 * @throws
 * Throws RawMessageError if a RawMessage in UIOptions is
 * invalid.
 *
 * {@link ArgumentOutOfBoundsError}
 *
 * {@link EngineError}
 *
 * {@link InvalidArgumentError}
 *
 * {@link RawMessageError}
 */
export function transferPlayer(
    player: Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
    UIOptions?: TransferPlayerUIOptions,
): void;
