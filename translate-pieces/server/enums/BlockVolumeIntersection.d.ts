/**
 * @beta
 * Description of the resulting intersection test on two
 * BlockVolume objects
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * Volume B has no intersection points with Volume A
     *
     */
    Disjoint = 0,
    /**
     * @remarks
     * Volume B resides completely inside Volume A
     *
     */
    Contains = 1,
    /**
     * @remarks
     * Volume B partially intersects Volume A
     *
     */
    Intersects = 2,
}