/* IMPORT */ import { DataDrivenScreenClosedReason, MessageBox } from '..';

/**
 * @beta
 * The result when a {@link MessageBox} is closed.
 */
export interface MessageBoxResult {
    /**
     * @remarks
     * The reason the message box was closed.
     *
     */
    closeReason: DataDrivenScreenClosedReason;
    /**
     * @remarks
     * The button that was selected, undefined if it was closed
     * without pressing a button.
     *
     */
    selection?: number;
}
