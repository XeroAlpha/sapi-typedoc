/**
 * An enumeration describing the state of a block piston.
 */
export enum BlockPistonState {
    /**
     * @remarks
     * Whether the piston is fully expanded.
     *
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * Whether the piston is in the process of expanding.
     *
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * Whether the piston is fully retracted.
     *
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * Whether the piston is in the process of retracting.
     *
     */
    Retracting = 'Retracting',
}
