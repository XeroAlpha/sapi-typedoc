/* IMPORT */ import { HttpHeader, HttpRequestMethod, minecraftserveradmin } from '../index';

/**
 * 包含构成 HTTP 请求所需的参数。主要用于发起请求。
 * 
 * Main object for structuring a request.
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
export class HttpRequest {
    /**
     * @remarks
     * 请求的携带的主体负载内容。
     * 
     * Content of the body of the HTTP request.
     *
     * This property can't be edited in read-only mode.
     *
     */
    body: string;
    /**
     * @remarks
     * 该请求的请求标头集合。
     * 
     * A collection of HTTP headers to add to the outbound request.
     *
     * This property can't be edited in read-only mode.
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * 该请求的请求方法（例如 GET、PUT 或 PATCH）。
     * 
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * This property can't be edited in read-only mode.
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * 在请求被视为超时而取消前的最大时长，单位为秒。
     * 
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * This property can't be edited in read-only mode.
     *
     */
    timeout: number;
    /**
     * @remarks
     * 请求访问的资源 URI。
     * 
     * The HTTP resource to access.
     *
     * This property can't be edited in read-only mode.
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * 向当前请求中增加一个请求标头。
     * 
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * This function can't be called in read-only mode.
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * 将请求的主体负载内容设定为指定内容。
     * 
     * Updates the content of the body of the HTTP request.
     *
     * This function can't be called in read-only mode.
     *
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * 使用指定的请求标头集合增加或替换请求中指定的请求标头。
     * 
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * This function can't be called in read-only mode.
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * 设置该请求的请求方法（例如 GET、PUT 或 PATCH）。
     * 
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * This function can't be called in read-only mode.
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * 设置该请求的最大超时时间，单位为秒。
     * 
     * This function can't be called in read-only mode.
     *
     */
    setTimeout(timeout: number): HttpRequest;
}