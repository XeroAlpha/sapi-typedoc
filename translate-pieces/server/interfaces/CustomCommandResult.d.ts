/* IMPORT */ import { CustomCommandStatus, RawMessage } from '..';

/**
 * Interface returned from custom command callback function.
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * Message displayed to chat after command execution. Accepts a
     * {@link RawMessage} or a plain string.
     *
     */
    message?: RawMessage | string;
    /**
     * @remarks
     * Command execution Success or Failure. Determines how the
     * status message is displayed.
     *
     */
    status: CustomCommandStatus;
}
