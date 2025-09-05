/* IMPORT */ import { PacketEventOptions, PacketReceivedBeforeEvent } from '..';

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}
