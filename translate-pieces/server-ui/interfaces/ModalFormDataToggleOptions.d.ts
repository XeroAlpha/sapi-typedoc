/* IMPORT */ import { minecraftserver } from '../index';

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
    tooltip?: minecraftserver.RawMessage | string;
}