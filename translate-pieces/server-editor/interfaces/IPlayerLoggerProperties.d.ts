/* IMPORT */ import { LocalizedString, LogChannel } from '..';

/**
 * Player Logger Properties.
 */
export interface IPlayerLoggerProperties {
    /**
     * @remarks
     * Overrides whether this message raises the Editor error
     * state, which flashes the viewport and opens the log panel.
     * When left unset the default applies, which is to raise it
     * for error messages only. Set it to true to raise it for a
     * lower severity message, or false to suppress it for an
     * error.
     *
     */
    alert?: boolean;
    /**
     * @remarks
     * A log channel mask, default is Message
     *
     */
    channelMask?: LogChannel;
    /**
     * @remarks
     * A player log sub message for the toast channel
     *
     */
    subMessage?: LocalizedString;
}
