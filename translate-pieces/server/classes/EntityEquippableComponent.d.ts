/* IMPORT */ import { ContainerSlot, EntityComponent, EquipmentSlot, ItemStack } from "../index";

/**
 * 提供对生物装备槽的访问。此组件存在于所有生物实体上。
 *
 * Provides access to a mob's equipment slots. This component
 * exists for all mob entities.
 * @seeExample givePlayerElytra.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityEquippableComponent extends EntityComponent {
	private constructor();
	static readonly componentId = "minecraft:equippable";
	/**
	 * @remarks
	 * 获取指定装备槽位中的装备物品。
	 *
	 * Gets the equipped item for the given EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand"
	 * @returns
	 * 返回装备在指定装备槽位中的物品。若为空，则返回 undefined。
	 *
	 * Returns the item equipped to the given EquipmentSlot. If
	 * empty, returns undefined.
	 *
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
	/**
	 * @remarks
	 * 获取与指定装备槽位对应的 ContainerSlot(容器槽位)。
	 *
	 * Gets the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @returns
	 * 返回与指定装备槽位对应的 ContainerSlot(容器槽位)。
	 *
	 * Returns the ContainerSlot corresponding to the given
	 * EquipmentSlot.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
	/**
	 * @remarks
	 * 替换指定装备槽位中的物品。
	 *
	 * Replaces the item in the given EquipmentSlot.
	 *
	 * 此函数无法在只读模式下调用。
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param equipmentSlot
	 * 装备槽位，例如 "head"（头部）、"chest"（胸部）、"offhand"（副手）。
	 *
	 * The equipment slot. e.g. "head", "chest", "offhand".
	 * @param itemStack
	 * 要装备的物品。若为 undefined，则清空该槽位。
	 *
	 * The item to equip. If undefined, clears the slot.
	 * @throws 此函数可能会抛出错误。
	 * @throws This function can throw errors.
	 */
	setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}
