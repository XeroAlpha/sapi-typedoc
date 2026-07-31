/* IMPORT */ import { RelativeVolumeListBlockVolume, UserDefinedTransactionOperationHandler, VolumeListTransactionOperationHandler } from '..';

export class TransactionHandler {
    private constructor();
    readonly id: string;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperationHandler(payloadClosure: (arg0: string) => void): UserDefinedTransactionOperationHandler;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addVolumeListOperationHandler(
        closure: (arg0: RelativeVolumeListBlockVolume[]) => void,
    ): VolumeListTransactionOperationHandler;
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    unregister(): void;
}
