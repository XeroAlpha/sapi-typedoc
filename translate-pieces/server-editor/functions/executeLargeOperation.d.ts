/* IMPORT */ import { RelativeVolumeListBlockVolume, Vector3 } from '../index';

/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 *
 * @param operation
 * the operation to apply over each block location
 */
export declare function executeLargeOperation(
    volume: RelativeVolumeListBlockVolume,
    operation: (blockLocation: Vector3) => void,
): Promise<void>;