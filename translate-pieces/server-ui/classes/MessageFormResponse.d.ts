/* IMPORT */ import { FormResponse } from '..';

/**
 * 获取信息表单（Message Form）的结果。
 *
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
     * 按下的按钮的索引。
     *
     * Returns the index of the button that was pushed.
     *
     */
    readonly selection?: number;
}
