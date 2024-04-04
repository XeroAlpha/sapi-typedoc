/* IMPORT */ import { SelectionEventAfterEvent } from '../index';

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}