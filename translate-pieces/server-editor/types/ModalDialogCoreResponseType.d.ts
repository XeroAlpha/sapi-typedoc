/* IMPORT */ import { CoreModalDialogType, ModalDialogDataPickerResponse } from '..';

/**
 * Response data for core modal dialogs
 */
export type ModalDialogCoreResponseType = {
    [CoreModalDialogType.DataPicker]: ModalDialogDataPickerResponse;
};
