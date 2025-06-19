/* IMPORT */ import { minecraftserver } from '../index';

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
    tooltip?: minecraftserver.RawMessage | string;
}