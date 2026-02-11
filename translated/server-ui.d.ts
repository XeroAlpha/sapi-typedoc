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
 * @beta
 * A customizable form that lets you put buttons, labels,
 * toggles, dropdowns, sliders, and more into a form! Built on
 * top of Observable, the form will update when the
 * Observables' value changes.
 */
export declare class CustomForm {
    /**
     * @remarks
     * Inserts a button into the Custom form. onClick is called
     * when the button is pressed.
     *
     */
    button(label: Observable<string> | string | UIRawMessage, onClick: () => void, options?: ButtonOptions): CustomForm;
    /**
     * @remarks
     * Can this form be shown to the player right now?
     *
     */
    canShow(): boolean;
    /**
     * @remarks
     * Closes the form. Throws an error if the form is not open.
     *
     */
    close(): void;
    /**
     * @remarks
     * Adds a close "X" button to the form.
     *
     */
    closeButton(): CustomForm;
    /**
     * @remarks
     * Inserts a divider (i.e. a line) into the Custom form.
     *
     */
    divider(options?: DividerOptions): CustomForm;
    /**
     * @remarks
     * Inserts a dropdown into the Custom form with the provided
     * items. The value is based on the items value that selected.
     *
     */
    dropdown(
        label: Observable<string> | string | UIRawMessage,
        value: Observable<number>,
        items: DropdownItem[],
        options?: DropdownOptions,
    ): CustomForm;
    /**
     * @remarks
     * Inserts a label (i.e. medium sized text) into the Custom
     * form.
     *
     */
    label(text: Observable<string> | string | UIRawMessage, options?: LabelOptions): CustomForm;
    /**
     * @remarks
     * Shows the form to the player. Will throw errors if the form
     * is currently being shown or if another behavior pack is
     * showing a form.
     *
     */
    show(): Promise<void>;
    /**
     * @remarks
     * Creates a slider that lets players pick a number between
     * minValue and maxValue. value must be client writable.
     *
     */
    slider(
        label: Observable<string> | string | UIRawMessage,
        value: Observable<number>,
        minValue: Observable<number> | number,
        maxValue: Observable<number> | number,
        options?: SliderOptions,
    ): CustomForm;
    /**
     * @remarks
     * Inserts a space into the Custom form.
     *
     */
    spacer(options?: SpacingOptions): CustomForm;
    /**
     * @remarks
     * Inserts a text field into the Custom for that players can
     * enter text into.
     *
     */
    textField(
        label: Observable<string> | string | UIRawMessage,
        text: Observable<string>,
        options?: TextFieldOptions,
    ): CustomForm;
    /**
     * @remarks
     * Inserts an on/off toggle that players can interact with into
     * the Custom form.
     *
     */
    toggle(
        label: Observable<string> | string | UIRawMessage,
        toggled: Observable<boolean>,
        options?: ToggleOptions,
    ): CustomForm;
    /**
     * @remarks
     * Creates a Custom form to show to the player. Use this
     * instead of a constructor.
     *
     */
    static create(player: Player, title: Observable<string> | string | UIRawMessage): CustomForm;
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
    body(text: Observable<string> | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Sets the data for the top button in the form.
     *
     */
    button1(
        label: Observable<string> | string | UIRawMessage,
        tooltip?: Observable<string> | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks
     * Sets the data for the bottom button in the form.
     *
     */
    button2(
        label: Observable<string> | string | UIRawMessage,
        tooltip?: Observable<string> | string | UIRawMessage,
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
     * Sets the title of form.
     *
     */
    title(text: Observable<string> | string | UIRawMessage): MessageBox;
    /**
     * @remarks
     * Creates a message form for a certain player. Use this
     * instead of a constructor.
     *
     */
    static create(player: Player): MessageBox;
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
    toggle(label: RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
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

/**
 * @beta
 * A class that represents data that can be Observed.
 * Extensively used for UI.
 */
export declare class Observable<T extends string | number | boolean> {
    /**
     * @remarks
     * Gets the data from the Observable.
     *
     */
    getData(): T;
    /**
     * @remarks
     * Sets the data on this Observable and notifies the
     * subscribers.
     *
     */
    setData(data: T): void;
    /**
     * @remarks
     * Subscribes a callback to any changes that occur to the
     * Observable. The return value can be passed into the
     * `unsubscribe` function to stop listening to changes.
     *
     */
    subscribe(listener: (newValue: T) => void): (newValue: T) => void;
    /**
     * @remarks
     * Unsubscribe a callback from any changes that occur to the
     * Observable. This takes the return value from the `subscribe`
     * function.
     *
     */
    unsubscribe(listener: (newValue: T) => void): void;
    /**
     * @remarks
     * Creates an Observable, use this instead of a constructor.
     *
     */
    static create<T extends string | number | boolean>(data: T, options?: ObservableOptions): Observable<T>;
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
 * @beta
 * The options for including a button in {@link CustomForm}.
 */
export interface ButtonOptions {
    /**
     * @remarks
     * Whether or not this button is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * The tooltip for this button, shown when hovering the button.
     *
     */
    tooltip?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this button is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The options for including a spacer in {@link CustomForm}.
 */
export interface DividerOptions {
    /**
     * @remarks
     * Whether or not this divider is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * Dropdown data for use in {@link CustomForm}.
 */
export interface DropdownItem {
    /**
     * @remarks
     * The description of the dropdown item shown when it is
     * selected.
     *
     */
    description?: string;
    /**
     * @remarks
     * The label of the dropdown item in the dropdown.
     *
     */
    label: string;
    /**
     * @remarks
     * The value the dropdown will be set to when this item is
     * selected.
     *
     */
    value: number;
}

/**
 * @beta
 * The options for including a dropdown in {@link CustomForm}.
 */
export interface DropdownOptions {
    /**
     * @remarks
     * The description of the dropdown, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this dropdown is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this dropdown is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The options for including a label in {@link CustomForm}.
 */
export interface LabelOptions {
    /**
     * @remarks
     * Whether or not this label is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The result when a {@link MessageBox} is closed.
 */
export interface MessageBoxResult {
    /**
     * @remarks
     * The button that was selected, undefined if it was closed
     * without pressing a button.
     *
     */
    selection?: number;
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

/**
 * @beta
 * An interface passed into `Observable.create`.
 */
export interface ObservableOptions {
    /**
     * @remarks
     * If set to true, the client can update this value. This
     * should be used for things like dropdown values, toggles,
     * textfields, etc. If unset or false, the client cannot write
     * to this observable.
     *
     */
    clientWritable?: boolean;
}

/**
 * @beta
 * The options for including a slider in {@link CustomForm}.
 */
export interface SliderOptions {
    /**
     * @remarks
     * The description of the slider, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this slider is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * The step size of the slider. For example, if this is 2 and
     * the min is 0 and the max is 10, the only selectable values
     * will be 0, 2, 4, 6, 8, 10.
     *
     */
    step?: Observable<number> | number;
    /**
     * @remarks
     * Whether or not this slider is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The options for including a spacer in {@link CustomForm}.
 */
export interface SpacingOptions {
    /**
     * @remarks
     * Whether or not this spacer is visible
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The options for including a textfield in {@link CustomForm}.
 */
export interface TextFieldOptions {
    /**
     * @remarks
     * The description for this text field, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this text field is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this text field is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * The options for including a toggle in {@link CustomForm}.
 */
export interface ToggleOptions {
    /**
     * @remarks
     * The description for this toggle, shown in the UI.
     *
     */
    description?: Observable<string> | string | UIRawMessage;
    /**
     * @remarks
     * Whether or not this toggle is disabled.
     *
     */
    disabled?: Observable<boolean> | boolean;
    /**
     * @remarks
     * Whether or not this toggle is visible.
     *
     */
    visible?: Observable<boolean> | boolean;
}

/**
 * @beta
 * A message that can be sent to the client. This is a subset
 * of the RawMessage type, and is used for UI messages.
 */
export interface UIRawMessage {
    /**
     * @remarks
     * Provides a raw-text equivalent of the current message.
     *
     */
    rawtext?: UIRawMessage[];
    /**
     * @remarks
     * Provides a string literal value to use.
     *
     */
    text?: string;
    /**
     * @remarks
     * Provides a translation token where, if the client has an
     * available resource in the players' language which matches
     * the token, will get translated on the client.
     *
     */
    translate?: string;
    /**
     * @remarks
     * Arguments for the translation token. Can be either an array
     * of strings or UIRawMessage containing an array of raw text
     * objects.
     *
     */
    with?: string[] | UIRawMessage;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks
     * @earlyExecution
     *
     */
    readonly reason: FormRejectReason;
}

export const uiManager: UIManager;
