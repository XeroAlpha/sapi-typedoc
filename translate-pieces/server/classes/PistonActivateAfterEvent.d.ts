/* IMPORT */ import { BlockEvent, BlockPistonComponent } from '../index';

/**
 * @beta
 * Contains information related to changes to a piston
 * expanding or retracting.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
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