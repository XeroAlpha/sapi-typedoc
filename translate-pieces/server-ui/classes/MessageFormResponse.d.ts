/* IMPORT */ import { FormResponse } from '../index';

/**
 * Returns data about the player results from a modal message
 * form.
 * @seeExample showBasicMessageForm.ts
 * @seeExample showTranslatedMessageForm.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MessageFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * Returns the index of the button that was pushed.
     *
     */
    readonly selection?: number;
}