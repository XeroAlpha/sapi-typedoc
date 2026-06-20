/* IMPORT */ import { DataDrivenScreenClosedReason } from '..';

/**
 * The result returned when an MessageBox is closed. Contains
 * the reason the message box was closed and the player's
 * button selection, if applicable.
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
     * The index of the button the player selected. Not set if the
     * message box was closed without a button selection (e.g., the
     * player was busy or the server closed it).
     *
     */
    selection?: number;
}
