/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player, RawMessage, RawMessageError } from '../../server';
/* IMPORT */ import { MessageFormResponse } from '..';

/**
 * 构建简易的双按钮模态对话框。
 *
 * Builds a simple two-button modal dialog.
 * @seeExample showBasicMessageForm.ts
 * @seeExample showTranslatedMessageForm.ts
 */
export class MessageFormData {
    /**
     * @remarks
     * 设定模态表单的主体文本。
     *
     * Method that sets the body text for the modal form.
     *
     * @param bodyText
     * 主体文本内容。
     */
    body(bodyText: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * 设定对话框第一个按钮的文本。
     *
     * Method that sets the text for the first button of the
     * dialog.
     *
     * @param text
     * 按钮文本内容。
     */
    button1(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * 设定对话框第二个按钮的文本。
     *
     * This method sets the text for the second button on the
     * dialog.
     *
     * @param text
     * 按钮文本内容。
     */
    button2(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * 创建并展示此模态弹出式表单，玩家点击确定或取消按钮后异步返回。表单必须有内容，否则将展示创建失败的消息框；玩家的游戏界面不能被聊天屏幕等界面阻塞，否则将不会展示。
     *
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @worldMutation
     *
     * @param player
     * 要展示对话框的玩家。
     *
     * Player to show this dialog to.
     * @throws 
     * 如果发生底层错误，将抛出 {@link EngineError}。
     *
     * 如果 `player` 传入的玩家当前不在世界中，将抛出 {@link InvalidEntityError}。
     *
     * 如果表单中存在无法正常解析的文本组件，将抛出 {@link RawMessageError}。
     */
    show(player: Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * 设定对话框标题。
     *
     * This builder method sets the title for the modal dialog.
     *
     * @param titleText
     * 标题文本内容。
     */
    title(titleText: RawMessage | string): MessageFormData;
}
