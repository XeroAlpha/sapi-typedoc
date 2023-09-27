/**
 * Parameters for creating a modal tool in the tool container
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * The displayed string for the tool
     *
     */
    displayAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    displayStringId?: string;
    /**
     * @remarks
     * Icon, if any (from resource pack on client)
     *
     */
    icon?: string;
    /**
     * @remarks
     * tooltipAltText alt text, if any
     *
     */
    tooltipAltText?: string;
    /**
     * @remarks
     * Tooltip localization string ID
     *
     */
    tooltipStringId?: string;
}