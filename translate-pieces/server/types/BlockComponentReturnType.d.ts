/* IMPORT */ import { BlockComponent, BlockComponentTypeMap } from '../index';

export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockComponent;