/* IMPORT */ import { Vector3, minecraftcommon } from "../index";

/**
 * BlockLocationIterator 返回当前迭代的方块体积内的下一个方块位置。
 * BlockLocationIterator 用于抽象出其来源的方块体积的形状
 * （因此它可以表示构成矩形、立方体、球体、直线和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有规定，BlockLocationIterator 将按照以下顺序遍历三维空间：
 * 先按 X 轴递增，然后按 Z 轴递增，最后按 Y 轴递增。
 * （实际上是沿着 XZ 平面逐步移动，当该平面中的所有位置都遍历完后，
 * 再增加 Y 坐标以进入下一个 XZ 切片）
 *
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 */
export class BlockLocationIterator implements Iterable<Vector3> {
	private constructor();
	/**
	 * @remarks
	 * 此函数无法在只读模式下调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	[Symbol.iterator](): Iterator<Vector3>;
	/**
	 * @beta
	 * @remarks
	 * 检查底层的方块体积是否已失效。
	 * 若从创建迭代器到迭代期间，方块体积被修改，将返回 `false`，
	 * 否则返回 `true`。
	 *
	 * Checks if the underlining block volume has been invalidated.
	 * Will return false if the block volume was modified between
	 * creating the iterator and iterating it, and true otherwise.
	 *
	 * @throws 此函数可能抛出错误。
	 *
	 * @throws This function can throw errors.
	 *
	 * {@link minecraftcommon.EngineError}
	 */
	isValid(): boolean;
	/**
	 * @remarks
	 * 此函数无法在只读模式下调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	next(): IteratorResult<Vector3>;
}
