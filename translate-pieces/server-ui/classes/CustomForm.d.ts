/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { ButtonOptions, DividerOptions, DropdownItem, DropdownOptions, Observable, SliderOptions, SpacingOptions, TextFieldOptions, TextOptions, ToggleOptions, UIRawMessage } from '..';

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
    button(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        onClick: () => void,
        options?: ButtonOptions,
    ): CustomForm;
    /**
     * @remarks
     * Tell the client to close the form. Throws an error if the
     * form is not open.
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
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        value: Observable<number>,
        items: DropdownItem[],
        options?: DropdownOptions,
    ): CustomForm;
    /**
     * @remarks
     * Inserts a header (i.e. large sized text) into the Custom
     * form.
     *
     */
    header(
        text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        options?: TextOptions,
    ): CustomForm;
    /**
     * @remarks
     * Returns true if the form is currently being shown to the
     * player.
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * Inserts a label (i.e. medium sized text) into the Custom
     * form.
     *
     */
    label(
        text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        options?: TextOptions,
    ): CustomForm;
    /**
     * @remarks
     * Shows the form to the player. Will return false if the
     * client was busy (i.e. in another menu or this one is open).
     * Will throw if the user disconnects.
     *
     * @throws
     *  *
     */
    show(): Promise<boolean>;
    /**
     * @remarks
     * Creates a slider that lets players pick a number between
     * minValue and maxValue. value must be client writable.
     *
     */
    slider(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
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
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
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
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        toggled: Observable<boolean>,
        options?: ToggleOptions,
    ): CustomForm;
    /**
     * @remarks
     * Creates a Custom form to show to the player. Use this
     * instead of a constructor.
     *
     */
    static create(
        player: Player,
        title: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): CustomForm;
}
