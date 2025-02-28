/* IMPORT */ import { minecraftserveradmin } from '../index';

/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @seeExample simpleHttpRequest.ts
 */
export class HttpHeader {
    /**
     * @remarks
     * Key of the HTTP header.
     *
     * @earlyExecution
     *
     */
    key: string;
    /**
     * @remarks
     * Value of the HTTP header.
     *
     * @earlyExecution
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}