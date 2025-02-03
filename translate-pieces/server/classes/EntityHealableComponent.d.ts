/* IMPORT */ import { EntityComponent, FeedItem } from "../index";

/**
 * 定义了与该实体交互以治疗它的方式。
 *
 * Defines the interactions with this entity for healing it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
	private constructor();
	/**
	 * @remarks
	 * 确定是否可以使用某个物品，即使实体的生命值已满。
	 *
	 * Determines if an item can be used regardless of the entity
	 * being at full health.
	 *
	 * @throws 使用此属性时可能会抛出异常。
	 *
	 * @throws This property can throw when used.
	 */
	readonly forceUse: boolean;
	static readonly componentId = "minecraft:healable";
	/**
	 * @remarks
	 * 一组可以专门治疗该实体的物品。
	 *
	 * A set of items that can specifically heal this entity.
	 *
	 * @returns
	 * 与此组件关联的实体。
	 *
	 * Entity that this component is associated with.
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	getFeedItems(): FeedItem[];
}
