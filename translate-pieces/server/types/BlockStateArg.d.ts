/* IMPORT */ import { BlockPermutation, BlockStateMapping, MinecraftBlockTypes } from '../index';

/**
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 */
export type BlockStateArg<T> = T extends `${MinecraftBlockTypes}`
    ? T extends keyof BlockStateMapping
        ? BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;