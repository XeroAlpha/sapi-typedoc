// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-ui` 模块包含了用于基于对话框的简易用户交互功能的类型。
 * 
 *   * {@link ActionFormData} 包含了一系列带有标题与图片的按钮。便于要求用户从一系列选项中选择。
 *   * {@link MessageFormData} 则是包含了两个按钮的简易消息框，允许用户选择是/否或者确定/取消。
 *   * {@link ModalFormData} 则提供了一套更具灵活性的类似问卷形式的控件，允许用户填写并提交。
 * 
 * The `@minecraft/server-ui` module contains types for
 * expressing simple dialog-based user experiences.
 *
 *   * {@link ActionFormData} contain a list of buttons with
 * captions and images that can be used for presenting a set of
 * options to a player.
 *   * {@link MessageFormData} are simple two-button message
 * experiences that are functional for Yes/No or OK/Cancel
 * questions.
 *   * {@link ModalFormData} allow for a more flexible
 * "questionnaire-style" list of controls that can be used to
 * take input.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-ui",
 *   "version": "2.1.0-beta"
 * }
 * ```
 *
 */
import { EngineError } from '@minecraft/common';
import { InvalidEntityError, Player, RawMessage, RawMessageError } from '@minecraft/server';
export enum FormCancelationReason {
    UserBusy = 'UserBusy',
    UserClosed = 'UserClosed',
}

export enum FormRejectReason {
    MalformedResponse = 'MalformedResponse',
    PlayerQuit = 'PlayerQuit',
    ServerShutdown = 'ServerShutdown',
}

/**
 * Builds a simple player form with buttons that let the player
 * take action.
 * @seeExample showActionForm.ts
 * @seeExample showFavoriteMonth.ts
 */
export class ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     *
     */
    body(bodyText: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a button to this form with an icon from a resource
     * pack.
     *
     */
    button(text: RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks
     * Adds a section divider to the form.
     *
     */
    divider(): ActionFormData;
    /**
     * @remarks
     * Adds a header to the form.
     *
     * @param text
     * Text to display.
     */
    header(text: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a label to the form.
     *
     * @param text
     * Text to display.
     */
    label(text: RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @worldMutation
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: RawMessage | string): ActionFormData;
}

/**
 * Returns data about the player results from a modal action
 * form.
 * @seeExample showActionForm.ts
 * @seeExample showFavoriteMonth.ts
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

/**
 * Base type for a form response.
 */
export class FormResponse {
    private constructor();
    /**
     * @remarks
     * Contains additional details as to why a form was canceled.
     *
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * @remarks
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     *
     */
    readonly canceled: boolean;
}

/**
 * Builds a simple two-button modal dialog.
 * @seeExample showBasicMessageForm.ts
 * @seeExample showTranslatedMessageForm.ts
 */
export class MessageFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     *
     */
    body(bodyText: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Method that sets the text for the first button of the
     * dialog.
     *
     */
    button1(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * This method sets the text for the second button on the
     * dialog.
     *
     */
    button2(text: RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @worldMutation
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: RawMessage | string): MessageFormData;
}

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

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * @seeExample showBasicModalForm.ts
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a section divider to the form.
     *
     */
    divider(): ModalFormData;
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     *
     * @param label
     * The label to display for the dropdown.
     * @param items
     * The selectable items for the dropdown.
     * @param dropdownOptions
     * The optional additional values for the dropdown creation.
     */
    dropdown(
        label: RawMessage | string,
        items: (RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    /**
     * @remarks
     * Adds a header to the form.
     *
     * @param text
     * Text to display.
     */
    header(text: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a label to the form.
     *
     * @param text
     * Text to display.
     */
    label(text: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     *
     * @worldMutation
     *
     * @param player
     * Player to show this dialog to.
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    show(player: Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     *
     * @param label
     * The label to display for the slider.
     * @param minimumValue
     * The minimum selectable possible value.
     * @param maximumValue
     * The maximum selectable possible value.
     * @param sliderOptions
     * The optional additional values for the slider creation.
     */
    slider(
        label: RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    submitButton(submitButtonText: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     *
     * @param label
     * The label to display for the textfield.
     * @param placeholderText
     * The place holder text to display.
     * @param textFieldOptions
     * The optional additional values for the textfield creation.
     */
    textField(
        label: RawMessage | string,
        placeholderText: RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     *
     * @param label
     * The label to display for the toggle.
     * @param toggleOptions
     * The optional additional values for the toggle creation.
     */
    toggle(
        label: RawMessage | string,
        toggleOptions?: ModalFormDataToggleOptions,
    ): ModalFormData;
}

/**
 * Returns data about player responses to a modal form.
 * @seeExample showBasicModalForm.ts
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ModalFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * An ordered set of values based on the order of controls
     * specified by ModalFormData.
     *
     */
    readonly formValues?: (boolean | number | string | undefined)[];
}

export class UIManager {
    private constructor();
    /**
     * @remarks
     * @worldMutation
     *
     * @throws This function can throw errors.
     */
    closeAllForms(player: Player): void;
}

/**
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.dropdown} to provide
 * additional options for the dropdown creation.
 */
export interface ModalFormDataDropdownOptions {
    /**
     * @remarks
     * The default selected item index. It will be zero in case of
     * not setting this value.
     *
     */
    defaultValueIndex?: number;
    /**
     * @remarks
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

/**
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.slider} to provide
 * additional options for the slider creation.
 */
export interface ModalFormDataSliderOptions {
    /**
     * @remarks
     * The default value for the slider.
     *
     */
    defaultValue?: number;
    /**
     * @remarks
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
    /**
     * @remarks
     * Defines the increment of values that the slider generates
     * when moved. It will be '1' in case of not providing this.
     *
     */
    valueStep?: number;
}

/**
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.textField} to provide
 * additional options for the textfield creation.
 */
export interface ModalFormDataTextFieldOptions {
    /**
     * @remarks
     * The default value for the textfield.
     *
     */
    defaultValue?: RawMessage | string;
    /**
     * @remarks
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

/**
 * An interface that is passed into {@link
 * @minecraft/Server-ui.ModalFormData.toggle} to provide
 * additional options for the toggle creation.
 */
export interface ModalFormDataToggleOptions {
    /**
     * @remarks
     * The default value for the toggle.
     *
     */
    defaultValue?: boolean;
    /**
     * @remarks
     * It will show an exclamation icon that will display a tooltip
     * if it is hovered.
     *
     */
    tooltip?: RawMessage | string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    reason: FormRejectReason;
}

export const uiManager: UIManager;
