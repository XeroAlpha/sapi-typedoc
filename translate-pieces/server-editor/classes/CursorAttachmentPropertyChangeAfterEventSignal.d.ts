/* IMPORT */ import { CursorAttachmentPropertiesChangeAfterEvent } from '../index';

export class CursorAttachmentPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void,
    ): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void;
}