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
 * Contains types related to administering a Bedrock Dedicated
 * Server. These types allow for the configuration of variables
 * and secrets in JSON files in the Bedrock Dedicated Server
 * folder. These types cannot be used on Minecraft clients or
 * within Minecraft Realms.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-admin",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import { Player } from '@minecraft/server';
export class AdminBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This event is fired before a player joins the world. Unlike
     * other before events, this event is a before event that you
     * can delay several ticks by not resolving the promise
     * returned in the subscribe function. If the promise is
     * rejected, the client is rejected.
     *
     */
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}

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

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Add a callback that's ran before a player joins the world.
     * This callback returns a promise and the player won't join
     * until that promise is resolved. If the promise is not
     * resolved within a reasonable time, the player joining will
     * be rejected. If the player joining leaves/disconnects, then
     * the event data's isValid will return false.
     *
     */
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}

/**
 * This represents a placeholder object that represents a
 * secret string. The contents of that string are not available
 * to script; this object is just a placeholder.
 */
export class SecretString {
    constructor(value: string);
}

/**
 * A collection of server secrets defined in dedicated server
 * configuration.
 * @seeExample getPlayerProfile.ts
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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    get(name: string): SecretString | undefined;
}

/**
 * A collection of server variables defined in dedicated server
 * configuration.
 * @seeExample getPlayerProfile.ts
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
     * @worldMutation
     *
     * @earlyExecution
     *
     */
    get(name: string): unknown | undefined;
}

/**
 * Options when transferring a player to a server that supports
 * direct host/port connections.
 */
export interface TransferPlayerIpPortOptions {
    /**
     * @remarks
     * Hostname of the destination server.
     *
     */
    hostname: string;
    /**
     * @remarks
     * Port of the destination server.
     *
     */
    port: number;
}

/**
 * Options when transferring a player to a server that supports
 * NetherNet connections.
 */
export interface TransferPlayerNetherNetOptions {
    /**
     * @remarks
     * NetherNet ID of the destination server.
     *
     */
    netherNetId: string;
}

/**
 * An error that is thrown when trying to interact with a join
 * event and the player is disconnected.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks
     * The id of the player that was disconnected.
     *
     * @earlyExecution
     *
     */
    readonly id: string;
}

/**
 * @remarks
 * Transfer player to another server.
 *
 * @worldMutation
 *
 * @param player
 * Player to transfer.
 * @param options
 * Options for where to send the player.
 * @throws This function can throw errors.
 */
export function transferPlayer(
    player: Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;
export const beforeEvents: AdminBeforeEvents;
/**
 * @remarks
 * A globally available object that returns a list of
 * dedicated-server configured secrets.
 *
 */
export const secrets: ServerSecrets;
/**
 * @remarks
 * A globally available object that returns a list of
 * dedicated-server configured variables.
 *
 */
export const variables: ServerVariables;
