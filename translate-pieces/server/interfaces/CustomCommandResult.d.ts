/* IMPORT */ import { CustomCommandStatus } from '..';

/**
 * Interface returned from custom command callback function.
 */
export interface CustomCommandResult {
    /**
     * @remarks
     * Message displayed to chat after command execution.
     *
     */
    message?: string;
    /**
     * @remarks
     * Command execution Success or Failure. Determines how the
     * status message is displayed.
     *
     */
    status: CustomCommandStatus;
}
