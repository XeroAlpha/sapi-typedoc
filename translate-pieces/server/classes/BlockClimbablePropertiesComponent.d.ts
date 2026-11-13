/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError } from '..';

/**
 * Represents the climbable properties of a block with a
 * 'minecraft:climbable' component.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockClimbablePropertiesComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Returns whether an entity can climb this block when its feet
     * are sharing the same position as the block. Returns false
     * when the block does not define a 'minecraft:climbable'
     * component.
     *
     * @throws {LocationInUnloadedChunkError}
     *
     * @throws {LocationOutOfWorldBoundariesError}
     */
    readonly canClimb: boolean;
    /**
     * @remarks
     * Returns whether a player on this block can stop descending
     * and hold their position when sneaking. Returns false when
     * the block does not define a 'minecraft:climbable' component
     *
     * @throws {LocationInUnloadedChunkError}
     *
     * @throws {LocationOutOfWorldBoundariesError}
     */
    readonly canHoldPositionWhileSneaking: boolean;
    static readonly componentId = 'minecraft:climbable';
}
