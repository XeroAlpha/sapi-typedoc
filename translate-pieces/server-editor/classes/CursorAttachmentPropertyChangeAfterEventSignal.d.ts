/* IMPORT */ import { CursorAttachmentPropertiesChangeAfterEvent } from '../index';

export class CursorAttachmentPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(
        callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void,
    ): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void;
}