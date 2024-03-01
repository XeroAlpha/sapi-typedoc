/* IMPORT */ import { DataStorePayloadAfterEvent } from '../index';

export class DataStorePayloadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: DataStorePayloadAfterEvent) => void): (arg: DataStorePayloadAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unsubscribe(callback: (arg: DataStorePayloadAfterEvent) => void): void;
}