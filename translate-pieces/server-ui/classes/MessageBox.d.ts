/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { FormVisibilityError, InvalidFormModificationError, MessageBoxResult, ObservableString, ObservableUIRawMessage, UIRawMessage } from '..';

/**
 * @rc
 * A simple message form with two buttons and a text body. Use
 * this class to show a basic dialog to a player and handle the
 * player's button selection.
 */
export class MessageBox {
    /**
     * @remarks
     * Creates a new MessageBox for the specified player with the
     * given title.
     *
     * @param player
     * The player to show this message box to.
     * @param title
     * The title text to display at the top of the message box.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    constructor(
        player: Player,
        title: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    );
    /**
     * @remarks
     * Sets the body text displayed in the message box. Returns the
     * message box instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param body
     * The body text to display. Accepts either a plain string or
     * an ObservableString.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    body(body: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Sets the label for the first button of the message box.
     * Returns the message box instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label to display on the first button.
     * @param tooltip
     * Optional tooltip text shown when hovering over the first
     * button.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button1(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Sets the label for the second button of the message box.
     * Returns the message box instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label to display on the second button.
     * @param tooltip
     * Optional tooltip text shown when hovering over the second
     * button.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button2(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Closes the message box if it is currently being shown to the
     * player. Throws a FormVisibilityError if the form is not
     * currently open.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    close(): void;
    /**
     * @remarks
     * Returns true if the message box is currently being shown to
     * the player, false otherwise.
     *
     * @worldMutation
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * Shows the message box to the player. Returns a promise that
     * resolves with a MessageBoxResult containing the close reason
     * and the player's button selection.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    show(): Promise<MessageBoxResult>;
}
