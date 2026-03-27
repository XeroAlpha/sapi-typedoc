/**
 * An error that is thrown when the maximum number of connected
 * WebSockets is reached.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class WebSocketLimitExceededError extends Error {
    private constructor();
    /**
     * @remarks
     * Number of WebSocket connections already active when
     * rejected.
     *
     * @earlyExecution
     *
     */
    readonly connectedSockets: number;
    /**
     * @remarks
     * Configured maximum active WebSocket connections.
     *
     * @earlyExecution
     *
     */
    readonly maxConcurrentConnections: number;
}
