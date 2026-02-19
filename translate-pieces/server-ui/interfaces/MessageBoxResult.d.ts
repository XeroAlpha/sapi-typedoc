/* IMPORT */ import { MessageBox } from '..';

/**
 * @beta
 * The result when a {@link MessageBox} is closed.
 */
export interface MessageBoxResult {
    /**
     * @remarks
     * The button that was selected, undefined if it was closed
     * without pressing a button.
     *
     */
    selection?: number;
    /**
     * @remarks
     * Whether the message box was shown
     *
     */
    wasShown: boolean;
}
