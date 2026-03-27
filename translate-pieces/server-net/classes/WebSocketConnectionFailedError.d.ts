/**
 * An error thrown when the connection with the WebSocket
 * server has failed.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketConnectionFailedError extends Error {
    private constructor();
    /**
     * @remarks
     * The error code received when attempting to connect with the
     * server.
     *
     * @earlyExecution
     *
     */
    readonly errorCode: number;
    /**
     * @remarks
     * The URI provided to make this connection attempt that
     * failed.
     *
     * @earlyExecution
     *
     */
    readonly uri: string;
}
