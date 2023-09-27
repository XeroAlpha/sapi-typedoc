/**
 * @beta
 * Contains information related to changes before a piston
 * expands or retracts.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If this is set to true within an event handler, the piston
     * activation is canceled.
     *
     */
    cancel: boolean;
    /**
     * @remarks
     * True if the piston is the process of expanding.
     *
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Contains additional properties and details of the piston.
     *
     */
    readonly piston: BlockPistonComponent;
}