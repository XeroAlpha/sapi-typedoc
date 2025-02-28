/* IMPORT */ import { BlockComponent, TintMethod } from '../index';

/**
 * @beta
 * Represents the particles that appear when the block is
 * destroyed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockDestructionParticlesComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Name of the texture used for the particles.
     *
     * @throws This property can throw when used.
     *
     * {@link Error}
     */
    readonly texture: string;
    /**
     * @remarks
     * Type of tint applied to the particles.
     *
     * @throws This property can throw when used.
     *
     * {@link Error}
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = 'minecraft:destruction_particles';
}