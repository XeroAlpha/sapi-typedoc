/* IMPORT */ import { BlockComponent } from '../index';

/**
 * @beta
 * For blocks that can contain a liquid (e.g., a cauldron),
 * this is a base component for liquid containers.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Relative fill level of the liquid container.
     *
     * This property can't be edited in read-only mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * Returns true if this reference to a liquid container is
     * still valid and contains the liquid of the type you have a
     * reference for (for example, if the block is unloaded, no
     * longer a liquid container or contains lava when you have a
     * potion container component, isValidLiquid will not be true.)
     *
     * @returns
     * True if this liquid container still exists, is valid and
     * contains the expected liquid type.
     */
    isValidLiquid(): boolean;
}