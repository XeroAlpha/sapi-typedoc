/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '../index';

/**
 * 表示一个可以显示文字的方块。
 *
 * Represents a block that can display text on it.
 * @seeExample addSign.ts
 * @seeExample addTwoSidedSign.ts
 * @seeExample updateSignText.ts
 * @seeExample addTranslatedSign.ts 604a92ba
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
	private constructor();
	/**
	 * @remarks
	 * 表示玩家是否可以编辑告示牌。若告示牌上使用了蜜脾或调用了 `setWaxed` 方法，则玩家无法编辑。
	 *
	 * Whether or not players can edit the sign. This happens if a
	 * sign has had a honeycomb used on it or `setWaxed` was called
	 * on the sign.
	 *
	 * @throws This property can throw when used.
	 */
	readonly isWaxed: boolean;
	static readonly componentId = 'minecraft:sign';
	/**
	 * @remarks
	 * 若使用 `setText` 方法设置了 RawMessage 或 RawText 对象，则返回告示牌的 RawText，否则返回 undefined。
	 *
	 * Returns the RawText of the sign if `setText` was called with
	 * a RawMessage or a RawText object, otherwise returns
	 * undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌面。若未提供，则返回告示牌正面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 * @throws This function can throw errors.
	 */
	getRawText(side?: SignSide): RawText | undefined;
	/**
	 * @remarks
	 * 若使用 `setText` 方法设置了字符串，则返回告示牌的文本，否则返回 undefined。
	 *
	 * Returns the text of the sign if `setText` was called with a
	 * string, otherwise returns undefined.
	 *
	 * @param side
	 * 要读取消息的告示牌面。若未提供，则返回告示牌正面的消息。
	 *
	 * The side of the sign to read the message from. If not
	 * provided, this will return the message from the front side
	 * of the sign.
	 * @throws This function can throw errors.
	 */
	getText(side?: SignSide): string | undefined;
	/**
	 * @remarks
	 * 获取告示牌文字上的染料颜色，若未染色则返回 undefined。
	 *
	 * Gets the dye that is on the text or undefined if the sign
	 * has not been dyed.
	 *
	 * @param side
	 * 要读取染料的告示牌面。若未提供，则返回告示牌正面的染料。
	 *
	 * The side of the sign to read the dye from. If not provided,
	 * this will return the dye on the front side of the sign.
	 * @throws This function can throw errors.
	 */
	getTextDyeColor(side?: SignSide): DyeColor | undefined;
	/**
	 * @remarks
	 * 设置告示牌组件的文本。
	 *
	 * Sets the text of the sign component.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param message
	 * 要设置在告示牌上的消息。若设置为字符串，则可以通过调用 `getText` 来读取该字符串。若设置为 RawMessage，则调用 `getRawText` 会返回一个 RawText。若设置为 RawText，则调用 `getRawText` 会返回传入的相同对象。
	 *
	 * The message to set on the sign. If set to a string, then
	 * call `getText` to read that string. If set to a RawMessage,
	 * then calling `getRawText` will return a RawText. If set to a
	 * RawText, then calling `getRawText` will return the same
	 * object that was passed in.
	 * @param side
	 * 要设置消息的告示牌面。若未提供，则消息将设置在告示牌正面。
	 *
	 * The side of the sign the message will be set on. If not
	 * provided, the message will be set on the front side of the
	 * sign.
	 * @throws
	 * 若提供的消息长度超过 512 个字符，则抛出错误。
	 *
	 * Throws if the provided message is greater than 512
	 * characters in length.
	 */
	setText(message: RawMessage | RawText | string, side?: SignSide): void;
	/**
	 * @remarks
	 * 设置文字的染料颜色。
	 *
	 * Sets the dye color of the text.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @param color
	 * 要应用于告示牌的染料颜色，或者 undefined 以清除告示牌上的染料。
	 *
	 * The dye color to apply to the sign or undefined to clear the
	 * dye on the sign.
	 * @param side
	 * 要设置颜色的告示牌面。若未提供，则颜色将设置在告示牌正面。
	 *
	 * The side of the sign the color will be set on. If not
	 * provided, the color will be set on the front side of the
	 * sign.
	 * @throws This function can throw errors.
	 */
	setTextDyeColor(color?: DyeColor, side?: SignSide): void;
	/**
	 * @remarks
	 * 使玩家无法编辑此告示牌。
	 *
	 * Makes it so players cannot edit this sign.
	 *
	 * This function can't be called in read-only mode.
	 *
	 * @throws This function can throw errors.
	 */
	setWaxed(waxed: boolean): void;
}
