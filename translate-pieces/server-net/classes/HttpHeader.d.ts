/* IMPORT */ import { minecraftserveradmin } from '../index';

/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 */
export class HttpHeader {
    /**
     * @remarks
     * Key of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     *
     */
    key: string;
    /**
     * @remarks
     * Value of the HTTP header.
     *
     * This property can't be edited in read-only mode.
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}