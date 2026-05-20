/* IMPORT */ import { EngineError } from '../../common';
/* IMPORT */ import { InvalidEntityError, Player } from '../../server';
/* IMPORT */ import { ButtonOptions, DataDrivenScreenClosedReason, DividerOptions, DropdownItemData, DropdownOptions, FormVisibilityError, InvalidFormModificationError, InvalidObservableError, ObservableBoolean, ObservableNumber, ObservableString, ObservableUIRawMessage, SliderOptions, SpacingOptions, TextFieldOptions, TextOptions, ToggleOptions, UIRawMessage } from '..';

/**
 * @rc
 * A customizable data driven (DDUI) form that lets you add
 * buttons, labels, toggles, dropdowns, sliders, text fields,
 * and more. The form layout is built by calling methods to add
 * components before calling show(). Any Observable values
 * bound to form components will automatically update the UI
 * when their values change.
 */
export class CustomForm {
    /**
     * @remarks
     * Creates a new CustomForm for the specified player with the
     * given title.
     *
     * @param player
     * The player to show this form to.
     * @param title
     * The title text to display at the top of the form.
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    constructor(
        player: Player,
        title: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    );
    /**
     * @remarks
     * Adds a clickable button to the form layout. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label to display on the button.
     * @param onClick
     * A callback function that is invoked when the player clicks
     * the button.
     * @param options
     * Optional configuration for the button, such as a tooltip,
     * disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        onClick: () => void,
        options?: ButtonOptions,
    ): CustomForm;
    /**
     * @remarks
     * Closes the form if it is currently being shown to the
     * player. Throws a FormVisibilityError if the form is not
     * currently open.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    close(): void;
    /**
     * @remarks
     * Adds a close button to the form at the bottom and as an 'X'
     * in the corner. Returns the form instance to allow method
     * chaining.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    closeButton(): CustomForm;
    /**
     * @remarks
     * Adds a horizontal divider line to the form layout. Useful
     * for visually separating sections of the form. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param options
     * Optional configuration for the divider, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    divider(options?: DividerOptions): CustomForm;
    /**
     * @remarks
     * Adds a dropdown selection control to the form layout. The
     * current selection is tracked via an ObservableNumber and
     * will update when the player changes the selection. Returns
     * the form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label displayed around the dropdown.
     * @param value
     * An ObservableNumber that holds the index of the currently
     * selected item.
     * @param items
     * The list of items to display in the dropdown.
     * @param options
     * Optional configuration for the dropdown, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    dropdown(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        items: DropdownItemData[],
        options?: DropdownOptions,
    ): CustomForm;
    /**
     * @remarks
     * Adds a header text component to the form layout. Headers are
     * displayed in a larger or bolder style than regular labels,
     * and are suitable for section titles. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param text
     * The header text to display.
     * @param options
     * Optional configuration for the header, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    header(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @remarks
     * Returns true if the form is currently being shown to the
     * player, false otherwise.
     *
     * @worldMutation
     *
     */
    isShowing(): boolean;
    /**
     * @remarks
     * Adds a read-only text label to the form layout. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param text
     * The text to display in the label.
     * @param options
     * Optional configuration for the label, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    label(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @remarks
     * Shows the form to the player. Returns a promise that
     * resolves with a DataDrivenScreenClosedReason indicating how
     * the form was closed.
     *
     * @worldMutation
     *
     * @throws This function can throw errors.
     *
     * {@link EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link InvalidEntityError}
     */
    show(): Promise<DataDrivenScreenClosedReason>;
    /**
     * @remarks
     * Adds a numeric slider control to the form layout. The
     * current value is tracked via an ObservableNumber and will
     * update as the player moves the slider. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label displayed around the slider.
     * @param value
     * An ObservableNumber that holds the current value of the
     * slider.
     * @param min
     * The minimum value of the slider range.
     * @param max
     * The maximum value of the slider range.
     * @param options
     * Optional configuration for the slider, such as step size, a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    slider(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        min: number | ObservableNumber,
        max: number | ObservableNumber,
        options?: SliderOptions,
    ): CustomForm;
    /**
     * @remarks
     * Adds a vertical spacer component to the form layout. Useful
     * for adding empty space between form components. Returns the
     * form instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param options
     * Optional configuration for the spacer, such as visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    spacer(options?: SpacingOptions): CustomForm;
    /**
     * @remarks
     * Adds a text input field to the form layout. The current text
     * value is tracked via an ObservableString and will update as
     * the player types. Returns the form instance to allow method
     * chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label displayed around the text field.
     * @param text
     * An ObservableString that holds the current text value of the
     * input field.
     * @param options
     * Optional configuration for the text field, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    textField(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        text: ObservableString,
        options?: TextFieldOptions,
    ): CustomForm;
    /**
     * @remarks
     * Adds a toggle (on/off switch) control to the form layout.
     * The current state is tracked via an ObservableBoolean and
     * will update when the player toggles it. Returns the form
     * instance to allow method chaining.
     *
     * @worldMutation
     *
     * @param label
     * The text label displayed next to the toggle.
     * @param toggled
     * An ObservableBoolean that holds the current on/off state of
     * the toggle.
     * @param options
     * Optional configuration for the toggle, such as a
     * description, disabled state, or visibility.
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    toggle(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        toggled: ObservableBoolean,
        options?: ToggleOptions,
    ): CustomForm;
}
