/**
 * Description of the resulting intersection test on two
 * BlockVolume objects
 *
 * 表示两个BlockVolume对象的相交测试结果
 */
export enum BlockVolumeIntersection {
	/**
	 * @remarks
	 * Volume B has no intersection points with Volume A
	 *
	 * 体积B与体积A没有交集
	 */
	Disjoint = 0,
	/**
	 * @remarks
	 * Volume B resides completely inside Volume A
	 *
	 * 体积B完全位于体积A内
	 */
	Contains = 1,
	/**
	 * @remarks
	 * Volume B partially intersects Volume A
	 *
	 * 体积B与体积A部分相交
	 */
	Intersects = 2,
}
