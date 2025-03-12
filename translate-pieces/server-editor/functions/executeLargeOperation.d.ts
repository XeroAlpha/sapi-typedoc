/* IMPORT */ import { RelativeVolumeListBlockVolume, minecraftserver } from '../index';

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
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;