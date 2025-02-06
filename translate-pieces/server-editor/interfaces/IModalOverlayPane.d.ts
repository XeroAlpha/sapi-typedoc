/* IMPORT */ import { IModalControlPane, IPane, ISubPanePropertyItem } from '../index';

/**
 * A modal overlay pane is displayed over a root pane.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IModalOverlayPane extends IPane {
    /**
     * @remarks
     * A sub pane that represents content of the modal overlay.
     *
     */
    contentPane: ISubPanePropertyItem;
    /**
     * @remarks
     * A pane that represent modal control elements.
     *
     */
    controlPane: IModalControlPane;
}