/**
 * 作为 Ageable 组件的一部分，表示可以喂食给实体的物品集合，以及这些物品使实体成长的速度。
 *
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 */
export class EntityDefinitionFeedItem {
	private constructor();
	/**
	 * @remarks
	 * 表示给实体喂食该物品时，实体的年龄会增加的数值。通常范围在 0 到 1 之间。
	 *
	 * The amount by which an entity's age will increase when fed
	 * this item. Values usually range between 0 and 1.
	 *
	 */
	readonly growth: number;
	/**
	 * @remarks
	 * 表示可以喂食物品类型的标识符。若未指定命名空间，则默认使用 'minecraft:'。例如 'wheat' 或 'golden_apple'。
	 *
	 * Identifier of type of item that can be fed. If a namespace
	 * is not specified, 'minecraft:' is assumed. Example values
	 * include 'wheat' or 'golden_apple'.
	 *
	 */
	readonly item: string;
}
