/**
 * 表示一种效果类型，例如中毒，可以应用于实体。
 *
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectType {
	private constructor();
	/**
	 * @remarks
	 * 此效果类型的标识符名称。
	 *
	 * Identifier name of this effect type.
	 *
	 * @returns
	 * 效果类型的标识符。
	 *
	 * Identifier of the effect type.
	 */
	getName(): string;
}
