/* IMPORT */ import { RelativeVolumeListBlockVolume, UserDefinedTransactionOperationHandler, VolumeListTransactionOperationHandler } from '..';

export class TransactionHandler {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addUserDefinedOperationHandler(payloadClosure: (arg0: string) => void): UserDefinedTransactionOperationHandler;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addVolumeListOperationHandler(
        closure: (arg0: RelativeVolumeListBlockVolume[]) => void,
    ): VolumeListTransactionOperationHandler;
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    unregister(): void;
}
