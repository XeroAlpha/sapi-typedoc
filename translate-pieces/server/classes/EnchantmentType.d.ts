/**
 * 描述了一种附魔类型的信息。
 *
 * Contains information on a type of enchantment.
 */
export class EnchantmentType {
	/**
	 * @remarks
	 * 表示附魔类型的名称。
	 *
	 * The name of the enchantment type.
	 *
	 */
	readonly id: string;
	/**
	 * @remarks
	 * 表示此附魔类型可以拥有的最大等级。
	 *
	 * The maximum level this type of enchantment can have.
	 *
	 */
	readonly maxLevel: number;
	/**
	 * @throws 此函数可能会抛出错误。
	 *
	 * @throws This function can throw errors.
	 */
	constructor(enchantmentType: string);
}
