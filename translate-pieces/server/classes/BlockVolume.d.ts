/* IMPORT */ import { BlockVolumeBase, BlockVolumeIntersection, Vector3 } from "../index";

/**
 * BlockVolume 是一个简单的接口，表示在世界方块位置中具有给定大小（三维方块）的矩形区域。
 * 注意，这些并不等同于“最小值”和“最大值”，因为向量的各个分量顺序并不固定。
 * 此外，这些向量位置不能与 BlockLocation 互换使用。
 * 如果需要将此体积表示为 BlockLocation 的范围，可以使用 getBoundingBox 工具函数。
 * 此体积类会保持初始设置的角索引顺序。例如，当你在编辑器中分配每个角并移动角的位置时
 * （可能会颠倒边界的最小值/最大值关系），原本选择的左上角可能会变成右下角。
 * 手动编辑这些体积时，需要在编辑时保持角的标识 - BlockVolume 的工具函数会处理这一点。
 *
 * 需要注意的是，这里测量的是方块的大小（起点到终点）。
 * 一个普通的 AABB (0,0,0) 到 (0,0,0) 传统上大小为 (0,0,0)。
 * 但因为我们测量的是方块，BlockVolume 的大小或跨度实际上为 (1,1,1)。
 *
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
	/**
	 * @remarks
	 * 表示一个三维矩形中某个角的世界方块位置。
	 *
	 * A world block location that represents a corner in a 3D
	 * rectangle
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	"from": Vector3;
	/**
	 * @remarks
	 * 表示一个三维矩形中与另一角相对的世界方块位置。
	 *
	 * A world block location that represents the opposite corner
	 * in a 3D rectangle
	 *
	 * This property can't be edited in read-only mode.
	 *
	 */
	to: Vector3;
	constructor(from: Vector3, to: Vector3);
	/**
	 * @remarks
	 * 检测给定位置是否直接与 BlockVolume 的外表面相邻。
	 *
	 * Check to see if the given location is directly adjacent to
	 * the outer surface of a BlockVolume.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param pos
	 * 要测试的世界方块位置。
	 *
	 * The world block location to test
	 * @returns
	 * 如果位置在内部或距离超过 0 个方块，函数将返回 false。
	 * 如果位置直接接触到 BlockVolume 的外表面，函数将返回 true。
	 *
	 * If the location is either inside or more than 0 blocks away,
	 * the function will return false.
	 * If the location is directly contacting the outer surface of
	 * the BlockVolume, the function will return true.
	 */
	doesLocationTouchFaces(pos: Vector3): boolean;
	/**
	 * @remarks
	 * 检测两个方块体积是否直接相邻并且两个面接触。
	 *
	 * Check to see if a two block volumes are directly adjacent
	 * and two faces touch.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param other
	 * 要测试的体积。
	 *
	 * The volume to test
	 * @returns
	 * 如果两个方块体积的外表面在任何点相接触并直接相邻，返回 true。
	 *
	 * If the outer faces of both block volumes touch and are
	 * directly adjacent at any point, return true.
	 */
	doesVolumeTouchFaces(other: BlockVolume): boolean;
	/**
	 * @remarks
	 * 返回一个枚举值，表示两个 BlockVolume 对象之间的交集。
	 *
	 * Return an enumeration which represents the intersection
	 * between two BlockVolume objects
	 *
	 * This function can't be called in read-only mode.
	 *
	 */
	intersects(other: BlockVolume): BlockVolumeIntersection;
}
