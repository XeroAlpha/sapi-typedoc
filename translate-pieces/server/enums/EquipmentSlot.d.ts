/**
 * The equipment slot of the mob. This includes armor, offhand
 * and mainhand slots.
 *
 * 生物的装备槽位。包括护甲、副手和主手槽位。
 */
export enum EquipmentSlot {
	/**
	 * @beta
	 * @remarks
	 * The body slot. This slot is used to hold armor for
	 * non-humanoid mobs.
	 *
	 * 身体槽位。此槽位用于存放非人形生物的护甲。
	 */
	Body = "Body",
	/**
	 * @remarks
	 * The chest slot. This slot is used to hold items such as
	 * Chestplate or Elytra.
	 *
	 * 胸部槽位。此槽位用于存放如胸甲或鞘翅等物品。
	 */
	Chest = "Chest",
	/**
	 * @remarks
	 * The feet slot. This slot is used to hold items such as
	 * Boots.
	 *
	 * 脚部槽位。此槽位用于存放如靴子等物品。
	 */
	Feet = "Feet",
	/**
	 * @remarks
	 * The head slot. This slot is used to hold items such as
	 * Helmets or Carved Pumpkins.
	 *
	 * 头部槽位。此槽位用于存放如头盔或雕刻南瓜等物品。
	 */
	Head = "Head",
	/**
	 * @remarks
	 * The legs slot. This slot is used to hold items such as
	 * Leggings.
	 *
	 * 腿部槽位。此槽位用于存放如护腿等物品。
	 */
	Legs = "Legs",
	/**
	 * @remarks
	 * The mainhand slot. For players, the mainhand slot refers to
	 * the currently active hotbar slot.
	 *
	 * 主手槽位。对于玩家来说，主手槽位指的是当前激活的快捷栏槽位位。
	 */
	Mainhand = "Mainhand",
	/**
	 * @remarks
	 * The offhand slot. This slot is used to hold items such as
	 * shields and maps.
	 *
	 * 副手槽位。此槽位用于存放如盾牌和地图等物品。
	 */
	Offhand = "Offhand",
}
