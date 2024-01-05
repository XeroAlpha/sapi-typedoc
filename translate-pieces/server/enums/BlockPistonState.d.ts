/**
 * @beta
 * An enumeration describing the state of a block piston.
 */
export enum BlockPistonState {
    /**
     * @beta
     * @remarks
     * Whether the piston is fully expanded.
     *
     */
    Expanded = 'Expanded',
    /**
     * @beta
     * @remarks
     * Whether the piston is in the process of expanding.
     *
     */
    Expanding = 'Expanding',
    /**
     * @beta
     * @remarks
     * Whether the piston is fully retracted.
     *
     */
    Retracted = 'Retracted',
    /**
     * @beta
     * @remarks
     * Whether the piston is in the process of retracting.
     *
     */
    Retracting = 'Retracting',
}