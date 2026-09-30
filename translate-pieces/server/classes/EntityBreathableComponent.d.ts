/* IMPORT */ import { BlockPermutation, EntityComponent } from '..';

/**
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The current air supply of the entity.
     *
     * @worldMutation
     *
     * @throws
     * Will throw an error if the air supply is out of bounds
     * [suffocationTime, maxAirSupply].
     */
    airSupply: number;
    /**
     * @remarks
     * If true, this entity can breathe in air.
     *
     * @throws
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in lava.
     *
     * @throws
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in solid blocks.
     *
     * @throws
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in water.
     *
     * @throws
     */
    readonly breathesWater: boolean;
    /**
     * @remarks
     * If true, the entity is able to breathe.
     *
     * @throws
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * Time in seconds to recover breath to maximum.
     *
     * @throws
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * Time in seconds between suffocation damage.
     *
     * @throws
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * Time in seconds the entity can hold its breath.
     *
     * @throws
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * @throws
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * List of blocks this entity can't breathe in.
     *
     * @throws
     */
    getNonBreatheBlocks(): BlockPermutation[];
}
