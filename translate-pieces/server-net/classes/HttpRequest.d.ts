/* IMPORT */ import { HttpHeader, HttpRequestMethod, minecraftserveradmin } from '../index';

/**
 * Main object for structuring a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpRequest {
    /**
     * @remarks
     * Content of the body of the HTTP request.
     *
     * @worldMutation
     *
     */
    body: string;
    /**
     * @remarks
     * A collection of HTTP headers to add to the outbound request.
     *
     * @worldMutation
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * @worldMutation
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * @worldMutation
     *
     */
    timeout: number;
    /**
     * @remarks
     * The HTTP resource to access.
     *
     * @worldMutation
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * @worldMutation
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     *
     * @worldMutation
     *
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * @worldMutation
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * @worldMutation
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * @worldMutation
     *
     */
    setTimeout(timeout: number): HttpRequest;
}