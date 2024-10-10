/* IMPORT */ import { BlockPermutation, minecraftvanilladata } from '../index';

/**
 * @beta
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;