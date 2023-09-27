/**
 * @beta
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Description of the block that has exploded.
     *
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     */
    readonly source?: Entity;
}