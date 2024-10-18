/* IMPORT */ import { PacketEventOptions, PacketReceivedBeforeEvent } from '../index';

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PacketReceivedBeforeEvent) => void): void;
}