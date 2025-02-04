/* IMPORT */ import { EffectType } from '../index';

/**
 * 表示一种效果类型 - 例如中毒 - 可以应用于实体。
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 */
export class EffectTypes {
	private constructor();
	/**
	 * @remarks
	 * 表示给定标识符的效果类型。
	 * Effect type for the given identifier.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param identifier
	 * 效果的标识符。
	 * The identifier for the effect.
	 * @returns
	 * 给定标识符的效果类型，若效果不存在则返回 undefined。
	 * Effect type for the given identifier or undefined if the
	 * effect does not exist.
	 */
	static get(identifier: string): EffectType | undefined;
	/**
	 * @remarks
	 * 获取所有效果。
	 * Gets all effects.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @returns
	 * 所有效果的列表。
	 * A list of all effects.
	 */
	static getAll(): EffectType[];
}
