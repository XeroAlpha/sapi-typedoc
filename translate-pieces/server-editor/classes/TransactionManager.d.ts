/* IMPORT */ import { EntityOperationType, UserDefinedTransactionHandlerId, minecraftserver } from '../index';

/**
 * The Transaction Manager is responsible for tracking and
 * managing all of the registered transaction operations which
 * represent creator changes in the world.
 * Transaction Manager is the basis of the UNDO and REDO
 * operations, and allows a creator to store the changes made
 * to the world and the state of the world BEFORE those changes
 * were applied, making it possible to UNDO those changes and
 * restore the world state.
 * The transactions are stored as a stack, and can be undone in
 * stack order to restore the world to it's original state
 */
export class TransactionManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
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
     * Commit all of the transaction operations currently attached
     * to the open transaction record to the manager.  These will
     * be added as a single transaction manager entry.
     * The open record will be closed and all tracking operations
     * will cease.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks
     * This function will commit the pending changes caused by any
     * of the track changes variants.  The changes will be
     * committed to the currently open transaction, but the
     * transaction will remain open for further records.
     * Pending block changes from tracking operations will be added
     * to the transaction record before submission to the
     * transaction manager
     *
     * @worldMutation
     *
     * @returns
     * Returns the number of change requests that were being
     * tracked
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg0: string) => void,
        redoClosure: (arg0: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks
     * Discard the currently open transaction without committing it
     * to the transaction manager stack.
     * All records within the transaction will be discarded, and
     * any tracking requests currently active will be stopped
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks
     * Discard any pending tracked changes.  This does not affect
     * the current open transaction contents, only the pending
     * tracked block operations
     *
     * @worldMutation
     *
     * @returns
     * Returns the number of change requests that were discarded
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    isBusy(): boolean;
    /**
     * @remarks
     * Open a transaction record which will be a container for any
     * number of transaction operations.
     * All transaction operations within a record are grouped and
     * treated as a single atomic unit
     *
     * @worldMutation
     *
     * @param name
     * Give the transaction record a name
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks
     * Perform an redo operation.  This will take the last
     * transaction record on the redo stack and store the current
     * world state and then apply the changes in the record.  This
     * will reduce the redo record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the undo stack in case the creator decides to
     * undo it
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks
     * Return the number of transaction records on the redo stack.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @remarks
     * Begin tracking block changes in a specified area.  These
     * will be added to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     *
     * @worldMutation
     *
     * @param from
     * Min block location of a bounding area
     * @param to
     * Max block location of a bounding area
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @remarks
     * Begin tracking block changes in a list of specified block
     * locations.
     *
     * @worldMutation
     *
     * @param locations
     * An array of block locations to monitor for changes
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: minecraftserver.BlockVolumeBase): boolean;
    /**
     * @remarks
     * Perform an undo operation.  This will take the last
     * transaction record on the stack and apply the stored world
     * state from before the changes were made.  This will reduce
     * the record stack by one.
     *
     * The transaction record affected by this operation will be
     * transferred to the redo stack in case the creator decides to
     * reapply it
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks
     * Return how many transactions records currently exist on the
     * stack
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    undoSize(): number;
}