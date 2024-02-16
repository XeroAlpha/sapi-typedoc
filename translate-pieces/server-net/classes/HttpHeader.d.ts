/* IMPORT */ import { minecraftserveradmin } from '../index';

/**
 * 表示一个请求标头，即包含了请求元数据的键值对。
 * 
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
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
export class HttpHeader {
    /**
     * @remarks
     * 请求标头的键。
     * 
     * Key of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     *
     */
    key: string;
    /**
     * @remarks
     * 请求标头的值。
     * 
     * Value of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}