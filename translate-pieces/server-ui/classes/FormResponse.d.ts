/* IMPORT */ import { FormCancelationReason } from '..';

/**
 * 表单结果的基础类型。
 *
 * Base type for a form response.
 */
export class FormResponse {
    private constructor();
    /**
     * @remarks
     * 表单被取消的附加原因。
     *
     * Contains additional details as to why a form was canceled.
     *
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * @remarks
     * 若为 `true`，则表单由玩家取消（例如点击了关闭按钮）。
     *
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     *
     */
    readonly canceled: boolean;
}
