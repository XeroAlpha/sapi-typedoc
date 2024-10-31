/* IMPORT */ import { NoArgsAction, RegisteredAction } from '../index';

/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * Action associated with tool activation
     *
     */
    action?: RegisteredAction<NoArgsAction>;
    /**
     * @remarks
     * Icon resource
     *
     */
    icon?: string;
    /**
     * @remarks
     * Localized title of the tool
     *
     */
    title?: string;
    /**
     * @remarks
     * Tooltip description of the tool
     *
     */
    tooltip?: string;
}