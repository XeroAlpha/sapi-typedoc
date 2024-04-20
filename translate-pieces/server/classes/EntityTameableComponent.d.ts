/* IMPORT */ import { EntityComponent, ItemStack, Player } from '../index';

/**
 * @beta
 * Defines the rules for an entity to be tamed by the player.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * @throws This property can throw when used.
     */
    readonly probability: number;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * @throws This function can throw errors.
     */
    getTameItems(): ItemStack[];
    /**
     * @throws This function can throw errors.
     */
    isTamed(): boolean;
    /**
     * @remarks
     * Tames this entity.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
    /**
     * @throws This function can throw errors.
     */
    tamedToPlayer(): Player | undefined;
    /**
     * @throws This function can throw errors.
     */
    tamedToPlayerId(): string;
}