/**
 * An enum representing the reasons why a form was rejected.
 */
export enum FormRejectReason {
    /**
     * @remarks
     * The form was rejected because the response from the client
     * was malformed or could not be parsed.
     *
     */
    MalformedResponse = 'MalformedResponse',
    /**
     * @remarks
     * The form was rejected because the player quit the game
     * before responding.
     *
     */
    PlayerQuit = 'PlayerQuit',
    /**
     * @remarks
     * The form was rejected because the server shut down before
     * the player responded.
     *
     */
    ServerShutdown = 'ServerShutdown',
}
