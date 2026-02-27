/**
 * 描述活塞方块的枚举量。
 * 
 * An enumeration describing the state of a block piston.
 */
export enum BlockPistonState {
    /**
     * @remarks
     * 活塞完全伸出。
     * 
     * Whether the piston is fully expanded.
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * 活塞在伸出过程中。
     * 
     * Whether the piston is in the process of expanding.
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * 活塞完全缩回。
     * 
     * Whether the piston is fully retracted.
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * 活塞在缩回过程中。
     * 
     * Whether the piston is in the process of retracting.
     *
     */
    Retracting = 'Retracting',
}
