/* IMPORT */ import { BlockComponent, FluidType, ItemStack, ItemType, RGBA } from '../index';

/**
 * Represents the fluid container of a block in the world. Used
 * with blocks like cauldrons.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Relative fill level of the fluid container.
     *
     * This property can't be edited in read-only mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * Custom color of the fluid in the container.
     *
     * This property can't be edited in read-only mode.
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluid_container';
    /**
     * @remarks
     * Adds a dye to the fluid. The dye color is combined with any
     * existing custom color.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * Gets the current fluid type in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * Sets the current fluid type in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * Sets a potion item in the container. Changes the container's
     * fluid type to potion.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setPotion(itemStack: ItemStack): void;
}