/* IMPORT */ import { ClipboardChangeAfterEvent } from '../index';

export class ClipboardChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): (arg0: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): void;
}