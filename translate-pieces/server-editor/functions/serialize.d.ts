/* IMPORT */ import { registerSerializationForType } from '../index';

/**
 * @remarks
 * Serialize anything, defaults to the same behavior as
 * JSON.stringify but will use custom serializers passed into
 * {@link registerSerializationForType}.
 *
 */
export declare function serialize(obj: unknown): string;