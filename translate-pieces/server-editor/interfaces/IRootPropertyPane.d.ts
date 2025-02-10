/* IMPORT */ import { IModalOverlayPane, IModalOverlayPaneOptions, IPropertyPane } from '../index';

/**
 * A root pane that can store property items.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IRootPropertyPane extends IPropertyPane {
    /**
     * @remarks
     * Register a modal overlay to the root pane. It will be hidden
     * by default, when shown it will display over the root pane
     * content. Only one modal overlay can be shown at a time.
     *
     * @param options
     * Creation parameters for modal overlay pane.
     */
    createModalOverlayPane(options?: IModalOverlayPaneOptions): IModalOverlayPane;
    /**
     * @remarks
     * @returns
     * Unique identifier of the active modal overlay
     */
    getActiveModalOverlayId(): string | undefined;
    /**
     * @remarks
     * @returns
     * Current visibility state of header action
     */
    isHeaderActionVisible(): boolean;
    /**
     * @remarks
     * Sets registered modal overlay as active, if not found it
     * will hide the current.
     *
     * @param id
     * Unique id for modal overlay pane.
     */
    setActiveModalOverlay(id: string | undefined): void;
    /**
     * @remarks
     * If a header action exists, updates visibility of the button.
     *
     * @param visible
     * New visibility state of the action button.
     */
    setHeaderActionVisibility(visible: boolean): void;
}