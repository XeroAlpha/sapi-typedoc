/* IMPORT */ import { IPlayerLoggerProperties, LocalizedString } from '..';

/**
 * Log helper interface for Player.
 */
export interface IPlayerLogger {
    /**
     * @remarks
     * Dispatch a player log message with Debug log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    debug(message: LocalizedString, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    error(message: LocalizedString, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    info(message: LocalizedString, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    warning(message: LocalizedString, props?: IPlayerLoggerProperties): void;
}
