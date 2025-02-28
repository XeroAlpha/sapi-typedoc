/* IMPORT */ import { BlockComponent, BlockComponentTypeMap } from '../index';

/**
 * @rc
 */
export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockComponent;