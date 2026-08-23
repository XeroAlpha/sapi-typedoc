/* IMPORT */ import { BlockPermutation } from '..';
/* IMPORT */ import { BlockStateMapping, MinecraftBlockTypes } from '../../vanilla-data';

/**
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types.
 */
export type BlockStateArg<T> = T extends `${MinecraftBlockTypes}`
    ? T extends keyof BlockStateMapping
        ? BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;
