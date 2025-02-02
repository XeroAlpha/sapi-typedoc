/* IMPORT */ import { BlockPermutation, minecraftvanilladata } from '../index';

/**
 * @beta
 * Type alias used by the {@link BlockPermutation} matches and
 * resolve functions to narrow block state argument types to
 * those mapped by {@link
 * @minecraft/vanilla-data.BlockStateMapping}.
 * 
 * 表示 {@link BlockPermutation} 的匹配和解析函数使用的类型别名，用于将方块状态参数类型缩小到由 {@link @minecraft/vanilla-data.BlockStateMapping} 映射的类型。
 */
export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}`
    ? T extends keyof minecraftvanilladata.BlockStateMapping
        ? minecraftvanilladata.BlockStateMapping[T]
        : never
    : Record<string, boolean | number | string>;