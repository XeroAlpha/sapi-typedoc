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
     * 取消所有尚未完成的请求。
     * 
     * Cancels all pending requests.
     * @param reason 提供给请求对应的 Promise 的 reject 原因。
     *
     * This function can't be called in read-only mode.
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * 发起一个 HTTP GET 请求。
     * 
     * Performs a simple HTTP get request.
     *
     * This function can't be called in read-only mode.
     *
     * @param uri
     * 请求的 URL。
     * 
     * URL to make an HTTP Request to.
     * @returns
     * 解析到对应响应的 Promise。
     * 
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * 发起一个 HTTP 请求。
     * Performs an HTTP request.
     *
     * This function can't be called in read-only mode.
     *
     * @param config
     * 用于发起请求的配置对象。
     * 
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * 解析到对应响应的 Promise。
     * 
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