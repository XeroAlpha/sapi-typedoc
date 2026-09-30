/* IMPORT */ import { Block, BlockComponent, BlockPistonState, Vector3 } from '..';

/**
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Whether the piston is in the process of expanding or
     * retracting.
     *
     * @throws
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * The current state of the piston.
     *
     * @throws
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * Retrieves a set of blocks that this piston is connected
     * with.
     *
     * @throws
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * Retrieves a set of block locations that this piston is
     * connected with.
     *
     * @throws
     */
    getAttachedBlocksLocations(): Vector3[];
}
