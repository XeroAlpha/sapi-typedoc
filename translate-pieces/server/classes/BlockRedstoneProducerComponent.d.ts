/* IMPORT */ import { BlockComponent, Direction, InvalidBlockComponentError } from '..';

/**
 * Represents a block that can output a redstone signal.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Gets the power that this block outputs to circuit system.
     * Returns error if block is no longer valid or if block
     * doesn't have a 'minecraft:redstone_producer' component.
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
     * and output power. Returns error if block is no longer valid
     * or if block doesn't have a 'minecraft:redstone_producer'
     * component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @remarks
     * Gets the block face that strongly powers the block touching
     * it. If the 'minecraft:redstone_producer' block component
     * hasn't defined a 'strongly_powered_face' then this method
     * returns 'undefined'. Returns error if block is no longer
     * valid or if block doesn't have a
     * 'minecraft:redstone_producer' component.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}
