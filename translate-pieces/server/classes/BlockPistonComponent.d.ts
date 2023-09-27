/**
 * @beta
 * When present, this block has piston-like behavior. Contains
 * additional properties for discovering block piston state.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Whether the piston is fully expanded.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanded: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding.
     *
     * @throws This property can throw when used.
     */
    readonly isExpanding: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of expanding or
     * retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * Whether the piston is fully retracted.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracted: boolean;
    /**
     * @remarks
     * Whether the piston is in the process of retracting.
     *
     * @throws This property can throw when used.
     */
    readonly isRetracting: boolean;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * Retrieves a set of blocks that this piston is connected
     * with.
     *
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Vector3[];
}