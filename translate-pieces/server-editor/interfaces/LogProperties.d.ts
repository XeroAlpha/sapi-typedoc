/* IMPORT */ import { Player } from '../../server';
/* IMPORT */ import { ExtensionContext, LocalizationEntry, LogChannel } from '..';

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the
 * {@link ExtensionContext} - using the global instance allows
 * the creator to use this properties class to perform direct
 * server->client messaging and broadcasts.
 */
export interface LogProperties {
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
     * Display the log message to a log channel. If no channel is
     * specified, default channel is regular message.
     *
     */
    channelMask?: LogChannel;
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: Player;
    /**
     * @remarks
     * Message to be shown under the message when toast channel is
     * selected.
     *
     */
    subMessage?: LocalizationEntry | string;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}
