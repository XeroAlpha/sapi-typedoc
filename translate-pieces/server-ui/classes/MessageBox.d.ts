/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { MessageBoxResult, Observable, UIRawMessage } from '..';

/**
 * @beta
 * A simple message form UI, 2 buttons and a text body.
 */
export declare class MessageBox {
    /**
     * @remarks
     * Sets the data for the text in the body of the form. It is
     * contained within a scroll view to allow for lots of text.
     *
     */
    body(text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Sets the data for the top button in the form.
     *
     */
    button1(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Sets the data for the bottom button in the form.
     *
     */
    button2(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Closes the form. Will throw an error if the form is not
     * open.
     *
     */
    close(): void;
    /**
     * @remarks
     * Show this modal to the player. Will throw an error if the
     * modal is already showing.
     *
     */
    show(): Promise<MessageBoxResult>;
    /**
     * @remarks
     * Creates a message form for a certain player. Use this
     * instead of a constructor.
     *
     */
    static create(
        player: Player,
        title: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
}
