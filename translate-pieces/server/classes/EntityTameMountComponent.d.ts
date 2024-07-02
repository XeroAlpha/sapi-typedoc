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
     * @remarks
     * Returns true if the entity is tamed.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @rc
     * @remarks
     * Returns true if the entity is tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @rc
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @rc
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
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
     * Sets this rideable entity as tamed by the given player.
     *
     * This function can't be called in read-only mode.
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}