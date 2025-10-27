/* IMPORT */ import { ModalDialogResponseType } from '..';

/**
 * Response data for custom modal dialog
 */
export type ModalDialogCustomResponse = {
    type: ModalDialogResponseType | string;
    payload?: unknown;
};
