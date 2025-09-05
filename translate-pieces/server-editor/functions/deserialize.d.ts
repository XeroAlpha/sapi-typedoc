/* IMPORT */ import { registerSerializationForType } from '..';

/**
 * @remarks
 * Deserialize anything, defaults to the same behavior as
 * JSON.parse but will use custom deserializers passed into
 * {@link registerSerializationForType}.
 *
 */
export declare function deserialize(s: string): unknown;
