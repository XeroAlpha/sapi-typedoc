/* IMPORT */ import { IPlayerLoggerProperties } from '..';

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
    debug(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    error(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    info(message: string, props?: IPlayerLoggerProperties): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     * @param props
     * Optional player log properties
     */
    warning(message: string, props?: IPlayerLoggerProperties): void;
}
