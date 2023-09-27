/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 *
 * @param selection
 * the selection to iterator over
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperation(
    selection: Selection,
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;