/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { MessageBoxResult, Observable, UIRawMessage } from '..';

/**
 * @beta
 * A simple message form UI, 2 buttons and a text body.
 */
export declare class MessageBox {
    /**
     * @remarks
     * Sets the data for the text in the body of the message box.
     * It is contained within a scroll view to allow for lots of
     * text.
     *
     */
    body(text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Sets the data for the top button in the message box.
     *
     */
    button1(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Sets the data for the bottom button in the message box.
     *
     */
    button2(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Tell the client to close the message box. Throws {@link
     * FormCloseError} if the message box is not open.
     *
     */
    close(): void;
    /**
     * @remarks
     * Returns true if the message box is currently being shown to
     * the player.
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * Show this message box to the player. Will return a result
     * even if the client was busy (i.e. in another menu). Will
     * throw if the user disconnects.
     *
     */
    show(): Promise<MessageBoxResult>;
    /**
     * @remarks
     * Creates a message box for a certain player. Use this instead
     * of a constructor.
     *
     */
    static create(
        player: Player,
        title: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
}
