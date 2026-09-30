/* IMPORT */ import { RequestBodyTooLargeError, WebSocketClientAfterEvents, WebSocketNotConnectedError } from '..';

/**
 * An active WebSocket client.
 */
export class WebSocketClient {
    private constructor();
    /**
     * @remarks
     * Contains a set of events related to this WebSocket client.
     *
     */
    readonly afterEvents: WebSocketClientAfterEvents;
    /**
     * @remarks
     * Set to true if the socket is current connected to the
     * server.
     *
     */
    readonly isOpen: boolean;
    /**
     * @remarks
     * Closes the connection with the server.
     *
     * @worldMutation
     *
     * @throws {WebSocketNotConnectedError}
     */
    close(): void;
    /**
     * @remarks
     * Sends the provided payload to the server.
     *
     * @worldMutation
     *
     * @param payload
     * The payload that will be included in the network packet.
     * @throws {RequestBodyTooLargeError}
     *
     * @throws {WebSocketNotConnectedError}
     */
    send(payload: string): void;
}
