/* IMPORT */ import { RawMessage } from '../../server';

/**
 * Customizes the progress screen shown while transferring a
 * player to another server. Text fields accept strings or
 * RawMessage values. RawMessage translations are resolved in
 * the receiving player's language.
 */
export interface TransferPlayerUIOptions {
    /**
     * @remarks
     * Custom body text for the transfer progress screen. Accepts a
     * string or a RawMessage. If omitted, the default progress
     * message is used.
     *
     */
    bodyText?: RawMessage | string;
    /**
     * @remarks
     * Boolean to determine if the body text is visible on the
     * server transfer loading screen.
     *
     */
    bodyVisible?: boolean;
    /**
     * @remarks
     * A delay in seconds before the cancel button is made visible
     * on the server transfer loading screen. This will override
     * the 'cancelButtonVisible' option if set.
     *
     */
    cancelButtonDelaySeconds?: number;
    /**
     * @remarks
     * Custom label for the transfer progress screen's cancel
     * button. Accepts a string or a RawMessage. If omitted, the
     * default cancel label is used.
     *
     */
    cancelButtonText?: RawMessage | string;
    /**
     * @remarks
     * Boolean to determine if the cance button text is visible on
     * the server transfer loading screen.
     *
     */
    cancelButtonVisible?: boolean;
    /**
     * @remarks
     * Custom title for the transfer progress screen. Accepts a
     * string or a RawMessage. If omitted, the default progress
     * title is used.
     *
     */
    titleText?: RawMessage | string;
    /**
     * @remarks
     * Boolean to determine if the title text is visible on the
     * server transfer loading screen.
     *
     */
    titleVisible?: boolean;
}
