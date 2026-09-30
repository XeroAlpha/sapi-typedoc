/* IMPORT */ import { EntityComponent, EntityDefinitionFeedItem, Trigger } from '..';

/**
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws
     */
    readonly duration: number;
    /**
     * @remarks
     * Event that runs when this entity grows up.
     *
     * @throws
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * The feed item used will transform into this item upon
     * successful interaction.
     *
     * @throws
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * List of items that the entity drops when it grows up.
     *
     * @throws
     */
    getDropItems(): string[];
    /**
     * @remarks
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}
