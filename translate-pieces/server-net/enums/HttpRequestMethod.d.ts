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
