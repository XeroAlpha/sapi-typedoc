/* IMPORT */ import { PacketReceiveBeforeEventSignal, PacketSendBeforeEventSignal } from '../index';

export class NetworkBeforeEvents {
    private constructor();
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    readonly packetSend: PacketSendBeforeEventSignal;
}