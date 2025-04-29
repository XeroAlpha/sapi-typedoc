/* IMPORT */ import { BlockComponent, RGBA, TintMethod } from '../index';

/**
 * @rc
 * Represents the color of a block when displayed on a map.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Base map color defined for that block.
     *
     * @throws This property can throw when used.
     */
    readonly color: RGBA;
    /**
     * @remarks
     * Returns the base color multiplied to the evaluated tint at
     * the given position.
     *
     */
    readonly tintedColor: RGBA;
    /**
     * @remarks
     * Type of tint applied to the color.
     *
     * @throws This property can throw when used.
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:map_color';
}