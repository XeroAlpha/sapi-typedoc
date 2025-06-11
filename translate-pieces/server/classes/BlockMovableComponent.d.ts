/* IMPORT */ import { BlockComponent, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MovementType, StickyType } from '../index';

/**
 * @rc
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}