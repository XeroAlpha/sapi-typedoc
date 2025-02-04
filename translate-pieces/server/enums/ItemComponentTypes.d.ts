/**
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 *
 * 通过函数 ItemStack.getComponent 访问的物品组件类型。
 */
export enum ItemComponentTypes {
	/**
	 * @rc
	 */
	Compostable = "minecraft:compostable",
	/**
	 * @remarks
	 * The minecraft:cooldown component.
	 *
	 * 表示 minecraft:cooldown(冷却) 组件。
	 */
	Cooldown = "minecraft:cooldown",
	/**
	 * @remarks
	 * The minecraft:durability component.
	 *
	 * 表示 minecraft:durability(耐久度) 组件。
	 */
	Durability = "minecraft:durability",
	/**
	 * @beta
	 */
	Dyeable = "minecraft:dyeable",
	/**
	 * @remarks
	 * The minecraft:enchantable component.
	 *
	 * 表示 minecraft:enchantable(附魔) 组件。
	 */
	Enchantable = "minecraft:enchantable",
	/**
	 * @remarks
	 * The minecraft:food component.
	 *
	 * 表示 minecraft:food(食物) 组件。
	 */
	Food = "minecraft:food",
	/**
	 * @beta
	 */
	Potion = "minecraft:potion",
}
