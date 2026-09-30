/* IMPORT */ import { EntityComponent, ItemStack, Player } from '..';

/**
 * Defines the rules for an entity to be tamed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * @throws
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * Returns true if the entity is tamed by player.
     *
     * @throws
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws
     */
    readonly probability: number;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed.
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
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Set this entity as tamed by the given player.
     *
     * @worldMutation
     *
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws
     */
    tame(player: Player): boolean;
}
