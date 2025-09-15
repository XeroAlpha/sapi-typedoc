/* IMPORT */ import { BlockComponent, Direction, InvalidBlockComponentError } from '..';

/**
 * @beta
 * Represents a block that can output a redstone signal.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Gets the power that this block outputs to circuit system.
     *
     * @throws This property can throw when used.
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    /**
     * @remarks
     * Gets the faces of this block that can connect to the circuit
     * and output power.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * Gets the block face that strongly powers the block touching
     * it.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
