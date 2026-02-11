export enum HttpRequestMethod {
    /**
     * @remarks
     * Represents the method for an HTTP DELETE request. DELETE
     * requests are used to delete the specified resource from the
     * server.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * Represents the method for an HTTP GET request. GET requests
     * are commonly used to retrieve data from the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * Represents the method for an HTTP PATCH request. PATCH
     * requests are commonly used to apply partial modifications to
     * a resource.
     *
     */
    Patch = 'Patch',
    /**
     * @remarks
     * Represents the method for an HTTP POST request. POST
     * requests are commonly used to submit data to be processed to
     * the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}
