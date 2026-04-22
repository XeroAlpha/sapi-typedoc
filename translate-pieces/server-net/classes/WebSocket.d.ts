/* IMPORT */ import { HttpHeader, WebSocketClient } from '..';

/**
 * Used to manage WebSocket connections.
 */
export class WebSocket {
    private constructor();
    /**
     * @remarks
     * Attempts to connect a WebSocket client.
     *
     * @worldMutation
     *
     * @param uri
     * URL to make connection to.
     * @returns
     * An awaitable promise that contains the WebSocket client that
     * was connected.
     */
    connect(uri: string, headers?: HttpHeader[]): Promise<WebSocketClient>;
}
