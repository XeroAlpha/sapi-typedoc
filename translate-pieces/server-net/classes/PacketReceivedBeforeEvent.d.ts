/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { PacketId } from '..';

/**
 * Sent as the server receives a network packet from a client.
 * If cancelled, the server will not parse the network packet
 * and will silently ignore it.
 */
export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * The size of the network packet in bytes.
     *
     */
    readonly packetSize: number;
    /**
     * @remarks
     * Which client sent the network packet to the game server.
     *
     */
    readonly sender?: Player;
}
