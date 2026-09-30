/* IMPORT */ import { EntityComponent, Player } from '..';

/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns true if the entity is tamed.
     *
     * @throws
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * Returns true if the entity is tamed by a player.
     *
     * @throws
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     *
     * @throws
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     *
     * @worldMutation
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks
     * Sets this rideable entity as tamed by the given player.
     *
     * @worldMutation
     *
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}
