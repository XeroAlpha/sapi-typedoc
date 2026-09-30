/* IMPORT */ import { BlockVolumeBase, Entity, Vector3 } from '../../server';
/* IMPORT */ import { EntityOperationType, RelativeVolumeListBlockVolume, TransactionHandler, UserDefinedTransactionOperationHandler, VolumeListTransactionOperationHandler } from '..';

export class PendingTransaction {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addEntityOperation(entity: Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addUserDefinedOperation(
        transactionHandler: UserDefinedTransactionOperationHandler,
        prevData: string,
        currentData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    addVolumeListOperation(
        operationHandler: VolumeListTransactionOperationHandler,
        previous: RelativeVolumeListBlockVolume[],
        current: RelativeVolumeListBlockVolume[],
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    discard(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    submit(transactionHandler?: TransactionHandler): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    trackBlockChangeArea(from: Vector3, to: Vector3): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    trackBlockChangeList(locations: Vector3[]): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws
     */
    trackBlockChangeVolume(blockVolume: BlockVolumeBase): boolean;
}
