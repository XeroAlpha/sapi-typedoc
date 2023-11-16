// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * `@minecraft/server-net` 模块包含了用于发起基于 HTTP 的请求的类型。
 * 此模块仅可用于基岩版专用服务器。
 * 
 * The `@minecraft/server-net` module contains types for
 * executing HTTP-based requests. This module can only be used
 * on Bedrock Dedicated Server.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-net",
 *   "version": "1.0.0-beta.1.20.60-preview.20"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserveradmin from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * 表示 HTTP DELETE 请求。
     * DELETE 通常用于描述删除指定的资源。
     * 
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * 表示 HTTP GET 请求。
     * GET 请求通常用于获取指定资源的信息。
     * 
     * Represents the method for an HTTP PUT request. POST requests
     * are commonly used to create a new resource that is a
     * subordinate of the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * 表示 HTTP HEAD 请求。
     * HEAD 请求类似于 GET 请求，但通常用于仅需要获取指定资源的 HTTP 响应标头，不需要获取响应主体的情况。
     * 
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * 表示 HTTP POST 请求。
     * POST 请求通常用于在指定 URI 下创建新资源。
     * 
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * 表示 HTTP PUT 请求。
     * PUT 请求通常用于更新某个已存在于资源集合中的资源。
     * 
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}

export class HttpClient {
    private constructor();
    /**
     * @remarks
     * 取消所有尚未完成的请求。
     * 
     * Cancels all pending requests.
     * @param reason 提供给请求对应的 Promise 的 reject 原因。
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * 发起一个 HTTP GET 请求。
     * 
     * Performs a simple HTTP get request.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/**
 * 表示一个请求标头，即包含了请求元数据的键值对。
 * 
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 */
export class HttpHeader {
    /**
     * @remarks
     * 请求标头的键。
     * 
     * Key of the HTTP header.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    key: string;
    /**
     * @remarks
     * 请求标头的值。
     * 
     * Value of the HTTP header.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

/**
 * 包含构成 HTTP 请求所需的参数。主要用于发起请求。
 * 
 * Main object for structuring a request.
 */
export class HttpRequest {
    /**
     * @remarks
     * 请求的携带的主体负载内容。
     * 
     * Content of the body of the HTTP request.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    body: string;
    /**
     * @remarks
     * 该请求的请求标头集合。
     * 
     * A collection of HTTP headers to add to the outbound request.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
     *
     */
    timeout: number;
    /**
     * @remarks
     * 请求访问的资源 URI。
     * 
     * The HTTP resource to access.
     *
     * 无法在只读模式下修改此属性，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * 将请求的主体负载内容设定为指定内容。
     * 
     * Updates the content of the body of the HTTP request.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * 使用指定的请求标头集合增加或替换请求中指定的请求标头。
     * 
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
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
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * 设置该请求的最大超时时间，单位为秒。
     * 
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    setTimeout(timeout: number): HttpRequest;
}

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

export const http: HttpClient;
