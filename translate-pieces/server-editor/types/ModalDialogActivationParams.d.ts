/* IMPORT */ import { CoreModalDialogType, ModalDialogCoreResponseType, ModalDialogCustomResponse, ModalDialogDismissResponse, ModalDialogRequestData } from '..';

/**
 * Parameters required to activate a modal dialog instance
 */
export type ModalDialogActivationParams<T extends CoreModalDialogType | string> = {
    dialogId: T;
    onResponse?: (
        payload:
            | (T extends CoreModalDialogType ? ModalDialogCoreResponseType[T] : ModalDialogCustomResponse)
            | ModalDialogDismissResponse,
    ) => void;
} & (T extends CoreModalDialogType
    ? {
          data: ModalDialogRequestData[T];
      }
    : {
          data?: never;
      });
