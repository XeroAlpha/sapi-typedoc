/**
 * @beta
 * 表示一个实体的物品栏属性。
 * 
 * Defines this entity's inventory properties.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * 表示实体每层强度（实体组件 `minecraft:strength`）可以获得的额外槽数。
     * 
     * Number of slots that this entity can gain per extra
     * strength.
     *
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏中的物品可被漏斗或漏斗矿车转移走。
     * 
     * If true, the contents of this inventory can be removed by a
     * hopper.
     *
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @remarks
     * 表示实体的容器。
     * 
     * Defines the container for this entity. The container will be
     * undefined if the entity has been removed.
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    /**
     * @remarks
     * 表示实体容器的种类。
     * 
     * Type of container this entity has.
     *
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @remarks
     * 表示实体容器的槽位数量。
     * 
     * Number of slots the container has.
     *
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @remarks
     * 若为 `true`，则表示实体死亡不会掉落物品栏的物品。
     * 
     * If true, the entity will not drop it's inventory on death.
     *
     * @throws This property can throw when used.
     */
    readonly 'private': boolean;
    /**
     * @remarks
     * 若为 `true`，则表示实体物品栏仅能被其主人或实体自己访问和操作。
     * 
     * If true, the entity's inventory can only be accessed by its
     * owner or itself.
     *
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = 'minecraft:inventory';
}