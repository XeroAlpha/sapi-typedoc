/* IMPORT */ import { PacketEventOptions, PacketSendBeforeEvent } from '../index';

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg: PacketSendBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: PacketSendBeforeEvent) => void): void;
}