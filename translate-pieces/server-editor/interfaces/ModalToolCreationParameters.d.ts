/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * Icon, if any (from resource pack on client)
     *
     */
    icon?: string;
    /**
     * @remarks
     * Modal input context identifier
     *
     */
    inputContextId?: string;
    /**
     * @remarks
     * Localized text label for modal input context
     *
     */
    inputContextLabel?: string;
    /**
     * @remarks
     * Title of the tool
     *
     */
    title: string;
    /**
     * @remarks
     * Tooltip description of the toll
     *
     */
    tooltip?: string;
}