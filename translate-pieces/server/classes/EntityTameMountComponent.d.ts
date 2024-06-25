/* IMPORT */ import { EntityComponent, Player } from '../index';

/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @rc
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @rc
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @rc
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @rc
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     *
     * This function can't be called in read-only mode.
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
    /**
     * @rc
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}