/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { ButtonOptions, DividerOptions, DropdownItem, DropdownOptions, LabelOptions, Observable, SliderOptions, SpacingOptions, TextFieldOptions, ToggleOptions, UIRawMessage } from '..';

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
