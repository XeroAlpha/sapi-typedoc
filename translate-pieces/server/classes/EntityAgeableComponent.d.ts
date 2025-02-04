/* IMPORT */ import { EntityComponent, EntityDefinitionFeedItem, Trigger } from '../index';

/**
 * 为实体添加一个成长计时器。可以通过喂给实体它喜欢的物品（由 feedItems 定义）来加速成长。
 * 
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体成长为成年所需的时间，-1 表示永远是幼体。
     * 
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * 表示当实体成长为成年时触发的事件。
     * 
     * Event that runs when this entity grows up.
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * 表示成功交互后，喂食的物品将转化为的物品。
     * 
     * The feed item used will transform into this item upon
     * successful interaction.
     *
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * 表示实体成长为成年时掉落的物品列表。
     * 
     * List of items that the entity drops when it grows up.
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * 表示可以喂给实体的物品列表。包括物品名称的 'item' 和定义成长时间的 'growth'。
     * 
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}