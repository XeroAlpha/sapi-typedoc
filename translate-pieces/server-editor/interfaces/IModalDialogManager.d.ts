/* IMPORT */ import { CoreModalDialogType, IModalDialog, IModalDialogActivationRequest, ModalDialogActivationParams, ModalDialogCreationParams } from '..';

export interface IModalDialogManager {
    /**
     * @remarks
     * Creates a modal activation request for an existing modal
     * template
     *
     * @param params
     * Activation parameters
     */
    activateDialog<T extends CoreModalDialogType | string>(
        params: ModalDialogActivationParams<T>,
    ): IModalDialogActivationRequest;
    /**
     * @remarks
     * Removes the active modal from view
     *
     */
    dismissActiveDialog(): void;
    /**
     * @remarks
     * Creates a custom modal dialog with a property pane
     *
     * @param params
     * Creation parameters
     */
    registerDialog(params: ModalDialogCreationParams): IModalDialog;
}
