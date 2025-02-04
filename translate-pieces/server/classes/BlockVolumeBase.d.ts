/* IMPORT */ import { BlockLocationIterator, BoundingBox, Vector3 } from '../index';

/**
 * BlockVolume 的基础类型。
 *
 * Base type for BlockVolumes.
 */
export class BlockVolumeBase {
	private constructor();
	/**
	 * @remarks
	 * 获取一个 {@link BlockLocationIterator}(方块位置迭代器)，表示该体积内所有方块的世界位置。
	 *
	 * Fetch a {@link BlockLocationIterator} that represents all of
	 * the block world locations within the specified volume
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	getBlockLocationIterator(): BlockLocationIterator;
	/**
	 * @beta
	 * @remarks
	 * 返回一个 {@link BoundingBox} 对象，表示该体积经过验证的最小和最大坐标。
	 *
	 * Return a {@link BoundingBox} object which represents the
	 * validated min and max coordinates of the volume
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getBoundingBox(): BoundingBox;
	/**
	 * @remarks
	 * 返回 BlockVolume 的容量（体积）（宽*深*高）。
	 *
	 * Return the capacity (volume) of the BlockVolume (W*D*H)
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	getCapacity(): number;
	/**
	 * @remarks
	 * 获取体积的最大角位置（保证 >= 最小值）。
	 *
	 * Get the largest corner position of the volume (guaranteed to
	 * be >= min)
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getMax(): Vector3;
	/**
	 * @remarks
	 * 获取体积的最小角位置（保证 <= 最大值）。
	 *
	 * Get the smallest corner position of the volume (guaranteed
	 * to be <= max)
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getMin(): Vector3;
	/**
	 * @remarks
	 * 获取一个 {@link Vector3} 对象，其中每个分量表示沿该轴的方块数量。
	 *
	 * Get a {@link Vector3} object where each component represents
	 * the number of blocks along that axis
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	getSpan(): Vector3;
	/**
	 * @remarks
	 * 检查给定的世界方块位置是否在 BlockVolume 内。
	 *
	 * Check to see if a given world block location is inside a
	 * BlockVolume
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	isInside(location: Vector3): boolean;
	/**
	 * @remarks
	 * 按指定的量移动 BlockVolume。
	 *
	 * Move a BlockVolume by a specified amount
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param delta
	 * 移动的方块数量。
	 *
	 * Amount of blocks to move by
	 */
	translate(delta: Vector3): void;
}
