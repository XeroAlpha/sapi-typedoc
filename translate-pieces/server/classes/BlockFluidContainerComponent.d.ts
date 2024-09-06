/* IMPORT */ import { BlockComponent, FluidType, ItemStack, ItemType, RGBA } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    fillLevel: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    fluidColor: RGBA;
    static readonly componentId = 'minecraft:fluidContainer';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getFluidType(): FluidType;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setPotion(itemStack: ItemStack): void;
}