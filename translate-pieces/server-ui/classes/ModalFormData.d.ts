/* IMPORT */ import { ModalFormResponse, minecraftserver } from '../index';

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * @seeExample showBasicModalForm.ts
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     *
     */
    dropdown(
        label: minecraftserver.RawMessage | string,
        options: (minecraftserver.RawMessage | string)[],
        defaultValueIndex?: number,
    ): ModalFormData;
    /**
     * @beta
     * @remarks
     * Adds a header to the form.
     *
     * @param text
     * Text to display.
     */
    header(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @beta
     * @remarks
     * Adds a label to the form.
     *
     * @param text
     * Text to display.
     */
    label(text: minecraftserver.RawMessage | string): ModalFormData;
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
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     *
     */
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     *
     */
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        defaultValue?: minecraftserver.RawMessage | string,
    ): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     *
     */
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     *
     */
    toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData;
}