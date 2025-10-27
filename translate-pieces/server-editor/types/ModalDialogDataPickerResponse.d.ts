/* IMPORT */ import { ModalDialogResponseType } from '..';

/**
 * Payloads that confirm data picker selection
 */
export type ModalDialogDataPickerResponse = {
    type: ModalDialogResponseType.Confirm;
    selected: string;
};
