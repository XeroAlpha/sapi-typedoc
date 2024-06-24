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
 * 包含了用于管理基岩版专用服务器的类型。
 * 这部分类型使基岩版专用服务器从所在目录中的 JSON 文件中读取变量与机密变量。
 * 这部分类型不可用于 Minecraft 客户端。
 * 
 * Contains types related to administering a Bedrock Dedicated
 * Server. These types allow for the configuration of variables
 * and secrets in JSON files in the Bedrock Dedicated Server
 * folder. These types cannot be used on Minecraft clients.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-admin",
 *   "version": "1.0.0-beta.1.21.10-preview.23"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
/**
 * 表示一段机密字符串的占位符。
 * 脚本无法访问或修改机密字符串的内容，
 * 此对象仅仅是一个占位符。
 * 
 * This represents a placeholder object that represents a
 * secret string. The contents of that string are not available
 * to script; this object is just a placeholder.
 */
export class SecretString {
    constructor(value: string);
}

/**
 * 表示在专用服务器配置中定义的服务器机密变量的集合。
 * 
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
 *
 * getPlayerProfile('dark navi');
 * ```
 */
export class ServerSecrets {
    private constructor();
    /**
     * @remarks
     * 已配置且可用的服务器机密变量名称组成的数组。
     * 
     * A list of available, configured server secrets.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * 以占位符形式返回在专用服务器配置 JSON 文件中定义的指定机密变量。
     * 在特定的对象（例如 HttpHeader）中，机密变量占位符会在执行时被替换为实际的值，但脚本本身是无法访问该值的。
     * 
     * Returns a SecretString that is a placeholder for a secret
     * configured in a JSON file. In certain objects, like an
     * HttpHeader, this Secret is resolved at the time of execution
     * but is not made available to the script environment.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    get(name: string): SecretString | undefined;
}

/**
 * 表示在专用服务器配置中定义的服务器变量的集合。
 * 
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
 *
 * getPlayerProfile('dark navi');
 * ```
 */
export class ServerVariables {
    private constructor();
    /**
     * @remarks
     * 已配置且可用的服务器变量名称组成的数组。
     * 
     * A list of available, configured server variables.
     *
     */
    readonly names: string[];
    /**
     * @remarks
     * 返回在专用服务器配置 JSON 文件中定义的指定变量的值。
     * 
     * Returns the value of variable that has been configured in a
     * dedicated server configuration JSON file.
     *
     * 无法在只读模式下调用此函数，详见 {@link WorldBeforeEvents}。
     *
     */
    get(name: string): any | undefined;
}

/**
 * @remarks
 * 表示全局可访问的专用服务器配置中的机密变量列表。
 * 
 * A globally available object that returns a list of
 * dedicated-server configured secrets.
 *
 */
export const secrets: ServerSecrets;
/**
 * @remarks
 * 表示全局可访问的专用服务器配置中的变量列表。
 * 
 * A globally available object that returns a list of
 * dedicated-server configured variables.
 *
 */
export const variables: ServerVariables;
