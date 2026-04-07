import { variables, secrets } from "@minecraft/server-admin";
import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from "@minecraft/server-net";

const serverUrl = variables.get('serverEndpoint');

function getPlayerProfile(playerId: string): Promise<HttpResponse> {
    const req = new HttpRequest(serverUrl + 'getPlayerProfile');

    req.body = JSON.stringify({
        playerId,
    });

    const authTokenSec = secrets.get('authtoken');

    if (!authTokenSec) {
        throw new Error('authtoken secret not defined.');
    }

    req.method = HttpRequestMethod.Post;
    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];

    return http.request(req);
}
