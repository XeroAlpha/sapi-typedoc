/**
 * The options to create a pane.
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Fallback display text if no loc ID
     *
     */
    titleAltText: string;
    /**
     * @remarks
     * Loc ID (resolved on client)
     *
     */
    titleStringId: string;
    /**
     * @remarks
     * Width of the panel in rem. This property is ignored in case
     * of sub panes
     *
     */
    width?: number;
}