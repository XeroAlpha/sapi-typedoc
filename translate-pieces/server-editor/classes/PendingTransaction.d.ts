/* IMPORT */ import { BlockVolumeBase, Entity, Vector3 } from '../../server';
/* IMPORT */ import { EntityOperationType, UserDefinedTransactionHandlerId } from '..';

export class PendingTransaction {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    discard(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
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
     * @throws This function can throw errors.
     */
    submit(): void;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: Vector3, to: Vector3): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: Vector3[]): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: BlockVolumeBase): boolean;
}
