/* IMPORT */ import { HttpRequest, HttpResponse } from '../index';

/**
 * @seeExample simpleHttpRequest.ts
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * Cancels all pending requests.
     *
     * @worldMutation
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     *
     * @worldMutation
     *
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     *
     * @worldMutation
     *
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     * @seeExample simpleHttpRequest.ts
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}