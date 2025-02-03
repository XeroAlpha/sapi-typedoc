/* IMPORT */ import { BlockComponent, RGBA, TintMethod } from '../index';

/**
 * @beta
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:map_color';
    /**
     * @remarks
     * Base map color defined for that block.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    color(): RGBA;
    /**
     * @remarks
     * Returns the base color multiplied to the evaluated tint at
     * the given position.
     *
     * This function can't be called in read-only mode.
     *
     */
    tintedColor(): RGBA;
    /**
     * @remarks
     * Type of tint applied to the color.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    tintMethod(): TintMethod;
}