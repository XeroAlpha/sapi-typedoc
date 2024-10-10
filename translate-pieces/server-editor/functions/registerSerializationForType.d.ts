/* IMPORT */ import { deserialize, serialize } from '../index';

/**
 * @remarks
 * Register a type to have custom serialization/deserialization
 * when using {@link serialize} and {@link deserialize}.
 *
 */
export declare function registerSerializationForType<T>(
    typeConstructor: Function,
    name: string,
    serializer: (obj: T) => Record<string, unknown>,
    deserializer: (vals: Record<string, unknown>) => T,
): void;