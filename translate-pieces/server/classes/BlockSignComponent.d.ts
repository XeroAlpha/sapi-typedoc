/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '..';

/**
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
     * Defaults to: 0
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
     * Defaults to: 0
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
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * Sets the text of the sign component.
     *
     * @worldMutation
     *
     * @param message
     * The message to set on the sign. If set to a string, then
     * call `getText` to read that string. If set to a RawMessage,
     * then calling `getRawText` will return a RawText.
     * @param side
     * The side of the sign the message will be set on. If not
     * provided, the message will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws
     * Throws if the provided message is greater than 512
     * characters in length.
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks
     * Sets the dye color of the text.
     *
     * @worldMutation
     *
     * @param color
     * The dye color to apply to the sign or undefined to clear the
     * dye on the sign.
     * Defaults to: null
     * @param side
     * The side of the sign the color will be set on. If not
     * provided, the color will be set on the front side of the
     * sign.
     * Defaults to: 0
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * Makes it so players cannot edit this sign.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}
