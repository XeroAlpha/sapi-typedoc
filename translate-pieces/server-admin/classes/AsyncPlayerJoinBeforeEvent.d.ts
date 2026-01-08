/* IMPORT */ import { DisconnectedError } from '..';

/**
 * The data available before a player joins the world.
 */
export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The player's name
     *
     */
    readonly name: string;
    /**
     * @remarks
     * An identifier that can be used to identify a player across
     * sessions.
     *
     */
    readonly persistentId: string;
    /**
     * @remarks
     * Call this to explicitly allow the player to join the server.
     * This is useful when player joining is disabled
     * (`allow-player-joining` is set to `false` when playing on
     * dedicated server).
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    allowJoin(): void;
    /**
     * @remarks
     * Call this to disallow the player from joining the server.
     * This is useful for preventing unauthorized access to the
     * server.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disallowJoin(reason?: string): void;
    /**
     * @remarks
     * Deprecated - use {@link disallowJoin} instead.Call this to
     * disconnect a player. They will be allowed to try to join
     * again. They will be allowed to try to join again after being
     * disconnected.
     *
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    /**
     * @remarks
     * Will return true if the player is still waiting to join the
     * world. If they disconnect then it will return false.
     *
     */
    isValid(): boolean;
}
