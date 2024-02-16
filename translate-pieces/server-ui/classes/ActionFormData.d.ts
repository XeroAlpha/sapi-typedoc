/* IMPORT */ import { ActionFormResponse, minecraftserver } from '../index';

/**
 * Builds a simple player form with buttons that let the player
 * take action.
 * @example actionFormAskFavoriteMonth.ts
 * ```typescript
 * import { Player } from '@minecraft/server';
 * import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
 *
 * function askFavoriteMonth(player: Player) {
 *     const form = new ActionFormData()
 *         .title('Months')
 *         .body('Choose your favorite month!')
 *         .button('January')
 *         .button('February')
 *         .button('March')
 *         .button('April')
 *         .button('May');
 *
 *     form.show(player).then((response: ActionFormResponse) => {
 *         if (response.selection === 3) {
 *             player.sendMessage('I like April too!');
 *         } else {
 *             player.sendMessage('Nah, April is the best.');
 *         }
 *     });
 * }
 * ```
 */
export class ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     *
     */
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a button to this form with an icon from a resource
     * pack.
     *
     */
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * This function can't be called in read-only mode.
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     */
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}