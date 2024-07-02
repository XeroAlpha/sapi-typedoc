/* IMPORT */ import { EntityComponent, ItemStack, Player } from '../index';

/**
 * @rc
 * Defines the rules for an entity to be tamed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * @throws This property can throw when used.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * Returns true if the entity is tamed by player.
     *
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Set this entity as tamed by the given player.
     *
     * This function can't be called in read-only mode.
     *
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
}