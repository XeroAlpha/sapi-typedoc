/* IMPORT */ import { minecraftserveradmin } from '../index';

/**
 * 表示一个请求标头，即包含了请求元数据的键值对。
 * 
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpHeader {
    /**
     * @remarks
     * 请求标头的键。
     * 
     * Key of the HTTP header.
     *
     * @earlyExecution
     *
     */
    key: string;
    /**
     * @remarks
     * 请求标头的值。
     * 
     * Value of the HTTP header.
     *
     * @earlyExecution
     *
     */
    value: minecraftserveradmin.SecretString | string;
    /**
     * @remarks
     * @worldMutation
     *
     */
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}