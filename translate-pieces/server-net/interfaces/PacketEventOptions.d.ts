/* IMPORT */ import { PacketId } from '../index';

/**
 * Options for events triggered by network packets.
 */
export interface PacketEventOptions {
    /**
     * @remarks
     * If provided, packet IDs in this list will not trigger the
     * event subscriptions.
     *
     */
    ignoredPacketIds?: PacketId[];
    /**
     * @remarks
     * If provided only packet IDs in this list will trigger the
     * event subscriptions.
     *
     */
    monitoredPacketIds?: PacketId[];
}