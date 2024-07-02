/* IMPORT */ import { SecretString } from '../index';

/**
 * A collection of server secrets defined in dedicated server
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
export class ServerSecrets {
    private constructor();
    /**
     * @remarks
     * A list of available, configured server secrets.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     *
     * This function can't be called in read-only mode.
     *
     */
    get(name: string): SecretString | undefined;
}