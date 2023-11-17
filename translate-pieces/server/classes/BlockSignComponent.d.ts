/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '../index';

/**
 * @beta
 * Represents a block that can display text on it.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
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
     * Returns the RawText of the sign if `setText` was called with
     * a RawMessage or a RawText object, otherwise returns
     * undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * Returns the text of the sign if `setText` was called with a
     * string, otherwise returns undefined.
     *
     * @param side
     * The side of the sign to read the message from. If not
     * provided, this will return the message from the front side
     * of the sign.
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * Gets the dye that is on the text or undefined if the sign
     * has not been dyed.
     *
     * @param side
     * The side of the sign to read the dye from. If not provided,
     * this will return the dye on the front side of the sign.
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * Sets the text of the sign component.
     *
     * This function can't be called in read-only mode.
     *
     * @param message
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText. If set to a
     * RawText, then calling `getRawText` will return the same
     * object that was passed in.
     * @param side
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * @throws This function can throw errors.
     * @example SetRawMessage.ts
     * ```typescript
     * const helloWorldMessage: RawMessage = { text: 'Hello World' };
     * sign.setText(helloWorldMessage);
     *
     * // Sign text will be saved as a RawText
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetRawText.ts
     * ```typescript
     * const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
     * sign.setText(helloWorldText);
     *
     * // There will be no data transformation unlike calling setText with a RawMessage
     * const result: RawText = sign.getRawText();
     * JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
     * ```
     * @example SetString.ts
     * ```typescript
     * // Set sign to say 'Hello'
     * sign.setText('Hello');
     * sign.getText(); // 'Hello'
     * ```
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /**
     * @remarks
     * Sets the dye color of the text.
     *
     * This function can't be called in read-only mode.
     *
     * @param color
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * @param side
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * Makes it so players cannot edit this sign.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setWaxed(): void;
}