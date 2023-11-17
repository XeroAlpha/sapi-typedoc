/* IMPORT */ import { HttpHeader, HttpRequest } from '../index';

/**
 * 表示一个 HTTP 响应。包含了请求及对应响应的相关信息。
 * 
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    private constructor();
    /**
     * @remarks
     * 响应的主体内容。
     * 
     * Body content of the HTTP response.
     *
     */
    readonly body: string;
    /**
     * @remarks
     * 通过请求返回的响应标头集合。
     * 
     * A collection of HTTP response headers returned from the
     * request.
     *
     */
    readonly headers: HttpHeader[];
    /**
     * @remarks
     * 该响应对应的请求参数信息。
     * 
     * Information that was used to formulate the HTTP response
     * that this object represents.
     *
     */
    readonly request: HttpRequest;
    /**
     * @remarks
     * 请求响应的状态代码。例如，404 表示未找到资源，500 则表示服务器内部错误。
     * 
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     *
     */
    readonly status: number;
}