/* IMPORT */ import { FormResponse } from '../index';

/**
 * Returns data about the player results from a modal action
 * form.
 * @seeExample actionFormAskFavoriteMonth.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ActionFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * Returns the index of the button that was pushed.
     *
     */
    readonly selection?: number;
}