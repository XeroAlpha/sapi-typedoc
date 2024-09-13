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
    subscribe(callback: (arg: ClipboardChangeAfterEvent) => void): (arg: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg: ClipboardChangeAfterEvent) => void): void;
}