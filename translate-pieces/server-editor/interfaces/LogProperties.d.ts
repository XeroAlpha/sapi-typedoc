/* IMPORT */ import { minecraftserver } from '../index';

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the {@link
 * @minecraft/server-editor-bindings.ExtensionContext} - using
 * the global instance allows the creator to use this
 * properties class to perform direct server->client messaging
 * and broadcasts.
 */
export interface LogProperties {
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     *
     */
    player?: minecraftserver.Player;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     *
     */
    tags?: string[];
}