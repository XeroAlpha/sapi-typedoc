/* IMPORT */ import { VanillaEntityIdentifier } from '../index';

/**
 * @beta
 */
export type EntityIdentifierType<T> = [T] extends [never]
    ? VanillaEntityIdentifier
    : T extends string
      ? VanillaEntityIdentifier | T
      : never;