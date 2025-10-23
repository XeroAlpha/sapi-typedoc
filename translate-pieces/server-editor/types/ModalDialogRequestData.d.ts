/* IMPORT */ import { CoreModalDialogType, DataPickerModalDialogVariant } from '..';

/**
 * Data types supported by a modal dialog request
 */
export type ModalDialogRequestData = {
    [CoreModalDialogType.DataPicker]: {
        default: string;
        variant: DataPickerModalDialogVariant;
    };
};
