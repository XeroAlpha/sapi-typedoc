/* IMPORT */ import { BlockLocationIterator, Vector3 } from '../../server';

/**
 * @remarks
 * Executes an operation over a BlockLocationIterator via
 * chunks to allow splitting operation over multiple game ticks
 *
 * @param blockLocationIterator
 * the selection to iterator over
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperationFromIterator(
    blockLocationIterator: BlockLocationIterator,
    operation: (blockLocation: Vector3) => void,
): Promise<void>;
