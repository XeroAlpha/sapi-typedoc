/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '../index';

/**
 * Represents a block that can display text on it.
 * @example addTwoSidedSign.ts
 * ```typescript
 * // A function the creates a sign at the specified location with text on both sides and dye colors
 * import {
 *     DimensionLocation,
 *     BlockPermutation,
 *     BlockSignComponent,
 *     BlockComponentTypes,
 *     DyeColor,
 *     SignSide,
 * } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function createSignAt(location: DimensionLocation) {
 *     const block = location.dimension.getBlock(location);
 *     if (!block) {
 *         console.warn('Could not find a block at specified location.');
 *         return;
 *     }
 *     const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, {
 *         ground_sign_direction: 8,
 *     });
 *     block.setPermutation(signPerm);
 *     const sign = block.getComponent(BlockComponentTypes.Sign);
 *
 *     if (sign !== undefined) {
 *         sign.setText(`Party Sign!\nThis is green on the front.`);
 *         sign.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
 *         sign.setTextDyeColor(DyeColor.Green);
 *         sign.setTextDyeColor(DyeColor.Red, SignSide.Back);
 *
 *         // players cannot edit sign!
 *         sign.setWaxed(true);
 *     } else {
 *         console.warn('Could not find a sign component on the block.');
 *     }
 * }
 * ```
 * @example setSignText.ts
 * ```typescript
 * import {
 *     BlockComponentTypes,
 *     DimensionLocation,
 *     RawMessage,
 *     RawText,
 * } from '@minecraft/server';
 *
 * // Function which updates a sign blocks text to raw text
 * function updateSignText(signLocation: DimensionLocation) {
 *     const block = signLocation.dimension.getBlock(signLocation);
 *     if (!block) {
 *         console.warn('Could not find a block at specified location.');
 *         return;
 *     }
 *
 *     const sign = block.getComponent(BlockComponentTypes.Sign);
 *     if (sign) {
 *         // RawMessage
 *         const helloWorldMessage: RawMessage = { text: 'Hello World' };
 *         sign.setText(helloWorldMessage);
 *
 *         // RawText
 *         const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
 *         sign.setText(helloWorldText);
 *
 *         // Regular string
 *         sign.setText('Hello World');
 *     } else {
 *         console.warn('Could not find a sign component on the block.');
 *     }
 * }
 * ```
 * @example createTranslatedSign.ts
 * ```typescript
 * // A function the creates a sign at the specified location with the specified text
 * import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function createSignAt(location: DimensionLocation) {
 *     const signBlock = location.dimension.getBlock(location);
 *
 *     if (!signBlock) {
 *         console.warn('Could not find a block at specified location.');
 *         return;
 *     }
 *
 *     const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *     signBlock.setPermutation(signPerm); // Update block to be a sign
 *
 *     // Update the sign block's text
 *     // with "Steve's Head"
 *     const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
 *     if (signComponent) {
 *         signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
 *     }
 * }
 * ```
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
     * @throws
     * Throws if the provided message is greater than 512
     * characters in length.
     * @example setSignText.ts
     * ```typescript
     * import {
     *     BlockComponentTypes,
     *     DimensionLocation,
     *     RawMessage,
     *     RawText,
     * } from '@minecraft/server';
     *
     * // Function which updates a sign blocks text to raw text
     * function updateSignText(signLocation: DimensionLocation) {
     *     const block = signLocation.dimension.getBlock(signLocation);
     *     if (!block) {
     *         console.warn('Could not find a block at specified location.');
     *         return;
     *     }
     *
     *     const sign = block.getComponent(BlockComponentTypes.Sign);
     *     if (sign) {
     *         // RawMessage
     *         const helloWorldMessage: RawMessage = { text: 'Hello World' };
     *         sign.setText(helloWorldMessage);
     *
     *         // RawText
     *         const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
     *         sign.setText(helloWorldText);
     *
     *         // Regular string
     *         sign.setText('Hello World');
     *     } else {
     *         console.warn('Could not find a sign component on the block.');
     *     }
     * }
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
    setWaxed(waxed: boolean): void;
}