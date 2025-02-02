/**
 * @beta
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 * 
 * 一个枚举类型，用于描述CompoundBlockVolumeItem
 * 相对于父CompoundVolume的相对位置。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     *
     * 关联的BlockVolume中的位置是相对于它们被添加到的
     * CompoundBlockVolume。
     */
    Relative = 0,
    /**
     * @remarks
     * The locations within the associated BlockVolume are in
     * absolute world space
     *
     * 关联的BlockVolume中的位置处于绝对世界空间中。
     */
    Absolute = 1,
}