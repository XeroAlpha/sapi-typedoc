/**
 * A collection of server variables defined in dedicated server
 * configuration.
 * @example getPlayerProfile.ts
 * ```typescript
 * import { variables, secrets } from "@minecraft/server-admin";
 * import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from "@minecraft/server-net";
 *
 * const serverUrl = variables.get('serverEndpoint');
 *
 * function getPlayerProfile(playerId: string): Promise<HttpResponse> {
 *     const req = new HttpRequest(serverUrl + 'getPlayerProfile');
 *
 *     req.body = JSON.stringify({
 *         playerId,
 *     });
 *
 *     const authTokenSec = secrets.get('authtoken');
 *
 *     if (!authTokenSec) {
 *         throw new Error('authtoken secret not defined.');
 *     }
 *
 *     req.method = HttpRequestMethod.Post;
 *     req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];
 *
 *     return http.request(req);
 * }
 * ```
 */
export class ServerVariables {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server variables.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     *
     * This function can't be called in read-only mode.
     *
     */
    get(name: string): any | undefined;
}