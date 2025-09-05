/* IMPORT */ import { RawMessage } from '../../server';

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
