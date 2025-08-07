/* IMPORT */ import { LogChannel } from '../index';

/**
 * Player Logger Properties.
 */
export interface IPlayerLoggerProperties {
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
    subMessage?: string;
}