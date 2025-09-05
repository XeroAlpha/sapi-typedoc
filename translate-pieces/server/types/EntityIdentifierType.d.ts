/* IMPORT */ import { VanillaEntityIdentifier } from '..';

/**
 * @beta
 */
export type EntityIdentifierType<T> = [T] extends [never]
    ? VanillaEntityIdentifier
    : T extends string
      ? VanillaEntityIdentifier | T
      : never;
