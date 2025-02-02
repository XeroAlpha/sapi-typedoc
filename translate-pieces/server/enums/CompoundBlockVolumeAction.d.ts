/**
 * @beta
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 * 
 * Action枚举表示CompoundBlockVolume在进行内部/外部计算时如何考虑
 * 相关的CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     *
     * 相关的BlockVolume被视为一个正空间，并且任何交集测试都被视为命中。
     */
    Add = 0,
    /**
     * @remarks
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     *
     * 相关的BlockVolume被视为一个负空间或空白空间，并且任何交集测试都被视为未命中。
     * 使用Subtract操作，可以在方块体积中“打孔”，以便任何交集测试可以穿过此类空间。
     */
    Subtract = 1,
}