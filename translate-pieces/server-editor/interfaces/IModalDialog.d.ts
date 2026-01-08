/* IMPORT */ import { IModalControlPane, IPropertyPane, LocalizedString, ModalDialogCustomResponse } from '..';

export interface IModalDialog {
    /**
     * @remarks
     * Identifier for the active request for this dialog
     *
     */
    readonly activeRequestId: string | undefined;
    /**
     * @remarks
     * Custom pane layout for the dialog
     *
     */
    readonly contentPane: IPropertyPane;
    /**
     * @remarks
     * Custom pane layout for the dialog
     *
     */
    readonly controlPane: IModalControlPane;
    /**
     * @remarks
     * Unique identifier for the dialog
     *
     */
    readonly id: string;
    /**
     * @remarks
     * Title of the dialog
     *
     */
    readonly title: LocalizedString | undefined;
    /**
     * @remarks
     * Dispatches a dismiss message to the active request if it is
     * available
     *
     */
    sendDismiss(): void;
    /**
     * @remarks
     * Dispatches a response message to the active request if it is
     * available
     *
     * @param response
     * Response message to be handled by the active request
     */
    sendResponse(response: ModalDialogCustomResponse): void;
    /**
     * @remarks
     * Updates the title of the modal dialog
     *
     * @param title
     * New title
     */
    setTitle(title: LocalizedString | undefined): void;
}
