/* IMPORT */ import { HttpRequest, HttpResponse } from '../index';

/**
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *     const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *     req.body = JSON.stringify({
 *         score: 22,
 *     });
 *
 *     req.method = HttpRequestMethod.Post;
 *     req.headers = [
 *         new HttpHeader('Content-Type', 'application/json'),
 *         new HttpHeader('auth', 'my-auth-token'),
 *     ];
 *
 *     await http.request(req);
 * }
 * ```
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * Cancels all pending requests.
     *
     * This function can't be called in read-only mode.
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     *
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
     *
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     * @example simpleHttpRequest.ts
     * ```typescript
     * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
     *
     * async function updateScore() {
     *     const req = new HttpRequest('http://localhost:3000/updateScore');
     *
     *     req.body = JSON.stringify({
     *         score: 22,
     *     });
     *
     *     req.method = HttpRequestMethod.Post;
     *     req.headers = [
     *         new HttpHeader('Content-Type', 'application/json'),
     *         new HttpHeader('auth', 'my-auth-token'),
     *     ];
     *
     *     await http.request(req);
     * }
     * ```
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}